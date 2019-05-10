
<template>
  <div>
    <gmap-map :center="center" :zoom="17" ref="map" style="width: 100%; height: 550px">
      <GmapMarker v-for="(marker, index) in markers" :key="index" :position="marker.position"/>
      <GmapMarker
        v-if="this.place"
        label="★"
        :position="{
          lat: this.place.geometry.location.lat(),
          lng: this.place.geometry.location.lng(),
        }"
      />
    </gmap-map>
  </div>
</template>


<script>
import { gmapApi } from "vue2-google-maps";

export default {
  data() {
    return {
      name: "map",
      map: null,
      mapLoaded: false,
      center: { lat: 49.2500589, lng: -123.0012234 },

      computed: {
        google: gmapApi
      },
      markers: [],
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
    }
  }
};
</script>

