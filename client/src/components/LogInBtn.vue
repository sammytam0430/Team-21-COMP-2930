<template>
  <div>
    <router-link :to="{name: 'LogInModal'}">
      <b-button variant="light" class="text-primary">
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
