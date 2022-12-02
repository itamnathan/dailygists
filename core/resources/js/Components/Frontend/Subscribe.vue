<template>

    <div class="w-full wrapper p-10 border-t-[4px] border-green-600 bg-gray-100">
        <div class="z-0">
            <h1 class="text-2xl font-bold">Get an email whenever {{ user.name }} publishes.</h1>

<div class="pt-6 space-y-4">

            <Subscribe/>
</div>
            <h2 class="pr-4 text-xs pt-6">By signing up, you will create a  {{ $page.props.setting.title }} account if you don’t
                already
                have one. Review our <Link :href="route('privacy')" class="cursor-pointer underline">Privacy Policy</Link> for more
                information about our privacy practices.</h2>
        </div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import { defineAsyncComponent } from 'vue'


const Subscribe = defineAsyncComponent(() => import('@/Components/Subscribe.vue'))
const props = defineProps(['user'])
</script>

<style>

</style>