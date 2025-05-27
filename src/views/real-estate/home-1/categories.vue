<template>
  <!-- Property categories-->
  <section class="container mb-5">
    <div class="row row-cols-lg-6 row-cols-sm-3 row-cols-2 g-3 g-xl-4">
      <div class="col">
        <router-link class="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center" to="/real-estate-catalog-rent">
          <div class="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto">
            <i class="fi-real-estate-house"></i>
          </div>
          <h3 class="icon-box-title fs-base mb-0">Houses</h3>
        </router-link>
      </div>
      <div class="col">
        <router-link class="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center" to="/real-estate-catalog-sale">
          <div class="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto">
            <i class="fi-apartment"></i>
          </div>
          <h3 class="icon-box-title fs-base mb-0">Apartments</h3>
        </router-link>
      </div>
      <div class="col">
        <router-link class="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center" to="/real-estate-catalog-rent">
          <div class="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto">
            <i class="fi-shop"></i>
          </div>
          <h3 class="icon-box-title fs-base mb-0">Commercial</h3>
        </router-link>
      </div>
      <div class="col">
        <router-link class="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center" to="/real-estate-catalog-sale">
          <div class="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto">
            <i class="fi-rent"></i>
          </div>
          <h3 class="icon-box-title fs-base mb-0">Daily rental</h3>
        </router-link>
      </div>
      <div class="col">
        <router-link class="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center" to="/real-estate-catalog-rent">
          <div class="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto">
            <i class="fi-house-chosen"></i>
          </div>
          <h3 class="icon-box-title fs-base mb-0">New buildings</h3>
        </router-link>
      </div>
      <div class="col">
        <div class="dropdown h-100">
          <a class="icon-box card card-body h-100 border-0 shadow-sm card-hover text-center" href="javascript:void(0);" data-bs-toggle="dropdown">
            <div class="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto">
              <i class="fi-dots-horisontal"></i>
            </div>
            <h3 class="icon-box-title fs-base mb-0">More</h3>
          </a>
          <div class="dropdown-menu dropdown-menu-end my-1">
            <router-link class="dropdown-item fw-bold" to="/real-estate-catalog-sale"><i class="fi-single-bed fs-base opacity-60 me-2"></i>Room</router-link>
            <router-link class="dropdown-item fw-bold" to="/real-estate-catalog-rent"><i class="fi-computer fs-base opacity-60 me-2"></i>Office</router-link>
            <router-link class="dropdown-item fw-bold" to="/real-estate-catalog-sale"><i class="fi-real-estate-buy fs-base opacity-60 me-2"></i>Land</router-link>
            <router-link class="dropdown-item fw-bold" to="/real-estate-catalog-rent"><i class="fi-parking fs-base opacity-60 me-2"></i>Parking lot</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
