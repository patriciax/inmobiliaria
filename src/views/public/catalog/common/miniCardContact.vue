<template>
    <aside class="col-lg-3 col-md-3 ms-lg-auto pb-1 fixed-sidebar">
      <!-- Contact card -->
      <div class="card shadow-sm mb-4 text-center">
        <div class="card-body p-4">
          <!-- Avatar -->
          <div class="mb-3">
            <img
              class="rounded-circle"
              :src="propertyStore?.dataProperty?.profile?.user?.photo_url"
              width="100"
              height="100"
              alt="Avatar"
              loading="lazy"
              crossorigin="anonymous"
              referrerPolicy="no-referrer"
              v-if="propertyStore?.dataProperty?.profile?.user?.photo_url"
              style="object-fit: cover;"
            />
            <img
              class="rounded-circle"
              src="@/assets/img/avatars/14.png"
              width="100"
              height="100"
              alt="Avatar Placeholder"
              loading="lazy"
              v-else
              style="object-fit: cover;"
            />
          </div>
  
          <!-- Name -->
          <router-link
            class="text-decoration-none"
            :to="`/tarjeta-digital/${propertyStore?.dataProperty?.profile?.id}`"
          >
            <h5 class="mb-1 text-dark fw-bold">
              {{ propertyStore?.dataProperty?.profile?.user?.name }}
              {{ propertyStore?.dataProperty?.profile?.user?.last_name }}
            </h5>
          </router-link>
          
          <!-- Role -->
          <p class="text-muted small mb-3">
            {{ propertyStore?.dataProperty?.profile?.role?.description }}
          </p>
  
          <!-- Social Icons -->
          <div class="d-flex justify-content-center gap-2 mb-3">
            <a 
              v-if="propertyStore?.dataProperty?.profile?.user?.phone_number"
              :href="`https://wa.me/${propertyStore?.dataProperty?.profile?.user?.phone_number}`"
              target="_blank"
              class="btn btn-sm btn-outline-secondary rounded-circle p-2"
              style="width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;"
            >
              <i class="fi-phone"></i>
            </a>
            <a 
              v-if="propertyStore?.dataProperty?.profile?.user?.email"
              :href="`mailto:${propertyStore?.dataProperty?.profile?.user?.email}`"
              class="btn btn-sm btn-outline-secondary rounded-circle p-2"
              style="width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;"
            >
              <i class="fi-mail"></i>
            </a>
            <a 
              href="#"
              class="btn btn-sm btn-outline-secondary rounded-circle p-2"
              style="width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;"
            >
              <i class="fi-linkedin"></i>
            </a>
          </div>
  
          <!-- Service Tags (opcional - adapta según tus necesidades) -->
          <div class="mb-3">
            <span class="badge bg-light text-dark me-2 mb-2">Quiero Arrendar</span>
            <span class="badge bg-light text-dark me-2 mb-2">Quiero Comprar</span>
            <span class="badge bg-light text-dark mb-2">Quiero Vender/Arrendar</span>
          </div>
  
          <!-- Contact Button -->
          <button 
            class="btn btn-dark w-100 mb-3"
            @click="openContactModal"
          >
            Contactar Agente
          </button>
  
          <!-- About Section -->
          <div class="text-start">
            <h6 class="fw-bold mb-2">Sobre Mí</h6>
            <p class="text-muted small mb-0">
              {{ propertyStore?.dataProperty?.profile?.bio || 'Especializado en propiedades residencial y de lujo. Cobertura: Zona Metropolitana.' }}
            </p>
          </div>
        </div>
      </div>
  
      <!-- Contact Modal -->
      <div 
        class="modal fade" 
        id="contactModal" 
        tabindex="-1" 
        aria-labelledby="contactModalLabel" 
        aria-hidden="true"
        ref="contactModal"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header border-0">
              <h5 class="modal-title" id="contactModalLabel">Contactar Agente</h5>
              <button 
                type="button" 
                class="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <FormContact
                :agent-id="propertyStore?.dataProperty?.profile?.id"
                :property-id="propertyStore?.dataProperty?.id"
                @success="closeContactModal"
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import FormContact from './FormContact.vue'; // Ajusta la ruta según tu estructura
  import { Modal } from 'bootstrap';
  
  // Props o store
  const propertyStore = defineProps({
    propertyStore: Object
  });
  
  const contactModal = ref(null);
  let modalInstance = null;
  
  const openContactModal = () => {
    if (!modalInstance && contactModal.value) {
      modalInstance = new Modal(contactModal.value);
    }
    modalInstance?.show();
  };
  
  const closeContactModal = () => {
    modalInstance?.hide();
  };
  </script>
  
  <style scoped>
  .card {
    border-radius: 12px;
    border: 1px solid #e0e0e0;
  }
  
  .badge {
    font-weight: 500;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
  }
  
  .btn-outline-secondary {
    border-color: #dee2e6;
    color: #6c757d;
    transition: all 0.2s;
  }
  
  .btn-outline-secondary:hover {
    background-color: #f8f9fa;
    border-color: #adb5bd;
    color: #495057;
  }
  
  .btn-dark {
    background-color: #212529;
    border: none;
    padding: 12px;
    font-weight: 500;
    border-radius: 8px;
    transition: all 0.2s;
  }
  
  .btn-dark:hover {
    background-color: #1a1d20;
    transform: translateY(-1px);
  }
  
  h6 {
    font-size: 0.9rem;
  }
  
  .modal-content {
    border-radius: 12px;
    border: none;
  }
  </style>