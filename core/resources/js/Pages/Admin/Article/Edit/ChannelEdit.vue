<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import { useForm } from "@inertiajs/inertia-vue3";

import FileManager from "@/Pages/Admin/Media/components/FileManager.vue";
import { useMediaStore } from "@/stores/media";
import { storeToRefs } from "pinia";

import { ref } from "vue";

const media = useMediaStore();
const { selectedmedias } = storeToRefs(media);

const open = ref(false);

function setCover() {
  form.image = selectedmedias.value.slice(-1);
}

function removefeaturedimg() {
  form.image = "";
}
const gradientColor = ref(
  "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)"
);
const form = useForm({
  id: props.channel.id,
  name: props.channel.name,
  slug: props.channel.slug,
  description: props.channel.description,
  image: props.channel.image,
  color: props.channel.color,
});
const props = defineProps(["channel"]);
</script>
            
<template>
  <AdminLayout>
    <div id="col-container " class="flex m-4">
      <div id="col-left" class="px-2">
        <div class="col-wrap">
          <div class="form-wrap">
            <h2 class="font-bold mb-6">Add New Channel</h2>
            <form
              @submit.prevent="
                form.post(route('backend.article.channel.update', form.id), {
                  preserveScroll: true,
                  onSuccess: () => {
                    form.defaults({
                      id: null,
                      name: null,
                      slug: null,
                      description: null,
                      image: null,
                      color: null,
                    });

                    form.reset();
                  },
                })
              "
            >
              <div class="grid">
                <label for="tag-name">Name</label>
                <input
                  id="name"
                  type="text"
                  size="40"
                  class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    p-2.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  "
                  v-model="form.name"
                  required
                />
                <p class="text-xs mb-4">
                  The name is how it appears on your site.
                </p>
              </div>
              <div class="grid">
                <label for="tag-slug">Slug</label>
                <input
                  id="slug"
                  type="text"
                  class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    p-2.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  "
                  size="40"
                  v-model="form.slug"
                />
                <p class="text-xs mb-4">
                  The “slug” is the URL-friendly version of the name. It is
                  usually all lowercase and contains only letters, numbers, and
                  hyphens.
                </p>
              </div>
              <div class="grid">
                <!-- <label for="parent">Parent Channel</label>
                <select v-model="form.parent" id="parent" class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    p-2.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  ">
                  <option value="">None</option>
                  <option :value="list.id" v-for="list in categories" :key="list.id" :selected="list.parent_id">
                    <span v-if="list.parent_id != null">&nbsp;&nbsp;&nbsp;</span>{{ list.name }}
                  </option>
                  <ListDetails :comments="categories" :parent="form.parent"></ListDetails>
                </select>
                <p class="text-xs mb-4">
                  Categories, unlike tags, can have a hierarchy. You might have
                  a Jazz channel, and under that have children categories for
                  Bebop and Big Band. Totally optional.
                </p> -->
              </div>
              <div>
                <label>Color</label>
                <color-picker
                  :gradientColor="gradientColor"
                  :pureColor="form.color"
                />
              </div>
              <div class="grid space-y-6 my-4">
                <label>Cover</label>
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
                  v-if="!form.image"
                >
                  <button type="button" @click="open = !open" class="text-sm">
                    Set featured image
                  </button>

                  <FileManager
                    :open-file-manager="open"
                    :multiple="false"
                    v-on:update:openFileManager="open = $event"
                    v-on:update:selectedImages="setCover"
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
                  v-if="form.image"
                >
                  <img :src="form.image" class="h-40 w-40" />
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
                <label for="tag-description">Description</label>
                <textarea
                  id="description"
                  rows="5"
                  cols="40"
                  class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    p-2.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500
                  "
                  v-model="form.description"
                ></textarea>
                <p class="text-xs mb-4">
                  The description is not prominent by default; however, some
                  themes may show it.
                </p>
              </div>

              <button
                type="submit"
                class="
                  text-white
                  bg-blue-700
                  hover:bg-blue-800
                  focus:ring-4 focus:outline-none focus:ring-blue-300
                  font-medium
                  rounded-lg
                  text-sm
                  w-full
                  sm:w-auto
                  px-5
                  py-2.5
                  text-center
                  dark:bg-blue-600
                  dark:hover:bg-blue-700
                  dark:focus:ring-blue-800
                "
                :disabled="form.processing"
              >
                Add New Channel
                <span class="spinner"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <!-- /col-left -->
    </div>
  </AdminLayout>
</template>
            