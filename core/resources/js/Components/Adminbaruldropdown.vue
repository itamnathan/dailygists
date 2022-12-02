<template>
  <li class="">
    <div
      class="
        relative
        flex
        justify-between
        text-gray-500
        hover:text-white
        focus-within:text-white
      "
    >
      <div class="flex items-center w-full">
        <div
          class="
            absolute
            inset-y-0
            left-0
            flex
            items-center
            pl-2
            pointer-events-none
          "
        >
        <slot name="svg"/>
          
        </div>
        <a
          href="#"
          class="
            inline-block
            w-full
            py-2
            pl-8
            pr-4
            text-xs
            rounded
            hover:bg-gray-800
            focus:outline-none
            focus:ring-1
            focus:ring-gray-500
            focus:bg-gray-800
          "
        >
          <slot />
        </a>
      </div>
      <button
        class="absolute right-0 flex items-center p-1"
        tabindex="-1"
        @click="togglemenu"
      >
        <svg class="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M15.25 10.75L12 14.25L8.75 10.75"
          ></path>
        </svg>
      </button>
    </div>
    <div class="pt-2 pl-4" v-if="hidemenu">
      <ul class="flex flex-col pl-2 text-gray-500 border-l border-gray-700">
        <slot name="li" />

      </ul>
    </div>
  </li>
</template>

<script setup>
import { ref } from "@vue/reactivity";
const hidemenu = ref(false);

function togglemenu() {
  hidemenu.value = !hidemenu.value;
}
</script>

<style>
</style>