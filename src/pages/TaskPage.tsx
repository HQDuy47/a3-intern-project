/* eslint-disable space-before-function-paren */
import { defineComponent } from 'vue'
import TaskItem from '../components/TaskItem'
import { useTaskStore } from '../store/taskStore'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'TaskPage',
  setup() {
    const taskStore = useTaskStore()
    const { tasks } = storeToRefs(taskStore)

    const handleCheck = (id) => {
      const task = tasks.value.find((task) => task.id === id)
      if (task) {
        task.ischecked = !task.ischecked
      }
    }

    return { handleCheck, tasks }
  },
  render() {
    const { handleCheck, tasks } = this

    return (
      <div class="pt-3 flex flex-nowrap flex-col  h-full justify-start">
        <div class="px-4 flex flex-row justify-end items-center gap-2 bg-white w-full pt-3 pb-3 rounded-t-xl">
          <button class="p-2 bg-[#fff] text-xs rounded-xl shadow">
            Due Date
          </button>
          <button class="p-2 bg-[#fff] text-xs rounded-xl shadow">Stage</button>
          <button class="p-2 bg-[#fff] text-xs rounded-xl shadow">
            Priority
          </button>
          <i class="material-icons-outlined text-[14px]">filter_list</i>
        </div>
        <hr class="solid" />
        <div class="w-full bg-[#fff] pt-4 pb-2 rounded-b-xl">
          <div class="grid grid-cols-8 gap-4 text-xs font-bold w-full items-center text-[#7f7f7fff] px-4 pb-3">
            <div>
              <p>NO.</p>
              {/* <p class="text-[#231c16ff] text-[16px]">NO.</p> */}
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
          <div class="overflow-y-auto h-[56vh] max-h-[400px]">
            {tasks.map((task, index) => (
              <div key={task.id}>
                <hr class="solid" />
                <TaskItem
                  index={index}
                  task={task}
                  onCheck={() => handleCheck(task.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
})
