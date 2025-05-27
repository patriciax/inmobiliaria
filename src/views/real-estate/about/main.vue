<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

const modules = [Navigation, Pagination, Scrollbar, A11y]

</script>
<template>
    <!-- Page header-->
    <section class="container mb-5 pb-2">
        <div class="row align-items-center justify-content-center">
            <!-- Hero content-->
            <div class="col-lg-4 col-md-5 col-sm-9 order-md-1 order-2 text-md-start text-center">
                <h1 class="mb-4">About Finder</h1>
                <p class="mb-4 pb-3 fs-lg">We provide a complete service for the sale, purchase or rental of real estate. We have been operating more than 10 years. Search millions of apartments and houses on Finder.</p>
                <router-link class="btn btn-lg btn-primary" to="/real-estate-contacts">Contact us</router-link>
            </div>
            <!-- Hero carousel-->
            <div class="col-lg-7 col-md-6 offset-md-1 col-12 order-md-2 order-1">
                <Swiper :modules="modules" navigation :slidesPerView="1" :loop="true" class="tns-carousel-wrapper tns-controls-static tns-nav-outside">
                    <SwiperSlide>
                        <div><img class="rounded-3" src="@/assets/img/real-estate/about/hero/01.jpg" alt="Carousel image"></div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div><img class="rounded-3" src="@/assets/img/real-estate/about/hero/02.jpg" alt="Carousel image"></div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
</template>