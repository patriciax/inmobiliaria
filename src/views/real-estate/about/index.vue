<script lang="ts" setup>
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Main from './main.vue'
import Team from './team.vue'
import Partners from './partners.vue'
import Reviews from './reviews.vue'

const breadcrumbData = ref([
    {
        title: 'Home',
        link: '/',
        subitems: [
            {
                title: 'About'
            }
        ]
    }
])
</script>

<template>
    <!-- Breadcrumb-->
    <div class="container mt-5 mb-md-4 pt-5">
        <Breadcrumb :data="breadcrumbData" />
    </div>

    <Main />

    <!-- Why choose us?-->
    <section class="container mb-2 mb-xl-5 pb-lg-4">
        <h2 class="h3 mb-4">Why choose us?</h2>
        <!-- Features carousel-->
        <div class="row">
            <!-- Feature slide-->
            <div class="col-lg-4">
                <div class="card border-0">
                    <div class="card-body">
                        <svg class="mb-3" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#fd5631">
                            <path d="M13.585 21.456a10.416 10.416 0 1 0 20.832 0c0-5.76-4.656-10.464-10.416-10.464s-10.416 4.704-10.416 10.464zm18.096 0c0 4.224-3.456 7.68-7.68 7.68s-7.68-3.456-7.68-7.68 3.456-7.68 7.68-7.68 7.68 3.408 7.68 7.68zm-10.225-.96a1.36 1.36 0 0 0-1.92 0 1.36 1.36 0 0 0 0 1.92l2.352 2.352c.24.24.624.384.96.384s.72-.144.96-.384l4.512-4.512a1.36 1.36 0 0 0 0-1.92 1.36 1.36 0 0 0-1.92 0l-3.552 3.552-1.392-1.392zM42 10.512C29.568 5.568 24.96 1.584 24.912 1.536c-.528-.48-1.296-.48-1.824 0C23.04 1.584 18.48 5.52 6 10.512c-.528.192-.864.72-.864 1.248 0 24.576 17.424 34.464 18.192 34.848.192.096.432.192.672.192a1.2 1.2 0 0 0 .672-.192c.72-.384 18.192-10.272 18.192-34.848 0-.528-.336-1.056-.864-1.248zM24 43.824C20.928 41.808 8.304 32.352 7.872 12.72 17.328 8.88 22.128 5.664 24 4.32c1.872 1.392 6.672 4.56 16.128 8.4C39.744 32.352 27.072 41.808 24 43.824z"></path>
                        </svg>
                        <h3 class="h5 card-title pb-1">Safety is our priority</h3>
                        <p class="card-text">
                            Vel et aliquet diam vulputate hendrerit lorem eget amet adipiscing. At ut ut
                            consectetur in sed massa arcu risus sed.
                        </p>
                    </div>
                </div>
                <!-- Feature slide-->
            </div>
            <div class="col-lg-4">
                <div class="card border-0">
                    <div class="card-body">
                        <svg class="mb-3" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#fd5631">
                            <path d="M39.976 40.416l-5.667-26.529c-.098-.44-.391-.831-.782-1.026L20.531 6.217l-.928-4.202c-.195-.831-.977-1.368-1.808-1.173s-1.368.977-1.172 1.808l.879 4.202-9.136 11.335c-.293.342-.391.831-.293 1.27l5.618 26.529c.195.831.977 1.368 1.808 1.173l23.304-4.934a1.59 1.59 0 0 0 1.173-1.808zm-23.597 3.469L11.2 19.554l7.182-8.843.635 2.931c.195.831.977 1.368 1.808 1.172s1.368-.977 1.172-1.808l-.635-2.931 10.162 5.179 5.179 24.33-20.324 4.299zm7.963-17.149l-2.052.44a1.54 1.54 0 0 1-1.857-1.27c-.146-.831.44-1.612 1.27-1.759l2.052-.44c.684-.146 1.368.195 1.71.782.098.244.342.342.586.293l1.954-.44c.293-.049.489-.391.391-.684-.733-2.003-2.736-3.225-4.837-3.029l-.391-1.954c-.049-.293-.342-.489-.635-.391l-1.954.391c-.293.049-.489.342-.391.635l.391 1.954c-2.247.733-3.664 3.029-3.127 5.374.586 2.492 3.078 4.006 5.521 3.469l2.003-.44c.831-.195 1.661.293 1.857 1.124.244.879-.293 1.71-1.172 1.905l-2.101.44c-.684.147-1.368-.195-1.71-.782-.098-.195-.342-.342-.586-.293l-1.954.44c-.342.049-.488.391-.391.684.733 2.003 2.736 3.224 4.837 3.029l.391 1.905c.049.293.342.489.635.391l1.954-.391c.293-.049.489-.342.391-.635l-.391-1.905c2.247-.733 3.664-3.029 3.127-5.374-.538-2.492-3.029-4.006-5.521-3.469z"></path>
                        </svg>
                        <h3 class="h5 card-title pb-1">Fair price</h3>
                        <p class="card-text">
                            Tincidunt mauris sit eu, lacinia pharetra, lorem neque dui. Maecenas ultricies laoreet
                            facilisis fusce amet, consequat neque.
                        </p>
                    </div>
                </div>
            </div>
            <!-- Feature slide-->
            <div class="col-lg-4">
                <div class="card border-0">
                    <div class="card-body">
                        <svg class="mb-3" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
                            <path fill-rule="evenodd" d="M5.493 32.863a6.53 6.53 0 0 1-5.446-6.441v-3.981a6.53 6.53 0 0 1 1.913-4.619c1.225-1.225 2.887-1.913 4.619-1.913h.435C7.709 7.137 15.048.234 24 .234s16.291 6.903 16.986 15.675h.435a6.53 6.53 0 0 1 6.532 6.532v3.981a6.53 6.53 0 0 1-6.532 6.532h-1.928a1.45 1.45 0 0 1-1.447-1.448V17.274A14.05 14.05 0 0 0 24 3.228 14.05 14.05 0 0 0 9.954 17.274v14.232a1.45 1.45 0 0 1-1.447 1.448h0a8.87 8.87 0 0 0 8.821 7.935h.199c.248-.839.702-1.611 1.332-2.241.991-.991 2.336-1.548 3.738-1.548h2.807a5.29 5.29 0 0 1 5.287 5.286 5.29 5.29 0 0 1-5.287 5.287h-2.807a5.29 5.29 0 0 1-5.071-3.789h-.198c-3.147 0-6.164-1.25-8.39-3.475-2.025-2.025-3.242-4.707-3.445-7.545zm22.203 9.523c0-1.266-1.026-2.292-2.292-2.292h-2.807a2.29 2.29 0 0 0-2.292 2.292c0 1.266 1.026 2.292 2.292 2.292h2.807c1.266 0 2.292-1.026 2.292-2.292zM6.96 18.903h-.381a3.54 3.54 0 0 0-3.538 3.538v3.981a3.54 3.54 0 0 0 3.538 3.538h.381V18.903zm34.08 0V29.96h.381a3.54 3.54 0 0 0 3.538-3.538v-3.981a3.54 3.54 0 0 0-3.538-3.538h-.381z" fill="#fd5631"></path>
                        </svg>
                        <h3 class="h5 card-title pb-1">Support 24/7</h3>
                        <p class="card-text">
                            Id velit, dui condimentum dictumst sapien quis a elementum dignissim. Dignissim
                            ultrices scelerisque ultrices nisi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- How it works-->
    <section class="container mb-5 pb-2 pb-lg-4">
        <div class="row gy-4">
            <div class="col-md-5 col-12">
                <img class="d-block mx-auto" src="@/assets/img/real-estate/illustrations/find.svg" alt="Illustration" />
            </div>
            <div class="col-lg-6 offset-lg-1 col-md-7 col-12">
                <h2 class="h3 mb-lg-5 mb-sm-4">How it works</h2>
                <div class="steps steps-vertical">
                    <div class="step active">
                        <div class="step-progress"><span class="step-number">1</span></div>
                        <div class="step-label ms-4">
                            <h3 class="h5 mb-2 pb-1">Choose your property</h3>
                            <p class="mb-0">
                                Odio velit, massa augue etiam in parturient volutpat orci. Pulvinar amet, at est ac
                                curabitur mauris, semper cursus metus. Imperdiet sed massa amet at turpis. Dis
                                risus, donec in ac ultricies tempor eu, amet.
                            </p>
                        </div>
                    </div>
                    <div class="step active">
                        <div class="step-progress"><span class="step-number">2</span></div>
                        <div class="step-label ms-4">
                            <h3 class="h5 mb-2 pb-1">See the property directly</h3>
                            <p class="mb-0">
                                Id orci senectus dignissim magna nec diam bibendum at. Morbi quis turpis nulla
                                condimentum est elementum. Tristique in accumsan eget vestibulum volutpat pretium.
                                Sed id elit duis turpis diam justo. Dignissim blandit rutrum venenatis.
                            </p>
                        </div>
                    </div>
                    <div class="step active">
                        <div class="step-progress"><span class="step-number">3</span></div>
                        <div class="step-label ms-4">
                            <h3 class="h5 mb-2 pb-1">Easy payment</h3>
                            <p class="mb-0">
                                Ut mattis nascetur aliquam neque velit nunc sed. Morbi congue mauris amet ultrices
                                molestie tellus proin odio diam. Feugiat elit, habitasse egestas egestas id nec
                                potenti. Donec convallis donec tristique mattis et viverra.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Team />

    <Partners />

    <Reviews />

    <!-- Find property-->
    <section class="container mb-5 pb-sm-3 pb-lg-4">
        <div class="bg-secondary rounded-3">
            <div class="col-md-11 col-12 offset-md-1 p-md-0 p-2 d-flex align-items-center justify-content-between">
                <div class="me-md-5 py-md-5 px-md-0 p-4" style="max-width: 526px">
                    <h2 class="mb-md-4">
                        Buy property with confidence. <br />
                        Sell without pressure.
                    </h2>
                    <p class="mb-4 pb-md-3 fs-lg">
                        Amet libero morbi venenatis ut est. Iaculis leo ultricies nunc id ante adipiscing. Vel
                        metus odio at faucibus ac.
                    </p>
                    <router-link class="btn btn-lg btn-primary" to="/real-estate-catalog-sale">
                        <i class="fi-search me-2"></i>Find property
                    </router-link>
                </div>
                <div class="col-4 d-md-block d-none align-self-end px-0">
                    <img class="mt-n5" src="@/assets/img/real-estate/about/01.png" width="406" alt="Cover image" />
                </div>
            </div>
        </div>
    </section>

    <!-- Recent posts-->
    <section class="container mb-5 pb-lg-5">
        <div class="d-sm-flex align-items-center justify-content-between mb-4 pb-2">
            <h2 class="h3 mb-sm-0">Our recent highlights</h2>
            <router-link class="btn btn-link fw-normal ms-sm-3 p-0" to="/real-estate-blog">Go to blog
                <i class="fi-arrow-long-right ms-2"></i>
            </router-link>
        </div>
        <!-- Carousel-->
        <!-- Item-->
        <div class="row">
            <div class="col-lg-4">
                <!-- Item-->
                <article>
                    <a class="d-block mb-3" to="/real-estate-blog-single">
                        <img class="rounded-3" src="@/assets/img/real-estate/blog/05.jpg" alt="Post image">
                    </a>
                    <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Property Market Analysis</a>
                    <h3 class="fs-base pt-1">
                        <a class="nav-link" to="/real-estate-blog-single">When Is the Right Time to Downsize Your Home?</a>
                    </h3>
                    <a class="d-flex align-items-center text-decoration-none" href="javascript:void(0);">
                        <img class="rounded-circle" src="@/assets/img/avatars/12.jpg" width="44" alt="Avatar">
                        <div class="ps-2">
                            <h6 class="fs-sm text-nav lh-base mb-1">Cody Fisher</h6>
                            <div class="d-flex text-body fs-xs">
                                <span class="me-2 pe-1"><i class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>Nov 24</span>
                                <span><i class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>No comments</span>
                            </div>
                        </div>
                    </a>
                </article>
            </div>
            <div class="col-lg-4">
                <!-- Item-->
                <article>
                    <a class="d-block mb-3" to="/real-estate-blog-single">
                        <img class="rounded-3" src="@/assets/img/real-estate/blog/01.jpg" alt="Post image">
                    </a>
                    <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Tips &amp; Advice</a>
                    <h3 class="fs-base pt-1">
                        <a class="nav-link" to="/real-estate-blog-single">7 Tips for Achieving Maximum Coziness</a>
                    </h3>
                    <a class="d-flex align-items-center text-decoration-none" href="javascript:void(0);">
                        <img class="rounded-circle" src="@/assets/img/avatars/08.jpg" width="44" alt="Avatar">
                        <div class="ps-2">
                            <h6 class="fs-sm text-nav lh-base mb-1">Darrell Steward</h6>
                            <div class="d-flex text-body fs-xs">
                                <span class="me-2 pe-1">
                                    <i class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>Dec 15</span>
                                <span>
                                    <i class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>2 comments</span>
                            </div>
                        </div>
                    </a>
                </article>
            </div>
            <div class="col-lg-4">
                <!-- Item-->
                <article>
                    <router-link class="d-block mb-3" to="/real-estate-blog-single">
                        <img class="rounded-3" src="@/assets/img/real-estate/blog/03.jpg" alt="Post image">
                    </router-link>
                    <a class="fs-xs text-uppercase text-decoration-none" href="">Inspiration</a>
                    <h3 class="fs-base pt-1">
                        <router-link class="nav-link" to="/real-estate-blog-single">5 Easy-to-Ambitious Projects to Improve Your Home</router-link>
                    </h3>
                    <a class="d-flex align-items-center text-decoration-none" href="javascript:void(0);">
                        <img class="rounded-circle" src="@/assets/img/avatars/03.jpg" width="44" alt="Avatar">
                        <div class="ps-2">
                            <h6 class="fs-sm text-nav lh-base mb-1">Kathryn Murphy</h6>
                            <div class="d-flex text-body fs-xs">
                                <span class="me-2 pe-1">
                                    <i class="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle"></i>Nov 28</span>
                                <span>
                                    <i class="fi-chat-circle opacity-70 mt-n1 me-1 align-middle"></i>4 comments</span>
                            </div>
                        </div>
                    </a>
                </article>
            </div>
        </div>
    </section>

</template>
