<template>
  <h1 className="text-3xl font-bold underline">Hello world!</h1>
  <Button label="Toggle Color Scheme" @click="toggleTheme()" />
</template>

<script setup lang="ts">
import { useConfigStore } from '@shared/stores/config.store'

const { setAppTheme, toggleTheme } = useConfigStore()

setAppTheme()
</script>

<style scoped></style>
