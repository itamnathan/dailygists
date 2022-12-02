<template>
   <div class="bg-teal-100 w-full sm:h-36 h-24 relative bg-cover"
        :style="'background-image: url(' + coverPreview + ');'">

        <input ref="coverInput" type="file" class="hidden" @change="updateCoverPreview">
        <div class="bg-gray-200 text-sm flex items-center justify-center rounded-full opacity-50 w-8 h-8 absolute top-6 right-6"
            @click.prevent="selectNewCover">
            edit
        </div>

        <div class=" w-full 
            flex justify-center h-4
            bg-white backdrop-blur-sm 
            bg-opacity-10  absolute   sm:px-14 px-4  sm:top-[140px] 
            top-[89px]"></div>

        <div class="w-full 
            flex justify-center  sm:px-14 px-4 
            items-center absolute 
            sm:top-[50px] 
            top-[49px]">

            <div class="capitalize text-[46px] font-bold">
                <!-- Profile Photo File Input -->
                <input ref="photoInput" type="file" class="hidden" @change="updatePhotoPreview">

                <!-- New Profile Photo Preview -->
                <div class="mt-2 relative">
                    <span
                        class="block sm:w-40 sm:h-40 rounded-full w-20 h-20 border-4 border-teal-400 bg-cover bg-no-repeat bg-center"
                        :style="'background-image: url(\'' + photoPreview + '\');'" />


                    <div class="bg-gray-200 text-sm flex items-center
                     justify-center rounded-full opacity-50 w-8 h-8 
                     absolute sm:top-6 top-0
                      sm:right-6 right-0" @click.prevent="selectNewPhoto">
                        edit
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style>

</style>