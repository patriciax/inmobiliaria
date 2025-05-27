<script lang="ts" setup>
import { ref } from 'vue'
import leftSidebar from './common/left-sidebar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

const breadcrumbData = ref([
    {
        title: 'Home',
        link: '/',
        subitems: [
            {
                title: 'Account',
                link: '/real-estate-account-info'
            },
            {
                title: 'Wishlist'
            }
        ]
    }
])
</script>
<template>
    <!-- Page content-->
    <div class="container pt-5 pb-lg-4 mt-5 mb-sm-2">
        <!-- Breadcrumb-->
        <Breadcrumb :data="breadcrumbData" />

        <!-- Page content-->
        <div class="row">
            <!-- Sidebar-->
            <leftSidebar activePage="wishlist" />

            <!-- Content-->
            <div class="col-lg-8 col-md-7 mb-5">
                <div class="d-flex align-items-center justify-content-between mb-4 pb-2">
                    <h1 class="h2 mb-0">Wishlist</h1>
                    <a class="fw-bold text-decoration-none" href="javascript:void(0);"><i class="fi-x fs-xs mt-n1 me-2"></i>Clear all</a>
                </div>
                <!-- Item-->
                <div class="card card-hover card-horizontal border-0 shadow-sm mb-4">
                    <div class="card-img-top position-relative" style="background-image: url(../../../../src/assets/img/real-estate/catalog/16.jpg)">
                        <router-link class="stretched-link" to="/real-estate-single-v1"></router-link>
                        <div class="position-absolute start-0 top-0 pt-3 ps-3">
                            <span class="d-table badge bg-success mb-1">Verified</span><span class="d-table badge bg-info">New</span>
                        </div>
                        <div class="position-absolute end-0 top-0 pt-3 pe-3 zindex-5">
                            <button class="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Remove from Wishlist">
                                <i class="fi-heart-filled"></i>
                            </button>
                        </div>
                    </div>
                    <div class="card-body position-relative pb-3">
                        <h4 class="mb-1 fs-xs fw-normal text-uppercase text-primary">For sale</h4>
                        <h3 class="h6 mb-2 fs-base">
                            <router-link class="nav-link stretched-link" to="/real-estate-single-v1">3-bed Apartment | 67 sq.m</router-link>
                        </h3>
                        <p class="mb-2 fs-sm text-muted">3811 Ditmars Blvd Astoria, NY 11105</p>
                        <div class="fw-bold">
                            <i class="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>$94,000
                        </div>
                        <div class="d-flex align-items-center justify-content-center justify-content-sm-start border-top pt-3 pb-2 mt-3 text-nowrap">
                            <span class="d-inline-block me-4 fs-sm">3<i class="fi-bed ms-1 mt-n1 fs-lg text-muted"></i></span>
                            <span class="d-inline-block me-4 fs-sm">2<i class="fi-bath ms-1 mt-n1 fs-lg text-muted"></i></span>
                            <span class="d-inline-block fs-sm">2<i class="fi-car ms-1 mt-n1 fs-lg text-muted"></i></span>
                        </div>
                    </div>
                </div>
                <!-- Item-->
                <div class="card card-hover card-horizontal border-0 shadow-sm mb-4">
                    <div class="card-img-top position-relative" style="background-image: url(../../../../src/assets/img/real-estate/catalog/09.jpg)">
                        <router-link class="stretched-link" to="/real-estate-single-v1"></router-link>
                        <div class="position-absolute start-0 top-0 pt-3 ps-3">
                            <span class="d-table badge bg-success mb-1">Verified</span>
                        </div>
                        <div class="position-absolute end-0 top-0 pt-3 pe-3 zindex-5">
                            <button class="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Remove from Wishlist">
                                <i class="fi-heart-filled"></i>
                            </button>
                        </div>
                    </div>
                    <div class="card-body position-relative pb-3">
                        <h4 class="mb-1 fs-xs fw-normal text-uppercase text-primary">For rent</h4>
                        <h3 class="h6 mb-2 fs-base">
                            <router-link class="nav-link stretched-link" to="/real-estate-single-v1">Terra Nova Apartments | 85 sq.m</router-link>
                        </h3>
                        <p class="mb-2 fs-sm text-muted">21 India St Brooklyn, NY 11222</p>
                        <div class="fw-bold">
                            <i class="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>$2,400
                        </div>
                        <div class="d-flex align-items-center justify-content-center justify-content-sm-start border-top pt-3 pb-2 mt-3 text-nowrap">
                            <span class="d-inline-block me-4 fs-sm">5<i class="fi-bed ms-1 mt-n1 fs-lg text-muted"></i></span>
                            <span class="d-inline-block me-4 fs-sm">2<i class="fi-bath ms-1 mt-n1 fs-lg text-muted"></i></span>
                            <span class="d-inline-block fs-sm">2<i class="fi-car ms-1 mt-n1 fs-lg text-muted"></i></span>
                        </div>
                    </div>
                </div>
                <!-- Item-->
                <div class="card card-hover card-horizontal border-0 shadow-sm mb-4">
                    <div class="card-img-top position-relative" style="background-image: url(../../../../src/assets/img/real-estate/catalog/19.jpg)">
                        <router-link class="stretched-link" to="/real-estate-single-v1"></router-link>
                        <div class="position-absolute end-0 top-0 pt-3 pe-3 zindex-5">
                            <button class="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Remove from Wishlist">
                                <i class="fi-heart-filled"></i>
                            </button>
                        </div>
                    </div>
                    <div class="card-body position-relative pb-3">
                        <h4 class="mb-1 fs-xs fw-normal text-uppercase text-primary">For sale</h4>
                        <h3 class="h6 mb-2 fs-base">
                            <router-link class="nav-link stretched-link" to="/real-estate-single-v1">Country House | 120 sq.m</router-link>
                        </h3>
                        <p class="mb-2 fs-sm text-muted">6954 Grand AveMaspeth, NY 11378</p>
                        <div class="fw-bold">
                            <i class="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>$162,000
                        </div>
                        <div class="d-flex align-items-center justify-content-center justify-content-sm-start border-top pt-3 pb-2 mt-3 text-nowrap">
                            <span class="d-inline-block me-4 fs-sm">5<i class="fi-bed ms-1 mt-n1 fs-lg text-muted"></i></span>
                            <span class="d-inline-block me-4 fs-sm">3<i class="fi-bath ms-1 mt-n1 fs-lg text-muted"></i></span>
                            <span class="d-inline-block fs-sm">2<i class="fi-car ms-1 mt-n1 fs-lg text-muted"></i></span>
                        </div>
                    </div>
                </div>
                <!-- Item-->
                <div class="card card-hover card-horizontal border-0 shadow-sm">
                    <div class="card-img-top position-relative" style="background-image: url(../../../../src/assets/img/real-estate/catalog/17.jpg)">
                        <router-link class="stretched-link" to="/real-estate-single-v1"></router-link>
                        <div class="position-absolute start-0 top-0 pt-3 ps-3">
                            <span class="d-table badge bg-info mb-1">New</span>
                        </div>
                        <div class="position-absolute end-0 top-0 pt-3 pe-3 zindex-5">
                            <button class="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Remove from Wishlist">
                                <i class="fi-heart-filled"></i>
                            </button>
                        </div>
                    </div>
                    <div class="card-body position-relative pb-3">
                        <h4 class="mb-1 fs-xs fw-normal text-uppercase text-primary">For rent</h4>
                        <h3 class="h6 mb-2 fs-base">
                            <router-link class="nav-link stretched-link" to="/real-estate-single-v1">Crystal Apartment| 60 sq.m</router-link>
                        </h3>
                        <p class="mb-2 fs-sm text-muted">495 Henry St Brooklyn, NY 11231</p>
                        <div class="fw-bold">
                            <i class="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>$1,500
                        </div>
                        <div class="d-flex align-items-center justify-content-center justify-content-sm-start border-top pt-3 pb-2 mt-3 text-nowrap">
                            <span class="d-inline-block me-4 fs-sm">4<i class="fi-bed ms-1 mt-n1 fs-lg text-muted"></i></span>
                            <span class="d-inline-block me-4 fs-sm">1<i class="fi-bath ms-1 mt-n1 fs-lg text-muted"></i></span>
                            <span class="d-inline-block fs-sm">2<i class="fi-car ms-1 mt-n1 fs-lg text-muted"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
