
<template>
  <div>
    <gmap-autocomplete :default-place="place" @place_changed="setPlace"></gmap-autocomplete>
    <button @click="initMap">Add</button>
    <!-- <br/>
    {{this.place.geometry.viewport.na.j}},
    {{this.place.geometry.viewport.ia.j}}-->
    <GmapMap :center="center" :zoom="17" ref="map" style="width: 100%; height: 550px">
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
        :label="m.label"
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
  data() {
    return {
      name: "map",
      infoContent: "",
      infoWinOpen: false,
      infoWindowPos: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -60
        }
      },
      center: { lat: 49.2500589, lng: -123.0012234 },
      beforeMount: {
        initMap(){
          
        }
      },
      computed: {
        google: gmapApi
      },
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
      let bcit = new google.maps.LatLng(49.2500589, -123.0012234);
      let events = this.$props.events;

      // let mapOne = new google.maps.Map(
      //     document.getElementById('mapID'), {center: bcit, zoom: 15});
      for (var i = 0; i < events.length; i++) {
        let request = {
          query: events[i].location,
          fields: ["name", "geometry"]
        };

        let service = new google.maps.places.PlacesService(
          document.createElement("div")
        );

        let locaiontArr = [];

        service.findPlaceFromQuery(request, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            const response = results;
            const a = response[0].geometry.location.lat();
            const b = response[0].geometry.location.lng();
            locaiontArr.push({
              label: "",
              position: {
                lat: locaiontArr[0],
                lng: locaiontArr[1]
              }
            });
          }
          console.log(locaiontArr[0]);
          // console.log(locaiontArr[1]);
        });

        console.log(locaiontArr);
        // console.log(locaiontArr[0]);
        // console.log(locaiontArr[1]);

        // console.log(typeof events[i].eventID);
      }
      this.markers = locationArr;
        console.log(this.markers);
    },
    makeMarker(arr) {},
    setPlace(place) {
      this.place = place;
    },
    usePlace() {
      if (this.place) {
        this.markers.push({
          label: events[0].eventID.toString(),
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng()
          }
        });
        // console.log(this.place);
        // var seachbox = new google.maps.places();
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

