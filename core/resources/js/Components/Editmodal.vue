<template>
  <div class="" aria-haspopup="true" aria-expanded="false" @click="open = !open">
    <button class="
        transition-all
        border border-solid border-black-transparent-3
        hover:border-black-transparent-10
        bg-black-transparent-2
        hover:bg-black-transparent-3
        font-medium
        inline-flex
        items-center
        px-3
        md:text-xs
        mobile:text-sm
        p-2
        mobile:flex
        mobile:items-center
        h-full
        text-black-transparent-50
        font-bold
        hover:text-blue
        text-sm
      " data-js="conversation-edit-trigger" style="border-radius: 12px">
      <span class="relative" style="top: -3px">...</span>
    </button>
  </div>
  <TransitionRoot :show="open" enter="transition ease-out duration-200" enter-from="opacity-0 translate-y-1"
    enter-to="opacity-100 translate-y-0" leave="transition ease-in duration-150" leave-from="opacity-100 translate-y-0"
    leave-to="opacity-0 translate-y-1" class="
      dropdown-menu
      absolute
      z-10
      py-2
      rounded-lg
      shadow-lg
      right-0
      bg-white
      grid
      p-2
      justify-between
      -bottom-36
    " style="width: 200px" v-if="open">
    <slot />
  </TransitionRoot>
</template>

<script setup>
import { TransitionRoot } from "@headlessui/vue";
import { ref } from "vue";


const open = ref(false);
</script>

<style>

</style>
