<template>
  <div>
    <div class="flex sm:px-12 px-[1px] py-2 sm:py-6" v-if="firstdata">
      <div class="grid px-4 w-full">
        <Link
          :href="
            route('articles.show', {
              channel: firstdata.channels_relation[0].slug,
              article: firstdata.slug,
            })
          "
        >
          <h2 class="sm:text-[20px] text-[16px] font-bold">
            {{ firstdata.title }}
          </h2>
        </Link>
        <p
          class="
            text-gray-500 text-xs
            sm:text-base
            font-semibold
            hidden
            md:block
          "
        >
          {{ firstdata.excerpt }}
        </p>
        <div class="flex justify-between">
          <div class="flex text-xs items-center text-gray-400 space-x-1">
            <ago
              :datess="firstdata.approved_at"
              classes=" text-sm  text-grey-dark"
              befor=""
            ></ago>

            <Link
              :href="route('articles', { channels: firstdata.channels_relation[0].slug })"
            >
              <span
                :class="
                  'rounded-full  capitalize px-[10px] hidden sm:block bg-[' +
                  firstdata.channels_relation[0].color +
                  ']'
                "
              >
                {{ firstdata.channels_relation[0].name }}</span
              ></Link
            >
          </div>
          
          <bookmark :id="firstdata.id"/>
          
        </div>
      </div>
    </div>

    <div class="border-b-[1px] border-gray-200 my-10"></div>
    <div
      class="flex flex-wrap sm:justify-between justify-center items-center px-4"
    >
      <div class="flex items-center">
        <span class="text-[26px]"
          >Share your ideas with millions of readers.</span
        >
      </div>
      <div class="flex items-center">
        <Link
          :href="route('articles.create')"
          class="
            bg-gray-800
            text-sm
            hover:bg-gray-900
            duration-500
            px-4
            py-2
            text-white
            rounded-full
          "
          >Write on {{ $page.props.setting.title }}</Link
        >
      </div>
    </div>
    <div class="border-b-[1px] border-gray-200 my-10"></div>

    <div class="grid" v-if="data">
      <div
        class="flex sm:px-12 px-[1px]"
        v-for="article in data"
        :key="article.id"
      >
        <div
          class="grid px-4 w-full py-2 sm:py-6 border-b-[1px] border-gray-200"
        >
          <Link
            :href="
              route('articles.show', {
                channel: article.channels_relation[0].slug,
                article: article.slug,
              })
            "
          >
            <h2 class="sm:text-[20px] text-[16px] font-bold">
              {{ article.title }}
            </h2>
          </Link>
          <p
            class="
              text-gray-500 text-xs
              sm:text-base
              font-semibold
              hidden
              md:block
            "
          >
            {{ article.excerpt }}
          </p>
          <div class="flex justify-between">
            <div class="flex text-xs items-center text-gray-400 space-x-1">
              <ago
                :datess="article.approved_at"
                classes=" text-sm  text-grey-dark"
                befor=""
              ></ago>

              <Link :href="route('articles', { channels: article.channels_relation[0].slug })">
                <span
                  :class="
                    'rounded-full  capitalize px-[10px] hidden sm:block bg-[' +
                    article.channels_relation[0].color +
                    ']'
                  "
                >
                  {{ article.channels_relation[0].name }}</span
                ></Link
              >
            </div>
            
          <bookmark :id="article.id"/>
           
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center my-10">
        <Link
          :href="route('profile', user.username)"
          class="
            bg-gray-800
            cursor
            text-sm
            hover:bg-gray-900
            duration-500
            px-4
            py-2
            text-white
            rounded-full
          "
        >
          Read more from @{{ user.username }}
        </Link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import { useElementVisibility } from "@vueuse/core";
import { ref, onMounted } from "vue";

import { defineAsyncComponent } from 'vue'



const Ago = defineAsyncComponent(() => import('@/Components/Ago.vue'))
const bookmark = defineAsyncComponent(() => import('@/Components/Frontend/bookmark.vue'))
const author = ref(null);
const isVisible = useElementVisibility(author);
const props = defineProps({
  user: "",
});

const data = ref([]);
const firstdata = ref("");
function loadResources() {
  axios.get("/api/article/authorarticles/" + props.user.id).then((response) => {
    data.value = response.data;

    setdata();
  });
}

function setdata() {
  firstdata.value = data.value.shift();
}
onMounted(() => {
  if (data.value.length == 0) {
    loadResources();
  }
});
// watch(
//   () => props.user,
//   () => {
//     // loadResources()
//   }
// )
// onBeforeMount(() => {

// loadResources()
// })
</script>

<style>
</style>