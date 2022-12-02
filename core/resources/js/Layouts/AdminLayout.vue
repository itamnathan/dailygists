<template>
  
  <div>
    <Notice></Notice>
    <Mobileheader/>
    <div class="min-h-screen bg-gray-100 sm:flex relative">
      <AdminNav class="h-screen sticky w-2/12  top-0 container-snap  hidden md:block"></AdminNav>
      
      <main class="overflow-auto sm:w-11/12 h-screen sticky top-0 container-snap">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>

import { ref } from "vue";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/inertia-vue3";
// import ApplicationMark from "@/Components/ApplicationMark.vue";
// import Banner from "@/Components/Banner.vue";
// import Dropdown from "@/Components/Dropdown.vue";
// import DropdownLink from "@/Components/DropdownLink.vue";
// import NavLink from "@/Components/NavLink.vue";
// import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import AdminNav from "@/Layouts/adminpartials/sidebar.vue";
import Notice from "@/Components/Notice.vue";
import Mobileheader from "./adminpartials/mobileheader.vue";

</script>

<style>

</style>