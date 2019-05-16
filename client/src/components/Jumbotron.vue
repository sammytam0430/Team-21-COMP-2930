<template>
  <b-jumbotron fluid class="mb-0">
    <FormCard/>
    <b-row>
      <b-col offset="6">
        <font-awesome-icon class="my-5 ml-n4 text-white" size="2x" icon="angle-double-down" pulse/>
      </b-col>
    </b-row>
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
  background-image: url(../assets/background.jpg);
  background-size: cover;
}
</style>

