import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '../store/authStore'
import imgBg from '../assets/images/image-bg.png'

export default defineComponent({
  name: 'RegisterPage',
  // eslint-disable-next-line space-before-function-paren
  setup() {
    const email = ref('')
    const password = ref('')
    // const displayNameError = ref('')
    const emailError = ref('')
    const passwordError = ref('')
    const authStore = useAuthStore()

    const validateForm = () => {
      let isValid = true
      emailError.value = ''
      passwordError.value = ''

      if (!email.value) {
        emailError.value = 'Email is required'
        isValid = false
      } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        emailError.value = 'Email is invalid'
        isValid = false
      }

      if (!password.value) {
        passwordError.value = 'Password is required'
        isValid = false
      } else if (password.value.length < 6) {
        passwordError.value = 'Password must be at least 6 characters'
        isValid = false
      }

      return isValid
    }

    const handleSubmit = async () => {
      if (validateForm()) {
        await authStore.register(email.value, password.value)
      }
    }

    const onKeyup = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleSubmit()
      }
    }

    return () => (
      <div class="bg-[#f6f5f3] h-[100vh] flex flex-wrap flex-row justify-center items-center">
        <div class="w-[1170px] max-w-[calc(100%-48px)] mx-auto flex flex-wrap flex-row justify-center items-center">
          {/* LEFT */}
          <div class="logo px-20 ">
            <div class="py-8 bg-[#ffff] rounded-[70px] relative h-[430px] max-w-[390px] min-w-[400px]">
              <img
                src={imgBg}
                alt="logo-bg"
                class="h-[370px] w-[440px] absolute left-[50px]"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div class="py-2 flex flex-col flex-wrap justify-center items-center gap-8">
            {/* LOGO */}
            <div class="bg-[#231c16ff] p-[0.7px] rounded-full shadow-sm">
              <div class="bg-[#fedf51] p-1 rounded-full">
                <svg
                  style="width: 40px; height: 40px; overflow: visible; opacity: 1; z-index: 1; fill: rgb(35, 28, 22);"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path d="M14.94 4.66h-4.72l2.36-2.36 2.36 2.36zm-4.69 14.71h4.66l-2.33 2.33-2.33-2.33zM6.1 6.27 1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37 1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z"></path>
                </svg>
              </div>
            </div>

            {/* TITLE */}
            <div>
              <p
                class="text-4xl text-[#231c16ff]"
                style="font-family: 'Corben', sans-serif;"
              >
                Organizo
              </p>
            </div>

            {/* FORM */}
            <div class="px-5 py-5 bg-[#fff] rounded-2xl h-[50%] flex flex-col flex-nowrap justify-between items-center gap-2 max-h-[290px] min-h-[290px] w-[70%] min-w-[300px]">
              <div>
                <p class="text-xl">Sign up</p>
              </div>

              {/* INPUT */}
              <div class="flex flex-col justify-center flex-wrap gap-3 w-full mt-[-10px]">
                {/* <div class="text-[#424242ff]">
                  <label for="username" class="block">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    v-model={displayName.value}
                    placeholder="Your username"
                    class="w-full px-2 py-1 bg-[#f6f5f3] mt-2 rounded-xl"
                    onKeyup={onKeyup}
                  />
                  {displayNameError.value && (
                    <p class="text-red-500 text-sm">{displayNameError.value}</p>
                  )}
                </div> */}
                <div class="text-[#424242ff]">
                  <label for="email" class="block">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    v-model={email.value}
                    placeholder="Your email"
                    class="w-full px-2 py-1 bg-[#f6f5f3] mt-2 rounded-xl"
                    onKeyup={onKeyup}
                  />
                  {emailError.value && (
                    <p class="text-red-500 text-sm">{emailError.value}</p>
                  )}
                </div>
                <div class="text-[#424242ff]">
                  <label for="password" class="block">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    v-model={password.value}
                    placeholder="Your password"
                    class="w-full px-2 py-1 bg-[#f6f5f3] mt-2 rounded-xl"
                    onKeyup={onKeyup}
                  />
                  {passwordError.value && (
                    <p class="text-red-500 text-sm">{passwordError.value}</p>
                  )}
                </div>
              </div>

              {/* BUTTON */}
              <div class="w-full text-center space-y-1">
                <button
                  onClick={handleSubmit}
                  class="w-full bg-[#fedf51] py-[1px] text-center rounded-full text-xs font-medium border border-black hover:bg-[#ffe574]"
                >
                  Sign up
                  <i class="material-icons text-lg ml-1">arrow_right_alt</i>
                </button>
                <div>
                  <p class="text-xs">
                    You have an account?{' '}
                    <RouterLink to="/login">
                      <span class="text-black italic">Sign in.</span>
                    </RouterLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
