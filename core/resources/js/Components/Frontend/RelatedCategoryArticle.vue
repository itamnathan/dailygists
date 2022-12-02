<template>

    <div class="sm:px-12 py-16">
        <div class="py-6">
            <h2 class="text-xl ">
                Recommended from  {{ $page.props.setting.title }}</h2>
        </div>
        <div class="grid sm:grid-cols-2 ">

            <div class="flex  px-2 py-2 sm:py-6" v-for="article in trending" :key="article.id">
                <div class=" w-9/12 grid pr-2">

                    <Link :href="route('articles.show', { channel: article.channels_relation[0].slug, article: article.slug })">

                    <h2 class=" text-[16px] font-bold">{{ article.title }}</h2>
                    </Link>
                    <div class="flex justify-between">
                        <div class="flex text-xs items-center text-gray-400 space-x-1">


                            <ago :datess="article.approved_at" classes=" text-sm  text-grey-dark" befor=""></ago>

                            <!-- <span>Sep 22 </span>
                            <span> 6 min read</span> -->
                            <Link :href="route('articles', { channels: article.channels_relation[0].slug })" v-if="article.channels_relation.length != 0">
                            <span
                                :class="'rounded-full  capitalize px-[10px] hidden sm:block bg-[' + article.channels_relation[0].color + ']'">
                                {{ article.channels_relation[0].name }}</span></Link>
                        </div>
                        
          <bookmark :id="article.id"/>
                        
                    </div>
                </div>
                <div class=" w-3/12">
                    <div class=" w-[100px]  h-[100px] rounded bg-white grid items-center">

                        <img :src="article.hero_image" class="" />
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
import { ref } from "vue";
import { Link } from "@inertiajs/inertia-vue3";

import { defineAsyncComponent } from 'vue'



const Ago = defineAsyncComponent(() => import('@/Components/Ago.vue'))
const bookmark = defineAsyncComponent(() => import('@/Components/Frontend/bookmark.vue'))
const props = defineProps([
    'category',
     'trending'
])

const data = ref([])
function loadResources() {
    axios.get('/api/post/channelrelatedarticle/' + props.category).then(response => {
        data.value = response.data;
    });
}
</script>

<style>

</style>