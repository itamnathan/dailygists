<template>

  <nav
    class="w-full bg-white sticky top-0 z-10 border-b h-14 flex items-center  shadow-lg border-gray-200 sm:py-0 sm:px-0  py-4 px-2">
    <div class="container flex flex-wrap justify-between items-center mx-auto" bis_skin_checked="1">
      <Link href="/" class="flex items-center">
      <img src="/logoo.jpg" class="mr-3 h-6 sm:h-9 rounded-full"  />
      <!-- <span class="
                self-center
                text-xl
                font-semibold
                whitespace-nowrap
                dark:text-white
              ">Laraveller</span> -->
      </Link>
      <div class="flex  items-center space-x-1">
        <Link v-if="!isMobile"
            :href="route('articles')"
            class="flex items-center hover:bg-gray-200 px-2 py-2 rounded  "
          >
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
              ></path>
            </svg>
            <span class="px-2">Trending Articles</span>
          </Link>
          <Link v-if="!isMobile"
            :href="route('forum')"
            class="flex items-center hover:bg-gray-200 px-2 py-2 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              class="w-6 h-6"
              aria-label="Community"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              ></path>
            </svg>
            <span class="px-2">Community</span>
          </Link>
        <SignUp design="rounded-full px-4 bg-black py-2 text-white capitalize" v-if="!$page.props.isLoggedIn">
          <span>Get started</span>
        </SignUp>

        <div class="w-full hidden md:block md:w-auto">
          <ul class="
          flex  items-center space-x-1
              ">
            <li v-for="(navigation, index) in header" :key="index">
              <Link :href="navigation.href" class="
                    block
                    flex
                    rounded
                    hover:bg-gray-200 px-2 py-2 
                    items-center
                    dark:hover:text-white
                  " aria-current="page">
                  
                 <span v-html='navigation.svg'></span>
                  <span class="px-2">{{ navigation.name }}</span>
                </Link>
            </li>
          </ul>
        </div>
        <Mobilenav>
        </Mobilenav>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {  Link } from '@inertiajs/inertia-vue3';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ref, onMounted } from "vue";
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia';
import { useDetictingMobile } from '@/composable/useDetictingMobile.js'
import { defineAsyncComponent } from 'vue'


import { useMenuStore } from "@/stores/menu";


const storemenu = useMenuStore();
const { header } = storeToRefs(storemenu);


const Mobilenav = defineAsyncComponent(() => import('./mobilenav.vue'))
const SignUp = defineAsyncComponent(() => import('@/Components/Frontend/SignUp.vue'))
const SignIn = defineAsyncComponent(() => import('@/Components/Frontend/SignIn.vue'))

let isMobile = useDetictingMobile()
const store = useSettingsStore()

onMounted(() => {
})


</script>

<style>

</style>