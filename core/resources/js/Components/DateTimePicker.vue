<script setup>

import { ref, onMounted, computed } from "vue";
import { useEditorStore } from '@/stores/editor'
import { storeToRefs } from 'pinia'
import { useForm, usePage } from '@inertiajs/inertia-vue3'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


const store = useEditorStore()

const { editor, content,
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
const authors = ref([])

function loadResources() {
    axios.get('/api/authors').then(response => {
        authors.value = response.data;
    });
}
onMounted(() => {
    loadResources()
})

const form = useForm({
    title: null,
    excerpt: null,
    body: null,
    submitted: null,
    channels: null,
    tags: null,
    allow_comment: null,
    hero_image: null,
    approved_at: null,
    users: null,
    meta: {
        keywords: null,
        meta_title: null,
        meta_description: null,
        opengraph_title: null,
        opengraph_description: null,
        opengraph_image: null,
        opengraph_image_width: null,
        opengraph_image_height: null,
        twitter_title: null,
        twitter_description: null,
        twitter_image: null,
        twitter_cardtype: null,
    }
})

function isAdmin(params) {
    if (params == 7 || params == 6 || params == 5) {
        return true
    } else {
        return false
    }
}

const article = computed(() => usePage().props.value.article)
const formInformation = () => {
    // 'articles.update'
    loadform('admin')
    if (editor.value == 'edit') {

        form.put(route('articles.update', { article: article.value.slug }), {
            errorBag: 'formInformation',
            preserveScroll: true,
            onSuccess: () => resetvalue(),
        });
    } else {

        form.post(route('articles.store'), {
            errorBag: 'formInformation',
            preserveScroll: true,
            onSuccess: () => resetvalue(),
        });
    }
};



function loadform(params) {

    form.title = title.value
    form.excerpt = excerpt.value
    form.body = content.value
    form.submitted = status.value
    form.channels = channels.value
    form.tags = tags.value
    form.allow_comment = allow_comment.value
    form.hero_image = featured_image.value
    if (params == 'admin') {
        form.approved_at = approved_at.value
        form.users = author.value
    }

    form.meta.keywords = keywords.value
    form.meta.meta_title = meta_title.value
    form.meta.meta_description = meta_description.value
    form.meta.opengraph_title = opengraph_title.value
    form.meta.opengraph_description = opengraph_description.value
    form.meta.opengraph_image = opengraph_image.value
    form.meta.opengraph_image_width = opengraph_image_width.value
    form.meta.opengraph_image_height = opengraph_image_height.value
    form.meta.twitter_title = twitter_title.value
    form.meta.twitter_description = twitter_description.value
    form.meta.twitter_image = twitter_image.value
    form.meta.twitter_cardtype = twitter_cardtype.value
}

const reviewformInformation = () => {
    loadform('user')

    if (editor.value == 'edit') {
        form.put(route('articles.update', { article: article.value.slug }), {
            errorBag: 'reviewformInformation',
            preserveScroll: true,
            onSuccess: () => resetvalue(),
        });
    } else {

        form.post(route('articles.store'), {
            errorBag: 'reviewformInformation',
            preserveScroll: true,
            onSuccess: () => resetvalue(),
        });
    }
};


function resetvalue() {

    content.value = ''
    excerpt.value = ''
    slug.value = ''
    visibility.value = true
    status.value = false
    allow_comment.value = true
    channels.value = []
    selectedChannels.value = []
    tags.value = []
    selectedTags.value = []
    title.value = ''
    featured_image.value = ''
    approved_at.value = ''
    author.value = ''
    keywords.value = []
    meta_title.value = ''
    meta_description.value = ''
    opengraph_title.value = ''
    opengraph_description.value = ''
    opengraph_image.value = ''
    opengraph_image_width.value = ''
    opengraph_image_height.value = ''
    twitter_title.value = ''
    twitter_description.value = ''
    twitter_image.value = ''
    twitter_cardtype.value = ''
}
</script>

<template>
    <div>
        <div class="grid  py-2" v-if="isAdmin($page.props.auth.user.type)">
            <span>Publish</span>
            <div class="" tabindex="-1">
                <Datepicker v-model="approved_at" inline autoApply utc></Datepicker>
            </div>
        </div>
        <div v-if="isAdmin($page.props.auth.user.type)">

            <div class="mt-6 py-3">Author</div>
            <div class="inline-block relative w-full mb-6">
                <select v-model="author"
                    class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option v-for="auth in authors" :key="auth.id" :value="auth.id">{{ auth.name }}</option>

                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
        </div>
        <div>
            <div class=" py-3">Status</div>
            <div class="inline-block relative w-full mb-6">

                <select v-model="status"
                    class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option :value="false" :selected="status">Draft</option>
                    <option :value="true" :selected="status">Publish</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="flex justify-between items-center pt-2">
            <button type="button" v-if="isAdmin($page.props.auth.user.type)"
                class="border-red-500  rounded border hover:text-white text-red-500 font-bold hover:bg-red-600 py-2 px-6 text-xs">
                Move to trash
            </button>

            <div v-if="!isAdmin($page.props.auth.user.type)" @click="reviewformInformation">
                <button type="submit"
                    class="border-blue-500 hover:border-green-500 bg-it-h1 hover:bg-greenish rounded border py-2 px-2 text-xs text-white font-bold">Submit
                    For Review</button>
            </div>
            <div v-else @click="formInformation">
                <button type="submit"
                    class="border-blue-500 hover:border-green-500 bg-it-h1 hover:bg-greenish rounded border py-2 px-6 text-xs text-white font-bold">
                    Publish
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
