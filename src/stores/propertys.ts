import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { api, setAuthToken, clearAuthToken } from '@/api/apiClient'
import { toast } from 'vue3-toastify'
import type { User } from './auth'
import type { Role } from './auth'

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
  city?: number
  property_condition?: string
  neighborhood?: string
  category?: {
    id: number
    name: string
    description: string
    created_at?: string
    updated_at?: string
  }
  images?: {
    id: number
    url: {
      full: string
      medium?: string
      thumbnail?: string
    }
    property_id: number
    created_at?: string
    updated_at?: string
    publish?: boolean
    sort_by?: number
    description?: string
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
  details?: {
    video_url?: string
    view360_url?: string
    map_url?: string
    description?: string
    [key: string]: any
  }
  // Property-specific fields
  title?: string
  location?: string
  rooms?: number
  parkings?: number
  visits?: number
  observations?: string
  notes?: string
  type?: {
    id: number
    name: string
    description?: string
    created_at?: string
    updated_at?: string
  }
  year?: number
  pets?: boolean
  badge?: string[]
  beds?: number
  baths?: number
  cars?: number
  profile?: {
    id: number
    user: User
    role: Role
    created_at?: string
    updated_at?: string
  }
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
  const dataProperty = ref<UserData | null>(null)
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
  const getPropertiesPublic = async (
    page: number = 1,
    pageSize: number = 10,
    categoryId?: number,
    countryId?: number | string,
    bathrooms?: number,
    parkings?: number,
    rooms?: number,
    min_price?: number,
    max_price?: number,
    stateId?: number
  ): Promise<UserData[] | null> => {
    console.log('getPropertiesPublic called with:', { page, pageSize, categoryId, countryId, bathrooms, parkings, rooms })
    isLoading.value = true
    error.value = null
  
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        pageSize: pageSize.toString(),
      })
  
      if (categoryId) params.append("category", categoryId.toString())
      if (countryId) params.append("country", countryId.toString())
      if (bathrooms) params.append("bathrooms", bathrooms.toString())
      if (parkings) params.append("parkings", parkings.toString())
      if (rooms) params.append("rooms", rooms.toString())
      if (min_price) params.append("min_price", min_price.toString())
      if (max_price) params.append("max_price", max_price.toString())
      if (stateId) params.append("state", stateId.toString())
  
      const response = await api.get<PropertyResponse>(`/public/properties/all/?${params.toString()}`)
  
      if (!response.data || response.data.length === 0) {
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
      const response = await api.get(`/public/properties/${id}`)
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
  // persist: {
  //   key: 'property',
  //   storage: sessionStorage,
  // }
})