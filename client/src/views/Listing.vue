<template>
  <b-container>
    <span id="title">Events</span>

    <b-container>
      <b-row>
        <b-col cols="8">
          <b-container class="markBox">
            <b-row>
              <b-col cols="9">
                <b-row class="desc">{{events[0].name}}</b-row>
              </b-col>

              <b-col>{{events[0].date}}</b-col>
            </b-row>

            <b-container>
              <b-row>Location: {{events[0].location}}</b-row>
              <b-row>Start: {{events[0].start}}</b-row>
              <b-row>End: {{events[0].end}}</b-row>
            </b-container>
          </b-container>
        </b-col>

        <b-col cols="4">
          <b-container class="markBox2">
            <b-row class="p-2">Filter by:</b-row>

            <b-form-row>
              <b-form-group id="typeGroup" label="Event Type">
                <b-form-select id="type" v-model="selected" :options="options" required></b-form-select>
              </b-form-group>
            </b-form-row>

            <b-form-row>
              <b-form-group id="dateGroup" label="From:">
                <b-form-input id="date" type="date" required></b-form-input>
              </b-form-group>
            </b-form-row>

            <b-form-row>
              <b-form-group id="timeGroup" label>
                <b-form-row>
                  <b-col>
                    <b-form-input id="start" type="time" required></b-form-input>
                  </b-col>
                </b-form-row>
              </b-form-group>
            </b-form-row>

            <b-form-row>
              <b-form-group id="dateGroup" label="To:">
                <b-form-input id="date" type="date" required></b-form-input>
              </b-form-group>
            </b-form-row>

            <b-form-row>
              <b-form-group id="timeGroup" label>
                <b-form-row>
                  <b-col>
                    <b-form-input id="start" type="time" required></b-form-input>
                  </b-col>
                </b-form-row>
              </b-form-group>
            </b-form-row>
          </b-container>
        </b-col>

        <b-col cols="4">stuff.</b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
// @ is an alias to /src
import EventsService from "@/services/EventsService";

import EditField from "@/components/EditField.vue";

export default {
  name: "listing",
  mounted() {
    this.loadEvents();
  },
  methods: {
    async loadEvents() {
      const response = await EventsService.getEvents();
      this.events = response.data;
    }
  },
  components: { EditField },
  data() {
    return {
      location: "location is here",
      startTime: "start 1700",
      endTime: "end 1800",
      date: "may 10, 2019",
      fields: [],
      events: [],
      options: [
        { value: null, text: "Select an event type" },
        { value: "outdoor", text: "Outdoor Sports" },
        { value: "indoor", text: "Indoor Sports" },
        { value: "card/board", text: "Card/Board Games" },
        { value: "pc", text: "PC Games" },
        { value: "mobile", text: "Mobile Games" },
        { value: "literature", text: "Literature" },
        { value: "music", text: "Music" },
        { value: "dance", text: "Dance" },
        { value: "food", text: "Food" },
        { value: "other", text: "Other" }
      ]
    };
  }
};
</script>

<style>
#title {
  font-size: 40px;
}
.eventBox {
  width: 70%;
  height: 200px;
  border: 5px solid gray;
  border-radius: 5%;
  padding: 20px;
}

.markBox {
  background: rgb(246, 241, 247);
  padding: 20px;
}

.markBox2 {
  background: rgb(229, 221, 240);
}

.desc {
  padding: 15px;
  font-size: 150%;
}
</style>