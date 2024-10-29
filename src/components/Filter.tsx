import { defineComponent, watch, ref, watchEffect } from 'vue'
import AddTaskModal from './AddTaskModal'
import ava1 from 'src/assets/images/ava1.png'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '../store/authStore'

export default defineComponent({
  name: 'Filter',
  setup() {
    const { user } = useAuthStore()

    const showModal = ref(false)

    const openModal = () => {
      showModal.value = true
    }

    const closeModal = () => {
      showModal.value = false
    }

    return () => (
      <div class="w-full bg-[#fff] rounded-xl p-2 flex flex-row items-center justify-between min-w-[800px] max-w-[2000px]">
        <div class="w-[40%]">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            class="bg-[#f6f5f3] px-2 rounded-xl w-full py-1"
          />
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
            Hi, <span>{user.displayName}</span>
          </p>
          <RouterLink to="/profile">
            <img src={ava1} alt="ava1" class="h-8 w-8 rounded-full " />
          </RouterLink>
        </div>
        <AddTaskModal showModal={showModal.value} onClose={closeModal} />
      </div>
    )
  }
})
