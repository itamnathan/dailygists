<template>

    <FrontendLayout>


        <template #aside>

            <div class="px-4">
                <div class="flex justify-between items-center py-2" v-if="!$page.props.isLoggedIn">
                    <SignUp design="w-9/12 flex justify-center rounded-full px-12 py-2 bg-black text-white">

                        <span>Get started</span>
                    </SignUp>
                    <SignIn>
                        <button class="">
                            Sign In
                        </button>
                    </SignIn>
                </div>
                <div class="hidden sm:block">

                </div>

                <div class="bg-white shadow rounded-md mt-6">
                    <h3 class="text-xl font-semibold px-5 pt-5">
                        Top authors
                    </h3>

                    <ul>
                        <li class="pb-3 pt-5" v-for="(author, index) in topAuthors" :key="author">


                            <div class="flex justify-between items-center px-5">
                                <div class="flex items-center gap-x-5">
                                    <Link :href="route('profile', author.username)">

                                    <img :src="author.profile_photo_url" class="bg-gray-50 rounded-full w-10 h-10">

                                    </Link>
                                    <span class="flex flex-col">
                                        <Link :href="route('profile', author.username)" class="hover:underline">
                                        <span class="text-gray-900 font-medium">
                                            {{ author.penname }}
                                        </span>
                                        </Link>

                                        <span class="text-gray-700">
                                            {{ author.articles_count }}
                                            <!-- { Str::plural('Solution',
                                            $member->solutions_count) } -->
                                        </span>
                                    </span>
                                </div>

                                <div>
                                    <span class="flex items-center gap-x-3 text-lio-500">
                                        <span class="text-xl font-medium">
                                            {{ index + 1 }}
                                        </span>

                                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            stroke="none" viewBox="0 0 24 24">
                                            <path
                                                d="M21,4h-3V3c0-0.553-0.447-1-1-1H7C6.447,2,6,2.447,6,3v1H3C2.447,4,2,4.447,2,5v3c0,4.31,1.799,6.91,4.819,7.012 c0.88,1.509,2.396,2.597,4.181,2.898V20H9v2h6v-2h-2v-2.09c1.784-0.302,3.301-1.39,4.181-2.898C20.201,14.91,22,12.31,22,8V5 C22,4.447,21.553,4,21,4z M4,8V6h2v6.021v0.809C4.216,12.078,4,9.299,4,8z M12,16c-2.206,0-4-1.794-4-4V4h8v8 C16,14.206,14.206,16,12,16z M18,12.83v-0.809V6h2v2C20,9.299,19.784,12.078,18,12.83z">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="mt-6">
                    <moderators />
                </div>

            </div>
        </template>

        <template #header>

            <div class="flex w-full justify-between items-center py-4 sm:block">
                <div class="flex justify-between items-center">
                    <h1 class="text-4xl text-gray-900 font-bold">
                        Articles
                    </h1>
                    <Link :href="route('articles.create')"
                        class="bg-greenish border border-transparent rounded py-2 px-4 inline-flex justify-center text-base text-white hover:bg-green-600 font-medium hidden md:block ">
                    Create Articles
                    </Link>
                </div>

                <div class="flex items-center justify-between sm:mt-6">
                    <h3 class="text-gray-800 text-xl font-semibold">
                        {{ articles.data.length }} Articles
                    </h3>

                    <div class="hidden sm:flex gap-x-2">

                        <filters />
                        <div class="shrink-0">

                            <channelsfilter></channelsfilter>
                        </div>
                    </div>
                </div>

                <div class="hidden sm:flex gap-x-4 items-center mt-4 py-2 border-t">
                    Filter applied
                    <div v-if="activeChannel"
                        class="inline-block text-sm text-gray-900 bg-gray-100 border border-gray-200 rounded py-1.5 px-3 leading-none">

                        <span class="flex items-center gap-x-1">
                            {{ activeChannel.name }}
                            <Link :href="route('forum')">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-4 h-4 text-red-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                            </Link>
                        </span>
                    </div>
                    <div v-else> No filter is applied</div>
                </div>
            </div>
        </template>

        <div class="">
            <div class="container mx-auto flex flex-col gap-x-12  sm:flex-row">
                <div class="">

                    <div class="pt-2 sm:hidden">

                        <div class="flex gap-x-4 mt-10">
                            <div class="w-3/5">


                                <channelsfilter></channelsfilter>
                            </div>

                            <div class="w-2/5">
                                <Link :href="route('articles.create')"
                                    class="bg-greenish border border-transparent rounded py-2 px-4 inline-flex justify-center text-base text-white hover:bg-green-600 font-medium  md:block ">
                                Create Article
                                </Link>
                            </div>
                        </div>

                        <div class="flex mt-4">
                            <filters />
                        </div>


                        <div class="flex gap-x-4 items-center mt-4">
                            Filter applied
                            <div v-if="activeChannel"
                                class="inline-block text-sm text-gray-900 bg-gray-100 border border-gray-200 rounded py-1.5 px-3 leading-none">

                                <span class="flex items-center gap-x-1">
                                    {{ activeChannel.name }}
                                    <Link :href="route('forum')">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    </Link>
                                </span>
                            </div>
                            <div v-else> No filter is applied</div>
                        </div>
                    </div>

                    <section class="mt-8 mb-5 sm:mb-16">
                        <div class="flex flex-col gap-y-4">

                            <div class=" rounded-lg shadow-lg bg-white sm:p-5" v-for="article in articles.data"
                                :key="article">
                                <div class="flex  sm:gap-x-8 flex-row">
                                    <Link
                                        :href="route('articles.show', { channel: article.channels_relation[0].slug, article: article.slug })"
                                        class="block w-1/3">
                                    <div class="w-full h-32 rounded-l-lg bg-center bg-gray-800 sm:w-48 sm:h-full sm:rounded-lg"
                                        :class="article.hero_image ? 'bg-cover' : ''"
                                        :style="'background-image: url(' + article.hero_image + ');'">
                                    </div>
                                    </Link>

                                    <div class="flex flex-col pl-2  sm:p-0 sm:gap-y-3.5 w-2/3">
                                        <div>
                                            <div
                                                class="flex  gap-y-2 justify-between hidden sm:block   sm:items-center">
                                                <div
                                                    class="flex flex-wrap items-center space-x-1  justify-between text-sm">
                                                    <div class="flex items-center justify-between">
                                                        <img :src="article.author_relation.profile_photo_url"
                                                            class="w-6 h-6 rounded-full mr-2" />

                                                        <Link :href="route('profile', article.author_relation.username)"
                                                            class="hover:underline">
                                                        <span class="text-gray-900 font-semibold ">
                                                            @{{   article.author_relation.username    }}
                                                        </span>
                                                        </Link>
                                                    </div>

                                                    <contenteditmodal>
                                                        <Link class="flex gap-x-2 p-3 rounded hover:bg-gray-100"
                                                            :href="route('articles.edit', article.slug)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-6 h-6">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                                            </svg>

                                                            Edit
                                                        </Link>

                                                        <Link class="flex gap-x-2 p-3 rounded hover:bg-gray-100"
                                                            :href="route('articles.show', {channel: article.channels_relation[0].slug, article:article.slug})">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-6 h-6">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            </svg>

                                                            View
                                                        </Link>
                                                    </contenteditmodal>
                                                </div>
                                            </div>

                                            <div class="flex text-sm leading-5 text-gray-500">

                                                <ago :datess="article.approved_at" classes=" text-sm  text-grey-dark"
                                                    befor="Published"></ago>

                                            </div>
                                        </div>

                                        <div class="break-words">
                                            <Link
                                                :href="route('articles.show', { channel: article.channels_relation[0].slug, article: article.slug })"
                                                class="hover:underline">
                                            <h3 class="text-xl text-gray-900 font-semibold">
                                                {{ article.title }}
                                            </h3>
                                            </Link>

                                            <p class="text-gray-800 leading-7 mt-1 hidden sm:block"
                                                v-html="article.excerpt">

                                            </p>
                                        </div>

                                        <div
                                            class="flex flex-col gap-y-3 sm:items-center sm:justify-between sm:flex-row-reverse">
                                            <div class="hidden md:block">
                                                <div class="flex flex-wrap gap-2 sm:gap-x-4">


                                                    <Link :href="route('articles', { channels: channel.slug })"
                                                        class="flex gap-2" v-for="channel in article.channels_relation"
                                                        :key="channel.id">
                                                    <span
                                                        class="inline-block text-sm text-gray-900 bg-gray-100 border border-gray-200 rounded py-1.5 px-3 leading-none">
                                                        {{ channel.name }}
                                                    </span>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div class="flex items-center gap-x-5">
                                                <span class="text-gray-500 text-sm">
                                                    {{ article.readTime }} min read
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="mt-10">

                            <Pagination class="mt-6" :links="articles.links" />
                        </div>
                    </section>

                </div>

            </div>
        </div>
    </FrontendLayout>
