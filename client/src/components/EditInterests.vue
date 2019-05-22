<template>
  <b-modal id="interestmodal" title="Select your interests">
    <b-form-checkbox-group id="interest-group" v-model="selected" name="interests" stacked>
      <b-form-checkbox
        class="h5"
        :key="interest.interestID"
        v-for="interest in interests"
        :value="interest.interestID"
        @change="changeInterest(interest.interestID)"
      >{{ interest.name }}</b-form-checkbox>
    </b-form-checkbox-group>
    <template slot="modal-footer" slot-scope="{ ok }">
      <b-button size="sm" variant="primary" @click="ok()">OK</b-button>
    </template>
  </b-modal>
</template>

<script>
import InterestsService from "@/services/InterestsService";

export default {
  name: "interestselection",
  props: ["userInterest"],
  data() {
    return {
      interests: [],
      selected: []
    };
  },
  watch: {
    userInterest() {
      this.selected = this.userInterest.map(interest => interest.interestID);
    }
  },
  mounted() {
    this.getInterests();
    this.selected = this.userInterest.map(interest => interest.interestID);
  },
  methods: {
    async getInterests() {
      const response = await InterestsService.getInterests();
      this.interests = response.data;
    },
    async changeInterest(interestID) {
      const interestExist = this.selected.includes(interestID);
      if (!interestExist) {
        const data = {
          userID: this.$route.params.id,
          friendID: interestID
        };
        const response = await InterestsService.addUserInterest(data);
        this.$bvToast.toast(response.data.message, {
          title: "Notification",
          toaster: "b-toaster-bottom-right",
          autoHideDelay: 5000,
          appendToast: true
        });
      } else {
        const response = await InterestsService.deleteUserInterest(
          this.$route.params.id,
          interestID
        );
        this.$bvToast.toast(response.data.message, {
          title: "Notification",
          toaster: "b-toaster-bottom-right",
          autoHideDelay: 5000,
          appendToast: true
        });
      }
      this.$parent.getInterests();
    }
  }
};
</script>