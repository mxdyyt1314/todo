// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex/store'
import util from './common/util.js'

import './assets/css/reset.css'

Vue.config.productionTip = false

Vue.prototype.$ajax = axios;
Vue.prototype.$util = util;

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
});
