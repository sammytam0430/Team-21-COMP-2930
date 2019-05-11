
<template>
  <div>
    <gmap-map :center="center" :zoom="17" ref="map" style="width: 100%; height: 550px">
            <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                :label="m.label"
                @click="openWindow"

            />
            <gmap-info-window 
                @closeclick="window_open=false" 
                :opened="window_open" 
                :position="infowindow"

            >
                Hello world!
            </gmap-info-window> 
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
          position: { lat: 49.2488319, lng: -123.0011311, }
        },
        {
          label: "4",
          position: { lat: 49.2500933, lng: -123.002827, }
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
    }
  }
};
</script>

