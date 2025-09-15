import { api } from "@/api/apiClient"
import { defineStore } from "pinia"
import { computed, ref } from "vue"

interface ContactForm {
  name: string
  last_name: string
  email: string
  phone: string
  message: string
  subscribe: boolean
  scheduledDate: string
  propertyId: number
}

export const useContactStore = defineStore('contact', () => {
  // Estado reactivo
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const isSuccess = ref(false)

  // Getters computados
  const getIsLoading = computed(() => isLoading.value)
  const isError = computed(() => error.value !== null)
  const getError = computed(() => error.value)
  const getIsSuccess = computed(() => isSuccess.value)

  // Método para enviar el formulario de contacto
  const sendContact = async (formData: ContactForm, agentId: number) => {
    isLoading.value = true
    error.value = null
    isSuccess.value = false

    try {
      const response = await api.post(`v1/agent/${agentId}/contact/`, formData)
      isSuccess.value = true
      return response.data
    } catch (err: any) {
      error.value = err.response?.data?.message || err.message || 'Error al enviar el mensaje'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  // Método para limpiar el estado
  const clearState = () => {
    error.value = null
    isSuccess.value = false
    isLoading.value = false
  }

  return {
    // Estado
    isLoading: getIsLoading,
    error: getError,
    isError,
    isSuccess: getIsSuccess,
    
    // Métodos
    sendContact,
    clearState
  }
})