<template>
    <TransitionRoot as="template" :show="openModal">
        <Dialog as="div" class="fixed z-[90] inset-0 overflow-y-auto" :initialFocus="cancelBtn">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <TransitionChild as="template"
                                 enter="ease-out duration-300"
                                 enter-from="opacity-0"
                                 enter-to="opacity-100"
                                 leave="ease-in duration-200"
                                 leave-from="opacity-100"
                                 leave-to="opacity-0">
                    <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>
                <!-- This element is to trick the browser into centering the modal contents. -->
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <TransitionChild as="template" enter="ease-out duration-300"
                                 enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                 enter-to="opacity-100 translate-y-0 sm:scale-100"
                                 leave="ease-in duration-200"
                                 leave-from="opacity-100 translate-y-0 sm:scale-100"
                                 leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">

                    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl
                    transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                                <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12
                                rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <ExclamationTriangleIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
                                </div>
                                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900">
                                        {{header}}
                                    </DialogTitle>
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500">
                                            {{body}}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:px-6 flex flex-row-reverse">
                            <button type="button" class="w-full inline-flex justify-center rounded-md border
                            border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white
                            hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500
                            ml-3 sm:w-auto text-sm" @click="$emit('click:confirm' , true)">
                                {{confirm}}
                            </button>
                            <button type="button" class="w-full inline-flex justify-center rounded-md border
                            border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700
                            hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                            sm:w-auto text-sm" @click="$emit('update:openModal' , false)" ref="cancelBtn">
                                Cancel
                            </button>
                        </div>
                    </div>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script>
    import {ref} from 'vue';
    import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
    import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline';

    export default {
        // name:"DeleteModal",
        props:{
            openModal:{
                type:Boolean,
                default:false
            },
            header:{
                type:String,
                required:true
            },
            body:{
                type:String,
                required:true
            },
            confirm:{
                type:String,
                required:true
            }
        },
        setup(){
            let cancelBtn = ref(null);
            return{
                cancelBtn
            }
        },
        components: {
            Dialog,
            DialogOverlay,
            DialogTitle,
            TransitionChild,
            TransitionRoot,
            ExclamationTriangleIcon,
        }
    }
</script>
