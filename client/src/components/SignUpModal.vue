<template>
  <b-modal id="signup" v-model="show" title="Sign Up" @hide="close">
    <b-alert
      v-model="showAlert"
      :variant="response.success ? 'success' : 'danger'"
    >{{ response.message }}</b-alert>
    <b-form @submit.prevent="createAccount">
      <b-container class="px-0">
        <b-form-row>
          <b-col>
            <b-form-group id="fname-group" label="First Name" label-for="fname">
              <b-form-input id="fname" v-model="signup.fname" type="text" required></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="lname-group" label="Last Name" label-for="lname">
              <b-form-input id="lname" v-model="signup.lname" type="text" required></b-form-input>
            </b-form-group>
          </b-col>
        </b-form-row>
      </b-container>
      <b-form-group id="email-group" label="School Email" label-for="email">
        <b-form-input
          id="email"
          v-model="signup.email"
          type="email"
          pattern="\w+@my\.bcit\.ca"
          required
          placeholder="example@my.bcit.ca"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="prefEmail-group"
        label="Preferred Email"
        label-for="prefEmail"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="prefEmail"
          v-model="signup.prefEmail"
          type="email"
          placeholder="example@gmail.com"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="password-group" label="Password" label-for="password">
        <b-form-input id="password" v-model="signup.password" type="password" required></b-form-input>
      </b-form-group>
      <b-form-checkbox
        id="checkbox"
        name="checkbox"
        v-model="agreed"
        value="true"
        unchecked-value="false"
        required
      >
        I agree to the
        <a href v-on:click.prevent v-b-modal.conditions>Terms and Conditions</a>
        <Conditions/>
      </b-form-checkbox>
      <b-button class="w-100 mt-3" type="submit" variant="primary">Sign Up</b-button>
    </b-form>
    <template slot="modal-footer">
      <span class="mr-auto">
        Already have an account?
        <router-link :to="{name: 'LogInModal'}">Log in</router-link>
      </span>
    </template>
  </b-modal>
</template>

<script>
import UsersService from "@/services/UsersService";
import Conditions from "@/components/Conditions";

export default {
  name: "SignUpModal",
  components: { Conditions },
  data() {
    return {
      agreed: false,
      response: {
        success: false,
        message: {}
      },
      signup: {
        fname: "",
        lname: "",
        email: "",
        prefEmail: "",
        password: ""
      },
      showAlert: false,
      show: this.$route.meta.showSignUp
    };
  },
  watch: {
    "$route.meta"({ showSignUp }) {
      this.show = showSignUp;
    }
  },
  methods: {
    async createAccount() {
      if (this.agreed) {
        const response = await UsersService.createUser(this.signup);
        this.response = response.data;
        if (this.response.success) {
          this.showAlert = true;
        } else {
          this.showAlert = true;
        }
      }
    },
    close() {
      if (this.$route.path !== "/login") {
        this.$router.push("/");
      }
    }
  }
};
</script>
