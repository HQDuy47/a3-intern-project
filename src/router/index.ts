/* eslint-disable indent */
import { route } from 'quasar/wrappers'
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router'
import routes from './routes'
// import { useAuthStore } from '../store/authStore'

export default route<any>(function (/* { store, ssrContext } */) {
  const createHistory =
    process.env.MODE === 'ssr'
      ? createMemoryHistory
      : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(
      // eslint-disable-next-line no-void
      process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE
    )
  })

  Router.beforeEach((to, from, next) => {
    next()
  })

  // Router.beforeEach((to, from, next) => {
  //   const authStore = useAuthStore()
  //   if (to.meta.requiresAuth && !authStore.user) {
  //     next('/login') // Chuyển hướng đến trang login nếu người dùng chưa đăng nhập
  //   } else {
  //     next() // Cho phép truy cập vào route
  //   }
  // })
  Router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem('Token') !== null

    if (!isLoggedIn && to.path !== '/login' && to.path !== '/register') {
      next('/login')
    } else if (
      isLoggedIn &&
      (to.path === '/login' || to.path === '/register')
    ) {
      next('/dashboard')
    } else {
      next()
    }
  })

  return Router
})
