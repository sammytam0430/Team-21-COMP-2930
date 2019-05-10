<template>
  <b-modal id="modal-1" v-model="showDetails" @hide="close" title="Details">
    <b-container class="content">
      <b-row>
        <b-col id="joinMe" cols="7" class="main">{{event.name}}</b-col>
        <b-col id="by" class="float-right text-right">
          By:
          <a @click.prevent href>{{event.fname}} {{event.lname.substring(0, 1)}}</a>
        </b-col>
      </b-row>
      <hr>
      <b-row class="my-4">
        <b-col id="description">Description</b-col>
        <b-col cols="8" class="pr-0 float-right text-left">{{event.description}}</b-col>
      </b-row>
      <b-row class="my-4">
        <b-col id="dnt" class="text-left">Date/Time</b-col>
        <b-col cols="5" class="float-left text-left">
          {{event.date}}
          <br>
          {{event.start}} to {{event.end}}
        </b-col>
        <b-col class="float-right text-center px-0">
          <a @click.prevent href>Add to Calendar</a>
        </b-col>
      </b-row>
      <b-row class="my-4">
        <b-col id="loc" class="text-left">Location</b-col>
        <b-col cols="5" class="float-left text-left">{{event.location}}</b-col>
        <b-col class="float-right text-center px-0">
          <a @click.prevent href>View on map</a>
        </b-col>
      </b-row>
      <b-row class="my-4">
        <b-col id="vac">Vacancy</b-col>
        <b-col cols="8">
          <a @click.prevent href>{{participants.length}}/{{event.numOfPeople}}</a>
        </b-col>
      </b-row>
    </b-container>
    <template slot="modal-footer" slot-scope="{ ok, cancel }">
      <Timestamp :time="event.created_at" class="mr-auto"/>
      <b-button size="sm" variant="danger" @click="cancel()">Cancel</b-button>
      <b-button size="sm" variant="primary" @click="ok()">Join</b-button>
    </template>
  </b-modal>
</template>

<script>
import EventsService from "@/services/EventsService";
import ParticipantsService from "@/services/ParticipantsService";
import Timestamp from "@/components/Timestamp";

export default {
  name: "eventdetails",
  components: {
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
  mounted() {
    this.getEventDetail();
    this.getParticipants();
  },
  data() {
    return {
      participants: [],
      event: [],
      showDetails: this.$route.meta.showDetails
    };
  },
  methods: {
    async getParticipants() {
      const response = await ParticipantsService.getParticipants(
        this.$route.params.id
      );
      this.participants = response.data;
    },
    async getEventDetail() {
      const response = await EventsService.getEvent(this.$route.params.id);
      this.event = response.data[0];
    },
    close() {
      if (this.$route.path !== "/login") {
        this.$router.go(-1);
      }
    }
  }
};
</script>

<style>
.main {
  font-weight: bolder;
  font-size: 23px;
}

@media only screen and (min-width: 321px) and (max-width: 376px) {
  .content {
    font-size: 14px;
  }

  .main {
    font-size: 21px;
    font-weight: 600;
  }
}

@media only screen and (max-width: 320px) {
  .content {
    font-size: 13px;
  }

  .main {
    font-size: 20px;
    font-weight: 600;
  }

  #by {
    padding: 0;
  }

  #joinMe {
    padding: 0;
  }

  #description {
    padding: 0;
  }

  #dnt {
    padding-left: 0;
  }

  #loc {
    padding-left: 0;
  }

  #vac {
    padding: 0;
  }
}
</style>