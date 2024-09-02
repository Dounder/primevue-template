import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref } from 'vue'

type Theme = 'light' | 'dark'

export const useConfigStore = defineStore('config', () => {
  const theme = ref(useLocalStorage<Theme>('theme', 'light'))

  const setAppTheme = () => {
    const element = document.querySelector('html')
    element?.classList.remove('dark')

    if (theme.value === 'dark') element?.classList.add('dark')
  }

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'

    setAppTheme()
  }

  return {
    //? Props
    //* Getters
    //! Actions
    setAppTheme,
    toggleTheme
  }
})
