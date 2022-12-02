<template>

    <teleport to="#modals">
        <div>
            <div class="flex justify-end   overscroll-contain z-[999]" v-if="opencomment">
                <div @click="toggleOpen()"
                    class="fixed inset-0 bg-gray-700 z-50   duration-500  bg-opacity-20 ease-in-out transition-all  overflow-y-hidden flex justify-center items-center ">
                </div>
                <div ref="commentmodal"
                    class=" z-[100] no-scrollbar fixed sm:top-0 top-10 right-0  ease-in-out duration-500 min-h-full w-full sm:w-[27%] rounded-xl sm:rounded-none bg-white shadow-xl">
                    <!-- scale-100 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full  md:m-auto   md:w-auto-->
                    <div class="w-full no-scrollbar  max-h-screen overflow-y-auto overscroll-y-auto  px-4">
                        <div class="flex justify-between  relative  items-center pt-4">
                            <div class="am ax">
                                <h2 class="text-[24px] font-bold">Responses ({{ comments.length }})</h2>
                            </div>
                            <div class="flex justify-between items-center">

                                <a class=" text-gray-600 hover:text-blue-700 ">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="currentColor">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M11.99 5.04c.26-.21.64-.22.91-.01.97.72 1.77 1.21 2.6 1.54.83.32 1.72.48 2.89.5.41.01.74.35.74.76-.02 3.62-.43 6.26-1.45 8.21-1.03 1.98-2.66 3.21-4.97 4.08a.75.75 0 0 1-.53 0c-2.25-.87-3.86-2.1-4.9-4.07-1.02-1.95-1.46-4.59-1.48-8.22 0-.41.33-.75.75-.76 1.19-.02 2.1-.18 2.92-.5.82-.32 1.6-.81 2.52-1.53zm.46.9c-.9.69-1.71 1.21-2.62 1.56a8.9 8.9 0 0 1-3.02.57c.03 3.45.46 5.82 1.36 7.51.88 1.69 2.25 2.77 4.28 3.57 2.1-.8 3.47-1.89 4.34-3.57.89-1.7 1.3-4.07 1.34-7.51a8.8 8.8 0 0 1-3-.57 11.8 11.8 0 0 1-2.68-1.56zm0 9.15a2.67 2.67 0 1 0 0-5.34 2.67 2.67 0 0 0 0 5.34zm0 1a3.67 3.67 0 1 0 0-7.34 3.67 3.67 0 0 0 0 7.34zm-1.82-3.77l.53-.53.91.92 1.63-1.63.52.53-2.15 2.15-1.44-1.44z">
                                        </path>
                                    </svg>
                                </a>
                                <button class=" text-red-400 hover:text-red-700 " @click="toggleOpen()">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="currentColor" class="kk">
                                        <path
                                            d="M18.13 6.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="">
                            <div v-if="$page.props.isLoggedIn"
                                class="absolute sm:bottom-0 bottom-10 left-0 right-0 z-10 w-full">
                                <label for="chat" class="sr-only">Your message</label>
                                <div class="flex items-center px-1 py-[6px] rounded-lg bg-gray-50 dark:bg-gray-700">

                                    <button type="button"
                                        class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        <span class="sr-only">Add emoji</span>
                                    </button>
                                    <textarea id="chat" rows="1" v-model="form.body"
                                        class="block   w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Your message..."></textarea>
                                    <button @click="sendReply"
                                        class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                                        <svg aria-hidden="true" class="w-6 h-6 rotate-90" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z">
                                            </path>
                                        </svg>
                                        <span class="sr-only">Send message</span>
                                    </button>
                                </div>
                            </div>
                            <div class="absolute sm:bottom-0 bottom-10 left-0 right-0 z-10 w-full" v-else>
                                <div class="text-center  px-2 bg-it-h1 text-white">
                                    Please
                                    <Link :href="route('register')" class="text-yellowish font-bold">Register</Link> Or
                                    <Link :href="route('login')" class="text-yellowish font-bold">Login</Link> to
                                    participate on the discussions
                                </div>
                            </div>
                            <div class=" mb-16">
                                <div id="exampleWrapper" class="relative pt-6">
                                    <ol class=" border-l border-gray-200 dark:border-gray-700">

                                        <li class="mb-4 ml-4 " v-for="comment in comments" :key="comment.uuid">
                                            <span
                                                class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                                <img class="rounded-full shadow-lg"
                                                    :src="comment.author_relation.profile_photo_url">
                                            </span>
                                            <div
                                                class="ml-[4px] relative px-2 py-1 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">

                                                <div class="justify-between  items-center  flex ">

                                                    <ago :datess="comment.created_at"
                                                        classes="mb-1 text-[9px] font-normal text-gray-400 order-last sm:mb-0"
                                                        befor=""></ago>

                                                    <div class="text-sm font-normal text-gray-500 dark:text-gray-300">
                                                        @{{ comment.author_relation.username }}

                                                    </div>
                                                    <!-- <editmodal>
                                                        <comment-edit-form :comment="comment"> </comment-edit-form>
                                                        <delete-comment :comment="comment"></delete-comment>
                                                        <a class=""
                                                            href="{{ route('threads.unsubscribe', $thread->slug()) }}">
                                                            Unsubscribe
                                                        </a>
                                                        @elsecan(App\Policies\ThreadPolicy::SUBSCRIBE, $thread)
                                                        <a class=""
                                                            href="{{ route('threads.subscribe', $thread->slug()) }}">
                                                            Subscribe
                                                        </a>
                                                        <a class=""
                                                            href="{{ route('threads.subscribe', $thread->slug()) }}">
                                                            Report spam
                                                        </a>
                                                    </editmodal> -->
                                                </div>
                                                <div>{{ comment.body }}</div>

                                                
                                                <div class="absolute  -right-4 top-0">
                                                    <contenteditmodal>
                                                        <div class="p-2 rounded hover:bg-gray-100">
                                                            <button @click="open = !open">
                                                                <x-heroicon-o-ellipsis-horizontal class="w-6 h-6" />
                                                                <span x-text="edit ? 'Cancel editing' : 'Edit'">
                                                                    Report Spam
                                                                </span>
                                                            </button>
                                                        </div>
                                                        <div class="flex p-3 rounded hover:bg-gray-100">

                                                            <button @click="edit = !edit; open = false;">
                                                                <x-heroicon-o-pencil class="w-6 h-6" />
                                                                <span x-text="edit ? 'Cancel editing' : 'Edit'">
                                                                    Edit
                                                                </span>
                                                            </button>
                                                        </div>
                                                        <div class="flex  p-3 rounded hover:bg-gray-100">
                                                            <button
                                                                @click="activeModal = 'markAsSpam-{{ $reply->id }}'">
                                                                <x-heroicon-o-exclamation-triangle
                                                                    class="w-6 h-6 text-red-500" />
                                                                Mark as spam
                                                            </button>
                                                        </div>
                                                        <div class="flex p-3 rounded hover:bg-gray-100">
                                                            <button
                                                                @click="activeModal = 'deleteReply-{{ $reply->id }}'">
                                                                <x-heroicon-o-trash class=" w-6 h-6 text-red-500" />
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </contenteditmodal>
                                                </div>
                                            </div>
                                        </li>

                                    </ol>
                                </div>
                                <div class="flex items-center justify-center text-center text-red-500">
                                    <InfiniteLoading @infinite="load" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script setup>
