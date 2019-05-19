<template>
  <div>
    <b-button size="sm" v-b-modal.modal-prevent-closing variant="outline-primary">Add</b-button>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Add Friend"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group>
          <b-form-input
            id="Email-input"
            pattern="\w+@my\.bcit\.ca"
            placeholder="example@my.bcit.ca"
            v-model="email"
            type="email"
            :state="emailState"
          ></b-form-input>
          <div>{{this.statement}}</div>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import FriendsService from "@/services/FriendsService";
import UsersService from "@/services/UsersService";

export default {
  name: "addfriend",
  props: ["friends", "user"],
  data() {
    return {
      email: "",
      emailState: null,
      submitEmails: [],
      currentUser: false,
      statement: "",
      submitEmail: "",
      foundFriendID: 0
    };
  },
  watch:{
    foundFriendID(){
      this.handleSubmit();
      this.addFriend();
    },
    submitEmail() {
      this.getUser();
    }
  },
  methods: {
    async getUser() {
      let id = 1;
      const response = await UsersService.getUser(id);

      while (response.data[0] != null) {
        const response = await UsersService.getUser(id);
        if (response.data[0].email == this.email) {
          return this.foundFriendID = id;
        }
        id++;
      }
    },
    async addFriend() {
      const data = {
        userID: this.user.userID,
        friendID: this.foundFriendID
      };

      const response = await FriendsService.addFriend(data);
      this.$bvToast.toast(response.data.message, {
        title: "Notification",
        toaster: "b-toaster-bottom-right",
        autoHideDelay: 5000,
        appendToast: true
      });
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.emailState = valid ? "valid" : "invalid";
      return valid;
    },
    resetModal() {
      this.email = "";
      this.emailState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.emailState = this.handleSubmit();
    },
    handleSubmit() {
      this.submitEmail = this.email;
      if (this.email == "") {
        this.statement = "Please enter email";
        return false;
      }
      if (this.email == this.user.email) {
        this.statement = "Please have a valid friend's email";
        return false;
      }
      for (let i = 0; i < this.friends.length; i++) {
        if (this.email == this.friends[i].email) {
          this.statement = "You are konnected with your friend already";
          return false;
        }
      }
      if (this.foundFriendID == 0) {
        this.statement = "Friend is not found";
        return false;
      }
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        this.statement = "Please have a valid BCIT email";
        return false;
      }
      // Push the name to submitted names
      this.submitEmails.push(this.email);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
      

    }
  }
};
</script>