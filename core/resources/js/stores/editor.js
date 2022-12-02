import { defineStore } from 'pinia'

// import axios from 'axios';
// window.axios = axios;

// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// You can name the return value of `defineStore()` anything you want, 
// but it's best to use the name of the store and surround it with `use` 
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useEditorStore = defineStore('editor', {
    state: () => ({
        editor: '',
        content: '',
        excerpt: '',
        slug: '',
        visibility: true,
        status: false,
        allow_comment: true,
        channels: [],
        selectedChannels: [],
        tags: [],
        selectedTags: [],
        title: '',
        featured_image: '',
        approved_at: '',
        submited_date: '',
        published: false,
        author: '',
        keywords: [],
        meta_title: '',
        meta_description: '',
        opengraph_title: '',
        opengraph_description: '',
        opengraph_image: '',
        opengraph_image_width: '',
        opengraph_image_height: '',
        twitter_title: '',
        twitter_description: '',
        twitter_image: '',
        twitter_cardtype: '',
    }),
    getters: {
        //   doubleCount: (state) => state.count * 2,
    },
    actions: {

    },
})