import './assets/main.css'
import 'primeicons/primeicons.css'

import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import FocusTrap from 'primevue/focustrap'
import ToastService from 'primevue/toastservice'
import Tooltip from 'primevue/tooltip'

import './config/yup'

import App from './App.vue'
import Aura from './config/app.theme'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin)
app.use(PrimeVue, {
  theme: { preset: Aura, options: { darkModeSelector: '.dark' } },
  locale: { accept: 'Aceptar', reject: 'Rechazar' }
})
app.use(ToastService)
app.directive('focustrap', FocusTrap)
app.directive('tooltip', Tooltip)

app.mount('#app')
