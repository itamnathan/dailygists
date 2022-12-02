<template>

    <div class="my-4 grid">
        <div class="my-2">
            <h2 class="font-bold">More from  {{ $page.props.setting.title }}</h2>
        </div>
        <div class="space-y-4">
            <div class="flex  px-[1px] py-2 " v-for="article in data" :key="article.slug">
                <div class="w-9/12 grid ">

                    <Link :href="route('articles.show',{ channel: article.channels_relation[0].slug , article: article.slug} )">
                    
                    <h2 class=" text-[14px] font-bold ">{{ article.title }}</h2>
                    </Link>
                </div>
                <div class=" w-3/12">
                    <div class=" w-[56px] h-[56px] rounded grid items-center bg-teal-200">
                        <img :src="article.hero_image" class="rounded" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Link } from "@inertiajs/inertia-vue3";

const data = ref([])
function loadResources() {
    axios.get('/api/article/morefromus').then(response => {
        data.value = response.data;

    });
}

onMounted(() => {
    loadResources()
})
</script>

<style>

</style>