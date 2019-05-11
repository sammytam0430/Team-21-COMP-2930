<template>
  <div>
    <div class="mb-2">
      <img id="popover-upcoming" src="../assets/notification.png" >
      <b-popover target="popover-upcoming" title="Upcoming Event" triggers="hover focus" placement="bottomleft">
        <b-list-group>
          <b-list-group-item
            style="max-width: 30rem;"
            v-for="item in events"
            :key="item.name"
          >Join {{item.name}} starts {{item.startTime}} @ {{item.location}} {{item.date}}</b-list-group-item>
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






