<script lang="ts" setup>
import { ref } from 'vue'
import { propertySaleData, propertyRentData, getBadgeColor } from './../real-estate/catalog/data';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
// import Sidebar from './common/sidebar.vue';
import Sidebar from '@/views/real-estate/vendor/common/sidebarTarjeta.vue';

const breadcrumbData = ref([
    {
        title: 'Home',
        link: '/',
        subitems: [
            {
                title: 'Agents',
                link: '/real-estate-vendor-properties'
            },
            {
                title: 'Floyd Miles'
            }
        ]
    }
])
</script>
<template>
    <!-- Page container-->
    <div class="container mb-md-4 py-5">

        <div class="row">
            <Sidebar >
         <!-- Nav tabs + Sorting-->
         <div class="d-flex flex-column flex-sm-row align-items-center justify-content-between mb-4">
                    <ul class="nav nav-tabs flex-nowrap mb-sm-0" role="tablist">
                        <li class="nav-item" >
                            <a class="nav-link fs-sm active" data-bs-target="#for-rent" data-bs-toggle="tab" role="tab" aria-controls="for-rent" aria-selected="true">Comprar</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fs-sm" data-bs-target="#for-sale" data-bs-toggle="tab" role="tab" aria-controls="for-sale" aria-selected="false">Arrendar</a>
                        </li>
                    </ul>
                   
                </div>
            </Sidebar>

            <!-- Content-->
            <div class="col-lg-9 col-md-8">
       
                <div class="tab-content">
                    <!-- For rent tab-->
                    <div class="tab-pane fade show active" id="for-rent" role="tabpanel">
                        <div class="row g-4 g-md-3 g-lg-4 pt-2">
                            <!-- Item-->
                            <div v-for="(property, index) in propertyRentData" :key="index" class="col-sm-6 col-xl-4">
                                <div v-if="index < 9" class="card shadow-sm card-hover border-0 h-100">
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
                                                <img :src="image" alt="Image" style="height: 199px;" />
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
                        <div class="text-center mt-1 pt-4"><a class="d-inline-block fw-bold text-decoration-none p-2 pb-0" href="javascript:void(0);"><i class="fi-refresh fs-sm me-2"></i>Load more</a></div>
                    </div>
                    <!-- For sale tab-->
                    <div class="tab-pane fade" id="for-sale" role="tabpanel">
                        <div class="row g-4 g-md-3 g-lg-4 py-2">
                            <!-- Item-->
                            <div v-for="(property, index) in propertySaleData" :key="index" class="col-sm-6 col-xl-4">
                                <div v-if="index < 5" class="card shadow-sm card-hover border-0 h-100">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>