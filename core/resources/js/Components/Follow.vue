<template>
    <div class="flex space-x-4">
        <button class="bg-green-600 rounded-full hover:bg-green-700 duration-500 px-4 py-2 text-white">Follow

        </button>
        <div
            class="h-[37px] w-[37px] cursor-pointer flex justify-center items-center rounded-full bg-green-600 hover:bg-green-700 duration-500">
            <svg height="2em" fill="none" width="2em" viewBox="0 0 38 38" stroke="currentColor" stroke-width="1"
                class="text-white text-xl">
                <rect x="26.25" y="9.25" width="0.5" height="6.5" rx="0.25"></rect>
                <rect x="29.75" y="12.25" width="0.5" height="6.5" rx="0.25" transform="rotate(90 29.75 12.25)"></rect>
                <path d="M19.5 12.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5"></path>
                <path d="M11.5 14.5L19 20l4-3"></path>
            </svg>

        </div>
    </div>
</template>

<script setup>


const props = defineProps({
    user: ''
})
</script>

<style>

</style>