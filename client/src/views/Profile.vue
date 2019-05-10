<template>
  <b-container class="p-5">
    <b-container>
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
              <b-img :src="require('../assets/edits.png')" v-b-modal.modal-1/>

              <b-modal id="modal-1" ok-only title="Select Interests">
                <p class="my-4">
                  <b-form-group class="pah" label="Check all that apply!">
                    <b-container fluid>
                      <b-form-checkbox
                        v-for="option in options"
                        v-model="selected"
                        :key="option.value"
                        :value="option.value"
                        name="interests"
                      >{{ option.text }}</b-form-checkbox>
                    </b-container>
                  </b-form-group>
                </p>
              </b-modal>
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

      <div>
        <b-row>
          <b-col cols="1"></b-col>
          <b-col cols="3" class="mb-3">
            <span>Interests:</span>
          </b-col>
          <b-col>
            {{selected.join(', ')}}
            <b-img :src="require('../assets/edits.png')" v-b-modal.modal-1/>

            <b-modal id="modal-1" ok-only title="Select Interests">
              <p class="my-4">
                <b-form-group class="pah" label>
                  <b-container fluid>
                    <b-form-checkbox
                      v-for="option in options"
                      v-model="selected"
                      :key="option.value"
                      :value="option.value"
                      name="interests"
                    >{{ option.text }}</b-form-checkbox>
                  </b-container>
                </b-form-group>
              </p>
            </b-modal>
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
    </b-container>
  </b-container>
</template>

<script>
import EditField from "@/components/EditField.vue";

export default {
  name: "profile",
  runtimeCompiler: true,
  components: { EditField },
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