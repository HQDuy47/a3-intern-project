import { defineStore } from 'pinia'
import { ref, watchEffect } from 'vue'
import { Task } from '../interfaces/Task'
import {
  GET_TASKS,
  ADD_TASK,
  UPDATE_TASK_DUEDATE_STAGE,
  UPDATE_TASK_ISCHECKED,
  DELETE_TASK
} from '../graphql/task'
import { fetchDataWithAuth } from '../utils/hasuraClient'
import { Toast } from '../utils/Toast'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<Task[]>([])

  const getTasks = async () => {
    try {
      const res = await fetchDataWithAuth(GET_TASKS)
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
      Toast('Task deleted', 'positive')
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  watchEffect(() => {
    getTasks()
  })

  return {
    tasks,
    addTask,
    updateTaskDuedateStage,
    toggleTaskCheck,
    deleteTaskById
  }
})
