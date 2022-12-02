<template>

    <FrontendLayout>


        <template #aside>
            <div class="mb-6">
                <label class="font-bold mb-6">Tags</label>
                <TagInput />
            </div>

            <button @click="submitThread"
                class=" bg-greenish border border-transparent rounded py-2 px-4 inline-flex justify-center text-lg leading-6 text-white hover:bg-green-600">
                Submit Thread
            </button>
        </template>

        <template #cover>

        </template>
        <template #header>
            <div class="py-4 text-lg font-bold w-full flex justify-between">
                <span>
                    Start New Conversation</span>

                <button @click="submitThread"
                    class="sm:hidden bg-greenish border border-transparent rounded py-2 px-4 inline-flex justify-center text-lg leading-6 text-white hover:bg-green-600">
                    Submit Thread
                </button>
            </div>
        </template>
        <div>
            <textarea placeholder="Title" v-model="form.subject" @input="resize()" ref="textarea" class="
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
                leading-none">
            </textarea>

        </div>

        <div class="sm:hidden  mb-6">
            <label class="font-bold mb-6">Tags</label>
            <TagInput />
        </div>

        <ckeditor :editor="editorck" v-model="form.body" @blur="togglesaving" :config="editorConfig"></ckeditor>
    </FrontendLayout>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue';
export default {
    components: {
        // Use the <ckeditor> component in this view.
        ckeditor: CKEditor.component
    }
}
</script>
<script setup>
import TagInput from "@/components/TagInput.vue";
import { useForm} from "@inertiajs/inertia-vue3";
import { ref,  reactive, } from "vue";
import FrontendLayout from "@/Layouts/FrontendLayout.vue";
import { useEditorStore } from '@/stores/editor'
import { storeToRefs } from 'pinia'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';





const store = useEditorStore()
const { tags } = storeToRefs(store)
const textarea = ref()
function resize() {
    let element = textarea.value;

    element.style.height = "18px";
    element.style.height = element.scrollHeight + "px";
}

const form = useForm({
    subject: null,
    body: null,
    tags: tags.value
})
let editorck = ClassicEditor
const editorConfig = reactive({

    toolbar: {
        items: [
            'heading',
            'bold',
            'italic',
            'link',
            'blockquote',
            'bulletedlist',
            'numberedlist',
            'undo',
            'redo'
        ]
    }
})

function submitThread() {
   
    form.post(route('threads.store'), {
        errorBag: 'submitThread',
        preserveScroll: true,
        // onSuccess: () => clearPhotoFileInput(),
    });
}

</script>

<style>

</style>