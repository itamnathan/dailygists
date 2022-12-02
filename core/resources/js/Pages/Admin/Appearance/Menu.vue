<template>

    <AdminLayout>


        <div class=" mx-2 sm:mx-6 mt-12 mb-6 bg-white p-2 rounded-lg text-sm">
            <form method="get" class="flex  justify-between items-center flex-wrap">
                <div>
                    <label for="select-menu-to-edit" class="selected-menu">Select a menu to edit:</label>
                    <select v-model="selectedmenulist" id="select-menu-to-edit" class="rounded-lg mx-2 py-1">

                        <option v-for="menu in menulist" :key="menu.id" :value="menu">
                            {{ menu.name }}</option>
                    </select>
                </div>
                <span class="add-new-menu-action text-xs">

                    <Modal>
                        <template #button>

                            <button class="px-4 py-2 bg-blue-900 rounded text-white">
                                create menu </button>

                        </template>
                        <form @submit.prevent="createmenu.post(route('backend.menu.store'),{
                            onSuccess: () => {
                                createmenu.reset();
                                getmenulist()
                            }

                        })">
                            <h2 class="text-2xl font-bold my-4">Create New Menu</h2>
                            <progress v-if="createmenu.progress" :value="createmenu.progress.percentage" max="100"
                                class="bg-gray-300">
                                {{ createmenu.progress.percentage }}%
                            </progress>

                            <div class="grid">
                                <label for="select-menu-to-edit" class="my-2 text-lg">Select Menu Location</label>
                                <select v-model="createmenu.location" id="select-menu-to-edit"
                                    class="rounded-lg px-2 py-1 my-4">
                                    <option value="">Select Menu</option>
                                    <option value="header">
                                        Header </option>
                                    <option value="category">
                                        Category (Footer Menu) </option>
                                    <option value="footer">
                                        Footer </option>
                                </select>
                            </div>

                            <div class="grid ">
                                <label class="my-2 text-lg" for="custom-menu-item-name">Menu Name</label>
                                <input v-model="createmenu.name" class="rounded-lg px-2 py-1 my-4" type="text" />


                            </div>

                            <div class="flex justify-end">
                                <span class="add-to-menu">

                                    <button class="px-4 py-2 bg-blue-900 rounded text-white" type="submit"
                                        :disabled="createmenu.processing">
                                        Create Menu</button>
                                </span>
                            </div>
                        </form>
                    </Modal>

                </span>
            </form>
        </div>
        <div class="sm:flex grid" v-if="selectedmenulist.length !=0">


            <div class="w-full sm:w-4/12">
                <div id="menu-settings-column" class="metabox-holder  mx-2 sm:mx-6">

                    <div class="clear"></div>

                    <form @submit.prevent="addmenuitem.post(route('backend.menu.items.store'),{
                        onSuccess: () => {
                            getselectedmenu(selectedmenulist.id);
                            addmenuitem.reset();
                            setaddmenuitem();
                        }
                    
                    })">
                        <h2 class="font-bold">Add menu items</h2>
                        <div class="border my-6 rounded-lg bg-white" id="add-custom-links">
                            <h3 class=" p-2 mb-4 rounded-t-lg bg-gray-300 " tabindex="0">
                                Custom Links <span class="screen-reader-text">Press return or enter to open this
                                    section</span>
                            </h3>
                            <div class="p-4" style="display: block;">

                                <div class="grid space-y-6" id="customlinkdiv">
                                    <p id="menu-item-url-wrap" class="flex justify-between">

                                        <label class="howto" for="custom-menu-item-url">URL</label>

                                        <input v-model="addmenuitem.href" type="text"
                                            class="rounded-lg px-2 py-1 w-9/12" placeholder="https://">
                                    </p>

                                    <p id="menu-item-name-wrap" class="flex justify-between">
                                        <label class="howto" for="custom-menu-item-name">Link Text</label>
                                        <input v-model="addmenuitem.name" id="custom-menu-item-name"
                                            name="menu-item[-85][menu-item-title]" type="text"
                                            class="rounded-lg px-2 py-1 w-9/12">
                                    </p>
                                    <p id="menu-item-name-wrap" class="flex justify-between">
                                        <label class="howto" for="custom-menu-item-name">Svg</label>
                                        <textarea v-model="addmenuitem.svg"
                                            class="rounded-lg px-2 py-1 w-9/12"></textarea>
                                    </p>

                                    <p class="flex justify-end">
                                        <span class="add-to-menu">

                                            <button class="px-4 py-2 bg-blue-900 rounded text-white" type="submit">
                                                Add To Menu</button>
                                        </span>
                                    </p>

                                </div>

                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <div class="w-full sm:w-8/12">
                <div id="menu-management-liquid" class="  mx-2 sm:mx-6">
                    <div id="menu-management">
                        <form id="update-nav-menu" method="post" enctype="multipart/form-data">
                            <h2 class="font-bold">Menu structure</h2>
                            <div class="my-6 bg-white menu-edit">
                                <div id="nav-menu-header"
                                    class=" p-2 mb-4 bg-gray-300 flex justify-between items-center">


                                    <label class="capitalize">{{ selectedmenulist.name }}</label>


                                    <div class="">
                                        <button class="px-4 py-2 bg-blue-900 rounded text-white">
                                            Save Menu</button>

                                    </div><!-- END .publishing-action -->

                                </div><!-- END .nav-menu-header -->
                                <div id="post-body" class="px-4 py-2">
                                    <div id="post-body-content" class="wp-clearfix">

                                        <div class="grid">
                                            <div v-for="item in menuitem" :key="item"
                                                class="py-2 flex items-center justify-between rounded bg-gray-100 hover:bg-gray-300 px-4  mb-2   ">
                                                <div>
                                                    <span v-html="item.svg"></span>
                                                    <span> {{ item.name }}</span>
                                                </div>
                                                <div>
                                                    <span class="flex justify-end " @click="deletemenuitem(item.id)">
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                            viewBox="0 0 16 16"
                                                            class="h-6 w-6 text-red-400 hover:text-red-700 duration-100 text-sm cursor-pointer"
                                                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </div>

                                            </div>
                                        </div>


                                        <div class="menu-settings">
                                            <h3 class="font-bold">Menu Settings</h3>

                                            <div class="">
                                                <legend class="">Display location</legend>
                                                <div class="">
                                                    <input type="checkbox" @click=" setselectedlocation('header') "
                                                        value="header">
                                                    <label for="locations-header-menu">Header (main)</label>
                                                    <span class="theme-location-set"
                                                        v-if="selectedmenulist.location == 'header'">
                                                        (Currently set to: {{ selectedmenulist.name }}) </span>
                                                </div>
                                                <div class="menu-settings-input checkbox-input">
                                                    <input type="checkbox" @click=" setselectedlocation('category') "
                                                        id="locations-header-menu" value="category">
                                                    <label for="locations-header-menu">Category (Footer Menu)</label>
                                                    <span class="theme-location-set"
                                                        v-if="selectedmenulist.location == 'category'">
                                                        (Currently set to: {{ selectedmenulist.name }}) </span>
                                                </div>
                                                <div class="menu-settings-input checkbox-input">
                                                    <input type="checkbox" @click="
                                                    setselectedlocation('footer') ">
                                                    <label for="locations-footer-menu">Footer</label>
                                                    <span class="theme-location-set"
                                                        v-if="selectedmenulist.location == 'footer'">
                                                        (Currently set to: {{ selectedmenulist.name }}) </span>
                                                </div>
                                            </div>


                                        </div>
                                    </div><!-- /#post-body-content -->
                                </div><!-- /#post-body -->
                                <div id="nav-menu-footer" class="flex px-4 py-4 items-center justify-between">


                                    <span class="delete-action">

                                        <button class="px-4 py-2 bg-red-900 rounded text-white" @click="deletemenu()">
                                            Delete Menu</button>
                                    </span><!-- END .delete-action -->

                                    <div class="publishing-action">
                                        <button class="px-4 py-2 bg-blue-900 rounded text-white">
                                            Save Menu</button>
                                    </div><!-- END .publishing-action -->
                                </div><!-- /#nav-menu-footer -->
                            </div><!-- /.menu-edit -->
                        </form><!-- /#update-nav-menu -->
                    </div><!-- /#menu-management -->
                </div>
            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { Table } from "@protonemedia/inertiajs-tables-laravel-query-builder";
