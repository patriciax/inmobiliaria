<script lang="ts" setup>
import simplebar from 'simplebar-vue';
import Slider from '@vueform/slider'
import { onMounted, ref } from 'vue'

import 'simplebar/dist/simplebar.min.css';
import { useFiltersStore } from '@/stores/ubications';
import { usePropertyStore } from '@/stores/propertys';

const propertyStore = usePropertyStore();

const props = defineProps({
    slider: {
        type: Object,
        required: true,
    },
    isActive: {
        type: String,
        default: 'Rent'
    },
});

const pricePerMonth = ref(props.slider.defaultValue);
const selectedCountryId = ref(null);

const filterStore = useFiltersStore();
const idTYpeProperty = ref(null);
onMounted(async () => {
 await   filterStore.getCountries();
 await   filterStore.getTypeProperty();
});

const filterByCountry = (countryId: number | string) => {
    const id = typeof countryId === 'string' ? Number(countryId) : countryId;
    if (isNaN(id) || id <= 0) {
        console.log('Invalid country ID:', countryId);
        return;
    }
    console.log('Filtering by country ID:', id);
    propertyStore.getPropertiesPublic(1, 10, 1, id);
}

const filterByTypeProperty = (typePropertyId: number | string) => {
    const id = typeof typePropertyId === 'string' ? Number(typePropertyId) : typePropertyId;
    if (isNaN(id) || id <= 0) {
        console.log('Invalid type property ID:', typePropertyId);
        return;
    }
    idTYpeProperty.value = id;
    console.log('Filtering by type property ID:', id);
    propertyStore.getPropertiesPublic(1, 10, id, selectedCountryId.value);
}


// Variables reactivas
const selectedBedrooms = ref(null) // Valor por defecto
const selectedBathrooms = ref(null)
const selectedParking = ref(null)
const showDebug = ref(false) // Cambiar a true para ver los valores seleccionados

// Función para llamar el servicio de baños
const getBathrooms = async () => {
  if (!selectedBathrooms.value) return
  
  try {
    console.log('Llamando servicio con:', selectedBathrooms.value, 'baños')
    
    // Aquí haces tu llamada al servicio
    // Ejemplo:
    // const response = await yourService.getBathrooms(selectedBathrooms.value)
    // console.log('Respuesta del servicio:', response)
    
    // Simulación de llamada al servicio
    const response = await     propertyStore.getPropertiesPublic(1, 10, idTYpeProperty.value, selectedCountryId.value, selectedBathrooms.value);

    console.log('Datos recibidos:', response)
    
  } catch (error) {
    console.error('Error al llamar el servicio:', error)
  }
}

// Función para manejar cambios en habitaciones
const onBedroomsChange =async () => {
    try {
   await     propertyStore.getPropertiesPublic(1, 10, idTYpeProperty.value, selectedCountryId.value, selectedBathrooms.value, selectedParking.value, selectedBedrooms.value);

    
  } catch (error) {
    console.error('Error al llamar el servicio:', error)
  }
}

// Función para manejar cambios en parqueaderos
const onParkingChange = async () => {
  console.log('Parqueaderos seleccionados:', selectedParking.value)
  // Aquí puedes agregar lógica adicional si necesitas
  try {
    console.log('Llamando servicio con:', selectedBathrooms.value, 'baños')
    
    // Aquí haces tu llamada al servicio
    // Ejemplo:
    // const response = await yourService.getBathrooms(selectedBathrooms.value)
    // console.log('Respuesta del servicio:', response)
    
    // Simulación de llamada al servicio
    const response = await     propertyStore.getPropertiesPublic(1, 10, idTYpeProperty.value, selectedCountryId.value, selectedBathrooms.value, selectedParking.value);

    console.log('Datos recibidos:', response)
    
  } catch (error) {
    console.error('Error al llamar el servicio:', error)
  }
  
}



</script>

