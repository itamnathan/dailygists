<template>
  <TransitionRoot as="template" :show="openFileManager">
    <Dialog as="div" class="fixed z-[70] inset-0 overflow-y-auto" :initialFocus="uploadBtn">
      <div class="
          flex
          items-end
          justify-center
          min-h-screen
          pt-4
          px-4
          pb-20
          text-center
          sm:block sm:p-0
        ">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
          leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="
              inline-block
              align-bottom
              bg-white
              rounded-lg
              text-left
              overflow-hidden
              shadow-xl
              transform
              transition-all
              sm:my-8 sm:align-middle sm:max-w-5xl
              w-full
            ">
            <div class="absolute left-0 top-0 w-full h-full z-[90]" v-if="loading">
              <div class="
                  bg-gray-400 bg-opacity-30
                  grid
                  content-center
                  justify-center
                  h-full
                ">
                <div class="inline">
                  <svg class="animate-spin h-7 w-7 text-green-300" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                    </path>
                  </svg>
                </div>
              </div>
            </div>

            <div class="
                grid grid-cols-1
                md:grid-cols-3
                lg:grid-cols-4
                py-4
                px-4
                gap-3
              ">
              <div class="col-span-1 md:col-span-3 lg:col-span-4">
                <div class="flex justify-between pb-3 border-b-2">
                  <div class="space-x-2">
                    <SimpleModal buttonclas="buttonclas">
                      <template #openbutton>
                        <FolderIcon class="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
                      </template>

                      <div class="pb-3 lg:pr-3 lg:pb-0 lg:h-full overflow-y-auto">
                        <button class="inline-flex w-full px-2 pt-1" @click="setNewPath('')"
                          :class="[currentPath == '' ? 'bg-gray-200 rounded' : null]">
                          <PhotoIcon class="h-5 w-5" aria-hidden="true" />
                          Home
                        </button>
                        <div class="ml-5 mt-1">
                          <template v-if="fileManagerData.directories.length">
                            <directory-nav :directories="fileManagerData.directories" :current="currentPath"
                              v-on:change:directory="setNewPath($event)" />
                          </template>
                        </div>
                      </div>
                    </SimpleModal>
                    <button type="button" class="
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
                      " @click="createNewFolderClicked" title="create new folder">
                      <FolderPlusIcon class="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
                    </button>
                    <button type="button" class="
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
                      " title="remove folder" :disabled="currentPath == ''" :class="[
                        currentPath == ''
                          ? 'opacity-50 cursor-not-allowed'
                          : null,
                      ]" @click="deleteFolderClicked">
                      <FolderMinusIcon class="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
                    </button>

                    <button type="button" class="
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
                      " title="upload image(s)" @click="uploadBtnClicked" ref="uploadBtn">
                      <ArrowUpTrayIcon class="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
                    </button>

                    <button type="button" class="
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
                      " :disabled="!selectedFiles.length" :class="[
                        selectedFiles.length
                          ? null
                          : 'opacity-50 cursor-not-allowed',
                      ]" @click="deleteImagesClicked" title="delete image(s)">
                      <TrashIcon class="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
                    </button>
                  </div>

                  <div class="space-x-2 flex">
                    <div class="sm:flex grid sm:space-x-2 space-y-2 md:space-y-0">
                    <button type="button" class="
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
                        " v-if="selectedFiles.length" @click="selectedFiles.splice(0)" title="select">
                      <CheckCircleIcon class="mr-1 lg:mr-2 h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
                      <span class="mt-0.5 text-xs lg:text-md pr-1">Deselect</span>
                    </button>

                    <button type="button" class="
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
                        bg-green-600
                        hover:bg-green-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-green-500
                      " v-if="selectedFiles.length"
                      @click="updateselectedImages(selectedFiles); selectedFiles.splice(0)" title="select">
                      <CheckCircleIcon class="mr-1 lg:mr-2 h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
                      <span class="mt-0.5 text-xs lg:text-md pr-1">Select</span>
                    </button>
                    </div>
                    <button type="button" class="
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
                        bg-red-600
                        
                        hover:bg-red-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-red-500
                      " 
                       title="close" @click="
                        $emit('update:openFileManager', false);
                        selectedFiles.splice(0);
                      ">
                      <XMarkIcon :class="[
                        selectedFiles.length
                          ? 'h-12 w-12 '
                          : null,
                      ]"  class="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-span-1 hidden md:block">
                <div class="
                    pb-3
                    border-b-2
                    lg:pr-3 lg:pb-0 lg:border-r-2 lg:border-b-0 lg:h-full
                    overflow-y-auto
                  ">
                  <button class="inline-flex items-center w-full px-2 pt-1" @click="setNewPath('')"
                    :class="[currentPath == '' ? 'bg-gray-200 rounded' : null]">
                    <PhotoIcon class="h-5 w-5" aria-hidden="true" />
                    <span class="mx-1">Home</span>
                  </button>
                  <div class="ml-5 mt-1">
                    <template v-if="fileManagerData.directories.length">
                      <directory-nav :directories="fileManagerData.directories" :current="currentPath"
                        v-on:change:directory="setNewPath($event)" />
                    </template>
                  </div>
                </div>
              </div>


              <div class="col-span-1 md:col-span-2 lg:col-span-3">
                <form action="" @submit.prevent="" class="p-3 h-96 overflow-y-auto">
                  <div class="
                      grid grid-cols-4
                      sm:grid-cols-6
                      lg:grid-cols-10
                      gap-3
                    ">
                    <template v-if="fileManagerData.files.length">
                      <div class="col-span-2 h-full overscroll-auto" v-for="file in fileManagerData.files"
                        :key="file.name">
                        <div class="
                      p-2
                      border-2
                      rounded
                      relative
                      bg-white
                      transition-all
                      h-full
                      flex
                      cursor-pointer
                    " :class="[
                      inputChecked(file.url)
                        ? 'selected-inner-shadow border-green-500'
                        : null,
                    ]" @click="CheckselectedFiles(file.url)">
                          <div class="
                        absolute
                        top-1
                        right-1
                        border border-green-500
                        bg-white
                        text-green-500
                        rounded-full
                        z-10
                        cursor-pointer
                      " v-if="inputChecked(file.url)">
                            <CheckIcon class="w-6 h-6" />
                          </div>
                          <div class="
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
                      " v-if="inputChecked(file.url)">
                            <p class="text-xs font-bold break-all text-center">
                              {{ file.name }}
                            </p>
                          </div>
                          <label :for="file.name" class="self-center">
                            <img :src="file.url" :alt="file.name" class="w-full cursor-pointer" />
                          </label>
                        </div>
                      </div>
                    </template>
                    <template v-else>
                      <div class="col-span-10 p-3">This folder is empty...</div>
                    </template>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>

      <template v-if="deleteModal.open">
        <DeleteModal v-model:open-modal="deleteModal.open" v-on:click:confirm="deleteModal.callback"
          :header="deleteModal.header" :body="deleteModal.body" confirm="Yes , Delete" />
      </template>
      <template v-if="inputModal.open">
        <InputModal v-model:open-modal="inputModal.open" :header="inputModal.header" :body="inputModal.body"
          :confirm="inputModal.confirm" v-on:click:confirm="submitNewFolder($event)" />
      </template>
      <form action="" @submit.prevent="" class="hidden">
        <input type="file" multiple name="images" @change="previewSelectedImages" accept="image/*"
          ref="uploadImagesInput" />
      </form>
      <template v-if="previewModal.open">
        <PreviewModal v-model:open-modal="previewModal.open" v-model:settings="uploadForm.settings"
          :progress="uploadForm.progress" v-on:click:upload="uploadSelectedImages" :images="uploadForm.images" />
      </template>
    </Dialog>
  </TransitionRoot>
