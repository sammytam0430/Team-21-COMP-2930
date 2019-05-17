
<template>
  <div>
    <GmapMap id="mapOne" :center="center" :zoom="17" ref="map" style="width: 100%; height: 550px">
      <GmapInfoWindow
        :position="infoWindowPos"
        :opened="infoWinOpen"
        :options="infoOptions"
        @closeclick="infoWinOpen=false"
      >
        <div v-html="infoContent"></div>
      </GmapInfoWindow>
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        :label="''+m.label"
        @click="toggleInfoWindow(m,index)"
      ></GmapMarker>
      <!-- <GmapMarker v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
      />-->
    </GmapMap>
    <!-- <div id="mapID" style="height:300px;"></div> -->
  </div>
</template>


<script>
import { gmapApi } from "vue2-google-maps";

export default {
  props: ["events"],
  created() {
    this.initMap();
  },
  computed: {
    google: gmapApi
  },
  data() {
    return {
      name: "map",
      infoWinOpen: false,
      infoWindowPos: null,
      center: { lat: 49.2500589, lng: -123.0012234 },
      markers: [
        // {
        //   label: "1",
        //   position: { lat: 49.2485319, lng: -123.0024311 }
        // },
        // {
        //   label: "2",
        //   position: { lat: 49.2493943, lng: -123.0009953 }
        // },
        // {
        //   label: "3",
        //   position: { lat: 49.2488319, lng: -123.0011311 }
        // },
        // {
        //   label: "4",
        //   position: { lat: 49.2500933, lng: -123.002827 }
        // }
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
      },
      placeReq: null,
      placeName: ""
    };
  },

  methods: {
    initMap() {
      let latNew;
      let lngNew;
      let i;
      for (i = 0; i < this.events.length; i++) {
        latNew = Number(this.events[i].lat);
        lngNew = Number(this.events[i].lng);
        // console.log(typeof this.events[i].lat);
        this.markers.push({
          label: this.events[i].eventID,
          position: {
            lat: latNew,
            lng: lngNew
          }
        });
      }
    },
    setPlace(place) {
      this.place = place;
    },
    usePlace() {
      if (this.place) {
        this.markers.push({
          label: this.$props.events[0].eventID.toString(),
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng()
          }
        });
        // console.log(this.place);
        // var seachbox = new this.google.maps.places();
        // console.log(seachbox);
        // console.log(seachbox);

        this.place = null;
      }
    },
    toggleInfoWindow(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = this.getInfoWindowContent(marker);

      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    getInfoWindowContent(marker) {
      let eventName = this.$props.events[0].name;
      let events = this.$props.events;
      let i = 0;
      for (i = 0; i < events.length; i++) {
        if (marker.label == events[i].eventID) {
          eventName = events[i].name;
        }
      }
      return eventName;
    }
  }
};
</script>

