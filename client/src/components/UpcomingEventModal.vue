<template>
  <div>
    <div class="mb-2">
     <b-button id="popover-upcoming" @click="showMsgBoxOne(items)" >upcoming</b-button>
     <!-- <b-modal id="myModal" title="Upcoming Event">

        Join for {{items[0].name}} starting {{items[0].startTime}} at {{items[0].location}} {{items[0].date}}
        <template slot="modal-footer" slot-scope="{ok}">
            <b-button size="sm" variant="success" @click="ok()">
                OK
            </b-button>
        </template>
     </b-modal> -->
      <b-popover :show.sync="show" target="popover-upcoming" title="Upcoming Event" placement="bottomleft" >
        <b-list-group>
          <b-list-group-item style="max-width: 30rem;" v-for="item in items">
            Join {{item.name}} starts {{item.startTime}} @ {{item.location}} {{item.date}}
          </b-list-group-item>
        </b-list-group>
      </b-popover>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items:
        [
            {name: "Catan",startTime: "10:30pm",date: "Feb 12 2019", location: "BCIT's Library"},
            {name: "Basketball",startTime: "1:30pm",date: "Feb 15 2019", location: "BCIT's Gym"},
            {name: "Badminton",startTime: "1:45pm",date: "March 15 2019", location: "BCIT's Gym"}
        ],
        selectedUser: ""
    }
    },

    methods: {
      showMsgBoxOne(items) {
              this.selectedUser = items;
      }
    }
  }
</script>






