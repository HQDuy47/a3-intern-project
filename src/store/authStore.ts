import { ref } from 'vue'
import { defineStore } from 'pinia'
import { auth } from '../boot/firebase'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { Toast } from '../utils/Toast'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<any | null>(null)
  const token = ref<string | null>(localStorage.getItem('authToken'))
  const loading = ref(false)
  const router = useRouter()
  // let refreshInterval: any

  const register = async (email, password) => {
    loading.value = true
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      user.value = userCredential.user
      Toast('Registration successful!', 'positive')
    } catch (error) {
      console.error('Registration error:', error)
      Toast('Registration failed. Please try again.', 'negative')
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
      localStorage.setItem('user', JSON.stringify(user))
      Toast('Login successful!', 'positive')
      router.push('/dashboard')
      // startTokenRefresh()
    } catch (error) {
      console.error('Login error:', error)
      Toast('Login failed. Please check your credentials.', 'negative')
    } finally {
      loading.value = false
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      user.value = null
      token.value = null
      Toast('Logout successful!', 'positive')
      router.push('/login')
      // stopTokenRefresh()
    } catch (error) {
      console.error('Logout error:', error)
      Toast('Logout failed. Please try again.', 'negative')
    }
  }

  const refreshToken = async () => {
    const currentUser = auth.currentUser
    if (currentUser) {
      try {
        const idToken = await currentUser.getIdToken(true)
        token.value = idToken
        localStorage.setItem('Token', idToken)
        console.log('Token refreshed:', idToken)
      } catch (error) {
        console.error('Error refreshing token:', error)
      }
    }
  }

  const checkTokenExpiration = async () => {
    const currentUser = auth.currentUser
    if (currentUser) {
      try {
        const idTokenResult = await currentUser.getIdTokenResult()
        const { expirationTime } = idTokenResult
        const now = new Date().getTime()
        const isExpired = new Date(expirationTime).getTime() < now

        if (isExpired) {
          console.warn('Token has expired.')
          await refreshToken()
        } else {
          console.log('Token is still valid.')
        }
      } catch (error) {
        console.error('Error checking token expiration:', error)
      }
    } else {
      console.log('No user is currently signed in.')
    }
  }

  // stimulate token expiration
  // const checkTokenExpiration = async () => {
  //   const expiredToken = localStorage.getItem('Token')

  //   if (expiredToken) {
  //     const expiredDate = new Date(new Date().getTime() - 1 * 60 * 1000)
  //     if (expiredDate > new Date()) {
  //       console.log('Token is still valid.')
  //     } else {
  //       console.warn('Token has expired.')
  //       await refreshToken()
  //     }
  //   } else {
  //     console.log('No token found in localStorage.')
  //   }
  // }

  // const startTokenRefresh = () => {
  //   if (refreshInterval) return // Ngăn chặn nhiều interval
  //   refreshInterval = setInterval(() => {
  //     checkTokenExpiration()
  //   }, 5000)
  // }

  // const stopTokenRefresh = () => {
  //   if (refreshInterval) {
  //     clearInterval(refreshInterval)
  //     refreshInterval = null
  //   }
  // }

  return {
    user,
    loading,
    token,
    register,
    login,
    logout,
    refreshToken,
    checkTokenExpiration
  }
})
