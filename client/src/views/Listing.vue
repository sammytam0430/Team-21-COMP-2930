<template>
  <b-container>
    <EventDetails/>
    <span class="h1 mr-5">Events</span>
    <b-button v-b-toggle.collapse variant="outline-info">Filter</b-button>
    <b-container>
      <b-row>
        <b-col sm="6" md="4">
          <b-collapse visible id="collapse" class="mt-2">
            <b-container class="markBox2 py-2">
              <b-row class="pl-2 h3">Filter by:</b-row>
              <b-form-group id="typeGroup" label="Event Type" label-for="type">
                <b-form-select id="type" v-model="selected" :options="options" required></b-form-select>
              </b-form-group>
              <b-form-group id="dateGroup" label="From:">
                <b-form-input id="date" type="date" required></b-form-input>
                <b-form-input id="start" type="time" required></b-form-input>
              </b-form-group>
              <b-form-group id="dateGroup" label="To:">
                <b-form-input id="date" type="date" required></b-form-input>
                <b-form-input id="start" type="time" required></b-form-input>
              </b-form-group>
            </b-container>
          </b-collapse>
        </b-col>
        <b-col sm="6" md="8">
          <b-card-group class="mt-2" columns>
            <b-card border-variant="info" :key="event.eventID" v-for="event in events" :title="event.name">
              <b-card-sub-title>{{ event.description }}</b-card-sub-title>
              <hr>
              <p>on {{event.date}}</p>
              <p>at {{event.location}}</p>
              <p>starting at {{event.start}}</p>
              <Timestamp :time="event.created_at"/>
              <div slot="footer">
                <router-link :to="{name: 'EventDetails', params: {id: event.eventID}}">
                  <b-button variant="outline-info">Details</b-button>
                </router-link>
              </div>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import EventsService from "@/services/EventsService";
import InterestsService from "@/services/InterestsService";
import EventDetails from "@/components/EventDetails";
import Timestamp from "@/components/Timestamp";

export default {
  name: "listing",
  components: {
    Timestamp,
    EventDetails
  },
  beforeCreate() {
    if (!this.$session.exists()) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      location: "location is here",
      startTime: "start 1700",
      endTime: "end 1800",
      date: "may 10, 2019",
      selected: 0,
      fields: [],
      events: [],
      options: [{ value: 0, text: "Select an Event Type" }]
    };
  },
  mounted() {
    this.loadEvents(), this.getEventType();
  },
  methods: {
    async loadEvents() {
      const response = await EventsService.getEvents();
      this.events = response.data;
    },
    async getEventType() {
      const response = await InterestsService.getInterests();
      for (const option of response.data) {
        this.options.push({ value: option.interestID, text: option.name });
      }
    }
  }
};
</script>

<style>
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