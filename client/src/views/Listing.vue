<template>
  <b-container fluid class="px-5">
    <EventDetails/>
    <span class="mx- h3">Events</span>
    <b-button v-b-toggle.collapse class="ml-3 mt-n2" variant="outline-secondary">Filters</b-button>
    <b-container fluid>
      <b-collapse visible id="collapse" class="mt-2">
        <b-row class="rounded bg-white p-3" align-v="end">
          <b-col lg="3">
            <b-form-group id="typeGroup" label="Event Type" label-for="type">
              <b-form-select id="type" v-model="selected" :options="options" required></b-form-select>
            </b-form-group>
          </b-col>
          <b-col md="3" lg="2">
    
          </b-col>
          <b-col md="3" lg="2">
                 <b-form-group id="dateGroup" label="From:">
              <b-form-input id="date" type="date" required></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="3" lg="2">
            <b-form-group id="dateGroup" label="To:">
              <b-form-input id="date" type="date" required></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="3" lg="2">
    
          </b-col>
        </b-row>
      </b-collapse>
      <b-row class="mt-4">
        <b-card-group columns>
          <b-card
            border-variant="info"
            :key="event.eventID"
            :title="event.name"
            v-for="event in events"
          >
            <b-card-sub-title class="h6" >{{`${event.date[0]}, ${event.date[1]} ${event.date[2]}, ${event.date[3]}`}}</b-card-sub-title>
            <hr>
            <b-row class="mb-2">
              <b-col cols="1">
              <font-awesome-icon fixed-width icon="clock"/>
              </b-col>
              <b-col class="float-left text-left">
                <span>{{event.start}} to {{event.end}}</span>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="1">
                <font-awesome-icon fixed-width icon="map-marker-alt"/>
              </b-col>
              <b-col class="float-left text-left">
              <span>{{event.location}}</span>
              </b-col>
            </b-row>
            <hr>
            <b-row>
              <b-col md="8">
                <Timestamp :time="event.created_at"/>
              </b-col>
              <b-col lg="4">
                <router-link :to="{name: 'EventDetails', params: {id: event.eventID}}">
                  <b-button size="md" variant="outline-primary" class="px-1">Details</b-button>
                </router-link>
              </b-col>
            </b-row>
          </b-card>
        </b-card-group>
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
      for (let event of this.events) {
        event.date = new Date(event.date + " " + event.start)
          .toString()
          .split(" ");
      }
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
