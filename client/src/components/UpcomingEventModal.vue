<template>
  <div>
    <div>
      <a herf id="popover-upcoming" class="text-primary" @click.prevent>
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
// import necessary components and services
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
  watch: {
    selected() {
      this.todayEvents = this.filterDate;
    }
   },
  
  computed: {
    filterDate() {
      let filteredList = this.events.filter(event => {
        return event.date == this.parseDate();
      });
      return filteredList;
    }
  },
  methods: {
    // get events from db
    async loadEvents() {
      const response = await EventsService.getEvents();
      this.events =  response.data.filter(event => {
        return event.date == this.parseDate();
      });
      
    },
    // convert date to desired format
    parseDate() {
      let date = new Date();
      let m = date.getMonth() + 1;
      let d = date.getDate();

      if (m < 10) {
        m = "0" + m;
      }
      if (d < 10) {
        d = "0" + d;
      }
      return date.getFullYear() + "-" + m + "-" + d;
    }
  }
};
</script>






