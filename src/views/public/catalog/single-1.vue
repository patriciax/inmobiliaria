<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Lightgallery from 'lightgallery/vue'
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'
import type { Map as LeafletMap } from 'leaflet'

import 'leaflet/dist/leaflet.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import 'lightgallery/css/lg-thumbnail.css'
// Importaciones necesarias para Leaflet
import L from 'leaflet'
import FormContact from '@/views/public/form.vue'
// Solución para los iconos de Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png'
})

// If you are using scss you can skip the css imports below and use scss instead
import 'lightgallery/scss/lightgallery.scss'
import { usePropertyStore } from '@/stores/propertys'
import router from '@/router'
import { Toast } from 'bootstrap'
import { toast } from 'vue3-toastify'

const propertyStore = usePropertyStore()
const mapRef = ref<InstanceType<typeof LMap> | null>(null)

const pluginsData = [lgThumbnail, lgZoom]
const title = ref('Detalle de propiedad')
const breadcrumbData = ref([
  {
    title: 'Inicio',
    link: '/',
    subitems: [
      {
        title:
          propertyStore?.dataProperty?.category_id === 2
            ? 'Inmuebles en alquiler'
            : 'Inmuebles en venta',
        link: propertyStore?.dataProperty?.category_id === 2 ? '/rent' : '/'
      },
      {
        title: title.value
      }
    ]
  }
])

const tabs = [
  {
    id: 'fotos',
    label: 'Fotos',
    activeTab: (propertyStore?.dataProperty?.images?.length ?? 0) > 0
  },
  { id: 'video', label: 'Video', activeTab: !!propertyStore?.dataProperty?.details?.video_url },
  { id: 'tour', label: 'Tour', activeTab: !!propertyStore?.dataProperty?.details?.view360_url },
  { id: 'mapa', label: 'Mapa', activeTab: !!propertyStore?.dataProperty?.details?.map_url },
  { id: 'streetview', label: 'Explorar entorno' }
]

const activeTab = ref('fotos')

// Variables para el mapa
const mapReady = ref(false)
const mapCenter = ref<[number, number]>([0, 0])
const mapZoom = ref(15)

onMounted(async () => {
  await propertyStore.getPropertyById(Number(router.currentRoute.value.params.id))
  title.value = propertyStore.dataProperty?.title || ''
  breadcrumbData.value[0].subitems[1].title = title.value

  // Configurar coordenadas del mapa
  if (propertyStore.dataProperty?.latitude && propertyStore.dataProperty?.longitude) {
    mapCenter.value = [propertyStore.dataProperty.latitude, propertyStore.dataProperty.longitude]
    mapReady.value = true
  }
})

// Computed para obtener las imágenes publicadas y ordenadas
const publishedImages = computed(() => {
  // Verificar si propertyStore.dataProperty.images existe y es un array
  if (!propertyStore.dataProperty?.images || !Array.isArray(propertyStore.dataProperty.images)) {
    return []
  }

  return propertyStore.dataProperty.images
    .filter((image) => image.publish)
    .sort((a, b) => (a.sort_by || 0) - (b.sort_by || 0))
})

// Método para asignar las clases CSS del grid basado en el índice
const getGridClass = (index: number) => {
  const classes = ['div1', 'div2', 'div3', 'div4', 'div5', 'div6']
  const additionalClasses: { [key: number]: string } = {
    1: 'mb-2 mb-md-3' // Para la segunda imagen (índice 1)
  }

  const baseClass = classes[index % classes.length] || 'div1'
  const extraClass = additionalClasses[index] || ''

  return `${baseClass} ${extraClass}`.trim()
}

// Función para manejar cuando el mapa está listo
const onMapReady = () => {
  console.log('Mapa listo')
  setTimeout(() => {
    if (mapRef.value?.leafletObject) {
      ;(mapRef.value.leafletObject as LeafletMap).invalidateSize()
    }
  }, 100)
}

