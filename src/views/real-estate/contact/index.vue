<script lang="ts" setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import { ref } from 'vue'

const breadcrumbData = ref([
    {
        title: 'Home',
        link: '/',
        subitems: [
            {
                title: 'Contact us',
            },
        ]
    }
])
</script>
<template>
    <div class="container mt-5 mb-md-4 pt-5">
        <Breadcrumb :data="breadcrumbData" />
    </div>
    <!-- Hero-->
    <section class="container mb-5 pb-2 pb-md-4 pb-lg-5">
        <div class="row align-items-md-start align-items-center gy-4">
            <div class="col-lg-5 col-md-6">
                <div class="mx-md-0 mx-auto mb-md-5 mb-4 pb-md-4 text-md-start text-center" style="max-width: 416px;">
                    <h1 class="mb-4">Get in touch!</h1>
                    <p class="mb-0 fs-lg text-muted">Fill out the form and out team will try to get back to you within 24 hours.</p>
                </div>
                <img class="d-block mx-auto" src="@/assets/img/real-estate/illustrations/contact.svg" alt="Illustration">
            </div>
            <div class="col-md-6 offset-lg-1">
                <div class="card border-0 bg-secondary p-sm-3 p-2">
                    <div class="card-body m-1">
                        <form class="needs-validation" novalidate>
                            <div class="mb-4">
                                <label class="form-label" for="c-name">Full Name</label>
                                <input class="form-control form-control-lg" id="c-name" type="text" required>
                                <div class="invalid-tooltip mt-1">Please, enter your name</div>
                            </div>
                            <div class="mb-4">
                                <label class="form-label" for="c-email">Your Email</label>
                                <input class="form-control form-control-lg" id="c-email" type="email" required>
                                <div class="invalid-tooltip mt-1">Please, enter your email</div>
                            </div>
                            <div class="mb-4">
                                <label class="form-label" for="c-message">Message</label>
                                <textarea class="form-control form-control-lg" id="c-message" rows="4" placeholder="Leave your message" required></textarea>
                                <div class="invalid-tooltip mt-1">Please, type your message</div>
                            </div>
                            <div class="pt-sm-2 pt-1">
                                <button class="btn btn-lg btn-primary w-sm-auto w-100" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact cards-->
    <section class="container mb-5 pb-2 pb-md-4 pb-lg-5">
        <div class="row g-4">
            <!-- Item-->
            <div class="col-md-4">
                <a class="icon-box card card-hover h-100" href="mailto:example@email.com">
                    <div class="card-body">
                        <div class="icon-box-media text-primary rounded-circle shadow-sm mb-3">
                            <i class="fi-mail"></i>
                        </div>
                        <span class="d-block mb-1 text-body">Drop us a line</span>
                        <h3 class="h4 icon-box-title mb-0 opacity-90">example@email.com</h3>
                    </div>
                </a>
            </div>
            <!-- Item-->
            <div class="col-md-4">
                <a class="icon-box card card-hover h-100" href="tel:4065550120">
                    <div class="card-body">
                        <div class="icon-box-media text-primary rounded-circle shadow-sm mb-3">
                            <i class="fi-device-mobile"></i>
                        </div>
                        <span class="d-block mb-1 text-body">Call us any time</span>
                        <h3 class="h4 icon-box-title mb-0 opacity-90">(406) 555-0120</h3>
                    </div>
                </a>
            </div>
            <!-- Item-->
            <div class="col-md-4"><a class="icon-box card card-hover h-100" href="javascript:void(0);">
                    <div class="card-body">
                        <div class="icon-box-media text-primary rounded-circle shadow-sm mb-3">
                            <i class="fi-instagram"></i>
                        </div>
                        <span class="d-block mb-1 text-body">Follow us</span>
                        <h3 class="h4 icon-box-title mb-0 opacity-90">@finder_directory</h3>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>