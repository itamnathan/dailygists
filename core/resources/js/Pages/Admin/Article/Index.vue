<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import Ago from "@/Components/Ago.vue";
import Pagination from "@/Components/Pagination.vue";
import { useForm, Link, usePage } from "@inertiajs/inertia-vue3";
import { ref, onMounted, reactive, computed, onBeforeMount } from "vue";

const articles = computed(() => usePage().props.value.articles);
// import { Table } from "@protonemedia/inertiajs-tables-laravel-query-builder";
// const form = useForm({
//   name: null,
//   slug: null,
//   parent: null,
//   description: null,
//   image: null,
//   color: null,
// });
// const formdestroy = useForm();
// function destroy(id) {
//   if (confirm("Are you sure you want to Delete")) {
//     formdestroy.delete(route("backend.category.delete", id));
//   }
// }
// defineProps(["articles"]);
</script>
        
<template>
  <AdminLayout title="Dashboard">
    <main class="container mx-auto pb-10 lg:py-6 sm:px-4">
      <div class="flex flex-col">
        <div
          class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
          v-if="articles.data.length"
        >
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="
                shadow
                overflow-hidden
                border-b border-gray-200
                sm:rounded-lg
              "
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr class="flex justify-between w-full">
                    <div
                      class="w-1/4 
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Author
                    </div>
                    <div
                      class="w-1/4 
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Title
                    </div>
                    <div
                      class="w-1/4 
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Submitted on
                    </div>
                    <div
                      class="w-1/4 
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                        text-center
                      "
                    >
                      View
                    </div>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr
                    v-for="article in articles.data"
                    :key="article.id"
                    class="flex  justify-between w-full"
                  >
                    <div class="w-1/4 px-6 py-4 text-gray-500 text-sm">
                      <div class="flex items-center">
                        <div class="shrink-0 h-10 w-10">
                          <img
                            :src="article.author_relation.profile_photo_url"
                            class="h-10 w-10 rounded-full"
                          />
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            <Link
                              :href="
                                route(
                                  'profile',
                                  article.author_relation.username
                                )
                              "
                            >
                              {{ article.author_relation.name }}
                            </Link>
                          </div>
                          <div class="text-sm text-gray-500">
                            <Link
                              :href="
                                route(
                                  'profile',
                                  article.author_relation.username
                                )
                              "
                            >
                              @{{ article.author_relation.username }}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="w-1/4 px-6 py-4 text-gray-500 text-sm">
                      {{ article.title }}
                    </div>

                    <div class="w-1/4 px-6 py-4 text-gray-500 text-sm">
                      <ago
                        :datess="article.submitted_at"
                        classes=" text-sm  text-grey-dark"
                        befor=""
                      ></ago>
                    </div>

                    <div
                      class="w-1/4 px-6 py-4 text-gray-500 text-sm flex justify-center"
                    >
                      <Link
                        :href="
                          route('articles.show', {
                            channel: article.channels_relation[0].slug,
                            article: article.slug,
                          })
                        "
                        class="text-lio-600 hover:text-lio-800"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-5 inline"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Link>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center" v-else>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
          No articles have been posted yet
        </div>
      </div>

      <div class="p-4">
        <Pagination class="mt-6" :links="articles.links" />
      </div>
    </main>

  </AdminLayout>
</template>
        