watch(activeTab, (newTab) => {
  if (newTab === 'mapa') {
    setTimeout(() => {
      if (mapRef.value?.leafletObject) {
        ;(mapRef.value.leafletObject as LeafletMap).invalidateSize()
      }
    }, 200)
  }
})
watch(
  () => router.currentRoute.value.params.id,
  async (newId) => {
    if (newId) {
      await propertyStore.getPropertyById(Number(newId))
      title.value = propertyStore.dataProperty?.title || ''

      // Actualizar coordenadas del mapa
      if (propertyStore.dataProperty?.latitude && propertyStore.dataProperty?.longitude) {
        mapCenter.value = [
          propertyStore.dataProperty.latitude,
          propertyStore.dataProperty.longitude
        ]
        mapReady.value = true
      }
    }
  }
)

const getAvailableServices = () => {
  const specifications = propertyStore?.dataProperty?.details?.specifications || []
  // Filtrar solo los servicios que están disponibles (value !== false && value !== 0)
  return specifications.filter(
    (spec: any) =>
      spec.value !== false && spec.value !== 0 && spec.value !== null && spec.value !== undefined
  )
}

const getIconClass = (serviceName: string) => {
  const iconMap: { [key: string]: string } = {
    Piscina: 'fi-swimming-pool',
    'Zona BBQ': 'fi-grill',
    'Jardin Privado': 'fi-plant',
    'Parque Infantil': 'fi-playground',
    'Cancha Deportiva': 'fi-sport',
    Terraza: 'fi-terrace',
    Balcon: 'fi-balcony',
    Chimenea: 'fi-fire',
    'Cocina Integral': 'fi-dish',
    'Aire Acondicionado': 'fi-snowflake',
    Closets: 'fi-closet',
    'Piso Laminado': 'fi-floor',
    Gimnasio: 'fi-gym',
    Ascensores: 'fi-elevator',
    'Porteria 24h': 'fi-security',
    CCTV: 'fi-cctv',
    Wifi: 'fi-wifi',
    'Servicio Domestico': 'fi-cleaning',
    'Parques cercanos': 'fi-park',
    'Transporte Publico': 'fi-bus',
    'Centros Comerciales': 'fi-shopping-bag',
    Colegios: 'fi-school',
    Hospitales: 'fi-hospital',
    pets: 'fi-pet'
  }

  return iconMap[serviceName] || 'fi-circle'
}

// const  getYouTubeEmbedUrl = function(url : string) {
//   if (!url) return '';

//   // Extraer el ID del video de diferentes formatos de URL de YouTube
//   let videoId = '';

//   if (url.includes('youtube.com/watch?v=')) {
//     videoId = url.split('youtube.com/watch?v=')[1].split('&')[0];
//   } else if (url.includes('youtu.be/')) {
//     videoId = url.split('youtu.be/')[1].split('?')[0];
//   } else if (url.includes('youtube.com/embed/')) {
//     videoId = url.split('youtube.com/embed/')[1].split('?')[0];
//   }

//   return `https://www.youtube.com/embed/${videoId}`;
// }
const isYouTubeUrl = function (url: string) {
  return url.includes('youtube.com') || url.includes('youtu.be')
}
const isVimeoUrl = function (url: string) {
  return url.includes('vimeo.com')
}

const isDirectVideoUrl = function (url: string) {
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.avi', '.mov', '.wmv', '.flv']
  return videoExtensions.some((ext) => url.toLowerCase().includes(ext))
}

const getYouTubeEmbedUrl = function (url: string) {
  if (!url) return ''

  let videoId = ''

  if (url.includes('youtube.com/watch?v=')) {
    videoId = url.split('youtube.com/watch?v=')[1].split('&')[0]
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split('?')[0]
  } else if (url.includes('youtube.com/embed/')) {
    videoId = url.split('youtube.com/embed/')[1].split('?')[0]
  }

  return `https://www.youtube.com/embed/${videoId}`
}

