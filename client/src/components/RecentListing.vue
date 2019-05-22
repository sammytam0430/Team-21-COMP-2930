<template>
  <b-container class="pb-5 px-5 mt-n5 bg-white rounded">
    <h1 class="text-center py-5">Upcoming Events</h1>
    <b-card-group columns>
      <b-card :key="event.eventID" v-for="event in events" :title="event.name">
        <b-card-text>{{ event.description }}</b-card-text>
        <hr>
        <Timestamp :time="event.created_at"/>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
// import necessary components and services
import EventsService from "@/services/EventsService";
import Timestamp from "@/components/Timestamp.vue";

export default {
  name: "recentListing",
  components: { Timestamp },
  data() {
    return {
      events: {}
    };
  },
  mounted() {
    this.loadEvents();
  },
  methods: {
    // get events from db
    async loadEvents() {
      const response = await EventsService.getEvents();
      this.events = response.data;
    }
  }
};
</script>
