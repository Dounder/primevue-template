import type { RouteRecordRaw } from 'vue-router'

export const HOME_ROUTES: RouteRecordRaw = {
  path: '/',
  name: 'home.index',
  alias: '/home',
  component: () => import('@/modules/home/layout/HomeLayout.vue'),
  children: [
    {
      path: '',
      name: 'home.view',
      component: () => import('@/modules/home/views/HomeView.vue')
    }
  ]
}
