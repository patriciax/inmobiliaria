<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { useContactStore } from '@/stores/contactStore' 
import { toast } from 'vue3-toastify'

// Props (opcional si necesitas pasar el agentId y propertyId desde el componente padre)
interface Props {
  agentId?: number
  propertyId?: number
}

const props = withDefaults(defineProps<Props>(), {
  agentId: 0, 
  propertyId: 0
})

// Store
const contactStore = useContactStore()

// Referencias del formulario
const formRef = ref<HTMLFormElement>()

// Datos del formulario
const formData = reactive({
  name: '',
  last_name: '',
  email: '',
  phone: '',
  message: '',
  subscribe: true,
  scheduledDate: '',
  propertyId: props.propertyId
})

// Validación del formulario
const validateForm = (): boolean => {
  const form = formRef.value
  if (!form) return false

  // Usar la validación nativa de Bootstrap
  if (!form.checkValidity()) {
    form.classList.add('was-validated')
    return false
  }

  return true
}

// Enviar formulario
const handleSubmit = async (event: Event) => {
  event.preventDefault()
  
  if (!validateForm()) {
    return
  }

  try {
    await contactStore.sendContact(formData, props.agentId)
    
    // Limpiar formulario si es exitoso
    resetForm()
    
    toast.success('¡Mensaje enviado exitosamente!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000
    })

    
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
    // El error ya se maneja en el store
  }
}

// Resetear formulario
const resetForm = () => {
  Object.assign(formData, {
    name: '',
    last_name: '',
    email: '',
    phone: '',
    message: '',
    subscribe: true,
    scheduledDate: '',
    propertyId: props.propertyId
  })
  
  // Remover clases de validación
  if (formRef.value) {
    formRef.value.classList.remove('was-validated')
  }
}

// Limpiar estado cuando se monta el componente
onMounted(() => {
  contactStore.clearState()
  
})
</script>

<template>
  <section>
    <form 
      ref="formRef"
      class="needs-validation" 
      novalidate 
      @submit="handleSubmit"
    >
      <!-- Mensaje de error global -->
      <div v-if="contactStore.isError" class="alert alert-danger mb-3" role="alert">
        {{ contactStore.error }}
      </div>

      <!-- Mensaje de éxito -->
      <div v-if="contactStore.isSuccess" class="alert alert-success mb-3" role="alert">
        ¡Mensaje enviado exitosamente!
      </div>

      <div class="mb-3">
        <input 
          v-model="formData.name"
          class="form-control" 
          type="text" 
          placeholder="Nombre*" 
          required 
          :disabled="contactStore.isLoading"
        />
        <div class="invalid-feedback">Por favor ingrese su nombre</div>
      </div>

      <div class="mb-3">
        <input 
          v-model="formData.last_name"
          class="form-control" 
          type="text" 
          placeholder="Apellido*" 
          required 
          :disabled="contactStore.isLoading"
        />
        <div class="invalid-feedback">Por favor ingrese su apellido</div>
      </div>

      <div class="mb-3">
        <input 
          v-model="formData.email"
          class="form-control" 
          type="email" 
          placeholder="Email*" 
          required 
          :disabled="contactStore.isLoading"
        />
        <div class="invalid-feedback">Por favor ingrese un email válido</div>
      </div>

      <input 
        v-model="formData.phone"
        class="form-control mb-3" 
        type="tel" 
        placeholder="No. Telefónico" 
        :disabled="contactStore.isLoading"
      />

      <div class="input-group mb-3">
        <input
          v-model="formData.scheduledDate"
          class="form-control date-picker rounded pe-5"
          type="date"
          placeholder="Elegir fecha"
          :disabled="contactStore.isLoading"
          :min="new Date(Date.now() + 86400000).toISOString().split('T')[0]"
          />
        <!-- <i class="fi-calendar position-absolute top-50 end-0 translate-middle-y me-3"></i> -->
      </div>

      <textarea
        v-model="formData.message"
        class="form-control mb-3"
        rows="3"
        placeholder="Mensaje*"
        style="resize: none"
        required
        :disabled="contactStore.isLoading"
      ></textarea>

      <div class="mb-3">
        <div class="form-check">
          <input 
            v-model="formData.subscribe"
            class="form-check-input" 
            type="checkbox" 
            id="subscribe"
            :disabled="contactStore.isLoading"
          />
          <label class="form-check-label" for="subscribe">
            Suscribirme a notificaciones
          </label>
        </div>
      </div>

      <button 
        class="btn btn-lg btn-primary d-block w-100" 
        type="submit"
        :disabled="contactStore.isLoading"
      >
        <span v-if="contactStore.isLoading" class="spinner-border spinner-border-sm me-2" role="status">
          <span class="visually-hidden">Loading...</span>
        </span>
        {{ contactStore.isLoading ? 'Enviando...' : 'Enviar mensaje' }}
      </button>
    </form>
  </section>
</template>