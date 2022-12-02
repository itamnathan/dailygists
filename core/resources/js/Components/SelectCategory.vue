<template>
  <div>

    <div class="flex justify-between items-center mx-2">
      <label for="components-form-token-input-1" class="text-sm pt-4">Select Category</label>

      <div v-if="showCount" class="count">
        <span>{{ categories.length }}</span> cats
      </div>
    </div>


    <div v-if="options" :id="id">
      <ul class="flex flex-auto flex-wrap">
        <li v-for="option in availableOptions" :key="option" :value="option"
          class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 ">
          <div class="text-xs font-normal leading-none max-w-full flex-initial"> {{ option.name }}</div>
          <div class="flex flex-auto flex-row-reverse">
            <div @click="addCat(option)">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2 rotate-45">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          </div>
        </li>
      </ul>
    </div>


    <div class="pt-4" tabindex="-1">

      <div class="cat-input" :class="{ 'with-count': showCount }">
        <input v-model="newCat" type="text" :list="id" placeholder="create new category...." autocomplete="off"
          @keydown.enter="createCat(newCat)" v-if="$page.props.auth.user.type == 4 || $page.props.auth.user.type == 6"
          @keydown.,="createCat(newCat)" @keydown.prevent.tab="createCat(newCat)"
          class="border-0 border-b-[0.2px] border-gray-900/50 focus:ring-0 focus:border-black" />
        <div class="border-b text-sm text-gray-600"
          v-if="$page.props.auth.user.type != 4 || $page.props.auth.user.type != 6">
          Selected
        </div>


        <ul class="flex-wrap mt-4 no-scrollbar" ref="catsUl">
          <li v-for="(cat, index) in categories" :key="cat"
            class="cat flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 "
            :class="{ duplicate: cat === duplicate }">
            <div class="text-xs font-normal leading-none max-w-full flex-initial"> {{ cat.name }}</div>
            <div class="flex flex-auto flex-row-reverse">
              <div @click="removeCat(index)" class="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-x cursor-pointer text-red-300 hover:text-red-600 rounded-full w-4 h-4 ml-2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </div>
          </li>
        </ul>


      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, nextTick, onMounted, computed } from "vue";
import { useEditorStore } from '@/stores/editor'
import { storeToRefs } from 'pinia'
import { useForm, Link } from "@inertiajs/inertia-vue3";




const props = defineProps({

  name: { type: String, default: "" },
  allowCustom: { type: Boolean, default: true },
  showCount: { type: Boolean, default: true },
})


const form = useForm({
  name: ''
})
const store = useEditorStore()
const { categories } = storeToRefs(store)

// Cats
const options = ref([])
const newCat = ref("");
const id = Math.random().toString(36).substring(7);
const createCat = async (cat) => {
  if (!cat) return;
  await axios.post(route('category.store'), { name: cat }).then(

  )
  loadResources()
  newCat.value = ""; // reset newCat
};
const addCat = (cat) => {
  if (!cat) return; // prevent empty tag
  // only allow predefined tags when allowCustom is false
  if (!props.allowCustom && !options.value.includes(cat)) return;
  // return early if duplicate
  if (categories.value.includes(cat)) {
    handleDuplicate(cat);
    return;
  }
  categories.value.push(cat);
  newCat.value = ""; // reset newTag
};
const removeCat = (index) => {
  categories.value.splice(index, 1);
};

// handling duplicates
const duplicate = ref(null);
const handleDuplicate = (cat) => {
  duplicate.value = cat;
  setTimeout(() => (duplicate.value = null), 1000);
  newCat.value = "";
};

// positioning and handling Cat change
const paddingLeft = ref(10);
const catsUl = ref(null);
const onCatsChange = () => {
  // position cursor
  const extraCushion = 15;
  paddingLeft.value = catsUl.value.clientWidth + extraCushion;
  // scroll to end of Cats
  catsUl.value.scrollTo(catsUl.value.scrollWidth, 0);
};
watch(categories, () => nextTick(onCatsChange), { deep: true });



onMounted(() => {
  onCatsChange
  loadResources()
})


function loadResources() {

  axios.get('/api/categories').then(response => {
    let val = []
    val = response.data.filter(
      el => {
        return !options.value.find(
          obj => {
            return el === obj
          }
        )
      }
    )
    val.forEach(element => {
      options.value.push(element);
    });
    options.value = response.data;
  });
}

// options
const availableOptions = computed(() => {
  if (!options.value) return false;
  return options.value.filter((option) => !categories.value.includes(option));
});

</script>
<style scoped>
.cat-input {
  position: relative;
}

ul {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 2;
  padding: 0;
  top: 0;
  bottom: 0;
  left: 10px;
}

.cat {
  white-space: nowrap;
  transition: 0.1s ease background;
}

input {
  width: 100%;
  padding: 10px;
}

.delete {
  color: white;
  cursor: pointer;
}

@keyframes shake {

  10%,
  90% {
    transform: scale(0.9) translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: scale(0.9) translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: scale(0.9) translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: scale(0.9) translate3d(4px, 0, 0);
  }
}

.cat.duplicate {
  @apply bg-red-100 border border-red-300 text-red-700
}

.cat.duplicate {
  animation: shake 1s;
}

.count {
  display: block;
  font-size: 0.8rem;
  white-space: nowrap;
}

.count span {
  background: #eee;
  padding: 2px;
  border-radius: 2px;
}

.with-count input {}

.with-count ul {}
</style>