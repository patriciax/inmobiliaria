import { api } from "@/api/apiClient"
import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useFiltersStore = defineStore('filters', () => {
  // Estado reactivo
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const ubications = ref<any[]>([])
  const listTypeProperty = ref<any[]>([])
  const states = ref<any[]>([])
  const currentcountry = ref<string | null>(null)

  // Getters computados
  const getIsLoading = computed(() => isLoading.value)
  const isError = computed(() => error.value !== null)
  const hasUbications = computed(() => ubications.value.length > 0)

  // Métodos
  const getCountries = async () => {
    isLoading.value = true
    error.value = null

    try {
      // const response = await api.get('v1/country/')
      const response = await api.get('v1/country/property/')
      currentcountry.value = response.data[0]?.country_name || null
      ubications.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Error al obtener las ubicaciones'
    } finally {
      isLoading.value = false
    }
  }

  const getStates = async (countryId: number) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await api.get(`v1/state/?country=${countryId}`)
      states.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Error al obtener las ubicaciones'
    } finally {
      isLoading.value = false 
    }
    }
    

  const getTypeProperty = async () => {
    isLoading.value = true
    error.value = null

    try {
      const response = await api.get('v1/type/?module=5')

      listTypeProperty.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Error al obtener las ubicaciones'
    } finally {
      isLoading.value = false
    }
  }


  return {
    isLoading,
    getIsLoading,
    isError,
    hasUbications,
    ubications,
    getCountries,
    listTypeProperty,
    getTypeProperty,
    states,
    getStates,
    error,
    currentcountry
  }
})