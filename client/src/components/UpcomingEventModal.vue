<template>
  <div>
    <div class="mb-2">
      <b-button id="popover-upcoming" @click="showMsgBoxOne(items)">upcoming</b-button>
      <b-popover target="popover-upcoming" title="Upcoming Event" placement="bottomleft">
        <b-list-group>
          <b-list-group-item
            style="max-width: 30rem;"
            v-for="item in items"
            :key="item.name"
          >Join {{item.name}} starts {{item.startTime}} @ {{item.location}} {{item.date}}</b-list-group-item>
        </b-list-group>
      </b-popover>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Catan",
          startTime: "10:30pm",
          date: "Feb 12 2019",
          location: "BCIT's Library"
        },
        {
          name: "Basketball",
          startTime: "1:30pm",
          date: "Feb 15 2019",
          location: "BCIT's Gym"
        },
        {
          name: "Badminton",
          startTime: "1:45pm",
          date: "March 15 2019",
          location: "BCIT's Gym"
        }
      ],
      selectedUser: ""
    };
  },

  methods: {
    showMsgBoxOne(items) {
      this.selectedUser = items;
    }
  }
};
</script>






