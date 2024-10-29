// stores/prizeStore.ts
import { defineStore } from 'pinia'

export const usePrizeStore = defineStore('prize', {
  state: () => ({
    prizes: [
      { id: 1, name: '1 coin', date: '21/10/2024' },
      { id: 2, name: '2 coin', date: '22/10/2024' },
      { id: 3, name: '3 coin', date: '23/10/2024' }
    ]
  }),
  actions: {
    addPrize(prize: { id: number; name: string; date: string }) {
      this.prizes.push(prize)
    }
  }
})
