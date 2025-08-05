import './assets/scss/theme.scss'
import { createPinia } from 'pinia'
import 'vue3-toastify/dist/index.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSmoothScroll from 'vue3-smooth-scroll'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import { useAuthStore } from '@/stores/auth'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(VueSmoothScroll)
app.use(Vue3Toastify, {
    autoClose: 3000,
    position: 'bottom-right',
  } as ToastContainerOptions);

// Inicialización asíncrona de la autenticación antes de montar la app
const initApp = async () => {
  const authStore = useAuthStore()
  
  try {
    // Esperar a que se complete la inicialización de la autenticación
    await authStore.initializeAuth()
    console.log('✅ Autenticación inicializada correctamente')
  } catch (error) {
    console.warn('⚠️ Error en inicialización de autenticación:', error)
  } finally {
    // Montar la aplicación independientemente del resultado
    app.mount('#app')
  }
}

// Ejecutar la inicialización
initApp()