// stores/auth.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { api, setAuthToken, clearAuthToken } from '@/api/apiClient'

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


export const usePerfilStore = defineStore('profile', () => {
  // Estado reactivo
  const userData = ref<UserData | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)





  const setProfile = async (user: UserData): Promise<void> => {
    userData.value = user
  }


  return {
    // Estado
    userData,
    isLoading,
    error,
    setProfile,

  }
}, {
  // ✅ CORRECCIÓN: Configuración correcta del persist
  persist: {
    key: 'perfil',
    storage: sessionStorage,
    paths: ['userData']
  }
})