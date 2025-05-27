<script lang="ts" setup>
defineProps<{
    data: {
        title: string;
        link?: string;
        subitems?: {
            title: string;
            link?: string; // Nunca uses "unknown" para enlaces
        }[];
    }[];
}>();
</script>

<template>
    <!-- Eliminé el primer nav duplicado -->
    <nav class="mb-3 pt-md-3" aria-label="Breadcrumb">
        <ol class="breadcrumb">
            <template v-for="(item, index) in data" :key="index">
                <li class="breadcrumb-item" :class="{ 'active': !item.link }">
                    <router-link v-if="item.link" :to="item.link">
                        {{ item.title }}
                    </router-link>
                    <template v-else>{{ item.title }}</template>
                </li>
                
                <!-- Corrección clave: acceder a subitems de CADA ÍTEM -->
                <template v-if="item.subitems?.length">
                    <li v-for="(subitem, subIndex) in item.subitems" 
                        :key="`sub-${subIndex}`"
                        class="breadcrumb-item"
                        :class="{ 'active': !subitem.link }">
                        
                        <router-link v-if="subitem.link" :to="subitem.link">
                            {{ subitem.title }}
                        </router-link>
                        <template v-else>{{ subitem.title }}</template>
                    </li>
                </template>
            </template>
        </ol>
    </nav>
</template>
