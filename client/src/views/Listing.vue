<template>
  <b-container>
    <EventDetails/>
    <span id="heading" class="mx-3">Events</span>
    <b-button v-b-toggle.collapse id="filterButton" class="float-right mt-0 pt-1 mx-3" variant="outline-info">Filters</b-button>
    <b-container class="content" fluid>
      <b-collapse visible id="collapse" class="mt-2">
        <b-row class="rounded bg-white p-3" align-v="end">
          <b-col md="3">
            <b-form-group id="typeGroup" label="Event Type" label-for="type">
              <b-form-select id="type" v-model="selected" :options="options" required></b-form-select>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="dateGroup" label="From:">
              <b-form-input id="date" type="date" required></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="2">
            <b-form-group>
              <b-form-input id="start" type="time" required></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="dateGroup" label="To:">
              <b-form-input id="date" type="date" required></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="2">
            <b-form-group>
              <b-form-input id="start" type="time" required></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </b-collapse>
      <b-row class="mt-2">
        <b-card-group class="mt-2 w-100" columns>
          <b-card
            border-variant="white"
            :key="event.eventID"
            :title="event.name"
            v-for="event in events"
          >
            <b-card-sub-title id="date">{{`${event.date[0]}, ${event.date[1]} ${event.date[2]}, ${event.date[3]}`}}</b-card-sub-title>
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
              <b-col md="8" id="created">
                <Timestamp :time="event.created_at"/>
              </b-col>
              <b-col md="4">
                <router-link :to="{name: 'EventDetails', params: {id: event.eventID}}">
                  <b-button size="sm" variant="outline-info" id="detailButton" class="px-1">Details</b-button>
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

#heading{
  font-size: 25px;
  font-weight: 500;
  line-height: 50px;
}

@media only screen and (max-width: 426px){
  #detailButton{
    font-size: 11px;
    margin-top: 0.25rem;
  }

  #heading{
    font-size: 22px;
  }

  #filterButton{
    font-size: 14px;
    padding: 4px;
  }

  #type, #date, #start, .content{
    font-size: 14px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1023px){
  #detailButton{
    font-size: 11px;
    margin-top: 0.25rem;
  }

  #created{
    padding-left: 0;
    padding-right: 0;
  }
}
</style>