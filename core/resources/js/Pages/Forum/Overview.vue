<template>

    <FrontendLayout>


        <template #aside>

            <div class=" mx-6">

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
                <div class="">
                    <!-- @include('layouts._ads._forum_sidebar') -->
                </div>

                <div class="bg-white shadow rounded-md ">
                    <h3 class="text-xl font-semibold px-5 pt-5">
                        Thanks to our community
                    </h3>

                    <ul>
                        <li class="{{ ! $loop->last ? 'border-b ' : '' }}pb-3 pt-5"
                            v-for="(member, index) in topMembers" :key="member.id">
                            <div class="flex justify-between items-center px-5">
                                <div class="flex items-center gap-x-5">
                                    <Link :href="route('profile', member.username)">

                                    <img :src="member.profile_photo_url" class="bg-gray-50 rounded-full w-10 h-10">

                                    </Link>
                                    <span class="flex flex-col">
                                        <Link :href="route('profile', member.username)" class="hover:underline">
                                        <span class="text-gray-900 font-medium">
                                            {{ member.username }}
                                        </span>
                                        </Link>

                                        <span class="text-gray-700">
                                            {{ member.solutions_count }}
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

                    <p class="px-5 pt-3 pb-5 text-center text-xs text-gray-700">
                        Solutions given in the past year.
                        Excluding solutions from thread authors.
                    </p>
                </div>

                <div class="mt-6">
                    <moderators />
                </div>

                <div class="hidden sm:block mt-6">
                    <Link
                        class="w-full bg-gray-900 border border-transparent rounded py-2 px-4 inline-flex justify-center text-lg leading-6 text-white hover:bg-gray-800"
                        href="/forum/feed">
                    <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M3.75 4.5a.75.75 0 01.75-.75h.75c8.284 0 15 6.716 15 15v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75C18 11.708 12.292 6 5.25 6H4.5a.75.75 0 01-.75-.75V4.5zm0 6.75a.75.75 0 01.75-.75h.75a8.25 8.25 0 018.25 8.25v.75a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75v-.75a6 6 0 00-6-6H4.5a.75.75 0 01-.75-.75v-.75zm0 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                    RSS Feed
                    </Link>
                </div>
            </div>
        </template>
        <template #header>

            <div class="flex justify-between items-center w-full py-4 sm:block">
                <div class="flex justify-between items-center">
                    <h1 class="text-4xl text-gray-900 font-bold">
                        Forum
                    </h1>

                    <Link :href="route('threads.create')"
                        class="bg-greenish border border-transparent rounded py-2 px-4 inline-flex justify-center text-base text-white hover:bg-green-600 font-medium hidden md:block ">
                    Create Thread
                    </Link>
                </div>

                <div class="flex items-center justify-between sm:mt-6">
                    <h3 class="text-gray-800 text-xl font-semibold">
                        {{ threads.data.length }} Threads
                    </h3>

                    <div class="hidden sm:flex gap-x-2 w-2/3">
                        <div class="flex w-full rounded shadow">
                            <Link :href="route('forum', 'filter') + 'recent'"
                                :class="filter === 'recent' ? 'bg-gray-900 text-white  border-gray-900 hover:bg-gray-800' : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-100'"
                                class="w-full flex justify-center font-medium rounded-l px-5 py-2 border">
                            Recent
                            </Link>

                            <Link :href="route('forum', 'filter') + 'resolved'"
                                :class="filter === 'resolved' ? 'bg-gray-900 text-white  border-gray-900 hover:bg-gray-800' : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-100'"
                                class="w-full flex justify-center font-medium px-5 py-2 border-t border-b">
                            Resolved
                            </Link>

                            <Link :href="route('forum', 'filter') + 'unresolved'"
                                :class="filter === 'unresolved' ? 'bg-gray-900 text-white  border-gray-900 hover:bg-gray-800' : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-100'"
                                class="w-full flex justify-center font-medium rounded-r px-5 py-2 border ">
                            Unresolved
                            </Link>
                        </div>

                        <div class="w-2/5">
                            <span class="inline-flex rounded shadow w-full">
                                <tagsfilter></tagsfilter>
                            </span>
                        </div>
                    </div>
                </div>


                <div class="hidden sm:flex gap-x-4 items-center mt-4 pt-5 border-t">
                    Filter applied
                    <div v-if="activeTag"
                        class="inline-block text-sm text-gray-900 bg-gray-100 border border-gray-200 rounded py-1.5 px-3 leading-none">

                        <span class="flex items-center gap-x-1">
                            {{ activeTag.name }}
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
        <div class="pb-10 sm:pt-10 sm:pb-0">
            <div class="">
                <div class="">

                    <div class=" sm:hidden">
                        <div class="flex gap-x-4">
                            <div class="w-3/5">
                                <tagsfilter></tagsfilter>
                            </div>

                            <div class="w-2/5">
                                <span class="inline-flex rounded shadow-sm w-full">

                                    <Link :href="route('threads.create')"
                                        class="bg-greenish border border-transparent rounded py-2 px-4 inline-flex justify-center text-[17px] leading-6 text-white hover:bg-green-600">
                                    Create Thread
                                    </Link>
                                </span>
                            </div>
                        </div>
                        <div class="flex mt-4">
                            <div class="flex w-full rounded shadow">
                                <Link :href="route('forum', 'filter') + 'recent'"
                                    :class="filter === 'recent' ? 'bg-gray-900 text-white  border-gray-900 hover:bg-gray-800' : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-100'"
                                    class="w-full flex justify-center font-medium rounded-l px-5 py-2 border">
                                Recent
                                </Link>

                                <Link :href="route('forum', 'filter') + 'resolved'" aria-current="false"
                                    :class="filter === 'resolved' ? 'bg-gray-900 text-white  border-gray-900 hover:bg-gray-800' : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-100'"
                                    class="w-full flex justify-center font-medium  px-5 py-2 border">
                                Resolved
                                </Link>

                                <Link :href="route('forum', 'filter') + 'unresolved'"
                                    :class="filter === 'unresolved' ? 'bg-gray-900 text-white  border-gray-900 hover:bg-gray-800' : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-100'"
                                    class="w-full flex justify-center font-medium rounded-r px-5 py-2 border">
                                Unresolved
                                </Link>
                            </div>
                        </div>

                        <div class="flex gap-x-4 items-center mt-4">
                            Filter applied
                            <div v-if="activeTag"
                                class="inline-block text-sm text-gray-900 bg-gray-100 border border-gray-200 rounded py-1.5 px-3 leading-none">

                                <span class="flex items-center gap-x-1">
                                    {{ activeTag.name }}
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

                    <section class="mt-8 mb-5 sm:mb-32">
                        <div class="flex flex-col gap-y-4">

                            <div class="h-full rounded shadow-lg p-5 bg-white" v-for="thread in threads.data"
                                :key="thread.id">
                                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                    <div>
                                        <div class="flex flex-wrap items-center space-x-1 text-sm">
                                            <div class="flex items-center">

                                                <Link :href="route('profile', thread.author_relation.username)">

                                                <img :src="thread.author_relation.profile_photo_url"
                                                    class="bg-gray-50 rounded-full w-6 h-6 rounded-full mr-2">

                                                </Link>
                                                <Link :href="route('profile', thread.author_relation.username)"
                                                    class="hover:underline">
                                                <span class="text-gray-900 font-semibold">

                                                    @{{
                                                            thread.author_relation.username
                                                    }}
                                                </span>
                                                </Link>
                                            </div>
                                            <ago :datess="thread.created_at" classes=" text-sm  text-gray-700"
                                                befor="posted" as="div"></ago>

                                        </div>
                                    </div>

                                    <div class="flex flex-wrap gap-2 mt-2 sm:mt-0 sm:gap-x-4"
                                        v-if="thread.tags_relation.length != 0">

                                        <Link :href="route('forum.tag', tag.slug)" class="flex gap-2"
                                            v-for="tag in thread.tags_relation" :key="tag.id">
                                        <span
                                            class="inline-block text-sm text-gray-900 bg-gray-100 border border-gray-200 rounded py-1.5 px-3 leading-none">
                                            {{ tag.name }}
                                        </span>
                                        </Link>
                                    </div>
                                </div>

                                <div class="mt-3 break-words">
                                    <h3 class="text-xl text-gray-900 font-semibold">
                                        <Link :href="route('thread', thread.slug)" class="hover:underline">{{
                                                thread.subject
                                        }}</Link>

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mb-1 inline-block"
                                            v-if="thread.locked_at">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                        </svg>
                                    </h3>

                                    <p class="text-gray-800 leading-7 mt-1" v-html="thread.excerpt">

                                    </p>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <div class="flex gap-x-5">
                                        <span class="flex items-center gap-x-2">
                                            <svg width="24" height="24" fill="gray" viewBox="0 0 24 24"
                                                aria-label="clap">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z">
                                                </path>
                                            </svg>
                                            <span>{{ thread.like_count }}</span>
                                            <span class="sr-only">Likes</span>
                                        </span>

                                        <span class="flex items-center gap-x-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="gray"
                                                aria-label="responses" class="">
                                                <path
                                                    d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z">
                                                </path>
                                            </svg>
                                            <span>{{ thread.reply_count }}</span>
                                            <span class="sr-only">Replies</span>
                                        </span>
                                    </div>

                                    <Link :href="route('thread', thread.slug) + '#' + thread.solution_reply_id"
                                        class="flex items-center gap-x-2 font-medium text-green-500"
                                        v-if="thread.solution_reply_id">
                                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z">
                                        </path>
                                    </svg> <span class="hover:underline">Solved</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div class="mt-10">

                            <Pagination class="mt-6" :links="threads.links" />
                        </div>
                    </section>
                </div>

            </div>
        </div>

    </FrontendLayout>
</template>

<script setup>
import { useForm, Link, usePage } from "@inertiajs/inertia-vue3";
import {  computed } from "vue";
import FrontendLayout from "@/Layouts/FrontendLayout.vue";



import { defineAsyncComponent } from 'vue'



const SignIn = defineAsyncComponent(() => import('@/Components/Frontend/SignIn.vue'))
const SignUp = defineAsyncComponent(() => import('@/Components/Frontend/SignUp.vue'))
const Ago = defineAsyncComponent(() => import('@/Components/Ago.vue'))
const Moderators = defineAsyncComponent(() => import('@/Components/Moderators.vue'))
const tagsfilter = defineAsyncComponent(() => import('./threads/tagsfilter.vue'))
const Pagination = defineAsyncComponent(() => import('@/Components/Pagination.vue'))


const threads = computed(() => usePage().props.value.threads)
const filter = computed(() => usePage().props.value.filter)
const topMembers = computed(() => usePage().props.value.topMembers)
const activeTag = computed(() => usePage().props.value.activeTag)
const canonical = computed(() => usePage().props.value.canonical)



</script>

<style>

</style>