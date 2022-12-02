<template>

    <label class="text-xs py-4" for="inspector-textarea-control-1">Write an excerpt (optional)</label>
    <textarea class="w-full rounded" id="inspector-textarea-control-1" v-model="excerpt" rows="4"></textarea>
</template>

<script setup>

import { useEditorStore } from '@/stores/editor'
import { storeToRefs } from 'pinia'
const store = useEditorStore()
const { excerpt } = storeToRefs(store)
</script>

<style>

</style>