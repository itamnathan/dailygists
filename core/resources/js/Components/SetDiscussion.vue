<template>
    <span class="">
        <input id="inspector-checkbox-control-14" class="" type="checkbox" v-model="allow_comment"
            :checked="allow_comment" />
    </span>
    <label class="px-2" for="inspector-checkbox-control-14">
        Allow comments
    </label>
</template>

<script setup>

import { useEditorStore } from '@/stores/editor'
import { storeToRefs } from 'pinia'





const editor = useEditorStore()
const { allow_comment } = storeToRefs(editor)


</script>

<style>

</style>