</template>
<script setup>
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  CheckIcon,
  FolderPlusIcon,
  ArrowUpTrayIcon,
  TrashIcon,
  PhotoIcon,
  FolderIcon,
  FolderMinusIcon,
  CheckCircleIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import DirectoryNav from "./DirectoryNav.vue";
import DeleteModal from "./DeleteModal.vue";
import InputModal from "./InputModal.vue";
import PreviewModal from "./PreviewModal.vue";
import SimpleModal from "@/components/SimpleModal.vue";
import { reactive, ref, onMounted, watchEffect, } from "vue";
import { useMediaStore } from '@/stores/media'
import { storeToRefs } from 'pinia'





const store = useMediaStore()
const { selectedmedias } = storeToRefs(store)



const props = defineProps({
  openFileManager: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: true,
  },
});
// const emitter = inject("emitter");
// const { emit } = useContext()
const emit = defineEmits(["update:openFileManager", "update:selectedImages"]);
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

function updateselectedImages(newVal) {
  emit("update:selectedImages", newVal);
  emit("update:openFileManager", false);
}
const inputModal = reactive({
  open: false,
  header: "",
  body: "",
  confirm: "",
});

// emitter.on("update:selectedImages", (value) => {
// setNewPath('') 
// selectedFiles.splice(0);
// });
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

//initialize the file manager
function fileManagerSetup() {
  // let vue = this;
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

const CheckselectedFiles = (next) => {
  if (selectedFiles.includes(next)) {
    DeleteselectedFiles(next);
  } else {
    CreateselectedFiles(next);
  }
};

const CreateselectedFiles = (next) => {
  
  // selectedmedias.value.length = 0
  selectedmedias.value.push(next);
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

watchEffect(function selectedFile(value) {
  if (props.multiple == false && value.length > 1) {
    selectedFile = [value.at(-1)];
  }
});
</script>

<style scoped>
.selected-inner-shadow {
  -webkit-box-shadow: inset 0px 0px 3px 0px rgba(34, 197, 94, 1);
  -moz-box-shadow: inset 0px 0px 3px 0px rgba(34, 197, 94, 1);
  box-shadow: inset 0px 0px 3px 0px rgba(34, 197, 94, 1);
}
</style>
