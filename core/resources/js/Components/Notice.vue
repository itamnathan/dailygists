<script setup>
import { ref, onMounted, computed } from "vue";

import { usePage } from "@inertiajs/inertia-vue3";

let notice = computed(() => usePage().props.value.notice);
const timeout = ref(null);

onMounted(() => {
  if (notice) {
    timeout.value = setTimeout(() => {
      close();
    }, notice.timeout);
  }
});

function close() {
  clearTimeout(timeout.value);
  notice = null;
  // this.$root.notification.type = null;
  // this.$root.notification.autoClose = false;
  // this.$root.notification.message = '';
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="notice"
      :class="`bg-${notice.type}ish shadow-xl shadow-${notice.type} border-${notice.type}`"
      class="
        bg-opacity-70
        z-50
        m-2
        fixed
        right-0
        bottom-0
        border
        px-8
        py-4
        rounded-lg
      "
    >
      {{ notice.message }}
    </div>
  </Teleport>
</template>

<style>
#notificationBody {
  z-index: 99999;
  position: fixed;
  bottom: 20px;
  right: 10px;
}
</style>
