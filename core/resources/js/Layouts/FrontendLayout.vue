<script setup>
import { Head, usePage } from "@inertiajs/inertia-vue3";
import { defineAsyncComponent } from "vue";

import { ref, onMounted, reactive, computed, onBeforeMount } from "vue";

import { useMenuStore } from "@/stores/menu";
import { storeToRefs } from "pinia";

const store = useMenuStore();
const { header, footer, category, menu } = storeToRefs(store);

const Header = defineAsyncComponent(() =>
  import("@/Layouts/partials/frontendheader.vue")
);
const Footer = defineAsyncComponent(() =>
  import("@/Layouts/partials/footer.vue")
);
const Aside = defineAsyncComponent(() =>
  import("@/Layouts/partials/frontendaside.vue")
);
// const Notice = defineAsyncComponent(() => import("@/Components/Notice.vue"));

function load() {
  menu.value = computed(() => usePage().props.value.menu);
  menu.value.forEach(myFunction);
}

function myFunction(value) {
  if (value["location"] == "header") {
    header.value = value["menuitem"];
  } else if (value["location"] == "footer") {
    footer.value = value["menuitem"];
  } else if (value["location"] == "category") {
    category.value = value["menuitem"];
  }
}

onMounted(() => {
  load();
});
</script>
<template>
  <Head>
    <slot name="meta" />
  </Head>
  <div class="sm:flex">
    <!-- Header -->
    <!-- <Notice /> -->
    <Header />
    <main class="flex flex-col border-x-[1px] sm:w-[67%] relative">
      <div
        class="border-b-[1px] w-full flex items-center sm:px-12 px-4"
        v-if="$slots.header"
      >
        <slot name="header" />
      </div>
      <div v-if="$slots.cover">
        <slot name="cover" />
      </div>
      <div class="sm:px-12 px-4 my-6">
        <slot />
      </div>

      <div class="w-full bg-gray-50" v-if="$slots.recommended">
        <slot name="recommended"></slot>
      </div>
    </main>
    <!-- Aside -->

    <div class="w-[27%] hidden md:block relative" v-if="$slots.aside">
      <div class="sticky top-0 no-scrollbar">
        <div class="grid my-4">
          <slot name="aside" />
        </div>
      </div>
    </div>

    <Aside v-if="!$slots.aside"> </Aside>
  </div>

  <!-- Footer -->
  <Footer />
</template>
        
<style>
</style>