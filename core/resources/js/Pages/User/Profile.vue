<template>
  <FrontendLayout>
    <template #meta>
      <title>@{{ user.username }}'s profile</title>
    </template>

    <div
      class="flex py-2 sm:py-6"
      v-for="article in articles"
      :key="article.slug"
    >
      <div class="sm:w-9/12 w-9/12 grid pr-4">
        <Link
          :href="
            route('articles.show', {
              channel: article.channels_relation[0].slug,
              article: article.slug,
            })
          "
        >
          <h2 class="sm:text-[20px] text-[16px] font-bold">
            {{ article.title }}
          </h2>
        </Link>
        <!-- <Link :href="route('article',{ category: article.primary_category.slug , post: article.slug} )"> -->

        <p
          class="
            text-gray-500 text-xs
            sm:text-base
            font-semibold
            hidden
            md:block
          "
        >
          {{ article.excerpt }}
        </p>
        <!-- </Link> -->
        <div class="flex justify-between">
          <div class="flex text-xs items-center text-gray-400 space-x-1">
            <ago
              :datess="article.submitted_at"
              classes=" text-sm  text-grey-dark"
              befor=""
            ></ago>

            <!-- <span>Sep 22 </span>
                        <span> 6 min read</span> -->
          </div>
          <div>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              class="lt"
            >
              <path
                d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                fill="#292929"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="sm:w-3/12 w-3/12">
        <!-- <Link :href="route('article',{ category: article.primary_category.slug , post: article.slug} )"> -->

        <img
          :src="article.hero_image"
          class="sm:w-full w-[100px] sm:h-[134px] h-[100px] rounded"
        />

        <!-- </Link> -->
      </div>
    </div>
    <!-- <template #aside>
           
        </template> -->
    <template #cover>
      <div
        class="bg-teal-100 bg-cover w-full mb-16 sm:h-36 h-24 relative"
        :style="'background-image: url(' + user.profile_cover_url + ');'"
      >
        <div
          class="
            w-full
            flex
            justify-center
            h-4
            bg-white
            backdrop-blur-sm
            bg-opacity-10
            absolute
            sm:px-14
            px-4
            sm:top-[140px]
            top-[89px]
          "
        ></div>
        <div
          class="
            w-full
            flex
            justify-center
            sm:px-14
            px-4
            items-center
            absolute
            sm:top-[50px]
            top-[49px]
          "
        >
          <div class="capitalize text-[46px] font-bold">
            <img
              :src="user.profile_photo_url"
              class="
                sm:w-40 sm:h-40
                rounded-full
                w-20
                h-20
                border-4 border-teal-400
              "
            />
          </div>
        </div>
      </div>
    </template>
  </FrontendLayout>
</template>

<script setup>
import { useForm, Link, usePage } from "@inertiajs/inertia-vue3";
import { ref, onMounted, reactive, computed, onBeforeMount } from "vue";
import FrontendLayout from "@/Layouts/FrontendLayout.vue";

import Ago from "@/Components/Ago.vue";
const user = computed(() => usePage().props.value.user);
const articles = computed(() => usePage().props.value.articles);
</script>

<style>
</style>