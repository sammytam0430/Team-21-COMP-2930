<template>
  <b-container>
    <b-form @submit.prevent="createEvent" class="pt-3">
      <b-form-row>
        <b-col md="6" class="px-3">
          <b-form-row>
            <b-col>
              <b-form-group id="nameGroup" label="Event Name *" label-for="name">
                <b-form-input id="name" v-model="event.name" type="text" required></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col>
              <b-form-group id="locationGroup" label="Location *" label-for="location" class="pr-2">
                <b-form-input id="location" v-model="event.location" type="text" placeholder="Building and Room Number" v-b-popover.focus.top="'If you are in a large room, please also give a brief description of your area'" required></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col cols="7">
              <b-form-group id="typeGroup" label="Event Type *" label-for="type">
                <b-form-select id="type" v-model="event.type" :options="options" required></b-form-select>
              </b-form-group>
            </b-col>

            <b-col cols="5">
              <b-form-group id="numberGroup" label="People Needed *" label-for="number">
                <b-form-input
                  id="number"
                  v-model="event.numOfPeople"
                  type="number"
                  min="1"
                  max="999"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col>
              <b-form-group
                id="descriptionGroup"
                label="Description (optional)"
                label-for="description"
              >
                <b-form-textarea id="description" v-model="event.description" rows="5" cols="50"></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-form-row>

          <b-form-row id="time">

            <b-col lg="4">
              <b-form-group id="dateGroup" label="Date *" label-for="date">
                <b-form-input id="date" v-model="event.date" type="date" :min="parseDate()" max="2930-05-21" required></b-form-input>
              </b-form-group>
            </b-col>

            <b-col col="6" sm="6" lg="4">
              <b-form-group id="startGroup" label="Start Time *">
                <template v-if="this.event.date === this.parseDate()">
                  <b-form-input id="start" v-model="event.start" type="time" :min="this.time" required></b-form-input>
                </template>
                <template v-else>
                  <b-form-input id="start" v-model="event.start" type="time" required></b-form-input>
                </template>
              </b-form-group>
            </b-col>

            <b-col col="6" sm="6" lg="4">
              <b-form-group id="endGroup" label="End Time *">
                <b-form-input id="end" v-model="event.end" type="time" required></b-form-input>
              </b-form-group>
            </b-col>

          </b-form-row>
        </b-col>

        <b-col md="6" class="px-3">
          <b-form-group id="inviteGroup" label="Invite Friends (optional)">
            <b-form-row>
              <b-col cols="9">
                <b-form-input
                  id="invite"
                  v-model="newFriend"
                  type="text"
                  @keydown.enter="addFriend()"
                  @keydown.enter.prevent
                ></b-form-input>
              </b-col>

              <b-col>
                <b-button class="button" hover: block @click="addFriend()">Add</b-button>
              </b-col>
            </b-form-row>
          </b-form-group>

          <b-row>
            <b-container>
              <b-form-group id="listGroup" label="Invitees">
                <ol>
                  <li id="list" v-for="friend in invitees" v-bind:key="friend.id" class="p-2">
                    {{friend.invitees}}
                    <b-badge
                      class="float-right"
                      variant="light"
                      href="#"
                      @click="removeFriend(friend)"
                    >x</b-badge>
                  </li>
                </ol>
              </b-form-group>
            </b-container>
          </b-row>

          <b-form-row>
            <b-col>
              <b-button @click="confirmReset()" block class="button">Reset</b-button>
            </b-col>
            <b-col>
              <b-button type="submit" block class="button">Create Event</b-button>
            </b-col>
          </b-form-row>

        </b-col>
      </b-form-row>
    </b-form>

    <b-modal v-model="resetModal" hide-header footerClass="border-top-0">
      Are you sure you want to reset this form? All data will be lost.
      <template slot="modal-footer" slot-scope="{cancel}">
        <b-button @click="cancel()" class="cancelButton" variant="secondary">CANCEL</b-button>
        <b-button @click="reset()" class="button">RESET</b-button>
      </template>
    </b-modal>
  </b-container>
</template>

<script>
import InterestsService from "@/services/InterestsService";
import EventsService from "@/services/EventsService";

export default {
  name: "createEvent",
  components: {},
  beforeCreate() {
    if (!this.$session.exists()) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      time: new Date().toTimeString().substring(0,5),
      resetModal: false,
      newFriend: "",
      response: null,
      options: [{value: null, text: "Please select an event type"}],
      invitees: [],
      event: {
        name: "",
        description: "",
        organizer: this.$session.get("currentUser"),
        type: null,
        date: this.parseDate(),
        start: new Date().toTimeString().substring(0,5),
        end: "",
        location: "",
        numOfPeople: 1
      }
    };
  },

  methods: {
    addFriend() {
      if (this.newFriend != 0) {
        this.invitees.push({ invitees: this.newFriend });
        this.newFriend = "";
        this.remaining--;
      }
    },

    removeFriend(friend) {
      this.invitees.splice(this.invitees.indexOf(friend), 1);
      this.calcInvitees();
    },

    calcInvitees() {
      let people = this.event.numOfPeople;
      let friends = this.invitees.length;
      let remaining = people - friends;
      this.remaining = remaining;
      if (remaining <= 0) {
        alert(
          "You have reached the maximum capacity for your event, please check your 'People Needed' slot or remove invitations from your invitees list."
        );
        this.event.numOfPeople = friends;
        this.remaining = 0;
      }
      return remaining;
    },

    spotsRemaining() {
      let num = this.calcInvitees();
      this.remaining = num;
    },

    async createEvent() {
      if (this.event.name.trim().toLowerCase() === "do a barrel roll") {
        document.body.animate(
          [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
          {
            duration: 2000,
            easing: "ease-in-out"
          }
        );
      }
      const response = await EventsService.createEvent(this.event);
      this.response = response.data;
      if (this.response.success) {
        this.$router.push("events/" + this.response.eventID);
      }
    },

    async getEventType() {
      const response = await InterestsService.getInterests();
      for (const option of response.data) {
        this.options.push({ value: option.interestID, text: option.name });
      }
    },

    parseDate(){
      var date = new Date();
      var m = date.getMonth() + 1;
      var d = date.getDate();

      if (m < 10){
        m = "0" + m;
      }

      if (d < 10){
        d = "0" + d;
      }
      return date.getFullYear() + "-" + m + "-" + d;
    },

    confirmReset(){
      this.resetModal = true;
    },

    reset(){
      this.event.name = "";
      this.event.description = "";
      this.event.type = null;
      this.event.date = this.parseDate();
      this.event.start = new Date().toTimeString().substring(0,5);
      this.event.end = "";
      this.event.location = "";
      this.event.numOfPeople = 1;
      this.newFriend = "";
      this.remaining = 1;
      this.invitees = [];
      this.resetModal = false;
    }
  },

  mounted() {
    this.getEventType();
  },

  computed: {
    rows() {
      return this.invitees.length;
    }
  }
};
</script>

<style scoped>
ol {
  list-style-type: none;
  overflow: auto;
  min-height: 237px;
  max-height: 237px;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 0px;
}

li {
  padding: 2px;
  border-bottom: 1px solid lightgray;
}

.button {
  background-color: #63A6C1;
}

.button:hover {
  background-color: #3A7395;
}

.cancelButton {
  background-color: #6F6668;
}

.cancelButton:hover {
  background-color: #6C757D;
}

.button:active, .cancelButton:active {
  background-color: rgb(0, 42, 83) !important;
}

</style>
