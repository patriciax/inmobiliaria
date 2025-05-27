<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

const swiperOptions = ref({
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        582: {
            slidesPerView: 4,
            spaceBetween: 10
        },

        992: {
            slidesPerView: 6,
            spaceBetween: 0
        }
    }
});
</script>

<template>
    <!-- Partners (carousel)-->
    <section class="container mb-5 pb-2 pb-lg-4">
        <h2 class="h3 mb-4 text-center text-md-start">Our partners</h2>
        <div class="tns-carousel-wrapper tns-nav-outside tns-nav-outside-flush">
            <swiper :slidesPerView="6" :breakpoints="swiperOptions.breakpoints" :loop="false">
                <SwiperSlide>
                    <div>
                        <a class="swap-image" href="javascript:void(0);">
                            <img class="swap-to" src="@/assets/img/real-estate/brands/01_color.svg" alt="Logo" width="196" />
                            <img class="swap-from" src="@/assets/img/real-estate/brands/01_gray.svg" alt="Logo" width="196" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <a class="swap-image" href="javascript:void(0);">
                            <img class="swap-to" src="@/assets/img/real-estate/brands/02_color.svg" alt="Logo" width="196" />
                            <img class="swap-from" src="@/assets/img/real-estate/brands/02_gray.svg" alt="Logo" width="196" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <a class="swap-image" href="javascript:void(0);">
                            <img class="swap-to" src="@/assets/img/real-estate/brands/03_color.svg" alt="Logo" width="196" />
                            <img class="swap-from" src="@/assets/img/real-estate/brands/03_gray.svg" alt="Logo" width="196" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <a class="swap-image" href="javascript:void(0);">
                            <img class="swap-to" src="@/assets/img/real-estate/brands/04_color.svg" alt="Logo" width="196" />
                            <img class="swap-from" src="@/assets/img/real-estate/brands/04_gray.svg" alt="Logo" width="196" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <a class="swap-image" href="javascript:void(0);">
                            <img class="swap-to" src="@/assets/img/real-estate/brands/05_color.svg" alt="Logo" width="196" />
                            <img class="swap-from" src="@/assets/img/real-estate/brands/05_gray.svg" alt="Logo" width="196" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <a class="swap-image" href="javascript:void(0);">
                            <img class="swap-to" src="@/assets/img/real-estate/brands/06_color.svg" alt="Logo" width="196" />
                            <img class="swap-from" src="@/assets/img/real-estate/brands/06_gray.svg" alt="Logo" width="196" />
                        </a>
                    </div>
                </SwiperSlide>
            </swiper>
        </div>
    </section>
</template>