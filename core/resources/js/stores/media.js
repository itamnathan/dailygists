import { defineStore } from 'pinia'

// import axios from 'axios';
// window.axios = axios;

// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// You can name the return value of `defineStore()` anything you want, 
// but it's best to use the name of the store and surround it with `use` 
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useMediaStore = defineStore('media', {
    state: () => ({
        selectedmedias: [],
        content: {},
    }),
    getters: {
        //   doubleCount: (state) => state.count * 2,
    },
    actions: {
        // async publish() {
        //     // console.log({ jsondata: this.jsonData, excerpt: this.excerpt, content: this.content, categories: this.categories, tags: this.tags, title: this.title, featuredimage: this.featuredImage, publish_date: this.publish_date, author: this.author })
        //     try {
        //         await axios.post(route('backend.article.post.store'), {
        //             title: this.title,
        //             jsondata: this.jsonData,
        //             content: this.content,
        //             categories: this.categories,
        //             tags: this.tags,
        //             allow_comment: this.allow_comment,
        //             featuredImage: this.featuredImage,
        //             publish_date: this.publish_date,
        //             author: this.author
        //         })

        //     } catch (error) {
        //         console.log(error)
        //         // let the form component display the error
        //         return error
        //     }
        // },
        // async draft(){
            
        // }
    },
})