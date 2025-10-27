<template>
  <div class="property-map-search">
    <div class="container-fluid px-0">
      <!-- Barra de búsqueda -->
      <div class="search-bar bg-light p-4">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-8">
              <h2 class="mb-0">Hemos encontrado más de {{ geoStore.propertiesCount }} inmuebles</h2>
              <p class="mb-0 text-muted">relacionados a tu búsqueda</p>
            </div>
            <div class="col-md-4">
              <div class="input-group">
                <select v-model="searchRadius" class="form-select" @change="updateSearch">
                  <option :value="5">5 km</option>
                  <option :value="10">10 km</option>
                  <option :value="20">20 km</option>
                  <option :value="30">30 km</option>
                  <option :value="50">50 km</option>
                </select>
                <button class="btn btn-primary" @click="searchCurrentLocation">
                  <i class="fi-map-pin me-2"></i>Mi ubicación
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-0">
        <!-- Lista de propiedades -->
        <div class="col-lg-6 property-list">
          <div class="properties-container p-4">
            <div v-if="geoStore.isLoading" class="text-center py-5">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Cargando...</span>
              </div>
            </div>

            <div v-else-if="geoStore.error" class="alert alert-danger">
              {{ geoStore.error }}
            </div>

            <div v-else-if="!geoStore.hasProperties" class="text-center py-5">
              <p class="text-muted">No se encontraron propiedades en esta área</p>
            </div>

            <div v-else class="row g-4">
              <div
                v-for="property in geoStore.properties"
                :key="property.id"
                :data-property-id="property.id"
                class="col-12"
              >
                <div 
                  class="card shadow-sm card-hover border-0 h-100"
                  :class="{ 'border-primary border-3': geoStore.selectedProperty?.id === property.id }"
                  @mouseenter="onPropertyHover(property)"
                  @mouseleave="onPropertyLeave"
                  @click="onPropertyClick(property)"
                  style="cursor: pointer;"
                >
                  <div class="row g-0">
                    <div class="col-md-5">
                      <div class="position-relative">
                        <router-link 
                          class="img-overlay" 
                          :to="`/real-estate-single-v1/${property.id}`"
                        ></router-link>
                        
                        <!-- Badge de estado -->
                        <div class="position-absolute start-0 top-0 pt-3 ps-3" style="z-index: 2;">
                          <span
                            v-if="property.status?.description"
                            :class="`d-table badge bg-${getBadgeColor(property.status.description)} mb-1`"
                          >
                            {{ property.status.description }}
                          </span>
                          <span v-if="property.type?.description" class="d-table badge bg-info mb-1">
                            {{ property.type.description }}
                          </span>
                        </div>
                        
                        <!-- Imagen -->
                        <img 
                          :src="property.images[0]?.url?.thumbnail || '/placeholder.jpg'" 
                          :alt="property.title" 
                          style="height: 200px; width: 100%; object-fit: cover;" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>

                    <div class="col-md-7">
                      <div class="card-body">
                        <h4 v-if="property.category?.description" class="mb-1 fs-xs fw-normal text-uppercase text-primary">
                          {{ property.category.description }}
                        </h4>
                        <h3 class="h6 mb-2 fs-base">
                          <router-link 
                            class="nav-link" 
                            :to="`/real-estate-single-v1/${property.id}`"
                          >
                            {{ property.title }}
                          </router-link>
                        </h3>
                        <p class="mb-2 fs-sm text-muted">
                          {{ formatLocation(property) }}
                        </p>
                        <div class="fw-bold mb-3">
                          <i class="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>
                          {{ formatPrice(property.price, property.currency?.abbreviation) }}
                        </div>

                        <!-- Características -->
                        <div class="d-flex align-items-center flex-wrap">
                          <span class="d-inline-block me-3 fs-sm">
                            {{ property.rooms }}<i class="fi-bed ms-1 mt-n1 fs-lg text-muted"></i>
                          </span>
                          <span class="d-inline-block me-3 fs-sm">
                            {{ property.bathrooms }}<i class="fi-bath ms-1 mt-n1 fs-lg text-muted"></i>
                          </span>
                          <span class="d-inline-block me-3 fs-sm">
                            {{ property.parkings }}<i class="fi-car ms-1 mt-n1 fs-lg text-muted"></i>
                          </span>
                          <span class="d-inline-block me-3 fs-sm">
                            {{ property.area }}m²
                          </span>
                          <span v-if="property.pets" class="d-inline-block fs-sm">
                            <img src="@/assets/img/paw.png" alt="Pet Friendly" width="20" height="20" style="filter: opacity(.4);" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mapa -->
        <div class="col-lg-6 map-container">
          <div v-if="mapReady" style="height: calc(100vh - 200px);">
            <LMap
              ref="mapRef"
              :zoom="mapZoom"
              :center="[geoStore.mapCenter.lat, geoStore.mapCenter.lng]"
              :use-global-leaflet="false"
              style="height: 100%; width: 100%; z-index: 1;"
              @ready="onMapReady"
            >
              <LTileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
              />
              
              <!-- Marcadores individuales -->
              <template v-for="property in visibleProperties" :key="property.id">
                <LMarker
                  v-if="property.latitude && property.longitude"
                  :lat-lng="getLatLng(property)"
                  :icon="getCustomIcon(property) as any"
                  @click="onMarkerClick(property)"
                >
                  <LPopup>
                    <div class="popup-content" style="min-width: 200px;">
                      <h6 class="mb-1">{{ property.title }}</h6>
                      <p class="mb-1 text-muted small">{{ formatLocation(property) }}</p>
                      <p class="fw-bold mb-2">{{ formatPrice(property.price, property.currency?.abbreviation) }}</p>
                      <router-link 
                        :to="`/real-estate-single-v1/${property.id}`"
                        class="btn btn-sm btn-primary"
                      >
                        Ver detalles
                      </router-link>
                    </div>
                  </LPopup>
                </LMarker>
              </template>
            </LMap>
          </div>
          <div v-else class="d-flex align-items-center justify-content-center" style="height: calc(100vh - 200px);">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Cargando mapa...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { useGeoSearchStore } from '@/stores/geoSearchStore'
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Solución para los iconos de Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png'
})