const getVimeoEmbedUrl = function (url: string) {
  if (!url) return ''

  let videoId = ''

  if (url.includes('vimeo.com/')) {
    videoId = url.split('vimeo.com/')[1].split('?')[0]
  }

  return `https://player.vimeo.com/video/${videoId}`
}

const copyLinkToClipboard = () => {
  const url = window.location.href
  navigator.clipboard
    .writeText(url)
    .then(() => {
      toast.success('¡Enlace copiado al portapapeles!', {
        
      })
    })
    .catch((err) => {
      console.error('Error al copiar el enlace: ', err)
    })
}
</script>

<template>
  <!-- Page header-->
  <section class="container pt-5 mt-5">
    <!-- Breadcrumb-->
    <Breadcrumb :data="breadcrumbData" />

    <section class="d-flex justify-content-between w-full">
      <div>
        <h1 class="h2 mb-2">{{ propertyStore?.dataProperty?.title }}</h1>
        <!-- <p class="mb-2 pb-1 fs-lg">{{ propertyStore?.dataProperty?.location }}</p> -->
        <ol class="breadcrumb">
          <li class="breadcrumb-item">{{ propertyStore?.dataProperty?.city?.country_name }}</li>
          <li class="breadcrumb-item">{{ propertyStore?.dataProperty?.city?.name }}</li>
          <li class="breadcrumb-item active">{{ propertyStore?.dataProperty?.neighborhood }}</li>
        </ol>
        <!-- <div>
          <span class="badge bg-success me-2 mb-3">Verified</span
          ><span class="badge bg-info me-2 mb-3">New</span>
        </div> -->

        <!-- Features + Sharing-->
        <div class="d-flex justify-content-between align-items-center">
          <ul class="d-flex mb-4 list-unstyled">
            <li class="me-3 pe-3 border-end">
              <b class="me-1">{{ propertyStore?.dataProperty?.rooms }}</b>
              <i class="fi-bed mt-n1 lead align-middle text-muted"></i>
            </li>
            <li class="me-3 pe-3 border-end">
              <b class="me-1">{{ propertyStore?.dataProperty?.bathrooms }}</b>
              <i class="fi-bath mt-n1 lead align-middle text-muted"></i>
            </li>
            <li class="me-3 pe-3 border-end">
              <b class="me-1">{{ propertyStore?.dataProperty?.parkings }}</b>
              <i class="fi-car mt-n1 lead align-middle text-muted"></i>
            </li>
            <li>
              <b>{{ propertyStore?.dataProperty?.area }} </b>
              <img
                class="mt-n1 me-2 fs-lg align-middl"
                src="@/assets/img/rule.png"
                alt="Pet Friendly"
                width="25"
                height="25"
                title="Pet Friendly"
                style="filter: opacity(0.6); margin-left: 6px"
              />
            </li>
          </ul>
        </div>
      </div>

      <section>
        <div class="mb-2 border-bottom">
          <h2 class="h3">
            ${{ propertyStore?.dataProperty?.price
            }}<span class="d-inline-block ms-1 fs-base fw-normal text-body"></span>
          </h2>
          <p class="text-end">{{ propertyStore?.dataProperty?.visits }} Vistas</p>
        </div>

        <div class="text-nowrap text-end">
                <div>
        </div>

          <span
           class="badge bg-info me-2 mb-3"
            type="button"
            data-bs-toggle="tooltip"
            title="Copiar enlace"
            @click="copyLinkToClipboard"
          >
          <span class="">Compartir enlace</span>

            <!-- {{ propertyStore?.dataProperty?.favorite }} -->
          </span>
          <div class="dropdown d-inline-block" data-bs-toggle="tooltip" title="Share">
            <button
              class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2"
              type="button"
              data-bs-toggle="dropdown"
            >
              <i class="fi-share"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-end my-1">
              <button class="dropdown-item" type="button">
                <i class="fi-facebook fs-base opacity-75 me-2"></i>Facebook
              </button>
              <button class="dropdown-item" type="button">
                <i class="fi-twitter fs-base opacity-75 me-2"></i>Twitter
              </button>
              <button class="dropdown-item" type="button">
                <i class="fi-instagram fs-base opacity-75 me-2"></i>Instagram
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  </section>

  <!-- Gallery-->
  <div class="container overflow-auto mb-4 pb-3">
    <div class="tabs-container">
      <!-- Contenido de las pestañas -->
      <div class="tabs-content">
        <div v-show="activeTab === 'fotos'" class="tab-panel">
          <div class="row g-2 g-md-3 gallery" style="min-width: 30rem">
            <div class="parent">
              <lightgallery
                :style="{
                  gridTemplateRows:
                    publishedImages.length <= 3
                      ? 'repeat(2, 1fr)'
                      : publishedImages.length <= 6
                        ? 'repeat(3, 1fr)'
                        : 'repeat(4, 1fr)',
                  height: publishedImages.length > 3 ? '110vh' : '60vh'
                }"
                :settings="{ speed: 500, plugins: pluginsData }"
                v-if="publishedImages.length > 0"
              >
                <a
                  v-for="(image, index) in publishedImages"
                  :key="image.id"
                  class="gallery-item rounded rounded-md-3"
                  :class="getGridClass(index)"
                  :href="image.url.full"
                  :data-lg-size="image.url.full ? '1600-1067' : undefined"
                >
                  <img
                    :alt="image.description || `Imagen ${index + 1}`"
                    :src="image.url.medium || image.url.full"
                    loading="lazy"
                  />
                </a>
              </lightgallery>

              <div v-else class="placeholder-content">
                <p>No hay imágenes disponibles para esta propiedad</p>
              </div>
            </div>
          </div>
        </div>

        <div v-show="activeTab === 'video'" class="tab-panel">
          <div class="placeholder-content">
            <!-- Para YouTube -->
            <iframe
              v-if="
                propertyStore?.dataProperty?.details?.video_url &&
                isYouTubeUrl(propertyStore.dataProperty.details.video_url)
              "
              :src="getYouTubeEmbedUrl(propertyStore.dataProperty.details.video_url)"
              width="100%"
              height="400"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="w-100"
            ></iframe>

            <!-- Para Vimeo -->
            <iframe
              v-else-if="
                propertyStore?.dataProperty?.details?.video_url &&
                isVimeoUrl(propertyStore.dataProperty.details.video_url)
              "
              :src="getVimeoEmbedUrl(propertyStore.dataProperty.details.video_url)"
              width="100%"
              height="400"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              class="w-100"
            ></iframe>

            <!-- Para archivos de video directo (MP4, WebM, etc.) -->
            <video
              v-else-if="
                propertyStore?.dataProperty?.details?.video_url &&
                isDirectVideoUrl(propertyStore.dataProperty.details.video_url)
              "
              :src="propertyStore.dataProperty.details.video_url"
              controls
              class="w-100"
              style="height: 400px"
            ></video>

            <!-- Para URLs no reconocidas, intentar como iframe genérico -->
            <iframe
              v-else-if="propertyStore?.dataProperty?.details?.video_url"
              :src="propertyStore.dataProperty.details.video_url"
              width="100%"
              height="400"
              frameborder="0"
              class="w-100"
            ></iframe>

            <p v-else>No hay video disponible para esta propiedad</p>
          </div>
        </div>

        <div v-show="activeTab === 'tour'" class="tab-panel">
          <div class="placeholder-content">
            <div
              v-if="propertyStore?.dataProperty?.details?.view360_url"
              :href="propertyStore?.dataProperty?.details?.view360_url"
            >
              Tour virtual interactivo
            </div>
          </div>
        </div>

        <div v-show="activeTab === 'mapa'" class="tab-panel">
          <h3>Ubicación en Mapa</h3>
          <div class="map-container" v-if="mapReady && propertyStore?.dataProperty">
            <LMap
              ref="mapRef"
              :zoom="mapZoom"
              :center="mapCenter"
              :use-global-leaflet="false"
              style="height: 400px; width: 100%; z-index: 1"
              @ready="onMapReady"
            >
              <LTileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
              />
              <LMarker :lat-lng="mapCenter" v-if="mapCenter[0] !== 0 && mapCenter[1] !== 0">
                <LPopup>
                  <div>
                    <strong>{{ propertyStore.dataProperty?.title || 'Propiedad' }}</strong
                    ><br />
                    <span v-if="propertyStore.dataProperty?.location">{{
                      propertyStore.dataProperty.location
                    }}</span>
                  </div>
                </LPopup>
              </LMarker>
            </LMap>
          </div>
          <div v-else class="placeholder-content">
            <p>No hay coordenadas disponibles para mostrar el mapa</p>
          </div>
        </div>
      </div>

      <div class="tabs-header mt-3">
        <template v-for="tab in tabs" :key="tab.id">
          <a
            :href="propertyStore?.dataProperty?.details?.view360_url"
            target="_blank"
            v-if="tab.id === 'tour' && propertyStore?.dataProperty?.details?.view360_url"
            class="tab-button"
          >
            {{ tab.label }}
          </a>

          <a
            :href="propertyStore?.dataProperty?.details?.street_view_url"
            target="_blank"
            v-else-if="
              tab.id === 'streetview' && propertyStore?.dataProperty?.details?.street_view_url
            "
            class="tab-button"
          >
            {{ tab.label }}
          </a>
          <button
            @click="activeTab = tab.id"
            :class="{ active: activeTab === tab.id }"
            class="tab-button"
            v-show="tab.id !== 'tour' && tab.id !== 'streetview'"
          >
            {{ tab.label }}
          </button>
        </template>
      </div>
    </div>
  </div>

  <!-- Post content-->
  <section class="container mb-5 pb-1">
    <div class="row">
      <div class="col-md-7 mb-md-0 mb-4">
        <span class="badge bg-success me-2 mb-3">Verified</span
        ><span class="badge bg-info me-2 mb-3">New</span>

        <!-- Overview-->
        <div class="mb-4 pb-md-3">
          <h3 class="h4">Descripción general</h3>
          <p class="mb-1">
            {{
              propertyStore?.dataProperty?.details?.description || 'No hay descripción disponible.'
            }}
          </p>
          <div
            class="collapse"
            id="seeMoreOverview"
            v-if="propertyStore?.dataProperty?.property_condition?.description"
          >
            <p class="mb-1">
              {{
                propertyStore?.dataProperty?.property_condition?.description ||
                'No hay descripción disponible.'
              }}
            </p>
          </div>
          <a
            class="collapse-label collapsed"
            data-bs-target="#seeMoreOverview"
            data-bs-toggle="collapse"
            data-bs-label-collapsed="Ver más"
            data-bs-label-expanded="Ver menos"
            role="button"
            aria-expanded="false"
            aria-controls="seeMoreOverview"
          ></a>
        </div>

        <!-- Property Details-->
        <div class="mb-4 pb-md-3">
          <h3 class="h4">Detalles de la propiedad</h3>
          <ul class="list-unstyled mb-0">
            <li><b>Type: </b>{{ propertyStore?.dataProperty?.type?.name }}</li>
            <li><b>Area: </b> {{ propertyStore?.dataProperty?.area }} sq.m</li>
            <li><b>Construido: </b>{{ propertyStore?.dataProperty?.year || 'Sin información' }}</li>
            <li><b>Dormitorios: </b>{{ propertyStore?.dataProperty?.rooms }}</li>
            <li><b>Baños: </b>{{ propertyStore?.dataProperty?.bathrooms }}</li>
            <li><b>Plazas de estacionamiento: </b>{{ propertyStore?.dataProperty?.parkings }}</li>
            <li>
              <b>Se admiten mascotas: </b
              >{{ propertyStore?.dataProperty?.pets || 'Sin información' }}
            </li>
          </ul>
        </div>

        <!-- Amenities-->
        <div class="mb-4 pb-md-3">
          <h3 class="h4">Servicios</h3>
          <ul
            class="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap"
          >
            <template v-for="(specification, index) in getAvailableServices()" :key="index">
              <li class="col" v-if="specification.value !== false && specification.value !== 0">
                <i
                  :class="getIconClass(specification.name)"
                  class="mt-n1 me-2 fs-lg align-middle"
                ></i>
                {{ specification.name }}
                <span
                  v-if="
                    typeof specification.value === 'string' ||
                    (typeof specification.value === 'number' && specification.value > 1)
                  "
                  class="text-muted"
                >
                  ({{ specification.value }})
                </span>
              </li>
            </template>

            <span v-if="propertyStore?.dataProperty?.pets" class="d-inline-block mx-1 px-2 fs-sm">
              <img
                src="@/assets/img/paw.png"
                alt="Pet Friendly"
                width="20"
                height="20"
                title="Pet Friendly"
                style="filter: opacity(0.4)"
              />

              <span class="ms-2"> Se admiten mascotas</span>
            </span>
          </ul>

          <!-- Mostrar mensaje si no hay servicios disponibles-->
          <div v-if="getAvailableServices().length === 0" class="text-muted">
            No hay servicios disponibles
          </div>
        </div>

        <section>
          <div class="tab-panel">
            <h3>Ubicación en Mapa</h3>
            <div class="map-container" v-if="mapReady && propertyStore?.dataProperty">
              <LMap
                ref="mapRef"
                :zoom="mapZoom"
                :center="mapCenter"
                :use-global-leaflet="false"
                style="height: 500px; width: 100%; z-index: 1"
                @ready="onMapReady"
              >
                <LTileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                <LMarker :lat-lng="mapCenter" v-if="mapCenter[0] !== 0 && mapCenter[1] !== 0">
                  <LPopup>
                    <div>
                      <strong>{{ propertyStore.dataProperty?.title || 'Propiedad' }}</strong
                      ><br />
                      <span v-if="propertyStore.dataProperty?.location">{{
                        propertyStore.dataProperty.location
                      }}</span>
                    </div>
                  </LPopup>
                </LMarker>
              </LMap>
            </div>
          </div>
        </section>
      </div>

      <!-- Sidebar-->
      <aside class="col-lg-4 col-md-5 ms-lg-auto pb-1">
        <!-- Contact card-->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <div class="d-flex align-items-start justify-content-between flex-column flex-sm-row">
              <div class="d-flex align-items-start gap-3">
                <img
                  class="rounded-circle mb-2"
                  :src="propertyStore?.dataProperty?.profile?.user?.photo_url"
                  width="60"
                  alt="Avatar"
                  loading="lazy"
                  crossorigin="anonymous"
                  referrerPolicy="no-referrer"
                  v-if="propertyStore?.dataProperty?.profile?.user?.photo_url"
                />
                <img
                  class="rounded-circle mb-2"
                  src="@/assets/img/avatars/14.png"
                  width="60"
                  alt="Avatar Placeholder"
                  loading="lazy"
                  v-else
                />
                <div>
                  <router-link
                    class="text-decoration-none d-flex perfil-header flex-column"
                    :to="`/tarjeta-digital/${propertyStore?.dataProperty?.profile?.id}`"
                  >
                    <h5 class="mb-1">
                      {{ propertyStore?.dataProperty?.profile?.user?.name }}
                      {{ propertyStore?.dataProperty?.profile?.user?.last_name }}
                    </h5>
                    <p class="text-body">
                      {{ propertyStore?.dataProperty?.profile?.role?.description }}
                    </p>
                  </router-link>
                  <ul class="list-unstyled border-bottom mb-4 d-flex gap-3">
                    <li v-if="propertyStore?.dataProperty?.profile?.user?.phone_number">
                      <a
                        class="nav-link fw-normal p-0"
                        href="https://wa.me/{{ propertyStore?.dataProperty?.profile?.user?.phone_number }}"
                        target="_blank"
                        ><i class="fi-phone mt-n1 me-2 align-middle opacity-60"></i
                      ></a>
                    </li>
                    <li v-if="propertyStore?.dataProperty?.profile?.user?.email">
                      <a class="nav-link fw-normal p-0" href="mailto:floyd_miles@email.com"
                        ><i class="fi-mail mt-n1 me-2 align-middle opacity-60"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Contact form-->
            <FormContact
              :agent-id="propertyStore?.dataProperty?.profile?.id"
              :property-id="propertyStore?.dataProperty?.id"
            />
          </div>
        </div>
      </aside>
    </div>
  </section>

  <!-- Review modal-->
  <div class="modal fade" id="modal-review" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header d-block position-relative border-0 pb-0 px-sm-5 px-4">
          <h3 class="modal-title mt-4 text-center">Leave a review</h3>
          <button
            class="btn-close position-absolute top-0 end-0 mt-3 me-3"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body px-sm-5 px-4">
          <FormContact />
          <!-- <form class="needs-validation" novalidate>
            <div class="mb-3">
              <label class="form-label" for="review-name"
                >Name <span class="text-danger">*</span></label
              >
              <input
                class="form-control"
                type="text"
                id="review-name"
                placeholder="Your name"
                required
              />
              <div class="invalid-feedback">Please let us know your name.</div>
            </div>
            <div class="mb-3">
              <label class="form-label" for="review-email"
                >Email <span class="text-danger">*</span></label
              >
              <input
                class="form-control"
                type="email"
                id="review-email"
                placeholder="Your email address"
                required
              />
              <div class="invalid-feedback">Please provide a valid email address.</div>
            </div>
            <div class="mb-3">
              <label class="form-label" for="review-rating"
                >Rating <span class="text-danger">*</span></label
              >
              <select class="form-control form-select" id="review-rating" required>
                <option value="" selected disabled hidden>Choose rating</option>
                <option value="5 stars">5 stars</option>
                <option value="4 stars">4 stars</option>
                <option value="3 stars">3 stars</option>
                <option value="2 stars">2 stars</option>
                <option value="1 star">1 star</option>
              </select>
              <div class="invalid-feedback">Please rate the property.</div>
            </div>
            <div class="mb-4">
              <label class="form-label" for="review-text"
                >Review <span class="text-danger">*</span></label
              >
              <textarea
                class="form-control"
                id="review-text"
                rows="5"
                placeholder="Your review message"
                required
              ></textarea>
              <div class="invalid-feedback">Please write your review.</div>
            </div>
            <button class="btn btn-primary d-block w-100 mb-4" type="submit">
              Submit a review
            </button>
          </form> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.parent .lightgallery-vue {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 8px;
}

