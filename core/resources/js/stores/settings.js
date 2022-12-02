import { defineStore } from 'pinia'

// import axios from 'axios';
// window.axios = axios;

// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// You can name the return value of `defineStore()` anything you want, 
// but it's best to use the name of the store and surround it with `use` 
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useSettingsStore = defineStore('settings', {
    state: () => ({
        headernav: [],
        categorynav: [],
        footernav: [],
    }),
    getters: {
        //   doubleCount: (state) => state.count * 2,
    },
    actions: {
         loadheaderResources() {
            axios.get('/api/menu/location/header').then(response => {
              this.headernav = response.data;
            });
        },
        loadcategoryResources() {
         axios.get('/api/menu/location/category').then(response => {
           this.categorynav = response.data;
         });
       },
       loadfooterResources() {
        axios.get('/api/menu/location/footer').then(response => {
          this.footernav = response.data;
        });
      }
    },
})