import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";

import "buefy/dist/buefy.css";
import { Table, Input } from "buefy";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//import { shaka }from 'shaka-player';
import "shaka-player/dist/controls.css";
import "@fortawesome/fontawesome-free/js/all.js";

import VueAwesomeSwiper from "vue-awesome-swiper";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import $ from 'jquery';

Vue.component("font-awesome-icon", FontAwesomeIcon);
import "swiper/css/swiper.css";

Vue.use(VueAwesomeSwiper);
library.add(faSpinner);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use($);
Vue.use(Table);
Vue.use(Input);
Vue.use(Buefy);
//Vue.use(shaka)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");


Vue.use(VueFormWizard);
// new Vue({
//  el: '#app',
//  methods: {
//   onComplete: function(){
//       alert('Yay. Done!');
//    }
//   }
// })