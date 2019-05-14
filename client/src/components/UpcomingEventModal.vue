<template>
  <div>
    <div class="mb-2">
      <a herf id="popover-upcoming" @click.prevent="showMsgBoxOne(events)">
        <font-awesome-icon id="notification" class="mx-2" size="lg" icon="bell"/>
      </a>
      <b-popover target="popover-upcoming" title="Upcoming Event" placement="bottomleft">
        <b-list-group>
          <b-list-group-item
            style="max-width: 30rem;"
            v-for="event in events"
            :key="event.name"
          >Join {{event.name}} starts {{event.start}} @ {{event.location}} {{event.date}}</b-list-group-item>
        </b-list-group>
      </b-popover>
    </div>
  </div>
</template>

<script>
import EventsService from "@/services/EventsService";
export default {
  data() {
    return {
      events: [],
    };
  },
  mounted() {
    this.loadEvents();
  },
  methods: {
    async loadEvents() {
      const response = await EventsService.getEvents();
      this.events = response.data;
    },
  }
};
</script>






