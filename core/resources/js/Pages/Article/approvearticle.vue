<template>
  <div>
    <editmodal>
      <div class="p-2 rounded hover:bg-green-100">
        <button @click="toggleapproveArticle()">
          <x-heroicon-o-ellipsis-horizontal class="w-6 h-6" />
          <span> Approve article </span>
        </button>
      </div>
      <div class="p-2 rounded hover:bg-gray-100">
        <button @click="toggleunpublishArticle()">
          <x-heroicon-o-ellipsis-horizontal class="w-6 h-6" />
          <span> Unpublish article </span>
        </button>
      </div>

      <div class="p-2 rounded hover:bg-gray-100">
        <button @click="toggledeclineArticle()">
          <x-heroicon-o-ellipsis-horizontal class="w-6 h-6" />
          <span> Decline article </span>
        </button>
      </div>

      <div class="p-2 rounded hover:bg-red-100">
        <button @click="toggledeleteArticle()">
          <x-heroicon-o-ellipsis-horizontal class="w-6 h-6" />
          <span> Delete article </span>
        </button>
      </div>
    </editmodal>
  </div>

  <!-- Approve article Confirmation Modal -->
  <DialogModal :show="approveArticle" @close="toggleapproveArticle()">
    <template #title> Approve article </template>

    <template #content>
      Are you sure you want to approve this article?
    </template>

    <template #footer>
      <button
        @click="toggleapproveArticle()"
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
        :href="route('admin.articles.approve', slug)"
        method="put"
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
        Approve article
      </Link>
    </template>
  </DialogModal>

  <!-- Unpublish article Confirmation Modal -->
  <DialogModal :show="unpublishArticle" @close="toggleunpublishArticle()">
    <template #title> Unpublish article </template>

    <template #content>
      Are you sure you want to unpublish this article? Doing so will mean it is
      no longer live on the site.

    </template>

    <template #footer>
      <button
        @click="toggleunpublishArticle()"
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
        :href="route('admin.articles.disapprove', slug)"
        method="put"
        class="
          inline-flex
          items-center
          justify-center
          px-4
          py-2
          bg-red-600
          border border-transparent
          rounded-md
          font-semibold
          text-xs text-white
          uppercase
          tracking-widest
          hover:bg-red-500
          focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200
          active:bg-red-600
          disabled:opacity-25
          transition
          ml-3
        "
      >
        Unpublish article
      </Link>
    </template>
  </DialogModal>

  <!-- Decline article Confirmation Modal -->
  <DialogModal :show="declineArticle" @close="toggledeclineArticle()">
    <template #title> Decline article </template>

    <template #content>
      Are you sure you want to decline this article? Doing so will permanently
      remove it from the review queue.

    </template>

    <template #footer>
      <button
        @click="toggledeclineArticle()"
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
        :href="route('admin.articles.decline', slug)"
        method="put"
        class="
          inline-flex
          items-center
          justify-center
          px-4
          py-2
          bg-red-600
          border border-transparent
          rounded-md
          font-semibold
          text-xs text-white
          uppercase
          tracking-widest
          hover:bg-red-500
          focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200
          active:bg-red-600
          disabled:opacity-25
          transition
          ml-3
        "
      >
        Decline article
      </Link>
    </template>
  </DialogModal>

  <!-- Delete article Confirmation Modal -->
  <DialogModal :show="deleteArticle" @close="toggledeleteArticle()">
    <template #title> Delete article </template>

    <template #content>
      Are you sure you want to delete this article? Doing so will mean it is
      permanently removed from the site.

    </template>

    <template #footer>
      <button
        @click="toggledeleteArticle()"
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
        :href="route('articles.delete', slug)"
        method="delete"
        class="
          inline-flex
          items-center
          justify-center
          px-4
          py-2
          bg-red-600
          border border-transparent
          rounded-md
          font-semibold
          text-xs text-white
          uppercase
          tracking-widest
          hover:bg-red-500
          focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200
          active:bg-red-600
          disabled:opacity-25
          transition
          ml-3
        "
      >
        Delete article
      </Link>
    </template>
  </DialogModal>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

import { ref } from "vue";
import { useToggle } from "@vueuse/shared";
import { Link } from "@inertiajs/inertia-vue3";

const approveArticle = ref(false);
const toggleapproveArticle = useToggle(approveArticle);
const unpublishArticle = ref(false);
const toggleunpublishArticle = useToggle(unpublishArticle);
const deleteArticle = ref(false);
const toggledeleteArticle = useToggle(deleteArticle);
const declineArticle = ref(false);
const toggledeclineArticle = useToggle(declineArticle);

const DialogModal = defineAsyncComponent(() =>
  import("@/Components/DialogModal.vue")
);
const Editmodal = defineAsyncComponent(() =>
  import("@/Components/contenteditmodal.vue")
);

const props = defineProps(['slug'])
</script>

<style>
</style>