<template>
  <FrontendLayout>
    <template #aside>
      <postsetting></postsetting>
    </template>

    <!-- <template #header> -->

    <!-- <div class="flex w-full items-center justify-between">
        <Link href="route('backend.dashboard')" class="h-14 w-14 bg-gray-900 grid place-items-center">
        <HomeIcon class="h-6 w-6 text-greenish" />
        </Link> -->
    <!-- <div class="flex items-center">
          <button class="
              hover:shadow-lg
              saving
              rounded-lg
              m-1
              px-4
              py-2
              flex justify-between items-center  w-full
            " v-if="saving">
            <CloudArrowUpIcon class="h-6 w-6" />
            <span class="px-1">Saving</span>
          </button>

           <button class="
              bg-blue-900
              text-white
              hover:shadow-lg
              rounded-lg
              m-1
              px-12
              py-2
            " @click="publish">
            Publish
          </button> 
        </div> -->

    <!-- -->

    <!-- </div> -->

    <!-- </template> -->

    <div class="fixed z-[10] top-1 right-14 sm:hidden flex">
      <button
        class="
          hover:shadow-lg
          saving
          rounded-lg
          m-1
          px-4
          py-2
          flex
          justify-between
          items-center
          w-full
        "
        v-if="saving"
      >
        <CloudArrowUpIcon class="h-6 w-6" />
        <span class="px-1">Saving</span>
      </button>
      <SetPostSettings></SetPostSettings>
    </div>

    <div class="">
      <div>
        <div>
          <textarea
            placeholder="Title"
            v-model="title"
            @input="resize()"
            ref="textarea"
            class="
              no-scrollbar
              w-full
              py-1
              overscroll-x-none
              resize-none
              border-0
              focus:ring-0
              font-serif
              bg-transparent
              text-[44px]
              font-semibold
              px-0
              leading-none
            "
          ></textarea>
        </div>
        <div>
          <ckeditor
            :editor="editorck"
            v-model="content"
            @blur="togglesaving"
            :config="editorConfig"
          ></ckeditor>
        </div>
      </div>
    </div>
  </FrontendLayout>
</template>

<script>
import FrontendLayout from "@/Layouts/FrontendLayout.vue";
import CKEditor from "@ckeditor/ckeditor5-vue";
export default {
  components: {
    // Use the <ckeditor> component in this view.
    ckeditor: CKEditor.component,
  },
};
</script>
<script setup>
import { defineAsyncComponent } from "vue";
import UploadAdapter from "@/composable/UploadAdapter";
// import  Editor  from 'ckeditor5-custom-build/build/ckeditor';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEditorStore } from "@/stores/editor";
import { storeToRefs } from "pinia";
import { HomeIcon, CloudArrowUpIcon } from "@heroicons/vue/24/solid";
import { Link, usePage } from "@inertiajs/inertia-vue3";
import { ref, reactive, computed, onBeforeMount } from "vue";
import mitt from "mitt";

const SetPostSettings = defineAsyncComponent(() =>
  import("@/Components/SetPostSettings.vue")
);
const postsetting = defineAsyncComponent(() =>
  import("@/Components/partial/postsetting.vue")
);

const emitter = mitt();

const entry = computed(() => usePage().props.value.entry);
const url = computed(() => usePage().props.value.url);
const store = useEditorStore();
const {
  editor,
  content,
  keywords,
  meta_title,
  meta_description,
  opengraph_title,
  opengraph_description,
  opengraph_image,
  twitter_title,
  twitter_description,
  twitter_cardtype,
  twitter_image,
  opengraph_image_width,
  opengraph_image_height,
  excerpt,
  slug,
  visibility,
  allow_comment,
  channels,
  tags,
  title,
  featured_image,
  publish_date,
  author,
  published,
} = storeToRefs(store);
onBeforeMount(() => {
  editor.value = computed(() => usePage().props.value.editor);
  // fillForm(entry.value);
});

const saving = ref(false);
const textarea = ref();
function resize() {
  let element = textarea.value;

  element.style.height = "18px";
  element.style.height = element.scrollHeight + "px";
}

emitter.on("changed", togglesaving());

function togglesaving() {
  setTimeout(() => (saving.value = true), 1000);
  setTimeout(() => (saving.value = false), 1500);
  // debounce(svel, 500)
  // onInput
}
function svel() {
  // emitter.all.clear()
  emitter.off("changed");
  saving.value = false;

  console.log("eared emittcltter");
}

let editorck = ClassicEditor;
const editorConfig = reactive({
  extraPlugins: [uploader],
});

function uploader(editorck) {
  editorck.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return new UploadAdapter(loader);
  };
}
</script>




<style>
.saving {
  animation: pulse-bg 1s infinite;
}

@keyframes pulse-bg {
  0% {
    @apply text-teal-300;
  }

  50% {
    @apply text-teal-600;
  }

  100% {
    @apply text-teal-300;
  }
}
</style>