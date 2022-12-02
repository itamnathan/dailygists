<template>
  <div :class="classes" ><slot name="before"></slot> {{ befor +' ' + ago(datess) }} <slot></slot></div>
</template>

<script>
import moment from "moment";
export default {
  props: ["datess", "classes", "befor"],
  setup() {
    function ago(dat) {
      return moment(dat).fromNow();
    }
    return {
      ago,
    };
  },
};
</script>

<style>
</style>
