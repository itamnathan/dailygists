<template>
    <div class="">
        <div class=" w-full sm:space-x-4 justify-between flex flex-row items-center" v-if="!success">
                <div class=" w-[67%]">
                    <input  v-model="email" name="email" id="emailinp" type="text"
                        class="block z-0 w-full py-2.5 px-0 text-sm text-gray-600 bg-transparent border-0 border-b-[1px]  appearance-none  dark:border-gray-400 dark:focus:border-primary-100 focus:outline-none focus:ring-0 focus:border-green-600  peer"
                        placeholder="Your Email" required="">
                </div>
                <button class="w-auto"  @click="subscribe" :disabled="isLoading" :class="{ 'loading': isLoading }">
                    <div
                        class="flex justify-center items-center space-x-2 bg-green-600 hover:bg-green-700 duration-500 text-white py-[6px] sm:py-[11px] px-2 sm:px-8 rounded-full">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                            class="sm:h-[23px] text-white sm:w-[23px] w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    d="M22 20.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16.007zM4.434 5L12 11.81 19.566 5H4.434zM0 15h8v2H0v-2zm0-5h5v2H0v-2z">
                                </path>
                            </g>
                        </svg>
                        <span>Subscribe</span>
                    </div>
                </button>
        </div>
        <p class="text-greenish text-center mt-4 " v-if="success">
            Thank you for subscribing! Please verify your email.
        </p>
        <p class="text-red-500 text-sm mt-4" v-if="errors.email" v-text="errors.email[0]"></p>
    </div>
</template>

<script setup>

import { ref } from "vue";

const email = ref('')
const errors = ref([])
const isLoading = ref(false)
const success = ref(false)

function subscribe() {
    isLoading.value = true;
    errors.value = [];
    success.value = false;
    axios.post('/subscribers-api/subscriber', {
        email: email.value
    })
        .then(response => {
            isLoading.value = false;
            success.value = true;
            email.value = undefined;
        })
        .catch(error => {
            errors.value = error.response.data.errors;
            isLoading.value = false;
        });
}
</script>

<style scoped>
input::placeholder {
    color: white !important;
}
</style>