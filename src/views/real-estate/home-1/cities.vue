<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import { ref } from 'vue'

const modules = ref([Navigation]);

const swiperOptions = ref({
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        582: {
            slidesPerView: 2,
            spaceBetween: 10
        },

        992: {
            slidesPerView: 4,
            spaceBetween: 24
        }
    }
});
</script>

<template>
    <!-- Cities (carousel)-->
    <section class="container mb-5 pb-2">
        <div class="d-flex align-items-center justify-content-between mb-3">
            <h2 class="h3 mb-0">Search property by city</h2>
            <router-link class="btn btn-link fw-normal ms-md-3 pb-0" to="/real-estate-catalog-rent">View all<i class="fi-arrow-long-right ms-2"></i></router-link>
        </div>
        <swiper :slidesPerView="4" :modules="modules" :breakpoints="swiperOptions.breakpoints" navigation :loop="true" class="h-100vh">
            <SwiperSlide>
                <router-link class="card shadow-sm card-hover border-0" to="/real-estate-catalog-sale">
                    <div class="card-img-top card-img-hover">
                        <span class="img-overlay opacity-65"></span>
                        <img src="@/assets/img/real-estate/city/new-york.jpg" alt="New York" />
                        <div class="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
                            <div class="w-100 p-1">
                                <div class="mb-2">
                                    <h4 class="mb-2 fs-xs fw-normal text-light">
                                        <i class="fi-wallet mt-n1 me-2 fs-sm align-middle"></i>Property for sale
                                    </h4>
                                    <div class="d-flex align-items-center">
                                        <div class="progress progress-light w-100">
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span class="text-light fs-sm ps-1 ms-2">893</span>
                                    </div>
                                </div>
                                <div class="pt-1">
                                    <h4 class="mb-2 fs-xs fw-normal text-light">
                                        <i class="fi-home mt-n1 me-2 fs-sm align-middle"></i>Property for rent
                                    </h4>
                                    <div class="d-flex align-items-center">
                                        <div class="progress progress-light w-100">
                                            <div class="progress-bar bg-success" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span class="text-light fs-sm ps-1 ms-2">3756</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body text-center">
                        <h3 class="mb-0 fs-base text-nav">New York</h3>
                    </div>
                </router-link>
            </SwiperSlide>
            <SwiperSlide>
                <router-link class="card shadow-sm card-hover border-0" to="/real-estate-catalog-rent">
                    <div class="card-img-top card-img-hover">
                        <span class="img-overlay opacity-65"></span>
                        <img src="@/assets/img/real-estate/city/chicago.jpg" alt="Chicago" />
                        <div class="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
                            <div class="w-100 p-1">
                                <div class="mb-2">
                                    <h4 class="mb-2 fs-xs fw-normal text-light">
                                        <i class="fi-wallet mt-n1 me-2 fs-sm align-middle"></i>Property for sale
                                    </h4>
                                    <div class="d-flex align-items-center">
                                        <div class="progress progress-light w-100">
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 37%" aria-valuenow="37" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span class="text-light fs-sm ps-1 ms-2">268</span>
                                    </div>
                                </div>
                                <div class="pt-1">
                                    <h4 class="mb-2 fs-xs fw-normal text-light">
                                        <i class="fi-home mt-n1 me-2 fs-sm align-middle"></i>Property for rent
                                    </h4>
                                    <div class="d-flex align-items-center">
                                        <div class="progress progress-light w-100">
                                            <div class="progress-bar bg-success" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span class="text-light fs-sm ps-1 ms-2">1540</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body text-center">
                        <h3 class="mb-0 fs-base text-nav">Chicago</h3>
                    </div>
                </router-link>
            </SwiperSlide>
            <SwiperSlide>
                <router-link class="card shadow-sm card-hover border-0" to="/real-estate-catalog-sale">
                    <div class="card-img-top card-img-hover">
                        <span class="img-overlay opacity-65"></span>
                        <img src="@/assets/img/real-estate/city/los-angeles.jpg" alt="Los Angeles" />
                        <div class="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
                            <div class="w-100 p-1">
                                <div class="mb-2">
                                    <h4 class="mb-2 fs-xs fw-normal text-light">
                                        <i class="fi-wallet mt-n1 me-2 fs-sm align-middle"></i>Property for sale
                                    </h4>
                                    <div class="d-flex align-items-center">
                                        <div class="progress progress-light w-100">
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span class="text-light fs-sm ps-1 ms-2">2750</span>
                                    </div>
                                </div>
                                <div class="pt-1">
                                    <h4 class="mb-2 fs-xs fw-normal text-light">
                                        <i class="fi-home mt-n1 me-2 fs-sm align-middle"></i>Property for rent
                                    </h4>
                                    <div class="d-flex align-items-center">
                                        <div class="progress progress-light w-100">
                                            <div class="progress-bar bg-success" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span class="text-light fs-sm ps-1 ms-2">692</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body text-center">
                        <h3 class="mb-0 fs-base text-nav">Los Angeles</h3>
                    </div>
                </router-link>
            </SwiperSlide>
            <SwiperSlide>
                <router-link class="card shadow-sm card-hover border-0" to="/real-estate-catalog-rent">
                    <div class="card-img-top card-img-hover">
                        <span class="img-overlay opacity-65"></span>
                        <img src="@/assets/img/real-estate/city/san-diego.jpg" alt="San Diego" />
                        <div class="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
                            <div class="w-100 p-1">
                                <div class="mb-2">
                                    <h4 class="mb-2 fs-xs fw-normal text-light">
                                        <i class="fi-wallet mt-n1 me-2 fs-sm align-middle"></i>Property for sale
                                    </h4>
                                    <div class="d-flex align-items-center">
                                        <div class="progress progress-light w-100">
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span class="text-light fs-sm ps-1 ms-2">1739</span>
                                    </div>
                                </div>
                                <div class="pt-1">
                                    <h4 class="mb-2 fs-xs fw-normal text-light">
                                        <i class="fi-home mt-n1 me-2 fs-sm align-middle"></i>Property for rent
                                    </h4>
                                    <div class="d-flex align-items-center">
                                        <div class="progress progress-light w-100">
                                            <div class="progress-bar bg-success" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span class="text-light fs-sm ps-1 ms-2">1854</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body text-center">
                        <h3 class="mb-0 fs-base text-nav">San Diego</h3>
                    </div>
                </router-link>
            </SwiperSlide>
            <SwiperSlide>
                <router-link class="card shadow-sm card-hover border-0" to="/real-estate-catalog-sale">
                    <div class="card-img-top card-img-hover">
                        <span class="img-overlay opacity-65"></span>
                        <img src="@/assets/img/real-estate/city/dallas.jpg" alt="Dallas" />
                        <div class="content-overlay start-0 top-0 d-flex align-items-center justify-content-center w-100 h-100 p-3">
                            <div class="w-100 p-1">
                                <div class="mb-2">
                                    <h4 class="mb-2 fs-xs fw-normal text-light">
                                        <i class="fi-wallet mt-n1 me-2 fs-sm align-middle"></i>Property for sale
                                    </h4>
                                    <div class="d-flex align-items-center">
                                        <div class="progress progress-light w-100">
                                            <div class="progress-bar bg-danger" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span class="text-light fs-sm ps-1 ms-2">2567</span>
                                    </div>
                                </div>
                                <div class="pt-1">
                                    <h4 class="mb-2 fs-xs fw-normal text-light">
                                        <i class="fi-home mt-n1 me-2 fs-sm align-middle"></i>Property for rent
                                    </h4>
                                    <div class="d-flex align-items-center">
                                        <div class="progress progress-light w-100">
                                            <div class="progress-bar bg-success" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span class="text-light fs-sm ps-1 ms-2">1204</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body text-center">
                        <h3 class="mb-0 fs-base text-nav">Dallas</h3>
                    </div>
                </router-link>
            </SwiperSlide>
        </swiper>
    </section>
</template>