import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

const title = 'Inmobiliaria.club | Inmobiliario'

router.beforeEach((to) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title)

  if (nearestWithTitle) {
    document.title = title + ' | ' + nearestWithTitle.meta.title || title
  }
})

export default router
