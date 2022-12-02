<template>

    <FrontendLayout>

        <!-- <Head :title="article.title" /> -->

        <!-- <template #aside>
            this is the aside user dashboard
        </template> -->

        <template #header>
            <div id="header"></div>
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
                                        <button type="button" aria-label="Block" data-label="Block"
                                            class="  px-1 sm:p-4 "
                                            :class="{ 'border-b-4 border-it-h1  ': selected, ' text-black': !selected }">
                                            Change Password
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
                        content 1
                    </div>
                </TabPanel>
                <TabPanel>
                    <div class="grid">
                        content 2
                    </div>
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </FrontendLayout>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { useForm, Link, usePage, Head } from "@inertiajs/inertia-vue3";
import { ref, onMounted, reactive, computed, onBeforeMount } from "vue";
import FrontendLayout from "@/Layouts/FrontendLayout.vue";

const article = computed(() => usePage().props.value.article)
const postdata = ref('')
onMounted(() => {
})
onBeforeMount(() => {
    // loadResources()
})

function loadResources() {

}


</script>

<style>

</style>