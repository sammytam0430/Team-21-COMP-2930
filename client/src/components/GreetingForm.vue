<template>
  <b-form v-on:submit.prevent>
    <b-form-group id="what-group" label-for="what">
      <b-form-input id="what" v-model="form.name" type="text" required placeholder="Anything"></b-form-input>
    </b-form-group>
    <b-form-group id="where-group" label-for="where">
      <b-form-input id="where" v-model="form.location" type="text" required placeholder="Anywhere"></b-form-input>
    </b-form-group>
    <b-form-group id="when-group" label-for="when">
      <b-container class="px-0">
        <b-form-row>
          <b-col>
            <b-form-input
              id="when"
              v-model="form.date"
              type="date"
              :disabled="now === 'true'"
              required
            ></b-form-input>
          </b-col>
          <b-col cols="3">
            <b-form-checkbox
              v-on:change="setTime()"
              id="checkbox-1"
              v-model="now"
              name="checkbox-1"
              value="true"
              unchecked-value="false"
            >Now</b-form-checkbox>
          </b-col>
        </b-form-row>
      </b-container>
    </b-form-group>
    <b-container class="px-0">
      <b-form-row>
        <b-col>
          <b-form-group id="start-group" label="Start" label-for="start">
            <b-form-input
              id="start"
              v-model="form.start"
              type="time"
              :disabled="now === 'true'"
              required
              placeholder="mm/dd/yyyy"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="end-group" label="End" label-for="end">
            <b-form-input id="end" v-model="form.end" type="time" required placeholder="mm/dd/yyyy"></b-form-input>
          </b-form-group>
        </b-col>
      </b-form-row>
    </b-container>
    <b-button type="submit" variant="primary">Create Event</b-button>
  </b-form>
</template>

<script>
export default {
  name: "greetingForm",
  data() {
    return {
      now: true,
      form: {
        date: "",
        end: "",
        location: "",
        name: "",
        start: ""
      }
    };
  },
  methods: {
    setTime() {
      let now = new Date();
      let year = now.getFullYear();
      let month =
        now.getMonth() > 8 ? now.getMonth() + 1 : "0" + (now.getMonth() + 1);
      let date =
        now.getDate() > 8 ? now.getDate() : "0" + (now.getDate() + 1);
      let hour = now.getHours() > 9 ? now.getHours() : "0" + now.getHours();
      let minute =
        now.getMinutes() > 9 ? now.getMinutes() : "0" + now.getDate();
      this.form.date = year + "-" + month + "-" + date;
      this.form.start = hour + ":" + minute;
    }
  }
};
</script>
