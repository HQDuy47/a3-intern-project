import { RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../pages/Index')
  },
  {
    path: '/login',
    component: () => import('../pages/LoginPage'),
    meta: { layout: null }
  },
  {
    path: '/register',
    component: () => import('../pages/RegisterPage'),
    meta: { layout: null }
  },
  {
    path: '/profile',
    component: () => import('../pages/ProfilePage'),
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard',
    component: () => import('../pages/DashBoardPage'),
    meta: { requiresAuth: true }
  },
  {
    path: '/my-tasks',
    component: () => import('../pages/TaskPage'),
    meta: { requiresAuth: true }
  },
  {
    path: '/notifications',
    component: () => import('../pages/NotiPage'),
    meta: { requiresAuth: true }
  },
  {
    path: '/signin',
    component: () => import('../pages/SignInPage')
  },
  {
    path: '/signup',
    component: () => import('../pages/SignUpPage')
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

export default routes
