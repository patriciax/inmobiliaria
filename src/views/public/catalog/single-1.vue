<script lang="ts" setup>
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import recentlyView from './common/recently-view.vue'
import Lightgallery from 'lightgallery/vue'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

// If you are using scss you can skip the css imports below and use scss instead
import 'lightgallery/scss/lightgallery.scss'

const pluginsData = [lgThumbnail, lgZoom]

const breadcrumbData = ref([
  {
    title: 'Home',
    link: '/',
    subitems: [
      {
        title: 'Property for rent',
        link: '/real-estate-catalog-rent'
      },
      {
        title: 'Pine Apartments'
      }
    ]
  }
])

const tabs = [
  { id: 'fotos', label: 'Fotos' },
  { id: 'video', label: 'Video' },
  { id: 'tour', label: 'Tour' },
  { id: 'mapa', label: 'Mapa' }
];

const activeTab = ref('fotos');
</script>
<template>
  <!-- Page header-->
  <section class="container pt-5 mt-5">
    <!-- Breadcrumb-->
    <Breadcrumb :data="breadcrumbData" />

    <section class="d-flex justify-content-between w-full">
      <div>
        <h1 class="h2 mb-2">Pine Apartments</h1>
        <p class="mb-2 pb-1 fs-lg">28 Jackson Ave Long Island City, NY 67234</p>
        <!-- Features + Sharing-->
        <div class="d-flex justify-content-between align-items-center">
          <ul class="d-flex mb-4 list-unstyled">
            <li class="me-3 pe-3 border-end">
              <b class="me-1">4</b>
              <i class="fi-bed mt-n1 lead align-middle text-muted"></i>
            </li>
            <li class="me-3 pe-3 border-end">
              <b class="me-1">2</b>
              <i class="fi-bath mt-n1 lead align-middle text-muted"></i>
            </li>
            <li class="me-3 pe-3 border-end">
              <b class="me-1">2</b>
              <i class="fi-car mt-n1 lead align-middle text-muted"></i>
            </li>
            <li><b>56 </b>sq.m</li>
          </ul>
        </div>
      </div>

      <section>
        <div class="mb-2 border-bottom">
          <h2 class="h3">
            $2,000<span class="d-inline-block ms-1 fs-base fw-normal text-body">/month</span>
          </h2>
          <p class="text-end">300 Vistas</p>
        </div>

        <div class="text-nowrap text-end">
          <button
            class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2"
            type="button"
            data-bs-toggle="tooltip"
            title="Add to Wishlist"
          >
            <i class="fi-heart"></i>
          </button>
          <div class="dropdown d-inline-block" data-bs-toggle="tooltip" title="Share">
            <button
              class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2"
              type="button"
              data-bs-toggle="dropdown"
            >
              <i class="fi-share"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-end my-1">
              <button class="dropdown-item" type="button">
                <i class="fi-facebook fs-base opacity-75 me-2"></i>Facebook
              </button>
              <button class="dropdown-item" type="button">
                <i class="fi-twitter fs-base opacity-75 me-2"></i>Twitter
              </button>
              <button class="dropdown-item" type="button">
                <i class="fi-instagram fs-base opacity-75 me-2"></i>Instagram
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  </section>

  <!-- Gallery-->
  <div class="container overflow-auto mb-4 pb-3">
   
    <div class="tabs-container">
    <!-- Pestañas como botones independientes -->
  
    <!-- Contenido de las pestañas -->
    <div class="tabs-content">
      <div v-show="activeTab === 'fotos'" class="tab-panel">
   <div class="row g-2 g-md-3 gallery" style="min-width: 30rem">
      <div class="parent">
        <lightgallery :settings="{ speed: 500, plugins: pluginsData }">
          <a
            class="gallery-item rounded rounded-md-3 div1"
            href="../../../src/assets/img/real-estate/single/01.jpg"
          >
            <img alt="Bathroom" src="@/assets/img/real-estate/single/01.jpg" />
          </a>
          <a
            class="gallery-item rounded rounded-md-3 mb-2 mb-md-3 div2"
            data-lg-size="1600-1067"
            href="../../../src/assets/img/real-estate/single/02.jpg"
          >
            <img alt="Bedroom" src="@/assets/img/real-estate/single/02.jpg" />
          </a>
          <a
            class="gallery-item rounded rounded-md-3 div3"
            data-lg-size="1600-1067"
            href="../../../src/assets/img/real-estate/single/03.jpg"
          >
            <img alt="Living Room" src="@/assets/img/real-estate/single/03.jpg" />
          </a>
          <a
            class="gallery-item rounded rounded-md-3 div4"
            href="../../../src/assets/img/real-estate/single/04.jpg"
          >
            <img alt="Bedroom" src="@/assets/img/real-estate/single/th04.jpg" />
          </a>
          <a
            class="gallery-item rounded rounded-md-3 div5"
            href="../../../src/assets/img/real-estate/single/04.jpg"
          >
            <img alt="Bedroom" src="@/assets/img/real-estate/single/th04.jpg" />
          </a>
          <a
            class="gallery-item rounded rounded-md-3 div6"
            href="../../../src/assets/img/real-estate/single/04.jpg"
          >
            <img alt="Bedroom" src="@/assets/img/real-estate/single/th04.jpg" />
          </a>
        </lightgallery>
      </div>
    </div>
      </div>

      <div v-show="activeTab === 'video'" class="tab-panel">
        <div class="placeholder-content">
          <p>Video promocional del inmueble</p>
        </div>
      </div>

      <div v-show="activeTab === 'tour'" class="tab-panel">
        <div class="placeholder-content">
          <p>Tour virtual interactivo</p>
        </div>
      </div>

      <div v-show="activeTab === 'mapa'" class="tab-panel">
        <h3>Ubicación en Mapa</h3>
        <div class="placeholder-content">
          <p>Mapa de ubicación del inmueble</p>
        </div>
      </div>
    </div>
    <div class="tabs-header mt-3">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="{ 'active': activeTab === tab.id }"
        class="tab-button"
      >
        {{ tab.label }}
      </button>
    </div>

  </div>
