<template>
  <div class="eventdetails">
    <div>
      <b-button v-b-modal.modal-1>Click this button for event details</b-button>
      <b-modal id="modal-1" title="Details">
        <b-container class="content">
          <b-row>
            <b-col id="joinMe" cols="7" class="main">Join me for CATAN</b-col>
            <b-col id="by" class="float-right text-right">
              By:
              <a href="#">Jaskamal S</a>
            </b-col>
          </b-row>

          <hr>

          <b-row class="my-4">
            <b-col id="description">Description</b-col>
            <b-col
              cols="8"
              class="pr-0 float-right text-left"
            >Lorem ipsum dolor sit amet ksdmck consectetur adipisicing elit. Pariatur, mollitia!</b-col>
          </b-row>

          <b-row class="my-4">
            <b-col id="dnt" class="text-left">Date/Time</b-col>
            <b-col cols="5" class="float-left text-left">
              April 8, 2019
              <br>12:30 to 14:00
            </b-col>
            <b-col class="float-right text-center px-0">
              <a href="#">Add to Calendar</a>
            </b-col>
          </b-row>

          <b-row class="my-4">
            <b-col id="loc" class="text-left">Location</b-col>
            <b-col cols="5" class="float-left text-left">NE22 105</b-col>
            <b-col class="float-right text-center px-0">
              <a href="#">View on map</a>
            </b-col>
          </b-row>

          <b-row class="my-4">
            <b-col id="vac">Vacancy</b-col>
            <b-col cols="8">
              <a href="#">2/5</a>
            </b-col>
          </b-row>
        </b-container>

        <template slot="modal-footer" slot-scope="{ ok, cancel }">
          <b-button size="sm" variant="danger" @click="cancel()">Cancel</b-button>
          <b-button size="sm" variant="primary" @click="ok()">Join</b-button>
        </template>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "eventdetails"
};
</script>

<style>
.main {
  font-weight: bolder;
  font-size: 23px;
}

@media only screen and (min-width: 321px) and (max-width: 376px) {
  .content {
    font-size: 14px;
  }

  .main {
    font-size: 21px;
    font-weight: 600;
  }
}

@media only screen and (max-width: 320px) {
  .content {
    font-size: 13px;
  }

  .main {
    font-size: 20px;
    font-weight: 600;
  }

  #by {
    padding: 0;
  }

  #joinMe {
    padding: 0;
  }

  #description {
    padding: 0;
  }

  #dnt {
    padding-left: 0;
  }

  #loc {
    padding-left: 0;
  }

  #vac {
    padding: 0;
  }
}
</style>