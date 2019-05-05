<template>

    <div class="DashBoard">
    <b-container >
    <b-row>
        <b-col lg="9" md="6">
            <b-row align-v="center">
                <b-col cols="8">Near By Events</b-col>
                <b-col><b-button size="sm">Create Event</b-button></b-col>
            </b-row>

            <b-row>
                <b-col>
                  <gmap-map :center="{lat: 1.38, lng: 103.8}"
                        :zoom="12"
                    style="width: 100%; height: 500px">
                    </gmap-map>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <div id="myMap"></div>
                </b-col>
            </b-row>
        </b-col>
        <b-col lg="3"  md="6">
            <b-row>
                <b-col cols="8">Near By Events</b-col>
                <b-col><b-button size="sm">Search</b-button></b-col>
                <b-table bordered fixed :fields="fieldsEvent" :items="Events">
                    <template slot="peopleJoined" slot-scope="data">
                        {{data.item.userJoin}} / {{data.item.people}}
                    </template>
                </b-table>
            </b-row>
        <div>
            <b-table :items="items" :fields="fields" :bordered=true :fixed=true>
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
import {gmapApi} from 'vue2-google-maps'
export default {
    data() {
      return {
        fieldsEvent: ['event', {key: 'peopleJoined', label: 'People'}],
        Events: [
          {event: "Basketball", people: 23, userJoin: 16},
          {event: "BaseBall", people: 20, userJoin: 5},
          {event: "Soccer", people: 16, userJoin: 10},
          {event: "Badminton", people: 15, userJoin: 5}
        ],
        fields: ['friend', 'online'],
        items: [
          { friend: 'Dickerson',
            online: true},
          { friend: 'Larsen',
            online: false},
          {
            friend: 'Geneva',
            online: false
          },
          { friend: 'Jami',
            online: true}
        ]
      }
    },
    computed: {
        google: gmapApi
    },
    method:{
        mergePeople: function(People, userJoined){

        }
    }
    
}


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




