<template>
  <section class="sm:w-8/12 w-full mx-2">
    <div v-if="latestArticles.length != 0 || latestThreads.length != 0">
      <div
        class="flex sm:px-12px-[1px] py-2 sm:py-6 sm:mx-16 mx-1"
        v-for="article in latestArticles"
        :key="article.slug"
      >
        <div class="w-9/12 grid px-4">
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
          <Link
            :href="
              route('articles.show', {
                channel: article.channels_relation[0].slug,
                article: article.slug,
              })
            "
          >
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
          </Link>
          <div class="flex justify-between">
            <div class="flex text-xs items-center text-gray-400 space-x-1">
              <ago
                :datess="article.publish_date"
                classes=" text-sm  text-grey-dark"
                befor=""
              ></ago>
              <!-- <span>Sep 22 </span>
                        <span> 6 min read</span> -->
              <Link
                :href="
                  route('articles', {
                    channels: article.channels_relation[0].slug,
                  })
                "
              >
                <span
                  :style="`background-color: ${article.channels_relation[0].color}`"
                  class="
                    rounded-full
                    text-white
                    capitalize
                    px-[10px]
                    hidden
                    sm:block
                  "
                >
                  {{ article.channels_relation[0].name }}</span
                ></Link
              >
            </div>
            <bookmark :id="article.id" />
          </div>
        </div>
        <div class="w-3/12">
          <Link
            :href="
              route('articles.show', {
                channel: article.channels_relation[0].slug,
                article: article.slug,
              })
            "
          >
            <img
              :src="article.hero_image"
              class="sm:w-full w-[100px] sm:h-[134px] h-[100px] rounded"
            />
          </Link>
        </div>
      </div>
      <div
        class="
          sm:px-12px-[1px]
          py-2
          border-b border-t
          sm:py-6 sm:mx-16
          mx-1
          flex
          justify-end
        "
      >
        <Link class="px-2" :href="route('articles')"> >>> More Articles</Link>
        <!-- <Pagination class="mt-6" :links="data.links" /> -->
      </div>

      <div class="grid sm:grid-cols-2 gap-4 rounded-lg">
        <div
          class="flex sm:px-12px-[1px] py-2 sm:py-6 sm:mx-16 mx-1"
          v-for="thread in latestThreads"
          :key="thread.slug"
        >
          <div class="w-2/12">
            <span class="text-[30px] text-gray-200 font-bold">
              <img
                :src="thread.author_relation.profile_photo_url"
                class="rounded-full h-12 w-12"
              />
            </span>
          </div>
          <div class="w-10/12 grid">
            <Link :href="route('thread', thread.slug)">
              <h2 class="font-bold text-[16px]">
                {{ thread.subject }}
              </h2>
            </Link>
            <div class="flex text-xs text-gray-400">
              <ago
                :datess="thread.created_at"
                classes=" text-sm  text-grey-dark"
                befor=""
              ></ago>

              <!-- <span>

                            Tom Cooper</span>.
                        <span>6 min read</span> -->
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          sm:px-12px-[1px]
          py-2
          border-t border-b
          sm:py-6 sm:mx-16
          mx-1
          flex
          justify-end
        "
      >
        <Link class="px-2" :href="route('forum')"> >>> More From Community</Link>
        <!-- <Pagination class="mt-6" :links="data.links" /> -->
      </div>
    </div>
    <articleskeleton v-else />
  </section>
</template>

<script setup>
import articleskeleton from "@/Components/skeletons/article.vue";
import { ref, onMounted } from "vue";
import { Link } from "@inertiajs/inertia-vue3";

import { defineAsyncComponent } from "vue";

const Ago = defineAsyncComponent(() => import("@/Components/Ago.vue"));
const bookmark = defineAsyncComponent(() =>
  import("@/Components/Frontend/bookmark.vue")
);
const Pagination = defineAsyncComponent(() =>
  import("@/Components/Pagination.vue")
);

const latestThreads = ref([]);
const latestArticles = ref([]);
function loadResources() {
  axios.get("/api/article/latest").then((response) => {
    latestThreads.value = response.data.latestThreads;
    latestArticles.value = response.data.latestArticles;
  });
}

onMounted(() => {
  loadResources();
});
</script>

<style>
</style>