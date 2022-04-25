import users from "@/assets/users.json";

export default {
  SET_FILTER_STATES({ commit }, filterStates) {
    commit("SET_FILTER_STATES", filterStates);
  },
  SET_FILTER_CITIES({ commit }, filterCities) {
    commit("SET_FILTER_CITIES", filterCities);
  },
  GET_USERS({ commit }) {
    commit("SET_USERS", users.results);
    return users.results;
  },
  SELECT_USER({ commit }, user) {
    commit("SELECT_USER", user);
  },
}
