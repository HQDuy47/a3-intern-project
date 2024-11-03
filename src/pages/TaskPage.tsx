/* eslint-disable indent */
/* eslint-disable multiline-ternary */
/* eslint-disable space-before-function-paren */
import { defineComponent, onMounted, ref } from 'vue'
import TaskItem from '../components/TaskItem'
import { useTaskStore } from '../store/taskStore'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'TaskPage',
  setup() {
    const taskStore = useTaskStore()
    const { tasks, page, totalTasks, pageSize, sortOrder, loading } =
      storeToRefs(taskStore)
    const fieldSort = ref('duedate')

    onMounted(async () => {
      await taskStore.getTotalTasks()
      await taskStore.getTasks(page.value, pageSize.value)
    })

    const handleSelectSort = (field: string) => {
      fieldSort.value = field
    }

    const handleSortChange = async (e) => {
      sortOrder.value = e.target.value
      taskStore.setFieldSort(fieldSort.value)
      taskStore.setSortOrder(sortOrder.value)
    }

    const handleCheck = async (id) => {
      try {
        const task = tasks.value.find((task) => task.id === id)
        if (task) {
          await taskStore.toggleTaskCheck(id, task.ischecked)
        }
      } catch (error) {
        console.error('Failed to update task:', error)
      }
    }

    const handleNextPage = () => {
      taskStore.nextPage()
    }

    const handlePreviousPage = () => {
      taskStore.previousPage()
    }

    return {
      handleCheck,
      tasks,
      page,
      totalTasks,
      pageSize,
      handleNextPage,
      handlePreviousPage,
      handleSelectSort,
      fieldSort,
      handleSortChange,
      loading
    }
  },
  render() {
    const {
      handleCheck,
      tasks,
      page,
      totalTasks,
      pageSize,
      handleNextPage,
      handlePreviousPage,
      handleSelectSort,
      fieldSort,
      handleSortChange,
      loading
    } = this

    const totalPages = Math.ceil(totalTasks / pageSize)

    return (
      <div class="pt-3 flex flex-nowrap flex-col  h-full justify-start">
        <div class="px-4 flex flex-row justify-end items-center gap-2 bg-white w-full pt-3 pb-3 rounded-t-xl">
          <button
            onClick={() => handleSelectSort('duedate')}
            class={`${
              fieldSort === 'duedate' ? 'bg-gray-200' : ''
            } py-2 px-3 bg-[#fff] text-xs rounded-lg shadow hover:bg-gray-50`}
          >
            Due Date
          </button>
          <button
            onClick={() => handleSelectSort('stage')}
            class={`${
              fieldSort === 'stage' ? 'bg-gray-200' : ''
            } py-2 px-3 bg-[#fff] text-xs rounded-lg shadow hover:bg-gray-50`}
          >
            Stage
          </button>
          <button
            onClick={() => handleSelectSort('priority')}
            class={`${
              fieldSort === 'priority' ? 'bg-gray-200' : ''
            } py-2 px-3 bg-[#fff] text-xs rounded-lg shadow hover:bg-gray-50`}
          >
            Priority
          </button>
          <select
            onChange={(e) => handleSortChange(e)}
            class="p-2 bg-[#fff] text-xs rounded-lg shadow cursor-pointer active:outline-none"
          >
            <option value="" selected disabled hidden>
              Sort by
            </option>
            <option value="asc" class="bg-[#fff] ">
              Ascending
            </option>
            <option value="desc" class="bg-[#fff]">
              Descending
            </option>
          </select>
          {/* <i class="material-icons-outlined text-[14px] px-1">filter_list</i> */}
        </div>
        <hr class="solid" />
        <div class="w-full bg-[#fff] pt-4 pb-2 rounded-b-xl">
          <div class="grid grid-cols-8 gap-4 text-xs font-bold w-full items-center text-[#7f7f7fff] px-4 pb-3">
            <div>
              <p>NO.</p>
            </div>
            <div class="col-span-2">
              <p class="">TASK</p>
            </div>
            <div class="text-center">
              <p>DUE DATE</p>
            </div>
            <div class="text-center">
              <p>STAGE</p>
            </div>
            <div class="text-center">
              <p>PRIORITY</p>
            </div>
            <div class="text-center">
              <p>TYPE</p>
            </div>
            <div class="text-center">
              <p>ASSIGNEE</p>
            </div>
          </div>
          <hr class="solid" />
          <div class="overflow-y-auto h-[56vh] max-h-[400px] pt-1">
            {loading
              ? Array.from({ length: 7 }).map((_, index) => (
                  <div
                    key={index}
                    class="flex items-center space-x-4 py-2 animate-pulse"
                  >
                    <div class="h-4 w-4 bg-gray-200 rounded-full"></div>
                    <div class="flex-1 h-4 bg-gray-200 rounded"></div>
                    <div class="h-4 w-24 bg-gray-200 rounded"></div>
                    <div class="h-4 w-16 bg-gray-200 rounded"></div>
                    <div class="h-4 w-16 bg-gray-200 rounded"></div>
                    <div class="h-4 w-16 bg-gray-200 rounded"></div>
                    <div class="h-4 w-16 bg-gray-200 rounded"></div>
                  </div>
                ))
              : tasks.map((task, index) => (
                  <div key={task.id}>
                    <TaskItem
                      index={index}
                      task={task}
                      onCheck={() => handleCheck(task.id)}
                    />
                    <hr class="solid" />
                  </div>
                ))}
          </div>
          {/* Pagination Controls */}
          <div class="flex justify-end items-center px-4 pt-2 pb-2 gap-3">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1}
              class="p-2 bg-[#fff] text-xs rounded-lg shadow-sm"
            >
              Previous
            </button>
            <span class="text-sm">
              {page} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={page >= totalPages}
              class="p-2 bg-[#fedf51] text-xs rounded-lg shadow-sm"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    )
  }
})
