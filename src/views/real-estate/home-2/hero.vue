<script lang="ts" setup>
import heroImg from '@/assets/img/real-estate/hero-image-v2.jpg'
</script>

<template>
  <!-- Hero-->
  <section class="container-fluid my-5 pt-5 pb-lg-4 px-xxl-4">
    <div class="jarallax card align-items-center justify-content-center border-0 p-md-5 p-4 bg-secondary overflow-hidden mt-n3" :style="`min-height: 65vh; background-image: url('${heroImg}');background-size: cover; background-position: center`" :speed="0.5">
      <span class="img-overlay opacity-40"></span>
      <div class="content-overlay" style="max-width: 856px;">
        <h1 class="display-5 mb-5 pb-md-3 px-md-3 text-white text-center">Easy way to find a perfect property</h1>
        <form class="form-group d-block">
          <div class="row g-0">
            <div class="col-md-10 d-sm-flex align-items-center">
              <div class="dropdown w-sm-50 border-end-sm" data-bs-toggle="select">
                <button class="btn btn-lg btn-link dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown">
                  <i class="fi-home me-2"></i>
                  <span class="dropdown-toggle-label">For rent</span>
                </button>
                <input type="hidden">
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">For rent</span></a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">For sale</span></a></li>
                </ul>
              </div>
              <hr class="d-sm-none my-2">
              <div class="dropdown w-sm-50 border-end-sm" data-bs-toggle="select">
                <button class="btn btn-lg btn-link dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown">
                  <i class="fi-map-pin me-2"></i>
                  <span class="dropdown-toggle-label">Location</span>
                </button>
                <input type="hidden">
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">New York</span></a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Chicago</span></a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Los Angeles</span></a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">San Diego</span></a></li>
                </ul>
              </div>
              <hr class="d-sm-none my-2">
              <div class="dropdown w-sm-50" data-bs-toggle="select">
                <button class="btn btn-lg btn-link dropdown-toggle ps-2 ps-sm-3" type="button" data-bs-toggle="dropdown">
                  <i class="fi-list me-2"></i>
                  <span class="dropdown-toggle-label">Tipo de propiedad</span>
                </button>
                <input type="hidden">
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Houses</span></a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Apartments</span></a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Commercial</span></a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">Daily rental</span></a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);"><span class="dropdown-item-label">New buildings</span></a></li>
                </ul>
              </div>
            </div>
            <hr class="d-md-none mt-2">
            <div class="col-md-2 d-sm-flex align-items-center pt-3 pt-md-0">
              <button class="btn btn-lg btn-icon btn-primary px-3 w-100" type="button">Search</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>