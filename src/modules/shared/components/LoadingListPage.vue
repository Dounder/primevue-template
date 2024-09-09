<script setup lang="ts">
import Skeleton from 'primevue/skeleton'
import CustomCard from './CustomCard.vue'
import { getLimitPaginationHelper } from '../helpers'
</script>

<template>
  <CustomCard v-for="index in getLimitPaginationHelper()" :key="index">
    <template #title>
      <Skeleton width="10rem"></Skeleton>
    </template>
    <template #subtitle>
      <Skeleton width="5rem"></Skeleton>
    </template>
    <template #content>
      <Skeleton width="100%" height="6rem"></Skeleton>
    </template>
    <template #footer>
      <div class="flex justify-end mt-1">
        <Skeleton width="6rem" height="3rem"></Skeleton>
      </div>
    </template>
  </CustomCard>
</template>

<style scoped></style>
