<template>
    <!-- Discover locations-->
    <section class="container mb-5 pb-lg-5 pb-4">
        <div class="d-flex align-items-start justify-content-between mb-3 mb-md-4 pb-md-2">
            <div class="d-flex flex-md-row flex-column align-items-center">
                <h2 class="h3 mb-4 mb-md-0">Discover locations</h2>
                <ul class="nav nav-tabs mb-0 ms-md-4 ms-n3 ps-lg-2" role="tablist">
                    <li class="nav-item"><a class="nav-link active" href="javascript:void(0);">For rent</a></li>
                    <li class="nav-item"><a class="nav-link" href="javascript:void(0);">For sale</a></li>
                </ul>
            </div>
            <router-link class="btn btn-link fw-normal ms-2 p-0" to="/real-estate-catalog-rent">View all<i class="fi-arrow-long-right ms-2"></i></router-link>
        </div>
        <!-- Carousel-->
        <div class="mx-n2">
            <div class="row g-4 mx-0 py-3">
                <div class="col col-lg-4 col-md-6 col-sm-12">
                    <div class="card card-hover border-0 shadow-sm h-100 p-2">
                        <div class="card-body p-4">
                            <img class="d-block rounded-3 mb-3" src="@/assets/img/real-estate/locations/usa.svg" width="80">
                            <h4 class="h5 mb-2">Popular locations</h4>
                            <span class="fs-sm text-muted">Tempor id sed suspendisse nulla.</span>
                            <hr class="my-4">
                            <ul class="nav flex-column mb-0">
                                <li class="nav-item mb-2 pb-1"><a class="nav-link p-0 fw-normal" href="javascript:void(0);">New York</a></li>
                                <li class="nav-item mb-2 pb-1"><a class="nav-link p-0 fw-normal" href="javascript:void(0);">Los Angeles</a></li>
                                <li class="nav-item mb-2 pb-1"><a class="nav-link p-0 fw-normal" href="javascript:void(0);">Houston</a></li>
                                <li class="nav-item mb-2 pb-1"><a class="nav-link p-0 fw-normal" href="javascript:void(0);">Phoenix</a></li>
                                <li class="nav-item mb-2 pb-1"><a class="nav-link p-0 fw-normal" href="javascript:void(0);">Philadelphia</a></li>
                                <li class="nav-item"><a class="nav-link p-0 fw-normal" href="javascript:void(0);">Chicago</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-4 col-md-6 col-sm-12">
                    <div class="card card-hover border-0 shadow-sm h-100 p-2">
                        <div class="card-body p-4">
                            <img class="d-block rounded-3 mb-3" src="@/assets/img/real-estate/locations/city.svg" width="80">
                            <h4 class="h5 mb-2">In the city</h4>
                            <span class="fs-sm text-muted">Aenean in vitae lectus nunc. Dictum nunc enim.</span>
                            <hr class="my-4">
                            <ul class="nav flex-column mb-0">
                                <li class="nav-item mb-2 pb-1"><a class="nav-link p-0 fw-normal" href="javascript:void(0);">San Antonio</a></li>
                                <li class="nav-item mb-2 pb-1"><a class="nav-link p-0 fw-normal" href="javascript:void(0);">San Diego</a></li>
                                <li class="nav-item mb-2 pb-1"><a class="nav-link p-0 fw-normal" href="javascript:void(0);">Austin</a></li>
                                <li class="nav-item mb-2 pb-1"><a class="nav-link p-0 fw-normal" href="javascript:void(0);">San Jose</a></li>
                                <li class="nav-item mb-2 pb-1"><a class="nav-link p-0 fw-normal" href="javascript:void(0);">Columbus</a></li>
                                <li class="nav-item"><a class="nav-link p-0 fw-normal" href="javascript:void(0);">Dallas</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-4 col-md-6 col-sm-12">
                    <div class="card card-hover border-0 shadow-sm h-100 p-2">
                        <div class="card-body p-4">
                            <img class="d-block rounded-3 mb-3" src="@/assets/img/real-estate/locations/field.svg" width="80">
                            <h4 class="h5 mb-2">Rural and countryside</h4>
                            <span class="fs-sm text-muted">Leo vel sit velit, nam volutpat tincidunt orci.</span>
                            <hr class="my-4">
                            <ul class="nav flex-column mb-0">
                                <li class="nav-item mb-2 pb-1"><a class="nav-link p-0 fw-normal" href="javascript:void(0);">Bar Harbor</a></li>
                                <li class="nav-item mb-2 pb-1"><a class="nav-link p-0 fw-normal" href="javascript:void(0);">Gatlinburg</a></li>
                                <li class="nav-item mb-2 pb-1"><a class="nav-link p-0 fw-normal" href="javascript:void(0);">Sedona</a></li>
                                <li class="nav-item mb-2 pb-1"><a class="nav-link p-0 fw-normal" href="javascript:void(0);">Monterey</a></li>
                                <li class="nav-item mb-2 pb-1"><a class="nav-link p-0 fw-normal" href="javascript:void(0);">Telluride</a></li>
                                <li class="nav-item"><a class="nav-link p-0 fw-normal" href="javascript:void(0);">Sonoma</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>