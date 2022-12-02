<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';

import Register from "@/Components/Frontend/partials/register.vue";

</script>

<template>



    <div class="text-center ">

        <Head title="Register" />
        <div
            class="fixed inset-0 bg-gray-100   backdrop-blur-md duration-500  bg-opacity-60 ease-in-out transition-all  overflow-y-hidden flex justify-center items-center ">
        </div>
        <div
            class="scale-100  z-[100] md:z-20 ease-in-out duration-500 min-h-full md:min-h-[600px] w-full md:w-auto md:h-auto md:m-auto  rounded-lg fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white shadow-xl">
            <div class="w-full md:mx-[20rem] my-[10rem]">

                <div
                    class="px-10 md:-translate-0 absolute w-full m-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <div class="">
                        <div class="capitalize flex-col font-poppins text-2xl flex justify-center my-10">
                            <h1 class="py-10">Join {{ $page.props.setting.title }}.</h1>
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
                            <h2>Click “Sign Up” to agree to {{ $page.props.setting.title }}’s Terms of Service and acknowledge that {{ $page.props.setting.title }}’s
                                Privacy Policy applies to you.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <GuestLayout>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="name" value="Name" />
                <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus autocomplete="name" />
                <InputError class="mt-2" :message="form.errors.name" />
            </div>

            <div class="mt-4">
                <InputLabel for="email" value="Email" />
                <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autocomplete="username" />
                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />
                <TextInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" required autocomplete="new-password" />
                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="mt-4">
                <InputLabel for="password_confirmation" value="Confirm Password" />
                <TextInput id="password_confirmation" type="password" class="mt-1 block w-full" v-model="form.password_confirmation" required autocomplete="new-password" />
                <InputError class="mt-2" :message="form.errors.password_confirmation" />
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link :href="route('login')" class="underline text-sm text-gray-600 hover:text-gray-900">
                    Already registered?
                </Link>

                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Register
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout> -->
</template>
