<template>
    <div v-if="!open" @click="toggleOpen()">
        <slot name="button" />
    </div>

    <teleport to="#modals">
        <div class="text-center  z-[999]" v-if="open">
            <div
                class="fixed inset-0 bg-gray-100 z-50  backdrop-blur-md duration-500  bg-opacity-60 ease-in-out transition-all  overflow-y-hidden flex justify-center items-center ">
            </div>
            <div
                class="scale-100 z-[100]  ease-in-out duration-500 min-h-full md:min-h-[600px] w-full md:w-auto md:h-auto md:m-auto   rounded-lg fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white shadow-xl">
                <div class="w-full md:px-[20rem] py-[10rem]">
                    <div class="p-4 z-60 cursor-pointer absolute top-0 pt-10 pr-10 right-0" v-if="showCancel"
                        @click="toggleOpen()">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                            class="h-8 w-8 text-gray-400 hover:text-gray-700 duration-100 text-2xl cursor-pointer"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z">
                            </path>
                        </svg>
                    </div>
                    <div
                        class="px-10 md:-translate-0 absolute w-full m-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <div class="">
                            <slot />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script setup>

import Login from "@/Components/Frontend/partials/login.vue";
import { useToggle } from '@vueuse/shared';
import { ref } from 'vue'

import {  Link } from '@inertiajs/inertia-vue3';
const open = ref(false)
const toggleOpen = useToggle(open)
const props = defineProps({
    showCancel: {
        type: Boolean,
        default: true,
    },
})
</script>

<style>

</style>