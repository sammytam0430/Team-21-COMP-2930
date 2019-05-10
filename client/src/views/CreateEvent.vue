<style>
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
</style>

<template >
  <b-container>
    <b-form v-on:submit.prevent="createEvent" class="pt-3">
      <b-form-row>
        <b-col class="px-3">

          <b-form-row>
            <b-col>
              <b-form-group id="nameGroup" label="Event Name" label-for="name">
                <b-form-input id="name" v-model="event.name" type="text" required></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col>
              <b-form-group id="locationGroup" label="Location" label-for="location" class="pr-2">
                <b-form-input id="location" v-model="event.location" type="text" required></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>
         

          <b-form-row>
            <b-col cols="9">
              <b-form-group id="typeGroup" label="Event Type" label-for="type">
                <b-form-select id="type" v-model="event.type" :options="options" required>
                </b-form-select>
              </b-form-group>
            </b-col>
            
            <b-col cols="3">
              <b-form-group id="numberGroup" label="People Needed">
                <b-form-input
                  id="number"
                  v-model="event.numOfPeople"
                  type="number"
                  v-on:change="calcInvitees"
                  min="1"
                  max="999"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col>
              <b-form-group id="descriptionGroup" label="Description (optional)" label-for="description">
                <b-form-textarea id="description" v-model="event.description" rows="5" cols="50"></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col>
              <b-form-group id="dateGroup" label="Date" label-for="date">
                <b-form-input id="date" v-model="event.date" type="date" required></b-form-input>
              </b-form-group>
            </b-col>

            <b-col>
              <b-form-group id="startGroup" label="Start Time" class="pr-2">
                <b-form-input id="start" v-model="event.start" type="time" required></b-form-input>
              </b-form-group>
            </b-col>
            
            <b-col>
              <b-form-group id="endGroup" label="End Time">
                <b-form-input id="end" v-model="event.end" type="time" required></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>
        </b-col>

        <b-col class="px-3">
          <b-form-group id="inviteGroup" label="Invite Friends (optional)">    
            <b-form-row>
              <b-col cols="9">
                <b-form-input
                  id="invite"
                  v-model="newFriend"
                  type="text"
                  @keydown.enter="addFriend()"
                  @keydown.enter.prevent=""
                ></b-form-input>
              </b-col>

              <b-col>
                <b-button block variant="secondary" @click="addFriend()">Add</b-button>
              </b-col>
            </b-form-row>
          </b-form-group>

          <b-row>
            <b-container>
              Invitees (spots remaining: {{remaining}})
              <b-form-group id="typeGroup">
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
          
          <b-button type="submit" block variant="primary">Create Event</b-button>

        </b-col>
      </b-form-row>
    </b-form>
  </b-container>
</template>

<script>
import InterestsService from "@/services/InterestsService";
import EventsService from "@/services/EventsService";

export default {
  name: "createEvent",
  components: {},

  data() {
    return {
      remaining: null,
      newFriend: "",
      response: null,
      options: [{value: null, text: "Please select an event type"}],
      invitees: [],
      event: {
        name: "",
        description: "",
        organizer: 0,
        type: null,
        date: new Date().toISOString().slice(0,10),
        start: "",
        end: "",
        location: "",
        numOfPeople: null
      }
    };
  },

  methods: {
    addFriend() {
      if (this.newFriend.trim() != "" && this.calcInvitees() > 0) {
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
      let remaining = people - friends
      this.remaining = remaining;
      if (remaining <= 0) {
        alert("You have reached the maximum capacity for your event, please check your 'People Needed' slot or remove invitations from your invitees list.");
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
        document.body.animate([
          {transform: 'rotate(0deg)'},
          {transform: 'rotate(360deg)'}
          ], {
          duration: 2000,
          easing: "ease-in-out"
          });
      }
        // const response = await EventsService.createEvent(this.event);
        // this.response = response.data;
    },

    async getEventType() {
      const response = await InterestsService.getInterests();
      for (const option of response.data) {
        this.options.push({ value: option.interestID, text: option.name });
      }
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


