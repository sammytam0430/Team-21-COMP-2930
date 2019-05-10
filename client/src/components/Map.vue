<template>
    <div>
  <gmap-map :center="center" :zoom="17" ref="map" style="width: 100%; height: 550px">
    <gmap-info-window
      :options="infoOptions"
      :position="infoPosition"
      :opened="infoOpened"
      :content="infoContent"
      @closeclick="infoOpened=false"
    ></gmap-info-window>
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      @click="toggleInfo(m, index)"
    ></gmap-marker>
  </gmap-map>
    </div>
</template>

<script>
import {gmapApi} from 'vue2-google-maps';
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
                position: {lat: 49.2494589, lng: -123.0028234}
                
                },
                {
                    position: {lat: 49.249957, lng: -123.001223}
                }
        
            ],
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
    openInfoWindow(location) {
      this.selectedLocation = location;
      this.infoBoxOpen = true;
    },
    closeInfoWindow() {
      this.infoBoxOpen = false;
    }
  }

    //   {lat: 49.2511, lng: -123.0}
    //    markers: [
    //       {
    //         name: "BCIT library",
    //         position: {lat: 49.2494758, lng: -123.0030153}
    //       },
    //       {
    //         name: "BCIT GYM",
    //         position: {lat: 49.2488123, lng: -123.0033371}
    //       },
    //     ],
    // };
}
</script>

