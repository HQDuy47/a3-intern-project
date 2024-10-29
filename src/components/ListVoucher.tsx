// components/PrizeTable.vue
import { defineComponent } from 'vue'
import { usePrizeStore } from '../store/prizeStore' // Import store

export default defineComponent({
  name: 'ListVoucher',
  setup() {
    const vouchers = [
      {
        id: 1,
        image:
          'https://plus.unsplash.com/premium_photo-1683887064374-dc6dd77ece50?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Voucher 1',
        price: 2
      },
      {
        id: 2,
        image:
          'https://i.pinimg.com/564x/20/36/38/20363882db9c7efce93385e14ed164b3.jpg',
        name: 'Voucher 2',
        price: 1
      },
      {
        id: 3,
        image:
          'https://i.pinimg.com/564x/27/25/51/272551f228fc74d104cc3aece28430b4.jpg',
        name: 'Voucher 3',
        price: 2
      },
      {
        id: 4,
        image:
          'https://plus.unsplash.com/premium_photo-1728670182314-a8aefbb9d53c?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Voucher 4',
        price: 2
      },
      {
        id: 5,
        image:
          'https://plus.unsplash.com/premium_photo-1683887064374-dc6dd77ece50?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Voucher 1',
        price: 2
      },
      {
        id: 6,
        image:
          'https://i.pinimg.com/564x/20/36/38/20363882db9c7efce93385e14ed164b3.jpg',
        name: 'Voucher 2',
        price: 1
      },
      {
        id: 7,
        image:
          'https://i.pinimg.com/564x/27/25/51/272551f228fc74d104cc3aece28430b4.jpg',
        name: 'Voucher 3',
        price: 2
      },
      {
        id: 8,
        image:
          'https://plus.unsplash.com/premium_photo-1728670182314-a8aefbb9d53c?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Voucher 4',
        price: 2
      }
    ]

    return () => (
      <div class="text-center">
        <p class="text-5xl">Vouchers</p>
        <div class="grid grid-cols-4 gap-4 mt-10">
          {vouchers.map(
            (
              voucher // Sử dụng v-for
            ) => (
              <div
                key={voucher.id}
                class="flex flex-col justify-center items-center bg-[#ffa860] text-4xl p-12 rounded-md cursor-pointer  text-white"
              >
                <img src={voucher.image} class="h-28 w-32 rounded-sm" />
                <div class="mt-2">
                  {voucher.price}{' '}
                  <i class="material-icons text-2xl text-yellow-300">paid</i>
                </div>

                <button class="p-2 bg-[#f07613] rounded-md shadow-sm mt-2 text-xl">
                  Change
                </button>
              </div>
            )
          )}
          {/* <div class="flex flex-col justify-center items-center bg-[#ffa860]  p-4 rounded-md cursor-pointer  text-white">
            <img
              src="https://plus.unsplash.com/premium_photo-1683887064374-dc6dd77ece50?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="h-28 w-32 rounded-sm"
            />
            <div class="mt-2">
              2 <i class="material-icons text-2xl text-yellow-300">paid</i>
            </div>

            <button class="p-2 bg-[#f07613] rounded-md shadow-sm mt-2">
              Change
            </button>
          </div> */}
        </div>
      </div>
    )
  }
})
