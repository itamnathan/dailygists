<template>

<AdminLayout title="Category">

    <div class="p-6 bg-gray-200 h-screen">
      <div class="bg-white  max-h-screen rounded-lg shadow-lg relative p-4">
        <div class="absolute left-0 top-0 w-full h-full z-10" v-if="loading">
          <div
            class="
              bg-gray-400 bg-opacity-30
              grid
              content-center
              justify-center
              h-full
            "
          >
            <div class="inline">
              <svg
                class="animate-spin h-7 w-7 text-green-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div class="col-span-1 md:col-span-3 lg:col-span-4 sticky">
          <div class="flex justify-between pb-3 border-b-2">
            <div class="space-x-2">
              <SimpleModal
                buttonclas="buttonclas"
              >
                <template #openbutton>
                  <FolderIcon
                    class="h-4 w-4 lg:h-5 lg:w-5"
                    aria-hidden="true"
                  />
                </template>

                <div class="pb-3 lg:pr-3 lg:pb-0 lg:h-full overflow-y-auto">
                  <button
                    class="inline-flex w-full px-2 pt-1"
                    @click="setNewPath('')"
                    :class="[currentPath == '' ? 'bg-gray-200 rounded' : null]"
                  >
                    <PhotoIcon class="h-5 w-5" aria-hidden="true" />
                    Home
                  </button>
                  <div class="ml-5 mt-1">
                    <template v-if="fileManagerData.directories.length">
                      <directory-nav
                        :directories="fileManagerData.directories"
                        :current="currentPath"
                        v-on:change:directory="setNewPath($event)"
                      />
                    </template>
                  </div>
                </div>
              </SimpleModal>
              <button
                type="button"
                class="
                  inline-flex
                  items-center
                  p-1.5
                  lg:p-2
                  border border-transparent
                  shadow-sm
                  text-sm
                  leading-4
                  font-medium
                  rounded-md
                  text-white
                  bg-indigo-600
                  hover:bg-indigo-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
                @click="createNewFolderClicked"
                title="create new folder"
              >
                <FolderPlusIcon
                  class="h-4 w-4 lg:h-5 lg:w-5"
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                class="
                  inline-flex
                  items-center
                  p-1.5
                  lg:p-2
                  border border-transparent
                  shadow-sm
                  text-sm
                  leading-4
                  font-medium
                  rounded-md
                  text-white
                  bg-indigo-600
                  hover:bg-indigo-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
                title="remove folder"
                :disabled="currentPath == ''"
                :class="[
                  currentPath == '' ? 'opacity-50 cursor-not-allowed' : null,
                ]"
                @click="deleteFolderClicked"
              >
                <FolderMinusIcon
                  class="h-4 w-4 lg:h-5 lg:w-5"
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                class="
                  inline-flex
                  items-center
                  p-1.5
                  lg:p-2
                  border border-transparent
                  shadow-sm
                  text-sm
                  leading-4
                  font-medium
                  rounded-md
                  text-white
                  bg-indigo-600
                  hover:bg-indigo-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
                title="upload image(s)"
                @click="uploadBtnClicked"
                ref="uploadBtn"
              >
                <ArrowUpTrayIcon
                  class="h-4 w-4 lg:h-5 lg:w-5"
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                class="
                  inline-flex
                  items-center
                  p-1.5
                  lg:p-2
                  border border-transparent
                  shadow-sm
                  text-sm
                  leading-4
                  font-medium
                  rounded-md
                  text-white
                  focus:outline-none focus:ring-2
                  bg-indigo-600
                  hover:bg-indigo-700
                  focus:ring-offset-2 focus:ring-indigo-500
                "
                :disabled="!selectedFiles.length"
                :class="[
                  selectedFiles.length ? null : 'opacity-50 cursor-not-allowed',
                ]"
                @click="deleteImagesClicked"
                title="delete image(s)"
              >
                <TrashIcon class="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
              </button>
            </div>

            <div class="space-x-2 flex">
              <button
                type="button"
                class="
                  inline-flex
                  items-center
                  self-center
                  p-1.5
                  lg:p-2
                  border-transparent
                  shadow-sm
                  text-sm
                  leading-4
                  font-medium
                  rounded
                  border
                  text-white
                  bg-red-600
                  hover:bg-red-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-red-500
                "
                v-if="selectedFiles.length"
                @click="selectedFiles.splice(0)"
                title="select"
              >
                <CheckCircleIcon
                  class="mr-1 lg:mr-2 h-4 w-4 lg:h-5 lg:w-5"
                  aria-hidden="true"
                />
                <span class="mt-0.5 text-xs lg:text-md pr-1">Deselect</span>
              </button>

              <button
                type="button"
                class="
                  inline-flex
                  items-center
                  p-1.5
                  lg:p-2
                  border border-transparent
                  shadow-sm
                  text-sm
                  leading-4
                  font-medium
                  rounded-md
                  text-gray-400
                  bg-gray-100
                  hover:bg-gray-200
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-green-500
                  focus:text-green-500
                  focus:bg-green-100
                "
                @click="fileManagerSetup()"
              >
                <ArrowPathIcon
                  class="h-4 w-4 lg:h-5 lg:w-5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>

        <div class="flex mt-2">
          <div class="sm:w-2/12 hidden md:block">
            <div class="pb-3 lg:pr-3 lg:pb-0 lg:h-full overflow-y-auto">
              <button
                class="inline-flex w-full px-2 pt-1"
                @click="setNewPath('')"
                :class="[currentPath == '' ? 'bg-gray-200 rounded' : null]"
              >
                <PhotoIcon class="h-5 w-5" aria-hidden="true" />
                Home
              </button>
              <div class="ml-5 mt-1">
                <template v-if="fileManagerData.directories.length">
                  <directory-nav
                    :directories="fileManagerData.directories"
                    :current="currentPath"
                    v-on:change:directory="setNewPath($event)"
                  />
                </template>
              </div>
            </div>
          </div>
          <div class="sm:w-10/12">
            <div class="grid grid-cols-4 sm:grid-cols-12 gap-3 overscroll-x-contain">
              <template v-if="fileManagerData.files.length">
                <div
                  class="col-span-2 h-full overscroll-auto"
                  v-for="file in fileManagerData.files"
                  :key="file.name"
                >
                  <div
                    class="
                      p-2
                      border-2
                      rounded
                      relative
                      bg-white
                      transition-all
                      h-full
                      flex
                      cursor-pointer
                    "
                    :class="[
                      inputChecked(file.url)
                        ? 'selected-inner-shadow border-green-500'
                        : null,
                    ]"
                    @click="CheckselectedFiles(file.url)"
                  >
                    <div
                      class="
                        absolute
                        top-1
                        right-1
                        border border-green-500
                        bg-white
                        text-green-500
                        rounded-full
                        z-10
                        cursor-pointer
                      "
                      v-if="inputChecked(file.url)"
                    >
                      <CheckIcon class="w-6 h-6" />
                    </div>
                    <div
                      class="
                        absolute
                        top-0
                        right-0
                        w-full
                        h-full
                        bg-gray-50
                        cursor-pointer
                        bg-opacity-50
                        flex
                        items-center
                        justify-center
                        p-2
                      "
                      v-if="inputChecked(file.url)"
                    >
                      <p class="text-xs font-bold break-all text-center">
                        {{ file.name }}
                      </p>
                    </div>
                    <label :for="file.name" class="self-center">
                      <img
                        :src="file.url"
                        :alt="file.name"
                        class="w-full cursor-pointer"
                      />
                    </label>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="col-span-10 p-3">This folder is empty...</div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
     

      <template v-if="deleteModal.open">
        <DeleteModal
          v-model:open-modal="deleteModal.open"
          v-on:click:confirm="deleteModal.callback"
          :header="deleteModal.header"
          :body="deleteModal.body"
          confirm="Yes , Delete"
        />
      </template>
      <template v-if="inputModal.open">
        <InputModal
          v-model:open-modal="inputModal.open"
          :header="inputModal.header"
          :body="inputModal.body"
          :confirm="inputModal.confirm"
          v-on:click:confirm="submitNewFolder($event)"
        />
      </template>
      <form action="" @submit.prevent="" class="hidden">
        <input
          type="file"
          multiple
          name="images"
          @change="previewSelectedImages"
          accept="image/*"
          ref="uploadImagesInput"
        />
      </form>
      <template v-if="previewModal.open">
        <PreviewModal
          v-model:open-modal="previewModal.open"
          v-model:settings="uploadForm.settings"
          :progress="uploadForm.progress"
          v-on:click:upload="uploadSelectedImages"
          :images="uploadForm.images"
        />
      </template>

