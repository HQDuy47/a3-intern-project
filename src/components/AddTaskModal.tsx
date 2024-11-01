/* eslint-disable space-before-function-paren */
import { defineComponent, PropType, ref } from 'vue'
import { useTaskStore } from '../store/taskStore'

interface Assignee {
  label: string
  value: string
}

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
    const currentDate = new Date().toISOString().split('T')[0]
    const taskStore = useTaskStore()
    const showDatePicker = ref(false)
    const selectedDate = ref(currentDate)
    const searchTerm = ref('')
    const isOpen = ref(false)
    const title = ref('')
    const description = ref('')
    const selectedAssignee = ref<Assignee | null>(null)
    const selectedPriority = ref('')
    const selectedType = ref('')

    const titleError = ref('')
    const descriptionError = ref('')
    const assigneeError = ref('')
    const priorityError = ref('')
    const typeError = ref('')

    const availableAssignees: Assignee[] = [
      { label: 'Alice', value: 'alice' },
      { label: 'Bob', value: 'bob' },
      { label: 'Charlie', value: 'charlie' },
      { label: 'David', value: 'david' },
      { label: 'Eve', value: 'eve' }
    ]

    const filteredAssignees = ref<Assignee[]>(availableAssignees)

    const filterAssignees = () => {
      filteredAssignees.value = availableAssignees.filter((assignee) =>
        assignee.label.toLowerCase().includes(searchTerm.value.toLowerCase())
      )
    }

    const selectAssignee = (assignee: Assignee) => {
      selectedAssignee.value = assignee
      searchTerm.value = assignee.label
      isOpen.value = false
    }

    const onDateSelected = (value) => {
      selectedDate.value = value
      showDatePicker.value = false
    }

    const isDateSelectable = (date) => {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return new Date(date) >= today
    }

    const handleAddTask = () => {
      titleError.value = ''
      descriptionError.value = ''
      assigneeError.value = ''
      priorityError.value = ''
      typeError.value = ''

      let isValid = true

      if (!title.value) {
        titleError.value = 'Title is required.'
        isValid = false
      }

      if (!description.value) {
        descriptionError.value = 'Description is required.'
        isValid = false
      }

      if (!selectedAssignee.value) {
        assigneeError.value = 'Assignee is required.'
        isValid = false
      }

      if (!selectedPriority.value) {
        priorityError.value = 'Priority is required.'
        isValid = false
      }

      if (!selectedType.value) {
        typeError.value = 'Type is required.'
        isValid = false
      }

      if (isValid) {
        taskStore.addTask({
          assignee: selectedAssignee?.value?.label,
          description: description.value,
          duedate: selectedDate.value || 'No due date',
          priority: selectedPriority.value,
          stage: 'Not started',
          title: title.value,
          type: selectedType.value
        })

        title.value = ''
        description.value = ''
        selectedAssignee.value = null
        selectedDate.value = currentDate
        props.onClose()
      }
    }

    return () => (
      <q-dialog v-model={props.showModal}>
        <div class="bg-[#f6f5f3]">
          <div class="h-[450px] w-[400px] flex flex-col flex-nowrap justify-start">
            <div class="flex flex-row justify-between items-center p-4">
              <i class="material-icons-outlined cursor-pointer text-[22px]">
                task
              </i>
              <div class="w-[80%]">
                <input
                  type="text"
                  v-model={title.value}
                  placeholder="Name of task"
                  class={`bg-[#fff] px-2 rounded-lg w-full py-1 ${
                    titleError.value ? 'border border-red-500' : ''
                  }`}
                  required
                  aria-label="Task name"
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
            <div class="mt-2 px-4 py-4 flex flex-col gap-4">
              {/* DATE */}
              <div class="flex flex-row items-center w-full">
                <div class="basis-2/5 flex flex-row items-center gap-2">
                  <i class="material-icons-outlined cursor-pointer">timer</i>
                  <p class="text-[12px]">Day</p>
                </div>
                <div class="flex-1 text-sm font-semibold">
                  <div
                    onClick={() => (showDatePicker.value = true)}
                    class=" cursor-pointer py-[2px] px-2 flex flex-row  flex-nowrap gap-2 border-[1.25px] border-solid border-gray-200 rounded-lg items-center w-[120px]"
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
              {/* PRIORITY */}
              <div class="flex flex-row items-center w-full">
                <div class="basis-2/5 flex flex-row items-center gap-2">
                  <i class="material-icons-outlined cursor-pointer">flag</i>
                  <p class="text-[12px]">Priority</p>
                </div>
                <div class="flex-1 text-[13px] font-semibold">
                  <select
                    v-model={selectedPriority.value}
                    class={`p-1 rounded-sm ${
                      priorityError.value ? 'border border-red-500' : ''
                    }`}
                  >
                    <option value="" selected disabled hidden>
                      Select priority
                    </option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
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
                  <select
                    v-model={selectedType.value}
                    class={`p-1 rounded-sm ${
                      typeError.value ? 'border border-red-500' : ''
                    }`}
                  >
                    <option value="" selected disabled hidden>
                      Select type
                    </option>
                    <option value="Design">Design</option>
                    <option value="Development">Development</option>
                    <option value="Documentation">Documentation</option>
                    <option value="Presentation">Presentation</option>
                    <option value="Code">Code</option>
                    <option value="Research">Research</option>
                  </select>
                </div>
              </div>
              {/* ASSIGNEE */}
              <div class="flex flex-row items-center w-full">
                <div class="basis-2/5 flex flex-row items-center gap-2">
                  <i class="material-icons-outlined cursor-pointer">person</i>
                  <p class="text-[12px]">Assignee</p>
                </div>
                <div class="flex-1 text-[12px] font-semibold">
                  <div class="relative w-[70%]">
                    <input
                      type="text"
                      placeholder="Assignee..."
                      v-model={searchTerm.value}
                      onFocus={() => (isOpen.value = true)}
                      onInput={filterAssignees}
                      class={`w-full p-2  rounded-sm focus:outline-none ${
                        assigneeError.value ? 'border border-red-500' : ''
                      }`}
                      aria-label="Assignee"
                    />
                    {isOpen.value && filteredAssignees.value.length > 0 && (
                      <div class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-sm shadow-lg">
                        <ul class="max-h-60 overflow-y-auto">
                          {filteredAssignees.value.map((assignee) => (
                            <li
                              key={assignee.value}
                              onClick={() => selectAssignee(assignee)}
                              class="p-2 cursor-pointer hover:bg-blue-100"
                            >
                              {assignee.label}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <div class="px-4 text-[14px] font-semibold w-full">
              <p>Description</p>
              <div class="w-full mt-2 rounded-3xl">
                <textarea
                  name=""
                  id=""
                  rows="4"
                  v-model={description.value}
                  style="resize: none"
                  class={`w-full text-sm bg-[#fff] px-2 rounded-lg py-1 font-normal ${
                    descriptionError.value ? 'border border-red-500' : ''
                  }`}
                ></textarea>
              </div>
            </div>
            <hr class="solid mt-4" />

            <div class="flex flex-row justify-end items-center px-4 pt-4">
              <button
                class="bg-[#fedf51] px-3 py-[6px] text-center rounded-full text-xs font-medium border border-black hover:bg-[#ffe574]"
                onClick={handleAddTask}
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
