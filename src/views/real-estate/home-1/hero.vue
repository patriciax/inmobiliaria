<script lang="ts" setup>
import Slider from '@vueform/slider';
import { ref } from 'vue';

const slideValue = ref<Number>(450);
</script>

<template>
    <!-- Hero-->
    <section class="container pt-5 my-5 pb-lg-4">
        <div class="row pt-0 pt-md-2 pt-lg-0">
            <div class="col-xl-7 col-lg-6 col-md-5 order-md-2 mb-4 mb-lg-3">
                <img src="@/assets/img/real-estate/hero-image.jpg" alt="Hero image" />
            </div>
            <div class="col-xl-5 col-lg-6 col-md-7 order-md-1 pt-xl-5 pe-lg-0 mb-3 text-md-start text-center">
                <h1 class="display-4 mt-lg-5 mb-md-4 mb-3 pt-md-4 pb-lg-2">
                    Easy way to find <br />
                    a perfect property
                </h1>
                <p class="position-relative lead me-lg-n5">
                    We provide a complete service for the sale, purchase or rental of real estate. We have
                    been operating more than 10 years. Search millions of apartments and houses on Finder.
                </p>
            </div>
            <!-- Search property form group-->
            <div class="col-xl-8 col-lg-10 order-3 mt-lg-n5">
                <form class="form-group d-block">
                    <div class="row g-0 ms-sm-n2">
                        <div class="col-md-8 d-sm-flex align-items-center">
                            <div class="dropdown w-sm-50 border-end-sm" data-bs-toggle="select">
                                <button class="btn btn-link dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown">
                                    <i class="fi-home me-2"></i><span class="dropdown-toggle-label">For rent</span>
                                </button>
                                <input type="hidden" />
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">For rent</span></a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">For sale</span></a>
                                    </li>
                                </ul>
                            </div>
                            <hr class="d-sm-none my-2" />
                            <div class="dropdown w-sm-50 border-end-sm" data-bs-toggle="select">
                                <button class="btn btn-link dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown">
                                    <i class="fi-map-pin me-2"></i><span class="dropdown-toggle-label">Location</span>
                                </button>
                                <input type="hidden" />
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">New York</span></a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Chicago</span></a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Los Angeles</span></a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">San Diego</span></a>
                                    </li>
                                </ul>
                            </div>
                            <hr class="d-sm-none my-2" />
                            <div class="dropdown w-sm-50 border-end-md" data-bs-toggle="select">
                                <button class="btn btn-link dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown">
                                    <i class="fi-list me-2"></i><span class="dropdown-toggle-label">Tipo de propiedad</span>
                                </button>
                                <input type="hidden" />
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Houses</span></a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Apartments</span></a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Commercial</span></a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Daily rental</span></a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">New buildings</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr class="d-md-none mt-2" />
                        <div class="col-md-4 d-sm-flex align-items-center pt-4 pt-md-0">
                            <div class="d-flex align-items-center w-100 pt-2 pb-4 py-sm-0 ps-2 ps-sm-3">
                                <i class="fi-cash fs-lg text-muted me-2"></i><span class="text-muted">Price</span>
                                <Slider class="ps-2  pe-sm-3 w-100" :min="0" :max="1000" :step="1" v-model="slideValue" :format="{prefix: '$', decimals: 0 }" />
                            </div>
                            <button class="btn btn-icon btn-primary px-3 w-100 w-sm-auto flex-shrink-0" type="button">
                                <i class="fi-search"></i><span class="d-sm-none d-inline-block ms-2">Search</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
