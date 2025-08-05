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
  category_id?: number
  category?: {
    id: number
    name: string
    description: string
    created_at?: string
    updated_at?: string
  }
  images?: {
    id: number
    url: string
    property_id: number
    created_at?: string
    updated_at?: string
  }[]
  address?: {
    id: number
    street: string
    city: string
    state: string
    zip_code: string
  }     
  description?: string
  price?: number
  status?: string
  latitude?: number
  longitude?: number
  area?: number
  bedrooms?: number
  bathrooms?: number
  garage?: boolean
  amenities?: string[]
  features?: string[]
  property_type?: string
  property_status?: string
  
}

export interface PaginationData {
  total: number
  totalPages: number
  currentPage: number
  pageSize: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export interface PropertyResponse {
  data: UserData[]
  pagination: PaginationData
}

export const usePropertyStore = defineStore('property', () => {
  // Estado reactivo
  const property = ref<UserData[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const dataProperty = ref<UserData[]>([])
  const pagination = ref<PaginationData>({
    total: 0,
    totalPages: 0,
    currentPage: 1,
    pageSize: 10,
    hasNextPage: false,
    hasPrevPage: false
  })

  const setProperty = async (propertyData: UserData): Promise<void> => {
    // Aquí podrías hacer una llamada a la API para guardar la propiedad si es necesario
  }

  const clearProperty = (): void => {
    property.value = []
    error.value = null
    pagination.value = {
      total: 0,
      totalPages: 0,
      currentPage: 1,
      pageSize: 10,
      hasNextPage: false,
      hasPrevPage: false
    }
  }

  const getPropertiesPublic = async (page: number = 1, pageSize: number = 10, categoryId?: number): Promise<UserData[] | null> => {
    isLoading.value = true
    error.value = null

    try {
      const response = await api.get<PropertyResponse>(`/public/properties/all/?page=${page}&pageSize=${pageSize}${categoryId ? `&category=${categoryId}` : ''}`)
      if (!response.data || response.data.length === 0) {
        error.value = 'No se encontraron propiedades'
        toast.error(error.value)
        return null
      }
      property.value = response.data
      pagination.value = response.pagination
      return response.data
    } catch (err: any) {
      error.value = err.message || 'Error al obtener las propiedades'
      toast.error(error.value)
      return null
    } finally {
      isLoading.value = false
    }
  }

  const getProperties = async (page: number = 1, pageSize: number = 10): Promise<UserData[] | null> => {
    isLoading.value = true
    error.value = null

    try {
      const response = await api.get<PropertyResponse>(`/property?page=${page}&pageSize=${pageSize}`)
      property.value = response.data
      pagination.value = response.pagination
      return response.data
    } catch (err: any) {
      error.value = err.message || 'Error al obtener las propiedades'
      toast.error(error.value)
      return null
    } finally {
      isLoading.value = false
    }
  }

  // Función para obtener una propiedad por ID
  const getPropertyById = async (id: number) => {
    isLoading.value = true
    error.value = null  

    try {
      const response = await api.get<UserData>(`/public/properties/${id}`)
      dataProperty.value = response.data
      return response.data
    } catch (err: any) {
      error.value = err.message || 'Error al obtener la propiedad'
      toast.error('Error al obtener la propiedad')
      return null
    } finally {
      isLoading.value = false
    }
  }

  // Funciones de navegación de paginación
  const goToPage = async (page: number) => {
    if (page >= 1 && page <= pagination.value.totalPages) {
      await getPropertiesPublic(page, pagination.value.pageSize)
    }
  }

  const nextPage = async () => {
    if (pagination.value.hasNextPage) {
      await goToPage(pagination.value.currentPage + 1)
    }
  }

  const prevPage = async () => {
    if (pagination.value.hasPrevPage) {
      await goToPage(pagination.value.currentPage - 1)
    }
  }

  return {
    // Estado
    isLoading,
    error,
    property,
    dataProperty,
    pagination,
    
    // Métodos
    clearProperty,
    getProperties,
    getPropertyById,
    setProperty,
    getPropertiesPublic,
    goToPage,
    nextPage,
    prevPage,
  }
}, {
  persist: {
    key: 'property',
    storage: sessionStorage,
  }
})