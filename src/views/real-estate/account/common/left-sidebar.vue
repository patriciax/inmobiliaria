<script lang="ts" setup>
defineProps({
    activePage: String,
});
</script>

<template>
    <!-- Sidebar-->
    <aside class="col-lg-4 col-md-5 pe-xl-4 mb-5">
        <!-- Account nav-->
        <div class="card card-body border-0 shadow-sm pb-1 me-lg-1">
            <div class="d-flex d-md-block d-lg-flex align-items-start pt-lg-2 mb-4">
                <img class="rounded-circle" src="@/assets/img/avatars/03.jpg" width="48" alt="Annette Black">
                <div class="pt-md-2 pt-lg-0 ps-3 ps-md-0 ps-lg-3">
                    <h2 class="fs-lg mb-0">Annette Black</h2>
                    <span class="star-rating">
                        <i class="star-rating-icon fi-star-filled active"></i>
                        <i class="star-rating-icon fi-star-filled active"></i>
                        <i class="star-rating-icon fi-star-filled active"></i>
                        <i class="star-rating-icon fi-star-filled active"></i>
                        <i class="star-rating-icon fi-star-filled active"></i>
                    </span>
                    <ul class="list-unstyled fs-sm mt-3 mb-0">
                        <li>
                            <a class="nav-link fw-normal p-0" href="tel:3025550107">
                                <i class="fi-phone opacity-60 me-2">
                                </i>(302) 555-0107</a>
                        </li>
                        <li>
                            <a class="nav-link fw-normal p-0" href="mailto:annette_black@email.com">
                                <i class="fi-mail opacity-60 me-2"></i>annette_black@email.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <a class="btn btn-primary btn-lg w-100 mb-3" to="/real-estate-add-property">
                <i class="fi-plus me-2"></i>Add property</a>
            <a class="btn btn-outline-secondary d-block d-md-none w-100 mb-3" data-bs-target="#account-nav" data-bs-toggle="collapse">
                <i class="fi-align-justify me-2"></i>Menu</a>
            <div class="collapse d-md-block mt-3" id="account-nav">
                <div class="card-nav">
                    <router-link class="card-nav-link" :class="{ 'active': activePage === 'info' }" to="/real-estate-account-info"><i class="fi-user opacity-60 me-2"></i>Personal Info</router-link>
                    <router-link class="card-nav-link" :class="{ 'active': activePage === 'security' }" to="/real-estate-account-security"><i class="fi-lock opacity-60 me-2"></i>Password &amp; Security</router-link>
                    <router-link class="card-nav-link" :class="{ 'active': activePage === 'properties' }" to="/real-estate-account-properties"><i class="fi-home opacity-60 me-2"></i>My Properties</router-link>
                    <router-link class="card-nav-link" :class="{ 'active': activePage === 'wishlist' }" to="/real-estate-account-wishlist"><i class="fi-heart opacity-60 me-2"></i>Wishlist</router-link>
                    <router-link class="card-nav-link" :class="{ 'active': activePage === 'reviews' }" to="/real-estate-account-reviews"><i class="fi-star opacity-60 me-2"></i>Reviews</router-link>
                    <router-link class="card-nav-link" :class="{ 'active': activePage === 'notifications' }" to="/real-estate-account-notifications"><i class="fi-bell opacity-60 me-2"></i>Notifications</router-link>
                    <router-link class="card-nav-link" :class="{ 'active': activePage === 'help-center' }" to="/real-estate-help-center"><i class="fi-help opacity-60 me-2"></i>Help</router-link>
                    <router-link class="card-nav-link" to="/signin-light"><i class="fi-logout opacity-60 me-2"></i>Sign Out</router-link>
                </div>
            </div>
        </div>
    </aside>
</template>