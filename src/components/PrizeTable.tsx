// components/PrizeTable.vue
import { defineComponent } from 'vue'
import { usePrizeStore } from '../store/prizeStore' // Import store

export default defineComponent({
  name: 'PrizeTable',
  setup() {
    const prizeStore = usePrizeStore() // Sử dụng store

    return () => (
      <div class="container mx-auto ">
        {/* <h2 class="text-2xl font-bold mb-4 text-center text-white">
          Giải Thưởng
        </h2> */}
        {/* <div class="overflow-x-auto">
          <div class="max-h-80 overflow-y-auto border border-gray-300 rounded-lg shadow-lg">
            <table class="min-w-full bg-white">
              <thead>
                <tr class="bg-yellow-200 text-gray-700">
                  <th class="py-3 px-6 border-b text-sm">#</th>
                  <th class="py-3 px-6 border-b text-sm">prize</th>
                  <th class="py-3 px-6 border-b text-sm">date</th>
                </tr>
              </thead>
              <tbody>
                {prizeStore.prizes.map((prize) => (
                  <tr key={prize.id} class="hover:bg-gray-100 text-center">
                    <td class="py-3 px-6 border-b text-sm">{prize.id}</td>
                    <td class="py-3 px-6 border-b text-sm">{prize.name}</td>
                    <td class="py-3 px-6 border-b text-sm">{prize.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> */}

        <div class="overflow-x-auto">
          {/* Scrollable container */}
          <div class="max-h-80 overflow-y-auto border border-gray-300 rounded-lg shadow-lg">
            <div class="flex flex-row justify-between items-center py-3 px-16 border-b font-medium text-sm bg-yellow-200 text-gray-700">
              <div class="">#</div>
              <div class="mr-10">Prize</div>
              <div class="">Date</div>
            </div>
            <transition name="switch" mode="out-in">
              <transition-group name="list">
                <div class="min-w-full bg-white">
                  {prizeStore.prizes.map((prize) => (
                    <div
                      key={prize.id}
                      class="flex flex-row justify-between items-center py-3 px-16 border-b text-sm hover:bg-gray-100 cursor-pointer"
                    >
                      <div class="">{prize.id}</div>
                      <div class="">{prize.name}</div>
                      <div class="">{prize.date}</div>
                    </div>
                  ))}
                </div>
              </transition-group>
            </transition>
          </div>
        </div>
      </div>
    )
  }
})
