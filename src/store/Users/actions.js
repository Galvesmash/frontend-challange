import users from "@/assets/users.json";

export default {
  SET_SEARCH({ commit }, search) {
    commit("SET_SEARCH", search);
  },
  SET_FILTER_STATES({ commit }, filterStates) {
    commit("SET_FILTER_STATES", filterStates);
  },
  SET_FILTER_CITIES({ commit }, filterCities) {
    commit("SET_FILTER_CITIES", filterCities);
  },
  SET_PAGE({ commit }, page) {
    commit("SET_PAGE", page);
  },
  GET_USERS({ commit }) {
    commit("SET_USERS", users.results);
    return users.results;
  },
  SELECT_USER({ commit }, user) {
    commit("SELECT_USER", user);
  },
}
