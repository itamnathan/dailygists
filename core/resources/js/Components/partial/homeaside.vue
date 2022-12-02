<template>

  <aside class="sm:w-4/12 hidden md:block    px-6 py-3">
    <div class="sticky top-[107px] grid">
      <div>
        <p class="font-bold ">DISCOVER MORE OF WHAT MATTERS TO YOU</p>
      </div>
      <div class="w-full border h-44  rounded">
        <span class="">advertising</span>
      </div>

      <div class="flex flex-wrap items-center space-x-2 my-2  py-2">



        <Link v-for="(navigation, index) in category" :key="index" :href="navigation.href"
          class="px-4 border m-1 rounded flex">
        <span v-html="navigation.svg">
        </span>
        <span>
          {{ navigation.name }}
        </span>
        </Link>




      </div>
      <div class="border-b-[1px] border-gray-200  my-4 "></div>
      <div class=" flex flex-wrap items-center space-x-2 ">
        <Link v-for="(navigation, index) in footer" :key="index" :href="navigation.href" class="flex px-1">
        <span v-html="navigation.svg">
        </span>
        <span>
          {{ navigation.name }}
        </span>
        </Link>

      </div>

    </div>

  </aside>
</template>

<script setup>

import {  Link } from '@inertiajs/inertia-vue3';

import { storeToRefs } from 'pinia';
import { useMenuStore } from "@/stores/menu";


const store = useMenuStore()
const { footer,category } = storeToRefs(store)
</script>

<style>

</style>