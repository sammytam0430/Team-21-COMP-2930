<template>
  <div>
    <b-button size="sm" v-b-modal.modal-prevent-closing variant="outline-primary">Add</b-button>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Add Friend"
      @hidden="resetModal"
      @ok.prevent="emailState = handleSubmit()"
    >
      <form ref="form" @submit.stop.prevent>
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
  props: ["friends"],
  data() {
    return {
      email: "",
      emailState: null,
      statement: "",
      userID: 0,
      response: ""
    };
  },
  watch: {
    userID() {
      this.addFriend();
    }
  },
  methods: {
    async getUser() {
      const response = await UsersService.getUserByEmail(this.email);
      this.response = response.data;
      if (!response.data.length) {
        this.statement = "User does not exist";
        this.emailState = false;
      } else {
        this.userID = this.response[0].userID;
      }
    },
    async addFriend() {
      const data = {
        userID: this.$session.get("currentUser"),
        friendID: this.userID
      };
      if (data.userID === data.friendID) {
        this.$bvToast.toast("You can't add yourself as a friend", {
          title: "Notification",
          toaster: "b-toaster-bottom-right",
          autoHideDelay: 5000,
          appendToast: true
        });
        this.userID = 0;
        return;
      }
      const response = await FriendsService.addFriend(data);
      this.$bvToast.toast(response.data.message, {
        title: "Notification",
        toaster: "b-toaster-bottom-right",
        autoHideDelay: 5000,
        appendToast: true
      });
      if (response.data.success) {
        this.$parent.getFriends();
        this.$refs.modal.hide();
      }
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.emailState = valid ? "valid" : "invalid";
      return valid;
    },
    resetModal() {
      this.email = "";
      this.emailState = null;
      this.userID = 0;
      this.response = "";
      this.statement = "";
    },
    handleSubmit() {
      this.getUser();
      if (this.email == "") {
        this.statement = "Please enter email";
        return false;
      }
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        this.statement = "Please have a valid BCIT email";
        return false;
      }
      for (let i = 0; i < this.friends.length; i++) {
        if (this.email == this.friends[i].email) {
          this.statement = "You are konnected with your friend already";
          return false;
        }
      }
    }
  }
};
</script>