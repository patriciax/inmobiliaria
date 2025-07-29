import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { api, setAuthToken, clearAuthToken } from '@/api/apiClient'
import { toast } from 'vue3-toastify'

// Interfaces
export interface UserData {
  id: number
  email: string
  name: string
  last_name: string
  dni: string
  phone_number: string
  role: number
  created_at?: string
  updated_at?: string
}


export const usePropertyStore = defineStore('property', () => {
  // Estado reactivo
  const property = ref<UserData | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const  dataProperty = ref<UserData[]>([])

  const setProperty = async (propertyData: UserData): Promise<void> => {
    property.value = propertyData

    // Aquí podrías hacer una llamada a la API para guardar la propiedad si es necesario
  }

  const clearProperty = (): void => {
    property.value = null
    error.value = null
  }
  const getProperties = async (): Promise<UserData[] | null> => {
    isLoading.value = true
    error.value = null

    try {
      const response = await api.get<UserData[]>('/property')
    property.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Error al obtener las propiedades'
      toast.error(error.value)
      return null
    }
    }

  // Función para obtener una propiedad por ID
  const getPropertyById = async (id: number) => {
    isLoading.value = true
    error.value = null  

    try {
      const response = await api.get<UserData>(`/property/${id}`)
      property.value = response.data
      dataProperty.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Error al obtener la propiedad'
      toast.error('Error al obtener la propiedad')
      return null
    }
    }

  return {
    // Estado
    isLoading,
    error,
    property,
    dataProperty,
    clearProperty,
    getProperties,
    getPropertyById,
    setProperty,

  }
}, {
  // ✅ CORRECCIÓN: Configuración correcta del persist
  persist: {
    key: 'property',
    storage: sessionStorage,
  }
})