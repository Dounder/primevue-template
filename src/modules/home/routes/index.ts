import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard'
import type { RouteRecordRaw } from 'vue-router'

export const HOME_ROUTES: RouteRecordRaw = {
  path: '/',
  name: 'home',
  alias: '/home',
  redirect: { name: 'home.view' },
  beforeEnter: [isAuthenticatedGuard],
  component: () => import('@/modules/home/layout/HomeLayout.vue'),
  children: [
    {
      path: '',
      name: 'home.view',
      component: () => import('@/modules/home/views/HomeView.vue')
    }
  ]
}
