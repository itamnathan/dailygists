<template>
  <div class="space-y-8 m-6">
    <div class="grid">
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
        v-if="!opengraph_image"
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
        v-if="opengraph_image"
      >
        <img :src="opengraph_image" class="h-40 w-40" />
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
    </div>
    <div class="grid">
      <label class="capitalize">title</label>

      <input
        v-model="opengraph_title"
        type="text"
        class="
          border-0 border-b-[0.2px] border-gray-900/50
          focus:ring-0 focus:border-black
        "
      />
    </div>

    <div class="grid">
      <label class="capitalize">description</label>

      <textarea
        v-model="opengraph_description"
        class="
          border-0 border-b-[0.2px] border-gray-900/50
          focus:ring-0 focus:border-black
        "
      ></textarea>
    </div>

    <div class="grid justify-end">
      <button
        @click="setmeta()"
        class="
          border
          rounded
          border-greenish
          w-44
          hover:bg-greenish
          capitalize
          hover:text-white
        "
      >
        copy metas
      </button>
    </div>
  </div>
</template>

<script setup>
import FileManager from "@/Pages/Admin/Media/components/FileManager.vue";
import { ref } from "vue";
import { useEditorStore } from "@/stores/editor";
import { useMediaStore } from "@/stores/media";
import { storeToRefs } from "pinia";

const editor = useEditorStore();
const media = useMediaStore();
const { selectedmedias } = storeToRefs(media);

const {
  opengraph_title,
  opengraph_description,
  opengraph_image,
  opengraph_image_width,
  opengraph_image_height,
  meta_title,
  meta_description,
  featured_image,
} = storeToRefs(editor);

const open = ref(false);
function setFeaturedImg() {
  opengraph_image.value = selectedmedias.value.slice(-1);
  // opengraph_image.value = selectedmedias.value
}
function removefeaturedimg() {
  // opengraph_image.value.length = 0
  opengraph_image.value = "";
}

function setmeta() {
  opengraph_image.value = featured_image.value[0][0];
  opengraph_image.value = featured_image.value;
  opengraph_title.value = meta_title.value;
  opengraph_description.value = meta_description.value;
}
</script>

<style>
</style>