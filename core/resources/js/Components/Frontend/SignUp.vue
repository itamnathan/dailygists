<template>
    <div :class="design" v-if="!open" @click="toggleOpen()">
        <slot />
    </div>
    <div class="text-center " v-if="open">
        <div
            class="fixed inset-0 bg-gray-100   backdrop-blur-md duration-500  bg-opacity-60 ease-in-out transition-all  overflow-y-hidden flex justify-center items-center ">
        </div>
        <div
            class="scale-100  z-[100] md:z-20 ease-in-out duration-500 min-h-full md:min-h-[600px] w-full md:w-auto md:h-auto md:m-auto  rounded-lg fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white shadow-xl">
            <div class="w-full md:mx-[20rem] my-[10rem]">
                <div class="p-4 cursor-pointer z-50 absolute top-0 pt-10 pr-10 right-0" v-if="showCancel"
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
                        <div class="capitalize flex-col font-poppins text-2xl flex justify-center my-10">
                            <h1 class="py-10">Join  {{ $page.props.setting.title }}.</h1>
                            <h2 class="text-sm max-w-[24rem] m-auto">Create an account to receive great stories in your
                                inbox, personalize your homepage, and follow authors and topics that you love.</h2>
                        </div>

                        <Register />
                        <div class="font-poppins mb-16 text-sm flex justify-center">Already have an account?
                            <Link :href="route('login')"><span class="text-green-600 cursor-pointer font-bold ml-2">
                                Sign in</span></Link>
                        </div>
                        <div
                            class="font-poppins mb-20 text-center text-gray-600 text-xs flex justify-center items-center">
                            <h2>Click “Sign Up” to agree to  {{ $page.props.setting.title }}’s Terms of Service and acknowledge that  {{ $page.props.setting.title }}’s
                                Privacy Policy applies to you.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useToggle } from '@vueuse/shared';
import { ref } from 'vue'
import {  Link } from '@inertiajs/inertia-vue3';
import { defineAsyncComponent } from 'vue'


const Register = defineAsyncComponent(() => import('@/Components/Frontend/partials/register.vue'))
const open = ref(false)
const toggleOpen = useToggle(open)
const props = defineProps({
    showCancel: {
        type: Boolean,
        default: true,
    },
    design: {
        type: String,
        default: 'd',
    },
})
</script>

<style>

</style>