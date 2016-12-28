import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from './routes'

import Card from 'src/components/Elements/Card/Card.vue'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(require('vue-chartist'))
Vue.component('Card', Card)

/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  template: '<router-view class="view"></router-view>'
}).$mount('#app')
