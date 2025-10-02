<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
const navbar = ref<HTMLElement | null>(null)
const scrollOffset = 20
const isStuck = ref<Boolean>(false)
const route = useRoute()
const authStore = useAuthStore()
const navbarStuck = () => {
  if (navbar.value && window.scrollY > scrollOffset) {
    isStuck.value = true
  } else {
    isStuck.value = false
  }
}

const setActiveNavItem = () => {
  var navbarEle = document.getElementById('navbarNav')
  if (navbarEle) {
    // Remove the 'active' class from any element that has it initially
    navbarEle.querySelectorAll('.dropdown.active').forEach((item) => {
      item.classList.remove('active')
    })

    var activeEle = navbarEle.querySelector(`.nav-item a[href="${route.path}"]`)
    if (activeEle) {
      const parentListItem = activeEle.parentElement
      if (parentListItem) {
        const grandParentListItem = parentListItem.parentElement?.parentElement
        if (grandParentListItem) {
          grandParentListItem.classList.add('active')
          if (grandParentListItem.parentElement?.parentElement?.classList.contains('nav-item')) {
            grandParentListItem.parentElement?.parentElement?.classList.add('active')
          }
        }
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', navbarStuck)
  setActiveNavItem()
})

onUnmounted(() => {
  window.removeEventListener('scroll', navbarStuck)
})

watch(
  () => route.fullPath,
  async () => {
    setActiveNavItem()
  }
)
</script>

<template>
  <!-- Header Section starts -->
  <!-- Navbar-->
  <header
    ref="navbar"
    class="navbar navbar-expand-lg navbar-light bg-light fixed-top"
    :class="{ 'navbar-stuck': isStuck }"
    data-scroll-header
  >
    <div class="container">
      <router-link class="navbar-brand me-3 me-xl-4" to="/">
        <img class="d-block" src="@/assets/img/logo/logonew.png" width="200" alt="Finder" />
      </router-link>
      <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- 1 -->
      <div class="collapse navbar-collapse order-lg-1" id="navbarNav">
        <ul class="navbar-nav navbar-nav-scroll" style="max-height: 35rem">
          <!-- Menu items-->
          <li class="nav-item dropdown">
            <router-link class="nav-link dropdown-togle dropdown-item" to="/"
              >Inicio</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-togl dropdown-item"
              href="https://inmobiliaria.club/#nosotros"
              >Nosotros</a
            >
          </li>
          <li class="nav-item dropdown">
            <router-link class="nav-link dropdown-togl dropdown-item" to="/">Catálogo </router-link>
          </li>
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="javascript:void(0);"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Herramientas</a
            >
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/real-estate-catalog-rent"
                  >Tour 360</router-link
                >
              </li>
             
            </ul>
          </li> -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-togl dropdown-item"
              href="https://inmobiliaria.club/#contacto"
              >Contacto</a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-togl dropdown-item"
              href="https://inmobiliaria.club/#aliados"
              >Aliados</a
            >
          </li>

          <li class="nav-item d-lg-none" v-if="!authStore.isAuth" >
            <a class="nav-link" data-bs-target="#signin-modal" data-bs-toggle="modal"
              ><i class="fi-user me-2"></i>Iniciar sesión</a
            >
          </li>
          <li  v-if="!authStore.isAuth">
            <a
              class="btn btn-sm text-primary d-none d-lg-block order-lg-3"
              data-bs-target="#signin-modal"
              data-bs-toggle="modal"
            >
              <i class="fi-user me-2"></i>Iniciar sesión
            </a>
          </li>

          <!-- perfil -->
          <li>
            <div class="dropdown d-none d-lg-block order-lg-3 my-n2 me-3">
              <router-link class="d-block py-2" to="/real-estate-account-info" v-if="authStore.isAuth"
                ><img
                  class="rounded-circle"
                  src="@/assets/img/avatars/30.jpg"
                  width="40"
                  alt="Annette Black"
              /></router-link>
              <div class="dropdown-menu dropdown-menu-end">
                <div
                  class="d-flex align-items-start border-bottom px-3 py-1 mb-2"
                  style="width: 16rem"
                >
                  <img
                    class="rounded-circle"
                    src="@/assets/img/avatars/03.jpg"
                    width="48"
                    alt="Annette Black"
                  />
                  <div class="ps-2">
                    <h6 class="fs-base mb-0">Annette Black</h6>
                    <span class="star-rating star-rating-sm">
                      <i class="star-rating-icon fi-star-filled active"></i>
                      <i class="star-rating-icon fi-star-filled active"></i>
                      <i class="star-rating-icon fi-star-filled active"></i>
                      <i class="star-rating-icon fi-star-filled active"></i>
                      <i class="star-rating-icon fi-star-filled active"></i>
                    </span>
                    <div class="fs-xs py-2">(302) 555-0107<br />annette_black@email.com</div>
                  </div>
                </div>
                <router-link class="dropdown-item" to="/real-estate-account-info"
                  ><i class="fi-user opacity-60 me-2"></i>Personal Info</router-link
                >
                <router-link class="dropdown-item" to="/real-estate-account-security"
                  ><i class="fi-lock opacity-60 me-2"></i>Password &amp; Security</router-link
                >
                <router-link class="dropdown-item" to="/real-estate-account-properties"
                  ><i class="fi-home opacity-60 me-2"></i>My Properties</router-link
                >
                <router-link class="dropdown-item" to="/real-estate-account-wishlist"
                  ><i class="fi-heart opacity-60 me-2"></i>Wishlist</router-link
                >
                <router-link class="dropdown-item" to="/real-estate-account-reviews"
                  ><i class="fi-star opacity-60 me-2"></i>Reviews</router-link
                >
                <router-link class="dropdown-item" to="/real-estate-account-notifications"
                  ><i class="fi-bell opacity-60 me-2"></i>Notifications</router-link
                >
                <div class="dropdown-divider"></div>
                <router-link class="dropdown-item" to="/real-estate-help-center">Help</router-link>
                <router-link class="dropdown-item" to="/signin-light">Sign Out</router-link>
              </div>
            </div>
          </li>
          <li>
            <router-link
              class="btn btn-primary btn-sm ms-2 order-lg-3"
              to="/real-estate-add-property"
            >
              <i class="fi-plus me-2"></i>Agregar<span class="d-none d-sm-inline"> propiedad</span>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- 1 -->
    </div>
  </header>
</template>
<style>
.navbar-collapse {
  flex-grow: 0;
}
</style>
