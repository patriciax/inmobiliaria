<script lang="ts" setup>
defineProps<{
    data: {
        title: string,
        link?: string,
        subitems?: {
            title: string,
            link?: string | unknown
        }[]
    }[]
}>();
</script>
<template>
    <nav v-if="data.subitems" class="mb-3 pt-md-2" aria-label="Breadcrumb">
        <ol class="breadcrumb">
            <template v-for="item in data">
                <li class="breadcrumb-item" :class="{ 'active': !item.link }">
                    <router-link v-if="item.link" :to="item.link">{{ item.title }}</router-link>
                    <template v-else>{{ item.title }}</template>
                </li>
                <template v-for="subitem in item.subitems || []">
                    <li class="breadcrumb-item" :class="{ 'active': !subitem.link }">
                        <router-link v-if="subitem.link" :to="subitem.link">{{ subitem.title }}</router-link>
                        <template v-else>{{ subitem.title }}</template>
                    </li>
                </template>
            </template>
        </ol>
    </nav>
    <nav class="mb-3 pt-md-3" aria-label="Breadcrumb">
        <ol class="breadcrumb">
            <template v-for="item in data">
                <li class="breadcrumb-item" :class="{ 'active': !item.link }">
                    <router-link v-if="item.link" :to="item.link">{{ item.title }}</router-link>
                    <template v-else>{{ item.title }}</template>
                </li>
                <template v-for="subitem in item.subitems || []">
                    <li class="breadcrumb-item" :class="{ 'active': !subitem.link }">
                        <router-link v-if="subitem.link" :to="subitem.link">{{ subitem.title }}</router-link>
                        <template v-else>{{ subitem.title }}</template>
                    </li>
                </template>
            </template>
        </ol>
    </nav>
</template>
