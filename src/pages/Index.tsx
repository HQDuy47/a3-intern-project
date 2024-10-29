import { defineComponent } from 'vue'
import MainLayout from '../layouts/MainLayout'

export default defineComponent({
  // eslint-disable-next-line space-before-function-paren
  setup() {
    return () => <MainLayout />
  }
})
