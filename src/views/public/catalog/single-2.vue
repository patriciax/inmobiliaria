<script lang="ts" setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import recentlyView from './common/recently-view.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import { Navigation } from "swiper/modules";

const breadcrumbData = ref([
    {
        title: 'Home',
        link: '/',
        subitems: [
            {
                title: 'Property for rent',
                link: '/real-estate-catalog-rent'
            },
            {
                title: 'Pine Apartments'
            }
        ]
    }
])
</script>
<template>
    <section class="container mt-5 mb-lg-5 mb-4 pt-5 pb-lg-5">
        <!-- Breadcrumb-->
        <Breadcrumb :data="breadcrumbData" />

        <div class="row gy-5 pt-lg-2">
            <div class="col-lg-7">
                <div class="d-flex flex-column">
                    <!-- Carousel with slides count-->
                    <div class="order-lg-1 order-2">
                        <swiper :slidesPerView="1" :modules="[Navigation]" navigation :loop="true">
                            <SwiperSlide>
                                <img class="rounded-3" src="@/assets/img/real-estate/single/09.jpg" alt="Image" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img class="rounded-3" src="@/assets/img/real-estate/single/10.jpg" alt="Image" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img class="rounded-3" src="@/assets/img/real-estate/single/11.jpg" alt="Image" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img class="rounded-3" src="@/assets/img/real-estate/single/12.jpg" alt="Image" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="ratio ratio-16x9">
                                    <iframe class="rounded-3" src="https://www.youtube.com/embed/dofyR9p8e7w" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </SwiperSlide>
                        </swiper>
                        <!-- Thumbnails nav-->
                        <ul class="tns-thumbnails mb-4" id="thumbnails">
                            <li class="tns-thumbnail">
                                <img src="@/assets/img/real-estate/single/th09.jpg" alt="Thumbnail" />
                            </li>
                            <li class="tns-thumbnail">
                                <img src="@/assets/img/real-estate/single/th10.jpg" alt="Thumbnail" />
                            </li>
                            <li class="tns-thumbnail">
                                <img src="@/assets/img/real-estate/single/th11.jpg" alt="Thumbnail" />
                            </li>
                            <li class="tns-thumbnail">
                                <img src="@/assets/img/real-estate/single/th12.jpg" alt="Thumbnail" />
                            </li>
                            <li class="tns-thumbnail">
                                <div class="d-flex flex-column align-items-center justify-content-center h-100">
                                    <i class="fi-play-circle fs-4 mb-1"></i><span>Play video</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- Page title + Features-->
                    <div class="order-lg-2 order-1">
                        <h1 class="h2 mb-2">Pine Apartments</h1>
                        <p class="mb-2 pb-1 fs-lg">28 Jackson Ave Long Island City, NY 67234</p>
                        <ul class="d-flex mb-4 pb-lg-2 list-unstyled">
                            <li class="me-3 pe-3 border-end">
                                <b class="me-1">4</b><i class="fi-bed mt-n1 lead align-middle text-muted"></i>
                            </li>
                            <li class="me-3 pe-3 border-end">
                                <b class="me-1">2</b><i class="fi-bath mt-n1 lead align-middle text-muted"></i>
                            </li>
                            <li class="me-3 pe-3 border-end">
                                <b class="me-1">2</b><i class="fi-car mt-n1 lead align-middle text-muted"></i>
                            </li>
                            <li><b>56 </b>sq.m</li>
                        </ul>
                    </div>
                </div>
                <!-- Overview-->
                <h2 class="h5">Overview</h2>
                <p class="mb-4 pb-2">
                    Etiam ut morbi egestas nunc quis. Nulla tincidunt senectus suspendisse neque, sed sem ut
                    donec sed. Nullam hac netus quis nec tortor mi auctor risus praesent. In pharetra
                    consequat diam nibh consectetur aliquet nulla. Non convallis nascetur viverra viverra diam
                    vel bibendum sed. Elementum odio sed etiam consequat scelerisque in. Diam sit donec nunc
                    enim. Tellus, commodo eget pharetra pharetra quis pellentesque. Enim aliquam sit in
                    porttitor sed gravida a. Aliquam ac tellus sit erat. Non, et ac enim felis. Proin
                    habitasse sit ut mauris, aliquam ornare pretium, nulla aliquam. Scelerisque velit netus
                    quis mauris, dictumst suspendisse tortor.
                </p>
                <!-- Rental agent-->
                <h2 class="h5">Rental agent</h2>
                <div class="card card-horizontal">
                    <div class="card-img-top bg-position-center-x" style="background-image: url(../../../../src/assets/img/real-estate/agents/01.jpg)"></div>
                    <blockquote class="blockquote card-body p-4">
                        <p class="mb-4">
                            Amet libero morbi venenatis ut est. Iaculis leo ultricies nunc id ante adipiscing. Vel
                            metus odio at faucibus ac. Neque id placerat et id ut.
                        </p>
                        <footer class="d-flex justify-content-between">
                            <div class="pe-3">
                                <h6 class="mb-0">Kristin Watson</h6>
                                <div class="text-muted fw-normal fs-sm mb-3">Imperial Property Group Agent</div>
                                <a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="javascript:void(0);"><i class="fi-facebook"></i></a><a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="javascript:void(0);"><i class="fi-twitter"></i></a><a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle me-2 mb-2" href="javascript:void(0);"><i class="fi-instagram"></i></a>
                            </div>
                            <div>
                                <span class="star-rating"><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i><i class="star-rating-icon fi-star-filled active"></i></span>
                                <div class="text-muted fs-sm mt-1">24 reviews</div>
                            </div>
                        </footer>
                    </blockquote>
                </div>
            </div>
            <!-- Sidebar with details-->
            <aside class="col-lg-5">
                <div class="ps-lg-5">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <div>
                            <span class="badge bg-success me-2 mb-2">Verified</span><span class="badge bg-info me-2 mb-2">New</span>
                        </div>
                        <div class="text-nowrap">
                            <button class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2" type="button" data-bs-toggle="tooltip" title="Add to Wishlist">
                                <i class="fi-heart"></i>
                            </button>
                            <div class="dropdown d-inline-block" data-bs-toggle="tooltip" title="Share">
                                <button class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2" type="button" data-bs-toggle="dropdown">
                                    <i class="fi-share"></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-end my-1">
                                    <button class="dropdown-item" type="button">
                                        <i class="fi-facebook fs-base opacity-75 me-2"></i>Facebook
                                    </button>
                                    <button class="dropdown-item" type="button">
                                        <i class="fi-twitter fs-base opacity-75 me-2"></i>Twitter
                                    </button>
                                    <button class="dropdown-item" type="button">
                                        <i class="fi-instagram fs-base opacity-75 me-2"></i>Instagram
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 class="h5 mb-2">Monthly rent:</h3>
                    <h2 class="h3 mb-4 pb-2">
                        $2,000<span class="d-inline-block ms-1 fs-base fw-normal text-body">/month</span>
                    </h2>
                    <!-- Property details-->
                    <div class="card border-0 bg-secondary mb-4">
                        <div class="card-body">
                            <h5 class="mb-0 pb-3">Property Details</h5>
                            <ul class="list-unstyled mt-n2 mb-0">
                                <li class="mt-2 mb-0"><b>Type: </b>apartment</li>
                                <li class="mt-2 mb-0"><b>Apartment area: </b>56 sq.m</li>
                                <li class="mt-2 mb-0"><b>Built: </b>2015</li>
                                <li class="mt-2 mb-0"><b>Bedrooms: </b>4</li>
                                <li class="mt-2 mb-0"><b>Bathrooms: </b>2</li>
                                <li class="mt-2 mb-0"><b>Parking places: </b>2</li>
                                <li class="mt-2 mb-0"><b>Pets allowed: </b>cats only</li>
                            </ul>
                        </div>
                    </div>
                    <a class="btn btn-lg btn-primary w-100 mb-3" href="javascript:void(0);">Book a viewing</a><a class="d-inline-block mb-4 pb-2 text-decoration-none" href="javascript:void(0);"><i class="fi-help me-2 mt-n1 align-middle"></i>Frequently asked questions</a>
                    <!-- Amenities-->
                    <div class="card border-0 bg-secondary mb-4">
                        <div class="card-body">
                            <h5>Amenities</h5>
                            <ul class="list-unstyled row row-cols-md-2 row-cols-1 gy-2 mb-0 text-nowrap">
                                <li class="col"><i class="fi-wifi mt-n1 me-2 fs-lg align-middle"></i>WiFi</li>
                                <li class="col">
                                    <i class="fi-thermometer mt-n1 me-2 fs-lg align-middle"></i>Heating
                                </li>
                                <li class="col"><i class="fi-dish mt-n1 me-2 fs-lg align-middle"></i>Dishwasher</li>
                                <li class="col">
                                    <i class="fi-parking mt-n1 me-2 fs-lg align-middle"></i>Parking place
                                </li>
                                <li class="col">
                                    <i class="fi-snowflake mt-n1 me-2 fs-lg align-middle"></i>Air conditioning
                                </li>
                                <li class="col"><i class="fi-iron mt-n1 me-2 fs-lg align-middle"></i>Iron</li>
                                <li class="col"><i class="fi-tv mt-n1 me-2 fs-lg align-middle"></i>TV</li>
                                <li class="col"><i class="fi-laundry mt-n1 me-2 fs-lg align-middle"></i>Laundry</li>
                                <li class="col">
                                    <i class="fi-cctv mt-n1 me-2 fs-lg align-middle"></i>Security cameras
                                </li>
                                <li class="col">
                                    <i class="fi-no-smoke mt-n1 me-2 fs-lg align-middle"></i>No smocking
                                </li>
                            </ul>
                            <div class="collapse" id="seeMoreAmenities">
                                <ul class="list-unstyled row row-cols-md-2 row-cols-1 gy-2 pt-2 mb-0 text-nowrap">
                                    <li class="col">
                                        <i class="fi-double-bed mt-n1 me-2 fs-lg align-middle"></i>Double bed
                                    </li>
                                    <li class="col">
                                        <i class="fi-bed mt-n1 me-2 fs-lg align-middle"></i>Single bed
                                    </li>
                                </ul>
                            </div>
                            <a class="collapse-label collapsed d-inline-block mt-3" data-bs-target="#seeMoreAmenities" data-bs-toggle="collapse" data-bs-label-collapsed="Show more" data-bs-label-expanded="Show less" role="button" aria-expanded="false" aria-controls="seeMoreAmenities"></a>
                        </div>
                    </div>
                    <!-- Not included in rent-->
                    <div class="card border-0 bg-secondary mb-4">
                        <div class="card-body">
                            <h5>Not included in rent</h5>
                            <ul class="list-unstyled row row-cols-md-2 row-cols-1 gy-2 mb-0 text-nowrap">
                                <li class="col">
                                    <i class="fi-swimming-pool mt-n1 me-2 fs-lg align-middle"></i>Swimming pool
                                </li>
                                <li class="col"><i class="fi-cafe mt-n1 me-2 fs-lg align-middle"></i>Restaurant</li>
                                <li class="col"><i class="fi-spa mt-n1 me-2 fs-lg align-middle"></i>Spa lounge</li>
                                <li class="col"><i class="fi-cocktail mt-n1 me-2 fs-lg align-middle"></i>Bar</li>
                            </ul>
                        </div>
                    </div>
                    <!-- Post meta-->
                    <ul class="d-flex mb-4 list-unstyled fs-sm">
                        <li class="me-3 pe-3 border-end">Published: <b>Dec 9, 2020</b></li>
                        <li class="me-3 pe-3 border-end">Ad number: <b>681013232</b></li>
                        <li class="me-3 pe-3">Views: <b>48</b></li>
                    </ul>
                </div>
            </aside>
        </div>
    </section>

    <recentlyView />
</template>
