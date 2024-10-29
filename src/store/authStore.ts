import { ref } from 'vue'
import { defineStore } from 'pinia'
import { auth } from '../boot/firebase'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { Notify } from 'quasar'
import { useRouter } from 'vue-router'

const NOTIFY_TIMEOUT = 1000

export const useAuthStore = defineStore('auth', () => {
  const user = ref<any | null>(null)
  const token = ref<string | null>(localStorage.getItem('authToken'))
  const loading = ref(false)
  const router = useRouter()

  const notify = (message, type) => {
    Notify.create({
      type,
      message,
      position: 'bottom',
      timeout: NOTIFY_TIMEOUT
    })
  }

  const register = async (email, password) => {
    loading.value = true
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      user.value = userCredential.user
      notify('Registration successful!', 'positive')
    } catch (error) {
      console.error('Registration error:', error)
      notify('Registration failed. Please try again.', 'negative')
    } finally {
      loading.value = false
    }
  }

  const login = async (email, password) => {
    loading.value = true
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      user.value = userCredential.user
      notify('Login successful!', 'positive')
      router.push('/dashboard')
    } catch (error) {
      console.error('Login error:', error)
      notify('Login failed. Please check your credentials.', 'negative')
    } finally {
      loading.value = false
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      user.value = null
      token.value = null
      notify('Logout successful!', 'positive')
      router.push('/login')
    } catch (error) {
      console.error('Logout error:', error)
      notify('Logout failed. Please try again.', 'negative')
    }
  }

  return {
    user,
    loading,
    token,
    register,
    login,
    logout
  }
})
