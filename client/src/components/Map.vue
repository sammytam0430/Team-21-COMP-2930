<template>
  <div>
    <GmapMap id="mapOne" :center="center" :zoom="16" ref="map" style="width: 100%; height: 550px">
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
    </GmapMap>
  </div>
</template>


<script>
import { gmapApi } from "vue2-google-maps";

export default {
  name: "googleMap",
  props: ["events", "selected"],
  watch: {
    selected() {
      this.infoWinOpen = false;
      this.markers = this.filteredEvents;
    },
    events: {
      deep: true,
      handler() {
        this.initMap();
      }
    }
  },
  computed: {
    google: gmapApi,
    filteredEvents() {
      let filteredList = this.allMarkers.filter(marker => {
        return marker.label == this.selected;
      });
      return filteredList;
    }
  },
  data() {
    return {
      name: "map",
      center: { lat: 49.2510589, lng: -123.0012234 },
      allMarkers: [],
      markers: [],
      place: null,
      infoContent: null,
      infoCurrentKey: null,
      infoOpened: false,
      infoPosition: null,
      infoWindowPos: null,
      infoWinOpen: false,
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
        this.allMarkers.push({
          label: this.events[i].eventID,
          position: {
            lat: latNew,
            lng: lngNew
          }
        });

        this.markers.push({
          label: this.events[0].eventID,
          position: {
            lat: Number(this.events[0].lat),
            lng: Number(this.events[0].lng)
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
      const events = this.$props.events.filter(event => marker.label == event.eventID);
      return events[0].name;
    }
  }
};
</script>

