<template>
  <div class="py-4 px-2 border-t border-gray-200 ">
    <h2 class="relative flex" @click="open = !open">
      <button type="button" aria-expanded="false" class="">
        <slot name="title" />
      </button>
      <span aria-hidden="true" class="absolute top-0 right-0">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class=""
          aria-hidden="true"
          focusable="false"
          v-if="open"
        >
          <path d="M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"></path>
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class=""
          aria-hidden="true"
          focusable="false"
          v-if="!open"
        >
          <path d="M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"></path>
        </svg>
      </span>
    </h2>

    <div class="m-2" v-if="open">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const open = ref(false);
</script>

<style>
</style>