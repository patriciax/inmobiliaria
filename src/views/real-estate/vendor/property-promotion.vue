<script lang="ts" setup>
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

const breadcrumbData = ref([
    {
        title: 'Home',
        link: '/',
        subitems: [
            {
                title: 'Add Property',
                link: '/real-estate-add-property'
            },
            {
                title: 'Promotion page'
            }
        ]
    }
])
</script>
<template>
    <div class="container mt-5 mb-md-4 py-5">
        <!-- Title + Breadcrumb-->
        <Breadcrumb :data="breadcrumbData" />

        <h1 class="h2 mb-4">Promotion page</h1>
        <h2 class="h3 pb-2 mb-4">Select your perfect plan to promote your ad</h2>
        <div class="row">
            <div class="col-sm-6 col-md-4 mb-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <img class="d-block mx-auto mt-2 mb-4" src="@/assets/img/pricing/icon-1.svg" width="72" alt="Icon" />
                        <h2 class="h5 fw-normal text-center py-1 mb-0">Easy Start</h2>
                        <div class="d-flex align-items-end justify-content-center mb-4">
                            <div class="h1 mb-0">$5</div>
                            <div class="pb-2 ps-2">/month</div>
                        </div>
                        <ul class="list-unstyled d-block mb-0 mx-auto" style="max-width: 16rem">
                            <li class="d-flex">
                                <i class="fi-check text-primary fs-sm mt-1 me-2"></i><span>3x more views</span>
                            </li>
                            <li class="d-flex">
                                <i class="fi-check text-primary fs-sm mt-1 me-2"></i><span>Top ads for 3 days</span>
                            </li>
                            <li class="d-flex text-muted">
                                <i class="fi-x fs-xs mt-2 me-2"></i><span>Moving up the list</span>
                            </li>
                            <li class="d-flex text-muted">
                                <i class="fi-x fs-xs mt-2 me-2"></i><span>Featured badge in the results</span>
                            </li>
                        </ul>
                    </div>
                    <div class="card-footer py-2 border-0">
                        <div class="border-top text-center pt-4 pb-3">
                            <a class="btn btn-outline-primary" href="javascript:void(0);">Choose plan</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 mb-4">
                <div class="card shadow">
                    <div class="card-body">
                        <img class="d-block mx-auto mt-2 mb-4" src="@/assets/img/pricing/icon-2.svg" width="72" alt="Icon" />
                        <h2 class="h5 fw-normal text-center py-1 mb-0">Fast Sale</h2>
                        <div class="d-flex align-items-end justify-content-center mb-4">
                            <div class="h1 mb-0">$15</div>
                            <div class="pb-2 ps-2">/month</div>
                        </div>
                        <ul class="list-unstyled d-block mb-0 mx-auto" style="max-width: 16rem">
                            <li class="d-flex">
                                <i class="fi-check text-primary fs-sm mt-1 me-2"></i><span>10x more views</span>
                            </li>
                            <li class="d-flex">
                                <i class="fi-check text-primary fs-sm mt-1 me-2"></i><span>Top ads for 5 days</span>
                            </li>
                            <li class="d-flex">
                                <i class="fi-check text-primary fs-sm mt-1 me-2"></i><span>Moving up the list</span>
                            </li>
                            <li class="d-flex text-muted">
                                <i class="fi-x fs-xs mt-2 me-2"></i><span>Featured badge in the results</span>
                            </li>
                        </ul>
                    </div>
                    <div class="card-footer py-2 border-0">
                        <div class="border-top text-center pt-4 pb-3">
                            <a class="btn btn-primary" href="javascript:void(0);">Choose plan</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <img class="d-block mx-auto mt-2 mb-4" src="@/assets/img/pricing/icon-3.svg" width="72" alt="Icon" />
                        <h2 class="h5 fw-normal text-center py-1 mb-0">Turbo Boost</h2>
                        <div class="d-flex align-items-end justify-content-center mb-4">
                            <div class="h1 mb-0">$25</div>
                            <div class="pb-2 ps-2">/month</div>
                        </div>
                        <ul class="list-unstyled d-block mb-0 mx-auto" style="max-width: 16rem">
                            <li class="d-flex">
                                <i class="fi-check text-primary fs-sm mt-1 me-2"></i><span>20x more views</span>
                            </li>
                            <li class="d-flex">
                                <i class="fi-check text-primary fs-sm mt-1 me-2"></i><span>Top ads for 10 days</span>
                            </li>
                            <li class="d-flex">
                                <i class="fi-check text-primary fs-xs mt-2 me-2"></i><span>Moving up the list</span>
                            </li>
                            <li class="d-flex">
                                <i class="fi-check text-primary fs-xs mt-2 me-2"></i><span>Featured badge in the results</span>
                            </li>
                        </ul>
                    </div>
                    <div class="card-footer py-2 border-0">
                        <div class="border-top text-center pt-4 pb-3">
                            <a class="btn btn-outline-primary" href="javascript:void(0);">Choose plan</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h2 class="h3 pt-4 pt-md-5 mb-4">Other services</h2>
        <div class="card card-hover card-body px-4 mb-2">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="ad-option-1" checked />
                <label class="form-check-label d-sm-flex align-items-center justify-content-between" for="ad-option-1"><span class="d-block px-1"><span class="d-block h6 mb-2">Check and certify my ad by Finder experts</span><span class="d-block mb-2 mb-sm-0">Ads with Certified badge get <strong>10x</strong> more views</span></span><span class="d-block h4 mb-0">$35</span></label>
            </div>
        </div>
        <div class="card card-hover card-body px-4 mb-2">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="ad-option-2" />
                <label class="form-check-label d-sm-flex align-items-center justify-content-between" for="ad-option-2">
                    <span class="d-block px-1">
                        <span class="d-block h6 mb-2">10 lifts to the top of the list (daily, 7 days)</span>
                        <span class="d-block mb-2 mb-sm-0">Your ad will be seen by as many people as possible</span>
                    </span>
                    <span class="d-block h4 mb-0">$20</span>
                </label>
            </div>
        </div>
        <div class="card card-hover card-body px-4 mb-2">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="ad-option-3" />
                <label class="form-check-label d-sm-flex align-items-center justify-content-between" for="ad-option-3">
                    <span class="d-block px-1">
                        <span class="d-block h6 mb-2">Featured ad for 7 days</span>
                        <span class="d-block mb-2 mb-sm-0">Ads with Featured badge get <strong>5x</strong> more views</span>
                    </span>
                    <span class="d-block h4 mb-0">$15</span></label>
            </div>
        </div>
        <div class="text-end pt-4">
            <div class="h4 mb-4">Total: $35</div>
            <button class="btn btn-outline-secondary btn-lg me-2" type="button">Do not promote</button>
            <button class="btn btn-primary btn-lg" type="button">Submit</button>
        </div>
    </div>
</template>
