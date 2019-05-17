<template>
  <b-container class="p-5">
    <span id="heading">Profile</span>
    <b-button variant="danger" v-if="isFriend" @click="removeFriend">Remove Friend</b-button>
    <b-button v-else-if="!isFriend && !currentUser" @click="addFriend">Add Friend</b-button>
    <div class="boo">
      <b-row class="m-5">
        <b-col cols="3">
          <div>
            <img class="pic" src="../assets/blop.png">
          </div>
        </b-col>
        <b-col offset="1">
          <b-row>
            <b-col cols="3">
              <span>Name:</span>
            </b-col>
            <b-col>
              <EditField label="First Name:" v-model="user.fname"></EditField>
              <EditField label="Last Name:" v-model="user.lname"></EditField>
            </b-col>
          </b-row>
          <b-row class="mv-5">
            <b-col cols="3">
              <span>Preferred Email:</span>
            </b-col>
            <b-col>
              <EditField label="Preferred Email:" v-model="user.prefEmail"></EditField>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="mr-5">
        <b-col offset="1" cols="3" class="mb-3">
          <span>Interests:</span>
        </b-col>
        <b-col>
          {{selected.join(', ')}}
          <b-img
            class="ml-5"
            :src="require('../assets/edits.png')"
            v-if="currentUser"
            v-b-modal.interestmodal
          />
          <EditInterests/>
        </b-col>
      </b-row>
      <b-row class="mr-5">
        <b-col offset="1" cols="3" class="mb-5">
          <span>Blurb:</span>
        </b-col>
        <b-col class="mb-5">
          <EditField label="Blurb:" v-model="user.randBlurb"></EditField>
        </b-col>
      </b-row>
    </div>
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
        toaster: 'b-toaster-bottom-right',
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
        toaster: 'b-toaster-bottom-right',
        autoHideDelay: 5000,
        appendToast: true
      });
      this.checkFriend();
    }
  }
};
</script>

<style scoped>
#heading {
  font-size: 30px;
  font-weight: bold;
  color: rgb(98, 154, 180);
}
p {
  background: rgb(221, 241, 250);
}
.boo {
  background: rgb(221, 241, 250);

  border: 1px solid rgb(223, 217, 222);
  border-radius: 3%;
}
.boop {
  background: #252c3a;
}
.pic {
  width: 100%;
  outline: 10px solid rgb(221, 241, 250);
  outline-offset: -11px;
  border: 5px solid rgb(119, 171, 196);
  border-radius: 20%;
}
.pah {
  padding: 20px;
}
</style>