<script lang="ts" setup>
import { propertySaleData, getBadgeColor } from './data/index';
import { onMounted, ref, watch, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Filter from './common/filter-sidebar.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import { usePropertyStore } from '@/stores/propertys';
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const propertyStore = usePropertyStore();

const breadcrumbData = ref([
    {
        title: 'Inicio',
        link: '/real-estate-single-v1',
        subitems: [
            {
                title: 'Inmuebles en venta'
            }
        ]
    }
]);

const sliderData = ref({
    min: 30000,
    max: 500000,
    title: 'Precio del inmueble',   
    defaultValue: [90000, 250000]
});

onMounted(() => {
    getPropiestys();
});

const getPropiestys = async(page: number = 1) => {
    await propertyStore.getPropertiesPublic(page, 10, 1);
}

watch (
    () => authStore.isAuth,
    () => {
        getPropiestys();
    }
)

const imageNotFound = (event: Event) => {
    const target = event.target as HTMLImageElement;
    target.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png';
}

// Computed para generar los números de página visibles
const visiblePages = computed(() => {
    const current = propertyStore.pagination.currentPage;
    const total = propertyStore.pagination.totalPages;
    const pages = [];
    
    // Mostrar hasta 5 páginas
    let start = Math.max(1, current - 2);
    let end = Math.min(total, start + 4);
    
    // Ajustar el inicio si estamos cerca del final
    if (end - start < 4) {
        start = Math.max(1, end - 4);
    }
    
    for (let i = start; i <= end; i++) {
        pages.push(i);
    }
    
    return pages;
});

// Función para manejar el cambio de página
const handlePageChange = async (page: number) => {
    if (page !== propertyStore.pagination.currentPage) {
        await propertyStore.goToPage(page);
    }
}
</script>

<template>
    <div class="container-fluid mt-4 pt-5 ">
        <div class="row g-0 mt-n3">
            <!-- Filters sidebar (Offcanvas on mobile)-->
            <Filter :slider="sliderData" isActive="Sale" />

            <!-- Page content-->
            <div class="col-lg-8 col-xl-9 position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5">
                <!-- Map popup-->
                <div class="map-popup invisible" id="map">
                    <button class="btn btn-icon btn-light btn-sm shadow-sm rounded-circle" type="button" data-bs-toggle-class="invisible" data-bs-target="#map">
                        <i class="fi-x fs-xs"></i>
                    </button>
                    <div class="interactive-map" data-map-options-json="json/map-options-real-estate-rent.json"></div>
                </div>

                <!-- Breadcrumb-->
                <Breadcrumb :data="breadcrumbData" />

                <!-- Title-->
                <div class="d-sm-flex align-items-center justify-content-between pb-3 pb-sm-4">
                    <h1 class="h2 mb-sm-0">Catalogo</h1>
                    <a class="d-inline-block fw-bold text-decoration-none py-1" href="javascript:void(0);" data-bs-toggle-class="invisible" data-bs-target="#map">
                        <i class="fi-map me-2"></i>Ver mapa
                    </a>
                </div>

                <!-- Sorting-->
                <div class="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch my-2">
                    <div class="d-flex align-items-center flex-shrink-0">
                        <label class="fs-sm me-2 pe-1 text-nowrap" for="sortby">
                            <i class="fi-arrows-sort text-muted mt-n1 me-2"></i>Sort by:
                        </label>
                        <select class="form-select form-select-sm" id="sortby">
                            <option>Newest</option>
                            <option>Popularity</option>
                            <option>Low - High Price</option>
                            <option>High - Low Price</option>
                            <option>High rating</option>
                            <option>Average Rating</option>
                        </select>
                    </div>
                    <hr class="d-none d-sm-block w-100 mx-4" />
                    <div class="d-none d-sm-flex align-items-center flex-shrink-0 text-muted">
                        <i class="fi-check-circle me-2"></i>
                        <span class="fs-sm mt-n1">{{ propertyStore.pagination?.total }} results</span>
                    </div>
                </div>

                <!-- Loading state -->
                <div v-if="propertyStore.isLoading" class="text-center py-5">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Cargando...</span>
                    </div>
                </div>

                <!-- Catalog grid-->
                <div v-else class="row g-4 py-4">
                    <!-- Item-->
                    <div v-for="(property, index) in propertyStore.property" :key="property.id || index" class="col-sm-6 col-xl-4">
                        <div class="card shadow-sm card-hover border-0 h-100">
                            <div class="tns-carousel-wrapper card-img-top card-img-hover">
                                <router-link class="img-overlay" :to="`/real-estate-single-v1/${property.id}`"></router-link>
                                <div v-if="property.badge" class="position-absolute start-0 top-0 pt-3 ps-3">
                                    <span v-for="(badge) in property.badge" :class="`d-table badge bg-${getBadgeColor(badge)} mb-1`">{{ badge }}</span>
                                </div>
                                <div class="content-overlay end-0 top-0 pt-3 pe-3">
                                    <button class="btn btn-icon btn-light btn-xs text-primary rounded-circle" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist">
                                        <i class="fi-heart"></i>
                                    </button>
                                </div>
                                <Swiper v-if="property.images" :slidesPerView="1" :loop="true">
                                    <SwiperSlide v-for="(image, index) in property.images" :key="index">
                                        <img :src="image.url.thumbnail" alt="Image" @error="imageNotFound" class="w-100 d-block h-20" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div class="card-body position-relative pb-3">
                                <h4 class="mb-1 fs-xs fw-normal text-uppercase text-primary">{{ property.type?.name }}</h4>
                                <h3 class="h6 mb-2 fs-base">
                                    <router-link class="nav-link stretched-link" :to="`/real-estate-single-v1/${property.id}`">{{ property.title }}</router-link>
                                </h3>
                                <p class="mb-2 fs-sm text-muted">{{ property.location }}</p>
                                <div class="fw-bold">
                                    <i class="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>{{ property.price }}
                                </div>
                            </div>
                            <div class="card-footer d-flex align-items-center justify-content-center mx-3 pt-3 text-nowrap">
                                <span class="d-inline-block mx-1 px-2 fs-sm">{{ property.beds }}<i class="fi-bed ms-1 mt-n1 fs-lg text-muted"></i></span>
                                <span class="d-inline-block mx-1 px-2 fs-sm">{{ property.baths }}<i class="fi-bath ms-1 mt-n1 fs-lg text-muted"></i></span>
                                <span class="d-inline-block mx-1 px-2 fs-sm">{{ property.cars }}<i class="fi-car ms-1 mt-n1 fs-lg text-muted"></i></span>
                            </div>
                        </div>
                    </div>

                    <!-- Empty state -->
                    <div v-if="!propertyStore.isLoading && propertyStore.property.length === 0" class="col-12 text-center py-5">
                        <div class="text-muted">
                            <i class="fi-home fs-1 mb-3"></i>
                            <h5>No se encontraron propiedades</h5>
                            <p>Intenta ajustar los filtros de búsqueda</p>
                        </div>
                    </div>
                </div>

                <!-- Pagination-->
                <nav v-if="propertyStore.pagination.totalPages > 1" class="border-top pb-md-4 pt-4 mt-2" aria-label="Pagination">
                    <ul class="pagination mb-1 justify-content-center">
                        <!-- Mobile page indicator -->
                        <li class="page-item d-sm-none">
                            <span class="page-link page-link-static">
                                {{ propertyStore.pagination.currentPage }} / {{ propertyStore.pagination.totalPages }}
                            </span>
                        </li>

                        <!-- Previous button -->
                        <li class="page-item" :class="{ disabled: !propertyStore.pagination.hasPrevPage }">
                            <button 
                                class="page-link" 
                                @click="propertyStore.prevPage()"
                                :disabled="!propertyStore.pagination.hasPrevPage"
                                aria-label="Previous"
                            >
                                <i class="fi-chevron-left"></i>
                            </button>
                        </li>

                        <!-- First page (if not in visible range) -->
                        <li v-if="visiblePages[0] > 1" class="page-item d-none d-sm-block">
                            <button class="page-link" @click="handlePageChange(1)">1</button>
                        </li>
                        
                        <!-- Ellipsis before visible pages -->
                        <li v-if="visiblePages[0] > 2" class="page-item d-none d-sm-block">
                            <span class="page-link">...</span>
                        </li>

                        <!-- Visible page numbers -->
                        <li 
                            v-for="page in visiblePages" 
                            :key="page"
                            class="page-item d-none d-sm-block" 
                            :class="{ active: page === propertyStore.pagination.currentPage }"
                            :aria-current="page === propertyStore.pagination.currentPage ? 'page' : undefined"
                        >
                            <button 
                                v-if="page === propertyStore.pagination.currentPage"
                                class="page-link"
                                disabled
                            >
                                {{ page }}
                                <span class="visually-hidden">(current)</span>
                            </button>
                            <button 
                                v-else
                                class="page-link" 
                                @click="handlePageChange(page)"
                            >
                                {{ page }}
                            </button>
                        </li>

                        <!-- Ellipsis after visible pages -->
                        <li v-if="visiblePages[visiblePages.length - 1] < propertyStore.pagination.totalPages - 1" class="page-item d-none d-sm-block">
                            <span class="page-link">...</span>
                        </li>

                        <!-- Last page (if not in visible range) -->
                        <li v-if="visiblePages[visiblePages.length - 1] < propertyStore.pagination.totalPages" class="page-item d-none d-sm-block">
                            <button class="page-link" @click="handlePageChange(propertyStore.pagination.totalPages)">
                                {{ propertyStore.pagination.totalPages }}
                            </button>
                        </li>

                        <!-- Next button -->
                        <li class="page-item" :class="{ disabled: !propertyStore.pagination.hasNextPage }">
                            <button 
                                class="page-link" 
                                @click="propertyStore.nextPage()"
                                :disabled="!propertyStore.pagination.hasNextPage"
                                aria-label="Next"
                            >
                                <i class="fi-chevron-right"></i>
                            </button>
                        </li>
                    </ul>

                    <!-- Results info -->
                    <div class="d-flex justify-content-center mt-3">
                        <small class="text-muted">
                            Mostrando {{ ((propertyStore.pagination.currentPage - 1) * propertyStore.pagination.pageSize) + 1 }} 
                            - {{ Math.min(propertyStore.pagination.currentPage * propertyStore.pagination.pageSize, propertyStore.pagination.total) }} 
                            de {{ propertyStore.pagination.total }} resultados
                        </small>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>
<style scoped >
.h-20 {
    height: 11rem !important;
    object-fit: cover;
}
</style>