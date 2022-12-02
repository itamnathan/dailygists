<template>

  <div v-if="links.length > 3" class="mt-6">
    <div class="flex flex-wrap justify-center -mb-1">
      <div v-for="(link, index) in links" :key="index">
        <div v-if="link.url === null" class="
            flex py-4 md:py-2 md:px-6
            items-center
            justify-center
            px-12
            text-sm
            leading-4
            border
            rounded-full
            font-semibold
            border-grey-light border-solid
            text-grey-dark
            mr-3
          " v-html="link.label" />

        <Link v-else class="
            flex
            items-center
            justify-center
            font-semibold
            mr-1
            mb-1
            leading-4
            border border-solid
            rounded
            border-grey-light
            text-grey-dark
            hover:text-blue
            hover:border-blue
            focus:border-blue
            focus:text-blue
          "
          :class="{ 'border-blue text-blue': link.active, 'px-12 text-sm rounded-full py-4 md:py-2 md:px-6': isNaN(link.label), 'w-8 h-8 p-4 md:p-2 hidden md:flex text-xs': !isNaN(link.label) }"
          :href="link.url" v-html="link.label" />

      </div>
    </div>
  </div>
</template>

<script setup>
import { Link } from "@inertiajs/inertia-vue3";

const props = defineProps({
  links: {
    default:{}
  },
})
</script>
