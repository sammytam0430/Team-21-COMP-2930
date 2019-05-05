<template>
  <div>
    <div class="mb-2">
     <b-button v-b-modal="'myModal'" @click="showMsgBoxOne(items)">upcoming</b-button>
     <b-modal id="myModal" title="Upcoming Event">
        Join for {{items[0].name}} starting {{items[0].startTime}} at {{items[0].location}} {{items[0].date}}
        <template slot="modal-footer" slot-scope="{ok}">
            <b-button size="sm" variant="success" @click="ok()">
                OK
            </b-button>
        </template>
     </b-modal>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items:
        [
            {name: "Catan",startTime: "10:30pm",date: "Feb 12 2019", location: "BCIT's Library"}
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






