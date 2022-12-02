import { defineStore } from 'pinia'

// import axios from 'axios';
// window.axios = axios;

// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// You can name the return value of `defineStore()` anything you want, 
// but it's best to use the name of the store and surround it with `use` 
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useMenuStore = defineStore('menu', {
    state: () => ({
        menu: {},
        header: [],
        footer: [],
        category:[],
    }),
    getters: {
        // assign: (state) => state.menu.forEach(assignmenu)
        //   doubleCount: (state) => state.count * 2,
    },
    actions: {
        // assignmenu(value){
        //     if(value['id'] == 'header'){
        
        //         tags.value.push(value['id'])
        //           }
        // }
    },
})