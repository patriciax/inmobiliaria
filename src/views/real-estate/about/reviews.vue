<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
</script>
<template>
    <!-- Hear from our customers-->
    <section class="container mb-5 pb-xl-5 pb-md-2">
        <h2 class="h3 mb-3 text-center">Hear from our customers</h2>
        <!-- Testimonials carousel-->
        <Swiper :slidesPerView="1" :space-between="25" :loop="true" class="col-lg-10 mx-auto px-0">
            <!-- Testimonial slide-->
            <SwiperSlide class="d-flex flex-md-row flex-column align-items-md-start mx-3 py-3">
                <img class="d-md-block d-none me-4 rounded-3" src="@/assets/img/real-estate/about/testimonials/01.jpg" width="306" alt="Customer image" />
                <div class="card border-0 shadow-sm h-100">
                    <blockquote class="blockquote card-body">
                        <p>
                            Eu massa, pharetra massa integer. Sed molestie sollicitudin morbi ultrices. Odio is
                            euismodtelle faucibus. Venenatis nunc, tristique turpis cras sodales. In dui,
                            viverra et ac. Id justo, varius nunc, faucibus erat proin elit. Amet diam, aliquet
                            nec quis vel. Donec ut quisque in lorem sapien.
                        </p>
                        <footer class="d-flex align-items-center">
                            <img src="@/assets/img/job-board/company/zalo-lg.png" width="56" alt="Logo" />
                            <div class="ps-3">
                                <h6 class="fs-base mb-0">Zalo Tech Company</h6>
                                <div class="text-muted fw-normal fs-sm">Floyd Miles, Head of HR Department</div>
                            </div>
                        </footer>
                    </blockquote>
                </div>
            </SwiperSlide>
            <!-- Testimonial slide-->
            <SwiperSlide class="d-flex align-items-start mx-3 py-3">
                <img class="d-md-block d-none me-4 rounded-3" src="@/assets/img/real-estate/about/testimonials/02.jpg" width="306" alt="Customer image" />
                <div class="card border-0 shadow-sm h-100">
                    <blockquote class="blockquote card-body">
                        <p>
                            Eu massa, pharetra massa integer. Sed molestie sollicitudin morbi ultrices. Odio is
                            euismodtelle faucibus. Venenatis nunc, tristique turpis cras sodales. In dui,
                            viverra et ac. Id justo, varius nunc, faucibus erat proin elit. Amet diam, aliquet
                            nec quis vel. Donec ut quisque in lorem sapien.
                        </p>
                        <footer class="d-flex align-items-center">
                            <img src="@/assets/img/job-board/company/elastic-lg.png" width="56" alt="Logo" />
                            <div class="ps-3">
                                <h6 class="fs-base mb-0">Elastic Inc.</h6>
                                <div class="text-muted fw-normal fs-sm">Guy Hawkins, Senior HR</div>
                            </div>
                        </footer>
                    </blockquote>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
</template>
