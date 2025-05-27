<template>
  <component v-if="$route.meta.layout" :is="$route.meta.layout">
    <router-view></router-view>
  </component>
  <router-view v-else />
</template>
