<script setup>
  import AdminLayout from "@/Layouts/AdminLayout.vue";
  import { useForm } from "@inertiajs/inertia-vue3";
  import { Table } from "@protonemedia/inertiajs-tables-laravel-query-builder";
  import { Head, Link } from "@inertiajs/inertia-vue3";
  const form = useForm({
    name: null,
  });
  const formdestroy = useForm();
  function destroy(id) {
    if (confirm("Are you sure you want to Delete")) {
      formdestroy.delete(route("backend.article.tag.delete", id));
    }
  }
  defineProps(["tags"]);
  </script>
          
  <template>
    <AdminLayout>
      <div id="col-container " class="flex flex-wrap m-4">
        <div id="col-left" class="sm:w-2/5 w-full px-2">
          <div class="col-wrap">
            <div class="form-wrap">
              <h2 class="font-bold mb-6">Add New tag</h2>
              <form
                @submit.prevent="
                  form.post(route('backend.article.tag.store'), {
                    preserveScroll: true,
                    onSuccess: () => form.reset(),
                  })
                "
              >
                <div class="grid w-full">
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
  
        <div id="col-right" class="sm:w-3/5 w-full mt-4">
          <Table
            :resource="tags"
            :striped="true"
            :prevent-overlapping-requests="false"
            preserve-scroll="table-top"
          >
            <template #cell(name)="{ item: tag }">
              <div class="grid">
               
                <span class="font-bold text-base">{{
                  tag.name
                }}</span>
                <span class="flex divide divide-x-[1px] divide-gray-400">
                  <Link
                    :href="route('backend.article.tag.edit', tag.slug)"
                    class="px-1 text-xs"
                  >
                    Edit
                  </Link>
                  <button
                    @click="destroy(tag.slug)"
                    class="px-1 text-xs text-red-400"
                  >
                    Delete
                  </button>
                </span>
              </div></template
            > <template #cell(description)="{ item: tag }">
             <span v-if="tag.description != null">  
             {{   tag.description    }}</span>
           
                </template
            > <template #cell(slug)="{ item: tag }">
              {{
                  tag.slug
                }}</template
            >
          </Table>
        </div>
        <!-- /col-right -->
      </div>
    </AdminLayout>
  </template>
          