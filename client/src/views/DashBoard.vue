<template>
  <div class="DashBoard">
    <b-container fluid class="px-5">
      <b-row>
        <b-col md="7">
          <b-row class="p-2">
            <b-col>Near By Events</b-col>
            <b-col cols="5" class="text-right">
              <router-link to="/create">Create Event</router-link>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <Map :events="events" :selected="selected"/>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="5">
          <b-row class="p-2">
            <b-col>Near By Events</b-col>
            <b-col cols="4" class="float-right text-right">
              <router-link to="/events">Search</router-link>
            </b-col>
          </b-row>
          <b-table
            id="eventTable"
            bordered
            class="text-center"
            :fields="fieldsEvent"
            :items="events"
            :fixed="false"
            :per-page="perPage"
            :current-page="currentPageEvents"
            :tbody-tr-class="rowClass"
          >
            <template slot="ID" slot-scope="data" class="idCol">{{data.item.eventID}}</template>
            <template slot="event" slot-scope="data">
              <span id="pointer" @click="eventClick(data.item.eventID)">{{data.item.name}}</span>
            </template>
            <template slot="peopleJoined" slot-scope="data">{{data.item.numOfPeople}}</template>
          </b-table>
          <b-pagination
            v-model="currentPageEvents"
            :total-rows="rowsEvents"
            :per-page="perPage"
            aria-controls="eventTable"
            size="sm"
          ></b-pagination>
          <div class="mt-4">
            <b-row class="p-2">
              <b-col font-size="1rem">Friend Konnect</b-col>
              <b-col cols="2" class="text-right">
                <AddFriendModal :friends="friends"/>
              </b-col>
            </b-row>
            <b-table
              id="friendTable"
              :items="friends"
              :fields="fields"
              :bordered="true"
              :fixed="true"
              class="text-center"
              :per-page="perPage"
              :current-page="currentPageFriends"
            >
              <template slot="friend" slot-scope="row">
                <router-link
                  :to="`/user/${row.item.userID}`"
                >{{ row.item.fname }} {{ row.item.lname }}</router-link>
              </template>
              <template slot="isActive" slot-scope="row">
                <span :class="[row.item.isActive ? 'onlineStyle' : 'offlineStyle']"></span>
              </template>
            </b-table>
            <b-pagination
              v-model="currentPageFriends"
              :total-rows="rowsFriends"
              :per-page="perPage"
              aria-controls="friendTable"
              size="sm"
            ></b-pagination>
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
import FriendsService from "@/services/FriendsService";

export default {
  name: "Dashboard",
  beforeCreate() {
    if (!this.$session.exists()) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      perPage: 5,
      currentPageEvents: 1,
      currentPageFriends: 1,
      fieldsEvent: [
        "ID",
        "event",
        { key: "peopleJoined", label: "People Needed" }
      ],
      events: [],
      participants: [],
      fields: ["friend", "isActive"],
      friends: [],
      selected: "",
      initalFirst: true,
    };
  },
  mounted() {
    this.loadEvents(), this.getFriends();
  },
  methods: {
    async loadEvents() {
      const response = await EventsService.getEvents();
      this.events = response.data;
    },
    async getFriends() {
      const response = await FriendsService.getFriends(
        this.$session.get("currentUser")
      );
      this.friends = response.data;
    },
    eventClick(data) {
      this.selected = data;
    },
    rowClass(item) {
      if (this.initalFirst) {
        this.initalFirst = false;
        return "selectTableRow";
      } else if (this.selected != item.eventID) {
        return "";
      }
      return "selectTableRow";
    }
  },
  components: {
    AddFriendModal,
    Map
  },
  computed: {
    rowsEvents() {
      return this.events.length;
    },
    rowsFriends() {
      return this.friends.length;
    }
  }
};
</script>

<style>
.idCol {
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
.selectTableRow {
  box-shadow: 2px 2px 1px 1px#badafb, 2px -2px 1px 1px#badafb,
    -2px 2px 1px 1px#badafb, -2px -2px 1px 1px#badafb;
  outline-width: 0px;
  transition: all 0.15s ease-in-out;
}
#pointer {
  cursor: pointer;
}
</style>