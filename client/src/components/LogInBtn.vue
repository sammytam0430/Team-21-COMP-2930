<template>
  <div class="logInBtn">
    <router-link :to="{name: 'LogInModal'}">
      <b-button variant="primary">Log In</b-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>
