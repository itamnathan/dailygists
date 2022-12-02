<template>
    <div v-if="!open" @click="toggleOpen()">
        <slot />
    </div>

    <teleport to="#modals">
        <div class="text-center " v-if="open">
            <div
                class="fixed inset-0 bg-gray-100   backdrop-blur-md duration-500  bg-opacity-60 ease-in-out transition-all  overflow-y-hidden flex justify-center items-center ">
            </div>
            <div
                class="scale-100 z-[100] md:z-20  ease-in-out duration-500 min-h-full md:min-h-[600px] w-full md:w-auto md:h-auto md:m-auto   rounded-lg fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white shadow-xl">
                <div class="w-full md:px-[20rem] py-[10rem]">
                    <div class="p-4 z-50 cursor-pointer absolute top-0 pt-10 pr-10 right-0" v-if="showCancel"
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
                            <div class="capitalize font-poppins text-2xl flex justify-center py-10">
                                <h1>Welcome back.</h1>
                            </div>
                            <Login />

                            <div class="font-poppins mb-16 text-sm flex justify-center">No account?
                                <Link :href="route('register')"><span
                                    class="text-green-600 cursor-pointer font-bold ml-2">
                                    Create one</span></Link>
                            </div>
                            <div
                                class="font-poppins mb-20 text-center text-gray-600 text-xs flex justify-center items-center">
                                <h2>Click “Sign In” to agree to  {{ $page.props.setting.title }}’s Terms of Service and acknowledge that  {{ $page.props.setting.title }}’s
                                    Privacy Policy applies to you.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script setup>
import { useToggle } from '@vueuse/shared';
import { ref } from 'vue'
import {  Link } from '@inertiajs/inertia-vue3';
import { defineAsyncComponent } from 'vue'




const Login = defineAsyncComponent(() => import('@/Components/Frontend/partials/login.vue'))
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