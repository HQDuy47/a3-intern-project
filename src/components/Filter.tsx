/* eslint-disable space-before-function-paren */
import { defineComponent, ref } from 'vue'
import AddTaskModal from './AddTaskModal'
import ava1 from 'src/assets/images/ava1.png'
import { RouterLink } from 'vue-router'
import { useTaskStore } from '../store/taskStore'
import { storeToRefs } from 'pinia'
import _ from 'lodash'

export default defineComponent({
  name: 'Filter',
  setup() {
    const taskStore = useTaskStore()
    const { searchTerm, suggestions, page } = storeToRefs(taskStore)
    const showModal = ref(false)
    const isOpen = ref(true)
    const highlightedIndex = ref(-1)

    const searchTasks = () => {
      taskStore.setSearchTerm(searchTerm.value)
      page.value = 1
    }

    const suggestionTasks = _.debounce(() => {
      isOpen.value = true
      taskStore.setSuggestions(searchTerm.value)
    }, 500)

    const selectSuggestion = (suggestion) => {
      searchTerm.value = suggestion.title
      isOpen.value = false
      highlightedIndex.value = -1
      searchTasks()
    }

    const onKeydown = (e) => {
      if (e.key === 'ArrowDown') {
        highlightedIndex.value =
          (highlightedIndex.value + 1) % suggestions.value.length
      } else if (e.key === 'ArrowUp') {
        highlightedIndex.value =
          (highlightedIndex.value - 1 + suggestions.value.length) %
          suggestions.value.length
      } else if (e.key === 'Enter' && highlightedIndex.value >= 0) {
        selectSuggestion(suggestions.value[highlightedIndex.value])
      }
    }

    const openModal = () => {
      showModal.value = true
    }

    const closeModal = () => {
      showModal.value = false
    }

    const onKeyup = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        searchTasks()
      }
    }

    return () => (
      <div class="w-full bg-[#fff] rounded-xl p-2 flex flex-row items-center justify-between min-w-[800px] max-w-[2000px]">
        <div class="w-[40%]">
          <RouterLink to="/my-tasks">
            <div class="bg-[#f6f5f3] rounded-xl w-full px-2 py-1 relative">
              <i class="material-icons text-lg px-1">search</i>
              <input
                type="text"
                v-model={searchTerm.value}
                placeholder="Search"
                class=" px-2 py-1 w-[80%] bg-[#f6f5f3] outline-none"
                onKeyup={onKeyup}
                onKeydown={onKeydown}
                onInput={suggestionTasks}
              />
              <ul class="absolute top-8 left-8 bg-white shadow-md rounded-md mt-1 w-[90%] ">
                {searchTerm.value.length > 0 &&
                  suggestions.value.length > 0 &&
                  isOpen.value &&
                  suggestions.value.map((suggestion, index) => (
                    <li
                      key={suggestion.id}
                      class={[
                        'p-2 cursor-pointer text-sm',
                        highlightedIndex.value === index
                          ? 'bg-gray-200'
                          : 'hover:bg-gray-100'
                      ]}
                      onClick={() => selectSuggestion(suggestion)}
                    >
                      {suggestion.title}
                    </li>
                  ))}
              </ul>
            </div>
          </RouterLink>
        </div>
        <div class="flex flex-row items-center justify-between gap-6">
          <RouterLink to="/my-tasks">
            <button
              class=" bg-[#fedf51] px-3 py-[2px] text-center rounded-full text-xs font-medium border border-black hover:bg-[#ffe574]"
              onClick={openModal}
            >
              <i class="material-icons text-lg">add</i>
              {'  '}New task
            </button>
          </RouterLink>

          <i class="material-icons-outlined text-3xl">mail</i>
          <p>
            Hi, <span>Quoc Duy</span>
          </p>
          <RouterLink to="#!">
            <img src={ava1} alt="ava1" class="h-8 w-8 rounded-full " />
          </RouterLink>
        </div>
        <AddTaskModal showModal={showModal.value} onClose={closeModal} />
      </div>
    )
  }
})
