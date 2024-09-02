import './assets/main.css'

import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'

import './config/yup'

import App from './App.vue'
import Aura from './config/app.theme'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.dark'
    }
  },
  locale: {
    accept: 'Aceptar',
    reject: 'Rechazar'
  }
})

app.mount('#app')
