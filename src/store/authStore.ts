import { ref } from 'vue'
import { defineStore } from 'pinia'
import { auth } from '../boot/firebase'
import { updateProfile, updateEmail } from 'firebase/auth'
import { REGISTER } from '../graphql/auth'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import axios from 'axios'
import { Notify } from 'quasar'
import { useRouter } from 'vue-router'

const ADMIN_SECRET = 'myadminsecretkey'
const URL = 'http://localhost:8080/v1/graphql'
const NOTIFY_TIMEOUT = 1000

export const useAuthStore = defineStore('auth', () => {
  const user = ref<any | null>(null)
  const token = ref<string | null>(null)
  const router = useRouter()

  const notify = (message, type) => {
    Notify.create({
      type,
      message,
      position: 'bottom',
      timeout: NOTIFY_TIMEOUT
    })
  }

  const setAuthHeaders = (tokenValue) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${tokenValue}`
  }

  const saveUserToLocalStorage = (firebaseUser) => {
    if (token.value) {
      localStorage.setItem('token', token.value)
    }
    localStorage.setItem('user', JSON.stringify(firebaseUser))
  }

  const login = async (email, password) => {
    try {
      const { user: firebaseUser } = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      token.value = await firebaseUser.getIdToken()
      user.value = firebaseUser
      saveUserToLocalStorage(firebaseUser)

      router.push('/dashboard')
      notify('Login successful!', 'positive')
    } catch (error) {
      console.error('Login error:', error)
      const errorMessage = getErrorMessage(error)
      notify(errorMessage, 'negative')
    }
  }

  const register = async (email, password, displayName) => {
    try {
      const { user: firebaseUser } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      await updateProfile(firebaseUser, { displayName })

      token.value = await firebaseUser.getIdToken()
      setAuthHeaders(token.value)
      user.value = firebaseUser

      const query = ` mutation ($userId: String!, $userEmail: String!, $displayName: String!) {
    insert_users(
      objects: [
        {
          id: $userId
          email: $userEmail
          display_name: $displayName
          last_seen: "now()"
        }
      ]
      on_conflict: {
        constraint: users_pkey
        update_columns: [last_seen, email, display_name]
      }
    ) {
      affected_rows
    }
  }`

      const variables = {
        userId: firebaseUser.uid,
        userEmail: firebaseUser.email,
        displayName: firebaseUser.displayName || displayName
      }

      await axios.post(
        URL,
        {
          query: query,
          variables
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-hasura-admin-secret': ADMIN_SECRET
          }
        }
      )

      saveUserToLocalStorage(firebaseUser)
      router.push('/login')
      notify('Registration successful!', 'positive')
    } catch (error) {
      console.error('Register error:', error)
      const errorMessage = getErrorMessage(error)
      notify(errorMessage, 'negative')
    }
  }

  const logout = async () => {
    try {
      user.value = null
      token.value = null
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      delete axios.defaults.headers.common['Authorization']

      router.push('/login')
      notify('Logout successful!', 'positive')
    } catch (error) {
      console.error('Logout error:', error)
      notify('Logout failed. Please try again later.', 'negative')
    }
  }

  const getErrorMessage = (error) => {
    const errorCode = (error as any).code
    switch (errorCode) {
      case 'auth/wrong-password':
        return 'Incorrect password. Please try again.'
      case 'auth/user-not-found':
        return 'No user found with this email. Please register first.'
      case 'auth/email-already-in-use':
        return 'This email is already in use. Please use a different email.'
      default:
        return 'An error occurred. Please try again later.'
    }
  }

  const updateUserProfile = async (idUser: string, displayName: string) => {
    try {
      const currentUser = auth.currentUser // Get the current authenticated user
      if (!currentUser) throw new Error('No user logged in')

      // Update the display name in Firebase
      await updateProfile(currentUser, { displayName })

      // Update the user object in localStorage
      user.value = { ...currentUser, displayName } // Update user.value with the new displayName
      console.log('user:', user.value)
      localStorage.setItem('user', JSON.stringify(user.value))

      // Update the display name in Hasura
      const query = `
        mutation ($userId: String!, $displayName: String!) {
          update_users(
            where: { id: { _eq: $userId } },
            _set: { display_name: $displayName }
          ) {
            affected_rows
          }
        }
      `

      const variables = {
        userId: idUser,
        displayName
      }

      await axios.post(
        URL,
        {
          query,
          variables
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-hasura-admin-secret': ADMIN_SECRET
          }
        }
      )

      notify('Profile updated successfully.', 'positive')
    } catch (error) {
      console.error('Profile update error:', error)
      if ((error as any).code === 'auth/requires-recent-login') {
        notify(
          'Please log in again to update your profile information.',
          'negative'
        )
      } else {
        notify('Profile update failed. Please try again.', 'negative')
      }
    }
  }

  const initializeUser = () => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      user.value = JSON.parse(savedUser)
      token.value = localStorage.getItem('token')
      setAuthHeaders(token.value)
    }
  }

  initializeUser()

  return {
    user,
    token,
    login,
    register,
    logout,
    updateUserProfile
  }
})
