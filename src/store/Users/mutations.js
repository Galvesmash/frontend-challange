export default {
  SET_FILTER_STATES(state, filterStates) {
    state.filters.states = filterStates;
  },
  SET_FILTER_CITIES(state, filterCities) {
    state.filters.cities = filterCities;
  },
  SET_USERS(state, users) {
    state.users = users;
  },
  SELECT_USER(state, user) {
    state.selectedUser = user;
  }
}