const geoStore = useGeoSearchStore()
const mapRef = ref<InstanceType<typeof LMap> | null>(null)
const searchRadius = ref(30)
const mapReady = ref(false)
const mapZoom = ref(12)

// Filtrar propiedades con coordenadas válidas
const visibleProperties = computed(() => {
  return geoStore.properties.filter(
    p => p.latitude && p.longitude && 
    p.latitude !== 0 && p.longitude !== 0
  )
})

onMounted(async () => {
  await nextTick()
  mapReady.value = true
  // Búsqueda inicial con ubicación por defecto
  await geoStore.searchPropertiesByLocation(geoStore.mapCenter.lat, geoStore.mapCenter.lng)
})

const onMapReady = () => {
  console.log('Mapa listo')
  // Ajustar vista si hay propiedades
  if (visibleProperties.value.length > 0) {
    fitMapBounds()
  }
}

const fitMapBounds = () => {
  if (!mapRef.value || visibleProperties.value.length === 0) return
  
  const map = mapRef.value.leafletObject as L.Map
  const bounds = L.latLngBounds(
    visibleProperties.value.map(p => [p.latitude, p.longitude])
  )
  
  map.fitBounds(bounds, { padding: [50, 50] })
}

// Helper para obtener LatLng en formato correcto
const getLatLng = (property: any) => {
  return L.latLng(property.latitude, property.longitude)
}

