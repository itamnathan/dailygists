<template>
    <div class="sm:w-[6%] relative">
        <nav class="sm:h-full mt-14 sm:mt-0">
            <Teleport to="#topb">
                <div class="px-6 py-2 fixed bg-white w-full z-10 -top-[1px] shadow-lg sm:hidden">
                    <div class="flex  justify-between items-center w-full">
                        <Link class="" :href="route('home')" rel="noopener follow">

                        <img src="/logoo.jpg" class="mr-3 h-12  rounded-full" />
                        </Link>
                        <div class=" flex justify-between space-x-2 items-center o ao">


                            <SignUp design="rounded-full px-4 bg-black py-2 text-white capitalize"
                                v-if="!$page.props.isLoggedIn">
                                <span>Get started</span>
                            </SignUp>

                            <a class="searc" rel="noopener follow" href="_-">
                                <svg width="25" height="24" fill="none" aria-label="search">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M4.8 10.69a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73a8.05 8.05 0 0 0-5.94-13.5z"
                                        fill="#A8A8A8"></path>
                                </svg>
                            </a>
                            <Mobilenav>
                            </Mobilenav>
                        </div>
                    </div>

                </div>
                <div v-if="!$page.props.isLoggedIn">
                    <div class=" fixed  w-full sm:w-auto  sm:left-[82px] sm:right-[370px] z-10 sm:top-0  top-[61px] px-4 py-4  border-t-[4px] border-green-600 bg-gray-100 "
                        v-if="scribe">

                        <subscribe />
                        <div
                            class="fixed justify-center items-center flex w-full top-[139px] sm:top-[81px] sm:w-auto  sm:left-[82px] sm:right-[370px]">
                            <span @click="toggleOpen()" class="px-4 bg-yellowish">x</span>
                        </div>
                    </div>
                </div>
            </Teleport>
            <div class="sticky inset-x-0 top-0 left-0   hidden md:block  ">
                <div class="flex justify-between h-screen  flex-col">
                    <div class="py-[40px]">
                        <Link :href="route('home')" rel="noopener follow" class="flex items-center justify-center">

                        <img src="/logoo.jpg" class=" h-[5rem] rounded-full" />

                        </Link>
                    </div>
                    <div class=" flex flex-col items-center text-gray-400">
                        <div class="py-6">
                            <Link :href="route('articles')" rel="noopener follow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Home">
                                <path
                                    d="M4.5 10.75v10.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-5.5c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v5.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-10.5M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            </Link>
                        </div>
                        <div class="py-6 relative">
                            <Link :href="route('users.notifications')" class="">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Notifications">
                                <path d="M15 18.5a3 3 0 1 1-6 0" stroke="currentColor" stroke-linecap="round">
                                </path>
                                <path
                                    d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
                                    stroke="currentColor" stroke-linejoin="round"></path>
                            </svg>
                            <span
                                :class="$page.props.hasNotification ? 'absolute top-2 -right-2 block py-1 px-2 text-[9px] text-center rounded-full text-white shadow-solid bg-red-500' : 'hidden'">{{
                                        $page.props.hasNotification
                                }}
                            </span>
                            </Link>
                        </div>
                        <div class="py-6">
                            <Link :href="route('forum')">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-linecap="round" class="w-6 h-6" aria-label="Community">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>
                            </Link>
                        </div>
                        <div class="py-6">

                            <Link :href="route('users.bookmark')">

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Lists">
                                <path
                                    d="M4.5 6.25V21c0 .2.24.32.4.2l5.45-4.09a.25.25 0 0 1 .3 0l5.45 4.09c.16.12.4 0 .4-.2V6.25a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25z"
                                    stroke="currentColor" stroke-linecap="round"></path>
                                <path d="M8 6V3.25c0-.14.11-.25.25-.25h11.5c.14 0 .25.11.25.25V16.5"
                                    stroke="currentColor" stroke-linecap="round"></path>
                            </svg>
                            </Link>
                        </div>
                        <div class="py-6" v-if="$page.props.auth.writingaccess">

                            <Link :href="route('user.articles')">

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Stories">
                                <path
                                    d="M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z"
                                    stroke="currentColor"></path>
                                <path d="M8 8.5h8M8 15.5h5M8 12h8" stroke="currentColor" stroke-linecap="round">
                                </path>
                            </svg>
                            </Link>
                        </div>
                        <div class="border-b w-full border-gray-200">

                        </div>
                        <div class="py-6" v-if="$page.props.auth.writingaccess">
                            <Link :href="route('articles.create')">

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Write">
                                <path
                                    d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                                    fill="currentColor"></path>
                                <path
                                    d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                                    stroke="currentColor"></path>
                            </svg>
                            </Link>
                        </div>
                    </div>
                    <div class="h-[64px]">

                        <div class=" flex items-center justify-center">

                            <usermenu iconclass="w-12 h-12 "></usermenu>
                        </div>
                    </div>
                </div>
            </div>
            <Teleport to="body">
                <div class="fixed right-0 left-0 -bottom-[1px] sm:hidden flex bg-white block z-10  ">
                    <div class="flex justify-between items-center h-[57px] w-full  relative">
                        <Link class="p-4" :href="route('articles')" rel="noopener follow">
                        <svg width="24" height="24" fill="none" aria-label="home">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M11.72 2.93a.45.45 0 0 1 .56 0l.34-.43-.34.43 9.37 7.5a.56.56 0 1 0 .7-.86l-9.38-7.5a1.55 1.55 0 0 0-1.94 0l-9.38 7.5a.56.56 0 0 0 .7.86l9.37-7.5zm7.17 9.13v-1.4l.91.69a.5.5 0 0 1 .2.4V20a2 2 0 0 1-2 2h-4a.5.5 0 0 1-.5-.5V17a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4.5a.5.5 0 0 1-.5.5H6a2 2 0 0 1-2-2v-8.25a.5.5 0 0 1 .2-.4l.91-.68V20c0 .5.4.89.89.89h3.39V17a2.11 2.11 0 0 1 2.11-2.11h1A2.11 2.11 0 0 1 14.61 17v3.89H18a.89.89 0 0 0 .89-.89v-7.95z"
                                fill="#A8A8A8"></path>
                        </svg>
                        </Link>
                        <div class="flex justify-center p-2 pr-2 items-center">
                            <usermenu iconclass="w-10  h-10"></usermenu>
                        </div>
                        <div class="fixed left-16  right-16 h-[56px] bottom-0 flex items-center justify-center">
                           <span class="text-center">advertising here</span></div>
                    </div>
                </div>
            </Teleport>
        </nav>
    </div>
</template>
 
<script setup>
import usermenu from './usermenu.vue';
import { ref, onMounted } from "vue";
import { Link } from '@inertiajs/inertia-vue3';
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia';
import { useToggle } from '@vueuse/shared';

import { defineAsyncComponent } from 'vue'



const SignUp = defineAsyncComponent(() => import('@/Components/Frontend/SignUp.vue'))
const SignIn = defineAsyncComponent(() => import('@/Components/Frontend/SignIn.vue'))
const Mobilenav = defineAsyncComponent(() => import('./mobilenav.vue'))
const Subscribe = defineAsyncComponent(() => import('@/Components/Subscribe.vue'))


const scribe = ref(false)
const toggleOpen = useToggle(scribe)
const store = useSettingsStore()
const { headernav } = storeToRefs(store)
onMounted(() => {
    myTimeout
})
const myTimeout = setTimeout(onsubcriber, 6000);
function onsubcriber() {
    toggleOpen()
}
function offsubcriber() {
    toggleOpen()
}
</script>
 
<style>

</style>