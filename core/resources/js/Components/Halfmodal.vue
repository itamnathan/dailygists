<template>

    <div @click="toggleOpen()">
        <slot name="button" />
    </div>

    <teleport to="#modals">
        <div >
            <div class="flex justify-end text-center  overscroll-contain z-[10]" v-if="open">
                <div @click="toggleOpen()" ref="commentmodal"
                    class="fixed inset-0 bg-gray-700 z-10   duration-500  bg-opacity-20 ease-in-out transition-all  overflow-y-hidden flex justify-center  ">
                </div>
                <div
                    class=" z-[10]   fixed sm:top-0 top-10 right-0  ease-in-out duration-500 min-h-full w-full sm:w-[27%] rounded-xl sm:rounded-none bg-white shadow-xl">
                    <!-- scale-100 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full  md:m-auto   md:w-auto-->
                    <div class="w-full  no-scrollbar  max-h-screen overflow-y-auto overscroll-y-auto ">
                        <div class="flex justify-end  pt-4">
                            
                            <div class="flex justify-between ">

                                <button class=" text-gray-400 hover:text-gray-700 pr-2" @click="toggleOpen()">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="currentColor" class="kk">
                                        <path
                                            d="M18.13 6.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
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

import { ref } from "vue";
import { useToggle } from '@vueuse/shared';
import {  Link } from '@inertiajs/inertia-vue3';




const open = ref(false)
const toggleOpen = useToggle(open)


</script>

<style scoped>

</style>