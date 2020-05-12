import Vue from 'vue'
import router from './router'
import App from './App.vue'
import './assets/scss/main.scss'

import Default from "./layouts/Default";

Vue.component('default-layout', Default)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
