<script setup>
import { defineAsyncComponent } from "vue";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { ref, onMounted, reactive, computed, onBeforeMount } from "vue";
import { Inertia } from "@inertiajs/inertia";
import { useForm, Link, usePage } from "@inertiajs/inertia-vue3";

import FileManager from "@/Pages/Admin/Media/components/FileManager.vue";

import { useMediaStore } from "@/stores/media";
import { storeToRefs } from "pinia";

const media = useMediaStore();
const { selectedmedias } = storeToRefs(media);

const open = ref(false);

function setFav() {
  let ser = selectedmedias.value.slice(-1);
  settings.value.favicon = ser[0];
}
function removefavicon() {
  settings.value.favicon = "";
}
const openlogo = ref(false);

function setlogo() {
  let ser = selectedmedias.value.slice(-1);
  settings.value.logo = ser[0];
}
function removelogo() {
  settings.value.logo = "";
}

const ActionMessage = defineAsyncComponent(() =>
  import("@/Components/ActionMessage.vue")
);
const FormSection = defineAsyncComponent(() =>
  import("@/Components/FormSection.vue")
);
const InputError = defineAsyncComponent(() =>
  import("@/Components/InputError.vue")
);
const InputLabel = defineAsyncComponent(() =>
  import("@/Components/InputLabel.vue")
);
const PrimaryButton = defineAsyncComponent(() =>
  import("@/Components/PrimaryButton.vue")
);
const TextInput = defineAsyncComponent(() =>
  import("@/Components/TextInput.vue")
);

const settings = computed(() => usePage().props.value.setting);
const form = useForm({
  _method: "PUT",
  title: settings.value.title,
  logo: settings.value.logo,
  footer: settings.value.footer,
  scripts: settings.value.scripts,
  favicon: settings.value.favicon,
});

const verificationLinkSent = ref(null);
const sendEmailVerification = () => {
  verificationLinkSent.value = true;
};

const updateProfileInformation = () => {
  form.logo = settings.value.logo;
  form.favicon = settings.value.favicon;
  form.post(route("backend.settings.update"), {
    errorBag: "updateProfileInformation",
    preserveScroll: true,
    // onSuccess: () => clearPhotoFileInput(),
  });
};
</script>
        
<template>
  <AdminLayout>
    <div class="sm:mx-6 mx-3">
      <FormSection @submitted="updateProfileInformation">
        <template #title> Site Information </template>

        <template #description>
          Update your account's profile information and email address.
        </template>

        <template #form>
          <!-- Site Title -->
          <div class="col-span-6 sm:col-span-4">
            <InputLabel for="title" value="Site Title" />
            <TextInput
              id="title"
              v-model="form.title"
              type="text"
              class="mt-1 block w-full"
            />
            <InputError :message="form.errors.title" class="mt-2" />
          </div>

          <!-- logo -->
          <div class="col-span-6 sm:col-span-4">
            <InputLabel for="logo" value="Logo" />
            <div
              type="file"
              class="
                bg-gray-100
                grid
                items-center
                hover:bg-gray-200
                py-12
                px-6
                rounded-lg
              "
              v-if="!settings.logo"
            >
              <button
                type="button"
                @click="openlogo = !openlogo"
                class="text-sm"
              >
                Set logo
              </button>
            </div>

            <div
              type="file"
              class="
                bg-gray-100
                grid
                justify-center
                items-center
                hover:bg-gray-200
                py-2
                px-1
                rounded-lg
              "
              v-if="settings.logo"
            >
              <img :src="settings.logo" class="h-40 w-40" />
              <button
                class="
                  text-sm text-red-500
                  hover:text-white
                  py-1
                  px-6
                  border border-red-500
                  rounded
                  hover:bg-red-500
                "
                @click="removelogo"
              >
                Remove
              </button>
            </div>
          </div>

          <!-- favicon -->
          <div class="col-span-6 sm:col-span-4">
            <InputLabel for="favicon" value="FavIcon" />
            <div
              type="file"
              class="
                bg-gray-100
                grid
                items-center
                hover:bg-gray-200
                py-12
                px-6
                rounded-lg
              "
              v-if="!settings.favicon"
            >
              <button type="button" @click="open = !open" class="text-sm">
                Set Favicon
              </button>
            </div>

            <div
              type="file"
              class="
                bg-gray-100
                grid
                justify-center
                items-center
                hover:bg-gray-200
                py-2
                px-1
                rounded-lg
              "
              v-if="settings.favicon"
            >
              <img :src="settings.favicon" class="h-40 w-40" />
              <button
                class="
                  text-sm text-red-500
                  hover:text-white
                  py-1
                  px-6
                  border border-red-500
                  rounded
                  hover:bg-red-500
                "
                @click="removefavicon"
              >
                Remove
              </button>
            </div>
          </div>

          <!-- scripts -->
          <div class="col-span-6 sm:col-span-4">
            <InputLabel for="bio" value="scripts" />
            <textarea
              id="scripts"
              v-model="form.scripts"
              class="
                border-gray-300
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
                rounded-md
                shadow-sm
                mt-1
                block
                w-full
              "
            ></textarea>
            <InputError :message="form.errors.scripts" class="mt-2" />
          </div>

          <!-- footer -->
          <div class="col-span-6 sm:col-span-4">
            <InputLabel for="footer" value="Footer Text" />
            <textarea
              id="footer"
              v-model="form.footer"
              class="
                border-gray-300
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
                rounded-md
                shadow-sm
                mt-1
                block
                w-full
              "
            ></textarea>
            <InputError :message="form.errors.footer" class="mt-2" />
          </div>
        </template>

        <template #actions>
          <ActionMessage :on="form.recentlySuccessful" class="mr-3">
            Saved.
          </ActionMessage>

          <PrimaryButton
            :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing"
          >
            Save
          </PrimaryButton>
        </template>
      </FormSection>
    </div>
    <FileManager
      v-model:open-file-manager="open"
      :multiple="false"
      v-on:update:openFileManager="open = $event"
      v-on:update:selectedImages="setFav"
    />
    <FileManager
      v-model:open-file-manager="openlogo"
      :multiple="false"
      v-on:update:openFileManager="openlogo = $event"
      v-on:update:selectedImages="setlogo"
    />
  </AdminLayout>
</template>
        