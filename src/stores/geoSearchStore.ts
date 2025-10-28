import { api } from "@/api/apiClient"
import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useGeoSearchStore = defineStore('geoSearch', () => {
  // Estado reactivo
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const properties = ref<any[]>([])
  const mapCenter = ref({ lat: 4.651318, lng: -74.0719292 }) // Bogotá por defecto
  const radius = ref(30) // km
  const selectedProperty = ref<any>(null)

  // Getters computados
  const getIsLoading = computed(() => isLoading.value)
  const hasProperties = computed(() => properties.value.length > 0)
  const propertiesCount = computed(() => properties.value.length)

  // Métodos
  const searchPropertiesByLocation = async (
    latitude: number,
    longitude: number,
    searchRadius?: number,
    filters?: {
      categoryId?: number
      countryId?: number | string
      bathrooms?: number
      parkings?: number
      rooms?: number
      min_price?: number
      max_price?: number
      stateId?: number
    }
  ) => {
    isLoading.value = true
    error.value = null

    try {
      const rad = searchRadius || radius.value
      
      // Construir los parámetros de búsqueda
      const params = new URLSearchParams({
        latitude: latitude.toString(),
        longitude: longitude.toString(),
        radius: rad.toString()
      })

      // Agregar filtros opcionales si existen
      if (filters) {
        if (filters.categoryId) params.append("category", filters.categoryId.toString())
        if (filters.countryId) params.append("country", filters.countryId.toString())
        if (filters.bathrooms) params.append("bathrooms", filters.bathrooms.toString())
        if (filters.parkings) params.append("parkings", filters.parkings.toString())
        if (filters.rooms) params.append("rooms", filters.rooms.toString())
        if (filters.min_price) params.append("min_price", filters.min_price.toString())
        if (filters.max_price) params.append("max_price", filters.max_price.toString())
        if (filters.stateId) params.append("state", filters.stateId.toString())
      }

      const response = await api.get(
        `/public/properties/search-geo?${params.toString()}`
      )
      
      properties.value = response.data
      mapCenter.value = { lat: latitude, lng: longitude }
      
      return response.data
    } catch (err: any) {
      error.value = err.message || 'Error al buscar propiedades'
      properties.value = []
    } finally {
      isLoading.value = false
    }
  }

  const searchByCurrentLocation = async (filters?: {
    categoryId?: number
    countryId?: number | string
    bathrooms?: number
    parkings?: number
    rooms?: number
    min_price?: number
    max_price?: number
    stateId?: number
  }) => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        error.value = 'La geolocalización no está disponible'
        reject(error.value)
        return
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords
          const result = await searchPropertiesByLocation(latitude, longitude, undefined, filters)
          resolve(result)
        },
        (err) => {
          error.value = 'No se pudo obtener la ubicación'
          reject(err)
        }
      )
    })
  }

  const updateRadius = (newRadius: number) => {
    radius.value = newRadius
  }

  const selectProperty = (property: any) => {
    selectedProperty.value = property
  }

  const clearSelection = () => {
    selectedProperty.value = null
  }

  const clearProperties = () => {
    properties.value = []
    error.value = null
  }

  return {
    // Estado
    isLoading,
    error,
    properties,
    mapCenter,
    radius,
    selectedProperty,
    
    // Getters
    getIsLoading,
    hasProperties,
    propertiesCount,
    
    // Métodos
    searchPropertiesByLocation,
    searchByCurrentLocation,
    updateRadius,
    selectProperty,
    clearSelection,
    clearProperties
  }
})