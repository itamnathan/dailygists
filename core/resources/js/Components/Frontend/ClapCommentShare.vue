<template>

    <div class="" :class="isVisible ? 'hidden' : 'sticky sm:bottom-2 bottom-16'" v-if="!isVisible">
        <div class="flex justify-center">
            <div class="flex justify-between bg-white rounded-full px-6 space-x-6 py-2 shadow-lg">

                <div>
                    <a class="flex" rel="noopener follow" @click="clap()">
                        <div class=" text-gray-200">
                            <svg width="24" height="24" fill="gray" viewBox="0 0 24 24" aria-label="clap">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z">
                                </path>
                            </svg>
                        </div>
                        <div class="text-gray-600">{{ claps }}</div>
                    </a>
                </div>
                <div class="border-l"></div>
                <div>
                    <button class="flex " aria-label="responses" @click="toggleOpen()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="gray" aria-label="responses" class="">
                            <path
                                d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z">
                            </path>
                        </svg>
                        <p class="bm b hi bo cn">
                            <span class=" text-gray-600 pw-responses-count pe pf">{{ data.replies_relation_count }}</span>
                        </p>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div id="hide" ref="ellll" class="flex mb-36 mt-16 justify-between items-center">
        <div class="flex space-x-8 items-center">
            <div class="flex space-x-2 ">
                <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-13" data-original-title="Likes"
                    style="display: inline;">
                    <div @click="clap()" class="flex cursor space-x-2  items-center  cursor-pointer">
                        <svg fill="gray" width="24" height="24" viewBox="0 0 24 24" aria-label="clap">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z">
                            </path>
                        </svg>
                        <span class="text-sm text-gray-500">{{ claps }}</span>
                    </div>
                </div>
            </div>
            <div class="flex space-x-2">

                <button class="flex " aria-label="responses" @click="toggleOpen()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="gray" aria-label="responses" class="">
                        <path
                            d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z">
                        </path>
                    </svg>
                    <p class="bm b hi bo cn">
                        <span class=" text-gray-600 pw-responses-count pe pf">{{ data.replies_relation_count }}</span>
                    </p>
                </button>
                <!-- <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-14" data-original-title="Respond"
                    style="display: inline;">
                    
                    <div class="flex space-x-2 items-center cursor-pointer">
                        <svg class="" width="24" fill="gray" height="24" viewBox="0 0 24 24" aria-label="responses">
                            <path
                                d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z">
                            </path>
                        </svg>
                        <span class="text-sm text-gray-500">1</span>
                    </div>
                </div> -->
            </div>
        </div>
        <div class="flex space-x-6  items-center ">
            <socialshare :data="data" v-if="type == 'articles'"/>
            <bookmark :id="data.id" v-if="type == 'articles'"/>
        </div>
    </div>
    <comments :type="type" :slug="data.slug" :id="data.id" />
</template>

<script setup>
import { useElementVisibility } from '@vueuse/core'
import { ref, onMounted, computed } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";
import { useCommentStore } from '@/stores/comment';
import { storeToRefs } from 'pinia';
import { useToggle } from '@vueuse/shared';
import { defineAsyncComponent } from 'vue'

const socialshare = defineAsyncComponent(() => import('@/Components/Frontend/SocialShare.vue'))
const comments = defineAsyncComponent(() => import('@/Components/Frontend/Comments.vue'))
const bookmark = defineAsyncComponent(() => import('@/Components/Frontend/bookmark.vue'))

const store = useCommentStore()
const { opencomment } = storeToRefs(store)
const toggleOpen = useToggle(opencomment)
const ellll = ref(null)
const isVisible = useElementVisibility(ellll)
const claps = ref(0)
const props = defineProps(
    [ 'type', 'data']
)
const isLoggedIn = computed(() => usePage().props.value.isLoggedIn)
onMounted(() => {
    if (props.data.likes_relation_count.length != 0) {
        claps.value = props.data.likes_relation_count
    }
})
function clap() {
    if (isLoggedIn.value && props.type == 'articles') {
        axios.get(route('articles.like', props.data.slug)).then(response => {
            // if (response.data.length != 0) {
            claps.value = response.data.likes_relation_count
            // } else {
            // claps.value = 0
            // }
        })
    } else if (isLoggedIn.value && props.type == 'threads') {
        axios.get(route('threads.like', props.data.slug)).then(response => {
            // if (response.data.length != 0) {
            claps.value = response.data.likes_relation_count
            // } else {
            // claps.value = 0
            // }
        })
    }
    else {
        claps.value++
    }
}
</script>

<style>

</style>