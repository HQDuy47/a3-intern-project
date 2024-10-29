// src/stores/authStore.js
import { defineStore } from 'pinia'
import { auth } from '../boot/firebase'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as any,
    token: null as string | null
  }),
  actions: {
    async login(email, password) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        )
        this.token = await userCredential.user.getIdToken()
        localStorage.setItem('token', this.token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
        this.user = userCredential.user
      } catch (error) {
        console.error('Login error: ', error)
      }
    },
    async register(email, password) {
      try {
        // Đăng ký người dùng mới với Firebase
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )

        // Lấy mã thông báo ID
        this.token = await userCredential.user.getIdToken()
        localStorage.setItem('token', this.token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
        this.user = userCredential.user

        // Thông tin cần gửi đến Hasura
        const admin_secret = 'myadminsecretkey' // Thay bằng admin secret của bạn
        const url = 'http://localhost:8080/v1/graphql' // Thay bằng URL Hasura của bạn
        const query = `
          mutation($userId: String!, $userEmail: String!) {
            insert_users(objects: [{ id: $userId, email: $userEmail, last_seen: "now()" }], 
            on_conflict: { constraint: users_pkey, update_columns: [last_seen, email] }) {
              affected_rows
            }
          }`

        const variables = {
          userId: userCredential.user.uid,
          userEmail: userCredential.user.email
        }

        // Gửi yêu cầu đến Hasura
        const response = await axios.post(
          url,
          {
            query: query,
            variables: variables
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'x-hasura-admin-secret': admin_secret
            }
          }
        )

        console.log('Hasura response:', response.data)
      } catch (error) {
        console.error('Register error: ', error)
      }
    },

    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
    },
    async checkAuth() {
      const token = localStorage.getItem('token')
      if (token) {
        this.token = token
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
      }
    }
  }
})
