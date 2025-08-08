// stores/auth.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { api, setAuthToken, clearAuthToken } from '@/api/apiClient'
import { usePerfilStore } from '@/stores/profile'
import { toast } from 'vue3-toastify'
import { Modal } from 'bootstrap'

// Interfaces (mantén las mismas que tienes)
export interface User {
  id: number
  email: string
  name: string
  last_name: string
  dni: string
  phone_number: string
  role: number
  created_at?: string
  updated_at?: string
  data?: any
}

export interface RegisterData {
  email: string
  password: string
  name: string
  last_name: string
  dni: string
  phone_number: string
  role: number,
  code?: string
}

export interface LoginData {
  email: string
  password: string
}

export interface AuthResponse {
  user: User
  token: string
  expires_in?: number
  message?: string
}

export const useAuthStore = defineStore('auth', () => {
  // Estado reactivo
  const user = ref<User | null>(null)
  const token = ref(localStorage.getItem('token') || '')
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const registerDataUser = ref<RegisterData | null>(null)
  const perfilStore = usePerfilStore()
const isAuth = ref(false)
  // Getters computados
  const isAuthenticated = computed(() => !!token.value)
  const isAdmin = computed(() => user.value?.role === 1)
  const fullName = computed(() => {
    if (!user.value) return ''
    return `${user.value.name} ${user.value.last_name}`
  })

  // Función para inicializar la sesión (verificar token guardado)
  const initializeAuth = async (): Promise<void> => {
    console.log(' Inicializando autenticación...')
    
    // Verificar si hay token guardado en el store
    if (token.value) {
      console.log(' Token encontrado en store:', token.value.substring(0, 20) + '...')
      
      // Configurar token en axios
      setAuthToken(token.value)
      isAuth.value = true
      try {
        await getProfile()
        console.log(' Sesión restaurada exitosamente')
      } catch (error) {
        console.warn(' Token inválido, limpiando sesión')
        await logout()
      }
    } else {
      console.log(' No hay token guardado')
      isAuth.value = false
    }
  }

  // Resto de funciones (mantén las mismas)
  const register = async (registerData: RegisterData): Promise<void> => {
    isLoading.value = true
    error.value = null

    try {
      const response = await api.post<AuthResponse>('/auth/register', registerData)
      registerDataUser.value = registerData
      sendCode(response.data.email)
      console.log(' Usuario registrado exitosamente:', response.user)
    } catch (err: any) {
      console.error(' Error en registro:', err)
      toast.error('Error al registrar usuario. Intenta nuevamente.')
      if (err.response?.data?.message) {
        error.value = err.response.data.message
      } else if (err.response?.data?.errors) {
        const errors = err.response.data.errors
        const errorMessages = Object.values(errors).flat()
        error.value = errorMessages.join(', ')
      } else {
        error.value = 'Error al registrar usuario. Intenta nuevamente.'
      }
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const sendCode = async (registerData: RegisterData): Promise<void> => {
    isLoading.value = true
    error.value = null

    try {
      const response = await api.post<AuthResponse>('/email/send-verification', {
        email: registerData
      })

      if (response) {
        toast.success('Código enviado');
      }
    } catch (err: any) {
      console.error(' Error en registro:', err)

      if (err.response?.data?.message) {
        error.value = err.response.data.message
      } else if (err.response?.data?.errors) {
        const errors = err.response.data.errors
        const errorMessages = Object.values(errors).flat()
        error.value = errorMessages.join(', ')
      } else {
        error.value = 'Error al registrar usuario. Intenta nuevamente.'
      }
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const verifyCode = async (code: RegisterData): Promise<void> => {
    isLoading.value = true
    error.value = null

    try {
      const response = await api.post<AuthResponse>('/email/verify-code/', {
        email: registerDataUser.value?.email,
        code: code,
        password: registerDataUser.value?.password,
      })

      if (response) {
        toast.success('Registro exitoso, por favor inicia sesión');

        const signupModalElement = document.getElementById('signup-modal');
        const signupModal = Modal.getInstance(signupModalElement) || new Modal(signupModalElement!);
        signupModal.hide();

        setTimeout(() => {
          registerDataUser.value.password = ''
          const signinModalElement = document.getElementById('signin-modal');
          const signinModal = Modal.getInstance(signinModalElement) || new Modal(signinModalElement!);
          signinModal.show();
        }, 300);
      }
    } catch (err: any) {
      toast.error('Error al verificar el código. Intenta nuevamente.')
      console.error(' Error en registro:', err)

      if (err.response?.data?.message) {
        error.value = err.response.data.message
      } else if (err.response?.data?.errors) {
        const errors = err.response.data.errors
        const errorMessages = Object.values(errors).flat()
        error.value = errorMessages.join(', ')
      } else {
        error.value = 'Error al registrar usuario. Intenta nuevamente.'
      }
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const login = async (loginData: LoginData): Promise<void> => {
    isLoading.value = true
    error.value = null

    try {
      const response = await api.post<AuthResponse>('/v1/auth/login', loginData)

      // Guardar datos de autenticación
      user.value = response.user
      token.value = response.token

      // Configurar token en axios
      setAuthToken(response.token)

      console.log(' Usuario logueado exitosamente:', response.user)
      console.log(' Token guardado:', response.token.substring(0, 20) + '...')

      const signinModalElement = document.getElementById('signin-modal');
      if (signinModalElement) {
        const signinModal = Modal.getInstance(signinModalElement) || new Modal(signinModalElement);
        signinModal.hide();
      }

      isAuth.value = true
      // Obtener perfil actualizado del servidor
      try {
        await getProfile()
      } catch (profileError) {
        console.warn('No se pudo actualizar el perfil después del login:', profileError)
      }

    } catch (err: any) {
      console.error(' Error en login:', err)
      isAuth.value = false
      if (err.response?.data?.message) {
        error.value = err.response.data.message
      } else {
        error.value = 'Credenciales incorrectas. Verifica tu email y contraseña.'
      }
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const logout = async (): Promise<void> => {
    isLoading.value = true

    try {
      // Intentar hacer logout en el servidor
      if (token.value) {
        await api.post('/auth/logout')
      }
    } catch (err) {
      console.warn('Error al hacer logout en el servidor:', err)
    } finally {
      // Limpiar estado local
      user.value = null
      token.value = ''
      error.value = null
      isAuth.value = false

      // Limpiar token de axios
      clearAuthToken()

      isLoading.value = false
      console.log(' Sesión cerrada')
    }
  }

  const getProfile = async (): Promise<void> => {
    if (!token.value) {
      throw new Error('No hay token de autenticación')
    }

    const wasLoading = isLoading.value
    if (!wasLoading) {
      isLoading.value = true
    }

    error.value = null

    try {
      const response = await api.get<{ user: User }>('/v1/auth/user/me/')
      user.value = response.data.user // Fixed: access the user property from the response
      perfilStore.setProfile(response.data.user)
      console.log(' Perfil obtenido:', user.value)

    } catch (err: any) {
      console.error(' Error al obtener perfil:', err)

      if (err.response?.status === 401) {
        await logout()
        throw new Error('Sesión expirada. Por favor, inicia sesión nuevamente.')
      }

      error.value = 'Error al obtener el perfil del usuario'
      throw err
    } finally {
      if (!wasLoading) {
        isLoading.value = false
      }
    }
  }

  // Función para verificar si el token sigue siendo válido
  const verifyToken = async (): Promise<boolean> => {
    if (!token.value) return false

    try {
      await getProfile()
      return true
    } catch {
      return false
    }
  }

  const clear = (): void => {
    user.value = null
    token.value = ''
    isLoading.value = false
    error.value = null
    // clearAuthToken()
  }

  return {
    // Estado
    user,
    token,
    isLoading,
    error,
    registerDataUser,
    isAuth,

    // Getters
    isAuthenticated,
    isAdmin,
    fullName,

    // Acciones
    register,
    login,
    logout,
    getProfile,
    verifyToken,
    initializeAuth,
    verifyCode,
    clear
  }
}, {
  persist: {
    storage: localStorage,
    key: 'auth',
    pick: ['user', 'token']
  }
})