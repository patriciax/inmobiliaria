<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { ref } from 'vue'   

const modules = ref([Navigation, Pagination, Scrollbar, A11y]);

const swiperOptions = ref({
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        582: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        992: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1264: {
            slidesPerView: 4,
            spaceBetween: 20 
        },
        1980: {
            slidesPerView: 4,
            spaceBetween: 20 
        }
    }
});
</script>
<style>

</style>
<template>
    <!-- Top offers (carousel)-->
    <section class="container mb-5 pb-md-4">
        <div class="d-flex align-items-center justify-content-between mb-3">
            <h2 class="h3 mb-0">Top offers</h2>
            <router-link class="btn btn-link fw-normal p-0" to="/real-estate-catalog-rent">View all<i class="fi-arrow-long-right ms-2"></i></router-link>
        </div>
        <div class="tns-carousel-wrapper tns-controls-outside-xxl tns-nav-outside tns-nav-outside-flush mx-n2">
            <swiper :slidesPerView="4" :spaceBetween="25" :modules="modules" :breakpoints="swiperOptions.breakpoints" navigation :pagination="{ clickable: true }" :loop="true" class="h-100vh py-4">
                <SwiperSlide>
                    <div class="col">
                        <div class="card shadow-sm card-hover border-0 h-100">
                            <div class="card-img-top card-img-hover">
                                <router-link class="img-overlay" to="/real-estate-single-v1"></router-link>
                                <div class="position-absolute start-0 top-0 pt-3 ps-3">
                                    <span class="d-table badge bg-success mb-1">Verified</span><span class="d-table badge bg-info">New</span>
                                </div>
                                <div class="content-overlay end-0 top-0 pt-3 pe-3">
                                    <button class="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist">
                                        <i class="fi-heart"></i>
                                    </button>
                                </div>
                                <img src="@/assets/img/real-estate/catalog/01.jpg" alt="Image" />
                            </div>
                            <div class="card-body position-relative pb-3">
                                <h4 class="mb-1 fs-xs fw-normal text-uppercase text-primary">For rent</h4>
                                <h3 class="h6 mb-2 fs-base">
                                    <router-link class="nav-link stretched-link" to="/real-estate-single-v1">3-bed Apartment | 67 sq.m</router-link>
                                </h3>
                                <p class="mb-2 fs-sm text-muted">3811 Ditmars Blvd Astoria, NY 11105</p>
                                <div class="fw-bold">
                                    <i class="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>$1,629
                                </div>
                            </div>
                            <div class="card-footer d-flex align-items-center justify-content-center mx-3 pt-3 text-nowrap">
                                <span class="d-inline-block mx-1 px-2 fs-sm">3<i class="fi-bed ms-1 mt-n1 fs-lg text-muted"></i></span>
                                <span class="d-inline-block mx-1 px-2 fs-sm">2<i class="fi-bath ms-1 mt-n1 fs-lg text-muted"></i></span>
                                <span class="d-inline-block mx-1 px-2 fs-sm">2<i class="fi-car ms-1 mt-n1 fs-lg text-muted"></i></span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="col">
                        <div class="card shadow-sm card-hover border-0 h-100">
                            <div class="card-img-top card-img-hover">
                                <router-link class="img-overlay" to="/real-estate-single-v1"></router-link>
                                <div class="position-absolute start-0 top-0 pt-3 ps-3">
                                    <span class="d-table badge bg-success mb-1">Verified</span><span class="d-table badge bg-danger">Featured</span>
                                </div>
                                <div class="content-overlay end-0 top-0 pt-3 pe-3">
                                    <button class="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist">
                                        <i class="fi-heart"></i>
                                    </button>
                                </div>
                                <img src="@/assets/img/real-estate/catalog/02.jpg" alt="Image" />
                            </div>
                            <div class="card-body position-relative pb-3">
                                <h4 class="mb-1 fs-xs fw-normal text-uppercase text-primary">For sale</h4>
                                <h3 class="h6 mb-2 fs-base">
                                    <router-link class="nav-link stretched-link" to="/real-estate-single-v1">Family Home| 120 sq.m</router-link>
                                </h3>
                                <p class="mb-2 fs-sm text-muted">67-04 Myrtle Ave Glendale, NY 11385</p>
                                <div class="fw-bold">
                                    <i class="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>$84,000
                                </div>
                            </div>
                            <div class="card-footer d-flex align-items-center justify-content-center mx-3 pt-3 text-nowrap">
                                <span class="d-inline-block mx-1 px-2 fs-sm">4<i class="fi-bed ms-1 mt-n1 fs-lg text-muted"></i></span>
                                <span class="d-inline-block mx-1 px-2 fs-sm">2<i class="fi-bath ms-1 mt-n1 fs-lg text-muted"></i></span>
                                <span class="d-inline-block mx-1 px-2 fs-sm">2<i class="fi-car ms-1 mt-n1 fs-lg text-muted"></i></span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="col">
                        <div class="card shadow-sm card-hover border-0 h-100">
                            <div class="card-img-top card-img-hover">
                                <router-link class="img-overlay" to="/real-estate-single-v1"></router-link>
                                <div class="position-absolute start-0 top-0 pt-3 ps-3">
                                    <span class="d-table badge bg-success">Verified</span>
                                </div>
                                <div class="content-overlay end-0 top-0 pt-3 pe-3">
                                    <button class="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist">
                                        <i class="fi-heart"></i>
                                    </button>
                                </div>
                                <img src="@/assets/img/real-estate/catalog/03.jpg" alt="Image" />
                            </div>
                            <div class="card-body position-relative pb-3">
                                <h4 class="mb-1 fs-xs fw-normal text-uppercase text-primary">For rent</h4>
                                <h3 class="h6 mb-2 fs-base">
                                    <router-link class="nav-link stretched-link" to="/real-estate-single-v1">Greenpoint Rentals | 85 sq.m</router-link>
                                </h3>
                                <p class="mb-2 fs-sm text-muted">1510 Castle Hill Ave Bronx, NY 10462</p>
                                <div class="fw-bold">
                                    <i class="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>$1,330
                                </div>
                            </div>
                            <div class="card-footer d-flex align-items-center justify-content-center mx-3 pt-3 text-nowrap">
                                <span class="d-inline-block mx-1 px-2 fs-sm">1<i class="fi-bed ms-1 mt-n1 fs-lg text-muted"></i></span>
                                <span class="d-inline-block mx-1 px-2 fs-sm">1<i class="fi-bath ms-1 mt-n1 fs-lg text-muted"></i></span>
                                <span class="d-inline-block mx-1 px-2 fs-sm">1<i class="fi-car ms-1 mt-n1 fs-lg text-muted"></i></span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="col">
                        <div class="card shadow-sm card-hover border-0 h-100">
                            <div class="card-img-top card-img-hover">
                                <router-link class="img-overlay" to="/real-estate-single-v1"></router-link>
                                <div class="position-absolute start-0 top-0 pt-3 ps-3">
                                    <span class="d-table badge bg-success mb-1">Verified</span><span class="d-table badge bg-info">New</span>
                                </div>
                                <div class="content-overlay end-0 top-0 pt-3 pe-3">
                                    <button class="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist">
                                        <i class="fi-heart"></i>
                                    </button>
                                </div>
                                <img src="@/assets/img/real-estate/catalog/04.jpg" alt="Image" />
                            </div>
                            <div class="card-body position-relative pb-3">
                                <h4 class="mb-1 fs-xs fw-normal text-uppercase text-primary">For sale</h4>
                                <h3 class="h6 mb-2 fs-base">
                                    <router-link class="nav-link stretched-link" to="/real-estate-single-v1">Studio | 32 sq.m</router-link>
                                </h3>
                                <p class="mb-2 fs-sm text-muted">140-60 Beech Ave Flushing, NY 11355</p>
                                <div class="fw-bold">
                                    <i class="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>$65,000
                                </div>
                            </div>
                            <div class="card-footer d-flex align-items-center justify-content-center mx-3 pt-3 text-nowrap">
                                <span class="d-inline-block mx-1 px-2 fs-sm">1<i class="fi-bed ms-1 mt-n1 fs-lg text-muted"></i></span>
                                <span class="d-inline-block mx-1 px-2 fs-sm">1<i class="fi-bath ms-1 mt-n1 fs-lg text-muted"></i></span>
                                <span class="d-inline-block mx-1 px-2 fs-sm">2<i class="fi-car ms-1 mt-n1 fs-lg text-muted"></i></span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="col">
                        <div class="card shadow-sm card-hover border-0 h-100">
                            <div class="card-img-top card-img-hover">
                                <router-link class="img-overlay" to="/real-estate-single-v1"></router-link>
                                <div class="position-absolute start-0 top-0 pt-3 ps-3">
                                    <span class="d-table badge bg-success mb-1">Verified</span>
                                </div>
                                <div class="content-overlay end-0 top-0 pt-3 pe-3">
                                    <button class="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist">
                                        <i class="fi-heart"></i>
                                    </button>
                                </div>
                                <img src="@/assets/img/real-estate/catalog/05.jpg" alt="Image" />
                            </div>
                            <div class="card-body position-relative pb-3">
                                <h4 class="mb-1 fs-xs fw-normal text-uppercase text-primary">For sale</h4>
                                <h3 class="h6 mb-2 fs-base">
                                    <router-link class="nav-link stretched-link" to="/real-estate-single-v1">Cottage | 120 sq.m</router-link>
                                </h3>
                                <p class="mb-2 fs-sm text-muted">42 Broadway New York, NY 10004</p>
                                <div class="fw-bold">
                                    <i class="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>$184,000
                                </div>
                            </div>
                            <div class="card-footer d-flex align-items-center justify-content-center mx-3 pt-3 text-nowrap">
                                <span class="d-inline-block mx-1 px-2 fs-sm">4<i class="fi-bed ms-1 mt-n1 fs-lg text-muted"></i>
                                </span>
                                <span class="d-inline-block mx-1 px-2 fs-sm">2<i class="fi-bath ms-1 mt-n1 fs-lg text-muted"></i>
                                </span>
                                <span class="d-inline-block mx-1 px-2 fs-sm">1<i class="fi-car ms-1 mt-n1 fs-lg text-muted"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </swiper>
        </div>
    </section>
</template>
