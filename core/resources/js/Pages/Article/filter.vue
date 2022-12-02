<template>
    <div class="flex w-full rounded shadow">
        <Link :href="route('articles', { 'filter': 'recent' })"
            :class="filter === 'recent' ? 'bg-gray-900 text-white  border-gray-900 hover:bg-gray-800' : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-100'"
            class="w-full flex justify-center font-medium rounded-l px-5 py-2 border">
        Recent
        </Link>

        <Link :href="route('articles', { 'filter': 'popular' })"
            :class="filter === 'popular' ? 'bg-gray-900 text-white  border-gray-900 hover:bg-gray-800' : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-100'"
            class="w-full flex justify-center font-medium px-5 py-2 border-t border-b">
        Popular
        </Link>

        <Link :href="route('articles', { 'filter': 'trending' })"
            :class="filter === 'trending' ? 'bg-gray-900 text-white  border-gray-900 hover:bg-gray-800' : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-100'"
            class="w-full flex justify-center items-center font-medium rounded-r px-1 py-2 border ">
        <span class="px-2">Trending</span>
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z">
            </path>
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z">
            </path>
        </svg>
        </Link>
    </div>
</template>

<script setup>
import { Link, usePage } from "@inertiajs/inertia-vue3";
import { computed } from "vue";

const filter = computed(() => usePage().props.value.filter)
</script>

<style>

</style>