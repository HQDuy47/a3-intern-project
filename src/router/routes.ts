// import { RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../pages/Index'),
    children: [
      {
        path: '/profile',
        component: () => import('../pages/ProfilePage')
      },
      {
        path: '/dashboard',
        component: () => import('../pages/DashBoardPage')
      },
      {
        path: '/my-tasks',
        component: () => import('../pages/TaskPage')
      },
      {
        path: '/notifications',
        component: () => import('../pages/NotiPage')
      }
    ]
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
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

export default routes