import { Head, Link } from "@inertiajs/inertia-vue3";
import Modal from "@/Components/Modal.vue";
import { ref, onMounted, watch } from "vue";

const menuitem = ref([])
const selectedlocation = ref('')
const selectedmenulist = ref([])
const menulist = ref([])
const addmenuitem = useForm({
    href: null,
    svg: null,
    name: null,
    menu_id: null,
});

const createmenu = useForm({
    name: null,
    location: null,
});

function setselectedlocation(params) {
    selectedlocation.value = params
}
function getselectedmenu(params) {

    axios.get('/api/menu/' + params).then(response => {
        menuitem.value = response.data;

    });
}
function getmenulist() {

    axios.get('/api/menu/getmenus').then(response => {
        menulist.value = response.data;
    });
}


function deletemenuitem(id) {

    axios.get(route('backend.menu.items.deletemenuitem', id)).then(response => {
        getselectedmenu(selectedmenulist.value.id)
    });
}

function deletemenu() {

    axios.get(route('backend.menu.deletemenu', selectedmenulist.value.id));
}

function setaddmenuitem() {

    addmenuitem.menu_id = selectedmenulist.value.id
}
onMounted(() => {
    getmenulist()
})
watch(
    () => selectedmenulist.value,
    () => {
        setaddmenuitem()
        setselectedlocation(selectedmenulist.value.location)
        getselectedmenu(selectedmenulist.value.id)
    }
)
</script>

<style>

</style>