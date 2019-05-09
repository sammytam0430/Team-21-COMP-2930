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

  #list{
    padding: 10px;
    border-bottom: 1px solid lightgray;
  }
</style>


<template>
  <b-container>
    <b-form-row>
      <b-col>
        <b-form-row>
          <b-form-group id="nameGroup" label="Event Name">
            <b-form-input id="event" type="text" required></b-form-input>
          </b-form-group>
        </b-form-row>

        <b-form-row>
          <b-form-group id="typeGroup" label="Event Type">
            <b-form-select id="type" v-model="selected" :options="options" required></b-form-select>
          </b-form-group>
        </b-form-row>

        <b-form-row>
          <b-form-group id="descriptionGroup" label="Description (optional)">
            <b-form-textarea id="description" rows="5" cols="50"></b-form-textarea>
          </b-form-group>
        </b-form-row>

        <b-form-row>
          <b-form-group id="dateGroup" label="Date">
            <b-form-input id="date" type="date" required></b-form-input>
          </b-form-group>
        </b-form-row>

        <b-form-row>
          <b-form-group id="timeGroup" label="Start / End Time">
            <b-form-row>
              <b-col>
                <b-form-input id="start" type="time" required></b-form-input>
              </b-col>&nbsp;to&nbsp;
              <b-col>
                <b-form-input id="start" type="time" required></b-form-input>
              </b-col>
            </b-form-row>
          </b-form-group>
        </b-form-row>

        <b-form-row>
          <b-col cols="1" md="auto">I am looking for</b-col>
          <b-col cols="1" md="auto">
            <b-form-input id="number" type="number" min="0" max="999" required></b-form-input>
          </b-col>
          <b-col cols="1" md="auto">people</b-col>
        </b-form-row>
      </b-col>

      <b-col>
        <b-form-row>
          <b-form-group id="inviteGroup" label="Invite Friends (optional)">
            <b-form-row>
              <b-col cols="11">
                <b-form-input id="invite" v-model="newFriend" type="text" @keypress.enter="addFriend()"></b-form-input>
              </b-col>
              <b-col cols="1">
                <b-button type="submit" variant="secondary" @click="addFriend()">Add</b-button>
              </b-col>
            </b-form-row>
          </b-form-group>
        </b-form-row>

        <b-row>
         <b-container>
           
          <b-form-group id="typeGroup" label="Invitees">
           
         
              <ol>
                <li id="list" v-for="friend in invitees" v-bind:key="friend.id">{{friend.invitees}}
                   <b-badge class="float-right" variant="light" sm href="#" @click="removeFriend(friend)">x</b-badge>
                </li>
              </ol>
               </b-form-group>
         </b-container>
        </b-row>

<!--
        <b-row>
              <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage">
              </b-pagination>
              <b-table :items="invitees" :current-page="currentPage" :per-page="perPage" :fields="fields" hover small>
                <template slot="delete">
                  <b-button class="float-right" variant="light" @click="removeFriend(friend)">x</b-button>
                </template>
              </b-table>
        </b-row>

         <b-row>
              <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage">
              </b-pagination>
         </b-row>
         <b-row>
              <b-list-group>
                <b-list-group-item :current-page="currentPage" :per-page="perPage" v-for="friend in invitees" v-bind:key="friend.id">{{friend.invitees}}
                   <b-button class="float-right" variant="light" @click="removeFriend(friend)">x</b-button>
                </b-list-group-item>
              </b-list-group>
        </b-row>
        -->
        <b-form-row class="pt-4">
          <b-button type="submit" block variant="primary">Create Event</b-button>
        </b-form-row>
      </b-col>
    </b-form-row>
  </b-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "createEvent",
  components: {},

  data() {
    return {
      perPage: 5,
      currentPage: 1,
      newFriend: '',
      selected: null,
      fields: [],
      options: [
        { value: null, text: "Please select an event type" },
        { value: "outdoor", text: "Outdoor Sports" },
        { value: "indoor", text: "Indoor Sports" },
        { value: "card/board", text: "Card/Board Games" },
        { value: "pc", text: "PC Games" },
        { value: "mobile", text: "Mobile Games" },
        { value: "literature", text: "Literature" },
        { value: "music", text: "Music" },
        { value: "dance", text: "Dance" },
        { value: "food", text: "Food" },
        { value: "other", text: "Other" }
      ],
      invitees:[]
    };
  },
  methods: {
    addFriend() {
      if(this.newFriend.trim() != ""){
      this.invitees.push({invitees: this.newFriend, delete: null});
      this.newFriend = '';
      }
    },

    removeFriend(friend){
      this.invitees.splice(this.invitees.indexOf(friend), 1);
    }
  },

  computed: {
    rows() {
      return this.invitees.length
    }
  }
};

</script>