</AdminLayout>
</template>
  

<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import {
  CheckIcon,
  FolderPlusIcon,
  ArrowUpTrayIcon,
  TrashIcon,
  PhotoIcon,
  FolderMinusIcon,
  FolderIcon,
  CheckCircleIcon,
  ArrowPathIcon,
} from "@heroicons/vue/24/outline";
import DirectoryNav from "./components/DirectoryNav.vue";
import SimpleModal from "@/components/SimpleModal.vue";
import DeleteModal from "./components/DeleteModal.vue";
import InputModal from "./components/InputModal.vue";
import PreviewModal from "./components/PreviewModal.vue";
import { reactive, ref, onMounted, watchEffect } from "vue";

const props = defineProps({
  openFileManager: {
    type: Boolean,
    default: true,
  },
  multiple: {
    type: Boolean,
    default: true,
  },
});




const uploadImagesInput = ref(null);
const loading = ref(true);
var selectedFiles = reactive([]);
const currentPath = ref("");
const deleteModal = reactive({
  open: false,
  header: "",
  body: "",
  callback: null,
});

const inputModal = reactive({
  open: false,
  header: "",
  body: "",
  confirm: "",
});

const openmobilefolder = ref(false);

const uploadForm = reactive({
  images: [],
  path: "",
  settings: [],
  progress: null,
});

