<template>
  <div class="flex items-center" v-if="isMobile">
    <div class="text-right sm:hidden px-[5px]">
      <halfmodal>
        <template #button>
          <div
            class="
              inline-flex
              w-full
              justify-center
              rounded-md
              text-gray-500
              py-2
              text-sm
              font-medium
            "
          >
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </template>

        <div
          v-for="(navigation, index) in headernav"
          :key="index"
          class="px-1 py-1"
        >
          <Link
            :href="navigation.href"
            :class="[
              active ? 'bg-violet-500 text-black' : 'text-gray-900',
              'group  space-x-2 flex w-full items-center rounded-md px-2 py-2 text-sm',
            ]"
          >
            <span v-html="navigation.svg" class="text-black"> </span>
            <span>
              {{ navigation.name }}
            </span>
          </Link>
        </div>

        <div class="grid space-y-3">
          
      <div class="px-6 pt-4">
        <ul class="flex flex-col space-y-2">
          <li
            class="
              relative
              text-gray-500
              hover:text-black
              focus-within:text-black
            "
          >
            <div
              class="
                absolute
                inset-y-0
                left-0
                flex
                items-center
                pl-2
                pointer-events-none
              "
            >
              <svg
                class="w-5 h-5 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M9.75 8.75V19"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M5 8.25H19"
                ></path>
              </svg>
            </div>
            <Link
              :href="route('backend.dashboard')"
              class="
                inline-block
                w-full
                py-2
                pl-8
                pr-4
                text-lg
                text-black
                rounded
                hover:bg-gray-800
                focus:outline-none
                focus:ring-1
                focus:ring-gray-500
                focus:bg-gray-800
              "
              >Dashboard
            </Link>
          </li>
          <Adminbaruldropdown>
            <template #svg>
              <svg
                class="w-5 h-5 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M18 9.25H13.75V5"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M9.75 15.25H14.25"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M9.75 12.25H14.25"
                ></path>
              </svg>
            </template>
            <span class="text-lg text-black">Article</span>
            <template #li>
              <li>
                <Link
                  :href="route('backend.article.article.index')"
                  class="
                    inline-block
                    w-full
                    px-4
                    py-2
                    
                    rounded
                    hover:bg-gray-800 hover:text-black
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-500
                    focus:text-black
                  "
                  >All Article
                </Link>
              </li>
              
              <li>
                <Link
                  :href="route('backend.article.channel')"
                  class="
                    inline-block
                    w-full
                    px-4
                    py-2
                    
                    rounded
                    hover:bg-gray-800 hover:text-black
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-500
                    focus:text-black
                  "
                  >Channels</Link
                >
              </li>
              <li>
                <Link
                  :href="route('backend.article.tag')"
                  class="
                    inline-block
                    w-full
                    px-4
                    py-2
                    
                    rounded
                    hover:bg-gray-800 hover:text-black
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-500
                    focus:text-black
                  "
                  >Tags</Link
                >
              </li>
            </template>
          </Adminbaruldropdown>

          <Adminbaruldropdown>
            <template #svg>
              <svg
                class="w-5 h-5 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M18 9.25H13.75V5"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M9.75 15.25H14.25"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M9.75 12.25H14.25"
                ></path>
              </svg>
            </template>
            
            <span class="text-lg text-black">Pages</span>
            
            <template #li>
              <li>
                <Link
                  href="#"
                  class="
                    inline-block
                    w-full
                    px-4
                    py-2
                    
                    rounded
                    hover:bg-gray-800 hover:text-black
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-500
                    focus:text-black
                  "
                  >All Pages</Link
                >
              </li>
              <li>
                <Link
                  href="#"
                  class="
                    inline-block
                    w-full
                    px-4
                    py-2
                    
                    rounded
                    hover:bg-gray-800 hover:text-black
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-500
                    focus:text-black
                  "
                  >Add New</Link
                >
              </li>
            </template>
          </Adminbaruldropdown>
          <Adminbaruldropdown>
            <template #svg>
              <svg
                class="w-5 h-5 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M18 9.25H13.75V5"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M9.75 15.25H14.25"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M9.75 12.25H14.25"
                ></path>
              </svg>
            </template>
            <span class="text-lg text-black">Media</span>
            
            <template #li>
              <li>
                <Link
                  :href="route('backend.media')"
                  class="
                    inline-block
                    w-full
                    px-4
                    py-2
                    
                    rounded
                    hover:bg-gray-800 hover:text-black
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-500
                    focus:text-black
                  "
                  >Libary</Link
                >
              </li>
              <li>
                <Link
                  href="#"
                  class="
                    inline-block
                    w-full
                    px-4
                    py-2
                    
                    rounded
                    hover:bg-gray-800 hover:text-black
                    focus:outline-none
                    focus:ring-1
                    focus:ring-gray-500
                    focus:text-black
                  "
                  >Add New</Link
                >
              </li>
            </template>
          </Adminbaruldropdown>


          <li
            class="
              relative
              text-gray-500
              hover:text-black
              focus-within:text-black
            "
          >
            <div
              class="
                absolute
                inset-y-0
                left-0
                flex
                items-center
                pl-2
                pointer-events-none
              "
            >
              <svg
                class="w-5 h-5 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <Link
            :href="route('backend.user.users')"
              class="
                inline-block
                w-full
                py-2
                pl-8
                pr-4
                text-lg
                text-black
                rounded
                hover:bg-gray-800
                focus:outline-none
                focus:ring-1
                focus:ring-gray-500
                focus:bg-gray-800
              "
              >Users
            </Link>
          </li>


          <li
            class="
              relative
              text-gray-500
              hover:text-black
              focus-within:text-black
            "
          >
            <div
              class="
                absolute
                inset-y-0
                left-0
                flex
                items-center
                pl-2
                pointer-events-none
              "
            >
              <svg
                class="w-5 h-5 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <Link
              :href="route('backend.menu.menu')"
              class="
                inline-block
                w-full
                py-2
                pl-8
                pr-4
                
                text-lg
                text-black
                rounded
                hover:bg-gray-800
                focus:outline-none
                focus:ring-1
                focus:ring-gray-500
                focus:bg-gray-800
              "
              >Menu
            </Link>
          </li>

        </ul>
      </div>
      <div class="px-6 pt-8">
        <hr class="border-gray-700" />
      </div>
      <div class="px-6 pt-4 pb-8">
        <ul>
          <li
            class="
              relative
              text-gray-500
              hover:text-black
              focus-within:text-black
            "
          >
            <div
              class="
                absolute
                inset-y-0
                left-0
                flex
                items-center
                pl-2
                pointer-events-none
              "
            >
              <svg
                class="w-5 h-5 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13.1191 5.61336C13.0508 5.11856 12.6279 4.75 12.1285 4.75H11.8715C11.3721 4.75 10.9492 5.11856 10.8809 5.61336L10.7938 6.24511C10.7382 6.64815 10.4403 6.96897 10.0622 7.11922C10.006 7.14156 9.95021 7.16484 9.89497 7.18905C9.52217 7.3524 9.08438 7.3384 8.75876 7.09419L8.45119 6.86351C8.05307 6.56492 7.49597 6.60451 7.14408 6.9564L6.95641 7.14408C6.60452 7.49597 6.56492 8.05306 6.86351 8.45118L7.09419 8.75876C7.33841 9.08437 7.3524 9.52216 7.18905 9.89497C7.16484 9.95021 7.14156 10.006 7.11922 10.0622C6.96897 10.4403 6.64815 10.7382 6.24511 10.7938L5.61336 10.8809C5.11856 10.9492 4.75 11.372 4.75 11.8715V12.1285C4.75 12.6279 5.11856 13.0508 5.61336 13.1191L6.24511 13.2062C6.64815 13.2618 6.96897 13.5597 7.11922 13.9378C7.14156 13.994 7.16484 14.0498 7.18905 14.105C7.3524 14.4778 7.3384 14.9156 7.09419 15.2412L6.86351 15.5488C6.56492 15.9469 6.60451 16.504 6.9564 16.8559L7.14408 17.0436C7.49597 17.3955 8.05306 17.4351 8.45118 17.1365L8.75876 16.9058C9.08437 16.6616 9.52216 16.6476 9.89496 16.811C9.95021 16.8352 10.006 16.8584 10.0622 16.8808C10.4403 17.031 10.7382 17.3519 10.7938 17.7549L10.8809 18.3866C10.9492 18.8814 11.3721 19.25 11.8715 19.25H12.1285C12.6279 19.25 13.0508 18.8814 13.1191 18.3866L13.2062 17.7549C13.2618 17.3519 13.5597 17.031 13.9378 16.8808C13.994 16.8584 14.0498 16.8352 14.105 16.8109C14.4778 16.6476 14.9156 16.6616 15.2412 16.9058L15.5488 17.1365C15.9469 17.4351 16.504 17.3955 16.8559 17.0436L17.0436 16.8559C17.3955 16.504 17.4351 15.9469 17.1365 15.5488L16.9058 15.2412C16.6616 14.9156 16.6476 14.4778 16.811 14.105C16.8352 14.0498 16.8584 13.994 16.8808 13.9378C17.031 13.5597 17.3519 13.2618 17.7549 13.2062L18.3866 13.1191C18.8814 13.0508 19.25 12.6279 19.25 12.1285V11.8715C19.25 11.3721 18.8814 10.9492 18.3866 10.8809L17.7549 10.7938C17.3519 10.7382 17.031 10.4403 16.8808 10.0622C16.8584 10.006 16.8352 9.95021 16.8109 9.89496C16.6476 9.52216 16.6616 9.08437 16.9058 8.75875L17.1365 8.4512C17.4351 8.05308 17.3955 7.49599 17.0436 7.1441L16.8559 6.95642C16.504 6.60453 15.9469 6.56494 15.5488 6.86353L15.2412 7.09419C14.9156 7.33841 14.4778 7.3524 14.105 7.18905C14.0498 7.16484 13.994 7.14156 13.9378 7.11922C13.5597 6.96897 13.2618 6.64815 13.2062 6.24511L13.1191 5.61336Z"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13.25 12C13.25 12.6904 12.6904 13.25 12 13.25C11.3096 13.25 10.75 12.6904 10.75 12C10.75 11.3096 11.3096 10.75 12 10.75C12.6904 10.75 13.25 11.3096 13.25 12Z"
                ></path>
              </svg>
            </div>
            <Link
            :href="route('backend.settings.index')"
              class="
                inline-block
                w-full
                py-2
                pl-8
                pr-4
                text-lg
                text-black
                rounded
                hover:bg-gray-800
                focus:outline-none
                focus:ring-1
                focus:ring-gray-500
                focus:bg-gray-800
              "
              >Settings</Link
            >
          </li>
        </ul>
      </div>
         
        </div>
      </halfmodal>
    </div>
    <usermenu></usermenu>
    <span
      :class="
        $page.props.hasNotification
          ? 'absolute top-2 right-2 block py-1 px-2 text-[9px] text-center rounded-full text-black shadow-solid bg-red-500'
          : 'hidden'
      " v-if="$page.props.isLoggedIn"
      >{{ $page.props.hasNotification }}
    </span>
  </div>
</template>

<script setup>
import { useDetictingMobile } from '@/composable/useDetictingMobile.js'
import { defineAsyncComponent } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { useSettingsStore } from "@/stores/settings";
import { storeToRefs } from "pinia";
import usermenu from "../partials/usermenu.vue";
import { ref, onMounted, reactive, onBeforeMount } from "vue";




const Halfmodal = defineAsyncComponent(() =>
  import("@/Components/Halfmodal.vue")
);
const Adminbaruldropdown = defineAsyncComponent(() =>
  import("@/Components/Adminbaruldropdown.vue")
);

let isMobile = useDetictingMobile()
const store = useSettingsStore();
</script>

<style>
</style>