<template>

    <div class=" w-[27%] hidden md:block relative">
        <div class=" sticky  top-0   no-scrollbar">
            <div class="grid mx-6 my-4">
                <div class="flex justify-between items-center py-2" v-if="!$page.props.isLoggedIn">
                    <SignUp design="w-9/12 flex justify-center rounded-full px-12 py-2 bg-black text-white">

                        <span>Get started</span>
                    </SignUp>
                    <SignIn>
                        <button class="">
                            Sign In
                        </button>
                    </SignIn>
                </div>
                <!-- <div class="py-4">
                    <input type="text" class="rounded-full w-full border-gray-300 py-2" placeholder="Search...." />
                </div> -->

                <slot />

                <!-- <div class="w-full border h-44  rounded">
                    <span class="">advertising</span>
                </div> -->
                <Morepostfromus></Morepostfromus>
                <div class="flex flex-wrap mt-6 text-xs text-gray-600">
                    <Link v-for="(navigation, index) in footer" :key="index" :href="navigation.href"
                        class="flex px-1">
                    <span v-html="navigation.svg">
                    </span>
                    <span>
                        {{ navigation.name }}
                    </span>
                    </Link>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {  Link } from '@inertiajs/inertia-vue3';
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia';


import { useMenuStore } from "@/stores/menu";

import { defineAsyncComponent } from 'vue'


const storemenu = useMenuStore();
const { header, footer, category } = storeToRefs(storemenu);


const SignUp = defineAsyncComponent(() => import('@/Components/Frontend/SignUp.vue'))
const SignIn = defineAsyncComponent(() => import('@/Components/Frontend/SignIn.vue'))
const Morepostfromus = defineAsyncComponent(() => import('@/Components/Frontend/Morepostfromus.vue'))
const store = useSettingsStore()
const { footernav } = storeToRefs(store)
onMounted(() => {
    // if (footernav.value.length == 0) {
    //     store.loadfooterResources()
    // }
})
</script>

<style>

</style>