const previewModal = reactive({
  open: false,
});
const uploadBtn = ref(null);
const fileManagerData = reactive({
  directories: [],
  files: [],
});

const CheckselectedFiles = (next) => {
  if (selectedFiles.includes(next)) {
    DeleteselectedFiles(next);
  } else {
    CreateselectedFiles(next);
  }
};

const CreateselectedFiles = (next) => {
  selectedFiles.push(next);
};
const DeleteselectedFiles = (idx) => {
  selectedFiles.splice(
    selectedFiles.findIndex((a) => a === idx),
    1
  );
};

onMounted(() => {
  fileManagerSetup();
});
//initialize the file manager
function fileManagerSetup() {
  let vue = this;
  let data = {
    path: currentPath.value,
  };
  axios.post(route("laravel-file-manager.setup"), data).then((response) => {
    fileManagerData.directories = response.data.directories;
    fileManagerData.files = response.data.files.sort(function (x, y) {
      return y.time - x.time;
    });

    loading.value = false;
  });
}
//check if image is selected
function inputChecked(fileUrl) {
  if (selectedFiles.length) {
    return selectedFiles.includes(fileUrl);
  } else {
    return false;
  }
}

//change current directory
function setNewPath(path) {
  loading.value = true;
  currentPath.value = path;
  selectedFiles.splice(0);
  fileManagerSetup();
}
//create new folder functions
function createNewFolderClicked() {
  inputModal.open = true;
  inputModal.header = "Create New Folder?";
  inputModal.body = `you are creating new folder in "home/${currentPath.value}".
                      type your new folder name and click the "Create Folder" button.`;
  inputModal.confirm = "Create Folder";
}

