<script setup>
    import AdminLayout from "@/Layouts/AdminLayout.vue";
    import { useForm } from "@inertiajs/inertia-vue3";
    const form = useForm({
      id: props.tag.id,
      name: props.tag.name,
      slug: props.tag.slug,
    });
    const props = defineProps(["tag"]);
    </script>
                
    <template>
      <AdminLayout title="tag">
        <div id="col-container " class="flex m-4">
          <div id="col-left" class="px-2">
            <div class="col-wrap">
              <div class="form-wrap">
                <h2 class="font-bold mb-6">Add New tag</h2>
                <form
                  @submit.prevent="
                    form.put(route('backend.article.tag.update', form.id), {
                      preserveScroll: true,
                      onSuccess: () => {
                        form.defaults({
                          id: null,
                          name: null,
                          slug: null,
                          description: null,
                        });
    
                        form.reset();
                      },
                    })
                  "
                >
                  <div class="grid">
                    <label for="tag-name">Name</label>
                    <input
                      id="name"
                      type="text"
                      size="40"
                      class="
                        bg-gray-50
                        border border-gray-300
                        text-gray-900 text-sm
                        rounded-lg
                        focus:ring-blue-500 focus:border-blue-500
                        p-2.5
                        dark:bg-gray-700
                        dark:border-gray-600
                        dark:placeholder-gray-400
                        dark:text-white
                        dark:focus:ring-blue-500
                        dark:focus:border-blue-500
                      "
                      v-model="form.name"
                      required
                    />
                    <p class="text-xs mb-4">
                      The name is how it appears on your site.
                    </p>
                  </div>
                  <div class="grid">
                    <label for="tag-slug">Slug</label>
                    <input
                      id="slug"
                      type="text"
                      class="
                        bg-gray-50
                        border border-gray-300
                        text-gray-900 text-sm
                        rounded-lg
                        focus:ring-blue-500 focus:border-blue-500
                        p-2.5
                        dark:bg-gray-700
                        dark:border-gray-600
                        dark:placeholder-gray-400
                        dark:text-white
                        dark:focus:ring-blue-500
                        dark:focus:border-blue-500
                      "
                      size="40"
                      v-model="form.slug"
                    />
                    <p class="text-xs mb-4">
                      The “slug” is the URL-friendly version of the name. It is
                      usually all lowercase and contains only letters, numbers, and
                      hyphens.
                    </p>
                  </div>
    
                  <button
                    type="submit"
                    class="
                      text-white
                      bg-blue-700
                      hover:bg-blue-800
                      focus:ring-4 focus:outline-none focus:ring-blue-300
                      font-medium
                      rounded-lg
                      text-sm
                      w-full
                      sm:w-auto
                      px-5
                      py-2.5
                      text-center
                      dark:bg-blue-600
                      dark:hover:bg-blue-700
                      dark:focus:ring-blue-800
                    "
                    :disabled="form.processing"
                  >
                    Add New tag
                    <span class="spinner"></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <!-- /col-left -->
        </div>
      </AdminLayout>
    </template>
                