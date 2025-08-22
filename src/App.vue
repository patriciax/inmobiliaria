<template>
  <!-- <div class="absolute top-0 left-0 z-50 text-black">
    {{ $route.name }}
    {{  $route.fullPath }}
  </div> -->
  <component v-if="$route.meta.layout" :is="$route.meta.layout">
    <router-view></router-view>
  </component>
  <router-view v-else />

</template>
<script setup>
import { useCountryStore } from '@/stores/country';
import { onMounted } from 'vue';

const countryStore = useCountryStore();

onMounted(async () => {
  await countryStore.getCountry();
  
});
</script>
