<script lang="ts" setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

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
            spaceBetween: 25
        }
    }
});

</script>
<template>
    <!-- Meet our professional team-->
    <section class="container mb-5 pb-2 pb-lg-4">
        <div class="d-flex align-items-end justify-content-sm-between justify-content-center mb-3">
            <h2 class="h3 mb-0 text-sm-start text-center">Meet our professional team</h2>
        </div>
        <!-- Team carousel-->
        <Swiper :modules="modules" :breakpoints="swiperOptions.breakpoints" :loop="true" class="gx-4 mx-0 pt-3 pb-4">
            <!-- Team slide-->
            <SwiperSlide>
                <div class="card border-0 shadow-sm mt-md-4">
                    <img class="card-img-top" src="@/assets/img/real-estate/about/team/01.jpg" alt="Devon Lane" />
                    <div class="card-body text-center">
                        <h3 class="h5 card-title mb-2">Devon Lane</h3>
                        <span class="d-inline-block mb-3 fs-sm">Real Estate Agent</span>
                        <div class="pt-1">
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-facebook"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-twitter"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <!-- Team slide-->
            <SwiperSlide>
                <div class="card border-0 shadow-sm">
                    <img class="card-img-top" src="@/assets/img/real-estate/about/team/02.jpg" alt="Dianne Russell" />
                    <div class="card-body text-center">
                        <h3 class="h5 card-title mb-2">Dianne Russell</h3>
                        <span class="d-inline-block mb-3 fs-sm">Finance Director</span>
                        <div class="pt-1">
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-facebook"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-twitter"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <!-- Team slide-->
            <SwiperSlide>
                <div class="card border-0 shadow-sm mt-md-4">
                    <img class="card-img-top" src="@/assets/img/real-estate/about/team/03.jpg" alt="Ronald Richards" />
                    <div class="card-body text-center">
                        <h3 class="h5 card-title mb-2">Ronald Richards</h3>
                        <span class="d-inline-block mb-3 fs-sm">Sales Executive</span>
                        <div class="pt-1">
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-facebook"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-twitter"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <!-- Team slide-->
            <SwiperSlide>
                <div class="card border-0 shadow-sm">
                    <img class="card-img-top" src="@/assets/img/real-estate/about/team/04.jpg" alt="Albert Flores" />
                    <div class="card-body text-center">
                        <h3 class="h5 card-title mb-2">Albert Flores</h3>
                        <span class="d-inline-block mb-3 fs-sm">Property Manager</span>
                        <div class="pt-1">
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-facebook"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-twitter"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <!-- Team slide-->
            <SwiperSlide>
                <div class="card border-0 shadow-sm mt-md-4">
                    <img class="card-img-top" src="@/assets/img/real-estate/about/team/01.jpg" alt="Devon Lane" />
                    <div class="card-body text-center">
                        <h3 class="h5 card-title mb-2">Devon Lane</h3>
                        <span class="d-inline-block mb-3 fs-sm">Real Estate Agent</span>
                        <div class="pt-1">
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-facebook"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-twitter"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <!-- Team slide-->
            <SwiperSlide>
                <div class="card border-0 shadow-sm">
                    <img class="card-img-top" src="@/assets/img/real-estate/about/team/02.jpg" alt="Dianne Russell" />
                    <div class="card-body text-center">
                        <h3 class="h5 card-title mb-2">Dianne Russell</h3>
                        <span class="d-inline-block mb-3 fs-sm">Finance Director</span>
                        <div class="pt-1">
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-facebook"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-twitter"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <!-- Team slide-->
            <SwiperSlide>
                <div class="card border-0 shadow-sm mt-md-4">
                    <img class="card-img-top" src="@/assets/img/real-estate/about/team/03.jpg" alt="Ronald Richards" />
                    <div class="card-body text-center">
                        <h3 class="h5 card-title mb-2">Ronald Richards</h3>
                        <span class="d-inline-block mb-3 fs-sm">Sales Executive</span>
                        <div class="pt-1">
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-facebook"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-twitter"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <!-- Team slide-->
            <SwiperSlide>
                <div class="card border-0 shadow-sm">
                    <img class="card-img-top" src="@/assets/img/real-estate/about/team/04.jpg" alt="Albert Flores" />
                    <div class="card-body text-center">
                        <h3 class="h5 card-title mb-2">Albert Flores</h3>
                        <span class="d-inline-block mb-3 fs-sm">Property Manager</span>
                        <div class="pt-1">
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-facebook"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-twitter"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mx-2" href="javascript:void(0);">
                                <i class="fi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
</template>
