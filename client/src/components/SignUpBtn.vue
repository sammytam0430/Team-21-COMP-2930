<template>
  <div>
    <router-link class="text-white" :to="{name: 'SignUpModal'}">
      <b-button variant="primary">
        Sign Up
      </b-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SignUpBtn"
};
</script>
