import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useAuthStore } from '../store/auth.store'
import { AuthStatus } from '../interfaces'

const isAdminGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const authStore = useAuthStore()

  // If the auth status is checking, wait for it to complete
  if (authStore.authStatus === AuthStatus.Checking) await authStore.checkAuthStatus()

  authStore.isAdmin ? next() : next({ name: 'home' })
}

export default isAdminGuard
