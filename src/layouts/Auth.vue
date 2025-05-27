<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from "vue-router";

const isLoader = ref(false);
const router = useRouter();

onMounted(() => {
  // init preloader
  isLoader.value = true;
  setTimeout(() => isLoader.value = false, 500);

  // set to class the body
  document.body.classList.add('bg-secondary');
})

onUnmounted(() => {
    document.body.classList.remove('bg-secondary');
})

// show loader on route chnage
router.beforeEach(() => {
  isLoader.value = true;
  setTimeout(() => isLoader.value = false, 500);
});
</script>

<template>
  <!-- Page loading spinner-->
  <div class="page-loading active" v-if="isLoader">
    <div class="page-loading-inner">
      <div class="page-spinner"></div>
      <span>Loading...</span>
    </div>
  </div>

  <main class="page-wrapper">
    <slot />
  </main>
</template>
