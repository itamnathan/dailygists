<template>


    <div class="py-6 " ref="author">
        <div class="flex items-center justify-between">
            <span class="capitalize text-xl font-medium" v-if="user">
                More from <Link :href="route('profile',user.username)">{{ user.name }} </Link>
            </span>
            
            <!-- <Follow /> -->
        </div>
        <div class="py-4 pr-0 mb-8 text-sm sm:pr-44">
            {{ user.bio }}
        </div>
    </div>

</template>

<script setup>
import {  Link } from '@inertiajs/inertia-vue3';
import { defineAsyncComponent } from 'vue'


const Follow = defineAsyncComponent(() => import('@/Components/Follow.vue'))
const props = defineProps({
    user: {}
})

</script>

<style>

</style>