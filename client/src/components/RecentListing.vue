<template>
  <div class="pb-5 px-5">
    <h1 class="text-center py-5">Recent Events</h1>
    <b-card-group columns>
      <b-card :key="event.eventID" v-for="event in events" :title="event.name">
        <b-card-text>{{ event.description }}</b-card-text>
        <div slot="footer">
          <Timestamp :time="event.created_at"/>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import EventsService from "@/services/EventsService";
import Timestamp from "@/components/Timestamp.vue";

export default {
  name: "recentListing",
  components: {
    Timestamp
  },
  data() {
    return {
      events: {}
    };
  },
  mounted() {
    this.loadEvents();
  },
  methods: {
    async loadEvents() {
      const response = await EventsService.getEvents();
      this.events = response.data;
    }
  }
};
</script>
