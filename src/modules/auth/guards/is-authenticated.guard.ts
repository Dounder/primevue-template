import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { AuthStatus } from '../interfaces'
import { useAuthStore } from '../store/auth.store'

const isAuthenticatedGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const authStore = useAuthStore()

  // If the auth status is checking, wait for it to complete
  if (authStore.authStatus === AuthStatus.Checking) await authStore.checkAuthStatus()

  // If the user is unauthenticated, redirect to login
  if (authStore.authStatus === AuthStatus.Unauthenticated) {
    localStorage.setItem('lastAttemptedRoute', JSON.stringify(to.fullPath)) // Save route
    next({ name: 'auth.login' })
    return
  }

  const lastAttemptedRoute = localStorage.getItem('lastAttemptedRoute')
  if (lastAttemptedRoute) {
    localStorage.removeItem('lastAttemptedRoute')
    next(JSON.parse(lastAttemptedRoute))
    return
  }

  next()
}

export default isAuthenticatedGuard
