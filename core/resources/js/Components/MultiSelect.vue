<script setup>
import _ from 'lodash';
import moment from 'moment';
import { ref, onMounted, watchEffect } from 'vue'




const props = defineProps(
    ['value', 'options', 'optionId', 'optionText']
)
const searchTerm = ref('')
const selectedOptionIndex = ref(0)
const focused = ref(false)
const newOptions = ref([])
const input = ref()

onMounted(() => {

    input.value.style.width = props.value.length ? '25px' : '108px';
    input.value.placeholder = props.value.length ? '' : 'Add tags';
})


watchEffect(() => {
    () => {
        input.value.style.width = props.value.length ? '25px' : '108px';
        input.value.placeholder = props.value.length ? '' : 'Add tags';
        var width = val.length * 12;

        input.value.style.width = width > 25 ? width + 'px' : '25px';
        selectedOptionIndex.value = _.find(val, option => option[props.optionId] == 'addNew') ? 1 : 0;
  }
    //    value(val) {
    //     input.value.style.width = props.value.length ? '25px' : '108px';
    //     input.value.placeholder = props.value.length ? '' : 'Add tags';
    // }

    //   searchTerm(val) {
    //     var width = val.length * 12;

    //     input.value.style.width = width > 25 ? width + 'px' : '25px';
    // }

    //   matches(val) {
    //     selectedOptionIndex.value = _.find(val, option => option[props.optionId] == 'addNew') ? 1 : 0;
    // }

})

function matches() {
    let options = _.union(props.options, newOptions.value);

    if (!searchTerm.value) {
        return _.reject(options, option => {
            return _.find(props.value, { id: option.id });
        });
    } else {
        var matches = _.reject(options, option => {
            return _.find(props.value, { id: option.id }) ||
                option[props.optionText].toLowerCase().indexOf(searchTerm.value.toLowerCase()) == -1;
        });

        let addNewOption = {};

        addNewOption[tpropsis.optionText] = 'Add new';
        addNewOption[props.optionId] = 'addNew';

        matches.unshift(addNewOption);

        return matches;
    }
}




/**
 * Select the given option.
 */
function selectOption(option) {
    let values = props.value || [];

    if (_.includes(values, option.id)) return;

    if (option[props.optionId] == 'addNew') {
        return addNewOption();
    }

    searchTerm.value = '';

    values.push(option);

    this.$emit('input', values);
}


/**
 * Remove the given option.
 */
function removeOption(option) {
    let values = props.value || [];

    values = _.reject(values, { id: option.id });

    this.$emit('input', values);
}


/**
 * Backspace was hit.
 */
function backspaceAction() {
    if (searchTerm.value) return;

    let values = props.value || [];

    values.pop();

    this.$emit('input', values);

    selectedOptionIndex.value = 0;
}


/**
 * Select the next option.
 */
function selectNextOption() {
    if (!matches.length) return;

    if (selectedOptionIndex.value + 1 == matches.length) return;

    selectedOptionIndex.value = selectedOptionIndex.value + 1;
}


/**
 * Select the previous option.
 */
function selectPreviousOption() {
    if (!matches.length) return;

    if (selectedOptionIndex.value === 0) return;

    selectedOptionIndex.value = selectedOptionIndex.value - 1;
}

/**
 * Add the selected option to the list.
 */
function addSelectedOption() {
    if (!matches[selectedOptionIndex.value]) {
        return addNewOption();
    }

    selectOption(
        matches[selectedOptionIndex.value]
    );

    selectedOptionIndex.value = 0;
}


/**
 * Add a brand new option.
 */
function addNewOption() {
    let values = props.value || [];
    let option = {};

    let existingOption = _.find(_.union(props.options, newOptions.value), option => {
        return option.name.toLowerCase() == searchTerm.value.toLowerCase();
    });

    if (existingOption) {
        searchTerm.value = '';

        return;
    }

    option[props.optionText] = searchTerm.value;
    option[props.optionId] = _.uniqueId();

    values.push(option);

    newOptions.value.push(option);

    searchTerm.value = '';

    this.$emit('input', values);
}


/**
 * Activate the field.
 */
function activate() {
    focused.value = true;

    input.value.focus();
}


/**
 * Deactivate the field.
 */
function deactivate() {
    focused.value = false;
}
    
</script>

<template>
    <div class="multiselect relative z-50" :class="{active: focused}" @click="activate" v-click-outside="deactivate">
        <div class="multiselect_options">
            <span class="bg-light hover:bg-red rounded cursor-pointer text-sm text-contrast font-semibold px-1 mr-1"
                v-for="option in value" v-on:click="removeOption(option)">{{option[optionText]}}</span>

            <input type="text" class="focus:outline-none bg-transparent text-text-color"
                v-on:keydown.8="backspaceAction" v-on:keydown.40="selectNextOption"
                v-on:keydown.38="selectPreviousOption" v-on:keydown.enter="addSelectedOption" ref="input"
                v-model="searchTerm">
        </div>

        <div class="multiselect_dropdown absolute w-full" v-show="focused">
            <button v-if="! matches.length" class="text-text-color">Add new tag...</button>
            <button v-for="(match, index) in matches" v-on:click="selectOption(match)"
                :class="{selected: selectedOptionIndex == index}" :value="match[optionId]">{{match[optionText]}}
            </button>
        </div>
    </div>
</template>
