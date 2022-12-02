<template>

    <FrontendLayout>





    </FrontendLayout>
</template>

<script setup>
import { useElementVisibility } from '@vueuse/core'
import { useForm, Link, usePage, Head } from "@inertiajs/inertia-vue3";
import { ref, onMounted, reactive, computed, onBeforeMount } from "vue";
import FrontendLayout from "@/Layouts/FrontendLayout.vue";
import { useVirtualList, useToggle } from '@vueuse/core';
import Subscribe from "@/Components/Frontend/Subscribe.vue";
import ZoomImages from "@/Components/ZoomImages.vue";
import Footer from "@/Layouts/partials/footer.vue";
import Author from "@/Components/Frontend/Author.vue";
import PostsFromAuthor from "@/Components/Frontend/PostsFromAuthor.vue";
import RelatedCategoryArticle from "@/Components/Frontend/RelatedCategoryArticle.vue";



// const data = computed(() => usePage().props.value.articles)
// const { list, containerProps, wrapperProps } = useVirtualList(data, {
//     itemHeight: 96
// })
const postdata = ref('')
onMounted(() => {
})
onBeforeMount(() => {
    // loadResources()
})

function loadResources() {
    // axios.get('/api/post/resources/' + article.value.slug).then(response => {
    //     postdata.value = response.data;
    // });
}


</script>

<style>

</style>