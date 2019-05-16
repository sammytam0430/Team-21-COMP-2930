<template>
  <p>
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
    <img src="../assets/edits.png" class="ml-2" v-if="!editing && currentUser" @click="clicked">
  </p>
</template>

<script>
export default {
  name: "EditField",
  props: ["label", "value"],
  data() {
    return {
      editing: false,
      currentUser: this.$session.get("currentUser") == this.$route.params.id
    };
  },
  methods: {
    clicked() {
      this.editing = true;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    }
  }
};
</script>
