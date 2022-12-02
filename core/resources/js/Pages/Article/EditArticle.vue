<template>
  <FrontendLayout>


    <template #aside>
      <postsetting></postsetting>

    </template>





    <div class="fixed z-[10] top-1 right-14 sm:hidden flex">
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
      <SetPostSettings></SetPostSettings>
    </div>


    <div class="">
      <div>
        <div>
          <textarea placeholder="Title" v-model="title" @input="resize()" ref="textarea" class="
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
      "></textarea>

        </div>
        <div>
          <ckeditor :editor="editorck" v-model="content" @blur="togglesaving" :config="editorConfig"></ckeditor>

        </div>
      </div>
    </div>
  </FrontendLayout>
</template>

<script>
import UploadAdapter from '@/composable/UploadAdapter';
import FrontendLayout from "@/Layouts/FrontendLayout.vue";
import CKEditor from '@ckeditor/ckeditor5-vue';
export default {
  components: {
    // Use the <ckeditor> component in this view.
    ckeditor: CKEditor.component
  }
}
</script>
<script setup>

import postsetting from '@/Components/partial/postsetting.vue';
// import  Editor  from 'ckeditor5-custom-build/build/ckeditor';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useEditorStore } from '@/stores/editor'
import { storeToRefs } from 'pinia'
import { HomeIcon, CloudArrowUpIcon } from "@heroicons/vue/24/solid";
import { useForm, Link, usePage } from "@inertiajs/inertia-vue3";
import { ref, onMounted, reactive, computed, onBeforeMount } from "vue";
import SetPostSettings from '@/Components/SetPostSettings.vue';
import mitt from 'mitt'


const emitter = mitt()
const entry = computed(() => usePage().props.value.article)
const url = computed(() => usePage().props.value.url)
const store = useEditorStore()
const { editor,content,
  excerpt,
  slug,
  visibility,
  status,
  allow_comment,
  channels, selectedChannels,
  tags, selectedTags,
  title,
  featured_image,
  approved_at,
  author,
  keywords,
  meta_title,
  meta_description,
  opengraph_title,
  opengraph_description,
  opengraph_image,
  opengraph_image_width,
  opengraph_image_height,
  twitter_title,
  twitter_description,
  twitter_image,
  twitter_cardtype,
} = storeToRefs(store)
onBeforeMount(() => {
  editor.value = computed(() => usePage().props.value.editor)
  fillForm(entry.value);
})
function myFunction(value) {
  tags.value.push(value['id'])
}
function myChannel(value) {
  channels.value.push(value['id'])
}

onMounted(() => {
  selectedTags.value = computed(() => usePage().props.value.selectedTags)
  selectedTags.value.forEach(myFunction)
  selectedChannels.value = computed(() => usePage().props.value.selectedChannels)
  selectedChannels.value.forEach(myChannel)
})

let editorck = ClassicEditor
const editorConfig = reactive({
  extraPlugins: [uploader],
  
})
function uploader(editorck)
{
  editorck.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    return new UploadAdapter(loader);
  };
}

const saving = ref(false)
const textarea = ref(null)
function resize() {
  let element = textarea.value;

  element.style.height = "18px";
  element.style.height = element.scrollHeight + "px";
}


emitter.on('changed', togglesaving())

function togglesaving() {

  setTimeout(() => saving.value = true, 1000);
  setTimeout(() => saving.value = false, 1500);
  // debounce(svel, 500)
  // onInput

}
function svel() {
  // emitter.all.clear()
  emitter.off('changed')
  saving.value = false

  console.log('eared emittcltter')
}





/**
 * Fill the form.
 */
function fillForm(data) {
  // this.form.id = data.id;
  approved_at.value = data.approved_at;
  slug.value = data.slug;
  author.value = data.author_relation.id;


  if (data.meta.keywords == null) {
    keywords.value = [];
  } else {
    keywords.value = data.meta.keywords;
  }
  title.value = data.title;
  content.value = data.body;
  excerpt.value = data.excerpt;
  slug.value = data.slug;
  selectedTags.value = data.selectedTags
  selectedChannels.value = data.selectedChannels;
  featured_image.value = data.hero_image;
  visibility.value = data.visibility;
  allow_comment.value = data.allow_comment;
  meta_title.value = data.meta.meta_title;
  meta_description.value = data.meta.meta_description;
  opengraph_title.value = data.meta.opengraph_title;
  opengraph_description.value = data.meta.opengraph_description;
  opengraph_image.value = data.meta.opengraph_image;
  opengraph_image_width.value = data.meta.opengraph_image_width;
  opengraph_image_height.value = data.meta.opengraph_image_height;
  twitter_title.value = data.meta.twitter_title;
  twitter_description.value = data.meta.twitter_description;
  twitter_cardtype.value = data.meta.twitter_cardtype;
  twitter_image.value = data.meta.twitter_image;



}

</script>

<style>

</style>