// Crear icono personalizado con precio
const getCustomIcon = (property: any) => {
  const price = formatPrice(property.price, property.currency?.abbreviation)
  const isSelected = geoStore.selectedProperty?.id === property.id
  
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div class="marker-price ${isSelected ? 'selected' : ''}" style="
        background: ${isSelected ? '#0d6efd' : '#ff6b35'};
        color: white;
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        white-space: nowrap;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        border: 2px solid white;
        transform: ${isSelected ? 'scale(1.1)' : 'scale(1)'};
        transition: all 0.3s ease;
      ">
        ${price}
      </div>
    `,
    iconSize: [100, 40],
    iconAnchor: [50, 40]
  })
}

watch(visibleProperties, () => {
  nextTick(() => {
    if (visibleProperties.value.length > 0) {
      fitMapBounds()
    }
  })
})

watch(() => geoStore.selectedProperty, (newVal) => {
  if (newVal && mapRef.value) {
    const map = mapRef.value.leafletObject as L.Map
    map.setView([newVal.latitude, newVal.longitude], 16, {
      animate: true,
      duration: 0.5
    })
  }
})

const formatPrice = (price: number, currency?: string) => {
  if (!price) return 'Precio no disponible'
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: currency || 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

const formatLocation = (property: any) => {
  const parts = []
  if (property.neighborhood?.description) parts.push(property.neighborhood.description)
  if (property.city?.description) parts.push(property.city.description)
  return parts.join(', ') || 'Ubicación no disponible'
}

const getBadgeColor = (status: string) => {
  const colors: Record<string, string> = {
    'Destacado': 'warning',
    'Renovado': 'success',
    'Nuevo': 'info',
    'Disponible': 'primary',
    'En Venta': 'primary',
    'En Arriendo': 'info'
  }
  return colors[status] || 'secondary'
}

const onPropertyHover = (property: any) => {
  geoStore.selectProperty(property)
}

const onPropertyLeave = () => {
  // Mantener selección
}

const onPropertyClick = (property: any) => {
  geoStore.selectProperty(property)
  if (mapRef.value && property.latitude && property.longitude) {
    const map = mapRef.value.leafletObject as L.Map
    map.setView([property.latitude, property.longitude], 16, {
      animate: true
    })
  }
}

const onMarkerClick = (property: any) => {
  geoStore.selectProperty(property)
  scrollToProperty(property.id)
}

const scrollToProperty = (propertyId: number) => {
  const element = document.querySelector(`[data-property-id="${propertyId}"]`)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

const updateSearch = async () => {
  await geoStore.searchPropertiesByLocation(
    geoStore.mapCenter.lat,
    geoStore.mapCenter.lng,
    searchRadius.value
  )
}

const searchCurrentLocation = async () => {
  if (!navigator.geolocation) {
    alert('La geolocalización no está disponible en tu navegador')
    return
  }

  try {
    const position = await new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    
    const { latitude, longitude } = position.coords
    await geoStore.searchPropertiesByLocation(latitude, longitude, searchRadius.value)
    
    if (mapRef.value) {
      const map = mapRef.value.leafletObject as L.Map
      map.setView([latitude, longitude], 13, { animate: true })
    }
  } catch (error) {
    console.error('Error al obtener ubicación:', error)
    alert('No se pudo obtener tu ubicación. Por favor, permite el acceso a tu ubicación.')
  }
}
</script>

<style scoped>
.property-map-search {
  min-height: 100vh;
}

.property-list {
  overflow-y: auto;
  max-height: calc(100vh - 200px);
}

.properties-container {
  height: 100%;
}

.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.map-container {
  position: sticky;
  top: 0;
  height: calc(100vh - 200px);
}

.search-bar {
  border-bottom: 1px solid #dee2e6;
}

/* Estilos para marcadores personalizados */
:deep(.custom-marker) {
  background: transparent;
  border: none;
}

:deep(.marker-price) {
  cursor: pointer;
}

:deep(.marker-price:hover) {
  transform: scale(1.05) !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.4) !important;
}

:deep(.marker-price.selected) {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
}

:deep(.leaflet-popup-content) {
  margin: 10px;
}

:deep(.leaflet-popup-content-wrapper) {
  border-radius: 8px;
}
</style>