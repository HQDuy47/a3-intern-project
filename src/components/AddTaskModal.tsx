import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'AddTaskModal',
  props: {
    showModal: {
      type: Boolean,
      required: true
    },
    onClose: {
      type: Function as PropType<() => void>,
      required: true
    }
  },
  setup(props) {
    return () => (
      <q-dialog v-model={props.showModal}>
        <div class="bg-[#f6f5f3]">
          <div class="h-[440px] w-[400px]  flex flex-col justify-start">
            <div class="flex flex-row justify-between items-center p-4">
              <i class="material-icons-outlined cursor-pointer text-[22px]">
                task
              </i>
              <div class="w-[80%]">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Name of task"
                  class="bg-[#fff] px-2 rounded-lg w-full py-1"
                />
              </div>
              <i
                class="material-icons-outlined cursor-pointer"
                onClick={props.onClose}
              >
                close
              </i>
            </div>
            <hr class="solid" />
            <div class="mt-2 px-4 py-4 flex flex-col justify-start gap-4 ">
              {/* PRIORIRY */}
              <div class="flex flex-row items-center w-full">
                <div class="basis-2/5 flex flex-row items-center gap-2">
                  <i class="material-icons-outlined cursor-pointer">timer</i>
                  <p class="text-[12px]">Day</p>
                </div>
                <div class="flex-1 text-[12px] font-semibold">
                  <div class="bg-transparent border-[1.25px] border-solid border-black py-[6px] px-2 rounded-full text-[10px] font-semibold inline-block cursor-pointer">
                    Today
                  </div>
                </div>
              </div>
              {/* PRIORITY */}
              <div class="flex flex-row items-center w-full">
                <div class="basis-2/5 flex flex-row items-center gap-2">
                  <i class="material-icons-outlined cursor-pointer">flag</i>
                  <p class="text-[12px]">Priority</p>
                </div>
                <div class="flex-1 text-[12px] font-semibold">
                  <p>+ Add priority</p>
                </div>
              </div>
              {/* TYPE */}
              <div class="flex flex-row items-center w-full">
                <div class="basis-2/5 flex flex-row items-center gap-2">
                  <i class="material-icons-outlined cursor-pointer">
                    checklist
                  </i>
                  <p class="text-[12px]">Type</p>
                </div>
                <div class="flex-1 text-[12px] font-semibold">
                  <p>+ Add type</p>
                </div>
              </div>
              {/* TYPE */}
              <div class="flex flex-row items-center w-full">
                <div class="basis-2/5 flex flex-row items-center gap-2">
                  <i class="material-icons-outlined cursor-pointer">person</i>
                  <p class="text-[12px]">Type</p>
                </div>
                <div class="flex-1 text-[12px] font-semibold">
                  <p>+ Add assignee</p>
                </div>
              </div>
            </div>

            <div class="px-4 text-[14px] font-semibold w-full">
              <p>Description</p>
              <div class="w-full mt-2 rounded-3xl">
                <textarea
                  name=""
                  id=""
                  rows="4"
                  style="resize: none"
                  class="w-full text-sm bg-[#fff] px-2 rounded-lg py-1 font-normal"
                ></textarea>
              </div>
            </div>
            <hr class="solid mt-4" />
            <div class="flex flex-row justify-end items-center px-4 pt-4">
              <button
                class="bg-[#fedf51] px-3 py-[6px] text-center rounded-full text-xs font-medium border border-black hover:bg-[#ffe574]"
                onClick={props.onClose}
              >
                Create task
              </button>
            </div>
          </div>
        </div>
      </q-dialog>
    )
  }
})
