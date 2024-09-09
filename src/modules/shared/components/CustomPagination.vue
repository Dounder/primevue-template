<script setup lang="ts">
import { PrimeIcons as icons } from '@primevue/core/api'
import { computed, ref } from 'vue'

interface Props {
  totalRecords: number
  page: number
  lastPage: number
}

const props = defineProps<Props>()
const isMobile = ref(window.innerWidth <= 768)
const visiblePages = computed(() => {
  const visible = []
  const startPage = Math.max(1, props.page - 2)
  const endPage = Math.min(props.lastPage, props.page + 2)

  for (let i = startPage; i <= endPage; i++) visible.push(i)

  return visible
})
</script>

<template>
  <div class="flex justify-center items-center py-10 gap-2" v-if="lastPage > 1">
    <Button
      text
      rounded
      :icon="icons.ANGLE_DOUBLE_LEFT"
      :disabled="page === 1"
      @click="$router.push({ query: { page: 1 } })"
    />
    <Button
      text
      rounded
      :icon="icons.ANGLE_LEFT"
      :disabled="page === 1"
      @click="$router.push({ query: { page: page - 1 } })"
    />

    <span v-if="isMobile" class="mx-4 dark:text-muted-color">
      Página {{ page }} de {{ lastPage }}
    </span>

    <Button
      v-else
      v-for="p in visiblePages"
      :key="p"
      :text="page !== p"
      rounded
      class="w-10"
      @click="$router.push({ query: { page: p } })"
      :label="p.toString()"
    />

    <Button
      text
      rounded
      :icon="icons.ANGLE_RIGHT"
      :disabled="page === lastPage"
      @click="$router.push({ query: { page: page + 1 } })"
    />
    <Button
      text
      rounded
      :icon="icons.ANGLE_DOUBLE_RIGHT"
      :disabled="page === lastPage"
      @click="$router.push({ query: { page: lastPage } })"
    />
  </div>
</template>

<style scoped></style>
