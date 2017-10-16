// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import App from './App'
import router from './router'

Vue.use(VueRouter)
Vue.use(Vuelidate)

Vue.config.productionTip = false

require('./styles/index.sass')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
