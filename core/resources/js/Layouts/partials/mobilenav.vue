<template>
  <div class="flex items-center" v-if="isMobile">
    <div class="text-right sm:hidden px-[5px]">
      <halfmodal>
        <template #button>
          <div
            class="
              inline-flex
              w-full
              justify-center
              rounded-md
              text-gray-500
              py-2
              text-sm
              font-medium
            "
          >
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </template>

        <div
          v-for="(navigation, index) in headernav"
          :key="index"
          class="px-1 py-1"
        >
          <Link
            :href="navigation.href"
            :class="[
              active ? 'bg-violet-500 text-white' : 'text-gray-900',
              'group  space-x-2 flex w-full items-center rounded-md px-2 py-2 text-sm',
            ]"
          >
            <span v-html="navigation.svg" class="text-black"> </span>
            <span>
              {{ navigation.name }}
            </span>
          </Link>
        </div>

        <div class="grid space-y-3">
          <Link
            :href="route('articles')"
            class="flex items-center hover:bg-gray-200 px-2 py-2 rounded"
          >
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
              ></path>
            </svg>
            <span class="px-2">Trending Articles</span>
          </Link>
          <Link
            :href="route('forum')"
            class="flex items-center hover:bg-gray-200 px-2 py-2 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              class="w-6 h-6"
              aria-label="Community"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              ></path>
            </svg>
            <span class="px-2">Community </span>
          </Link>
          <Link
            :href="route('users.notifications')"
            class="hover:bg-gray-200 px-2 py-2 rounded"
            >Notifications
          </Link>
          <Link
            :href="route('users.settings')"
            class="hover:bg-gray-200 px-2 py-2 rounded"
            >Settings</Link
          >
          <Link
            :href="route('users.edit')"
            class="hover:bg-gray-200 px-2 py-2 rounded"
            >Edit Profile</Link
          >
        </div>
      </halfmodal>
    </div>
    <usermenu></usermenu>
    <span
      :class="
        $page.props.hasNotification
          ? 'absolute top-2 right-2 block py-1 px-2 text-[9px] text-center rounded-full text-white shadow-solid bg-red-500'
          : 'hidden'
      " v-if="$page.props.isLoggedIn"
      >{{ $page.props.hasNotification }}
    </span>
  </div>
</template>

<script setup>
import { useDetictingMobile } from '@/composable/useDetictingMobile.js'
import { defineAsyncComponent } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { useSettingsStore } from "@/stores/settings";
import { storeToRefs } from "pinia";
import usermenu from "./usermenu.vue";
import { ref, onMounted, reactive, onBeforeMount } from "vue";

const Halfmodal = defineAsyncComponent(() =>
  import("@/Components/Halfmodal.vue")
);

let isMobile = useDetictingMobile()
const store = useSettingsStore();
const { headernav } = storeToRefs(store);
</script>

<style>
</style>