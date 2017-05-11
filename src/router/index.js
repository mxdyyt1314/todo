import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login.vue'
import VuexTest from '@/components/VuexTest.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/vuex/test',
      name: 'VuexTest',
      component: VuexTest
    }
  ]
})
