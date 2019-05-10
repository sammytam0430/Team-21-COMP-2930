import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import * as VueGoogleMaps from "vue2-google-maps";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyD79c6AdUKtSlGBkIewGO_fnS2DtabyoaI",
    libraries: "places"
  }
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
