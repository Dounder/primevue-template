import { HOME_ROUTES } from '@/modules/home/routes'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [HOME_ROUTES]
})

export default router
