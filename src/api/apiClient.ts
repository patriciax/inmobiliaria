// src/services/apiClient.ts
import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig
} from 'axios'

// Configuración base del cliente
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://mls.inmobiliaria.club/apire/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})

// Interceptor para requests - agregar token de autenticación si existe
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Obtener token del sessionStorage
    const token = sessionStorage.getItem('authToken')
    
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    // Log para desarrollo
    if (import.meta.env.MODE === 'development') {
      console.log('🚀 Request:', {
        method: config.method?.toUpperCase(),
        url: config.url,
        hasToken: !!token,
        data: config.data
      })
    }
    
    return config
  },
  (error) => {
    console.error('❌ Request Error:', error)
    return Promise.reject(error)
  }
)

// Interceptor para responses - manejo de errores globales
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Log para desarrollo
    if (import.meta.env.MODE === 'development') {
      console.log('✅ Response:', {
        status: response.status,
        url: response.config.url,
        data: response.data
      })
    }
    
    return response
  },
  (error) => {
    // Manejo de errores comunes
    if (error.response) {
      const status = error.response.status
      
      switch (status) {
        case 401:
          // Token expirado o no válido
          console.error('🔐 Error de autenticación - Token inválido')
          // Limpiar tokens
          // sessionStorage.removeItem('authToken')
          // localStorage.removeItem('authToken')
          
          // Aquí podrías emitir un evento para que el store haga logout
          // O usar un composable para manejar el logout global
          window.dispatchEvent(new CustomEvent('auth:token-invalid'))

          break
          
        case 403:
          console.error('🚫 No tienes permisos para esta acción')
          break
          
        case 404:
          console.error('🔍 Recurso no encontrado')
          break
          
        case 422:
          console.error('📝 Errores de validación:', error.response.data)
          break
          
        case 500:
          console.error('💥 Error interno del servidor')
          break
          
        default:
          console.error(`❌ Error ${status}:`, error.response.data)
      }
    } else if (error.request) {
      console.error('🌐 Error de conexión:', error.message)
    } else {
      console.error('⚠️ Error:', error.message)
    }
    
    return Promise.reject(error)
  }
)

// Funciones helper para diferentes tipos de requests
export const api = {
  // GET request
  get: <T = any>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return apiClient.get(url, config).then(response => response.data)
  },
  
  // POST request
  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    return apiClient.post(url, data, config).then(response => response.data)
  },
  
  // PUT request
  put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    return apiClient.put(url, data, config).then(response => response.data)
  },
  
  // PATCH request
  patch: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    return apiClient.patch(url, data, config).then(response => response.data)
  },
  
  // DELETE request
  delete: <T = any>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return apiClient.delete(url, config).then(response => response.data)
  },
  
  // Upload de archivos
  upload: <T = any>(url: string, formData: FormData, onUploadProgress?: (progressEvent: any) => void): Promise<T> => {
    return apiClient.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress
    }).then(response => response.data)
  }
}

// Exportar también el cliente base por si necesitas más control
export default apiClient

// Tipos TypeScript para respuestas comunes de API
export interface ApiResponse<T = any> {
  data: T
  message?: string
  success: boolean
}

export interface PaginatedResponse<T = any> {
  data: T[]
  meta: {
    current_page: number
    last_page: number
    per_page: number
    total: number
  }
}

// Función para configurar el token de autenticación
export const setAuthToken = (token: string) => {
  console.log('🔑 Configurando token:', token.substring(0, 20) + '...')
  sessionStorage.setItem('authToken', token)
}

// Función para limpiar el token de autenticación
export const clearAuthToken = () => {
  console.log('🧹 Limpiando tokens de autenticación')
  sessionStorage.removeItem('authToken')
  localStorage.removeItem('authToken') // Por si acaso
}