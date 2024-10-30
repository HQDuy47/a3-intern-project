/* eslint-disable space-before-function-paren */
import { defineComponent, PropType, ref } from 'vue'
import { useTaskStore } from '../store/taskStore'

export default defineComponent({
  name: 'TaskModal',
  props: {
    task: {
      type: Object as PropType<{
        id: string
        title: string
        description: string
        type: string
        stage: string
        priority: string
        team: string
        assignee: string
        duedate: string
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
    const taskStore = useTaskStore()
    const currentDate = new Date().toISOString().split('T')[0]
    const showDatePicker = ref(false)
    const selectedDate = ref(props.task.duedate || currentDate)
    const newStage = ref(props.task.stage)
    const isOpen = ref(false)

    const onDateSelected = (value) => {
      selectedDate.value = value
      showDatePicker.value = false
    }

    const isDateSelectable = (date) => {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return new Date(date) >= today
    }

    const saveChanges = async () => {
      try {
        await taskStore.updateTaskDuedateStage(
          props.task.id,
          selectedDate.value,
          newStage.value
        )
        props.onClose()
      } catch (error) {
        console.error('Failed to update task:', error)
      }
    }

    const handleOpen = () => {
      isOpen.value = !isOpen.value
    }

    const handleDelete = async () => {
      try {
        await taskStore.deleteTaskById(props.task.id)
      } catch (error) {
        console.error('Failed to delete task:', error)
      }
    }

    return () => (
      <>
        <q-dialog v-model={props.showModal}>
          <div class="bg-[#f6f5f3] h-[450px] w-[500px]">
            <div class="  flex flex-col justify-start w-[100%]">
              <div class="flex flex-row justify-between items-center p-4">
                <div class="flex flex-row gap-3">
                  {/* <i class="material-icons-outlined cursor-pointer">event_note</i> */}
                  <i class="material-icons-outlined cursor-pointer">
                    timelapse
                  </i>
                  <i class="material-icons-outlined cursor-pointer">flag</i>
                  <i
                    class="material-icons-outlined cursor-pointer text-red-300"
                    onClick={handleOpen}
                  >
                    delete_forever
                  </i>
                </div>
                <i
                  class="material-icons-outlined cursor-pointer"
                  onClick={props.onClose}
                >
                  close
                </i>
              </div>
              <hr class="solid" />
              <div class=" flex flex-col pb-6">
                <div class=" flex flex-col">
                  <div class="p-4 flex flex-row justify-between items-center">
                    <p class="text-xl font-semibold text-[#231c16ff]">
                      {props.task.title}
                    </p>
                    <div>
                      <select
                        class={`${
                          newStage.value === 'In progress'
                            ? 'bg-yellow-300'
                            : newStage.value === 'Done'
                            ? 'bg-yellow-500'
                            : 'bg-[#e4e3e1]'
                        } p-2 rounded-full font-bold text-xs`}
                        v-model={newStage.value}
                      >
                        <option value="Not started" class="bg-[#fff]">
                          Not started
                        </option>
                        <option value="In progress" class="bg-[#fff]">
                          In progress
                        </option>
                        <option value="Done" class="bg-[#fff]">
                          Done
                        </option>
                      </select>
                    </div>
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
                        <div
                          onClick={() => (showDatePicker.value = true)}
                          class="cursor-pointer py-[2px] px-2 flex flex-row  flex-nowrap gap-2 border-[1.25px] border-solid border-gray-200 rounded-lg items-center w-[120px]"
                        >
                          <div class="text-[12px] font-semibold ">
                            {selectedDate.value || 'Today'}
                          </div>
                          <i class="material-icons-outlined cursor-pointer text-lg">
                            event
                          </i>

                          {/* Date Picker Dialog */}
                          <q-dialog v-model={showDatePicker.value}>
                            <q-card>
                              <q-date
                                model-value={selectedDate.value}
                                onUpdate:modelValue={onDateSelected}
                                mask="YYYY-MM-DD"
                                color="primary"
                                options={isDateSelectable}
                                flat
                              />
                              <q-separator />
                              <q-card-actions align="right">
                                <q-btn
                                  flat
                                  label="Close"
                                  color="primary"
                                  onClick={() => (showDatePicker.value = false)}
                                />
                              </q-card-actions>
                            </q-card>
                          </q-dialog>
                        </div>
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
              <hr class="solid" />
              <div class="flex flex-row justify-end items-center px-4 pt-4 gap-2">
                <button
                  onClick={props.onClose}
                  class=" px-2 py-[6px] text-center rounded-full text-sm font-medium  hover:bg-[#ecece9]"
                >
                  Cancel
                </button>
                <button
                  onClick={saveChanges}
                  class="bg-[#fedf51] px-4 py-[6px] text-center rounded-full text-sm font-medium  hover:bg-[#ffe574]"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </q-dialog>
        {isOpen.value && (
          <q-dialog v-model={isOpen.value}>
            <div class="bg-white h-40 w-72 rounded-lg shadow-lg">
              <div class="flex flex-col justify-center items-center h-full p-2">
                <p class="text-lg font-semibold text-gray-800 text-center">
                  Are you sure you want to delete this task?
                </p>
                <div class="flex gap-4 mt-6">
                  <button
                    onClick={handleOpen}
                    class="bg-gray-200 px-6 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-300 transition-colors"
                  >
                    No
                  </button>
                  <button
                    onClick={handleDelete}
                    class="bg-yellow-400 px-6 py-2 rounded-full text-sm font-medium text-gray-800 hover:bg-yellow-300 transition-colors"
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </q-dialog>
        )}
      </>
    )
  }
})
