import { api } from "@/api/apiClient"
import { defineStore } from "pinia"
import { computed, ref } from "vue"

// Interfaces basadas en tu API
interface PropertyImage {
  id: number
  url: string
}

interface PropertyCity {
  id: number
  name: string
  state: {
    id: number
    name: string
  }
  country: {
    id: number
    name: string
  }
}

interface PropertyCategory {
  id: number
  description: string
}

interface PropertyType {
  id: number
  description: string
}

interface PropertyStatus {
  id: number
  description: string
}

interface PropertyProfile {
  id: number
  role: {
    id: number
    name: string
    description: string
  }
  user: {
    id: number
    name: string
    last_name: string
    email: string
    phone_number: string | null
  }
}

interface Property {
  id: number
  title: string
  price: number
  location: string
  latitude: number
  longitude: number
  building_age: number
  city: PropertyCity
  area: number
  rooms: number
  bathrooms: number
  parkings: number
  category: PropertyCategory
  currency: {
    id: number
    abbreviation: string
  }
  type: PropertyType
  status: PropertyStatus
  profile: PropertyProfile
  PropertyContact: any[]
  images: PropertyImage[]
}

interface ApiResponse {
  status: number
  message: string
  pagination: {
    total: number
    totalPages: number
    currentPage: number
    pageSize: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }
  data: Property[]
}

export const usePropertiesStore = defineStore('properties', () => {
  // Estado reactivo
  const properties = ref<Property[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const pagination = ref({
    total: 0,
    totalPages: 0,
    currentPage: 1,
    pageSize: 10,
    hasNextPage: false,
    hasPrevPage: false
  })

  // Getters computados
  const getProperties = computed(() => properties.value || [])
  const getIsLoading = computed(() => isLoading.value)
  const isError = computed(() => error.value !== null)
  const getError = computed(() => error.value)
  const getPagination = computed(() => pagination.value)

  // Separar propiedades por categoría
  const rentProperties = computed(() => {
    if (!properties.value || !Array.isArray(properties.value)) {
      return []
    }
    return properties.value.filter(property => 
      property.category.description.toLowerCase().includes('arrend') ||
      property.category.description.toLowerCase().includes('rent')
    )
  })

  const saleProperties = computed(() => {
    if (!properties.value || !Array.isArray(properties.value)) {
      return []
    }
    return properties.value.filter(property => 
      property.category.description.toLowerCase().includes('vent') ||
      property.category.description.toLowerCase().includes('sale')
    )
  })

  // Método para obtener propiedades por perfil
  const fetchPropertiesByProfile = async (profileId: number, page: number = 1, pageSize: number = 10) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await api.get<ApiResponse>(`/public/properties/all/?profile=${profileId}&page=${page}&pageSize=${pageSize}`)
      
      // Asegurar que siempre tengamos un array
      properties.value = Array.isArray(response.data) ? response.data : []
      pagination.value = response.pagination || {
        total: 0,
        totalPages: 0,
        currentPage: 1,
        pageSize: 10,
        hasNextPage: false,
        hasPrevPage: false
      }
      
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || err.message || 'Error al cargar las propiedades'
      // Asegurar que properties sea un array vacío en caso de error
      properties.value = []
      throw err
    } finally {
      isLoading.value = false
    }
  }

  // Método para cargar más propiedades (paginación)
  const loadMoreProperties = async (profileId: number) => {
    if (!pagination.value.hasNextPage || isLoading.value) return

    const nextPage = pagination.value.currentPage + 1
    
    try {
      isLoading.value = true
      const response = await api.get<ApiResponse>(`/public/properties/all/?profile=${profileId}&page=${nextPage}&pageSize=${pagination.value.pageSize}`)
      
      // Agregar nuevas propiedades a las existentes, asegurando que ambos sean arrays
      const currentProperties = Array.isArray(properties.value) ? properties.value : []
      const newProperties = Array.isArray(response.data) ? response.data : []
      properties.value = [...currentProperties, ...newProperties]
      
      pagination.value = response.pagination || pagination.value
      
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || err.message || 'Error al cargar más propiedades'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  // Método para formatear el precio
  const formatPrice = (price: number, currency: string = 'COP') => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: currency === 'VES' ? 'VES' : 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  // Método para obtener el color del badge basado en el estado
  const getBadgeColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'disponible':
      case 'available':
        return 'success'
      case 'vendido':
      case 'sold':
        return 'danger'
      case 'reservado':
      case 'reserved':
        return 'warning'
      case 'retirado':
      case 'withdrawn':
        return 'secondary'
      default:
        return 'primary'
    }
  }

  // Método para limpiar el estado
  const clearState = () => {
    properties.value = []
    error.value = null
    isLoading.value = false
    pagination.value = {
      total: 0,
      totalPages: 0,
      currentPage: 1,
      pageSize: 10,
      hasNextPage: false,
      hasPrevPage: false
    }
  }

  return {
    // Estado
    properties: getProperties,
    isLoading: getIsLoading,
    error: getError,
    isError,
    pagination: getPagination,
    rentProperties,
    saleProperties,
    
    // Métodos
    fetchPropertiesByProfile,
    loadMoreProperties,
    formatPrice,
    getBadgeColor,
    clearState
  }
})