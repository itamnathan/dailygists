<template>

    <FrontendLayout>

        <!-- <Head :title="article.title" /> -->
        
        <template #aside>
            this is the aside user article followin now trending will be hear dashboard
        </template>

        <template #cover>
            <div class="bg-teal-100 w-full sm:h-36 h-24 relative"
                style="'background: url('+category.image+');background-color: '+category.color+';'">

                <div
                    class="w-full flex justify-center bg-white backdrop-blur-sm bg-opacity-10  sm:px-14 px-4 items-center absolute sm:top-[50px] top-[49px]">
                    <div class="capitalize text-[46px] font-bold">
                        <img src="/storage/uploads/xl/flowerr.webp" class="sm:w-40 sm:h-40 rounded-full w-20 h-20 border-4 border-teal-400"/>
                    </div>
                </div>
            </div>
        </template>

    </FrontendLayout>
</template>

<script setup>
import { useForm, Link, usePage, Head } from "@inertiajs/inertia-vue3";
import { ref, onMounted, reactive, computed, onBeforeMount } from "vue";
import FrontendLayout from "@/Layouts/FrontendLayout.vue";
// import { useVirtualList, useToggle } from '@vueuse/core';
// import Subscribe from "@/Components/Frontend/Subscribe.vue";
import ZoomImages from "@/Components/ZoomImages.vue";
import Footer from "@/Layouts/partials/footer.vue";

const article = computed(() => usePage().props.value.article)
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
    axios.get('/api/post/resources/' + article.value.slug).then(response => {
        postdata.value = response.data;
    });
}


</script>

<style>

</style>