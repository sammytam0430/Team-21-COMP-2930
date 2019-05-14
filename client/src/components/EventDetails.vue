<template>
  <b-modal id="modal-1" v-model="showDetails" @hide="close">
    <template slot="modal-header" slot-scope="{ close }">
      <b-container>
        <b-row>
          <b-col offset="10" class="pl-4">
            <b-button variant="white" class="text-secondary" @click="close()">
              <font-awesome-icon fixed-width icon="times"/>
            </b-button>
          </b-col>
        </b-row>
        <span class="text-muted h6">{{`${date[0]}, ${date[1]} ${date[2]}, ${date[3]}`}}</span>
        <b-row>
          <b-col cols="7" class="font-weight-bolder h2">{{event.name}}</b-col>
          <b-col class="float-right text-right">
            Hosted By
            <router-link :to="'/user/' + event.userID" class="text-decoration-none">
              <InitialCircle v-b-popover.hover.bottom="fullname" :initial="initial"/>
            </router-link>
          </b-col>
        </b-row>
      </b-container>
    </template>
    <b-container>
      <span class="h4">Detail</span>
      <b-row class="mt-3 mb-5">
        <b-col class="text-left">{{event.description}}</b-col>
      </b-row>
      <b-row>
        <b-col>
          Participants:
          <a @click.prevent href>{{participants.length}}/{{event.numOfPeople}}</a>
        </b-col>
      </b-row>
      <b-row class="my-2">
        <b-col>
          <router-link
            class="text-decoration-none"
            :key="participant.userID"
            :to="'/user/' + participant.userID"
            v-for="participant in participants"
          >
            <InitialCircle
              class="mr-n1"
              v-b-popover.hover.bottom="participant.fullname"
              :initial="participant.initial"
            />
          </router-link>
        </b-col>
      </b-row>
      <b-container class="p-2 bg-warning rounded">
        <b-row>
          <b-col cols="7">
            <font-awesome-icon fixed-width icon="clock"/>
            <span class="ml-2">{{event.start}} to {{event.end}}</span>
          </b-col>
          <b-col class="text-right">
            <a @click.prevent href>Add to Calendar</a>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <font-awesome-icon fixed-width icon="map-marker-alt"/>
            <span class="ml-2">{{event.location}}</span>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="text-right">
            <a @click.prevent href>View on map</a>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <template slot="modal-footer" slot-scope="{ cancel }">
      <Timestamp :time="event.created_at" class="mr-auto"/>
      <b-button variant="white" class="text-primary" @click="cancel()">Cancel</b-button>
      <b-button v-if="currentUser" variant="danger" @click="deleteEvent">Delete</b-button>
      <b-button v-else-if="joined" variant="warning" @click="quitEvent">Quit Event</b-button>
      <b-button v-else variant="primary" @click="joinEvent">Join Event</b-button>
    </template>
  </b-modal>
</template>

<script>
import EventsService from "@/services/EventsService";
import ParticipantsService from "@/services/ParticipantsService";
import InitialCircle from "@/components/InitialCircle";
import Timestamp from "@/components/Timestamp";

export default {
  name: "eventdetails",
  components: {
    InitialCircle,
    Timestamp
  },
  watch: {
    "$route.meta"({ showDetails }) {
      this.showDetails = showDetails;
    },
    "$route.params.id"() {
      this.getEventDetail();
      this.getParticipants();
    }
  },
  computed: {
    date() {
      return new Date(this.event.date + " " + this.event.start)
        .toString()
        .split(" ");
    },
    currentUser() {
      return this.$session.get("currentUser") == this.event.organizer;
    },
    joined() {
      for (const participant of this.participants) {
        if (participant.userID === this.$session.get("currentUser")) {
          return true;
        }
      }
      return false;
    }
  },
  mounted() {
    this.getEventDetail();
    this.getParticipants();
  },
  data() {
    return {
      participants: [],
      event: {},
      initial: "",
      fullname: "",
      response: {},
      showDetails: this.$route.meta.showDetails
    };
  },
  methods: {
    async getParticipants() {
      const response = await ParticipantsService.getParticipants(
        this.$route.params.id
      );
      this.participants = response.data;
      for (let participant of this.participants) {
        participant.initial =
          participant.fname.substring(0, 1) + participant.lname.substring(0, 1);
        participant.fullname = participant.fname + " " + participant.lname;
      }
    },
    async getEventDetail() {
      const response = await EventsService.getEvent(this.$route.params.id);
      this.event = response.data[0];
      this.initial =
        this.event.fname.substring(0, 1) + this.event.lname.substring(0, 1);
      this.fullname = this.event.fname + " " + this.event.lname;
    },
    async deleteEvent() {
      const response = await EventsService.deleteEvent(this.$route.params.id);
      this.response = response.data;
      if (this.response.success) {
        this.$router.go(-1);
      } else {
        this.displayErrorMsg();
      }
    },
    async joinEvent() {
      const data = {
        eventID: this.event.eventID,
        userID: this.$session.get("currentUser")
      };
      const response = await ParticipantsService.addParticipants(data);
      this.response = response.data;
      if (this.response.success) {
        this.$router.go();
      } else {
        this.displayErrorMsg();
      }
    },
    async quitEvent() {
      const eventID = this.event.eventID;
      const userID = this.$session.get("currentUser");
      const response = await ParticipantsService.deleteParticipants(eventID, userID);
      this.response = response.data;
      if (this.response.success) {
        this.$router.go();
      } else {
        this.displayErrorMsg();
      }
    },
    close() {
      this.$router.push("/events");
    },
    displayErrorMsg() {
      this.$bvToast.toast("Nooooo something went wrong", {
        title: "BootstrapVue Toast",
        autoHideDelay: 5000,
        appendToast: true
      });
    }
  }
};
</script>

<style scoped>
.icon {
  width: 40px;
  height: 40px;
}
</style>