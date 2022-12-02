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

import { ref, onMounted, reactive, computed, onBeforeMount, watch } from "vue";
import { Inertia } from '@inertiajs/inertia';
import { useForm, Link, usePage, Head } from "@inertiajs/inertia-vue3";

import SecondaryButton from '@/Components/SecondaryButton.vue';
const user = computed(() => usePage().props.value.auth.user)
const form = useForm({
    _method: 'PUT',
    avatar: null,
    cover: null,
});
const photoPreview = ref(user.value.profile_photo_url);
const photoInput = ref(null);
const coverPreview = ref(user.value.profile_cover_url);
const coverInput = ref(null);

const updateProfileInformation = () => {
    if (photoInput.value) {
        form.avatar = photoInput.value.files[0];
    } 
    if (coverInput.value) {
        form.cover = coverInput.value.files[0];
    }

    form.post(route('settings.profile.avatar.update'), {
        errorBag: 'updateProfileInformation',
        preserveScroll: true,
        onSuccess: () => clearPhotoFileInput(),
    });
};

const selectNewCover = () => {
    coverInput.value.click();
};

const selectNewPhoto = () => {
    photoInput.value.click();
};
const updateCoverPreview = () => {
    const cover = coverInput.value.files[0];

    if (!cover) return;

    const reader = new FileReader();

    reader.onload = (e) => {
        coverPreview.value = e.target.result;
    };

    reader.readAsDataURL(cover);
    updateProfileInformation()
};

const updatePhotoPreview = () => {
    const photo = photoInput.value.files[0];

    if (!photo) return;

    const reader = new FileReader();

    reader.onload = (e) => {
        photoPreview.value = e.target.result;
    };

    reader.readAsDataURL(photo);
    updateProfileInformation()

};
const deleteCover = () => {
    Inertia.delete(route('current-user-cover.destroy'), {
        preserveScroll: true,
        onSuccess: () => {
            coverPreview.value = null;
            clearCoverFileInput();
        },
    });
};

const deletePhoto = () => {
    Inertia.delete(route('current-user-photo.destroy'), {
        preserveScroll: true,
        onSuccess: () => {
            photoPreview.value = null;
            clearPhotoFileInput();
        },
    });
};
const clearCoverFileInput = () => {
    if (coverInput.value?.value) {
        coverInput.value.value = null;
    }
};
const clearPhotoFileInput = () => {
    if (photoInput.value?.value) {
        photoInput.value.value = null;
    }
};
</script>

<style>

</style>