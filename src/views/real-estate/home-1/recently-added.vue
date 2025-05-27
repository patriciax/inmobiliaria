<script lang="ts" setup>
import img1 from '@/assets/img/real-estate/recent/01.jpg'
import img2 from '@/assets/img/real-estate/recent/02.jpg'
import img3 from '@/assets/img/real-estate/recent/03.jpg'
</script>

<template>
    <!-- Recently added-->
    <section class="container pb-4 pt-1 mb-5">
        <div class="d-flex align-items-end align-items-lg-center justify-content-between mb-4 pb-md-2">
            <div class="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
                <h2 class="h3 mb-0 me-md-4">Added today</h2>
                <div class="dropdown d-md-none" data-bs-toggle="select">
                    <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        <span class="dropdown-toggle-label">Houses</span>
                    </button>
                    <input type="hidden" />
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Apartments</span></a>
                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Houses</span></a>
                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Rooms</span></a>
                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Commercial</span></a>
                    </div>
                </div>
                <ul class="nav nav-tabs d-none d-md-flex ps-lg-2 mb-0">
                    <li class="nav-item"><a class="nav-link fs-sm mb-2 mb-md-0" href="javascript:void(0);">Apartments</a></li>
                    <li class="nav-item">
                        <a class="nav-link fs-sm active mb-2 mb-md-0" href="javascript:void(0);">Houses</a>
                    </li>
                    <li class="nav-item"><a class="nav-link fs-sm mb-2 mb-md-0" href="javascript:void(0);">Rooms</a></li>
                    <li class="nav-item"><a class="nav-link fs-sm mb-2 mb-md-0" href="javascript:void(0);">Commercial</a></li>
                </ul>
            </div>
            <router-link class="btn btn-link fw-normal d-none d-lg-block p-0" to="/real-estate-catalog-rent">View all<i class="fi-arrow-long-right ms-2"></i></router-link>
        </div>
        <div class="row g-4">
            <div class="col-md-6">
                <div class="card bg-size-cover bg-position-center border-0 overflow-hidden h-100" :style="{ 'background-image': 'url(' + img1 + ')' }">
                    <span class="img-gradient-overlay"></span>
                    <div class="card-body content-overlay pb-0">
                        <div class="d-flex">
                            <span class="badge bg-success fs-sm me-2">Verified</span><span class="badge bg-info fs-sm">New</span>
                        </div>
                    </div>
                    <div class="card-footer content-overlay border-0 pt-0 pb-4">
                        <div class="d-sm-flex justify-content-between align-items-end pt-5 mt-2 mt-sm-5">
                            <router-link class="text-decoration-none text-light pe-2" to="/real-estate-single-v1">
                                <div class="fs-sm text-uppercase pt-2 mb-1">For rental</div>
                                <h3 class="h5 text-light mb-1">Luxury Rental Villa</h3>
                                <div class="fs-sm opacity-70">
                                    <i class="fi-map-pin me-1"></i>118-11 Sutphin Blvd Jamaica, NY 11434
                                </div>
                            </router-link>
                            <div class="btn-group ms-n2 ms-sm-0 mt-3">
                                <router-link class="btn btn-primary px-3" to="/real-estate-single-v1" style="height: 2.75rem">From $3,850</router-link>
                                <button class="btn btn-primary btn-icon border-end-0 border-top-0 border-bottom-0 border-light fs-sm" type="button">
                                    <i class="fi-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card bg-size-cover bg-position-center border-0 overflow-hidden mb-4" :style="{ 'background-image': 'url(' + img2 + ')' }">
                    <span class="img-gradient-overlay"></span>
                    <div class="card-body content-overlay pb-0">
                        <span class="badge bg-info fs-sm">New</span>
                    </div>
                    <div class="card-footer content-overlay border-0 pt-0 pb-4">
                        <div class="d-sm-flex justify-content-between align-items-end pt-5 mt-2 mt-sm-5">
                            <router-link class="text-decoration-none text-light pe-2" to="/real-estate-single-v1">
                                <div class="fs-sm text-uppercase pt-2 mb-1">For sale</div>
                                <h3 class="h5 text-light mb-1">Duplex with Garage</h3>
                                <div class="fs-sm opacity-70">
                                    <i class="fi-map-pin me-1"></i>21 Pulaski Road Kings Park, NY 11754
                                </div>
                            </router-link>
                            <div class="btn-group ms-n2 ms-sm-0 mt-3">
                                <router-link class="btn btn-primary px-3" to="/real-estate-single-v1" style="height: 2.75rem">$200,410</router-link>
                                <button class="btn btn-primary btn-icon border-end-0 border-top-0 border-bottom-0 border-light fs-sm" type="button">
                                    <i class="fi-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card bg-size-cover bg-position-center border-0 overflow-hidden" :style="{ 'background-image': 'url(' + img3 + ')' }">
                    <span class="img-gradient-overlay"></span>
                    <div class="card-body content-overlay pb-0">
                        <span class="badge bg-info fs-sm">New</span>
                    </div>
                    <div class="card-footer content-overlay border-0 pt-0 pb-4">
                        <div class="d-sm-flex justify-content-between align-items-end pt-5 mt-2 mt-sm-5">
                            <router-link class="text-decoration-none text-light pe-2" to="/real-estate-single-v1">
                                <div class="fs-sm text-uppercase pt-2 mb-1">For sale</div>
                                <h3 class="h5 text-light mb-1">Country House</h3>
                                <div class="fs-sm opacity-70">
                                    <i class="fi-map-pin me-1"></i>6954 Grand AveMaspeth, NY 11378
                                </div>
                            </router-link>
                            <div class="btn-group ms-n2 ms-sm-0 mt-3">
                                <router-link class="btn btn-primary px-3" to="/real-estate-single-v1" style="height: 2.75rem">$162,000</router-link>
                                <button class="btn btn-primary btn-icon border-end-0 border-top-0 border-bottom-0 border-light fs-sm" type="button">
                                    <i class="fi-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
