<template>
  <b-container class="p-4.5">
    <b-row class="mb-2">
      <b-col>
        <span class="h3 font-weight-bold text-secondary">Profile</span>
      </b-col>
      <b-col class="text-right">
        <b-button size="sm" variant="danger" v-if="isFriend" @click="removeFriend">Remove Friend</b-button>
        <b-button size="sm" v-else-if="!isFriend && !currentUser" @click="addFriend">Add Friend</b-button>
      </b-col>
    </b-row>
    <b-container class="border border-secondary rounded bg-white pb-4 pt-2 shadow">
      <b-row class="justify-content-center">
        <InitialCircle
          style="font-size: 70px; width: 125px; height: 125px"
          class="justify-content-center my-3"
          :initial="initial"
        />
      </b-row>
      <b-row class="text-center h4 font-weight-bold justify-content-center">
        <b-col cols="auto">
          <span>{{user.fname}} {{user.lname}}</span>
        </b-col>
      </b-row>
      <b-row class="text-center h6 justify-content-center">
        <b-col cols="auto">
          <span>{{user.email}}</span>
        </b-col>
      </b-row>
      <b-row class="text-center h6 justify-content-center">
        <b-col cols="auto">
          <EditField v-model="user.prefEmail"/>
        </b-col>
      </b-row>
      <hr>
      <b-row class="ml-0">
        <b-col cols="2" sm="2" md="2" lg="1">Interests:</b-col>
        <b-col class="mb-3">
          {{interests.map(interest => interest.name).join(', ')}}
          <b-img
            :src="require('../assets/edits.png')"
            style="width: 15px; height: 15px;"
            v-if="currentUser"
            v-b-modal.interestmodal
          />
          <EditInterests :userInterest="interests"/>
        </b-col>
      </b-row>
      <b-row class="ml-0 px-3">
        <p>
          Blurb:&nbsp;
          <EditField v-model="user.randBlurb"/>
        </p>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import EditField from "@/components/EditField.vue";
import EditInterests from "@/components/EditInterests";
import InitialCircle from "@/components/InitialCircle";
import UsersService from "@/services/UsersService";
import FriendsService from "@/services/FriendsService";
import InterestsService from "@/services/InterestsService";
import _ from "lodash";

export default {
  name: "profile",
  runtimeCompiler: true,
  components: { EditField, EditInterests, InitialCircle },
  beforeCreate() {
    if (!this.$session.exists()) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      response: {},
      selected: [],
      user: [],
      currentUser: false,
      isFriend: false,
      interests: [],
      initial: ""
    };
  },
  mounted() {
    this.currentUser =
      this.$session.get("currentUser") == this.$route.params.id;
    this.getUser();
    this.checkFriend();
    this.getInterests();
  },
  watch: {
    "$route.params.id"() {
      this.currentUser =
        this.$session.get("currentUser") == this.$route.params.id;
      this.getUser();
      this.checkFriend();
      this.getInterests();
    },
    user: {
      deep: true,
      handler() {
        this.debouncer.call(this);
      }
    }
  },
  created() {
    this.debouncer = _.debounce(this.debouncer, 1000);
  },
  methods: {
    debouncer() {
      this.updateUser();
    },
    async getUser() {
      const response = await UsersService.getUser(this.$route.params.id);
      this.user = response.data[0];
      this.initial =
        this.user.fname.substring(0, 1).toUpperCase() +
        this.user.lname.substring(0, 1).toUpperCase();
      this.fullname = this.user.fname + " " + this.user.lname;
    },
    async updateUser() {
      const response = await UsersService.updateUser(
        this.user.userID,
        this.user
      );
      this.response = response.data;
    },
    async checkFriend() {
      const response = await FriendsService.getFriend(
        this.$session.get("currentUser"),
        this.$route.params.id
      );
      this.isFriend = response.data.length ? true : false;
    },
    async addFriend() {
      const data = {
        userID: this.$session.get("currentUser"),
        friendID: this.$route.params.id
      };
      const response = await FriendsService.addFriend(data);
      this.$bvToast.toast(response.data.message, {
        title: "Notification",
        toaster: "b-toaster-bottom-right",
        autoHideDelay: 5000,
        appendToast: true
      });
      this.checkFriend();
    },
    async removeFriend() {
      const response = await FriendsService.deleteFriend(
        this.$session.get("currentUser"),
        this.$route.params.id
      );
      this.$bvToast.toast(response.data.message, {
        title: "Notification",
        toaster: "b-toaster-bottom-right",
        autoHideDelay: 5000,
        appendToast: true
      });
      this.checkFriend();
    },
    async getInterests() {
      const response = await InterestsService.getInterestsByUser(
        this.$route.params.id
      );
      this.interests = response.data;
    }
  }
};
</script>