function submitNewFolder(name) {
  loading.value = true;
  // ...inputModal
  inputModal.open = false;
  let data = {
    name: name,
    path: currentPath.value,
  };

  axios
    .post(route("laravel-file-manager.create-folder"), data)
    .then((response) => {
      selectedFiles.splice(0);
      fileManagerSetup();
    });
}

//delete images functions
function deleteImagesClicked() {
  deleteModal.open = true;
  deleteModal.header = `Delete Image(s)?`;
  deleteModal.body = `you are deleting ${selectedFiles.length} image(s). are you sure?`;
  deleteModal.callback = deleteSelectedFiles;
}
function deleteSelectedFiles() {
  loading.value = true;
  deleteModal.open = false;

  let data = {
    images: selectedFiles,
  };
  axios
    .post(route("laravel-file-manager.delete-images"), data)
    .then((response) => {
      selectedFiles.splice(0);
      fileManagerSetup();
    });
}

//delete current folder functions
function deleteFolderClicked() {
  deleteModal.open = true;
  deleteModal.header = `Delete Folder?`;
  deleteModal.body = `you are deleting "${currentPath.value}" folder. are you sure?`;
  deleteModal.callback = deleteSelectedFolder;
}
function deleteSelectedFolder() {
  loading.value = true;
  // this.deleteModal = {
  // ...this.deleteModal,
  deleteModal.open = false;
  // };

  let data = {
    folder: currentPath.value,
  };

  axios
    .post(route("laravel-file-manager.delete-folder"), data)
    .then((response) => {
      selectedFiles.splice(0);
      currentPath.value = "";
      fileManagerSetup();
    });
}

//upload new images functions
function uploadBtnClicked() {
  // let uploadImagesInput = document.getElementById("uploadImagesInput");
  // if (uploadImagesInput != null) {
  //   uploadImagesInput.click();
  // }
  // uploadImagesInput.value = null;
  uploadImagesInput.value.click();
}
function previewSelectedImages(event) {
  let imageFiles = event.target.files;
  if (imageFiles.length) {
    let settings = [];
    for (let i = 0; i < imageFiles.length; i++) {
      settings.push({
        name: null,
        format: null,
      });
    }

    uploadForm.images = imageFiles;
    uploadForm.settings = settings;
    previewModal.open = true;
  }
}
function uploadSelectedImages() {
  loading.value = true;
  // let vue = this;
  let formData = new FormData();
  for (let i = 0; i < uploadForm.images.length; i++) {
    formData.append(`images[${i}]`, uploadForm.images[i]);
  }

  formData.append("path", currentPath.value);
  formData.append("settings", JSON.stringify(uploadForm.settings));

  axios
    .post(route("laravel-file-manager.upload-images"), formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: function (progressEvent) {
        uploadForm.progress = {
          percentage: Math.round(
            (100 * progressEvent.loaded) / progressEvent.total
          ),
        };
      },
    })
    .then((response) => {
      previewModal.open = false;
      selectedFiles.splice(0);
      uploadForm.images = [];
      uploadForm.path = "";
      uploadForm.settings = [];
      uploadForm.progress = null;
      fileManagerSetup();
    });
}

watchEffect(function selectedFiles(value) {
  if (props.multiple == false && value.length > 1) {
    selectedFiles = [value.at(-1)];
  }
});
</script>
        
<script>
// import { ref } from "vue";
// import { Dialog, DialogOverlay, div, TransitionRoot } from "@headlessui/vue";

// import axios from "axios";
// export default {
//   name: "FileManager",

//   methods: {},
// };
</script>




<style scoped>
.selected-inner-shadow {
  -webkit-box-shadow: inset 0px 0px 3px 0px rgba(34, 197, 94, 1);
  -moz-box-shadow: inset 0px 0px 3px 0px rgba(34, 197, 94, 1);
  box-shadow: inset 0px 0px 3px 0px rgba(34, 197, 94, 1);
}
</style>
  