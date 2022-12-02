<template>

    <section aria-labelledby="password_settings_heading" class="mt-6">
        <div class="my-2 mb-3">
            <h2 id="list_blocked_users" class="text-lg leading-6 font-medium text-gray-900">
                Blocked Users
            </h2>
            <p class="mt-1 text-sm leading-5 text-gray-500">
                The users below will not be able to mention you in their forum threads or replies. You can block
                additional users from their profile. Or you can unblock users below.
            </p>
        </div>

        <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="bg-white py-6 px-4 space-y-6 sm:p-6">

                <ul class="space-y-4">
                    <li class="flex justify-between items-center space-x-2" v-for="user in blockedusers" :key="user.id">
                        <div class="flex items-center">
                            <div class="shrink-0 h-10 w-10">
                                <Link :href="route('profile', user.username)">
                                <img :src="user.avatar" class="h-10 w-10 rounded-full" />
                                </Link>
                            </div>

                            <div class="text-sm text-gray-500 ml-4">
                                <Link :href="route('profile', user.username)">
                                @{{ user.username }}
                                </Link>
                            </div>
                        </div>

                        <button @click="unblock(user.username)">
                            <XMarkIcon class="h-4 w-4 text-gray-500 hover:text-red-500" />
                        </button>
                    </li>
                    <p class="mt-1 text-sm leading-5 text-gray-500" v-if="blockedusers.length == 0">
                        Currently, you've not blocked anyone.
                    </p>
                </ul>
            </div>
        </div>
    </section>

</template>

<script setup>

import { XMarkIcon } from "@heroicons/vue/24/solid";
import { ref, onMounted, reactive, computed, onBeforeMount, watch } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Ago from "@/Components/Ago.vue";
const blockedusers = ref([])

function loadblockedusers() {

    axios.get('/currentusers/blockedusers').then(response => {
        blockedusers.value = response.data;
    });
}

function unblock(params) {
   
    
    axios.put(route('settings.users.unblock', params)).then(response => {
       
    loadblockedusers()
    });
    // 
}
onMounted(() => {
    loadblockedusers()
})
</script>

<style>

</style>