<script lang="ts" setup>
import simplebar from 'simplebar-vue';
import Slider from '@vueform/slider'
import { ref } from 'vue'

import 'simplebar/dist/simplebar.min.css';


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

</script>

<template>
    <aside class="col-lg-4 col-xl-3 border-top-lg border-end-lg shadow-sm px-3 px-xl-4 px-xxl-5 pt-lg-2">
        <div class="offcanvas-lg offcanvas-start" id="filters-sidebar">
            <div class="offcanvas-header d-flex d-lg-none align-items-center">
                <h2 class="h5 mb-0">Filters</h2>
                <button class="btn-close" type="button" data-bs-dismiss="offcanvas" data-bs-target="#filters-sidebar"></button>
            </div>
            <div class="offcanvas-header d-block border-bottom pt-0 pt-lg-4 px-lg-0">
                <ul class="nav nav-tabs mb-0">
                    <li class="nav-item">
                        <router-link class="nav-link" :class="{ 'active': isActive === 'Rent' }" to="/real-estate-catalog-rent"><i class="fi-rent fs-base me-2"></i>For rent</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :class="{ 'active': isActive === 'Sale' }" to="/real-estate-catalog-sale"><i class="fi-home fs-base me-2"></i>For sale</router-link>
                    </li>
                </ul>
            </div>
            <div class="offcanvas-body py-lg-4">
                <div class="pb-4 mb-2">
                    <h3 class="h6">Location</h3>
                    <select class="form-select mb-2">
                        <option value="" disabled>Choose city</option>
                        <option value="Chicago">Chicago</option>
                        <option value="Dallas">Dallas</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="New York" selected>New York</option>
                        <option value="San Diego">San Diego</option>
                    </select>
                    <select class="form-select">
                        <option value="" selected disabled>Choose district</option>
                        <option value="Brooklyn">Brooklyn</option>
                        <option value="Manhattan">Manhattan</option>
                        <option value="Staten Island">Staten Island</option>
                        <option value="The Bronx">The Bronx</option>
                        <option value="Queens">Queens</option>
                    </select>
                </div>
                <div class="pb-4 mb-2">
                    <h3 class="h6">Tipo de propiedad</h3>
                    <simplebar data-simplebar-auto-hide="false" class="overflow-auto" style="height: 11rem;">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="house">
                            <label class="form-check-label fs-sm" for="house">House</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="apartment" checked>
                            <label class="form-check-label fs-sm" for="apartment">Apartment</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="room">
                            <label class="form-check-label fs-sm" for="room">Room</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="office">
                            <label class="form-check-label fs-sm" for="office">Office</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="commercial">
                            <label class="form-check-label fs-sm" for="commercial">Commercial</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="land">
                            <label class="form-check-label fs-sm" for="land">Land</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="daily">
                            <label class="form-check-label fs-sm" for="daily">Daily rental</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="new-building">
                            <label class="form-check-label fs-sm" for="new-building">New building</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="parking-lot">
                            <label class="form-check-label fs-sm" for="parking-lot">Parking lot</label>
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
                <div class="pb-4 mb-2">
                    <h3 class="h6 pt-1">Beds &amp; baths</h3>
                    <label class="d-block fs-sm mb-1">Bedrooms</label>
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
                    <label class="d-block fs-sm pt-2 my-1">Bathrooms</label>
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
                </div>
                <div class="pb-4 mb-2">
                    <h3 class="h6 pt-1">Square metres</h3>
                    <div class="d-flex align-items-center">
                        <input class="form-control w-100" type="number" min="20" max="500" step="10" placeholder="Min">
                        <div class="mx-2">&mdash;</div>
                        <input class="form-control w-100" type="number" min="20" max="500" step="10" placeholder="Max">
                    </div>
                </div>
                <div class="pb-4 mb-2">
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
                </div>
                <div class="pb-4 mb-2">
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
                </div>
                <div class="border-top py-4">
                    <button class="btn btn-outline-primary" type="button"><i class="fi-rotate-right me-2"></i>Reset filters</button>
                </div>
            </div>
        </div>
    </aside>
</template>