<template>

    <div class="sm:px-24 px-4 sm:py-12 py-3 grid border-b" v-if="data.length != 0">

        <div class="flex items-center mb-4">
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" class="font-bold ">
                <path fill="#fff" d="M0 .8h28v28H0z"></path>
                <g opacity="0.8" clip-path="url(#trending_svg__clip0)">
                    <path fill="#fff" d="M4 4.8h20v20H4z"></path>
                    <circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle>
                    <path d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3"
                        stroke="#000" stroke-linecap="round"></path>
                </g>
                <defs>
                    <clipPath id="trending_svg__clip0">
                        <path fill="#fff" transform="translate(4 4.8)" d="M0 0h20v20H0z"></path>
                    </clipPath>
                </defs>
            </svg>
            <p class="font-bold px-2">Trending Now</p>
        </div>
        <div class="grid sm:grid-cols-3 sm:gap-6 gap-1   rounded-lg">
            <div class=" flex" v-for="(article, index) in data" :key="article.id">
                <div class="w-2/12 ">
                    <span class="text-[30px] text-gray-200 font-bold  ">0{{ index + 1 }}</span>
                </div>
                <div class="w-10/12 grid">
                    <Link :href="route('articles.show', { channel: article.channels_relation[0].slug, article: article.slug })">
                    <h2 class=" font-bold text-[16px]">
                        {{ article.title }}
                    </h2>
                    </Link>
                    <div class="flex text-xs text-gray-400">

                        <ago :datess="article.publish_date" classes=" text-sm  text-grey-dark" befor=""></ago>

                        <!-- <span>

                            Tom Cooper</span>.
                        <span>6 min read</span> -->
                    </div>

                </div>
            </div>
        </div>
    </div>
    <trending v-else/>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import { defineAsyncComponent } from 'vue'

const Ago = defineAsyncComponent(() => import('@/Components/Ago.vue'))
const trending = defineAsyncComponent(() => import('@/Components/skeletons/trending.vue'))
const data = ref([])
function loadResources() {
    axios.get('/api/article/trending').then(response => {
        data.value = response.data;

    });
}
onMounted(() => {
    loadResources()
})

</script>

<style>

</style>