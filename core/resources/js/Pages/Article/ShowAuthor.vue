<template>

    <FrontendLayout>

        <template #aside>

            <div class="grid space-y-3 my-6">
                <div class="h-20 w-20">
                    <img src="/storage/uploads/xl/flowerr.webp" class=" border-t-4 border-b-4 rounded-full" />
                </div>
                <span class="">
                    @{{ data.username }}
                </span>
                <span>17.3K Followers</span>

                <p>
                    5M+ Views on Medium || Join Medium (my favorite programming subscription) using my link👇👇👇
                    https://frank-andrade.medium.com/membership</p>
                <Follow />
            </div>
        </template>

        <template #cover>
            <div class="bg-teal-100 w-full sm:h-36 h-24 relative"
                :style="'background: url('+details.cover+');background-color: rgb(204 251 241 / var(--tw-bg-opacity));'">

                <div
                    class="w-full flex justify-between bg-white backdrop-blur-sm bg-opacity-10  sm:px-14 px-4 items-center absolute sm:top-[115px] top-[61px]">
                    <div class="flex  justify-between  items-center space-x-4">
                        <div class="h-14 w-14">
                            <img src="/storage/uploads/xl/flowerr.webp" class="rounded-full" />
                        </div>
                        <div class="grid justify-between items-center">
                            <span class="text-white">
                                @{{ data.username }}
                            </span>
                            <div class="flex  justify-between items-center">
                                <span>
                                    sep 12
                                </span>
                                <span>
                                    9 stories
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center space-x-4">
                        <button class="" aria-label="Share on twitter">
                            <span class="ci wm dw uy">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M20 5.34c-.67.41-1.4.7-2.18.87a3.45 3.45 0 0 0-5.02-.1 3.49 3.49 0 0 0-1.02 2.47c0 .28.03.54.07.8a9.91 9.91 0 0 1-7.17-3.66 3.9 3.9 0 0 0-.5 1.74 3.6 3.6 0 0 0 1.56 2.92 3.36 3.36 0 0 1-1.55-.44V10c0 1.67 1.2 3.08 2.8 3.42-.3.06-.6.1-.94.12l-.62-.06a3.5 3.5 0 0 0 3.24 2.43 7.34 7.34 0 0 1-4.36 1.49l-.81-.05a9.96 9.96 0 0 0 5.36 1.56c6.4 0 9.91-5.32 9.9-9.9v-.5c.69-.49 1.28-1.1 1.74-1.81-.63.3-1.3.48-2 .56A3.33 3.33 0 0 0 20 5.33"
                                        fill="#A8A8A8"></path>
                                </svg>
                            </span>
                        </button>
                        <button class="" aria-label="Share on facebook">
                            <a :href="details.facebook">
                                <span class="ci wm dw uy">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M19.75 12.04c0-4.3-3.47-7.79-7.75-7.79a7.77 7.77 0 0 0-5.9 12.84 7.77 7.77 0 0 0 4.69 2.63v-5.49h-1.9v-2.2h1.9v-1.62c0-1.88 1.14-2.9 2.8-2.9.8 0 1.49.06 1.69.08v1.97h-1.15c-.91 0-1.1.43-1.1 1.07v1.4h2.17l-.28 2.2h-1.88v5.52a7.77 7.77 0 0 0 6.7-7.71"
                                            fill="#A8A8A8"></path>
                                    </svg>
                                </span>
                            </a>
                        </button>
                        <button class="" aria-label="Share on linkedin">
                            <span class="ci wm dw uy">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M19.75 5.39v13.22a1.14 1.14 0 0 1-1.14 1.14H5.39a1.14 1.14 0 0 1-1.14-1.14V5.39a1.14 1.14 0 0 1 1.14-1.14h13.22a1.14 1.14 0 0 1 1.14 1.14zM8.81 10.18H6.53v7.3H8.8v-7.3zM9 7.67a1.31 1.31 0 0 0-1.3-1.32h-.04a1.32 1.32 0 0 0 0 2.64A1.31 1.31 0 0 0 9 7.71v-.04zm8.46 5.37c0-2.2-1.4-3.05-2.78-3.05a2.6 2.6 0 0 0-2.3 1.18h-.07v-1h-2.14v7.3h2.28V13.6a1.51 1.51 0 0 1 1.36-1.63h.09c.72 0 1.26.45 1.26 1.6v3.91h2.28l.02-4.43z"
                                        fill="#A8A8A8"></path>
                                </svg>
                            </span>
                        </button>
                        <button class="">
                            <span class="ci wm dw uy">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M3.57 14.67c0-.57.13-1.11.38-1.6l.02-.02v-.02l.02-.02c0-.02 0-.02.02-.02.12-.26.3-.52.57-.8L7.78 9v-.02l.01-.02c.44-.41.91-.7 1.44-.85a4.87 4.87 0 0 0-1.19 2.36A5.04 5.04 0 0 0 8 11.6L6.04 13.6c-.19.19-.32.4-.38.65a2 2 0 0 0 0 .9c.08.2.2.4.38.57l1.29 1.31c.27.28.62.42 1.03.42.42 0 .78-.14 1.06-.42l1.23-1.25.79-.78 1.15-1.16c.08-.09.19-.22.28-.4.1-.2.15-.42.15-.67 0-.16-.02-.3-.06-.45l-.02-.02v-.02l-.07-.14s0-.03-.04-.06l-.06-.13-.02-.02c0-.02 0-.03-.02-.05a.6.6 0 0 0-.14-.16l-.48-.5c0-.04.02-.1.04-.15l.06-.12 1.17-1.14.09-.09.56.57c.02.04.08.1.16.18l.05.04.03.06.04.05.03.04.04.06.1.14.02.02c0 .02.01.03.03.04l.1.2v.02c.1.16.2.38.3.68a1 1 0 0 1 .04.25 3.2 3.2 0 0 1 .02 1.33 3.49 3.49 0 0 1-.95 1.87l-.66.67-.97.97-1.56 1.57a3.4 3.4 0 0 1-2.47 1.02c-.97 0-1.8-.34-2.49-1.03l-1.3-1.3a3.55 3.55 0 0 1-1-2.51v-.01h-.02v.02zm5.39-3.43c0-.19.02-.4.07-.63.13-.74.44-1.37.95-1.87l.66-.67.97-.98 1.56-1.56c.68-.69 1.5-1.03 2.47-1.03.97 0 1.8.34 2.48 1.02l1.3 1.32a3.48 3.48 0 0 1 1 2.48c0 .58-.11 1.11-.37 1.6l-.02.02v.02l-.02.04c-.14.27-.35.54-.6.8L16.23 15l-.01.02-.01.02c-.44.42-.92.7-1.43.83a4.55 4.55 0 0 0 1.23-3.52L18 10.38c.18-.21.3-.42.35-.65a2.03 2.03 0 0 0-.01-.9 1.96 1.96 0 0 0-.36-.58l-1.3-1.3a1.49 1.49 0 0 0-1.06-.42c-.42 0-.77.14-1.06.4l-1.2 1.27-.8.8-1.16 1.15c-.08.08-.18.21-.29.4a1.66 1.66 0 0 0-.08 1.12l.02.03v.02l.06.14s.01.03.05.06l.06.13.02.02.01.02.01.02c.05.08.1.13.14.16l.47.5c0 .04-.02.09-.04.15l-.06.12-1.15 1.15-.1.08-.56-.56a2.3 2.3 0 0 0-.18-.19c-.02-.01-.02-.03-.02-.04l-.02-.02a.37.37 0 0 1-.1-.12c-.03-.03-.05-.04-.05-.06l-.1-.15-.02-.02-.02-.04-.08-.17v-.02a5.1 5.1 0 0 1-.28-.69 1.03 1.03 0 0 1-.04-.26c-.06-.23-.1-.46-.1-.7v.01z"
                                        fill="#A8A8A8"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </template>
        <h1 class="sm:mt-5 mt-2 py-8 text-[30px] font-bold">
            {{ data.name }}
        </h1>
        <div class="space-y-2 sm:hidden">
            <span>17.3K Followers</span>

            <p>
                5M+ Views on Medium || Join Medium (my favorite programming subscription) using my link👇👇👇
                https://frank-andrade.medium.com/membership</p>
            <Follow />
        </div>
        <div class="border-b-[1px] border-gray-200 my-10 "></div>

        <div class="sm:mt-10">
            <TabGroup :defaultIndex="0">
                <TabList>
                    <div class="flex justify-between " tabindex="-1">
                        <ul class="flex">
                            <Tab as="template" v-slot="{ selected }">
                                <li>
                                    <button type="button" aria-label="Post (selected)" data-label="Post"
                                        class=" px-4 py-1 rounded-l"
                                        :class="{ 'border-b-4 border-blue-600 ': selected, ' text-black': !selected }">
                                        Home
                                    </button>
                                </li>
                            </Tab>
                            <Tab as="template" v-slot="{ selected }">
                                <li>
                                    <button type="button" aria-label="Block" data-label="Block" class="px-4 py-1 
                      
                      
                    " :class="{ 'border-b-4 border-blue-600  ': selected, ' text-black': !selected }">
                                        About
                                    </button>
                                </li>
                            </Tab>
                        </ul>
                    </div>

                    <div class="border-b-[1px] border-gray-200 my-10 "></div>
                </TabList>
                <TabPanels>
                    <TabPanel>



                        <div class="flex py-2 sm:py-6" v-for="article in articles.data" :key="article.slug">
                            <div class="sm:w-9/12 w-9/12 grid pr-4">

                                <Link
                                    :href="route('article',{ category: article.primary_category.slug , post: article.slug} )">
                                <h2 class="sm:text-[20px] text-[16px] font-bold">
                                    {{ article.title }}
                                </h2>
                                </Link>
                                <Link
                                    :href="route('article',{ category: article.primary_category.slug , post: article.slug} )">

                                <p class="text-gray-500  text-xs sm:text-base font-semibold hidden md:block">
                                    {{ article.excerpt }}
                                </p>
                                </Link>
                                <div class="flex justify-between">
                                    <div class="flex text-xs items-center text-gray-400 space-x-1">


                                        <ago :datess="article.publish_date" classes=" text-sm  text-grey-dark" befor=""></ago>
                          
                                        <!-- <span>Sep 22 </span>
                                        <span> 6 min read</span> -->
                                        <Link :href="route('category',article.primary_category.slug)">
                                        <span
                                            :class="'rounded-full  capitalize px-[10px] hidden sm:block bg-['+article.primary_category.color+']'">
                                            {{ article.primary_category.name }}</span></Link>
                                    </div>
                                    <div>
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" class="lt">
                                            <path
                                                d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                                                fill="#292929"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="sm:w-3/12 w-3/12">

                                <Link
                                    :href="route('article',{ category: article.primary_category.slug , post: article.slug} )">

                                <img :src="article.featured_image"
                                    class="sm:w-full w-[100px] sm:h-[134px] h-[100px] rounded" />

                                </Link>
                            </div>
                        </div>



                    </TabPanel>
                    <TabPanel>

                        contente 2
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>


    </FrontendLayout>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import {  Link, usePage} from "@inertiajs/inertia-vue3";
import {  computed } from "vue";
import FrontendLayout from "@/Layouts/FrontendLayout.vue";


const Ago = defineAsyncComponent(() =>
  import("@/Components/Ago.vue")
);
const Follow = defineAsyncComponent(() =>
  import("@/Components/Follow.vue")
);

const data = computed(() => usePage().props.value.author)
const articles = computed(() => usePage().props.value.posts)
const details = computed(() => usePage().props.value.details)

</script>

<style>

</style>