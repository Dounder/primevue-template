<script setup lang="ts">
import type { CardSlots } from 'primevue/card'

// Define the slots for the Card component
defineSlots<CardSlots>()
</script>

<template>
  <Card class="dark:bg-dark-800 border dark:border-gray-700 border-primary-400">
    <!-- Use the slots here -->
    <template #header>
      <slot name="header" />
    </template>
    <template #title>
      <slot name="title" />
    </template>
    <template #subtitle>
      <slot name="subtitle" />
    </template>
    <template #content>
      <slot name="content" />
    </template>
    <template #footer>
      <slot name="footer" />
    </template>
  </Card>
</template>

<style scoped></style>
