import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { AuthStatus } from '../interfaces'
import { useAuthStore } from '../store/auth.store'

const isUnauthenticatedGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const authStore = useAuthStore()

  // If the auth status is checking, wait for it to complete
  if (authStore.authStatus === AuthStatus.Checking) await authStore.checkAuthStatus()

  // If the user is authenticated, allow the navigation
  authStore.authStatus === AuthStatus.Authenticated ? next({ name: 'home.view' }) : next()
}

export default isUnauthenticatedGuard
