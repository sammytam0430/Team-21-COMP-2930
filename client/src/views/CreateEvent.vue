<template>
  <b-container>
    <b-form @submit.prevent="createEvent" class="pt-3">
      <b-form-row>
        <b-col md="6" class="px-3">
          <b-form-row>
            <b-col>
              <b-form-group id="nameGroup" label="Event Name *" label-for="name">
                <b-form-input id="name" v-model="event.name" type="text" @change="thanos()" required></b-form-input>
              </b-form-group>
            </b-col>
          </b-form-row>

           <b-form-row>
            <b-col sm="7">
              <b-form-group id="typeGroup" label="Event Type *" label-for="type">
                <b-form-select id="type" v-model="event.type" :options="options" required></b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="5">
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
              <b-form-group id="locationGroup" label="Location *" label-for="location">
                <gmap-autocomplete id="location" @place_changed="setPlace"></gmap-autocomplete>
              </b-form-group>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col>
              <b-form-group id="descriptionGroup" label="Description / Additional Location Details (optional)" label-for="description">
                <b-form-textarea id="description" v-model="event.description" rows="5" cols="50" v-b-popover.focus.top="'Please add additional details about your location such as room number and if you are in a large room, then a brief description of your area (ie: back of the room by the windows).'"></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-form-row>

          <b-form-row id="time">
            <b-col lg="4">
              <b-form-group id="dateGroup" label="Date *" label-for="date">
                <b-form-input
                  id="date"
                  v-model="event.date"
                  type="date"
                  :min="parseDate()"
                  max="2930-05-21"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>

            <b-col cols="6" lg="4">
              <b-form-group id="startGroup" label="Start Time *">
                <template v-if="this.event.date === this.parseDate()">
                  <b-form-input
                    id="start"
                    v-model="event.start"
                    type="time"
                    :min="this.time"
                    required
                  ></b-form-input>
                </template>
                <template v-else>
                  <b-form-input id="start" v-model="event.start" type="time" required></b-form-input>
                </template>
              </b-form-group>
            </b-col>

            <b-col cols="6" lg="4">
              <b-form-group id="endGroup" :label="this.endTimeLabel">
                <b-form-input id="end" v-model="event.end" type="time" @change="checkEndTime()" required></b-form-input>
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

              <b-col id="addCol">
                <b-button variant="primary" block @click="addFriend()">Add</b-button>
              </b-col>

            </b-form-row>
          </b-form-group>

          <b-row>
            <b-container>
              <b-form-group id="listGroup" label="Invitees">
                <ol id="listBox">
                  <transition-group v-bind:name="this.transitionName[0]">
                    <li v-for="friend in invitees" v-bind:key="friend.key" class="p-2">
                      {{friend.name}}
                      <font-awesome-icon
                        fixed-width
                        class="float-right"
                        variant="white"
                        @click="removeFriend(friend)"
                        icon="times"
                      />
                  </li>
                  </transition-group>
                </ol>
              </b-form-group>
            </b-container>
          </b-row>

          <b-form-row>
            <b-col>
              <b-button @click="confirmReset()" block variant="outline-primary">Reset</b-button>
            </b-col>

            <b-col id="thanosGif" cols="2">
              <b-img :src="require('../assets/Thanos.gif')" alt="Snaps" id="gif" class="thanos" center fluid rounded></b-img>
            </b-col>
            
            <b-col id="thanosImg" cols="2">
              <b-img :src="require('../assets/ThanosStill.jpg')" alt="Infinity Gauntlet" id="img" class="thanos" @click="snap()" center fluid rounded></b-img>
            </b-col>

            <b-col>
              <b-button type="submit" @click="barrelRoll()" block variant="primary">Create Event</b-button>
            </b-col>
          </b-form-row>
        </b-col>
      </b-form-row>
    </b-form>

    <b-modal v-model="resetModal" hide-header footerClass="border-top-0">
      Are you sure you want to reset this form? All data will be lost.
      <template
        slot="modal-footer"
        slot-scope="{cancel}"
      >
        <b-button @click="cancel()" variant="outline-primary">CANCEL</b-button>
        <b-button @click="reset()" variant="primary">RESET</b-button>
      </template>
    </b-modal>

    <b-toast
      id="alert"
      title="Event Will End Tomorrow"
      variant="warning"
      toaster="b-toaster-bottom-center"
      :visible="this.alert"
    >
     Please note that your end time is earlier than your start time.
    </b-toast>
  </b-container>
</template>
 
