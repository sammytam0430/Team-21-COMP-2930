<template>
  <b-container class="p-5">
    <span id="heading">Profile</span>
    <div class="boo">
      <b-row class="m-5">
        <b-col cols="3">
          <div>
            <img class="pic" src="../assets/blop.png">
          </div>
        </b-col>
        <b-col cols="1"></b-col>
        <b-col>
          <b-row>
            <b-col cols="3">
              <span>First Name:</span>
            </b-col>
            <b-col>
              <EditField label="First Name:" v-model="user.fname"></EditField>
            </b-col>
          </b-row>

          <b-row>
            <b-col cols="3">
              <span>Last Name:</span>
            </b-col>
            <b-col>
              <EditField label="Last Name:" v-model="user.lname"></EditField>
            </b-col>
          </b-row>

          <b-row class="mb-3">
            <b-col cols="3">
              <span>Email:</span>
            </b-col>
            <b-col>{{user.email}}</b-col>
          </b-row>

          <b-row>
            <b-col cols="3">
              <span>Preferred Email:</span>
            </b-col>
            <b-col>
              <EditField label="Preferred Email:" v-model="user.prefEmail"></EditField>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <div>
        <b-row>
          <b-col cols="1"></b-col>
          <b-col cols="3" class="mb-3">
            <span>Interests:</span>
          </b-col>
          <b-col>
            {{selected.join(', ')}}
            <b-img :src="require('../assets/edits.png')" v-b-modal.interestmodal/>
            <EditInterests/>
          </b-col>
        </b-row>
      </div>

      <b-row>
        <b-col cols="1"></b-col>
        <b-col cols="3" class="mb-5">
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
import _ from "lodash";

export default {
  name: "profile",
  runtimeCompiler: true,
  components: { EditField, EditInterests },
  data() {
    return {
      response: {},
      selected: [],
      user: []
    };
  },
  mounted() {
    this.getUser();
  },
  watch: {
    "$route.params.id"() {
      this.getUser();
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
    async getUser() {
      const response = await UsersService.getUser(this.$route.params.id);
      this.user = response.data[0];
    },
    async updateUser() {
      const response = await UsersService.updateUser(this.user.userID,this.user);
      this.response = response.data;
    },
    debouncer() {
      this.updateUser();
    }
  }
};
</script>

<style scoped>
#heading {
  font-size: 30px;
  font-weight: bold;
}
p {
  background: rgb(206, 230, 240);
}
.boo {
  background: rgb(206, 230, 240);

  border: 3px solid black;
}
.boop {
  background: #252c3a;
}
.pic {
  width: 100%;
}
.pah {
  padding: 20px;
}
</style>