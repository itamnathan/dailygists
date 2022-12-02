<template>
  <FrontendLayout>
    <!-- <Head :title="article.title" /> -->

    <!-- <template #aside>
            this is the aside user dashboard
        </template> -->

    <div class="text-center text-xl">You don't have access to the feature!</div>
  </FrontendLayout>
</template>

<script setup>
import { useForm, Link, usePage, Head } from "@inertiajs/inertia-vue3";
import { ref, onMounted, reactive, computed, onBeforeMount } from "vue";
import FrontendLayout from "@/Layouts/FrontendLayout.vue";
// import { useVirtualList, useToggle } from '@vueuse/core';
import ZoomImages from "@/Components/ZoomImages.vue";
import Footer from "@/Layouts/partials/footer.vue";

const article = computed(() => usePage().props.value.article);
// const { list, containerProps, wrapperProps } = useVirtualList(data, {
//     itemHeight: 96
// })
const postdata = ref("");
onMounted(() => {});
onBeforeMount(() => {
  // loadResources()
});

function loadResources() {
  axios.get("/api/post/resources/" + article.value.slug).then((response) => {
    postdata.value = response.data;
  });
}
</script>

<style>
</style>