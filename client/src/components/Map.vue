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
                },
                content:
                    '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
                    '<div id="bodyContent">'+
                    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
                    'sandstone rock formation in the southern part of the '+
                    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
                    'south west of the nearest large town, Alice Springs; 450&#160;km '+
                    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
                    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
                    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
                    'Aboriginal people of the area. It has many springs, waterholes, '+
                    'rock caves and ancient paintings. Uluru is listed as a World '+
                    'Heritage Site.</p>'+
                    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
                    'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
                    '(last visited June 22, 2009).</p>'+
                    '</div>'+
                    '</div>'
            }
        };
},
  methods: {
    openInfoWindow(location) {
      console.log(location);
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

