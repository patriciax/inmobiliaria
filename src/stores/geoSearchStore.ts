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
  const searchPropertiesByLocation = async (latitude: number, longitude: number, searchRadius?: number) => {
    isLoading.value = true
    error.value = null

    try {
      const rad = searchRadius || radius.value
      const response = await api.get(
        `/public/properties/search-geo?latitude=${latitude}&longitude=${longitude}&radius=${rad}`
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

  const searchByCurrentLocation = async () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        error.value = 'La geolocalización no está disponible'
        reject(error.value)
        return
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords
          const result = await searchPropertiesByLocation(latitude, longitude)
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