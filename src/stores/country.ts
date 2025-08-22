import { defineStore } from 'pinia'
import { api } from '@/api/apiClient'
import { ref } from 'vue'

export const useCountryStore = defineStore('country', () => {
  const country = ref<string | null>(null)

  const getCountry = async () => {
    try {
      const response = await api.get('https://ipapi.co/json/')
      console.log(response)
      country.value = response.country_name
    } catch (err) {
      console.error(err)
    }
  }

  return {
    country,
    getCountry
  }
})
