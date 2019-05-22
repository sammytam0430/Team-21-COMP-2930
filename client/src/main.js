import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSession from "vue-session";
import BootstrapVue from "bootstrap-vue";
import * as VueGoogleMaps from "vue2-google-maps";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserGraduate,
  faBell,
  faSignOutAlt,
  faColumns,
  faUserFriends,
  faThList,
  faPlus,
  faAngleDoubleDown,
  faMapMarkerAlt,
  faClock,
  faTimes,
  faSpa,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@/assets/custom.scss";

library.add(
  faUserGraduate,
  faBell,
  faSignOutAlt,
  faColumns,
  faUserFriends,
  faThList,
  faPlus,
  faAngleDoubleDown,
  faMapMarkerAlt,
  faClock,
  faTimes,
  faSpa,
  faSearch,
  faYoutube,
  faGithubAlt
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueSession);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAQjKpJcIcowvDpghQAGuXKvpgvv_eWgRQ",
    libraries: "places"
  }
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
