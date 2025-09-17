<script lang="ts" setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Sidebar from '@/views/real-estate/vendor/common/sidebarTarjeta.vue'
import { usePropertiesStore } from '@/stores/tarjetaDigital'

// Props para el ID del perfil del agente (opcional, se puede pasar por props o tomar de la ruta)
const props = defineProps<{
  agentId?: number
}>()

const route = useRoute()
const propertiesStore = usePropertiesStore()

// Obtener el ID del agente desde la ruta o props
const currentAgentId = computed(() => {
  // Primero intentar obtener de los props
  if (props.agentId) {
    return props.agentId
  }
  
  // Luego obtener de la ruta
  const routeId = route.params.id
  if (routeId) {
    const parsedId = parseInt(routeId as string)
    return isNaN(parsedId) ? 4 : parsedId // Usar 4 como fallback si no se puede parsear
  }
  
  // Fallback por defecto
  return 4
})

const breadcrumbData = ref([
  {
    title: 'Home',
    link: '/',
    subitems: [
      {
        title: 'Agentes',
        link: '/real-estate-vendor-properties'
      },
      {
        title: `Agente ${currentAgentId.value}`
      }
    ]
  }
])

// Actualizar breadcrumb cuando se cargan los datos del agente
const updateBreadcrumb = () => {
  if (propertiesStore.properties && propertiesStore.properties.length > 0) {
    const profile = propertiesStore.properties[0].profile
    breadcrumbData.value[0].subitems[1].title = `${profile.user.name} ${profile.user.last_name}`
  }
}

// Estado local para la tab activa
const activeTab = ref('for-sale')

// Propiedades computadas para cada categoría
const rentProperties = computed(() => propertiesStore.rentProperties)
const saleProperties = computed(() => propertiesStore.saleProperties)

// Función para obtener imagen por defecto si no hay imágenes
const getPropertyImage = (property: any) => {
  if (property.images && property.images.length > 0) {
    return property.images.map((img: any) => img.url)
  }
  // Imagen por defecto
  return ['/assets/img/real-estate/catalog/01.jpg']
}

// Función para formatear la ubicación
const formatLocation = (property: any) => {
  return `${property.city.name}, ${property.city.state.name}`
}

// Función para cargar más propiedades
const loadMore = async () => {
  try {
    await propertiesStore.loadMoreProperties(currentAgentId.value)
  } catch (error) {
    console.error('Error al cargar más propiedades:', error)
  }
}

// Cargar propiedades al montar el componente
onMounted(async () => {
  try {
    await propertiesStore.fetchPropertiesByProfile(currentAgentId.value)
    updateBreadcrumb()
  } catch (error) {
    console.error('Error al cargar propiedades:', error)
  }
})

// Recargar propiedades si cambia el ID del agente en la ruta
watch(currentAgentId, async (newAgentId, oldAgentId) => {
  if (newAgentId !== oldAgentId) {
    try {
      propertiesStore.clearState() // Limpiar estado anterior
      await propertiesStore.fetchPropertiesByProfile(newAgentId)
      updateBreadcrumb()
    } catch (error) {
      console.error('Error al cargar propiedades:', error)
    }
  }
})

// Función para cambiar de tab
const switchTab = (tabName: string, event: Event) => {
  event.preventDefault()
  activeTab.value = tabName
  
  // Actualizar las clases de los tabs
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active')
  })
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.remove('show', 'active')
  })
  
  const clickedLink = event.target as HTMLElement
  clickedLink.classList.add('active')
  
  const targetPane = document.getElementById(tabName)
  if (targetPane) {
    targetPane.classList.add('show', 'active')
  }
}
</script>

