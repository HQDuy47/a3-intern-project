import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Task } from '../interfaces/Task'
import {
  GET_TOTAL_TASKS,
  ADD_TASK,
  UPDATE_TASK_DUEDATE_STAGE,
  UPDATE_TASK_ISCHECKED,
  DELETE_TASK,
  GET_TASKS,
  GET_SEARCH_SUGGESTIONS
} from '../graphql/task'
import { fetchDataWithAuth } from '../utils/hasuraClient'
import { Toast } from '../utils/Toast'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<Task[]>([])
  const page = ref(1)
  const pageSize = ref(7)
  const totalTasks = ref(0)
  const searchTerm = ref('')
  const suggestions = ref<Task[]>([])

  const getTotalTasks = async () => {
    try {
      const res = await fetchDataWithAuth(GET_TOTAL_TASKS)
      totalTasks.value = res.data.tasks_aggregate?.aggregate?.count || 0
    } catch (error) {
      console.log(error)
    }
  }

  const getTasks = async (page = 1, pageSize = 10, search = '') => {
    const offset = (page - 1) * pageSize
    try {
      const res = await fetchDataWithAuth(GET_TASKS, {
        limit: pageSize,
        offset,
        searchTerm: `%${search}%`
      })
      tasks.value = res.data.tasks
    } catch (error) {
      console.log(error)
    }
  }

  const addTask = async (taskData: {
    assignee?: string
    description?: string
    duedate?: string
    priority?: string
    stage?: string
    title?: string
    type?: string
  }) => {
    try {
      await fetchDataWithAuth(ADD_TASK, taskData)
      const newTask: Task = {
        id: '', // provide a default or generated id
        title: taskData.title || '',
        description: taskData.description || '',
        assignee: taskData.assignee || '',
        team: '',
        type: taskData.type || '',
        stage: taskData.stage || '',
        priority: taskData.priority || '',
        duedate: taskData.duedate || '',
        ischecked: false
      }
      tasks.value = [...tasks.value, newTask]
      totalTasks.value += 1
      if (tasks.value.length > pageSize.value) {
        nextPage()
      }
      Toast('Add task success', 'positive')
    } catch (error) {
      console.log(error)
    }
  }

  const updateTaskDuedateStage = async (
    id: string,
    duedate: string,
    stage: string
  ) => {
    try {
      await fetchDataWithAuth(UPDATE_TASK_DUEDATE_STAGE, { id, duedate, stage })
      const taskIndex = tasks.value.findIndex((task) => task.id === id)
      tasks.value[taskIndex].duedate = duedate
      tasks.value[taskIndex].stage = stage
      Toast('Update task success', 'positive')
    } catch (error) {
      console.log(error)
    }
  }

  const toggleTaskCheck = async (taskId, currentIsChecked) => {
    const newIsChecked = !currentIsChecked

    try {
      const response = await fetchDataWithAuth(UPDATE_TASK_ISCHECKED, {
        id: taskId,
        ischecked: newIsChecked
      })

      if (response.data.update_tasks.affected_rows > 0) {
        const taskIndex = tasks.value.findIndex((task) => task.id === taskId)
        tasks.value[taskIndex].ischecked = newIsChecked
        Toast('Task check status updated', 'positive')
      }
    } catch (error) {
      console.error('Error updating task check status:', error)
    }
  }

  const deleteTaskById = async (id: string) => {
    try {
      await fetchDataWithAuth(DELETE_TASK, { id })
      tasks.value = tasks.value.filter((task) => task.id !== id)
      totalTasks.value -= 1
      if (tasks.value.length < 1) {
        console.log(tasks.value.length, pageSize.value)
        previousPage()
      }
      Toast('Task deleted', 'positive')
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  const nextPage = () => {
    if (page.value * pageSize.value < totalTasks.value) {
      page.value += 1
      getTasks(page.value, pageSize.value)
    }
  }

  const previousPage = () => {
    if (page.value > 1) {
      page.value -= 1
      getTasks(page.value, pageSize.value)
    }
  }

  const getSearchSuggestions = async (term) => {
    try {
      const res = await fetchDataWithAuth(GET_SEARCH_SUGGESTIONS, {
        searchTerm: `%${term}%`
      })
      suggestions.value = res.data.tasks
    } catch (error) {
      console.log(error)
    }
  }

  const setSearchTerm = (term) => {
    searchTerm.value = term
    getTasks(page.value, pageSize.value, term)
    if (term) {
      totalTasks.value = tasks.value.length
    } else {
      getTotalTasks()
    }
  }

  const setSuggestions = (suggestions) => {
    getSearchSuggestions(suggestions)
  }
  // onMounted(() => {
  //   getTotalTasks() // Chỉ gọi một lần khi store khởi tạo
  //   getTasks(page.value, pageSize.value) // Chỉ gọi một lần khi store khởi tạo
  // })

  // // Watchers để tự động gọi `getTasks` khi `page` hoặc `pageSize` thay đổi
  // watch([page, pageSize], () => {
  //   getTasks(page.value, pageSize.value)
  // })

  return {
    tasks,
    addTask,
    updateTaskDuedateStage,
    toggleTaskCheck,
    deleteTaskById,
    page,
    totalTasks,
    pageSize,
    nextPage,
    previousPage,
    getTotalTasks,
    getTasks,
    searchTerm,
    setSearchTerm,
    suggestions,
    setSuggestions
  }
})
