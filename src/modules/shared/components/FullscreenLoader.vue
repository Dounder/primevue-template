<script setup lang="ts">
import { useConfigStore } from '../stores/config.store'

const { darkTheme } = useConfigStore()
</script>

<template>
  <div class="h-screen w-screen flex justify-center items-center dark:bg-dark-900 bg-gray-200">
    <svg width="150" height="150" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
      <rect class="spinner_9y7u" x="1" y="1" rx="1" width="30" height="30" fill="#94cc34" />
      <rect
        class="spinner_9y7u spinner_DF2s"
        x="1"
        y="1"
        rx="1"
        width="30"
        height="30"
        :fill="darkTheme ? '#f2f2f2' : '#1e1e1e'"
      />
      <rect
        class="spinner_9y7u spinner_q27e"
        x="1"
        y="1"
        rx="1"
        width="30"
        height="30"
        :fill="darkTheme ? '#f2f2f2' : '#1e1e1e'"
      />
    </svg>
  </div>
</template>

<style scoped>
.spinner_9y7u {
  animation: spinner_fUkk 2.4s linear infinite;
  animation-delay: -2.4s;
}
.spinner_DF2s {
  animation-delay: -1.6s;
}
.spinner_q27e {
  animation-delay: -0.8s;
}
@keyframes spinner_fUkk {
  8.33% {
    x: calc(13px * 3);
    y: calc(1px * 3);
  }
  25% {
    x: calc(13px * 3);
    y: calc(1px * 3);
  }
  33.3% {
    x: calc(13px * 3);
    y: calc(13px * 3);
  }
  50% {
    x: calc(13px * 3);
    y: calc(13px * 3);
  }
  58.33% {
    x: calc(1px * 3);
    y: calc(13px * 3);
  }
  75% {
    x: calc(1px * 3);
    y: calc(13px * 3);
  }
  83.33% {
    x: calc(1px * 3);
    y: calc(1px * 3);
  }
}
</style>
