<template>
  <b-jumbotron fluid class="mb-0">
      <p class="h1">Konnect</p>
      <p class="h4">connect to people with similar interest</p>
    <div class="my-5">
      <SignUpBtn class="d-inline-block"/>
      <LogInBtn class="d-inline-block ml-3 bg-white rounded"/>
    </div>
      <b-row>
        <b-col offset="6">
          <font-awesome-icon
            class="my-5 ml-n4 text-white"
            size="2x"
            icon="angle-double-down"
            pulse
          />
        </b-col>
      </b-row>
  </b-jumbotron>
</template>

<script>
import SignUpBtn from "@/components/SignUpBtn.vue";
import LogInBtn from "@/components/LogInBtn.vue";

export default {
  name: "jumbotron",
  components: {
    SignUpBtn,
    LogInBtn
  }
};
</script>

<style scoped>
.jumbotron {
  background-image: url(../assets/background.jpg);
  background-size: cover;
}
</style>