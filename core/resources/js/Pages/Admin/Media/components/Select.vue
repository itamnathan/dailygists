<template>
    <select id="stock_status" name="stock_status" class="pl-3 pr-10 py-2 text-base border-gray-300
    focus:border-indigo-300 focus:ring focus:ring-indigo-200 shadow-sm focus:ring-opacity-50 rounded-md"
            :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
        <template v-if="empty">
            <option value selected>--</option>
        </template>
        <template v-if="options">
            <option v-for="option in options" :value="option.id">{{option.name}}</option>
        </template>
        <slot/>
    </select>
</template>

<script>
export default {
    // name: "Select",
    emits: ['update:modelValue'],
    props: {
        modelValue:{
            required:true
        },
        options:{
            type:[Object , null]
        },
        empty:{
            type:Boolean,
            default:false
        }
    },
}
</script>
