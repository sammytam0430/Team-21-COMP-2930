<template>
  <div>
    <router-link :to="{name: 'LogInModal'}">
      <b-button variant="outline-primary">
        Log in
      </b-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>
