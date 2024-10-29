import { defineStore } from 'pinia'
import { ref, watchEffect } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { GET_TASKS } from '../graphql/task'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<any[]>([])

  const { result } = useQuery(GET_TASKS)

  // Watch for changes in the result and update tasks accordingly
  watchEffect(() => {
    if (result.value) {
      tasks.value = result.value.tasks
    }
  })

  console.log(tasks)
  return {
    tasks
  }
})
