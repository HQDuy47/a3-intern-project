import { defineComponent } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

export default defineComponent({
  name: 'DashBoardPage',
  setup() {
    const route = useRoute()
    return () => (
      <div>
        <h1>{route.path}</h1>
      </div>
    )
  }
})
