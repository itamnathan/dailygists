<template>

    <TabGroup :defaultIndex="0">
        <TabList>

            <div class="sticky flex justify-between" tabindex="-1">
                <ul class="flex mb-3">
                    <Tab as="template" v-slot="{ selected }">
                        <li>
                            <button type="button" aria-label="Post (selected)" data-label="Post" class="p-4 "
                                :class="{ 'border-b-4 border-it-h1  ': selected, ' text-black': !selected }">
                                Post
                            </button>
                        </li>
                    </Tab>
                    <Tab as="template" v-slot="{ selected }">
                        <li>
                            <button type="button" aria-label="Block" data-label="Block" class="
                      p-4
                      
                    " :class="{ 'border-b-4 border-it-h1  ': selected, ' text-black': !selected }">
                                Seo
                            </button>
                        </li>
                    </Tab>
                    <Tab as="template" v-slot="{ selected }">
                        <li>
                            <button type="button" aria-label="Block" data-label="Block" class="
                      p-4
                      
                    " :class="{ 'border-b-4 border-it-h1  ': selected, ' text-black': !selected }">
                                Social Media
                            </button>
                        </li>
                    </Tab>
                </ul>
            </div>



        </TabList>
        <TabPanels>
            <TabPanel>
                <div class="grid xxx">
                    <DropDownSidebar>
                        <template #title>Publishing Status</template>
                        <DateTimePicker></DateTimePicker>

                    </DropDownSidebar>

                    <DropDownSidebar>
                        <template #title> Permalink </template>
                        <SetPermalink></SetPermalink>
                    </DropDownSidebar>
                    <DropDownSidebar>
                        <template #title> Channels </template>
                        <ChannelInput />
                    </DropDownSidebar>
                    <DropDownSidebar>
                        <template #title> Tags </template>
                        <TagInput />

                    </DropDownSidebar>
                    <DropDownSidebar>
                        <template #title> Featured image </template>
                        <SetFeaturedImage></SetFeaturedImage>
                    </DropDownSidebar>
                    <DropDownSidebar>

                        <template #title> Excerpt </template>
                        <Postexcerpt></Postexcerpt>
                    </DropDownSidebar>
                    <DropDownSidebar>
                        <template #title> Discussion </template>
                        <SetDiscussion></SetDiscussion>

                    </DropDownSidebar>
                </div>
            </TabPanel>
            <TabPanel>
                <div class="grid">

                    <DropDownSidebar>
                        <template #title> Meta Infos </template>
                        <SetMetaInfos></SetMetaInfos>

                    </DropDownSidebar>

                    <DropDownSidebar>
                        <template #title> Focus Keyword </template>
                        <SetFocusKeyword></SetFocusKeyword>
                    </DropDownSidebar>
                    <DropDownSidebar>
                        <template #title> FB Meta Infos </template>

                        <SetFacebookMeta></SetFacebookMeta>
                    </DropDownSidebar>

                    <DropDownSidebar>
                        <template #title>Twiter Meta Infos </template>
                        <SetTwitterMeta></SetTwitterMeta>
                    </DropDownSidebar>

                    <DropDownSidebar>
                        <template #title>Robot Meta </template>
                        <div class="grid ">
                            <div class="flex items-center ">
                                <span class="m-1">
                                    <input id="" class="" type="checkbox" value="1" checked="">
                                </span>
                                <label class=" mx-4" for="inspector-checkbox-control-30">Index

                                </label>
                            </div>
                            <div class="flex items-center ">
                                <span class="m-1">
                                    <input id="" class="" type="checkbox" value="1" checked="">
                                </span>
                                <label class=" mx-4" for="inspector-checkbox-control-30">No Index

                                </label>
                            </div>
                            <div class="flex items-center ">
                                <span class="m-1">
                                    <input id="" class="" type="checkbox" value="1" checked="">
                                </span>
                                <label class=" mx-4" for="inspector-checkbox-control-30">Nofollow

                                </label>
                            </div>
                            <div class="flex items-center ">
                                <span class="m-1">
                                    <input id="" class="" type="checkbox" value="1" checked="">
                                </span>
                                <label class=" mx-4" for="inspector-checkbox-control-30">No Archive

                                </label>
                            </div>
                            <div class="flex items-center">
                                <span class="m-1">
                                    <input id="" class="" type="checkbox" value="1" checked="">
                                </span>
                                <label class=" mx-4" for="inspector-checkbox-control-30">No Image Index

                                </label>
                            </div>
                            <div class="flex items-center ">
                                <span class="m-1">
                                    <input id="" class="" type="checkbox" value="1" checked="">
                                </span>
                                <label class=" mx-4" for="inspector-checkbox-control-30">No Snippet

                                </label>
                            </div>

                        </div>
                    </DropDownSidebar>

                    <DropDownSidebar>
                        <template #title>Googlebot-News index </template>
                        <div class="grid ">
                            <div class="flex items-center ">
                                <span class="m-1">
                                    <input id="" class="" type="checkbox" value="1" checked="">
                                </span>
                                <label class=" mx-4" for="inspector-checkbox-control-30">Index

                                </label>
                            </div>
                            <div class="flex items-center ">
                                <span class="m-1">
                                    <input id="" class="" type="checkbox" value="1" checked="">
                                </span>
                                <label class=" mx-4" for="inspector-checkbox-control-30">No Index

                                </label>
                            </div>

                        </div>
                    </DropDownSidebar>
                </div>
            </TabPanel>
            <TabPanel>
                <div class="grid">
                    Content 3
                </div>
            </TabPanel>
        </TabPanels>
    </TabGroup>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'


import { defineAsyncComponent } from 'vue'



const TagInput = defineAsyncComponent(() => import('@/components/TagInput.vue'))
const ChannelInput = defineAsyncComponent(() => import('@/components/ChannelInput.vue'))
const DropDownSidebar = defineAsyncComponent(() => import('@/Components/DropDownSidebar.vue'))
const SelectCategory = defineAsyncComponent(() => import('@/Components/SelectCategory.vue'))
const SetFeaturedImage = defineAsyncComponent(() => import('@/Components/SetFeaturedImage.vue'))
const DateTimePicker = defineAsyncComponent(() => import('@/Components/DateTimePicker.vue'))
const Postexcerpt = defineAsyncComponent(() => import('@/Components/Postexcerpt.vue'))
const SetDiscussion = defineAsyncComponent(() => import('@/Components/SetDiscussion.vue'))
const SetPermalink = defineAsyncComponent(() => import('@/Components/SetPermalink.vue'))
const SetFocusKeyword = defineAsyncComponent(() => import('@/Components/SetFocusKeyword.vue'))
const SetFacebookMeta = defineAsyncComponent(() => import('@/Components/SetFacebookMeta.vue'))
const SetTwitterMeta = defineAsyncComponent(() => import('@/Components/SetTwitterMeta.vue'))
const SetMetaInfos = defineAsyncComponent(() => import('@/Components/SetMetaInfos.vue'))
</script>

<style>

</style>