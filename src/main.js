import Vue from 'vue'
import App from './App.vue'
import { router } from '@/routes/index.js'

Vue.config.productionTip = false

import "normalize.css"
import '@/styles/index.css'
import store from '@/stores/index.js'

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
