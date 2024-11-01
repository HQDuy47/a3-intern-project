/* eslint-disable space-before-function-paren */
import { defineComponent, ref } from 'vue'
import TaskModal from './TaskModal'
import { useTaskStore } from '../store/taskStore'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'TaskItem',
  props: {
    task: {
      type: Object,
      required: true
    },
    onCheck: {
      type: Function,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const taskStore = useTaskStore()
    const { page, pageSize } = storeToRefs(taskStore)
    const showModal = ref(false)
    const startIndex = (page.value - 1) * pageSize.value
    const displayIndex = props.index + 1 + startIndex

    const openModal = () => {
      showModal.value = true
    }

    const closeModal = () => {
      showModal.value = false
    }

    return () => (
      <div>
        <div class="grid grid-cols-8 gap-4 text-xs font-bold w-full items-center text-[#7f7f7fff] px-4 py-3 hover:bg-[#fcfcfc] cursor-pointer ">
          <div class="text-start pl-2">
            <p>{displayIndex}</p>
          </div>
          <div class="col-span-2">
            <div class="flex gap-2 flex-row items-center justify-start flex-nowrap">
              <div
                class={`p-[1px] bg-[#f6f5f3] rounded-full border-solid border-[1.25px] border-[#6d6b69] cursor-pointer flex justify-center items-center ${
                  props.task.ischecked ? '' : 'p-[8px]'
                }`}
                onClick={props.onCheck}
              >
                {props.task.ischecked && (
                  <i class="material-icons-outlined text-[14px]">check</i>
                )}
              </div>
              <p
                onClick={openModal}
                class={`${props.task.ischecked ? 'line-through' : ''} `}
              >
                {props.task.title}
              </p>
            </div>
          </div>
          <div class="text-center">
            <p class="text-[#cf984aff]">{props.task.duedate}</p>
          </div>
          <div class="text-center">
            <div
              class={`text-[#231c16ff] ${
                props.task.stage === 'In progress'
                  ? 'bg-yellow-300'
                  : props.task.stage === 'Done'
                  ? 'bg-yellow-500'
                  : 'bg-[#f7f7f7]'
              } rounded-full p-[3px]`}
            >
              <p class="font-[600] text-[10px]">{props.task.stage}</p>
            </div>
          </div>
          <div class="text-center">
            <div
              class={`text-[#231c16ff] ${
                props.task.priority === 'High'
                  ? 'bg-[#CF984A]'
                  : props.task.priority === 'Medium'
                  ? 'bg-[#DEC48F]'
                  : 'bg-[#F5E8C4]'
              } rounded-full p-[3px]`}
            >
              <p class="font-[600] text-[10px]">{props.task.priority}</p>
            </div>
          </div>
          <div class="text-center">
            <p>{props.task.type}</p>
          </div>
          <div class="text-center">
            <p>{props.task.assignee}</p>
          </div>
        </div>

        <TaskModal
          task={props.task}
          showModal={showModal.value}
          onClose={closeModal}
        />
      </div>
    )
  }
})
