// components/Wheel.vue
import { defineComponent, ref } from 'vue'
import { usePrizeStore } from '../store/prizeStore' // Import store

export default defineComponent({
  name: 'Wheel',
  setup() {
    const prizes = ['1 coin', '2 coin', '3 coin', '4 coin']
    const angle = ref<number>(0)
    const currentPrize = ref<string | null>(null)
    const spinning = ref<boolean>(false)
    const showPopup = ref<boolean>(false)

    const prizeStore = usePrizeStore() // Sử dụng store

    const spin = async () => {
      if (spinning.value) return

      spinning.value = true
      currentPrize.value = null

      // Calculate the spin
      const spinAngle = Math.floor(Math.random() * 6000) + 4000
      const segmentAngle = 360 / prizes.length
      const finalAngle = (angle.value + spinAngle) % 360
      const prizeIndex =
        Math.floor((360 - finalAngle) / segmentAngle) % prizes.length

      // Rotate the wheel
      angle.value += spinAngle

      // Simulate spin time
      setTimeout(() => {
        currentPrize.value = prizes[prizeIndex]
        prizeStore.addPrize({
          id: prizeStore.prizes.length + 1,
          name: currentPrize.value,
          date: new Date().toLocaleDateString()
        }) // Thêm giải thưởng mới vào store
        spinning.value = false
        showPopup.value = true
      }, 1000)
    }

    const closePopup = () => {
      showPopup.value = false
    }

    return () => (
      <div class="flex flex-col items-center justify-center">
        {/* Spinning Wheel */}
        <div
          class="relative w-[600px] h-[600px] rounded-full border-4 border-[#ffa860] overflow-hidden transition-transform duration-[6000ms] ease-out"
          style={{ transform: `rotate(${angle.value}deg)` }}
        >
          {prizes.map((prize, index) => (
            <div
              key={index}
              class="absolute top-0 left-1/2 transform origin-bottom-left w-1/2 h-1/2 border border-white"
              style={{
                transform: `rotate(${(360 / prizes.length) * index}deg)`,
                background: index % 2 === 0 ? '#fffbf1' : '#fede4a'
              }}
            >
              <span class="absolute top-1/2 left-1/4 transform -translate-y-1/2 rotate-45 text-sm font-bold text-gray-900">
                {prize}
              </span>
            </div>
          ))}
        </div>

        {/* Static Arrow Indicator */}
        <div
          class="absolute w-0 h-0 "
          style={{ position: 'relative', top: '-330px', left: '-30px' }}
        >
          <i class="material-icons text-6xl text-[#ff4747]">arrow_drop_up</i>
        </div>

        {/* Spin Button */}
        <button
          class={`mt-4 px-4 py-2 bg-[#f07613] text-white rounded-lg shadow-md focus:outline-none font-medium ${
            spinning.value ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={spin}
          disabled={spinning.value}
        >
          {spinning.value ? 'spin...' : 'spin'}
        </button>

        {/* Result Popup */}
        {showPopup.value && (
          <div class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-70 z-40 ]">
            <div class="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 scale-95 hover:scale-100">
              <h2 class="text-xl font-bold text-center mb-4 text-gray-800">
                Result
              </h2>
              <p class="text-center text-gray-700 text-lg">
                You win:{' '}
                <span class="font-semibold text-yellow-400">
                  {currentPrize.value}!
                </span>
              </p>
              <div class="flex flex-row justify-end items-center">
                <button
                  class="mt-4 px-4 py-2 bg-[#f07613] text-white rounded-lg transition-colors duration-300 hover:bg-[#f29041] focus:outline-none"
                  onClick={closePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
})
