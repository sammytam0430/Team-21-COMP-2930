<template>
  <b-modal id="login" v-model="show" title="Log in" @hide="close">
    <b-alert
      :show="showAlert"
      :variant="response.success ? 'success' : 'danger'"
    >{{ response.message }}</b-alert>
    <b-form @submit.prevent="verifyUser">
      <b-form-group id="email-group" label="Email" label-for="login-email">
        <b-form-input
          id="login-email"
          v-model="login.email"
          type="email"
          required
          placeholder="example@my.bcit.ca"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="password-group" label="Password" label-for="login-password">
        <b-form-input id="login-password" v-model="login.password" type="password" required></b-form-input>
      </b-form-group>
      <b-form-checkbox
        id="login-checkbox"
        name="checkbox"
        value="true"
        unchecked-value="false"
      >Remember Me</b-form-checkbox>
      <b-button class="w-100 my-3" type="submit" variant="primary">Log in</b-button>
      <a href v-on:click.prevent>Forgot Password?</a>
    </b-form>
    <template slot="modal-footer">
      <span class="mr-auto">
        Don't have an account?
        <router-link :to="{name: 'SignUpModal'}">Sign Up</router-link>
      </span>
    </template>
  </b-modal>
</template>

<script>
// import necessary components and services
import UsersService from "@/services/UsersService";

export default {
  name: "LogInModal",
  data() {
    return {
      response: {
        success: null,
        message: {}
      },
      login: {
        email: "",
        password: ""
      },
      showAlert: false,
      show: this.$route.meta.showLogIn
    };
  },
  watch: {
    "$route.meta"({ showLogIn }) {
      this.show = showLogIn;
    }
  },
  methods: {
    // get user input and validate user email and password
    async verifyUser() {
      const response = await UsersService.authenticateUser(this.login);
      this.response = response.data;
      if (this.response.success) {
        this.$session.start();
        this.$session.set("currentUser", this.response.userID);
        this.setActive();
        this.$router.push("dashboard");
      } else {
        this.showAlert = true;
      }
    },
    // set user isActive to true in db
    async setActive() {
      await UsersService.updateUser(this.$session.get("currentUser"), {isActive: true});
    },
    // event handler on modal close
    close() {
      if (this.$route.path !== "/signup") {
        this.$router.push("/");
      }
    }
  }
};
</script>
