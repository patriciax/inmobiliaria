<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules';

import { ref } from 'vue'

import PropertyImg1 from "@/assets/img/real-estate/top-properties/01.jpg";
import PropertyImg4 from "@/assets/img/real-estate/top-properties/04.jpg";
import PropertyImg7 from "@/assets/img/real-estate/top-properties/07.jpg";

const swiperOptions = ref({
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },

        992: {
            slidesPerView: 2,
            spaceBetween: 25
        }
    }
});

</script>

<template>
    <!-- Top properties-->
    <section class="container-fluid px-xxl-4 mb-5 pb-lg-4">
        <h2 class="h3 mb-4 pb-2 text-center">Top properties on Finder</h2>
        <!-- Carousel-->
        <div class="tns-carousel-wrapper tns-nav-outside tns-nav-outside-flush mx-n2">
            <Swiper :modules="[Navigation]" :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }" :loop="true" :breakpoints="swiperOptions.breakpoints" class="gx-4 mx-0">
                <!-- Carousel item-->
                <SwiperSlide>
                    <div class="row gy-md-0 gy-sm-4 gy-3 gx-sm-4 gx-0">
                        <div class="col-md-7">
                            <router-link class="text-decoration-none text-light card bg-size-cover bg-position-center border-0 overflow-hidden h-100" to="/real-estate-single-v1" :style="`background-image: url(${PropertyImg1}); min-height: 18.75rem;`">
                                <span class="img-gradient-overlay"></span>
                                <div class="card-body content-overlay pb-0"></div>
                                <div class="card-footer content-overlay border-0 pt-0 pb-4">
                                    <div class="d-sm-flex justify-content-between align-items-end pt-5 mt-2 mt-sm-5">
                                        <div class="pe-2">
                                            <div class="fs-sm text-uppercase pt-2 mb-1">For sale</div>
                                            <h3 class="h5 text-light mb-1">Duplex with Garage</h3>
                                            <div class="fs-sm opacity-70"><i class="fi-map-pin me-1"></i>21 Pulaski Road Kings Park, NY 11754</div>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div class="col-md-5">
                            <router-link class="card border-0 overflow-hidden mb-sm-4 mb-3 text-decoration-none text-light" to="/real-estate-single-v2">
                                <div class="card-body p-0 position-relative">
                                    <img src="@/assets/img/real-estate/top-properties/02.jpg" alt="Article image">
                                    <span class="img-gradient-overlay zindex-1"></span>
                                    <div class="position-absolute start-0 bottom-0 m-n1 p-4 zindex-5">
                                        <div class="fs-sm text-uppercase pt-2 mb-1">For rent</div>
                                        <h3 class="h5 text-light mb-1">Villa with Pool</h3>
                                        <div class="fs-sm opacity-70"><i class="fi-map-pin me-1"></i>118-11 Sutphin Blvd Jamaica, NY 11434</div>
                                    </div>
                                </div>
                            </router-link>
                            <router-link class="card border-0 overflow-hidden text-decoration-none text-light" to="/real-estate-single-v2">
                                <div class="card-body p-0 position-relative">
                                    <img src="@/assets/img/real-estate/top-properties/03.jpg" alt="Article image">
                                    <span class="img-gradient-overlay zindex-1"></span>
                                    <div class="position-absolute start-0 bottom-0 m-n1 p-4 zindex-5">
                                        <div class="fs-sm text-uppercase pt-2 mb-1">For sale</div>
                                        <h3 class="h5 text-light mb-1">Luxury Rental Villa</h3>
                                        <div class="fs-sm opacity-70"><i class="fi-map-pin me-1"></i>6954 Grand AveMaspeth, NY 11378</div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </SwiperSlide>
                <!-- Carousel item-->
                <SwiperSlide>
                    <div class="row gy-md-0 gy-sm-4 gy-3 gx-sm-4 gx-0">
                        <div class="col-md-7">
                            <router-link class="text-decoration-none text-light card bg-size-cover bg-position-center border-0 overflow-hidden h-100" to="/real-estate-single-v1" :style="`background-image: url(${PropertyImg4}); min-height: 18.75rem;`">
                                <span class="img-gradient-overlay"></span>
                                <div class="card-body content-overlay pb-0"></div>
                                <div class="card-footer content-overlay border-0 pt-0 pb-4">
                                    <div class="d-sm-flex justify-content-between align-items-end pt-5 mt-2 mt-sm-5">
                                        <div class="pe-2">
                                            <div class="fs-sm text-uppercase pt-2 mb-1">For rent</div>
                                            <h3 class="h5 text-light mb-1">White Cottage</h3>
                                            <div class="fs-sm opacity-70"><i class="fi-map-pin me-1"></i>118-11 Sutphin Blvd Jamaica, NY 11434</div>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div class="col-md-5">
                            <router-link class="card border-0 overflow-hidden mb-sm-4 mb-3 text-decoration-none text-light" to="/real-estate-single-v2">
                                <div class="card-body p-0 position-relative">
                                    <img src="@/assets/img/real-estate/top-properties/05.jpg" alt="Article image">
                                    <span class="img-gradient-overlay zindex-1"></span>
                                    <div class="position-absolute start-0 bottom-0 m-n1 p-4 zindex-5">
                                        <div class="fs-sm text-uppercase pt-2 mb-1">For sale</div>
                                        <h3 class="h5 text-light mb-1">Country House</h3>
                                        <div class="fs-sm opacity-70"><i class="fi-map-pin me-1"></i>6954 Grand AveMaspeth, NY 11378</div>
                                    </div>
                                </div>
                            </router-link>
                            <router-link class="card border-0 overflow-hidden text-decoration-none text-light" to="/real-estate-single-v2">
                                <div class="card-body p-0 position-relative">
                                    <img src="@/assets/img/real-estate/top-properties/06.jpg" alt="Article image">
                                    <span class="img-gradient-overlay zindex-1"></span>
                                    <div class="position-absolute start-0 bottom-0 m-n1 p-4 zindex-5">
                                        <div class="fs-sm text-uppercase pt-2 mb-1">For sale</div>
                                        <h3 class="h5 text-light mb-1">Modern House | 90 sq.m</h3>
                                        <div class="fs-sm opacity-70"><i class="fi-map-pin me-1"></i>21 Pulaski Road Kings Park, NY 11754</div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </SwiperSlide>
                <!-- Carousel item-->
                <SwiperSlide>
                    <div class="row gy-md-0 gy-sm-4 gy-3 gx-sm-4 gx-0">
                        <div class="col-md-7">
                            <router-link class="text-decoration-none text-light card bg-size-cover bg-position-center border-0 overflow-hidden h-100" to="/real-estate-single-v1" :style="`background-image: url(${PropertyImg7}); min-height: 18.75rem;`">
                                <span class="img-gradient-overlay"></span>
                                <div class="card-body content-overlay pb-0"></div>
                                <div class="card-footer content-overlay border-0 pt-0 pb-4">
                                    <div class="d-sm-flex justify-content-between align-items-end pt-5 mt-2 mt-sm-5">
                                        <div class="pe-2">
                                            <div class="fs-sm text-uppercase pt-2 mb-1">For rent</div>
                                            <h3 class="h5 text-light mb-1">Luxury Rental Villa</h3>
                                            <div class="fs-sm opacity-70"><i class="fi-map-pin me-1"></i>6954 Grand AveMaspeth, NY 11378</div>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div class="col-md-5">
                            <router-link class="card border-0 overflow-hidden mb-sm-4 mb-3 text-decoration-none text-light" to="/real-estate-single-v2">
                                <div class="card-body p-0 position-relative">
                                    <img src="@/assets/img/real-estate/top-properties/08.jpg" alt="Article image">
                                    <span class="img-gradient-overlay zindex-1"></span>
                                    <div class="position-absolute start-0 bottom-0 m-n1 p-4 zindex-5">
                                        <div class="fs-sm text-uppercase pt-2 mb-1">For sale</div>
                                        <h3 class="h5 text-light mb-1">Condominium</h3>
                                        <div class="fs-sm opacity-70"><i class="fi-map-pin me-1"></i>21 Pulaski Road Kings Park, NY 11754</div>
                                    </div>
                                </div>
                            </router-link>
                            <router-link class="card border-0 overflow-hidden text-decoration-none text-light" to="/real-estate-single-v2">
                                <div class="card-body p-0 position-relative">
                                    <img src="@/assets/img/real-estate/top-properties/09.jpg" alt="Article image">
                                    <span class="img-gradient-overlay zindex-1"></span>
                                    <div class="position-absolute start-0 bottom-0 m-n1 p-4 zindex-5">
                                        <div class="fs-sm text-uppercase pt-2 mb-1">For rent</div>
                                        <h3 class="h5 text-light mb-1">Family Home</h3>
                                        <div class="fs-sm opacity-70"><i class="fi-map-pin me-1"></i>118-11 Sutphin Blvd Jamaica, NY 11434</div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <!-- Carousel custom controls-->
        <div class="tns-carousel-controls justify-content-center pt-md-2 mt-4" id="carousel-controls-tp" aria-label="Carousel Navigation" tabindex="0">
            <div class="swiper-button-prev me-3"></div>
            <div class="swiper-button-next"></div>
        </div>
    </section>
</template>