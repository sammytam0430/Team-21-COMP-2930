<template>
  <b-container class="p-4.5">
    <span class="h3 font-weight-bold text-secondary">Profile</span>
    <b-button
      size="sm"
      class="ml-2 mb-2"
      variant="danger"
      v-if="isFriend"
      @click="removeFriend"
    >Remove Friend</b-button>

    <b-button
      size="sm"
      class="ml-2 mb-2"
      v-else-if="!isFriend && !currentUser"
      @click="addFriend"
    >Add Friend</b-button>
    
    <b-container class="border border-secondary rounded bg-white pb-4 pt-2">
      <b-img
        center
        thumbnail
        class="w-50 rounded-circle my-3"
        :src="require('../assets/blop.png')"
        style="min-width: 180px; max-width: 230px;"
      ></b-img>
      
      <b-row class="text-center h4 font-weight-bold justify-content-center">
        <b-col cols="auto">
          <EditField v-model="user.fname"/>&nbsp;
          <EditField v-model="user.lname"/>
        </b-col>
      </b-row>
      
      <b-row class="text-center h5 justify-content-center">
        <b-col cols="auto">
          <EditField v-model="user.prefEmail"></EditField>
        </b-col>
      </b-row>

      <hr>

      <b-row class="ml-0">
        <b-col cols="2" sm="2" md="2" lg="1">
          Interests:
        </b-col>
        <b-col class="mb-3 ml-4">
          {{selected.join(', ')}}
          <b-img :src="require('../assets/edits.png')" style="width: 15px; height: 15px;" v-if="currentUser" v-b-modal.interestmodal/>
          <EditInterests/>
        </b-col>
      </b-row>

      <b-row class="ml-0 px-3">
        <p>
          Blurb:&nbsp;
          <EditField v-model="user.randBlurb"></EditField>
        </p>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import EditField from "@/components/EditField.vue";
import EditInterests from "@/components/EditInterests";
import UsersService from "@/services/UsersService";
import FriendsService from "@/services/FriendsService";
import _ from "lodash";

export default {
  name: "profile",
  runtimeCompiler: true,
  components: { EditField, EditInterests },
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
      isFriend: false
    };
  },
  mounted() {
    this.currentUser =
      this.$session.get("currentUser") == this.$route.params.id;
    this.getUser();
    this.checkFriend();
  },
  watch: {
    "$route.params.id"() {
      this.currentUser =
        this.$session.get("currentUser") == this.$route.params.id;
      this.getUser();
      this.checkFriend();
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
    }
  }
};
</script>