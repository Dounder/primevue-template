import type { RouteRecordRaw } from 'vue-router'
import isUnauthenticatedGuard from '../guards/is-unauthenticated.guard'

export const AUTH_ROUTES: RouteRecordRaw = {
  path: '/auth',
  name: 'auth.index',
  redirect: { name: 'auth.login' },
  beforeEnter: [isUnauthenticatedGuard],
  component: () => import('@/modules/auth/layout/AuthLayout.vue'),
  children: [
    {
      path: 'login',
      name: 'auth.login',
      component: () => import('@/modules/auth/views/LoginView.vue')
    }
  ]
}
