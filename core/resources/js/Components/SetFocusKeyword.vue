
<template>
  <div class="flex justify-between items-center mx-2">
    <label for="components-form-token-input-1" class="text-sm pt-4"
      >Add New Keyword</label
    >

    <div v-if="showCount" class="count">
      <span>{{ keywords.length }}</span> Keywords
    </div>
  </div>

  <div class="pt-4" tabindex="-1">
    <div class="tag-input" :class="{ 'with-count': showCount }">
      <input
        v-model="newKey"
        type="text"
        :list="id"
        autocomplete="off"
        @keydown.enter="addTag(newKey)"
        @keydown.,="addTag(newKey)"
        @keydown.prevent.tab="addTag(newKey)"
        @keydown.delete="newKey.length || removeTag(keywords.length - 1)"
        class="
          border-0 border-b-[0.2px] border-gray-900/50
          focus:ring-0 focus:border-black
        "
      />

      <p
        id="components-form-token-suggestions-howto-1"
        class="text-xs pt-4 text-gray-400"
      >
        Separate with commas or the Enter key.
      </p>

      <ul class="flex-wrap mt-4 no-scrollbar" ref="tagsUl">
        <li
          v-for="(tag, index) in keywords"
          :key="tag"
          class="
            tag
            flex
            justify-center
            items-center
            m-1
            font-medium
            py-1
            px-2
            bg-white
            rounded-full
            text-teal-700
            bg-teal-100
            border border-teal-300
          "
          :class="{ duplicate: tag === duplicate }"
        >
          <div class="text-xs font-normal leading-none max-w-full flex-initial">
            {{ tag }}
          </div>
          <div class="flex flex-auto flex-row-reverse">
            <div @click="removeTag(index)" class="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="
                  feather feather-x
                  cursor-pointer
                  hover:text-teal-400
                  rounded-full
                  w-4
                  h-4
                  ml-2
                "
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

  This post is Pillar Content
  <div>
    <h4>Basic SEO</h4>
    6 Errors
    <ol class="text-xs grid">
      <li>Add Focus Keyword to the SEO title.</li>
      <li>Add Focus Keyword to your SEO Meta Description.</li>
      <li>Use Focus Keyword in the URL.</li>
      <li>Use Focus Keyword at the beginning of your content.</li>
      <li>Use Focus Keyword in the content.</li>
      <li>Content should be 600-2500 words long.</li>
    </ol>

    <h4>Additional</h4>
    9 Errors
    <ol class="text-xs grid">
      <li>Use Focus Keyword in subheading(s) like H2, H3, H4, etc..</li>
      <li>Add an image with your Focus Keyword as alt text.</li>
      <li>Keyword Density is 0. Aim for around 1% Keyword Density.</li>
      <li>URL unavailable. Add a short URL.</li>
      <li>Link out to external resources.</li>
      <li>Add DoFollow links pointing to external resources.</li>
      <li>Add internal links in your content.</li>
      <li>Set a Focus Keyword for this content.</li>
      <li>Use Content AI to optimise the Post.</li>
    </ol>
    <h4>Title Readability</h4>
    4 Errors
    <ol class="text-xs grid">
      <li>Use the Focus Keyword near the beginning of SEO title.</li>
      <li>
        Your title doesn't contain a positive or a negative sentiment word.
      </li>
      <li>Your title doesn't contain a power word. Add at least one.</li>
      <li>Your SEO title doesn't contain a number.</li>
    </ol>

    <h4>Content Readability</h4>
    3 Errors
    <ol class="text-xs grid">
      <li>Use Table of Content to break-down your text.</li>
      <li>Add short and concise paragraphs for better readability and UX.</li>
      <li>Add a few images and/or videos to make your content appealing.</li>
    </ol>
  </div>
</template>



<script setup>
import { ref, watch, nextTick, onMounted } from "vue";

import { useEditorStore } from "@/stores/editor";
import { storeToRefs } from "pinia";
const props = defineProps({
  name: { type: String, default: "" },
  allowCustom: { type: Boolean, default: true },
  showCount: { type: Boolean, default: true },
});
const emit = defineEmits();
// Tags

const store = useEditorStore();
const { keywords } = storeToRefs(store);
const newKey = ref("");

const id = Math.random().toString(36).substring(7);

const addTag = (key) => {
  if (!key) return; // prevent empty tag
  // only allow predefined tags when allowCustom is false
  if (!props.allowCustom) return;
  // return early if duplicate
  if (keywords.value.includes(key)) {
    handleDuplicate(key);
    return;
  }
  keywords.value.push(key);
  newKey.value = ""; // reset newKey
};
const removeTag = (index) => {
  keywords.value.splice(index, 1);
};

// handling duplicates
const duplicate = ref(null);
const handleDuplicate = (key) => {
  duplicate.value = key;
  setTimeout(() => (duplicate.value = null), 1000);
  newKey.value = "";
};

// positioning and handling tag change
const paddingLeft = ref(10);
const tagsUl = ref(null);
const onTagsChange = () => {
  // position cursor
  const extraCushion = 15;
  paddingLeft.value = tagsUl.value.clientWidth + extraCushion;
  // scroll to end of tags
  tagsUl.value.scrollTo(tagsUl.value.scrollWidth, 0);
  // emit value on tags change
  emit("update:modelValue", keywords.value);
};
watch(keywords, () => nextTick(onTagsChange), { deep: true });
// onMounted(onTagsChange);

onMounted(() => {
  onTagsChange;
});
</script>
<style scoped>
.tag-input {
  position: relative;
}

ul {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 2;
  padding: 0;
  top: 0;
  bottom: 0;
  left: 10px;
}

.tag {
  white-space: nowrap;
  transition: 0.1s ease background;
}

input {
  width: 100%;
  padding: 10px;
}

.delete {
  color: white;
  cursor: pointer;
}

@keyframes shake {
  10%,
  90% {
    transform: scale(0.9) translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: scale(0.9) translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: scale(0.9) translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: scale(0.9) translate3d(4px, 0, 0);
  }
}

.tag.duplicate {
  @apply bg-red-100 border border-red-300 text-red-700;
}

.tag.duplicate {
  animation: shake 1s;
}

.count {
  display: block;
  font-size: 0.8rem;
  white-space: nowrap;
}

.count span {
  background: #eee;
  padding: 2px;
  border-radius: 2px;
}
</style>