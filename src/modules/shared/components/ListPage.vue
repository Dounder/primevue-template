<script setup lang="ts"></script>

<template>
  <section class="mb-4 border-b-2 border-b-gray-300 dark:border-b-gray-700 py-4">
    <slot name="header" />
  </section>
  <section class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
    <slot name="body" />
  </section>
  <section class="py-8">
    <slot name="footer" />
  </section>
</template>

<style scoped></style>
