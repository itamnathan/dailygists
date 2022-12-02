<script setup>
import { ref, onMounted, reactive, computed, onBeforeMount } from "vue";
import { Inertia } from '@inertiajs/inertia';
import { useForm, Link, usePage, Head } from "@inertiajs/inertia-vue3";

import { defineAsyncComponent } from "vue";


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

const props = defineProps({
    user: Object,
});

const user = computed(() => usePage().props.value.auth.user)
const form = useForm({
    _method: 'PUT',
    username: user.value.username,
    name: user.value.name,
    penname: user.value.penname,
    email: user.value.email,
    website: user.value.website,
    twitter: user.value.twitter,
    facebook: user.value.facebook,
    instagram: user.value.instagram,
    bio: user.value.bio,
});

const verificationLinkSent = ref(null);
const sendEmailVerification = () => {
    verificationLinkSent.value = true;
};

const updateProfileInformation = () => {


    form.post(route('settings.profile.update'), {
        errorBag: 'updateProfileInformation',
        preserveScroll: true,
        // onSuccess: () => clearPhotoFileInput(),
    });
};
</script>

<template>
    <FormSection @submitted="updateProfileInformation">
        <template #title>
            Profile Information
        </template>

        <template #description>
            Update your account's profile information and email address.
        </template>

        <template #form>

            <!-- UserName -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="username" value="UserName @" />
                <TextInput id="username" v-model="form.username" type="text" class="mt-1 block w-full" autocomplete="username" />
                <InputError :message="form.errors.username" class="mt-2" />
            </div>

            <!-- Name -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="name" value="Full Name" />
                <TextInput id="name" v-model="form.name" type="text" class="mt-1 block w-full" autocomplete="name" />
                <InputError :message="form.errors.name" class="mt-2" />
            </div>

            <!-- penName -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="penname" value="Pen Name" />
                <TextInput id="penname" v-model="form.penname" type="text" class="mt-1 block w-full" autocomplete="penname" />
                <InputError :message="form.errors.penname" class="mt-2" />
            </div>

            <!-- Email -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="email" value="Email" />
                <TextInput id="email" v-model="form.email" type="email" class="mt-1 block w-full" />
                <InputError :message="form.errors.email" class="mt-2" />
                
                <span class="mt-2 text-sm text-gray-500">
                    Change of email will require verification of the new email
                </span>
                <!-- //$page.props.jetstream.hasEmailVerification &&  -->
                <div v-if="user.email_verified_at === null">
                    <p class="text-sm mt-2">
                        Your email address is unverified.

                        <Link :href="route('verification.send')" method="post" as="button"
                            class="underline text-gray-600 hover:text-gray-900" @click.prevent="sendEmailVerification">
                        Click here to re-send the verification email.
                        </Link>
                    </p>

                    <div v-show="verificationLinkSent" class="mt-2 font-medium text-sm text-green-600">
                        A new verification link has been sent to your email address.
                    </div>
                </div>
            </div>



            <!-- Twitter handle -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="twitter" value="Twitter handle" />
                <TextInput id="twitter" v-model="form.twitter" type="text" class="mt-1 block w-full"
                    autocomplete="twitter" />
                <InputError :message="form.errors.twitter" class="mt-2" />

                <span class="mt-2 text-sm text-gray-500">
                    Enter your Twitter handle without the leading @ symbol
                </span>
            </div>

            <!-- instagram handle -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="instagram" value="Instagram handle" />
                <TextInput id="instagram" v-model="form.instagram" type="text" class="mt-1 block w-full"
                    autocomplete="instagram" />
                <InputError :message="form.errors.instagram" class="mt-2" />

                <span class="mt-2 text-sm text-gray-500">
                    Enter your Instagram handle without the leading @ symbol
                </span>
            </div>

            <!-- facebook handle -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="facebook" value="Facebook handle" />
                <TextInput id="facebook" v-model="form.facebook" type="text" class="mt-1 block w-full"
                    autocomplete="facebook" />
                <InputError :message="form.errors.facebook" class="mt-2" />

                <span class="mt-2 text-sm text-gray-500">
                    Enter your Facebook handle with the leading http://facebook.com/myhaddle
                </span>
            </div>

            <!-- Website -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="website" value="Website" />
                <TextInput id="website" v-model="form.website" type="text" class="mt-1 block w-full"
                    autocomplete="website" />
                <InputError :message="form.errors.website" class="mt-2" />
                
                <span class="mt-2 text-sm text-gray-500">
                    Enter your Website  with the leading http://example.com
                </span>
            </div>

            <!-- bio -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="bio" value="Bio" />
                <textarea id="bio" v-model="form.bio"
                    class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"></textarea>
                <InputError :message="form.errors.bio" class="mt-2" />

                <span class="mt-2 text-sm text-gray-500">
                    The user bio is limited to 160 characters.
                </span>
            </div>
        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                Saved.
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Save
            </PrimaryButton>
        </template>
    </FormSection>
</template>
