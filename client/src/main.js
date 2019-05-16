import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSession from "vue-session";
import BootstrapVue from "bootstrap-vue";
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
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import * as VueGoogleMaps from "vue2-google-maps";
import '@/assets/custom.scss'
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

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
  faTimes
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
