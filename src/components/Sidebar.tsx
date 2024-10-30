/* eslint-disable space-before-function-paren */
import { defineComponent, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useAuthStore } from '../store/authStore'

export default defineComponent({
  name: 'Sidebar',
  setup() {
    const route = useRoute()
    const navItems = [
      { path: '/dashboard', label: 'Dashboard', icon: 'space_dashboard' },
      { path: '/my-tasks', label: 'My tasks', icon: 'task_alt' },
      {
        path: '/notifications',
        label: 'Notifications',
        icon: 'notifications_active'
      }
    ]
    const isActive = (path) => computed(() => route.path === path)
    const authStore = useAuthStore()

    const logout = () => {
      window.location.reload()
      authStore.logout()
    }

    return () => (
      <div class="basis-1/5 bg-[#fff] rounded-2xl h-[92vh] flex flex-col justify-between max-h-[600px] min-h-[500px] max-w-[200px] min-w-[200px]">
        <div>
          {/* LOGO */}
          <div class="flex justify-center items-center gap-3 p-4 justify-self-start">
            <div class="bg-[#231c16ff] p-[0.7px] rounded-full shadow-sm">
              <div class="bg-[#fedf51] p-1 rounded-full">
                <svg
                  style="width: 16px; height: 16px; overflow: visible; opacity: 1; z-index: 1; fill: rgb(35, 28, 22);"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path d="M14.94 4.66h-4.72l2.36-2.36 2.36 2.36zm-4.69 14.71h4.66l-2.33 2.33-2.33-2.33zM6.1 6.27 1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37 1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z"></path>
                </svg>
              </div>
            </div>
            <p
              class="text-lg mt-[-5px]"
              style="font-family: 'Corben', sans-serif;"
            >
              Organizo
            </p>
          </div>
          {/* NAV */}
          {navItems.map((item) => (
            <div
              class={`${
                isActive(item.path).value ? 'bg-[#fcf8ec]' : ''
              } hover:bg-[#fcf8ec]`}
            >
              <hr class="solid" />
              <RouterLink to={item.path} class="relative group ">
                <div class="flex justify-center items-center gap-4 p-4 justify-self-start ">
                  <i class="material-icons-outlined">{item.icon}</i>
                  <p class="text-sm font-medium mt-[-5px]">{item.label}</p>
                </div>
                <div
                  className={`absolute left-0 top-0 h-full w-1  transition-transform duration-300 bg-[#fedf51]  ${
                    isActive(item.path).value ? 'scale-x-75' : 'scale-x-0'
                  }`}
                ></div>
              </RouterLink>
            </div>
          ))}
        </div>
        <div>
          <div class="hover:bg-[#fcf8ec]">
            <RouterLink to="#!" class="relative group ">
              <div class="flex justify-center items-center gap-4 p-4 justify-self-start ">
                <i class="material-icons-outlined">tune</i>
                <p class="text-sm font-medium mt-[-5px]">Settings</p>
              </div>
              {/* <div
                    className={`absolute left-0 top-0 h-full w-1 bg-[#fedf51] transition-transform duration-300 `}
                  ></div> */}
            </RouterLink>
          </div>
          <div class="hover:bg-[#fcf8ec]">
            <hr class="solid" />

            <div
              class="flex justify-center items-center gap-4 p-4 justify-self-start cursor-pointer"
              onClick={logout}
            >
              <i class="material-icons-outlined">logout</i>
              <p class="text-sm font-medium mt-[-5px]">Log out</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
