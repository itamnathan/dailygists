<template>

    <div class="" @click="bookmark()" data-tooltipped="" aria-describedby="tippy-tooltip-15"
        data-original-title="Not working yet" style="display: inline;">
        <div class=" flex space-x-2">

            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" class="lt">
                <path
                    d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                    fill="#292929"></path>
            </svg>
        </div>
    </div>
</template>

<script setup>

import {  computed } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";

const isLoggedIn = computed(() => usePage().props.value.isLoggedIn)

const props = defineProps([
    'id'
])
function bookmark() {
    if (isLoggedIn.value) {
        axios.get(route('users.bookmarked', props.id)).then(response => {
            // if (response.data.length != 0) {
            // claps.value = response.data.likes_relation_count
            // } else {
            // claps.value = 0
            // }
        })
    }
}
</script>

<style>

</style>