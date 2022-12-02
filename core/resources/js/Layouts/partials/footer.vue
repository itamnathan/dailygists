<script setup>
import { Link } from '@inertiajs/inertia-vue3';
import { ref, onMounted } from "vue";

import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia';

import { useMenuStore } from "@/stores/menu";


const storemenu = useMenuStore();
const { header, footer, category } = storeToRefs(storemenu);
const store = useSettingsStore()
const { footernav } = storeToRefs(store)
onMounted(() => {
  // if (footernav.value.length == 0) {
  //   store.loadfooterResources()
  // }
})
</script>
<template>
  <footer class="bg-black dark:bg-dark-secondary py-2 sm:hidden mb-[55px]">
    <div class="container grid ">
      <div class="border-b-[1px] border-gray-600 mx-6 mb-2">
        <div class="mb-2">
          <img src="/logo.png" class="w-12 h-12" />
        </div>
        <div class="flex flex-wrap mt-6 text-xs  mb-2 justify-center">

          <Link v-for="(navigation, index) in footer" :key="index" :href="navigation.href" class="flex text-white text-base font-bold px-1">
          <span v-html="navigation.svg">
          </span>
          <span>
            {{ navigation.name }}
          </span>
          </Link>
        </div>
      </div>

      <div class="grid items-center w-full px-6">
        <h3 class="text-white text-lg mb-3">Get the medium app</h3>
        <div class="flex  mb-3">
          <img src="/applestore.png" class="pr-5" />
          <img src="/googleplay.png" />
        </div>
      </div>
    </div>

  </footer>

  <!-- <div
            class="fixed hidden sm:block animate-bounce duration-500 z-40 hover:bg-green-700 bg-green-600 shadow-xl cursor-pointer rounded-md p-[13px] m-10 bottom-0 right-0">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="w-4 h-4 text-white"
                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19zm9-12.243L19.092 17H4.908L12 6.757z">
                </path>
            </svg>
        </div> -->
</template>