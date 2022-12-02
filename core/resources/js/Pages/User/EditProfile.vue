<template>

    <FrontendLayout>

        <template #meta>
            <title>Edit Profile</title>
        </template>
        <!-- <template #aside>
            this is the aside user dashboard
        </template> -->

        <template #cover>
           <avatar></avatar>
        </template>


        <TabGroup :defaultIndex="0">
            <TabList>
                <div class="sticky flex justify-between mt-24" tabindex="-1">
                    <ul class="flex mb-5 justify-between items-center w-full">
                        <div>
                            <Tab as="template" v-slot="{ selected }">
                                <li>
                                    <button type="button" aria-label="Post (selected)" data-label="Post"
                                        class="px-1  sm:p-4"
                                        :class="{ 'border-b-4 border-it-h1  ': selected, ' text-black': !selected }">
                                        Edit Profile
                                    </button>
                                </li>
                            </Tab>
                        </div>
                        <div>
                            <Tab as="template" v-slot="{ selected }">
                                <li>
                                    <button type="button" aria-label="Block" data-label="Block" class="  px-1 sm:p-4 "
                                        :class="{ 'border-b-4 border-it-h1  ': selected, ' text-black': !selected }">
                                        Change Password
                                    </button>
                                </li>
                            </Tab>
                        </div>
                        <div>
                            <Tab as="template" v-slot="{ selected }">
                                <li>
                                    <button type="button" aria-label="Block" data-label="Block" class=" px-1 sm:p-4 "
                                        :class="{ 'border-b-4 border-it-h1  ': selected, ' text-black': !selected }">
                                        Blocked Users
                                    </button>
                                </li>
                            </Tab>
                        </div>
                        <div v-if="!isMobile">

                            <Tab as="template" v-slot="{ selected }">
                                <li>
                                    <button type="button" aria-label="Block" data-label="Block" class=" px-1 sm:p-4 "
                                        :class="{ 'border-b-4 border-it-h1  ': selected, ' text-black': !selected }">
                                        Api Tokens
                                    </button>
                                </li>
                            </Tab>
                        </div>
                        <div v-if="!isMobile">
                            <Tab as="template" v-slot="{ selected }">
                                <li>
                                    <button type="button" aria-label="Block" data-label="Block" class=" px-1 sm:p-4 "
                                        :class="{ 'border-b-4 border-it-h1  ': selected, ' text-black': !selected }">
                                        Account Deleting
                                    </button>
                                </li>
                            </Tab>
                        </div>
                    </ul>
                </div>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <div class="grid">
                        <editform></editform>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div class="grid">
                        <changepassword></changepassword>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div class="grid">
                        <blockedusers></blockedusers>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div class="grid">
                        <apitoken></apitoken>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div class="grid">
                        <deletingaccount></deletingaccount>
                    </div>
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </FrontendLayout>
</template>

<script setup>

import { useDetictingMobile } from '@/composable/useDetictingMobile.js'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { useForm, Link, usePage } from "@inertiajs/inertia-vue3";
import FrontendLayout from "@/Layouts/FrontendLayout.vue";

import apitoken from './patials/apitoken.vue'
import blockedusers from './patials/blockedusers.vue'
import changepassword from './patials/changepassword.vue'
import deletingaccount from './patials/deletingaccount.vue'
import editform from './patials/editform.vue'
import avatar from './patials/avatar.vue'

let isMobile = useDetictingMobile()


</script>

<style>

</style>