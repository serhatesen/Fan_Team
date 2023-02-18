import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import team from  "@/store/team/team"
import players from "@/store/GalatasarayPlayers/players"
import besiktasPlayers from "@/store/BesiktasPlayers/besiktasPlayers"

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    team,
    players,
    besiktasPlayers
  }
})