</template>

<script setup>
import { useForm, Link, usePage } from "@inertiajs/inertia-vue3";
import { computed } from "vue";
import FrontendLayout from "@/Layouts/FrontendLayout.vue";

import { defineAsyncComponent } from 'vue'



const Ago = defineAsyncComponent(() => import('@/Components/Ago.vue'))
const Pagination = defineAsyncComponent(() => import('@/Components/Pagination.vue'))
const SignIn = defineAsyncComponent(() => import('@/Components/Frontend/SignIn.vue'))
const SignUp = defineAsyncComponent(() => import('@/Components/Frontend/SignUp.vue'))
const Moderators = defineAsyncComponent(() => import('@/Components/Moderators.vue'))
const filters = defineAsyncComponent(() => import('./filter.vue'))
const channelsfilter = defineAsyncComponent(() => import('./channelsfilter.vue'))
const contenteditmodal = defineAsyncComponent(() => import('@/Components/contenteditmodal.vue'))




const articles = computed(() => usePage().props.value.articles)
const filter = computed(() => usePage().props.value.filter)
const topAuthors = computed(() => usePage().props.value.topAuthors)
const activeChannel = computed(() => usePage().props.value.activeChannel)
const canonical = computed(() => usePage().props.value.canonical)


</script>

<style>

</style>