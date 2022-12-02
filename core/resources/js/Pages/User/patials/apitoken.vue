<template>

    <section aria-labelledby="api_token_settings_heading" class="mt-6">
        <div v-if="tokens.length != 0">
            <div class="my-2 mb-4">
                <h2 id="api_token_settings_heading" class="text-lg leading-6 font-medium text-gray-900">
                    API Tokens
                </h2>

            </div>
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
                    <ul class="space-y-3">
                        <li class="md:flex justify-between md:space-x-2" v-for="token in tokens" :key="token.id">
                            <div>
                                <span class="block font-bold">
                                    {{ token.name }}
                                </span>

                                <ago :datess="token.created_at" classes=" text-xs  text-gray-300" befor=""
                                    v-if="token.created_at"></ago>

                            </div>

                            <DangerButton @click="deleteToken(token.id)">
                                Delete Token
                            </DangerButton>
                        </li>
                    </ul>

                    <div>
                    </div>
                </div>
            </div>
        </div>
        <FormSection @submitted="generateToken">
            <template #title>
                API Tokens
            </template>

            <template #description>
                Create API tokens to access your account over our REST API.
            </template>
            <template #form>
                <!-- token_name -->
                <div class="col-span-6 sm:col-span-4">
                    <InputLabel for="token_name" value="Token name" />
                    <TextInput id="token_name" v-model="form.token_name" type="text" class="mt-1 block w-full" />
                    <InputError :message="form.errors.token_name" class="mt-2" />
                </div>
            </template>
            <template #actions>
                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Generate New Token
                </PrimaryButton>
            </template>
        </FormSection>
    </section>

</template>

<script setup>

import { useForm, Link, usePage, Head } from "@inertiajs/inertia-vue3";
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { ref, onMounted, reactive, computed, onBeforeMount, watch } from "vue";
import Ago from "@/Components/Ago.vue";
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import DangerButton from '@/Components/DangerButton.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import FormSection from '@/Components/FormSection.vue';
const tokens = ref([])

const form = useForm({
    token_name: null,
});
const generateToken = () => {

    form.post(route('settings.api-tokens.store'), {
        errorBag: 'generateToken',
        preserveScroll: true,
        onSuccess: () => loadusertokens(),
    });
};
function loadusertokens() {

    axios.get('/currentusers/tokens').then(response => {
        tokens.value = response.data;
    });
}

function deleteToken(params) {
    axios.delete(route('settings.api-tokens.delete', { 'id': params })).then(response => {
        loadusertokens()
    });
    // 
}
onMounted(() => {
    loadusertokens()
})
</script>

<style>

</style>