import { defineComponent, onMounted, ref } from 'vue'
import './css/reset.css'
import './css/app.css'
import './css/tailwind.css' // Import Tailwind CSS

import MainLayout from './layouts/MainLayout'
import { useRoute, RouterView } from 'vue-router'

export default defineComponent({
  name: 'App',

  setup() {
    return () => (
      <div class="">
        {useRoute().meta.layout !== null ? <MainLayout /> : <RouterView />}
      </div>
    )
  }
})