<section>

</section>


  </div>

  <!-- Post content-->
  <section class="container mb-5 pb-1">
    <div class="row">
      <div class="col-md-7 mb-md-0 mb-4">
        <span class="badge bg-success me-2 mb-3">Verified</span
        ><span class="badge bg-info me-2 mb-3">New</span>
        <!-- <h2 class="h3 mb-4 pb-4 border-bottom">
                    $2,000<span class="d-inline-block ms-1 fs-base fw-normal text-body">/month</span>
                </h2> -->
        <!-- Overview-->
        <div class="mb-4 pb-md-3">
          <h3 class="h4">Overview</h3>
          <p class="mb-1">
            Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet non scelerisque turpis
            sed etiam ultrices. Blandit mollis dignissim egestas consectetur porttitor. Vulputate
            dolor pretium, dignissim eu augue sit ut convallis. Lectus est, magna urna feugiat sed
            ultricies sed in lacinia. Fusce potenti sit id pharetra vel ornare. Vestibulum sed
            tellus ullamcorper arcu.
          </p>
          <div class="collapse" id="seeMoreOverview">
            <p class="mb-1">
              Asperiores eos molestias, aspernatur assumenda vel corporis ex, magni excepturi totam
              exercitationem quia inventore quod amet labore impedit quae distinctio? Officiis
              blanditiis consequatur alias, atque, sed est incidunt accusamus repudiandae tempora
              repellendus obcaecati delectus ducimus inventore tempore harum numquam autem eligendi
              culpa.
            </p>
          </div>
          <a
            class="collapse-label collapsed"
            data-bs-target="#seeMoreOverview"
            data-bs-toggle="collapse"
            data-bs-label-collapsed="Show more"
            data-bs-label-expanded="Show less"
            role="button"
            aria-expanded="false"
            aria-controls="seeMoreOverview"
          ></a>
        </div>
        <!-- Property Details-->
        <div class="mb-4 pb-md-3">
          <h3 class="h4">Property Details</h3>
          <ul class="list-unstyled mb-0">
            <li><b>Type: </b>apartment</li>
            <li><b>Apartment area: </b>56 sq.m</li>
            <li><b>Built: </b>2015</li>
            <li><b>Bedrooms: </b>4</li>
            <li><b>Bathrooms: </b>2</li>
            <li><b>Parking places: </b>2</li>
            <li><b>Pets allowed: </b>cats only</li>
          </ul>
        </div>
        <!-- Amenities-->
        <div class="mb-4 pb-md-3">
          <h3 class="h4">Amenities</h3>
          <ul
            class="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap"
          >
            <li class="col"><i class="fi-wifi mt-n1 me-2 fs-lg align-middle"></i>WiFi</li>
            <li class="col"><i class="fi-thermometer mt-n1 me-2 fs-lg align-middle"></i>Heating</li>
            <li class="col"><i class="fi-dish mt-n1 me-2 fs-lg align-middle"></i>Dishwasher</li>
            <li class="col">
              <i class="fi-parking mt-n1 me-2 fs-lg align-middle"></i>Parking place
            </li>
            <li class="col">
              <i class="fi-snowflake mt-n1 me-2 fs-lg align-middle"></i>Air conditioning
            </li>
            <li class="col"><i class="fi-iron mt-n1 me-2 fs-lg align-middle"></i>Iron</li>
            <li class="col"><i class="fi-tv mt-n1 me-2 fs-lg align-middle"></i>TV</li>
            <li class="col"><i class="fi-laundry mt-n1 me-2 fs-lg align-middle"></i>Laundry</li>
            <li class="col">
              <i class="fi-cctv mt-n1 me-2 fs-lg align-middle"></i>Security cameras
            </li>
          </ul>
          <div class="collapse" id="seeMoreAmenities">
            <ul
              class="list-unstyled row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap"
            >
              <li class="col">
                <i class="fi-no-smoke mt-n1 me-2 fs-lg align-middle"></i>No smocking
              </li>
              <li class="col"><i class="fi-pet mt-n1 me-2 fs-lg align-middle"></i>Cats</li>
              <li class="col">
                <i class="fi-swimming-pool mt-n1 me-2 fs-lg align-middle"></i>Swimming pool
              </li>
              <li class="col">
                <i class="fi-double-bed mt-n1 me-2 fs-lg align-middle"></i>Double bed
              </li>
              <li class="col"><i class="fi-bed mt-n1 me-2 fs-lg align-middle"></i>Single bed</li>
            </ul>
          </div>
          <a
            class="collapse-label collapsed"
            data-bs-target="#seeMoreAmenities"
            data-bs-toggle="collapse"
            data-bs-label-collapsed="Show more"
            data-bs-label-expanded="Show less"
            role="button"
            aria-expanded="false"
            aria-controls="seeMoreAmenities"
          ></a>
        </div>
        <!-- Post meta-->
     
      </div>
      <!-- Sidebar-->
      <aside class="col-lg-4 col-md-5 ms-lg-auto pb-1">
        <!-- Contact card-->
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <div class="d-flex align-items-start justify-content-between">
              <router-link class="text-decoration-none" to="/real-estate-vendor-properties">
                <img
                  class="rounded-circle mb-2"
                  src="@/assets/img/avatars/22.jpg"
                  width="60"
                  alt="Avatar"
                />
                <h5 class="mb-1">Floyd Miles</h5>
                <div class="mb-1">
                  <span class="star-rating"
                    ><i class="star-rating-icon fi-star-filled active"></i
                    ><i class="star-rating-icon fi-star-filled active"></i
                    ><i class="star-rating-icon fi-star-filled active"></i
                    ><i class="star-rating-icon fi-star-filled active"></i
                    ><i class="star-rating-icon fi-star-filled active"></i></span
                  ><span class="ms-1 fs-sm text-muted">(45 reviews)</span>
                </div>
                <p class="text-body">Imperial Property Group Agent</p>
              </router-link>
              <div class="ms-4 flex-shrink-0">
                <a
                  class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2"
                  href="javascript:void(0);"
                  ><i class="fi-facebook"></i></a
                ><a
                  class="btn btn-icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2"
                  href="javascript:void(0);"
                  ><i class="fi-linkedin"></i
                ></a>
              </div>
            </div>
            <ul class="list-unstyled border-bottom mb-4 pb-4">
              <li>
                <a class="nav-link fw-normal p-0" href="tel:3025550107"
                  ><i class="fi-phone mt-n1 me-2 align-middle opacity-60"></i>(302) 555-0107</a
                >
              </li>
              <li>
                <a class="nav-link fw-normal p-0" href="mailto:floyd_miles@email.com"
                  ><i class="fi-mail mt-n1 me-2 align-middle opacity-60"></i
                  >floyd_miles@email.com</a
                >
              </li>
            </ul>
            <!-- Contact form-->
            <form class="needs-validation" novalidate>
              <div class="mb-3">
                <input class="form-control" type="text" placeholder="Your name*" required />
                <div class="invalid-feedback">Please enter your name!</div>
              </div>
              <div class="mb-3">
                <input class="form-control" type="email" placeholder="Email*" required />
                <div class="invalid-feedback">Please provide valid email address!</div>
              </div>
              <input class="form-control mb-3" type="tel" placeholder="Phone" />
              <div class="input-group mb-3">
                <input
                  class="form-control date-picker rounded pe-5"
                  type="text"
                  placeholder="Choose date"
                  data-datepicker-options='{"altInput": true, "altFormat": "F j, Y", "dateFormat": "Y-m-d"}'
                /><i class="fi-calendar position-absolute top-50 end-0 translate-middle-y me-3"></i>
              </div>
              <textarea
                class="form-control mb-3"
                rows="3"
                placeholder="Message"
                style="resize: none"
              ></textarea>
              <div class="form-check mb-4">
                <input class="form-check-input" id="form-submit" type="checkbox" checked />
                <label class="form-check-label fs-sm" for="form-submit"
                  >Send news, tips and promos from Finder to my email.</label
                >
              </div>
              <button class="btn btn-lg btn-primary d-block w-100" type="submit">
                Send request
              </button>
            </form>
          </div>
        </div>
   
      </aside>
    </div>
  </section>

  <!-- Review modal-->
  <div class="modal fade" id="modal-review" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header d-block position-relative border-0 pb-0 px-sm-5 px-4">
          <h3 class="modal-title mt-4 text-center">Leave a review</h3>
          <button
            class="btn-close position-absolute top-0 end-0 mt-3 me-3"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body px-sm-5 px-4">
          <form class="needs-validation" novalidate>
            <div class="mb-3">
              <label class="form-label" for="review-name"
                >Name <span class="text-danger">*</span></label
              >
              <input
                class="form-control"
                type="text"
                id="review-name"
                placeholder="Your name"
                required
              />
              <div class="invalid-feedback">Please let us know your name.</div>
            </div>
            <div class="mb-3">
              <label class="form-label" for="review-email"
                >Email <span class="text-danger">*</span></label
              >
              <input
                class="form-control"
                type="email"
                id="review-email"
                placeholder="Your email address"
                required
              />
              <div class="invalid-feedback">Please provide a valid email address.</div>
            </div>
            <div class="mb-3">
              <label class="form-label" for="review-rating"
                >Rating <span class="text-danger">*</span></label
              >
              <select class="form-control form-select" id="review-rating" required>
                <option value="" selected disabled hidden>Choose rating</option>
                <option value="5 stars">5 stars</option>
                <option value="4 stars">4 stars</option>
                <option value="3 stars">3 stars</option>
                <option value="2 stars">2 stars</option>
                <option value="1 star">1 star</option>
              </select>
              <div class="invalid-feedback">Please rate the property.</div>
            </div>
            <div class="mb-4">
              <label class="form-label" for="review-text"
                >Review <span class="text-danger">*</span></label
              >
              <textarea
                class="form-control"
                id="review-text"
                rows="5"
                placeholder="Your review message"
                required
              ></textarea>
              <div class="invalid-feedback">Please write your review.</div>
            </div>
            <button class="btn btn-primary d-block w-100 mb-4" type="submit">
              Submit a review
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.parent .lightgallery-vue {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 8px;
}
.div1 {
  grid-column: span 2 / span 2;
  grid-row: span 2 / span 2;
}

