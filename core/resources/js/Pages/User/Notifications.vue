<template>
  <FrontendLayout>
    <!-- <Head :title="article.title" /> -->

    <!-- <template #aside> this is the aside user dashboard </template> -->

    <template #header>
      <div class="flex items-center justify-between pb-4">
        <div class="flex-1 min-w-0">
          <h2
            class="
              text-2xl
              font-bold
              leading-7
              text-gray-900
              sm:text-4xl sm:truncate
            "
          >
            Notifications

            <span class="text-2xl text-lio-500 rounded-full bg-lio-100 px-3">
              {{ notifications.data.length }}
            </span>
          </h2>
        </div>

        <div
          class="mt-4 flex md:mt-0 md:ml-4"
          v-if="notifications.data.length != 0"
        >
          <button
          @click="togglemarkAllAsRead()"
            class="
              bg-white
              border border-gray-200
              rounded
              py-2
              px-4
              inline-flex
              justify-center
              text-sm text-gray-900
              hover:bg-gray-100
              font-medium
            "
          >
            
          <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-1">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            Clear All
          </button>
        </div>
      </div>
    </template>
    <DialogModal :show="markAllAsRead" @close="togglemarkAllAsRead()">
    <template #title> Mark All As Read </template>

    <template #content>
      Are you sure you want to mark all notifications as read?
    </template>

    <template #footer>
      <button
        @click="togglemarkAllAsRead()"
        class="
          inline-flex
          items-center
          px-4
          py-2
          bg-white
          border border-gray-300
          rounded-md
          font-semibold
          text-xs text-gray-700
          uppercase
          tracking-widest
          shadow-sm
          hover:text-gray-500
          focus:outline-none
          focus:border-blue-300
          focus:ring
          focus:ring-blue-200
          active:text-gray-800 active:bg-gray-50
          disabled:opacity-25
          transition
        "
      >
        Cancel
      </button>

      <Link
        :href="route('notifications.mark-as-read')"
        
        class="
          inline-flex
          items-center
          justify-center
          px-4
          py-2
          bg-green-600
          border border-transparent
          rounded-md
          font-semibold
          text-xs text-white
          uppercase
          tracking-widest
          hover:bg-green-500
          focus:outline-none
          focus:border-green-700
          focus:ring
          focus:ring-green-200
          active:bg-green-600
          disabled:opacity-25
          transition
          ml-3
        "
      >
      Confirm
      </Link>
    </template>
  </DialogModal>

    <div id="exampleWrapper" class="py-6" v-if="notifications.total">
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <li
          class="mb-10 ml-6"
          v-for="notification in notifications.data"
          :key="notification.id"
        >
          <span
            class="
              flex
              absolute
              -left-3
              justify-center
              items-center
              w-6
              h-6
              bg-blue-200
              rounded-full
              ring-8 ring-white
              dark:ring-gray-900 dark:bg-blue-900
            " v-if="notification.type == 'App\\Notifications\\ArticleApprovedNotification'"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              class="w-5 h-5 rounded-full shadow-lg"
            >
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
            </svg>
          </span>
          <div
            class="
              justify-between
              items-center
              p-4
              bg-white
              rounded-lg
              border border-gray-200
              shadow-sm
              sm:flex
              dark:bg-gray-700 dark:border-gray-600
            " v-if="notification.type == 'App\\Notifications\\ArticleApprovedNotification'"
          >
            <ago
              :datess="notification.created_at"
              classes="flex sm:w-2/12 justify-between  mb-1
                text-xs
                font-normal
                text-gray-400
                sm:order-last sm:mb-0"
              befor=""
            >
              <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" v-if="notification.read_at">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </ago>

            <div class="text-sm  sm:w-10/12 font-normal text-gray-500 dark:text-gray-300">
              Your article:
              <Link
                :href="
                  route('articles.show', [
                    notification.data.channel,
                    notification.data.article_slug,
                  ])
                "
                class="
                  font-semibold
                  text-blue-600
                  dark:text-blue-500
                  hover:underline
                "
                >{{ notification.data.article_title }}</Link
              >
              has been approved.
            </div>
          </div>
        </li>
        <!-- <li class="mb-10 ml-6">
          <span
            class="
              flex
              absolute
              -left-3
              justify-center
              items-center
              w-6
              h-6
              bg-blue-200
              rounded-full
              ring-8 ring-white
              dark:ring-gray-900 dark:bg-blue-900
            "
          >
            <img
              class="rounded-full shadow-lg"
              src="/docs/images/people/profile-picture-5.jpg"
              alt="Thomas Lean image"
            />
          </span>
          <div
            class="
              p-4
              bg-white
              rounded-lg
              border border-gray-200
              shadow-sm
              dark:bg-gray-700 dark:border-gray-600
            "
          >
            <div class="justify-between items-center mb-3 sm:flex">
              <time
                class="
                  mb-1
                  text-xs
                  font-normal
                  text-gray-400
                  sm:order-last sm:mb-0
                "
                >2 hours ago</time
              >
              <div
                class="text-sm font-normal text-gray-500 lex dark:text-gray-300"
              >
                Thomas Lean commented on
                <a
                  href="#"
                  class="
                    font-semibold
                    text-gray-900
                    dark:text-white
                    hover:underline
                  "
                  >Flowbite Pro</a
                >
              </div>
            </div>
            <div
              class="
                p-3
                text-xs
                italic
                font-normal
                text-gray-500
                bg-gray-50
                rounded-lg
                border border-gray-200
                dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300
              "
            >
              Hi ya'll! I wanted to share a webinar zeroheight is having
              regarding how to best measure your design system! This is the
              second session of our new webinar series on #DesignSystems
              discussions where we'll be speaking about Measurement.
            </div>
          </div>
        </li>
        <li class="ml-6">
          <span
            class="
              flex
              absolute
              -left-3
              justify-center
              items-center
              w-6
              h-6
              bg-blue-200
              rounded-full
              ring-8 ring-white
              dark:ring-gray-900 dark:bg-blue-900
            "
          >
            <img
              class="rounded-full shadow-lg"
              src="/docs/images/people/profile-picture-1.jpg"
              alt="Jese Leos image"
            />
          </span>
          <div
            class="
              justify-between
              items-center
              p-4
              bg-white
              rounded-lg
              border border-gray-200
              shadow-sm
              sm:flex
              dark:bg-gray-700 dark:border-gray-600
            "
          >
            <time
              class="
                mb-1
                text-xs
                font-normal
                text-gray-400
                sm:order-last sm:mb-0
              "
              >1 day ago</time
            >
            <div
              class="text-sm font-normal text-gray-500 lex dark:text-gray-300"
            >
              Jese Leos has changed
              <a
                href="#"
                class="
                  font-semibold
                  text-blue-600
                  dark:text-blue-500
                  hover:underline
                "
                >Pricing page</a
              >
              task status to
              <span class="font-semibold text-gray-900 dark:text-white"
                >Finished</span
              >
            </div>
          </div>
        </li> -->
      </ol>

      <Pagination class="mt-6" :links="notifications.links" />
    </div>
    <p class="text-gray-600 text-base" v-else>
      You have no unread notifications
    </p>
  </FrontendLayout>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import { useForm, Link, usePage, Head } from "@inertiajs/inertia-vue3";
import { ref, onMounted, reactive, computed, onBeforeMount } from "vue";
import FrontendLayout from "@/Layouts/FrontendLayout.vue";
import { useToggle } from "@vueuse/shared";

const markAllAsRead = ref(false);
const togglemarkAllAsRead = useToggle(markAllAsRead);

const Ago = defineAsyncComponent(() =>
  import("@/Components/Ago.vue")
);
const Pagination = defineAsyncComponent(() =>
  import("@/Components/Pagination.vue")
);
const DialogModal = defineAsyncComponent(() =>
  import("@/Components/DialogModal.vue")
);

const notifications = computed(() => usePage().props.value.notifications);
</script>

<style>
</style>