<template>
  <b-container class="p-2">
    <span id="heading">Profile</span>
    <b-button variant="danger" v-if="isFriend" @click="removeFriend">Remove Friend</b-button>
    <b-button v-else-if="!isFriend && !currentUser" @click="addFriend">Add Friend</b-button>
    <div class="boo">

      <b-row class="m-3">
            <b-img center thumbnail rounded="circle" class="pic" :src="require('../assets/blop.png')"></b-img>
      </b-row>

          <b-row class="mt-2 ml-0">
            <b-col class="col-lg-2 col-md-2 col-4 pr-0">
              <span>First Name:</span>
            </b-col>
            <b-col class="text-left pl-0">
              <EditField label="First Name:" v-model="user.fname"></EditField>
            </b-col>
          </b-row>

          <b-row class="ml-0">
            <b-col class="col-lg-2 col-md-2 col-4 pr-0">
              <span>Last Name:</span>
            </b-col>
            <b-col class="text-left pl-0">
              <EditField label="Last Name:" v-model="user.lname"></EditField>
            </b-col>
          </b-row>
          
          <!-- <b-row class="ml-0">
            <b-col class="col-lg-2 col-md-2 col-4 pr-0 pb-3">
              <span>Email:</span>
            </b-col>
            <b-col class="text-left pl-0 pb-3">{{user.email}}</b-col>
          </b-row> -->

          <b-row class="ml-0">
            <b-col class="col-lg-2 col-md-2 col-4 pr-0">
              <span>Preferred Email:</span>
            </b-col>
            <b-col class="text-left pl-0">
              <EditField label="Preferred Email:" v-model="user.prefEmail"></EditField>
            </b-col>
          </b-row>
      
      <hr class="hr">
      
      <b-row class="ml-0">
        <b-col class="col-lg-1 col-md-2 col-3 pr-0">
          <span>Interests:</span>
        </b-col>
        <b-col class="mb-3">
          {{selected.join(', ')}}
          <b-img
            :src="require('../assets/edits.png')"
            v-if="currentUser"
            v-b-modal.interestmodal
          />
          <EditInterests/>
        </b-col>
      </b-row>
      
      <b-row class="ml-0">
          <b-col class="col-lg-1 col-md-1 col-2 pr-0">
            <span>Blurb: &nbsp; &nbsp;</span>
          </b-col>
          <b-col>
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

.pah {
  padding: 20px;
}

.hr{
  width: 95%;
}
@media only screen and (min-width: 1440px){
  .pic{
    width: 165px;
    height: 165px;
  }
}

@media only screen and (max-width: 1439px){
  .pic{
    width: 150px;
    height: 150px;
  }
}

@media only screen and (max-width: 767px){
  .pic{
    width: 110px;
    height: 110px;
  }
}

@media only screen and (max-width: 424px){
  .boo{
    font-size: 15px;
  }

  #heading{
    font-size: 25px;
  }
}

@media only screen and (max-width: 320px){
  .boo{
    font-size: 13px;
  }

.pic {
  width: 80px;
  height: 80px;
  }
}

</style>