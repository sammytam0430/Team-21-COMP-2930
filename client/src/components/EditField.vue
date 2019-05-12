<template>
  <p>
    <span v-if="!editing">{{value}}</span>
    <span v-else>
      <input
        :value="value"
        @input="$emit('input', $event.target.value)"
        @keydown.enter="editing = false"
        @blur="editing = false"
        type="text"
        class="form-control"
        autofocus="true"
      >
    </span>
    <img src="../assets/edits.png" class="ml-5" v-if="!editing && currentUser" @click="editing = true">
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
  }
};
</script>
