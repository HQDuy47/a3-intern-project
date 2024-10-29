import { defineComponent, reactive, ref } from 'vue'
import { useAuthStore } from '../store/authStore'
import ava1 from 'src/assets/images/ava1.png'

export default defineComponent({
  name: 'ProfilePage',
  setup() {
    const { user, updateUserProfile } = useAuthStore()
    console.log('user:', user.uid)
    const isOpen = ref(false)

    const formData = reactive({
      username: user.displayName || '',
      email: user.email || ''
    })

    const handleOpen = () => {
      isOpen.value = !isOpen.value
    }

    const handleSaveChanges = async () => {
      try {
        await updateUserProfile(user.uid, formData.username)
        console.log(user.uid)
      } catch (error) {
        console.error('Error saving profile changes:', error)
      }
    }

    const handleCancel = () => {
      formData.username = user.displayName || ''
      formData.email = user.email || ''
      isOpen.value = false
    }

    return () => (
      <div class="pt-3">
        <div class="bg-[#fff] w-full rounded-xl h-full">
          <div class="p-4">
            <p class="font-bold text-3xl">Profile</p>
          </div>
          <hr />
          {/* PROFILE PHOTO */}
          <div class="flex flex-row items-start justify-start px-4 py-4">
            <div class="basis-1/5">
              <p class="font-bold">Profile photo</p>
            </div>
            <div class="flex-1">
              <div class="flex flex-row gap-8 items-center">
                <img src={ava1} alt="profile" class="rounded-lg w-32 h-32" />
                <div class="flex flex-col gap-4">
                  <button class="px-[1px] py-[3px] text-xs border-[1px] border-solid border-black rounded-full font-bold w-32 text-center hover:bg-gray-100">
                    <i class="material-icons-outlined text-sm">add</i> Upload
                    photo
                  </button>
                  <div class="text-sm">
                    <p>Supported formats: jpg, gif or png.</p>
                    <p>Max file size: 500k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* CONTACT */}
          <div class="flex flex-row items-start justify-start px-4 py-4">
            <div class="basis-1/5">
              <p class="font-bold">Contact</p>
            </div>
            <div class="flex-1">
              <div class="text-[#424242ff]">
                <label for="username" class="block">
                  Full name*
                </label>
                <input
                  type="text"
                  placeholder="Type your name here"
                  v-model={formData.username}
                  class="w-[40%] px-3 py-2 bg-[#f6f5f3] mt-2 rounded-lg"
                />
              </div>
            </div>
          </div>
          <hr />
          {/* EMAIL ADDRESS */}
          <div class="flex flex-row items-center justify-start px-4 py-4">
            <div class="basis-1/5">
              <p class="font-bold">Email address</p>
            </div>
            <div class="flex-1">
              <div class="flex flex-row justify-between items-center">
                {isOpen.value ? (
                  <input
                    type="email"
                    placeholder="Type your email here"
                    v-model={formData.email}
                    class="w-[40%] px-3 py-2 bg-[#f6f5f3] mt-2 rounded-lg"
                  />
                ) : (
                  <p class="underline underline-offset-1">{formData.email}</p>
                )}

                <button
                  class="px-3 py-[6px] border-[1px] text-xs border-solid border-black rounded-full font-bold text-center hover:bg-gray-100"
                  onClick={handleOpen}
                >
                  {isOpen.value ? 'Cancel' : 'Change email address'}
                </button>
              </div>
            </div>
          </div>
          <hr />
          {/* ACTION BUTTON */}
          <div class="flex flex-row items-end justify-end px-4 py-4 h-[120px]">
            <div class="flex flex-row gap-2 items-center text-xs">
              <button
                class="px-8 py-[8px] border-[1px] border-solid border-black rounded-full font-bold text-center hover:bg-gray-100"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                class="px-4 py-[2px] border-[1px] border-solid border-black rounded-full font-bold bg-[#fedf51] text-center hover:bg-[#fde36e]"
                onClick={handleSaveChanges}
              >
                <i class="material-icons-outlined text-xl">check</i> Save
                changes
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
