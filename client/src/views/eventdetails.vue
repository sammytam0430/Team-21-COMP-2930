<template>
  <div class="eventdetails">
    <div>
        <b-button v-b-modal.modal-1>Click this button for event details</b-button>
        <b-modal id="modal-1" title="Details">
            
                <b-container>
                    <b-row>
                        <b-col cols="7" class="main">
                            Join me for CATAN
                        </b-col>
                        <b-col class="float-right text-right">
                            By: <a href="#">Jaskamal S</a>
                        </b-col>
                    </b-row>
                    
                        <hr>
                    
                    <b-row class="my-4">
                        <b-col>
                            Description
                        </b-col>
                        <b-col cols="8" class="pr-0 float-right text-left">
                            Lorem ipsum dolor sit amet ksdmck consectetur adipisicing elit. Pariatur, mollitia!
                        </b-col>
                    </b-row>
                    
                    <b-row class="my-4">
                        <b-col class="text-left">
                            Date/Time
                        </b-col>
                        <b-col cols="5" class="float-left text-left">
                            April 8, 2019 <br> 12:30 to 14:00
                        </b-col>
                        <b-col class="float-right text-center px-0">
                            <a href="#">Add to Calendar</a>
                        </b-col>
                    </b-row>
                    
                    <b-row class="my-4">
                        <b-col class="text-left">
                            Location
                        </b-col>
                        <b-col cols="5" class="float-left text-left">
                            NE22 105
                        </b-col>
                        <b-col class="float-right text-center px-0">
                            <a href="#">View on map</a>
                        </b-col>
                    </b-row>

                    <b-row class="my-4">
                        <b-col>
                            Vacancy
                        </b-col>
                        <b-col cols="8">
                            <a href="#">2/5</a>
                        </b-col>
                    </b-row>
                </b-container>

<template slot="modal-footer" slot-scope="{ ok, cancel }">
      <b-button size="sm" variant="danger" @click="cancel()">
        Cancel
      </b-button>
      <b-button size="sm" variant="primary" @click="ok()">
        Join
      </b-button>
    </template>            

        </b-modal>
    </div>

  </div>
</template>

<script>
export default {
  name: 'eventdetails',

}
</script>

<style>
    .main{
        font-weight: bolder;
        font-size: 23px;
    }

</style>