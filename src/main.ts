import './assets/scss/theme.scss'
import { createPinia } from 'pinia'
import 'vue3-toastify/dist/index.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSmoothScroll from 'vue3-smooth-scroll'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';


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
app.mount('#app')
