/* eslint-disable space-before-function-paren */
import { defineComponent } from 'vue'
import './css/reset.css'
import './css/app.css'
import './css/tailwind.css' // Import Tailwind CSS

export default defineComponent({
  name: 'App',

  setup() {
    return () => (
      <q-layout view="hHh Lpr lff" class="h-full">
        <q-page-container class="h-full">
          <router-view />
        </q-page-container>
      </q-layout>
    )
  }
})
