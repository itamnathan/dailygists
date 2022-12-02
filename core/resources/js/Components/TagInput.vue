<template>

  <VueMultiselect v-model="selectedTags" :options="options" :multiple="true" :close-on-select="true"
    placeholder="Choose Some Tags" label="name" track-by="id" :max="3" />

</template>
<script setup>
import { ref, watch, onMounted } from "vue";

import VueMultiselect from 'vue-multiselect'
import { useEditorStore } from '@/stores/editor'
import { storeToRefs } from 'pinia'

const options = ref([])
const store = useEditorStore()
const { tags,selectedTags } = storeToRefs(store)


watch(
  () => selectedTags.value,
  () => {
    tags.value.length = 0
    selectedTags.value.forEach(myFunction)
  }
);


function myFunction(value) {
  tags.value.push(value['id'])
}

onMounted(() => {
  loadResources()
})

function loadResources() {
  axios.get('/api/tags').then(response => {
    options.value = response.data;
  });
}

</script>
<style src="vue-multiselect/dist/vue-multiselect.css">

</style>