.div2 {
  grid-column-start: 3;
}

.div3 {
  grid-column-start: 3;
  grid-row-start: 2;
}

.div4 {
  grid-row-start: 3;
}

.div5 {
  grid-row-start: 3;
}

.div6 {
  grid-row-start: 3;
}

.gallery-item > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}



.tabs-header {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.tab-button {
  padding: 10px 40px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: #495057;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  margin-right: 0;
}

.tab-button:hover {
  background-color: #e9ecef;
  transform: translateY(-1px);
  box-shadow: 0 2px 5px rgba(0,0,0,0.15);
}

.tab-button.active {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border-color: #0c0c0c;
}

.tab-button.active:hover {
  /* background-color: #3a56d4; */
  transform: none;
}

.tabs-content {
  /* padding: 20px; */
  background-color: #fff;
  /* border-radius: 8px; */
  /* box-shadow: 0 2px 8px rgba(0,0,0,0.1); */
}

.tab-panel h3 {
  margin-top: 0;
  color: #212529;
  font-size: 1.4rem;
  margin-bottom: 15px;
}

.placeholder-content {
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  border-radius: 6px;
  color: #6c757d;
  font-size: 1.1rem;
  border: 1px dashed #adb5bd;
}

/* Responsive */
@media (max-width: 768px) {
  .tabs-header {
    gap: 6px;
  }
  
  .tab-button {
    padding: 8px 12px;
    font-size: 14px;
  }
  
  .placeholder-content {
    min-height: 200px;
  }
}

.lg-thumb {
    display: flex!important;
}
.lg-thumb-outer .lg-thumb-align-middle .lg-grabbing {
    display: none!important;
}
</style>
