/* eslint-disable space-before-function-paren */
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'TaskModal',
  props: {
    task: {
      type: Object as PropType<{
        title: string
        description: string
        type: string
        stage: string
        priority: string
        team: string
        assignee: string
      }>,
      required: true
    },
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
          <div class="h-[450px] w-[500px]  flex flex-col justify-start">
            <div class="flex flex-row justify-between items-center p-4">
              <div class="flex flex-row gap-3">
                <i class="material-icons-outlined cursor-pointer">event_note</i>
                <i class="material-icons-outlined cursor-pointer">timelapse</i>
                <i class="material-icons-outlined cursor-pointer">flag</i>
              </div>
              <i
                class="material-icons-outlined cursor-pointer"
                onClick={props.onClose}
              >
                close
              </i>
            </div>
            <hr class="solid" />
            <div class=" flex flex-col ">
              <div class=" flex flex-col">
                <div class="p-4">
                  <p class="text-xl font-semibold text-[#231c16ff]">
                    {props.task.title}
                  </p>
                </div>

                <div class="mt-2 px-4 py-1 flex flex-col justify-start gap-4">
                  {/* PRIORIRY */}
                  <div class="flex flex-row items-center w-full">
                    <div class="basis-2/5 flex flex-row items-center gap-2">
                      <i class="material-icons-outlined cursor-pointer">
                        low_priority
                      </i>
                      <p>Priority</p>
                    </div>
                    <div class="flex-1 text-sm font-semibold">
                      <div
                        class={`text-[#231c16ff] ${
                          props.task.priority === 'High'
                            ? 'bg-[#CF984A]'
                            : props.task.priority === 'Medium'
                            ? 'bg-[#DEC48F]'
                            : 'bg-[#F5E8C4]'
                        } bg-[#DEC48F] py-[2px] px-2 rounded-full text-[10px] font-semibold inline-block`}
                      >
                        {props.task.priority}
                      </div>
                    </div>
                  </div>
                  {/* ASSIGNED */}
                  <div class="flex flex-row items-center w-full">
                    <div class="basis-2/5  flex flex-row items-center gap-2">
                      <i class="material-icons-outlined cursor-pointer">
                        person
                      </i>
                      <p>Assigned</p>
                    </div>
                    <div class="flex-1 text-sm font-semibold">
                      <p>{props.task.assignee}</p>
                    </div>
                  </div>
                  {/* DUE DATE */}
                  <div class="flex flex-row w-full items-center">
                    <div class="basis-2/5 text-sm flex flex-row items-center gap-2">
                      <i class="material-icons-outlined cursor-pointer">
                        event
                      </i>
                      <p>Due Date</p>
                    </div>
                    <div class="flex-1 text-sm font-semibold">
                      <p>December 5, 2023</p>
                    </div>
                  </div>
                  {/* TYPE */}
                  <div class="flex flex-row w-full items-center">
                    <div class="basis-2/5  flex flex-row items-center gap-2">
                      <i class="material-icons-outlined cursor-pointer">
                        checklist
                      </i>
                      <p>Type</p>
                    </div>
                    <div class="flex-1 text-sm font-semibold">
                      <div class="bg-[#e3e3e3] py-1 px-2 rounded-full text-[10px] font-semibold inline-block">
                        {props.task.type}
                      </div>
                    </div>
                  </div>
                  {/* TEAM */}
                  {/* <div class="flex flex-row  w-full items-center">
                    <div class="basis-2/5  flex flex-row items-center gap-2">
                      <i class="material-icons-outlined cursor-pointer">
                        group
                      </i>
                      <p>Team</p>
                    </div>
                    <div class="flex-1 text-sm font-semibold">
                      <p>{props.task.team}</p>
                    </div>
                  </div> */}
                  {/* DESCRIPTION */}
                  <div class="flex flex-row w-full items-center ">
                    <div class="basis-2/5  flex flex-row items-center gap-2">
                      <i class="material-icons-outlined cursor-pointer">
                        description
                      </i>
                      <p>Description</p>
                    </div>
                    <div class="flex-1 text-sm font-medium">
                      <p>{props.task.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-dialog>
    )
  }
})