<template>
  <!-- Page container-->
  <div class="container mb-md-4 py-5">
    <div class="row">
      <Sidebar>
        <!-- Nav tabs + Sorting-->
        <div class="d-flex flex-column flex-sm-row align-items-center justify-content-between mb-4">
          <ul class="nav nav-tabs flex-nowrap mb-sm-0" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link fs-sm"
                :class="{ active: activeTab === 'for-rent' }"
                href="#for-rent"
                @click="switchTab('for-rent', $event)"
                role="tab"
                aria-controls="for-rent"
                :aria-selected="activeTab === 'for-rent'"
              >
                Arrendar
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link fs-sm"
                :class="{ active: activeTab === 'for-sale' }"
                href="#for-sale"
                @click="switchTab('for-sale', $event)"
                role="tab"
                aria-controls="for-sale"
                :aria-selected="activeTab === 'for-sale'"
              >
                Comprar
              </a>
            </li>
          </ul>
        </div>
      </Sidebar>

      <!-- Content-->
      <div class="col-lg-9 col-md-8">
        <!-- Debug info (opcional, eliminar en producción) -->
 
        <!-- Loading State -->
        <div v-if="propertiesStore.isLoading && propertiesStore.properties.length === 0" class="text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Cargando propiedades...</span>
          </div>
          <p class="mt-3">Cargando propiedades...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="propertiesStore.isError" class="alert alert-danger" role="alert">
          <h4 class="alert-heading">Error</h4>
          <p>{{ propertiesStore.error }}</p>
          <button 
            class="btn btn-outline-danger" 
            @click="propertiesStore.fetchPropertiesByProfile(currentAgentId)"
          >
            Reintentar
          </button>
        </div>

        <!-- Content with tabs -->
        <div v-else class="tab-content">
          <!-- For rent tab-->
          <div 
            class="tab-pane fade"
            :class="{ 'show active': activeTab === 'for-rent' }" 
            id="for-rent" 
            role="tabpanel"
          >
            <div v-if="rentProperties.length === 0" class="text-center py-5">
              <i class="fi-home display-4 text-muted mb-3"></i>
              <h4>No hay propiedades en arriendo disponibles</h4>
              <p class="text-muted">El agente no tiene propiedades en arriendo en este momento.</p>
            </div>
            
            <div v-else class="row g-4 g-md-3 g-lg-4 pt-2">
              <!-- Item-->
              <div
                v-for="(property, index) in rentProperties"
                :key="property.id"
                class="col-sm-6 col-xl-4"
              >
                <div v-if="property.status.description != 'Borrador'" class="card shadow-sm card-hover border-0 h-100">
                  <div class="tns-carousel-wrapper card-img-top card-img-hover">
                    <router-link class="img-overlay" :to="`/real-estate-single-v1/${property.id}`"></router-link>
                    
                    <!-- Badge de estado -->
                    <div class="position-absolute start-0 top-0 pt-3 ps-3">
                      <span
                        :class="`d-table badge bg-${propertiesStore.getBadgeColor(property.status.description)} mb-1`"
                      >
                        {{ property.status.description }}
                      </span>
                      <span class="d-table badge bg-info mb-1">
                        {{ property.type.description }}
                      </span>
                    </div>
                    
                    <!-- Wishlist button -->
                    <div class="content-overlay end-0 top-0 pt-3 pe-3">
                      <button
                        class="btn btn-icon btn-light btn-xs text-primary rounded-circle"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add to Wishlist"
                      >
                        <i class="fi-heart"></i>
                      </button>
                    </div>
                    
                    <!-- Images carousel -->
                    <Swiper :slidesPerView="1" :loop="true">
                      <SwiperSlide v-for="(image, imgIndex) in getPropertyImage(property)" :key="imgIndex">
                        <img 
                          :src="image" 
                          :alt="`${property.title} - Imagen ${imgIndex + 1}`" 
                          style="height: 199px; width: 100%; object-fit: cover;" 
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  
                  <div class="card-body position-relative pb-3">
                    <h4 class="mb-1 fs-xs fw-normal text-uppercase text-primary">
                      {{ property.category.description }}
                    </h4>
                    <h3 class="h6 mb-2 fs-base">
                      <router-link 
                        class="nav-link stretched-link" 
                        :to="`/real-estate-single-v1/${property.id}`"
                      >
                        {{ property.title }}
                      </router-link>
                    </h3>
                    <p class="mb-2 fs-sm text-muted">{{ formatLocation(property) }}</p>
                    <div class="fw-bold">
                      <i class="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>
                      {{ propertiesStore.formatPrice(property.price, property.currency.abbreviation) }}
                    </div>
                  </div>
                  
                  <div class="card-footer d-flex align-items-center justify-content-center mx-3 pt-3 text-nowrap">
                    <span class="d-inline-block mx-1 px-2 fs-sm">
                      {{ property.rooms }}<i class="fi-bed ms-1 mt-n1 fs-lg text-muted"></i>
                    </span>
                    <span class="d-inline-block mx-1 px-2 fs-sm">
                      {{ property.bathrooms }}<i class="fi-bath ms-1 mt-n1 fs-lg text-muted"></i>
                    </span>
                    <span class="d-inline-block mx-1 px-2 fs-sm">
                      {{ property.parkings }}<i class="fi-car ms-1 mt-n1 fs-lg text-muted"></i>
                    </span>
                    <span class="d-inline-block mx-1 px-2 fs-sm">
                      {{ property.area }}m²
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Load more button for rent -->
            <div v-if="rentProperties.length > 0 && propertiesStore.pagination.hasNextPage" class="text-center mt-1 pt-4">
              <button
                class="btn btn-outline-primary"
                @click="loadMore"
                :disabled="propertiesStore.isLoading"
              >
                <span v-if="propertiesStore.isLoading" class="spinner-border spinner-border-sm me-2" role="status"></span>
                <i v-else class="fi-refresh fs-sm me-2"></i>
                {{ propertiesStore.isLoading ? 'Cargando...' : 'Cargar más' }}
              </button>
            </div>
          </div>
          
          <!-- For sale tab-->
          <div 
            class="tab-pane fade" 
            :class="{ 'show active': activeTab === 'for-sale' }"
            id="for-sale" 
            role="tabpanel"
          >
            <div v-if="saleProperties.length === 0" class="text-center py-5">
              <i class="fi-home display-4 text-muted mb-3"></i>
              <h4>No hay propiedades en venta disponibles</h4>
              <p class="text-muted">El agente no tiene propiedades en venta en este momento.</p>
            </div>
            
            <div v-else class="row g-4 g-md-3 g-lg-4 py-2">
              <!-- Item-->
              <div
                v-for="(property, index) in saleProperties"
                :key="property.id"
                class="col-sm-6 col-xl-4"
                
              >
                <div  v-if="property.status.description != 'Borrador'" class="card shadow-sm card-hover border-0 h-100">
                  <div class="tns-carousel-wrapper card-img-top card-img-hover">
                    <router-link class="img-overlay" :to="`/real-estate-single-v1/${property.id}`"></router-link>
                    
                    <!-- Badge de estado -->
                    <div class="position-absolute start-0 top-0 pt-3 ps-3">
                      <span
                        :class="`d-table badge bg-${propertiesStore.getBadgeColor(property.status.description)} mb-1`"
                      >
                        {{ property.status.description }}
                      </span>
                      <span class="d-table badge bg-info mb-1">
                        {{ property.type.description }}
                      </span>
                    </div>
                    
                    <!-- Wishlist button -->
                    <div class="content-overlay end-0 top-0 pt-3 pe-3">
                      <button
                        class="btn btn-icon btn-light btn-xs text-primary rounded-circle"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add to Wishlist"
                      >
                        <i class="fi-heart"></i>
                      </button>
                    </div>
                    
                    <!-- Images carousel -->
                    <Swiper :slidesPerView="1" :loop="true">
                      <SwiperSlide v-for="(image, imgIndex) in getPropertyImage(property)" :key="imgIndex">
                        <img 
                          :src="image" 
                          :alt="`${property.title} - Imagen ${imgIndex + 1}`" 
                          style="height: 199px; width: 100%; object-fit: cover;" 
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  
                  <div class="card-body position-relative pb-3">
                    <h4 class="mb-1 fs-xs fw-normal text-uppercase text-primary">
                      {{ property.category.description }}
                    </h4>
                    <h3 class="h6 mb-2 fs-base">
                      <router-link 
                        class="nav-link stretched-link" 
                        :to="`/real-estate-single-v1/${property.id}`"
                      >
                        {{ property.title }}
                      </router-link>
                    </h3>
                    <p class="mb-2 fs-sm text-muted">{{ formatLocation(property) }}</p>
                    <div class="fw-bold">
                      <i class="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>
                      {{ propertiesStore.formatPrice(property.price, property.currency.abbreviation) }}
                    </div>
                  </div>
                  
                  <div class="card-footer d-flex align-items-center justify-content-center mx-3 pt-3 text-nowrap">
                    <span class="d-inline-block mx-1 px-2 fs-sm">
                      {{ property.rooms }}<i class="fi-bed ms-1 mt-n1 fs-lg text-muted"></i>
                    </span>
                    <span class="d-inline-block mx-1 px-2 fs-sm">
                      {{ property.bathrooms }}<i class="fi-bath ms-1 mt-n1 fs-lg text-muted"></i>
                    </span>
                    <span class="d-inline-block mx-1 px-2 fs-sm">
                      {{ property.parkings }}<i class="fi-car ms-1 mt-n1 fs-lg text-muted"></i>
                    </span>
                    <span class="d-inline-block mx-1 px-2 fs-sm">
                      {{ property.area }}m²
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Load more button for sale -->
            <div v-if="saleProperties.length > 0 && propertiesStore.pagination.hasNextPage" class="text-center mt-1 pt-4">
              <button
                class="btn btn-outline-primary"
                @click="loadMore"
                :disabled="propertiesStore.isLoading"
              >
                <span v-if="propertiesStore.isLoading" class="spinner-border spinner-border-sm me-2" role="status"></span>
                <i v-else class="fi-refresh fs-sm me-2"></i>
                {{ propertiesStore.isLoading ? 'Cargando...' : 'Cargar más' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.spinner-border-sm {
  width: 1rem;
  height: 1rem;
}

.card-img-top img {
  transition: transform 0.3s ease;
}

.card-hover:hover .card-img-top img {
  transform: scale(1.05);
}

.badge {
  font-size: 0.75rem;
}
</style>