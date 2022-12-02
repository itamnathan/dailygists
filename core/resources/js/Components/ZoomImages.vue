<template>


    <div v-if="open" @click="toggleOpen()">
        <div class="fixed inset-0 z-40 bg-gray-200/95"></div>
        <!-- <img class="sm:min-h-[600px]  fixed z-50  m-auto inset-x-0 inset-y-0 p-2 bg-white rounded-sm overflow-y-scroll cursor-zoom-out   duration-500 ease-in-out"
            :src="src" :alt="alt"> -->

        <img class="max-h-screen  fixed z-50  m-auto inset-x-0 inset-y-0 p-2 bg-white rounded-sm overflow-y-scroll cursor-zoom-out   duration-500 ease-in-out"
        :src="src"  :alt="alt" @click="toggleOpen()" />

    </div>
    <div class="" @click="toggleOpen()" v-else>
        <img :class="classs" :src="src" :height="imgHeigth" :width="imgWidth" :alt="alt" />
    </div>
</template>

<script setup>

import { useToggle } from '@vueuse/shared';
import { ref } from 'vue'

const open = ref(false)
const toggleOpen = useToggle(open)
const props = defineProps({
    imgHeigth: {
        type: String,
        default: 'h-12',
    },
    imgWidth: {
        type: String,
        default: 'w-full',
    },
    src: {
        type: String,
        default: '',
    },
    alt: {
        type: String,
        default: '',
    },
    classs: {
        type: String,
        default: '',
    }
})
</script>
