<template>
    <div @click="modal = true">
        <slot name="button" />
    </div>
    <teleport to="#modals">

        <transition name="fade">
            <div v-if="modal" class=" relative">
                <div
                    class="fixed z-10 h-screen w-screen inset-0  bg-gray-100 backdrop-blur-md bg-opacity-60    flex justify-center  items-center ">
                </div>
                <div class=" z-40 flex justify-center mb-4 w-full fixed top-0 mt-1" @click="modal = false">
                    <button class="border-4 w-36  border-teal-900  rounded-full m-2"></button>
                </div>

                <div class="scale-100
                                z-[10]
                                md:z-20 
                                mt-6  no-scrollbar
                                    max-h-screen
                                    w-full
                                    transform
                                    overflow-y-auto overscroll-y-auto
                                        rounded-t-3xl 
                                        fixed 
                                    -translate-x-1/2 -translate-y-1/2 
                                    top-1/2
                                    left-1/2 bg-white shadow-2xl ">

                    <div class="mt-8 border-t-[2px]  border-b-0 border-teal-600 pt-4  rounded-t-3xl  mb-6  px-3">
                        <slot />
                    </div>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
const target = ref(null)

const modal = ref(false)
// onClickOutside(target, (event) =>
//     modal.value = false)
</script>
<style scoped>
.fade-enter-active {
    transition: all 0.1s ease-in;
}

.fade-leave-active {
    transition: all 0.1s ease-in;
}

.fade-enter,
.fade-enter-from,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    transform: translate(0px, 100px) rotate(0deg) !important;
    opacity: 0;
}
</style>