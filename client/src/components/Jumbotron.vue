<template>
  <b-jumbotron header lead>
    <FormCard class="ml-5"/>
  </b-jumbotron>
</template>

<script>
import FormCard from "@/components/FormCard.vue";

export default {
  name: "jumbotron",
  components: {
    FormCard
  }
};
</script>

<style scoped>
.jumbotron {
  background-image: url("../assets/background.jpg");
  background-size: cover;
}
</style>

