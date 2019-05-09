<style>
ol {
  list-style-type: none;
  overflow: auto;
  min-height: 220px;
  max-height: 220px;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding-left: 0px;
}

#list {
  padding: 10px;
  border-bottom: 1px solid lightgray;
}
</style>


<template>
  <b-container>
    <b-form>
      <b-form-row>
        <b-col>
          <b-form-row>
            <b-form-group id="nameGroup" label="Event Name" label-for="name">
              <b-form-input id="name" v-model="event.name" type="text" required></b-form-input>
            </b-form-group>
          </b-form-row>

          <b-form-row>
            <b-form-group id="typeGroup" label="Event Type" label-for="type">
              <b-form-select id="type" v-model="event.type" :options="options" required></b-form-select>
            </b-form-group>
          </b-form-row>

          <b-form-row>
            <b-form-group
              id="descriptionGroup"
              label="Description (optional)"
              label-for="description"
            >
              <b-form-textarea id="description" v-model="event.description" rows="5" cols="50"></b-form-textarea>
            </b-form-group>
          </b-form-row>

          <b-form-row>
            <b-form-group id="dateGroup" label="Date" label-for="date">
              <b-form-input id="date" v-model="event.date" type="date" required></b-form-input>
            </b-form-group>
          </b-form-row>

          <b-form-row>
            <b-form-group id="timeGroup" label="Start / End Time">
              <b-form-row>
                <b-col>
                  <b-form-input id="start" v-model="event.start" type="time" required></b-form-input>
                </b-col>&nbsp;to&nbsp;
                <b-col>
                  <b-form-input id="end" v-model="event.end" type="time" required></b-form-input>
                </b-col>
              </b-form-row>
            </b-form-group>
          </b-form-row>

          <b-form-row>
            <b-col cols="1" md="auto">I am looking for</b-col>
            <b-col cols="1" md="auto">
              <b-form-input
                id="number"
                v-model="event.numOfPeople"
                type="number"
                min="0"
                max="999"
                required
              ></b-form-input>
            </b-col>
            <b-col cols="1" md="auto">people</b-col>
          </b-form-row>
        </b-col>

        <b-col>
          <b-form-row>
            <b-form-group id="inviteGroup" label="Invite Friends (optional)">
              <b-form-row>
                <b-col cols="11">
                  <b-form-input
                    id="invite"
                    v-model="newFriend"
                    type="text"
                    @keypress.enter="addFriend()"
                  ></b-form-input>
                </b-col>
                <b-col cols="1">
                  <b-button variant="secondary" @click="addFriend()">Add</b-button>
                </b-col>
              </b-form-row>
            </b-form-group>
          </b-form-row>

          <b-row>
            <b-container>
              <b-form-group id="typeGroup" label="Invitees">
                <ol>
                  <li id="list" v-for="friend in invitees" v-bind:key="friend.id">
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

          <b-form-row class="pt-4">
            <b-button type="submit" block variant="primary">Create Event</b-button>
          </b-form-row>
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
      perPage: 5,
      currentPage: 1,
      newFriend: "",
      response: null,
      fields: [],
      options: [{ value: null, text: "Please select an event type" }],
      invitees: [],
      event: {
        name: "",
        description: "",
        organizer: 0,
        type: 0,
        date: "",
        start: "",
        end: "",
        location: "",
        numOfPeople: 0
      }
    };
  },
  methods: {
    addFriend() {
      if (this.newFriend.trim() != "") {
        this.invitees.push({ invitees: this.newFriend });
        this.newFriend = "";
      }
    },

    removeFriend(friend) {
      this.invitees.splice(this.invitees.indexOf(friend), 1);
    },

    async createEvent() {
      const response = await EventsService.createEvent(this.event);
      this.response = response.data;
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

