import { AUTH_ROUTES } from '@/modules/auth/routes'
import { HOME_ROUTES } from '@/modules/home/routes'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [HOME_ROUTES, AUTH_ROUTES]
})

export default router
