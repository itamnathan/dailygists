<template>

    <FrontendLayout>

        <template #meta>
            <title>Authored Articles</title>
        </template>
        <!-- <template #aside>
            this is the aside user dashboard
        </template> -->

        <template #header>
            <div class="py-3">
                <div class="flex items-center">
                    <span class="text-xl font-bold capitalize">  Authored Articles</span>
                </div></div>
        </template>
        <div>
            <div v-for="article in articles.data" :key="article.id"
                class="flex  py-2 sm:py-6 sm:mx-16">
                <div class=" w-9/12 grid px-1">

                    <Link
                        :href="route('articles.show', { channel: article.channels_relation[0].slug, article: article.slug })">
                    <h2 class="sm:text-[20px] text-[16px] font-bold">
                        {{ article.title }}
                    </h2>
                    </Link>
                    <Link
                        :href="route('articles.show', { channel: article.channels_relation[0].slug, article: article.slug })">

                    <p class="text-gray-500  text-xs sm:text-base font-semibold hidden md:block">
                        {{ article.excerpt }}
                    </p>
                    </Link>
                    <div class="flex justify-between">
                        <div class="flex text-xs items-center text-gray-400 space-x-1">

                            <ago :datess="article.publish_date" classes=" text-sm  text-grey-dark" befor=""></ago>
                            <!-- <span>Sep 22 </span>
                        <span> 6 min read</span> -->
                            <Link :href="route('channel', article.channels_relation[0].slug)">
                            <span :style="`background-color: ${article.channels_relation[0].color}`"
                                class="rounded-full  capitalize px-[10px] hidden sm:block text-white">
                                {{ article.channels_relation[0].name }}</span></Link>
                        </div>
                        <div class="flex space-x-2 items-center">
                            <div class="flex">
                                <span class="text-green-500 text-sm" v-if="article.approved_at">Approved</span>
                                <span class="text-red-500 text-sm" v-else>Pending</span>
                            </div>
                            <Link :href="route('articles.edit', article.slug)" class="bg-gray-700 text-white px-2 rounded ">Edit</Link>
                        </div>
                    </div>
                </div>
                <div class=" w-3/12">

                    <Link :href="route('articles.show', { channel: article.channels_relation[0].slug, article: article.slug })">

                        <img :src="article.hero_image" class="sm:w-full w-[100px] sm:h-[134px] h-[100px] rounded" />

                    </Link>
                </div>
            </div>
            
            <div class="sm:px-12px-[1px] py-2 sm:py-6 sm:mx-16 mx-1">
                <Pagination class="mt-6" :links="articles.links" />
            </div>
        </div>
    </FrontendLayout>
</template>

<script setup>
import { useForm, Link, usePage } from "@inertiajs/inertia-vue3";
import { ref, onMounted, reactive, computed, onBeforeMount } from "vue";
import FrontendLayout from "@/Layouts/FrontendLayout.vue";

import Ago from "@/Components/Ago.vue";
import Pagination from "@/Components/Pagination.vue";
const articles = computed(() => usePage().props.value.articles)


</script>

<style>

</style>