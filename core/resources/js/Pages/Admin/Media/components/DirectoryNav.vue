<template>
    <ul class="z-[100] space-y-1 list-disc list-inside">
        <template v-for="directory in generateNav()">
            <li :class="[current == directory.directory ? 'bg-gray-200 rounded' : null, 'px-2']">
                <button @click="emitNewPath(directory.directory)">{{directory.path.basename}}</button>
                <PlusIcon class="w-3 h-3 inline ml-3" v-if="directory.items.length"/>
            </li>
            <template v-if="directory.items.length">
                <directory-nav :directories="directories" type="child" :items="directory.items"
                               :class="[directory.isExpanded ? null : 'hidden' , 'ml-3']" :is-expanded="directory.isExpanded"
                               v-on:change:directory="emitNewPath($event)" :current="current"/>
            </template>
        </template>
    </ul>
</template>

<script>
    import { PlusIcon } from '@heroicons/vue/24/outline';
    export default {
        // name: "DirectoryNav",
        components:{
            PlusIcon
        },
        props:{
            directories:{
                type:Object,
                required:true
            },
            type:{
                type:String,
                default:'parent'
            },
            items:{
                type:Array,
                default:[]
            },
            isExpanded:{
                type:Boolean,
                default:false
            },
            current:{
                type:String,
                required:true
            }
        },
        methods:{
            generateNav:function () {
                let nav = [];
                if (this.type == 'parent'){
                    this.directories.map(directory => {
                        if (directory.parent_id == null){
                            nav.push(directory);
                        }
                    })
                }else{
                    this.directories.map(directory => {
                        if (this.items.includes(directory.id)){

                            if (this.isExpanded == false){
                                directory.isExpanded = false;
                            }

                            nav.push(directory);
                        }
                    })
                }
                return nav;
            },
            emitNewPath:function (directory) {
                this.$emit('change:directory' , directory);
            }
        }
    }
</script>
