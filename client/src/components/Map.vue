
<template>
  <div>
    <!-- <b-button v-on: setPlaceText('BCIT')>Set BCIT GYM </b-button> -->
    <GmapMap :center="center" :zoom="17" ref="map" style="width: 100%; height: 550px">
        <GmapInfoWindow 
          :position="infoWindowPos"
          :opened="infoWinOpen" 
          :options= "infoOptions"
          @closeclick="infoWinOpen=false" >
            <div v-html="infoContent" ></div>
        </GmapInfoWindow>
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        :label="m.label"
        @click="toggleInfoWindow(m,index)"
      >
      </GmapMarker>
    </GmapMap>
  </div>
</template>


<script>
// import { gmapApi } from "vue2-google-maps";

export default {
  props: ['events'],
  data() {
    return {
      name: "map",
      infoContent: "",
      infoWinOpen : false,
      infoWindowPos: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -60
        }
      },
      center: { lat: 49.2500589, lng: -123.0012234 },
      mounted (){
        this.$refs.mapRef.$mapPromise.then((map)=>{
          map.panTo({lat: 49.2500589, lng: -123.0012234})
        })
      },
      // computed: {
      //   google: gmapApi
      // },
      markers: [
        {
          label: "1",
          position: { lat: 49.2485319, lng: -123.0024311 }
        },
        {
          label: "2",
          position: { lat: 49.2493943, lng: -123.0009953 }
        },
        {
          label: "3",
          position: { lat: 49.2488319, lng: -123.0011311 }
        },
        {
          label: "4",
          position: { lat: 49.2500933, lng: -123.002827 }
        }
      ],
      place: null,

      infoPosition: null,
      infoContent: null,
      infoOpened: false,
      infoCurrentKey: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    };
  },
  methods: {
    setPlace(place) {
      this.place = place;
    },
    usePlace() {
      if (this.place) {
        this.markers.push({
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng()
          }
        });
        this.place = null;
      }
    },
    toggleInfoWindow(marker, idx){
      this.infoWindowPos = marker.position;
      this.infoContent = this.getInfoWindowContent(marker);

      if(this.currentMidx == idx){
        this.infoWinOpen = !this.infoWinOpen;
      }else{
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    getInfoWindowContent(marker){
      let eventName = this.$props.events[0].name;
      let events = this.$props.events;
      let i = 0;
      for(i = 0; i < events.length; i++){
        if(marker.label == events[i].eventID){
          eventName = events[i].name;
        }

      }
      return (eventName)
    }
  }
};
</script>

