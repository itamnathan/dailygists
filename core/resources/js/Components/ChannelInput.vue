<template>

  <!-- <div> -->

  <VueMultiselect v-model="selectedChannels" :options="options" :multiple="true" :close-on-select="true"
    placeholder="Choose Some channels" label="name" track-by="id" :max="3" />

</template>
<script setup>
import { ref, watch, onMounted } from "vue";

import VueMultiselect from 'vue-multiselect'
import { useEditorStore } from '@/stores/editor'
import { storeToRefs } from 'pinia'

const options = ref([])
const store = useEditorStore()
const { channels, selectedChannels } = storeToRefs(store)

watch(
  () => selectedChannels.value,
  () => {
    channels.value.length = 0
    selectedChannels.value.forEach(myFunction)
  }
);


function myFunction(value) {

  // let values = Object.values(value['id']);
  // Array.prototype.push.apply(channels.value, values);
  channels.value.push(value['id'])
}

onMounted(() => {
  // onchannelsChange
  loadResources()
})

function loadResources() {
  axios.get('/api/channels').then(response => {
    options.value = response.data;
  });
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.css">

</style>