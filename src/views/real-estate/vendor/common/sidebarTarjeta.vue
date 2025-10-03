<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Form from '../../../public/form.vue'
import { usePropertiesStore } from '@/stores/tarjetaDigital'
import avatar from '@/assets/img/avatars/14.png'
// Interfaz para los datos del agente
interface AgentInfo {
  id: number
  name: string
  last_name: string
  email: string
  phone_number: string
  avatar: string
  company: string
  social?: {
    facebook?: string
    linkedin?: string
    twitter?: string
    messenger?: string
  }
}

// Props para recibir información del agente
const props = defineProps<{
  agentData?: {
    id: number
    name: string
    last_name: string
    email: string
    phone_number?: string
    avatar?: string
    company?: string
    social?: {
      facebook?: string
      linkedin?: string
      twitter?: string
      messenger?: string
    }
  }
}>()

const propertiesStore = usePropertiesStore()

// Datos por defecto del agente si no se proporcionan
const defaultAgent: AgentInfo = {
  id: 4,
  name: 'Floyd',
  last_name: 'Miles',
  email: 'floyd_miles@email.com',
  phone_number: '(302) 555-0107',
  avatar: avatar,
  company: 'Imperial Property Group Agent',
  social: undefined
}

// Computed para obtener los datos del agente
const agentInfo = computed((): AgentInfo => {
  // Si tenemos propiedades cargadas, usar los datos del perfil
  if (propertiesStore.properties && propertiesStore.properties.length > 0) {
    const profile = propertiesStore.properties[0].profile
    return {
      id: profile.id,
      name: profile.user.name,
      last_name: profile.user.last_name,
      email: profile.user.email,
      phone_number: profile.user.phone_number || defaultAgent.phone_number,
      avatar: props.agentData?.avatar || defaultAgent.avatar,
      company: profile.role.description,
      social: props.agentData?.social
    }
  }
  
  // Si se pasaron props, usar esos datos
  if (props.agentData) {
    return {
      id: props.agentData.id,
      name: props.agentData.name,
      last_name: props.agentData.last_name,
      email: props.agentData.email,
      phone_number: props.agentData.phone_number || defaultAgent.phone_number,
      avatar: props.agentData.avatar || defaultAgent.avatar,
      company: props.agentData.company || defaultAgent.company,
      social: props.agentData.social
    }
  }
  
  // Usar datos por defecto
  return defaultAgent
})

// Computed para el nombre completo
const fullName = computed(() => {
  return `${agentInfo.value.name} ${agentInfo.value.last_name}`
})

// Computed para estadísticas del agente
const agentStats = computed(() => {
  if (!propertiesStore.visibleProperties || !Array.isArray(propertiesStore.visibleProperties)) {
    return {
      total: 0,
      rent: 0,
      sale: 0
    }
  }
  
  const totalProperties = propertiesStore.visibleProperties.length
  const rentProperties = propertiesStore.rentProperties.length
  const saleProperties = propertiesStore.saleProperties.length
  
  return {
    total: totalProperties,
    rent: rentProperties,
    sale: saleProperties
  }
})
</script>

