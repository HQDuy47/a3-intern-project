/* eslint-disable space-before-function-paren */
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import Filter from '../components/Filter'
import Sidebar from '../components/Sidebar'

export default defineComponent({
  name: 'MainLayout',
  setup() {
    return () => (
      <div class="bg-[#f6f5f3] h-[100vh] p-6">
        <div class="w-[1170px] max-w-[calc(100%-48px)] mx-auto flex flex-nowrap flex-row ">
          {/* <div class="container mx-auto flex flex-nowrap flex-row ">   */}
          {/* LEFT */}
          <Sidebar />

          {/* RIGHT */}
          {/* <div class="basis-4/5 pl-4  max-h-[600px] min-h-[520px]"> */}
          <div class="flex-1 pl-4  max-h-[600px] min-h-[500px] ">
            {/* TOP */}
            <Filter />
            {/* <router-view /> */}
            <RouterView />
          </div>
        </div>
      </div>
    )
  }
})
