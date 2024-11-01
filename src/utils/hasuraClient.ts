/* eslint-disable space-before-function-paren */
import axios from 'axios'
import { useAuthStore } from '../store/authStore'

// const HASURA_ENDPOINT = 'http://localhost:8080/v1/graphql'
const HASURA_ENDPOINT = 'https://relaxed-gazelle-42.hasura.app/v1/graphql'
const ADMIN_SECRET =
  'EdcCAwK8VW5WbhVT6BbiAXe7WUptIEg2eRKRQ6mo6EUovr4eF5UY6XYIj3e3LxFy'

export async function fetchDataWithAuth(query, variables = {}) {
  const authStore = useAuthStore()
  const token = localStorage.getItem('Token')

  if (!token) throw new Error('No token found. Please log in.')

  await authStore.checkTokenExpiration()

  try {
    const response = await axios.post(
      HASURA_ENDPOINT,
      { query: query, variables },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'x-hasura-admin-secret': ADMIN_SECRET
        }
      }
    )
    return response.data
  } catch (error) {
    console.error('Error fetching data from Hasura:', error)
    throw error
  }
}
