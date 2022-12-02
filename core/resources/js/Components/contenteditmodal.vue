<template>

    <div class="flex items-center gap-x-3">
        <div class="relative -mr-3" x-data="{ open: false }" outside="open = false">

            <button class="p-2 rounded hover:bg-gray-100" @click="toggleOpen()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>

            </button>

            <div v-if="open" class="absolute z-10 top-12 right-1 flex flex-col bg-white rounded shadow w-48">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useToggle } from '@vueuse/shared';
import { Link } from '@inertiajs/inertia-vue3';


const open = ref(false)
const toggleOpen = useToggle(open)
</script>

<style>

</style>