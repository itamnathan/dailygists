<script setup>
import FrontendLayout from "@/Layouts/AppLayout.vue";
import haside from "@/Components/partial/homeaside.vue"
import hsection from "@/Components/article/homesection.vue"
import Trending from "@/Components/Frontend/Trending.vue";
import Latest from "@/Components/Frontend/Latest.vue";
import Article from "@/Components/skeletons/article.vue";

defineProps({
});

</script>
        
<template>

    <FrontendLayout>


        <template #meta>
            <title>Home</title>
        </template>
        <Trending />


        <div class="flex  ">
                <Latest />
            <haside>

            </haside>
        </div>
    </FrontendLayout>
</template>