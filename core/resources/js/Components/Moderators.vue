<script setup>
import {  Link, usePage } from "@inertiajs/inertia-vue3";
import { computed } from "vue";

import Ago from "@/Components/Ago.vue";
const moderators = computed(() => usePage().props.value.moderators);
</script>

<template>
  <div class="bg-white shadow rounded-md p-5 pb-3">
    <h3 class="text-xl font-semibold">Moderators</h3>

    <ul>
      <li
        class="{{ ! $loop->last ? 'border-b ' : '' }} flex items-center gap-x-5 pb-3 pt-5"
        v-for="moderator in moderators"
        :key="moderator.id"
      >
        <Link :href="route('profile', moderator.username)">
          <img
            :src="moderator.profile_photo_url"
            class="bg-gray-50 rounded-full w-10 h-10"
          />
        </Link>
        <span class="flex flex-col">
          <Link
            :href="route('profile', moderator.username)"
            class="hover:underline"
          >
            <span class="text-gray-900 font-medium">
              {{ moderator.username }}
            </span>
          </Link>

          <span class="text-gray-700">
            <ago
              :datess="moderator.created_at"
              classes=" text-sm  text-grey-dark"
              befor="Joined"
            ></ago>
          </span>
        </span>
      </li>
    </ul>
  </div>
</template>
