<template>
  <div>
    <div class="mb-2">
      <b-button id="popover-upcoming" @click="showMsgBoxOne(items)">upcoming</b-button>
      <b-popover target="popover-upcoming" title="Upcoming Event" placement="bottomleft">
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
      selectedUser: ""
    };
  },
  mounted() {
    this.loadEvents();
  },
  methods: {
    showMsgBoxOne(items) {
      this.selectedUser = items;
    },
    async loadEvents() {
      const response = await EventsService.getEvents();
      this.events = response.data;
    },
  }
};
</script>