import { ref } from "vue";
import { useToggle } from '@vueuse/shared';
import { Link, useForm } from '@inertiajs/inertia-vue3';
import { useCommentStore } from '@/stores/comment';
import { storeToRefs } from 'pinia';
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";
import { defineAsyncComponent } from 'vue'


const Ago = defineAsyncComponent(() => import('@/Components/Ago.vue'))
const Editmodal = defineAsyncComponent(() => import('@/Components/Editmodal.vue'))
const contenteditmodal = defineAsyncComponent(() => import('@/Components/contenteditmodal.vue'))

const props = defineProps(['slug', 'type', 'id'])
const store = useCommentStore()
const { opencomment } = storeToRefs(store)
const comments = ref([])

let page = 1;


function pushcomment(value) {

    comments.value.push(value);
}
const load = async $state => {

    if (props.type == 'threads') {

        if (comments.value.length < 10) $state.complete();
        axios.get(route('threads.replies', { thread: props.slug, 'page': page })).then(response => {

            response.data.data.forEach(pushcomment);
            if (response.data.data.length < 10) {
                $state.complete();
            } else {
                $state.loaded();
            }
            page++;
        });
    } else if (props.type == 'articles') {

        axios.get(route('articles.replies', { article: props.slug, 'page': page })).then(response => {

            response.data.data.forEach(pushcomment);
            if (response.data.data.length < 10) {
                $state.complete();
            } else {
                $state.loaded();
            }
            page++;
        });
    }

};
const toggleOpen = useToggle(opencomment)
const form = useForm({
    body: null,
    replyable_id: props.id,
    replyable_type: props.type
});


function sendReply() {
    axios.post(route('replies.store'), form).then(response => {

        comments.value = response.data.data;
        form.body = null;
    });
}

</script>

<style >
.sr-only {
    clip: rect(0, 0, 0, 0);
    border-width: 0;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}
</style>