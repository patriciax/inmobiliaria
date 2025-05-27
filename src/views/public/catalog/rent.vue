<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import Filter from './common/filter-sidebar.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import { propertyRentData, getBadgeColor } from './data/index';
import { ref } from 'vue';

const breadcrumbData = ref([
    {
        title: 'Inicio',
        link: '/real-estate-single-v1',
        subitems: [
            {
                title: 'Inmuebles en alquiler'
            }
        ]
    }
]);

const sliderData = ref({
    min: 0,
    max: 5000,
    title: 'Precio por mes',
    defaultValue: [1100, 3000]
});
</script>

<template>
    <div class="container-fluid ">
        <div class="row g-0 mt-n3">
            <!-- Filters sidebar (Offcanvas on mobile)-->
            <Filter :slider="sliderData" isActive="Rent" />

            <!-- Page content-->
            <div class="col-lg-8 col-xl-9 position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5">
                <!-- Map popup-->
                <div class="map-popup invisible" id="map">
                    <button class="btn btn-icon btn-light btn-sm shadow-sm rounded-circle" type="button" data-bs-toggle-class="invisible" data-bs-target="#map">
                        <i class="fi-x fs-xs"></i>
                    </button>
                    <div class="interactive-map" data-map-options-json="json/map-options-real-estate-rent.json"></div>
                </div>

                <!-- Breadcrumb-->
                <Breadcrumb :data="breadcrumbData" />

                <!-- Title-->
                <div class="d-sm-flex align-items-center justify-content-between pb-3 pb-sm-4">
                    <h1 class="h2 mb-sm-0">Catalogo</h1>
                    <a class="d-inline-block fw-bold text-decoration-none py-1" href="javascript:void(0);" data-bs-toggle-class="invisible" data-bs-target="#map"><i class="fi-map me-2"></i>Ver mapa</a>
                </div>
                <!-- Sorting-->
                <div class="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch my-2">
                    <div class="d-flex align-items-center flex-shrink-0">
                        <label class="fs-sm me-2 pe-1 text-nowrap" for="sortby"><i class="fi-arrows-sort text-muted mt-n1 me-2"></i>Sort by:</label>
                        <select class="form-select form-select-sm" id="sortby">
                            <option>Newest</option>
                            <option>Popularity</option>
                            <option>Low - High Price</option>
                            <option>High - Low Price</option>
                            <option>High rating</option>
                            <option>Average Rating</option>
                        </select>
                    </div>
                    <hr class="d-none d-sm-block w-100 mx-4" />
                    <div class="d-none d-sm-flex align-items-center flex-shrink-0 text-muted">
                        <i class="fi-check-circle me-2"></i><span class="fs-sm mt-n1">148 results</span>
                    </div>
                </div>
                <!-- Catalog grid-->
                <div class="row g-4 py-4">
                    <!-- Item-->
                    <div v-for="(property, index) in propertyRentData" :key="index" class="col-sm-6 col-xl-4">
                        <div class="card shadow-sm card-hover border-0 h-100">
                            <div class="tns-carousel-wrapper card-img-top card-img-hover">
                                <router-link class="img-overlay" to="/real-estate-single-v1"></router-link>
                                <div v-if="property.badge" class="position-absolute start-0 top-0 pt-3 ps-3">
                                    <span v-for="(badge) in property.badge" :class="`d-table badge bg-${getBadgeColor(badge)} mb-1`">{{ badge }}</span>
                                </div>
                                <div class="content-overlay end-0 top-0 pt-3 pe-3">
                                    <button class="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist">
                                        <i class="fi-heart"></i>
                                    </button>
                                </div>
                                <Swiper v-if="property.imageSrc" :slidesPerView="1" :loop="true">
                                    <SwiperSlide v-for="(image, index) in property.imageSrc" :key="index">
                                        <img :src="image" alt="Image" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div class="card-body position-relative pb-3">
                                <h4 class="mb-1 fs-xs fw-normal text-uppercase text-primary">{{ property.type }}</h4>
                                <h3 class="h6 mb-2 fs-base">
                                    <router-link class="nav-link stretched-link" to="/real-estate-single-v1">{{ property.title }}</router-link>
                                </h3>
                                <p class="mb-2 fs-sm text-muted">{{ property.location }}</p>
                                <div class="fw-bold">
                                    <i class="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>{{ property.price }}
                                </div>
                            </div>
                            <div class="card-footer d-flex align-items-center justify-content-center mx-3 pt-3 text-nowrap">
                                <span class="d-inline-block mx-1 px-2 fs-sm">{{ property.beds }}<i class="fi-bed ms-1 mt-n1 fs-lg text-muted"></i></span>
                                <span class="d-inline-block mx-1 px-2 fs-sm">{{ property.baths }}<i class="fi-bath ms-1 mt-n1 fs-lg text-muted"></i></span>
                                <span class="d-inline-block mx-1 px-2 fs-sm">{{ property.cars }}<i class="fi-car ms-1 mt-n1 fs-lg text-muted"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Pagination-->
                <nav class="border-top pb-md-4 pt-4 mt-2" aria-label="Pagination">
                    <ul class="pagination mb-1">
                        <li class="page-item d-sm-none">
                            <span class="page-link page-link-static">1 / 5</span>
                        </li>
                        <li class="page-item active d-none d-sm-block" aria-current="page">
                            <span class="page-link">1<span class="visually-hidden">(current)</span></span>
                        </li>
                        <li class="page-item d-none d-sm-block"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item d-none d-sm-block"><a class="page-link" href="javascript:void(0);">3</a></li>
                        <li class="page-item d-none d-sm-block">...</li>
                        <li class="page-item d-none d-sm-block"><a class="page-link" href="javascript:void(0);">8</a></li>
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);" aria-label="Next"><i class="fi-chevron-right"></i></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>
