<template>
    <div>
        <div v-if="!withEmail">
            <div
                class="flex w-fit m-auto items-center justify-center space-x-4 border-[1px] mb-[13px] px-4 py-2 cursor-pointer border-gray-600 hover:border-gray-900 rounded-full font-poppins text-sm text-gray-800">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px"
                    viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                    c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                    c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	                C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	                c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                    <path fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	                c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z">
                    </path>
                </svg>
                <span>Sign in with Google</span>
            </div>

            <div @click="togglewithEmail()"
                class="flex w-fit m-auto items-center justify-center space-x-4 border-[1px] mb-10 px-[21px] py-2 cursor-pointer border-gray-600 hover:border-gray-900 rounded-full font-poppins text-sm text-gray-800">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                    class="h-[19px] w-[19px] text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <rect width="416" height="320" x="48" y="96" fill="none" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="32" rx="40" ry="40"></rect>
                    <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                        d="M112 160l144 112 144-112"></path>
                </svg>
                <span>Sign in with Email </span>
            </div>
        </div>


        <div v-if="withEmail">
            <form @submit.prevent="submit">
                <div>
                    <!-- <InputLabel for="name" value="Name" /> -->
                    <input placeholder="Name" id="name" type="text" class="
                   m-auto 
                    block
                    w-full md:w-[80%] text-center 
                    px-0.5 py-[4px] 
                    border-0 border-b-[0.2px] border-gray-900/50  
                    focus:ring-0 focus:border-black
                  " v-model="form.name" required autofocus autocomplete="name" />
                    <InputError class="mt-2" :message="form.errors.name" />
                </div>

                <div class="mt-4">
                    <!-- <InputLabel for="email" value="Email" /> -->
                    <input placeholder="Email" id="email" type="email" class="
                   m-auto 
                    block
                    
                    w-full md:w-[80%] text-center 
                    px-0.5 py-[4px] 
                    border-0 border-b-[0.2px] border-gray-900/50  
                    focus:ring-0 focus:border-black
                  " v-model="form.email" required autocomplete="email" />
                    <InputError class="mt-2" :message="form.errors.email" />
                </div>

                <div class="mt-4">
                    <!-- <InputLabel for="password" value="Password"  /> -->
                    <input placeholder="Password" id="password" type="password" class="
                   m-auto 
                    block
                    
                    w-full md:w-[80%] text-center 
                    px-0.5 py-[4px] 
                    border-0 border-b-[0.2px] border-gray-900/50  
                    focus:ring-0 focus:border-black
                  " v-model="form.password" required autocomplete="new-password" />
                    <InputError class="mt-2" :message="form.errors.password" />
                </div>

                <div class="mt-4">
                    <!-- <InputLabel for="password_confirmation" value="Confirm Password" /> -->
                    <input placeholder="Confirm Password" id="password_confirmation" type="password" class="
                   m-auto 
                    block
                    
                    w-full md:w-[80%] text-center 
                    px-0.5 py-[4px] 
                    border-0 border-b-[0.2px] border-gray-900/50  
                    focus:ring-0 focus:border-black
                  " v-model="form.password_confirmation" required autocomplete="new-password" />
                    <InputError class="mt-2" :message="form.errors.password_confirmation" />
                </div>

                <div class="flex items-center justify-center my-4">

                    <button
                        class="flex sm:w-fit w-full px-4  m-auto items-center justify-center space-x-4 border-[1px]   py-1 cursor-pointer border-gray-600 bg-white hover:border-gray-900 rounded-full font-poppins text-sm text-gray-800"
                        :class="{ 'bg-greenish border-[0px] creating': form.processing }" :disabled="form.processing">

                        <span v-if="!form.processing">Register</span>
                        <span v-if="form.processing" class="text-white">Creating Account ...</span>
                    </button>
                </div>
            </form>
        </div>
        
        <div v-if="withEmail" class="font-poppins items-center mb-6 text-sm flex justify-center">
            <div @click="togglewithEmail()" class="flex items-center cursor-pointer ">

                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                    class="text-green-600 h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                    </path>
                </svg>
                <span class="text-green-600 ml-2"> All sign up options</span>
            </div>
        </div>
    </div>

</template>

<script setup>
import { Link, useForm } from '@inertiajs/inertia-vue3';
import { useToggle } from '@vueuse/shared';
import { ref } from 'vue'
import { defineAsyncComponent } from 'vue'


const InputError = defineAsyncComponent(() => import('@/Components/InputError.vue'))
const InputLabel = defineAsyncComponent(() => import('@/Components/InputLabel.vue'))
const TextInput = defineAsyncComponent(() => import('@/Components/TextInput.vue'))

const withEmail = ref(false)
const togglewithEmail = useToggle(withEmail)

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<style>
.creating {
    animation: pulse-bg 1s infinite;
}

@keyframes pulse-bg {

    0% {
        opacity: 0.5;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0.5;
    }
}
</style>