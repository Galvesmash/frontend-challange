import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
  },
  getters: {
    list: state => {
      return state.list;
    }
  },
  mutations: {
    SET_DATA (state, list) {
      state.list = list;
    }
  },
  actions: {
    async loadJson ({ commit }) {
      try {
        const response = await axios.get("https://jsm-challenges.s3.amazonaws.com/frontend-challenge.json", {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        });
        console.log(response.data.headers);
        commit("SET_DATA", response);
      }
      catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
  }
});