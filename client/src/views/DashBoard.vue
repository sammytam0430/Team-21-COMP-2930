<template>
  <div class="DashBoard">
    <b-container>
      <b-row>
        <b-col lg="9" md="6">
          <b-row class="p-2">
            <b-col>Near By Events</b-col>
            <b-col cols="4">
              <b-button size="sm" class="float-right">Create Event</b-button>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <!-- <gmap-map :center="{lat: 49.2511, lng: -123.0}"
                        :zoom="16"
                    style="width: 100%; height: 550px">
              </gmap-map>-->
              <Map/>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div id="myMap"></div>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="3" md="6">
          <b-row class="p-2">
            <b-col>Near By Events</b-col>
            <b-col cols="4">
              <b-button size="sm" class="float-right">Search</b-button>
            </b-col>
          </b-row>
          <b-table bordered fixed :fields="fieldsEvent" :items="events">
            <template slot="event" slot-scope="data">{{data.item.name}}</template>
            <template slot="peopleJoined" slot-scope="data">2 / {{data.item.numOfPeople}}</template>
          </b-table>
          <div>
            <b-row class="p-2">
              <b-col font-size="1rem">Friend Konnect</b-col>
              <b-col cols="5.7" class="float-right">
                <AddFriendModal/>
              </b-col>
            </b-row>
            <b-table :items="items" :fields="fields" :bordered="true" :fixed="true">
              <template slot="online" slot-scope="row">
                <span v-bind:class="[row.item.online ? 'onlineStyle' : 'offlineStyle']"></span>
              </template>
            </b-table>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import {gmapApi} from 'vue2-google-maps';
import AddFriendModal from "@/components/AddFriendModal";
import Map from "@/components/Map.vue";
import EventsService from "@/services/EventsService";

export default {
  name: "Dashboard",
  data() {
    return {
      fieldsEvent: ["event", { key: "peopleJoined", label: "People" }],
      events: [],
      fields: ["friend", "online"],
      items: [
        { friend: "Dickerson", online: true },
        { friend: "Larsen", online: false },
        {
          friend: "Geneva",
          online: false
        },
        { friend: "Jami", online: true }
      ]
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
  },
  components: {
    AddFriendModal,
    Map
  }
};
</script>

<style>
.offlineStyle {
  height: 15px;
  width: 15px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
.onlineStyle {
  height: 15px;
  width: 15px;
  background-color: rgb(41, 248, 0);
  border-radius: 50%;
  display: inline-block;
}
</style>