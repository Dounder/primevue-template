<script setup lang="ts">
import { useConfigStore } from '@shared/stores/config.store'

const { setAppTheme, toggleTheme } = useConfigStore()

setAppTheme()
</script>

<template>
  <div class="w-[100swh] h-[100svh] flex flex-col items-center justify-center space-y-4">
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
    <Button label="Toggle Color Scheme" @click="toggleTheme()" />
  </div>
</template>
