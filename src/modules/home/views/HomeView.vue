<script setup lang="ts">
import { useAuthStore } from '@/modules/auth/store/auth.store'

const authStore = useAuthStore()
</script>

<template>
  <h1 className="text-center text-3xl font-bold underline">Welcome! {{ authStore.username }}</h1>
</template>
