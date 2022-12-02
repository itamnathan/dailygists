<template>

  <Modal>
    <template #button>
      <div class="h-14 w-14 grid place-items-center">
        <Cog6ToothIcon class="h-6 w-6 text-blue-900" />
      </div>
    </template>
    <div class="interface-interface-skeleton__sidebar" role="region" aria-label="Editor settings" tabindex="-1">
      <div class="interface-complementary-area edit-post-sidebar">
        <postsetting></postsetting>
      </div>
    </div>
  </Modal>
</template>

<script setup>
import { Cog6ToothIcon } from "@heroicons/vue/24/solid";
import postsetting from '@/Components/partial/postsetting.vue';

import Modal from '@/Components/Halfmodal.vue';
</script>

<style>

</style>