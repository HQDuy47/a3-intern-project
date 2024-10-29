import { defineComponent, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from '../store/authStore1'

export default defineComponent({
  name: 'SignInPage',
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()
    const email = ref('')
    const password = ref('')
    const errorMessage = ref('') // For displaying error messages
    const loading = ref(false) // For loading state

    const signIn = async () => {
      errorMessage.value = '' // Clear previous error messages
      loading.value = true // Start loading state

      try {
        // Attempt to log in with provided email and password
        await authStore.login(email.value, password.value)
        if (authStore.token) {
          // Redirect to home on successful login
          router.push('/home')
          console.log(authStore.user)
          console.log(authStore.token)
        }
      } catch (error: unknown) {
        // Handle different types of errors

        if (error instanceof Error) {
          errorMessage.value = 'Sign in failed: ' + error.message
          console.log('Sign in failed: ' + error.message)
        } else {
          errorMessage.value = 'Sign in failed: Unknown error'
        }
      } finally {
        errorMessage.value = 'Sign in failed: Unknown error'
        loading.value = false // End loading state
      }
    }

    return () => (
      <div class="bg-[#ffa860] mt-[-70px]">
        <q-layout view="lHh Lpr lFf">
          <q-page-container>
            <q-page class="flex flex-center">
              <q-card class="q-pa-md shadow-2 my_card" bordered>
                <q-card-section class="text-center">
                  <div class="text-grey-9 text-h5 text-weight-bold">
                    Sign in
                  </div>
                  <div class="text-grey-8">
                    Sign in below to access your account
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
                    rounded
                    size="md"
                    label={loading.value ? 'Signing in...' : 'Sign in'}
                    no-caps
                    class="full-width bg-[#f07613] text-white"
                    onClick={signIn}
                    onKeyUp={(e) => {
                      if (e.key === 'Enter') {
                        console.log('Enter')
                        signIn()
                      }
                    }}
                    disable={loading.value} // Disable button when loading
                  />
                </q-card-section>
                {/* {errorMessage.value && ( 
                  <div class="text-red-6 text-center mt-[-10px]">
                    {errorMessage.value}
                  </div>
                )} */}
                <q-card-section class="text-center q-pt-none mt-3">
                  <div class="text-grey-8">
                    Don't have an account yet?{''}
                    <RouterLink
                      to="/signup"
                      class="text-dark text-weight-bold"
                      style="text-decoration: none"
                    >
                      Sign up.
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
