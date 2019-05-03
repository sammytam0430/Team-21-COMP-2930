<template>
    <div class="DashBoard">
    <b-container >
    <b-row>
        <b-col cols="12" md="8">
            <b-row>
                <b-col>Near By Events</b-col>
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
        <b-col cols="6" md="4">
            <b-row>
                <b-col>Near By Events</b-col>
                <b-col><b-button size="sm">Search</b-button></b-col>
                <b-table striped hover :items="Events"></b-table>

            </b-row>
              <div>
    <b-table :items="items" :fields="fields" striped>
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
        Events: [
          {Event: "Basketball", People: "2/4"},
          {Event: "BaseBall", People: "2/20"},
          {Event: "Soccer", People: "2/10"},
          {Event: "Yelling", People: "2/5"}
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




