<template>
  <FrontendLayout>
    <template #meta>
      <title>{{ thread.subject }}</title>
    </template>
    <template #header>
      <div class="flex justify-between items-center w-full">
        <div class="flex items-center space-x-2 relative">
          <img
            :src="thread.author_relation.profile_photo_url"
            class="w-8 h-8 rounded-full my-4"
          />
          <Link
            :href="route('profile', thread.author_relation.username)"
            class=""
          >
            @{{ thread.author_relation.username }}
          </Link>
          <span class="absolute full top-10 left-10">
            <ago
              :datess="thread.created_at"
              classes=" text-xs  text-gray-300"
              befor=""
            ></ago>
          </span>
        </div>
        <div class="" v-if="$page.props.isLoggedIn">
          <Link
            :href="route('threads.edit', thread.slug)"
            v-if="
              $page.props.auth.user.id == thread.author_relation.id ||
              $page.props.isAdmin
            "
            >Edit
          </Link>
        </div>
      </div>
    </template>
    <template #aside>
      <div class="px-4">
        <div
          class="flex justify-between items-center py-2"
          v-if="!$page.props.isLoggedIn"
        >
          <SignUp
            design="w-9/12 flex justify-center rounded-full px-12 py-2 bg-black text-white"
          >
            <span>Get started</span>
          </SignUp>
          <SignIn>
            <button class="">Sign In</button>
          </SignIn>
        </div>
        <div class="mt-6">
          <div class="flex flex-col rounded-md shadow mt-6">
            <div
              class="bg-gray-800 rounded-t-md h-28"
              :style="
                'background-image: url(' +
                thread.author_relation.profile_cover_url +
                ')'
              "
            ></div>

            <div
              class="
                flex flex-col
                items-center
                justify-center
                bg-white
                rounded-b-md
                pb-8
              "
            >
              <img
                :src="thread.author_relation.profile_photo_url"
                class="w-32 h-32 rounded-full -mt-16 mb-6"
              />

              <Link
                :href="route('profile', thread.author_relation.username)"
                class="
                  flex flex-col
                  text-center text-xl
                  font-medium
                  mb-4
                  hover:underline
                "
              >
                {{ thread.author_relation.name }}
                <span class="text-lg text-gray-600"
                  >@{{ thread.author_relation.username }}</span
                >
              </Link>

              <span class="text-gray-600 mb-4">
                <ago
                  :datess="thread.author_relation.created_at"
                  classes="text-gray-600 mb-4"
                  befor="Joined"
                ></ago>
              </span>

              <div class="flex items-center gap-x-3">
                <a
                  href="https://twitter.com/{{ $user->twitter() }}"
                  class="text-twitter"
                >
                  <x-icon-twitter class="w-6 h-6" />
                </a>

                <a href="{{ $user->website() }}">
                  <x-heroicon-o-globe-alt class="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6" v-if="0 == 1">
          <div class="bg-white shadow rounded-md">
            <div class="flex flex-col p-5">
              <h3 class="text-xl font-semibold">Notifications</h3>

              <Link
                :href="route('threads.unsubscribe', thread.slug)"
                class="w-full mt-3"
              >
                <span class="flex items-center justify-center gap-x-2">
                  <x-heroicon-o-speaker-x-mark class="w-6 h-6" />
                  Unsubscribe
                </span>
              </Link>

              <p class="text-gray-600 mt-4">
                You are currently receiving notifications of updates from this
                thread.
              </p>
              <Link
                :href="route('threads.subscribe', thread.slug)"
                class="w-full mt-3"
              >
                <span class="flex items-center justify-center gap-x-2">
                  <x-heroicon-o-speaker-wave class="w-6 h-6" />
                  Subscribe
                </span>
              </Link>

              <p class="text-gray-600 mt-4">
                You are not currently receiving notifications of updates from
                this thread.
              </p>
            </div>
          </div>
        </div>

        <div class="my-6">
          <Moderators />
        </div>
      </div>
    </template>

    <h1 class="text-[32px] font-bold leading-10 break-words">
      {{ thread.subject }}slug asdgas asdfasd asdfasdfslug asdgas asdfasd
      asdfasdf
    </h1>
    <div id="section">
      <div v-html="thread.body" class="w-full my-6"></div>

      <div class="flex items-center my-6">
        <span class="font-bold w-2/12">Tags</span>
        <div class="flex items-center flex-wrap justify-between py-2 px-2">
          <Link
            :href="route('forum.tag', tag.slug)"
            v-for="tag in tags"
            :key="tag.id"
            class=""
          >
            <span
              class="
                capitalize
                inline-block
                text-sm text-gray-900
                bg-gray-100
                border border-gray-200
                rounded
                py-1.5
                px-3
                leading-none
              "
            >
              {{ tag.name }}
            </span>
          </Link>
        </div>
      </div>
    </div>

    <ClapCommentShare :data="thread" type="threads" />
    <!-- 
        <Subscribe />
        <Author :user="thread.author_relation" />

        <template #recommended>
            <Suspense>
                <PostsFromAuthor :user="thread.author_relation" />
                <template #fallback>
                    <div></div>
                </template>
            </Suspense>

            <RelatedCategoryArticle :trending="trendingArticles" >
            </RelatedCategoryArticle>
        </template> -->
  </FrontendLayout>
</template>

<script setup>
import { Link, usePage } from "@inertiajs/inertia-vue3";
import {  computed } from "vue";
import FrontendLayout from "@/Layouts/FrontendLayout.vue";

import { defineAsyncComponent } from "vue";

const Subscribe = defineAsyncComponent(() =>
  import("@/Components/Frontend/Subscribe.vue")
);
const RelatedCategoryArticle = defineAsyncComponent(() =>
  import("@/Components/Frontend/RelatedCategoryArticle.vue")
);
const PostsFromAuthor = defineAsyncComponent(() =>
  import("@/Components/Frontend/PostsFromAuthor.vue")
);
const Author = defineAsyncComponent(() =>
  import("@/Components/Frontend/Author.vue")
);
const SignIn = defineAsyncComponent(() =>
  import("@/Components/Frontend/SignIn.vue")
);
const SignUp = defineAsyncComponent(() =>
  import("@/Components/Frontend/SignUp.vue")
);
const Ago = defineAsyncComponent(() => import("@/Components/Ago.vue"));
const Moderators = defineAsyncComponent(() =>
  import("@/Components/Moderators.vue")
);

const ClapCommentShare = defineAsyncComponent(() =>
  import("@/Components/Frontend/ClapCommentShare.vue")
);
const Pagination = defineAsyncComponent(() =>
  import("@/Components/Pagination.vue")
);

const thread = computed(() => usePage().props.value.thread);
const tags = computed(() => usePage().props.value.thread.tags_relation);
</script>

<style>
#section figure img {
  @apply rounded-md;
}

#section figure {
  @apply py-4;
}

#section blockquote {
  @apply my-4 mx-6 mx-1 font-bold border-l p-2 rounded-lg border-it-h1 shadow-lg text-greenish;
}

#section li {
  @apply my-2;
}

#section ul {
  @apply my-2;
}

#section ol {
  @apply my-2;
}

#section figure figcaption {
  @apply px-12 py-4 text-sm text-gray-400;
}
</style>