import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '../store/authStore1'
import {
  QLayout,
  QPageContainer,
  QPage,
  QCard,
  QCardSection,
  QInput,
  QBtn
} from 'quasar'

export default defineComponent({
  name: 'SignUpPage',
  setup() {
    const authStore = useAuthStore()
    const email = ref('')
    const password = ref('')
    const errorMessage = ref('')
    const loading = ref(false)

    const validateEmail = (email: string) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(email)
    }

    const register = async () => {
      errorMessage.value = ''

      // Basic validation
      if (!validateEmail(email.value)) {
        errorMessage.value = 'Invalid email format'
        return
      }

      if (password.value.length < 6) {
        errorMessage.value = 'Password must be at least 6 characters long'
        return
      }

      loading.value = true
      try {
        await authStore.register(email.value, password.value)
        // Optionally redirect or show a success message here
      } catch (error: unknown) {
        // Specify error as type 'unknown'
        if (error instanceof Error) {
          // TypeScript knows error is an instance of Error here
          errorMessage.value = 'Registration failed: ' + error.message
        } else {
          errorMessage.value = 'Registration failed: Unknown error'
        }
      } finally {
        loading.value = false
      }
    }

    return () => (
      <div class="bg-[#ffa860]  mt-[-70px]">
        <q-layout view="lHh Lpr lFf">
          <q-page-container>
            <q-page class="flex flex-center">
              <q-card class="q-pa-md shadow-2 my_card" bordered>
                <q-card-section class="text-center">
                  <div class="text-grey-9 text-h5 text-weight-bold">
                    Sign up
                  </div>
                  <div class="text-grey-8">
                    Sign up below to access your account
                  </div>
                </q-card-section>

                <q-card-section>
                  <q-input
                    dense
                    outlined
                    modelValue={email.value}
                    onUpdate:modelValue={(val: string) => (email.value = val)}
                    label="Email Address"
                  />

                  <q-input
                    dense
                    outlined
                    class="q-mt-md"
                    type="password"
                    modelValue={password.value}
                    onUpdate:modelValue={(val: string) =>
                      (password.value = val)
                    }
                    label="Password"
                  />
                </q-card-section>

                <q-card-section>
                  <q-btn
                    style="border-radius: 8px;"
                    // color="dark"
                    rounded
                    size="md"
                    label={loading.value ? 'Signing up...' : 'Sign up'}
                    no-caps
                    class="full-width bg-[#f07613] text-white"
                    onClick={register}
                    onKeyUp={(e) => {
                      if (e.key === 'Enter') {
                        register()
                      }
                    }}
                    disable={loading.value}
                  />
                </q-card-section>
                {/* {errorMessage.value && (
                  <div class="text-red-6 text-center mt-[-10px]">
                    {errorMessage.value}
                  </div>
                )} */}

                <q-card-section class="text-center q-pt-none mt-3">
                  <div class="text-grey-8">
                    You have an account?
                    <RouterLink
                      to="/signin"
                      class="text-dark text-weight-bold"
                      style="text-decoration: none"
                    >
                      Sign in.
                    </RouterLink>
                  </div>
                </q-card-section>
              </q-card>
            </q-page>
          </q-page-container>
        </q-layout>
      </div>
    )
  }
})
