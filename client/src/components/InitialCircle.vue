<template>
  <div
    class="icon d-inline-flex p-2 border border-white rounded-circle text-white font-weight-bold"
    :style="`background-color: ${color}`"
  >{{initial}}</div>
</template>

<script>
export default {
  props: ["initial"],
  watch: {
    initial() {
      this.color = "#" + Math.floor(Math.random() * 9017753 + 1048576).toString(16);
    }
  },
  data() {
    return {
      color: "#" + Math.floor(Math.random() * 9017753 + 1048576).toString(16)
    };
  }
};
</script>