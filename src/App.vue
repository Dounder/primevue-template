<script setup lang="ts">
import FullscreenLoader from '@shared/components/FullscreenLoader.vue'
import { useConfigStore } from '@shared/stores/config.store'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { useRoute, useRouter } from 'vue-router'
import { AuthStatus } from './modules/auth/interfaces'
import { useAuthStore } from './modules/auth/store/auth.store'

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()
const { setAppTheme } = useConfigStore()

setAppTheme()

authStore.$subscribe(
  async (_, state) => {
    if (route.path.includes('/auth') && state.authStatus === AuthStatus.Authenticated) {
      router.replace({ name: 'home' })
      return
    }

    if (authStore.authStatus === AuthStatus.Unauthenticated) {
      router.replace({ name: 'auth.login' })
    }
  },
  {
    immediate: true
  }
)
</script>

<template>
  <FullscreenLoader v-if="authStore.isChecking" />

  <RouterView v-else />
  <VueQueryDevtools button-position="bottom-left" />
  <Toast />
</template>

<style scoped></style>