<script>
import InterestsService from "@/services/InterestsService";
import EventsService from "@/services/EventsService";
import { gmapApi } from "vue2-google-maps";
export default {
  name: "createEvent",
  components: {},
  computed: {
    google: gmapApi,
    rows() {
      return this.invitees.length;
    }
  },
  beforeCreate() {
    if (!this.$session.exists()) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      alert: false,
      time: new Date().toTimeString().substring(0, 5),
      resetModal: false,
      newFriend: "",
      response: null,
      options: [{ value: null, text: "Please select an event type" }],
      invitees: [],
      transitionName: [""],
      key: 0,
      soulStone: [],
      endTimeLabel: "End Time *",
      place: null,
      event: {
        name: "",
        description: "",
        organizer: this.$session.get("currentUser"),
        type: null,
        date: this.parseDate(),
        start: new Date().toTimeString().substring(0, 5),
        end: "",
        location: this.parsePlace(),
        lat: 0,
        lng: 0,
        numOfPeople: 1
      }
    };
  },
  methods: {
    async getEventType() {
      const response = await InterestsService.getInterests();
      for (const option of response.data) {
        this.options.push({ value: option.interestID, text: option.name });
      }
    },
    async setPlace(place) {
      this.place = await place;
      this.event.location = this.place.name;
      this.event.lat = this.place.geometry.location.lat();
      this.event.lng = this.place.geometry.location.lng();
    },
    parsePlace() {
      return this.place == null ? "" : this.place.name;
    },
    parseDate() {
      var date = new Date();
      var m = date.getMonth() + 1;
      var d = date.getDate();
      if (m < 10) {
        m = "0" + m;
      }
      if (d < 10) {
        d = "0" + d;
      }
      return date.getFullYear() + "-" + m + "-" + d;
    },
    checkEndTime() {
      let start = parseInt(this.event.start.replace(":",""));
      let end = parseInt(this.event.end.replace(":",""));
      this.alert = end < start ? true : false;
    },
    addFriend() {
      if (this.newFriend.trim().length !== 0) {
        this.invitees.push({ name: this.newFriend, key: this.key++ });
        this.newFriend = "";
      }
    },
    removeFriend(friend) {
      this.invitees.splice(this.invitees.indexOf(friend), 1);
    },
    confirmReset() {
      this.resetModal = true;
    },
    reset() {
      this.event.name = "";
      this.event.description = "";
      this.event.type = null;
      this.event.date = this.parseDate();
      this.event.start = new Date().toTimeString().substring(0, 5);
      this.event.end = "";
      this.event.location = "";
      this.event.numOfPeople = 1;
      this.newFriend = "";
      this.invitees = [];
      this.soulStone= [];
      this.transitionName[0] = "";
      document.getElementById('thanosImg').style.display = "none";
      document.getElementById('thanosGif').style.display = "none";
      this.resetModal = false;
      this.key = 0;
    },
    async createEvent() {
      const response = await EventsService.createEvent(this.event);
      this.response = response.data;
      if (this.response.success) {
        this.$router.push("events/" + this.response.eventID);
      }
    },
    barrelRoll() {
      if (this.event.name.trim().toLowerCase() === "do a barrel roll") {
        document.body.animate(
          [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
          {
            duration: 2000,
            easing: "ease-in-out"
          }
        );
      }
    },
    thanos() {
      if (this.event.name.trim().toLowerCase() === "thanos") {
        this.endTimeLabel = "End Game *";
        document.getElementById('thanosImg').style.display = "block";
      } else {
        this.endTimeLabel = "End Time *";
        document.getElementById('thanosImg').style.display = "none";
        document.getElementById('thanosGif').style.display = "none";
      }
    },
    snap() {
      document.getElementById('thanosGif').style.display = "block";
      document.getElementById('thanosImg').style.display = "none";
      setTimeout(function(){
        document.getElementById('thanosGif').style.display = "none";
        document.getElementById('thanosImg').style.display = "block";
      },2000);
      if (this.invitees.length !== 0 && this.soulStone.length === 0) {
        this.remove();
      } else if (this.soulStone.length !== 0) {
        this.restore();
      }
    },
    remove(){
      let invitees = this.invitees;
      let soulStone = this.soulStone;   
      let name = this.transitionName;
      let original = this.invitees.length;
      let current = original;
      name[0] = "dust";
      
      let interval = setInterval(function(){
        toDust();
      }, 1000);

      function toDust() {
        let index = getRandomInt(current);
        let temp = invitees.splice(index, 1);
        soulStone.push(temp[0]);
        current--;
        if (current <= original / 2) {
          clearInterval(interval);
          setTimeout(function(){
            name[0] = "";
          }, 1000)
        }
      }

      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    },
    restore() {
      let invitees = this.invitees;
      let soulStone = this.soulStone;   
      let name = this.transitionName;
      
      document.getElementById("listBox").className = "glow";
      setTimeout(function(){
        name[0] = "undust";
        unDust();
      }, 1100);
      setTimeout(function(){
        document.getElementById("listBox").className = "";
        name[0] = "";
      }, 3000);

      function unDust() {
        let length = soulStone.length;
        for (let i = 0; i < length; i++){
          invitees.push(soulStone[i]);
        }
        soulStone.length = 0;
      }
    }
  },
  mounted() {
    this.getEventType();
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
  .glow {
    animation-duration: 3s;
    animation-name: glowAnimation;
    animation-timing-function: ease-in-out;
  }
  @keyframes glowAnimation {
    0% {
      box-shadow: none;
      border-color: lightgray;
    }
    25% {
      box-shadow: inset 0px 0px 5px 3px rgb(255, 216, 40),0px 0px 5px 3px rgb(255, 216, 40);
      border-color: rgb(255, 216, 40);
    }
    75% {
      box-shadow: inset 0px 0px 5px 3px rgb(255, 216, 40),0px 0px 5px 3px rgb(255, 216, 40);
      border-color: rgb(255, 216, 40);
    }
    100% {
      box-shadow: none;
      border-color:  lightgray;
    }
  }
  #location {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }
  #location:focus {
    box-shadow: 0px 0px 0px 3px#a5c2df;
    outline-width: 0px;
    transition: all 0.15s ease-in-out;
  }
  .thanos {
    height: calc(1.5em + 0.75rem + 2px);
  }
  #thanosGif, #thanosImg {
    display: none;
  }
  .dust-leave-active {
    transition: all 1s ease-in-out;
  }
  .dust-leave-to {
    opacity: 0;
  }
  .undust-enter-active {
    transition: all 0.2s ease-in-out;
  }
  .undust-enter {
    opacity: 0;
  }
  .undust-enter-to {
    opacity: 1;
  }
</style>