.div1 {
  grid-column: span 2 / span 2;
  grid-row: span 2 / span 2;
}

.div2 {
  grid-column-start: 3;
}

.div3 {
  grid-column-start: 3;
  grid-row-start: 2;
}

.div4 {
  grid-row-start: 3;
}

.div5 {
  grid-row-start: 3;
}

.div6 {
  grid-row-start: 3;
}

.gallery-item > img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tabs-header {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.tab-button {
  padding: 10px 40px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: #495057;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-right: 0;
}

.tab-button:hover {
  background-color: #e9ecef;
  transform: translateY(-1px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}

.tab-button.active {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border-color: #0c0c0c;
}

.tab-button.active:hover {
  transform: none;
}

.tabs-content {
  background-color: #fff;
}

.tab-panel h3 {
  margin-top: 0;
  color: #212529;
  font-size: 1.4rem;
  margin-bottom: 15px;
}

.placeholder-content {
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  border-radius: 6px;
  color: #6c757d;
  font-size: 1.1rem;
  border: 1px dashed #adb5bd;
}

.map-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Responsive */
@media (max-width: 768px) {
  .tabs-header {
    gap: 6px;
  }

  .tab-button {
    padding: 8px 12px;
    font-size: 14px;
  }

  .placeholder-content {
    min-height: 200px;
  }
}

.perfil-header {
  /* gap: 15px; */
}
</style>
