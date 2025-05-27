<template>
  <!-- Services-->
  <section class="container mb-5 mt-n3 mt-lg-0">
    <div class="row h-100vh py-4">
      <div class="col col-lg-4 col-md-4 col-sm-12">
        <div class="card card-hover border-0 h-100 pb-2 pb-sm-3 px-sm-3 text-center">
          <img class="d-block mx-auto my-3" src="@/assets/img/real-estate/illustrations/buy.svg" width="256" alt="Illustration" />
          <div class="card-body">
            <h2 class="h4 card-title">Buy a property</h2>
            <p class="card-text fs-sm">
              Blandit lorem dictum in velit. Et nisi at faucibus mauris pretium enim. Risus sapien
              nisi aliquam egestas leo dignissim.
            </p>
          </div>
          <div class="card-footer pt-0 border-0">
            <router-link class="btn btn-outline-primary stretched-link" to="/real-estate-catalog-sale">Find a home</router-link>
          </div>
        </div>
      </div>
      <div class="col col-lg-4 col-md-4 col-sm-12">
        <div class="card card-hover border-0 h-100 pb-2 pb-sm-3 px-sm-3 text-center">
          <img class="d-block mx-auto my-3" src="@/assets/img/real-estate/illustrations/sell.svg" width="256" alt="Illustration" />
          <div class="card-body">
            <h2 class="h4 card-title">Sell a property</h2>
            <p class="card-text fs-sm">
              Amet, cras orci justo, tortor nisl aliquet. Enim tincidunt tellus nunc, nulla arcu
              posuere quis. Velit turpis orci venenatis.
            </p>
          </div>
          <div class="card-footer pt-0 border-0">
            <a class="btn btn-outline-primary stretched-link" href="javascript:void(0);">Place an ad</a>
          </div>
        </div>
      </div>
      <div class="col col-lg-4 col-md-4 col-sm-12">
        <div class="card card-hover border-0 h-100 pb-2 pb-sm-3 px-sm-3 text-center">
          <img class="d-block mx-auto my-3" src="@/assets/img/real-estate/illustrations/rent.svg" width="256" alt="Illustration" />
          <div class="card-body">
            <h2 class="h4 card-title">Rent a property</h2>
            <p class="card-text fs-sm">
              Sed sed aliquet sed id purus malesuada congue viverra. Habitant quis lacus, volutpat
              natoque ipsum iaculis cursus.
            </p>
          </div>
          <div class="card-footer pt-0 border-0">
            <router-link class="btn btn-outline-primary stretched-link" to="/real-estate-catalog-rent">Find a rental</router-link>
          </div>
        </div>
      </div>
    </div>
    <!--  </div> -->
  </section>
</template>
