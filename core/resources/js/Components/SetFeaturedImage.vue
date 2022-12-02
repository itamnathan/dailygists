<template>
  <div
    type="file"
    class="
      bg-gray-100
      grid
      items-center
      hover:bg-gray-200
      py-12
      px-6
      rounded-lg
    "
    v-if="!featured_image.length"
  >
    <button type="button" @click="open = !open" class="text-sm">
      Set featured image
    </button>

    <FileManager
      v-model:open-file-manager="open"
      :multiple="false"
      v-on:update:openFileManager="open = $event"
      v-on:update:selectedImages="setFeaturedImg"
    />
  </div>

  <div
    type="file"
    class="
      bg-gray-100
      grid
      justify-center
      items-center
      hover:bg-gray-200
      py-2
      px-1
      rounded-lg
    "
    v-if="featured_image"
  >
    <img :src="featured_image" class="h-40 w-40" />
    <button
      class="
        text-sm text-red-500
        hover:text-white
        py-1
        px-6
        border border-red-500
        rounded
        hover:bg-red-500
      "
      @click="removefeaturedimg"
    >
      Remove
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import FileManager from "@/Pages/Admin/Media/components/FileManager.vue";

import { useEditorStore } from "@/stores/editor";
import { useMediaStore } from "@/stores/media";
import { storeToRefs } from "pinia";

const media = useMediaStore();
const editor = useEditorStore();
const { featured_image } = storeToRefs(editor);
const { selectedmedias } = storeToRefs(media);

const open = ref(false);
const images = ref([]);
function setFeaturedImg() {
  let ser = selectedmedias.value.slice(-1);
  featured_image.value = ser[0];
}
function removefeaturedimg() {
  featured_image.value = "";
}
</script>

<style>
</style>