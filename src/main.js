// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex/store'

import './assets/css/reset.css'

Vue.config.productionTip = false

Vue.prototype.$ajax = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})








//   {
//   state: {
//     count: 0,
//     todos: [
//       { id: 1, text: '做任务', done: false },
//       { id: 2, text: '梦幻西游', done: false },
//       { id: 3, text: '练小号', done: true },
//       { id: 4, text: '找同学聚餐', done: false },
//       { id: 5, text: '啦啦啦德玛西亚', done: true },
//     ]
//   },
//   //mutation 必须是同步函数
//   mutations: {
//     [MUTATIONS_INCREMENT] (state, payload) {
//       state.count += payload.amount;
//     }
//   },
//   getters: {
//     doneTodos: state => {
//       return state.todos.filter(function (value) {
//         return value.done;
//       });
//     }
//   },
//   actions: {
//     incrementAsync ({ commit }, payload) {
//       console.log(payload.amount);
//       setTimeout(function () {
//         commit({ type: MUTATIONS_INCREMENT, amount: payload.amount });
//       }, 1000);
//     }
//   }
// })
