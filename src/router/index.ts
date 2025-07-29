import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

const title = 'Inmobiliaria.club | Inmobiliario'

// Promise para controlar la inicialización única
let authInitializationPromise: Promise<void> | null = null

const initializeAuthOnce = async (): Promise<void> => {
  if (!authInitializationPromise) {
    authInitializationPromise = (async () => {
      const authStore = useAuthStore()
      
      try {
        console.log('🔄 Inicializando autenticación desde router...')
        await authStore.initializeAuth()
        console.log('✅ Autenticación inicializada exitosamente')
      } catch (error) {
        console.error('❌ Error al inicializar autenticación:', error)
      }
    })()
  }
  
  return authInitializationPromise
}

router.beforeEach(async (to, from, next) => {
  // Inicializar autenticación solo una vez
  await initializeAuthOnce()

  // Manejo de títulos
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title)

  if (nearestWithTitle) {
    document.title = title + ' | ' + nearestWithTitle.meta.title || title
  }

  // Verificar rutas protegidas
  const authStore = useAuthStore()
  
  // Si la ruta requiere autenticación y no está autenticado
  if (to.meta?.requiresAuth && !authStore.isAuthenticated) {
    console.log('🔐 Acceso denegado a ruta protegida:', to.path)
    
    // Opcional: mostrar modal de login o redirigir
    // Aquí podrías emitir un evento para mostrar el modal de login
    // window.dispatchEvent(new CustomEvent('show-login-modal'))
    
    // O redirigir a una página de login
    // next('/login')
    
    // Por ahora, permitir acceso pero logear
    next()
  } else {
    next()
  }
})

// Opcional: Interceptor para logout automático en caso de token inválido
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  
  // Si hay token pero no está autenticado, verificar validez
  if (authStore.token && !authStore.isAuthenticated) {
    try {
      const isValid = await authStore.verifyToken()
      if (!isValid) {
        console.log('🔐 Token inválido, cerrando sesión...')
        await authStore.logout()
      }
    } catch (error) {
      console.error('❌ Error al verificar token:', error)
    }
  }
  
  next()
})

export default router