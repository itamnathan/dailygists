<template>
  <div class="space-y-8 m-6">
    <div class="grid">
      <label class="capitalize">title</label>

      <input
        v-model="meta_title"
        type="text"
        class="
          border-0 border-b-[0.2px] border-gray-900/50
          focus:ring-0 focus:border-black
        "
        maxlength="60"
      />
    </div>

    <div class="grid">
      <label class="capitalize">description</label>

      <textarea
        v-model="meta_description"
        class="
          border-0 border-b-[0.2px] border-gray-900/50
          focus:ring-0 focus:border-black
        "
        maxlength="160"
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
        auto metas
      </button>
    </div>
  </div>
</template>

<script setup>
import { useEditorStore } from "@/stores/editor";
import { storeToRefs } from "pinia";

const editor = useEditorStore();

const { meta_title, meta_description, title, excerpt } = storeToRefs(editor);

function setmeta() {
  meta_title.value = title.value;
  meta_description.value = excerpt.value;
}
</script>

<style>
</style>