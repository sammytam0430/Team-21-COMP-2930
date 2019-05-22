<template>
  <div class="d-inline">
    <span v-if="!editing">{{value}}</span>
    <span v-else>
      <input
        v-model="value"
        @input="$emit('input', $event.target.value)"
        @keydown.enter="editing = false"
        @blur="editing = false"
        ref="input"
        type="text"
        class="form-control"
        autofocus="true"
      >
    </span>
    <img
      src="../assets/edits.png"
      style="width: 15px; height: 15px"
      class="ml-2"
      v-if="!editing && currentUser"
      @click="clicked"
    >
  </div>
</template>

<script>
export default {
  name: "EditField",
  props: ["label", "value", "currentUser"],
  data() {
    return {
      editing: false,
    };
  },
  methods: {
    // function to be executed when edit button is clicked
    clicked() {
      this.editing = true;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    }
  }
};
</script>
