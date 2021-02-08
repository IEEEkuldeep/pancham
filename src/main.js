import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from 'buefy'

import 'buefy/dist/buefy.css'
import { Table, Input } from 'buefy'


Vue.use(Table)
Vue.use(Input)
Vue.use(Buefy)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
