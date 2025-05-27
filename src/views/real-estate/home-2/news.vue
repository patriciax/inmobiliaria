<script lang="ts" setup>
import blogImg5 from '@/assets/img/real-estate/blog/05.jpg';
import blogImg6 from '@/assets/img/real-estate/blog/06.jpg';
</script>

<template>
    <section class="container mb-5 pb-lg-5 pb-4">
        <h2 class="h3 mb-4 pb-2 text-md-start text-center">Latest property news</h2>
        <div class="row gy-5">
            <div class="col-lg-7">
                <!-- Post-->
                <article class="card border-0 shadow-sm card-hover card-horizontal mb-4"><a class="card-img-top" href="javascript:void(0);" :style="`background-image: url(${blogImg5});`"></a>
                    <div class="card-body">
                        <router-link class="fs-xs text-uppercase text-decoration-none" to="/real-estate-blog-single">Inspiration</router-link>
                        <h3 class="fs-base pt-1 mb-2">
                            <router-link class="nav-link" to="/real-estate-blog-single">How Real Estate Drone Photography Can Elevate</router-link>
                        </h3>
                        <p class="fs-sm text-muted">Augue diam malesuada vitae id nisl. Fringilla egestas id proin quis consequat nibh quam sed. Ac vitae lectus...</p><a class="d-flex align-items-center text-decoration-none" href="javascript:void(0);"><img class="rounded-circle" src="@/assets/img/avatars/10.jpg" width="44" alt="Avatar">
                            <div class="ps-2">
                                <h6 class="fs-sm text-nav lh-base mb-1">Annette Black</h6>
                                <div class="d-flex text-body fs-xs">
                                    <span class="me-2 pe-1"><i class="fi-calendar-alt opacity-70 me-1"></i>Dec 3</span>
                                    <span><i class="fi-chat-circle opacity-70 me-1"></i>1 comment</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </article>
                <!-- Post-->
                <article class="card border-0 shadow-sm card-hover card-horizontal mb-4">
                    <router-link class="card-img-top" to="/real-estate-blog-single" :style="`background-image: url(${blogImg6});`"></router-link>
                    <div class="card-body">
                        <a class="fs-xs text-uppercase text-decoration-none" href="javascript:void(0);">Industry Views</a>
                        <h3 class="fs-base pt-1 mb-2">
                            <router-link class="nav-link" to="/real-estate-blog-single">7 Tips for Achieving Maximum Coziness</router-link>
                        </h3>
                        <p class="fs-sm text-muted">Eget eu nunc aenean at imperdiet. Pellentesque in massa tincidunt congue. Nulla congue egestas mi volutpat varius...</p><a class="d-flex align-items-center text-decoration-none" href="javascript:void(0);"><img class="rounded-circle" src="@/assets/img/avatars/08.jpg" width="44" alt="Avatar">
                            <div class="ps-2">
                                <h6 class="fs-sm text-nav lh-base mb-1">Darrell Steward</h6>
                                <div class="d-flex text-body fs-xs">
                                    <span class="me-2 pe-1">
                                        <i class="fi-calendar-alt opacity-70 me-1"></i>
                                        Dec 27
                                    </span>
                                    <span>
                                        <i class="fi-chat-circle opacity-70 me-1"></i>3 comment
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </article>
                <div class="pt-2">
                    <router-link class="btn btn-lg btn-outline-primary w-sm-auto w-100" to="/real-estate-blog">More blog posts</router-link>
                </div>
            </div>
            <div class="col-1 d-lg-block d-none">
                <hr class="hr-vertical mx-auto">
            </div>
            <div class="col-lg-4">
                <div class="row row-cols-lg-1 row-cols-md-2 row-cols-1 gy-5 text-md-start text-center">
                    <!-- Mail subscription-->
                    <div class="col pb-lg-2">
                        <h3 class="h5">Sign up for our newsletter</h3>
                        <p class="mb-4">Enter your email to receive the latest news and updates from Finder.</p>
                        <form class="form-group mx-auto" style="max-width: 26rem;">
                            <div class="input-group">
                                <span class="input-group-text text-muted">
                                    <i class="fi-mail"></i>
                                </span>
                                <input class="form-control" type="email" placeholder="Your Email">
                            </div>
                            <button class="btn btn-primary" type="button">Subscribe</button>
                        </form>
                    </div>
                    <!-- Following-->
                    <div class="col">
                        <h3 class="h5">Follow us</h3>
                        <p class="mb-4">Get the latest news and inspiration about the housing market.</p>
                        <div class="ms-n2 mt-n2">
                            <a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mt-2" href="javascript:void(0);">
                                <i class="fi-instagram"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mt-2" href="javascript:void(0);">
                                <i class="fi-twitter"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mt-2" href="javascript:void(0);">
                                <i class="fi-whatsapp"></i>
                            </a>
                            <a class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mt-2" href="javascript:void(0);">
                                <i class="fi-telegram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>