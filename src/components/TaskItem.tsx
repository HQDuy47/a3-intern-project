import { defineComponent, ref } from 'vue'
import TaskModal from './TaskModal'

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
    }
  },
  setup(props) {
    const showModal = ref(false)

    const openModal = () => {
      showModal.value = true
    }

    const closeModal = () => {
      showModal.value = false
    }
    return () => (
      <div>
        <div class="grid grid-cols-8 gap-4 text-xs font-bold w-full items-center text-[#7f7f7fff] px-4 py-3 hover:bg-[#fcfcfc] cursor-pointer">
          <div class="col-span-3">
            <div class="flex gap-2 flex-row items-center justify-start">
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
              <p onClick={openModal}>{props.task.title}</p>
            </div>
          </div>
          <div class="text-center">
            <p class="text-[#cf984aff]">{props.task.dueDate}</p>
          </div>
          <div class="text-center">
            <div
              class={`text-[#231c16ff] ${
                props.task.stage === 'In progress'
                  ? 'bg-[#fedf51]'
                  : 'bg-[#f6f5f3]'
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
