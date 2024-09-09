<script setup lang="ts">
import MainNavbar from '../components/MainNavbar.vue'
</script>

<template>
  <!-- Main container for the page layout with full width and height using Tailwind's viewport sizing classes -->
  <main class="flex w-[100svw] h-[100svh]">
    <!-- Section that holds the main content and grows to fill available space -->
    <section class="flex flex-col flex-grow">
      <!-- Navbar component -->
      <MainNavbar />

      <!-- Main content area, with padding at the top and bottom, and horizontal scrolling enabled for overflow -->
      <section
        id="main-content"
        class="flex-grow pt-6 pb-12 px-6 overflow-x-auto bg-gray-50 dark:bg-dark-900"
      >
        <div class="max-w-[100rem] w-full mx-auto relative">
          <!-- RouterView will render the active route's component here -->
          <RouterView />
        </div>
      </section>
    </section>
  </main>
</template>

<style scoped></style>
