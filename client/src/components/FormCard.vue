<template>
  <div>
    <b-card title="Find people to join your event" tag="article" style="max-width: 25rem;">
      <hr>
      <GreetingForm/>
    </b-card>
  </div>
</template>

<script>
import GreetingForm from "@/components/GreetingForm.vue";

export default {
  name: "card",
  components: {
    GreetingForm
  }
};
</script>
