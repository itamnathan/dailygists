<template>
  <TransitionRoot as="template" :show="openModal">
    <Dialog as="div" class="fixed z-[90] inset-0 overflow-y-auto">
      <div
        class="
          flex
          items-end
          justify-center
          min-h-screen
          pt-4
          px-4
          pb-20
          text-center
          sm:block sm:p-0
        "
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <form
            class="
              inline-block
              align-bottom
              bg-white
              rounded-lg
              text-left
              overflow-hidden
              shadow-xl
              transform
              transition-all
              sm:my-8 sm:align-middle sm:max-w-lg
              w-full
            "
            @submit.prevent="uploadImages"
          >
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div
                  class="
                    mx-auto
                    flex-shrink-0 flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-full
                    bg-yellow-100
                    sm:mx-0 sm:h-10 sm:w-10
                  "
                >
                  <ArrowUpTrayIcon
                    class="h-6 w-6 text-yellow-600"
                    aria-hidden="true"
                  />
                </div>

                <div
                  class="
                    mt-3
                    text-center
                    sm:mt-0 sm:ml-5 sm:text-left
                    flex-grow
                  "
                >
                  <DialogTitle
                    as="h3"
                    class="text-lg leading-6 font-medium text-gray-900"
                  >
                    Your Selected Image(s)
                  </DialogTitle>
                  <div
                    class="
                      grid grid-cols-1
                      gap-3
                      pr-1
                      max-h-64
                      overflow-y-auto
                      mt-3
                    "
                  >
                    <div
                      v-for="(image, imageIndex) in images"
                      class="col-span-1 shadow-sm rounded-md"
                    >
                      <div
                        class="
                          border border-gray-200
                          bg-white
                          rounded-md
                          truncate
                        "
                      >
                        <div class="flex-1 flex items-center">
                          <div
                            class="
                              flex-shrink-0 flex
                              items-center
                              justify-center
                              w-20
                              text-white text-sm
                              font-medium
                              rounded-md
                              pl-2
                            "
                          >
                            <img
                              :src="getImagePath(image)"
                              :alt="image.name"
                              class="w-full"
                            />
                          </div>
                          <div class="flex-1 px-4 py-2 text-sm truncate">
                            <p
                              class="
                                text-gray-900
                                font-medium
                                hover:text-gray-600
                                text-left
                              "
                            >
                              {{ image.name }} {{ image }}
                            </p>
                            <p class="text-gray-500 text-left">
                              {{ Math.floor(image.size / 1000) }} KB
                            </p>
                          </div>
                        </div>
                        <div class="mt-3 px-2 pb-2">
                          <div>
                            <Input
                              type="text"
                              class="w-full block"
                              placeholder="File Name"
                              v-model="image_details[imageIndex].name"
                              required
                            />
                          </div>
                          <div class="mt-3 text-left">
                            <Select
                              v-model="image_details[imageIndex].format"
                              required
                            >
                              <option value>-- Image Format --</option>
                              <option value="jpeg">jpeg</option>
                              <option value="gif">gif</option>
                              <option value="png">png</option>
                              <option value="webp">webp</option>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="
                bg-gray-50
                px-4
                py-3
                sm:px-6
                flex
                lg:flex-row-reverse
                flex-col-reverse
                lg:justify-between
              "
            >
              <div class="flex flex-row-reverse mt-3 lg:mt-0">
                <button
                  type="submit"
                  class="
                    w-full
                    inline-flex
                    justify-center
                    rounded-md
                    border border-transparent
                    shadow-sm
                    px-4
                    py-2
                    bg-green-600
                    text-base
                    font-medium
                    text-white
                    hover:bg-green-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-green-500
                    ml-3
                    sm:w-auto
                    text-sm
                  "
                  :disabled="progress"
                  :class="[progress ? 'opacity-50 cursor-not-allowed' : null]"
                >
                  Upload
                </button>
                <button
                  type="button"
                  class="
                    w-full
                    inline-flex
                    justify-center
                    rounded-md
                    border border-gray-300
                    shadow-sm
                    px-4
                    py-2
                    bg-white
                    text-base
                    font-medium
                    text-gray-700
                    hover:bg-gray-50
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-indigo-500
                    sm:w-auto
                    text-sm
                  "
                  @click="$emit('update:openModal', false)"
                  :class="[progress ? 'opacity-50 cursor-not-allowed' : null]"
                  :disabled="progress"
                >
                  Cancel
                </button>
              </div>

              <div v-if="progress" class="flex">
                <progress
                  :value="progress.percentage"
                  max="100"
                  class="overflow-hidden rounded self-center"
                ></progress>
              </div>
            </div>
          </form>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ArrowUpTrayIcon } from "@heroicons/vue/24/outline";
import Input from "./Input.vue";
import Select from "./Select.vue";

export default {
  // name: "PreviewModal",
  props: {
    openModal: {
      type: Boolean,
      default: false,
    },
    images: {
      default: [],
    },
    settings: {
      default: [],
    },
    progress: {
      default: null,
    },
  },
  components: {
    Select,
    Input,
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    ArrowUpTrayIcon,
  },
  methods: {
    getImagePath: function (image) {
      return URL.createObjectURL(image);
    },
    uploadImages: function () {
      this.$emit("update:settings", this.image_details);
      this.$emit("click:upload", true);
    },
  },
  data() {
    return {
      image_details: JSON.parse(JSON.stringify(this.settings)),
    };
  },
};
</script>
<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
