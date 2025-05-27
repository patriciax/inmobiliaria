<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
</script>
<template>
    <!-- Top agents (lnked carousel)-->
    <section class="container mb-5 pb-2 pb-lg-4">
        <h2 class="h3 mb-4 pb-3 text-center text-md-start">Top real estate agents</h2>
        <div class="tns-carousel-wrapper">
            <swiper :modules="[Navigation]" :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }" :slidesPerView="1" :loop="true" class="h-100vh">
                <SwiperSlide class="pe-4">
                    <div>
                        <div class="row align-items-center">
                            <div class="col-xl-4 d-none d-xl-block">
                                <img class="rounded-3" src="@/assets/img/real-estate/agents/01.jpg" alt="Agent picture" />
                            </div>
                            <div class="col-xl-4 col-md-5 col-sm-4">
                                <img class="rounded-3" src="@/assets/img/real-estate/agents/02.jpg" alt="Agent picture" />
                            </div>
                            <div class="col-xl-4 col-md-7 col-sm-8 px-4 px-sm-3 px-md-0 ms-md-n4 mt-n5 mt-sm-0 py-3">
                                <div class="card border-0 shadow-sm ms-sm-n5">
                                    <blockquote class="blockquote card-body">
                                        <h4 style="max-width: 22rem">
                                            &quot;I will select the best accommodation for you&quot;
                                        </h4>
                                        <p class="d-sm-none d-lg-block">
                                            Amet libero morbi venenatis ut est. Iaculis leo ultricies nunc id ante
                                            adipiscing. Vel metus odio at faucibus ac. Neque id placerat et id ut.
                                            Scelerisque eu mi ullamcorper sit urna. Est volutpat dignissim nec.
                                        </p>
                                        <footer class="d-flex justify-content-between">
                                            <div class="pe-3">
                                                <router-link class="text-decoration-none" to="/real-estate-vendor-properties">
                                                    <h6 class="mb-0">Floyd Miles</h6>
                                                    <div class="text-muted fw-normal fs-sm mb-3">
                                                        Imperial Property Group Agent
                                                    </div>
                                                </router-link><a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="javascript:void(0);"><i class="fi-facebook"></i></a><a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="javascript:void(0);"><i class="fi-twitter"></i></a><a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="javascript:void(0);"><i class="fi-linkedin"></i></a>
                                            </div>
                                            <div>
                                                <span class="star-rating">
                                                    <i class="star-rating-icon fi-star-filled active"></i>
                                                    <i class="star-rating-icon fi-star-filled active"></i>
                                                    <i class="star-rating-icon fi-star-filled active"></i>
                                                    <i class="star-rating-icon fi-star-filled active"></i>
                                                    <i class="star-rating-icon fi-star-filled active"></i>
                                                </span>
                                                <div class="text-muted fs-sm mt-1">45 reviews</div>
                                            </div>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="pe-4">
                    <div>
                        <div class="row align-items-center">
                            <div class="col-xl-4 d-none d-xl-block">
                                <img class="rounded-3" src="@/assets/img/real-estate/agents/02.jpg" alt="Agent picture" />
                            </div>
                            <div class="col-xl-4 col-md-5 col-sm-4">
                                <img class="rounded-3" src="@/assets/img/real-estate/agents/03.jpg" alt="Agent picture" />
                            </div>
                            <div class="col-xl-4 col-md-7 col-sm-8 px-4 px-sm-3 px-md-0 ms-md-n4 mt-n5 mt-sm-0 py-3">
                                <div class="card border-0 shadow-sm ms-sm-n5">
                                    <blockquote class="blockquote card-body">
                                        <h4 style="max-width: 22rem">
                                            &quot;I don't say no, I just figure out a way to make it work&quot;
                                        </h4>
                                        <p class="d-sm-none d-lg-block">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip.
                                        </p>
                                        <footer class="d-flex justify-content-between">
                                            <div class="pe-3">
                                                <router-link class="text-decoration-none" to="/real-estate-vendor-properties">
                                                    <h6 class="mb-0">Guy Hawkins</h6>
                                                    <div class="text-muted fw-normal fs-sm mb-3">
                                                        Imperial Property Group Agent
                                                    </div>
                                                </router-link>
                                                <a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="javascript:void(0);"><i class="fi-facebook"></i></a><a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="javascript:void(0);"><i class="fi-twitter"></i></a><a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="javascript:void(0);"><i class="fi-linkedin"></i></a>
                                            </div>
                                            <div>
                                                <span class="star-rating">
                                                    <i class="star-rating-icon fi-star-filled active"></i>
                                                    <i class="star-rating-icon fi-star-filled active"></i>
                                                    <i class="star-rating-icon fi-star-filled active"></i>
                                                    <i class="star-rating-icon fi-star-filled active"></i>
                                                    <i class="star-rating-icon fi-star-filled active"></i>
                                                </span>
                                                <div class="text-muted fs-sm mt-1">16 reviews</div>
                                            </div>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="pe-4">
                    <div>
                        <div class="row align-items-center">
                            <div class="col-xl-4 d-none d-xl-block">
                                <img class="rounded-3" src="@/assets/img/real-estate/agents/03.jpg" alt="Agent picture" />
                            </div>
                            <div class="col-xl-4 col-md-5 col-sm-4">
                                <img class="rounded-3" src="@/assets/img/real-estate/agents/01.jpg" alt="Agent picture" />
                            </div>
                            <div class="col-xl-4 col-md-7 col-sm-8 px-4 px-sm-3 px-md-0 ms-md-n4 mt-n5 mt-sm-0 py-3">
                                <div class="card border-0 shadow-sm ms-sm-n5">
                                    <blockquote class="blockquote card-body">
                                        <h4 style="max-width: 22rem">
                                            &quot;Over 10 years of experience as a real estate agent&quot;
                                        </h4>
                                        <p class="d-sm-none d-lg-block">
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                            veritatis et quasi architecto beatae vitae.
                                        </p>
                                        <footer class="d-flex justify-content-between">
                                            <div class="pe-3">
                                                <a class="text-decoration-none" to="/real-estate-vendor-properties">
                                                    <h6 class="mb-0">Kristin Watson</h6>
                                                    <div class="text-muted fw-normal fs-sm mb-3">
                                                        Imperial Property Group Agent
                                                    </div>
                                                </a>
                                                <a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="javascript:void(0);">
                                                    <i class="fi-facebook"></i>
                                                </a>
                                                <a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="javascript:void(0);">
                                                    <i class="fi-twitter"></i>
                                                </a>
                                                <a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="javascript:void(0);">
                                                    <i class="fi-linkedin"></i>
                                                </a>
                                            </div>
                                            <div>
                                                <span class="star-rating">
                                                    <i class="star-rating-icon fi-star-filled active"></i>
                                                    <i class="star-rating-icon fi-star-filled active"></i>
                                                    <i class="star-rating-icon fi-star-filled active"></i>
                                                    <i class="star-rating-icon fi-star-filled active"></i>
                                                    <i class="star-rating-icon fi-star-filled active"></i>
                                                </span>
                                                <div class="text-muted fs-sm mt-1">24 reviews</div>
                                            </div>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </swiper>
            <div class="tns-carousel-controls justify-content-center justify-content-md-start my-2 mt-md-5" id="agents-carousel-controls">
                <div class="swiper-button-prev mx-2"></div>
                <div class="swiper-button-next mx-2"></div>
            </div>
        </div>
    </section>
</template>
