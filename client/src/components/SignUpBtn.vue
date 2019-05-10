<template>
  <div class="signUpBtn">
    <router-link :to="{name: 'SignUpModal'}">
      <b-button variant="outline-primary">Sign Up</b-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SignUpBtn"
};
</script>