<template>
    <aside class="col-lg-4 col-xl-3 border-top-lg border-end-lg shadow-sm px-3 px-xl-4 px-xxl-5 pt-lg-2">
        <div class="offcanvas-lg offcanvas-start" id="filters-sidebar">
            <div class="offcanvas-header d-flex d-lg-none align-items-center">
                <h2 class="h5 mb-0">Filters</h2>
                <button class="btn-close" type="button" data-bs-dismiss="offcanvas" data-bs-target="#filters-sidebar"></button>
            </div>
            <div class="offcanvas-header d-block border-bottom pt-0 pt-lg-4 px-lg-0">
                <h3 class="h6 pt-1">Categoria</h3>

                <ul class="nav nav-tabs mb-0">
                    <li class="nav-item">
                        <router-link class="nav-link" :class="{ 'active': isActive === 'Rent' }" to="/rent"><i class="fi-rent fs-base me-2"></i>En alquiler</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :class="{ 'active': isActive === 'Sale' }" to="/"><i class="fi-home fs-base me-2"></i>En venta</router-link>
                    </li>
                </ul>
            </div>
            <div class="offcanvas-body py-lg-4">
                <div class="pb-4 mb-2">
                    <h3 class="h6">Ubicación</h3>
                    <select class="form-select mb-2" v-model="selectedCountryId" @change="filterByCountry(selectedCountryId)">
                        <option value="" disabled>Selecciona un país</option>
                        <option v-for="country in filterStore.ubications" :key="country.id" :value="country.country_id">{{ country.country_name }}</option>
                    </select>
                </div>
                <div class="pb-4 mb-2">
                    <h3 class="h6">Tipo de propiedad</h3>
                    <simplebar data-simplebar-auto-hide="false" class="overflow-auto" style="height: 11rem;">
                        <div class="form-check" v-for="typeProperty in filterStore.listTypeProperty" :key="typeProperty.id" >
                            <input class="form-check-input" type="checkbox" :id="typeProperty.id" @change="filterByTypeProperty(typeProperty.id)">
                            <label class="form-check-label fs-sm" :for="typeProperty.id">{{ typeProperty.description }}</label>
                        </div>
                       
                    </simplebar>
                </div>
                <div class="pb-4 mb-2">
                    <h3 class="h6">{{ slider.title }}</h3>
                    <Slider class="mb-4" v-model="pricePerMonth" :min="slider.min" :max="slider.max" :step="1" :format="{prefix: '$', decimals: 0 }" />
                    <div class="d-flex align-items-center">
                        <div class="w-50 pe-2">
                            <div class="input-group"><span class="input-group-text fs-base">$</span>
                                <input class="form-control range-slider-value-min" v-model="pricePerMonth[0]" type="text">
                            </div>
                        </div>
                        <div class="text-muted">&mdash;</div>
                        <div class="w-50 ps-2">
                            <div class="input-group"><span class="input-group-text fs-base">$</span>
                                <input class="form-control range-slider-value-max" v-model="pricePerMonth[1]" type="text">
                            </div>
                        </div>
                    </div>

                </div>
                <!-- <div class="pb-4 mb-2">
                    <h3 class="h6 pt-1">Camas y baños</h3>
                    <label class="d-block fs-sm mb-1">Habitaciones</label>
                    <div class="btn-group btn-group-sm" role="group" aria-label="Choose number of bedrooms">
                        <input class="btn-check" type="radio" id="studio" name="bedrooms">
                        <label class="btn btn-outline-secondary fw-normal" for="studio">Studio</label>
                        <input class="btn-check" type="radio" id="bedrooms-1" name="bedrooms" checked>
                        <label class="btn btn-outline-secondary fw-normal" for="bedrooms-1">1</label>
                        <input class="btn-check" type="radio" id="bedrooms-2" name="bedrooms">
                        <label class="btn btn-outline-secondary fw-normal" for="bedrooms-2">2</label>
                        <input class="btn-check" type="radio" id="bedrooms-3" name="bedrooms">
                        <label class="btn btn-outline-secondary fw-normal" for="bedrooms-3">3</label>
                        <input class="btn-check" type="radio" id="bedrooms-4" name="bedrooms">
                        <label class="btn btn-outline-secondary fw-normal" for="bedrooms-4">4+</label>
                    </div>
                    <label class="d-block fs-sm pt-2 my-1">Baños</label>
                    <div class="btn-group btn-group-sm" role="group" aria-label="Choose number of bathrooms">
                        <input class="btn-check" type="radio" id="bathrooms-1" name="bathrooms">
                        <label class="btn btn-outline-secondary fw-normal" for="bathrooms-1">1</label>
                        <input class="btn-check" type="radio" id="bathrooms-2" name="bathrooms">
                        <label class="btn btn-outline-secondary fw-normal" for="bathrooms-2">2</label>
                        <input class="btn-check" type="radio" id="bathrooms-3" name="bathrooms">
                        <label class="btn btn-outline-secondary fw-normal" for="bathrooms-3">3</label>
                        <input class="btn-check" type="radio" id="bathrooms-4" name="bathrooms">
                        <label class="btn btn-outline-secondary fw-normal" for="bathrooms-4">4</label>
                    </div>
                    <label class="d-block fs-sm pt-2 my-1">Parqueaderos</label>
                    <div class="btn-group btn-group-sm" role="group" aria-label="Choose number of bathrooms">
                        <input class="btn-check" type="radio" id="bathrooms-1" name="bathrooms">
                        <label class="btn btn-outline-secondary fw-normal" for="bathrooms-1">1</label>
                        <input class="btn-check" type="radio" id="bathrooms-2" name="bathrooms">
                        <label class="btn btn-outline-secondary fw-normal" for="bathrooms-2">2</label>
                        <input class="btn-check" type="radio" id="bathrooms-3" name="bathrooms">
                        <label class="btn btn-outline-secondary fw-normal" for="bathrooms-3">3</label>
                        <input class="btn-check" type="radio" id="bathrooms-4" name="bathrooms">
                        <label class="btn btn-outline-secondary fw-normal" for="bathrooms-4">4</label>
                    </div>
                </div> -->
                <div class="pb-4 mb-2">
    <h3 class="h6 pt-1">Camas y baños</h3>
    
    <!-- Habitaciones -->
    <label class="d-block fs-sm mb-1">Habitaciones</label>
    <div class="btn-group btn-group-sm" role="group" aria-label="Choose number of bedrooms">
      <input 
        class="btn-check" 
        type="radio" 
        id="studio" 
        name="bedrooms" 
        value="studio"
        v-model="selectedBedrooms"
        @change="onBedroomsChange"
      >
      
      <input 
        class="btn-check" 
        type="radio" 
        id="bedrooms-1" 
        name="bedrooms" 
        value="1"
        v-model="selectedBedrooms"
        @change="onBedroomsChange"
      >
      <label class="btn btn-outline-secondary fw-normal" for="bedrooms-1">1</label>
      
      <input 
        class="btn-check" 
        type="radio" 
        id="bedrooms-2" 
        name="bedrooms" 
        value="2"
        v-model="selectedBedrooms"
        @change="onBedroomsChange"
      >
      <label class="btn btn-outline-secondary fw-normal" for="bedrooms-2">2</label>
      
      <input 
        class="btn-check" 
        type="radio" 
        id="bedrooms-3" 
        name="bedrooms" 
        value="3"
        v-model="selectedBedrooms"
        @change="onBedroomsChange"
      >
      <label class="btn btn-outline-secondary fw-normal" for="bedrooms-3">3</label>
      
      <input 
        class="btn-check" 
        type="radio" 
        id="bedrooms-4" 
        name="bedrooms" 
        value="4+"
        v-model="selectedBedrooms"
        @change="onBedroomsChange"
      >
      <label class="btn btn-outline-secondary fw-normal" for="bedrooms-4">4+</label>
    </div>
    
    <!-- Baños -->
    <label class="d-block fs-sm pt-2 my-1">Baños</label>
    <div class="btn-group btn-group-sm" role="group" aria-label="Choose number of bathrooms">
      <input 
        class="btn-check" 
        type="radio" 
        id="bathrooms-1" 
        name="bathrooms" 
        value="1"
        v-model="selectedBathrooms"
        @change="getBathrooms"
      >
      <label class="btn btn-outline-secondary fw-normal" for="bathrooms-1">1</label>
      
      <input 
        class="btn-check" 
        type="radio" 
        id="bathrooms-2" 
        name="bathrooms" 
        value="2"
        v-model="selectedBathrooms"
        @change="getBathrooms"
      >
      <label class="btn btn-outline-secondary fw-normal" for="bathrooms-2">2</label>
      
      <input 
        class="btn-check" 
        type="radio" 
        id="bathrooms-3" 
        name="bathrooms" 
        value="3"
        v-model="selectedBathrooms"
        @change="getBathrooms"
      >
      <label class="btn btn-outline-secondary fw-normal" for="bathrooms-3">3</label>
      
      <input 
        class="btn-check" 
        type="radio" 
        id="bathrooms-4" 
        name="bathrooms" 
        value="4"
        v-model="selectedBathrooms"
        @change="getBathrooms"
      >
      <label class="btn btn-outline-secondary fw-normal" for="bathrooms-4">4</label>
    </div>
    
    <!-- Parqueaderos -->
    <label class="d-block fs-sm pt-2 my-1">Parqueaderos</label>
    <div class="btn-group btn-group-sm" role="group" aria-label="Choose number of parking spots">
      <input 
        class="btn-check" 
        type="radio" 
        id="parking-0" 
        name="parking" 
        value="0"
        v-model="selectedParking"
        @change="onParkingChange"
      >
      <label class="btn btn-outline-secondary fw-normal" for="parking-0">0</label>
      
      <input 
        class="btn-check" 
        type="radio" 
        id="parking-1" 
        name="parking" 
        value="1"
        v-model="selectedParking"
        @change="onParkingChange"
      >
      <label class="btn btn-outline-secondary fw-normal" for="parking-1">1</label>
      
      <input 
        class="btn-check" 
        type="radio" 
        id="parking-2" 
        name="parking" 
        value="2"
        v-model="selectedParking"
        @change="onParkingChange"
      >
      <label class="btn btn-outline-secondary fw-normal" for="parking-2">2</label>
      
      <input 
        class="btn-check" 
        type="radio" 
        id="parking-3" 
        name="parking" 
        value="3"
        v-model="selectedParking"
        @change="onParkingChange"
      >
      <label class="btn btn-outline-secondary fw-normal" for="parking-3">3</label>
      
      <input 
        class="btn-check" 
        type="radio" 
        id="parking-4" 
        name="parking" 
        value="4+"
        v-model="selectedParking"
        @change="onParkingChange"
      >
      <label class="btn btn-outline-secondary fw-normal" for="parking-4">4+</label>
    </div>
    
    <!-- Información de debug (opcional) -->
    <div class="mt-3 small text-muted" v-if="showDebug">
      <p>Habitaciones seleccionadas: {{ selectedBedrooms }}</p>
      <p>Baños seleccionados: {{ selectedBathrooms }}</p>
      <p>Parqueaderos seleccionados: {{ selectedParking }}</p>
    </div>
  </div>
                <!-- <div class="pb-4 mb-2">
                    <h3 class="h6 pt-1">Square metres</h3>
                    <div class="d-flex align-items-center">
                        <input class="form-control w-100" type="number" min="20" max="500" step="10" placeholder="Min">
                        <div class="mx-2">&mdash;</div>
                        <input class="form-control w-100" type="number" min="20" max="500" step="10" placeholder="Max">
                    </div>
                </div> -->
                <!-- <div class="pb-4 mb-2">
                    <h3 class="h6">Amenities</h3>
                    <simplebar data-simplebar-auto-hide="false" class="overflow-auto" style="height: 11rem;">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="air-condition" checked>
                            <label class="form-check-label fs-sm" for="air-condition">Air conditioning</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="balcony">
                            <label class="form-check-label fs-sm" for="balcony">Balcony</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="garage" checked>
                            <label class="form-check-label fs-sm" for="garage">Garage</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gym">
                            <label class="form-check-label fs-sm" for="gym">Gym</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="parking">
                            <label class="form-check-label fs-sm" for="parking">Parking</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="pool">
                            <label class="form-check-label fs-sm" for="pool">Pool</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="camera">
                            <label class="form-check-label fs-sm" for="camera">Security cameras</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="wifi" checked>
                            <label class="form-check-label fs-sm" for="wifi">WiFi</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="laundry">
                            <label class="form-check-label fs-sm" for="laundry">Laundry</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="dishwasher">
                            <label class="form-check-label fs-sm" for="dishwasher">Dishwasher</label>
                        </div>
                    </simplebar>
                </div> -->
                <!-- <div class="pb-4 mb-2">
                    <h3 class="h6">Pets</h3>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="allow-cats">
                        <label class="form-check-label fs-sm" for="allow-cats">Cats allowed</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="allow-dogs">
                        <label class="form-check-label fs-sm" for="allow-dogs">Dogs allowed</label>
                    </div>
                </div>
                <div class="pb-4 mb-2">
                    <h3 class="h6">Additional options</h3>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="verified">
                        <label class="form-check-label fs-sm" for="verified">Verified</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="featured">
                        <label class="form-check-label fs-sm" for="featured">Featured</label>
                    </div>
                </div> -->
                <!-- <div class="border-top py-4">
                    <button class="btn btn-outline-primary" type="button"><i class="fi-rotate-right me-2"></i>Reset filters</button>
                </div> -->
            </div>
        </div>
    </aside>
</template>