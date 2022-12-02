<template>

    <FrontendLayout>

        <template #meta>
            <title>BookedMarked Articles</title>
        </template>
        <!-- <template #aside>
            this is the aside user dashboard
        </template> -->
        <template #header>
            <div class="py-3">
                <div class="flex items-center">
                    <span class="text-xl font-bold capitalize">  BookMarked Articles</span>
                </div></div>
        </template>
        <div class="flex sm:px-12px-[1px] py-2 sm:py-6 sm:mx-16 mx-1" v-for="bookmark in bookmarks.data"
            :key="bookmark.article">
            <div class=" w-9/12 grid px-4">

                <Link
                    :href="route('articles.show', { channel: bookmark.article.channels_relation[0].slug, article: bookmark.article.slug })">
                <h2 class="sm:text-[20px] text-[16px] font-bold">
                    {{ bookmark.article.title }}
                </h2>
                </Link>
                <Link
                    :href="route('articles.show', { channel: bookmark.article.channels_relation[0].slug, article: bookmark.article.slug })">

                <p class="text-gray-500  text-xs sm:text-base font-semibold hidden md:block">
                    {{ bookmark.article.excerpt }}
                </p>
                </Link>
                <div class="flex justify-between">
                    <div class="flex text-xs items-center text-gray-400 space-x-1">

                        <ago :datess="bookmark.article.publish_date" classes=" text-sm  text-grey-dark" befor=""></ago>
                        <!-- <span>Sep 22 </span>
                        <span> 6 min read</span> -->
                        <Link :href="route('channel', bookmark.article.channels_relation[0].slug)">
                        <span :style="`background-color: ${bookmark.article.channels_relation[0].color}`"
                            class="rounded-full text-white  capitalize px-[10px] hidden sm:block ">
                            {{ bookmark.article.channels_relation[0].name }}</span></Link>
                    </div>
                    <Link class="" :href="route('users.removebookmark', bookmark.article.id)" data-tooltipped=""
                        aria-describedby="tippy-tooltip-15" data-original-title="Not working yet"
                        style="display: inline;">
                        <div class=" flex space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5" />
                            </svg>

                        </div>
                    </Link>
                </div>
            </div>
            <div class=" w-3/12">

                <Link
                    :href="route('articles.show', { channel: bookmark.article.channels_relation[0].slug, article: bookmark.article.slug })">

                <img :src="bookmark.article.hero_image" class="sm:w-full w-[100px] sm:h-[134px] h-[100px] rounded" />

                </Link>
            </div>
        </div>

        <Pagination class="mt-6" :links="bookmarks.links" />
    </FrontendLayout>
</template>

<script setup>
import { useForm, Link, usePage, Head } from "@inertiajs/inertia-vue3";
import { ref, onMounted, reactive, computed, onBeforeMount } from "vue";
import FrontendLayout from "@/Layouts/FrontendLayout.vue";

import Pagination from "@/Components/Pagination.vue";
import Ago from "@/Components/Ago.vue";
const bookmarks = computed(() => usePage().props.value.bookmarks)



function bookmark(params) {
    if (isLoggedIn.value) {
        axios.get(route('users.removebookmark', params)).then(response => {
            // if (response.data.length != 0) {
            // claps.value = response.data.likes_relation_count
            // } else {
            // claps.value = 0
            // }
        })
    }
}
</script>

<style>

</style>