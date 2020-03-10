import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/scss/global.scss'
import './assets/scss/animation/index.scss'
require('vue2-animate/dist/vue2-animate.min.css')

import './plugins/fontAwesome/fontAwesome.ts'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
