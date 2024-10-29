// src/stores/userStore.ts
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as any[], // Danh sách người dùng
    selectedUser: null as any // Người dùng đang được chọn
  }),
  actions: {
    async fetchUsers() {
      const admin_secret = 'myadminsecretkey'
      const url = 'http://localhost:8080/v1/graphql' // URL của Hasura
      const query = `
        query {
          users {
            id
            email
            last_seen
            numOfCoin
          }
        }
      `

      try {
        const response = await axios.post(
          url,
          {
            query: query
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'x-hasura-admin-secret': admin_secret
            }
          }
        )

        this.users = response.data.data.users
        console.log('Fetched users:', this.users)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    },

    selectUser(user) {
      this.selectedUser = user
    },
    clearSelectedUser() {
      this.selectedUser = null
    }
  }
})
