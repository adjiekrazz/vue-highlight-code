import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const requireContext = require.context('./modules', false, /.*\.js$/)