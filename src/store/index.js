import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: 
  {
    startup:
    {
        name: "",
        country: "",
        goal: "",
        address: "",
        email: "",
        market: "",
        creation_date: "",
        share_capital: null,
        web_site: "",
        employees_size: null,
        contacts: [],
        location: [],
        sectors: [],
        list_team: [],
        list_investissors: [],
        turnover: [],
        fundings: 
        {
            total: null,
            details: []
        },
        facebook_url: "",
        twitter_url: "",
        instagram_url: "",
        linkedin_url: ""
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
