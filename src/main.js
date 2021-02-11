import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from 'buefy'

import 'buefy/dist/buefy.css'
import { Table, Input } from 'buefy'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//import { shaka }from 'shaka-player';
import 'shaka-player/dist/controls.css';
import '@fortawesome/fontawesome-free/js/all.js';


Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faSpinner)



Vue.use(Table)
Vue.use(Input)
Vue.use(Buefy)
//Vue.use(shaka)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

