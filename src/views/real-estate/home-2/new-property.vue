<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from "swiper/modules";
</script>

<template>
    <!-- Newly listed properties-->
    <section class="container mt-n3 mt-md-0 mb-5 pb-3 pb-lg-4">
        <div class="d-flex align-items-end justify-content-between mb-4 pb-md-2">
            <h2 class="h3 mb-0">Newly listed properties</h2>
            <router-link class="btn btn-link fw-normal ms-2 p-0" to="/real-estate-catalog-sale">View all<i class="fi-arrow-long-right ms-2"></i>
            </router-link>
        </div>
        <!-- Carousel-->
        <div class="tns-carousel-wrapper">
            <swiper :modules="[Navigation]" :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }" :slidesPerView="1" :loop="true">
                <!-- Item-->
                <SwiperSlide>
                    <div class="row">
                        <div class="col-lg-8 col-md-7 mb-md-0 mb-3">
                            <div class="position-relative pe-lg-5">
                                <div class="position-absolute top-0 start-0 zindex-1 m-3 p-1">
                                    <span class="badge bg-info fs-sm me-2">New</span>
                                    <span class="badge bg-success fs-sm me-2">Verified</span>
                                </div>
                                <img class="rounded-3 zindex-5" src="@/assets/img/real-estate/recent/04.jpg" alt="Article image">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-5"><span class="d-inline-block fs-sm text-uppercase text-primary mb-2 from-top">For sale</span>
                            <div class="from-start delay-2">
                                <h3 class="h4 mb-2">Duplex with Garage</h3>
                                <p class="mb-md-4 mb-3 fs-sm">28 Jackson Ave Long Island City, NY 67234</p>
                                <ul class="d-flex mb-md-4 mb-3 list-unstyled">
                                    <li class="me-3 pe-3 border-end"><b class="me-1">4</b><i class="fi-bed mt-n1 lead align-middle text-muted"></i></li>
                                    <li class="me-3 pe-3 border-end"><b class="me-1">2</b><i class="fi-bath mt-n1 lead align-middle text-muted"></i></li>
                                    <li class="me-3 pe-3 border-end"><b class="me-1">2</b><i class="fi-car mt-n1 lead align-middle text-muted"></i></li>
                                    <li><b>126 </b>sq.m</li>
                                </ul>
                                <p class="mb-4 pb-md-2">Blandit lorem dictum in velit. Et nisi at faucibus mauris pretium enim. Risus sapien nisi aliquam egestas leo dignissim ut quis ac. Amet, cras orci justo, tortor nisl aliquet.</p>
                            </div>
                            <div class="btn-group btn-group-lg scale-up delay-3" role="group" aria-label="Buy now or add to wishlist">
                                <router-link class="btn btn-primary" to="/real-estate-single-v2">Sale for $160,000</router-link>
                                <button class="btn btn-primary px-3 border-start border-light" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist">
                                    <i class="fi-heart fs-5"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <!-- Item-->
                <SwiperSlide>
                    <div class="row">
                        <div class="col-lg-8 col-md-7 mb-md-0 mb-3">
                            <div class="position-relative pe-lg-5">
                                <div class="position-absolute top-0 start-0 zindex-1 m-3 p-1">
                                    <span class="badge bg-info fs-sm me-2">New</span>
                                    <span class="badge bg-success fs-sm me-2">Verified</span>
                                </div>
                                <img class="rounded-3 zindex-5" src="@/assets/img/real-estate/recent/05.jpg" alt="Article image">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-5">
                            <span class="d-inline-block fs-sm text-uppercase text-primary mb-2 from-top">For rent</span>
                            <div class="from-start delay-2">
                                <h3 class="h4 mb-2">Luxury Rental Villa</h3>
                                <p class="mb-md-4 mb-3 fs-sm">1510 Castle Hill Ave Bronx, NY 10462</p>
                                <ul class="d-flex mb-md-4 mb-3 list-unstyled">
                                    <li class="me-3 pe-3 border-end">
                                        <b class="me-1">5</b>
                                        <i class="fi-bed mt-n1 lead align-middle text-muted"></i>
                                    </li>
                                    <li class="me-3 pe-3 border-end">
                                        <b class="me-1">3</b>
                                        <i class="fi-bath mt-n1 lead align-middle text-muted"></i>
                                    </li>
                                    <li class="me-3 pe-3 border-end">
                                        <b class="me-1">1</b>
                                        <i class="fi-car mt-n1 lead align-middle text-muted"></i>
                                    </li>
                                    <li><b>140 </b>sq.m</li>
                                </ul>
                                <p class="mb-4 pb-md-2">Sagittis faucibus feugiat integer quam vel ornare. Tellus, vel consequat, sagittis ut penatibus urna, ante. Mattis fermentum lectus sed nisl ac viverra lacus. A at iaculis etiam nunc, diam urna in.</p>
                            </div>
                            <div class="btn-group btn-group-lg scale-up delay-3" role="group" aria-label="Buy now or add to wishlist"><a class="btn btn-primary" href="javascript:void(0);">Rent from $2,850</a>
                                <button class="btn btn-primary px-3 border-start border-light" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist"><i class="fi-heart fs-5"></i></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <!-- Carousel custom controls-->
        <div class="tns-carousel-controls pt-4 mt-4" id="carousel-controls-lp">
            <div class="swiper-button-prev me-2"></div>
            <div class="swiper-button-next mx-2"></div>
        </div>
    </section>
</template>