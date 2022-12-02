<template>
  <div class="bg-gray-200 h-screen">
    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div>
            <div
              class="p-6 h-screen sm:px-20 bg-white border-b border-gray-200"
            >
              <div class="my-6 px-6 flex items-center">
                <h1 class="text-2xl font-bold m-2">Posts</h1>
                <button
                  class="
                    border
                    rounded-lg
                    px-2
                    py-2
                    text-blue-500
                    border-blue-800
                  "
                  @click="open = !open"
                >
                  Open
                </button>
              </div>

              <FileManager
                :open-file-manager="open"
                :multiple="true"
                v-on:update:openFileManager="open = $event"
                v-on:update:selectedImages="images = $event"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- <script>
import { FileManager } from "./components/FileManager";
export default {
  data() {
    return {
      open: false,
      images: [],
    };
  },
  components: {
    FileManager,
  },
};
</script> -->
<script setup>
import FileManager from "./components/FileManager.vue";
import { ref } from "vue";
</script>

<style>
</style>