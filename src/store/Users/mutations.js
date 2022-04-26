export default {
  SET_SEARCH(state, search) {
    state.pagination.page = 1;
    state.search = search.toLowerCase();
  },
  SET_FILTER_STATES(state, filterStates) {
    state.pagination.page = 1;
    state.filters.states = filterStates;
  },
  SET_FILTER_CITIES(state, filterCities) {
    state.pagination.page = 1;
    state.filters.cities = filterCities;
  },
  SET_PAGE(state, page) {
    state.pagination.page = page;
  },
  SET_USERS(state, users) {
    state.users = users;
    // Pagination
    state.pagination.total = Math.ceil(users.length / state.pagination.itemsPerPage);
    state.pagination.showFrom = state.pagination.itemsPerPage * state.pagination.page;
    state.pagination.showTo = state.pagination.itemsPerPage * state.pagination.total;
  },
  SELECT_USER(state, user) {
    state.selectedUser = user;
  }
}