<template>
  <!-- Sidebar (Agent's info)-->
  <aside class="col-lg-3 col-md-4 mb-5 card shadow-sm h-auto">
    <div class="pe-lg-3 d-flex flex-column align-items-center text-center h-auto">
      <!-- Logo de la empresa -->
      <img 
        class="d-block mx-auto mb-3" 
        src="@/assets/img/logo/logonew.png"  
        alt="Logo" 
        style="max-height: 60px;"
      />
      
      <!-- Avatar del agente -->
      <img 
        class="d-block rounded-circle mx-auto mb-3" 
        :src="agentInfo.avatar" 
        width="90" 
        :alt="fullName" 
          crossorigin="anonymous"
                  referrerPolicy="no-referrer"
      />
      
      <!-- Información del agente -->
      <h2 class="h4 text-center mb-1">{{ fullName }}</h2>
      <p class="text-center mb-2 pb-1">{{ agentInfo.company }}</p>
      
      <!-- Estadísticas del agente -->
      <!-- <div class="d-flex justify-content-center mb-3">
        <div class="text-center mx-2">
          <div class="fs-lg fw-bold text-primary">{{ agentStats.total }}</div>
          <div class="fs-sm text-muted">Propiedades</div>
        </div>
        <div class="text-center mx-2">
          <div class="fs-lg fw-bold text-success">{{ agentStats.rent }}</div>
          <div class="fs-sm text-muted">Arriendo</div>
        </div>
        <div class="text-center mx-2">
          <div class="fs-lg fw-bold text-warning">{{ agentStats.sale }}</div>
          <div class="fs-sm text-muted">Venta</div>
        </div>
      </div> -->
      
      <!-- Redes sociales -->
      <div class="text-center" v-if="agentInfo.social">
        <!-- <a 
          v-if="agentInfo.social.facebook"
          class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" 
          :href="agentInfo.social.facebook"
          target="_blank"
        >
          <i class="fi-facebook"></i>
        </a>
        <a 
          v-if="agentInfo.social.linkedin"
          class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" 
          :href="agentInfo.social.linkedin"
          target="_blank"
        >
          <i class="fi-linkedin"></i>
        </a>
        <a 
          v-if="agentInfo.social.twitter"
          class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" 
          :href="agentInfo.social.twitter"
          target="_blank"
        >
          <i class="fi-twitter"></i>
        </a> -->
        <!-- <a 
          v-if="agentInfo.social.messenger"
          class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" 
          :href="agentInfo.social.messenger"
          target="_blank"
        >
          <i class="fi-messenger"></i>
        </a> -->
      <a>
          class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" 
          :href="agentInfo.social.messenger"
          target="_blank"
        >
          <i class="fi-messenger"></i>
        </a>
      </div>
      
      <!-- Redes sociales por defecto si no hay datos específicos -->
      <div v-else class="text-center">
        <!-- <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" href="javascript:void(0);">
          <i class="fi-facebook"></i>
        </a>
        <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" href="javascript:void(0);">
          <i class="fi-linkedin"></i>
        </a>
        <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" href="javascript:void(0);">
          <i class="fi-twitter"></i>
        </a>
        <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" href="javascript:void(0);">
          <i class="fi-messenger"></i>
        </a> -->
        <a :href="`https://wa.me/${agentInfo.phone_number}`" target="_blank" class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm">
          <i class="fi-whatsapp"></i>
        </a>
        <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm" :href="`mailto:${agentInfo.email}`">
          <i class="fi-mail"></i>
        </a>
      </div>
      
      <!-- Botón de contacto -->
      <div class="border-bottom pb-2 mb-4 mt-3">
        <button 
          class="btn btn-primary mb-2" 
          type="button" 
          data-bs-toggle="modal" 
          data-bs-target="#message-modal"
        >
          <i class="fi-message me-2"></i>Contactar Agente
        </button>
      </div>
      
      <!-- Slot para contenido adicional (tabs, filtros, etc.) -->
      <div class="border-bottom w-100">
        <slot/>
      </div>
      
      <!-- Información de contacto -->
      <!-- <ul class="d-table list-unstyled mx-auto mx-md-0 mb-3 mb-md-4 mt-2">
        <li class="mb-2">
          <a 
            class="nav-link fw-normal p-0" 
            :href="`tel:${agentInfo.phone_number}`"
          >
            <i class="fi-phone text-primary mt-n1 me-2 align-middle"></i>{{ agentInfo.phone_number }}
          </a>
        </li>
        <li>
          <a 
            class="nav-link fw-normal p-0" 
            :href="`mailto:${agentInfo.email}`"
          >
            <i class="fi-mail text-primary mt-n1 me-2 align-middle"></i>{{ agentInfo.email }}
          </a>
        </li>
      </ul> -->
    </div>
  </aside>

  <!-- Message modal-->
  <div class="modal fade" id="message-modal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="fs-base modal-title">Mensaje para {{ fullName }}</h3>
          <button class="btn-close ms-0" type="button" data-bs-dismiss="modal"></button>
        </div>
        <form class="modal-body needs-validation" novalidate>
          <Form :agent-id="agentInfo.id" />
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-icon {
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.border-bottom {
  border-bottom: 1px solid #dee2e6 !important;
}

.stats-item {
  min-width: 60px;
}
</style>