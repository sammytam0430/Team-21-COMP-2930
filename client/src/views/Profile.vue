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
              <EditField label="First Name:" v-model="firstName"></EditField>
            </b-col>
          </b-row>

          <b-row>
            <b-col cols="3">
              <span>Last Name:</span>
            </b-col>
            <b-col>
              <EditField label="Last Name:" v-model="lastName"></EditField>
            </b-col>
          </b-row>

          <b-row class="mb-3">
            <b-col cols="3">
              <span>Email:</span>
            </b-col>
            <b-col>{{email}}</b-col>
          </b-row>

          <b-row>
            <b-col cols="3">
              <span>Preferred Email:</span>
            </b-col>
            <b-col>
              <EditField label="Preferred Email:" v-model="prefEmail"></EditField>
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
          <EditField label="Blurb:" v-model="blurb"></EditField>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import EditField from "@/components/EditField.vue";
import EditInterests from "@/components/EditInterests";
// import UsersService from "@/services/UsersService";

export default {
  name: "profile",
  runtimeCompiler: true,
  components: { EditField, EditInterests },
  data() {
    return {
      firstName: "Cookie",
      lastName: "Monster",
      email: "cmonster27@my.bcit.com",
      prefEmail: "cmooshie@gmail.com",

      interests: "blip, blop and bloop",
      blurb:
        "something nothing whatever - likes random days of nothingness and sitting in silence; the end is near",
      selected: [],
      options: [
        { text: "Outdoor Sports", value: "Outdoor Sports" },
        { text: "Indoor Sports", value: "Indoor Sports" },
        { text: "Card/Board games", value: "Card/Board Games" },
        { text: "PC Games", value: "PC Games" },
        { text: "Mobile Games", value: "Mobile Games" },
        { text: "Literature", value: "Literature" },
        { text: "Music", value: "Music" },
        { text: "Dance", value: "Dance" },
        { text: "Food", value: "Food" },
        { text: "Other", value: "Other" }
      ]
    };
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