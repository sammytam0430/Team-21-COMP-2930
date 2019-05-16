<template>
  <div class="DashBoard">
    <b-container>
      <b-row>
        <b-col md="8" lg="9">
          <b-row class="p-2">
            <b-col>Near By Events</b-col>
            <b-col cols="4">
              <router-link to="/create" class="float-right">Create Event</router-link>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <!-- <gmap-map :center="{lat: 49.2511, lng: -123.0}"
                        :zoom="16"
                    style="width: 100%; height: 550px">
              </gmap-map>-->
              <Map v-bind:events="events"/>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div id="myMap"></div>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="4" lg="3">
          <b-row class="p-2">
            <b-col>Near By Events</b-col>
            <b-col cols="4">
              <router-link to="/events">Search</router-link>
            </b-col>
          </b-row>
          <b-table bordered :fields="fieldsEvent" :items="events" :fixed = false>
            <template slot="ID" slot-scope="data" class="idCol">{{data.item.eventID}}</template>
            <template slot="event" slot-scope="data">{{data.item.name}}</template>
            <template slot="peopleJoined" slot-scope="data"> {{data.item.numOfPeople}}</template>
          </b-table>
          
          <div>
            <b-row class="p-2">
              <b-col font-size="1rem">Friend Konnect</b-col>
              <b-col cols="5.5" class="float-right">
                <AddFriendModal/>
              </b-col>
            </b-row>
            <b-table :items="items" :fields="fields" :bordered="true" >
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
import AddFriendModal from "@/components/_AddFriendModal.vue";
import Map from "@/components/Map.vue";
import EventsService from "@/services/EventsService";
import ParticipantsService from "@/services/ParticipantsService";

export default {
  name: "Dashboard",
  beforeCreate() {
    if (!this.$session.exists()) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      fieldsEvent: ["ID", "event", { key: "peopleJoined", label: "People Needed" }],
      events: [],
      participants: [],
      // fixed: true,
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
    this.loadEvents(),
    this.loadParticipants();
  },
  methods: {
    async loadEvents() {
      const response = await EventsService.getEvents();
      this.events = response.data;
    },
    async loadParticipants() {
      const response = await ParticipantsService.getParticipants();
      this.participants = response.data;
    }
  },
  components: {
    AddFriendModal,
    Map
  }
};
</script>

<style>
.idCol{
  max-width: 5px;
}
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