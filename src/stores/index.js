import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import createStore from '@/stores/modules/createStore.js'

const store = new Vuex.Store({
  modules: {
    createStore: createStore,
  }
})

export default store