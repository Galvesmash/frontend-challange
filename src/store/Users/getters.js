export default {
  selectedUser: state => {
    return state.selectedUser;
  },
  seach: state => {
    return state.search;
  },
  orderByOptions: state => {
    return state.orderByOptions;
  },
  orderBy: state => {
    return state.orderBy;
  },
  filters: state => {
    return state.filters;
  },
  pagination: state => {
    return state.pagination;
  },
  userStates: state => {
    return [...new Set(state.users.map(o => o.location.state))];
  },
  userCities: state => {
    return [...new Set(state.users.map(o => o.location.city))];
  },
  filteredUsers: state => {
    let states = state.filters.states;
    let cities = state.filters.cities;
    let usersList = [...state.users];

    // Filter by search
    if (state.search) {
      usersList = usersList.filter(o => {
        if (
          o.name.first.normalize("NFD").replace(/\p{Diacritic}/gu, "").includes(state.search) ||
          o.name.last.normalize("NFD").replace(/\p{Diacritic}/gu, "").includes(state.search) ||
          `${o.name.first} ${o.name.last}`.normalize("NFD").replace(/\p{Diacritic}/gu, "").includes(state.search)
        ) {
          return o;
        }
      });
    }

    // Filter by states and/or cities
    if (states.length || cities.length) {
      usersList = usersList.filter(o => {
        if (
          ((states.length && cities.length) && (states.includes(o.location.state) && cities.includes(o.location.city))) ||
          ((states.length && !cities.length) && states.includes(o.location.state)) ||
          ((!states.length && cities.length) && cities.includes(o.location.city))
        ) {
          return o;
        }
      });
    }

    // Sort by state.orderBy
    usersList = usersList.sort((a, b) => {
      let compareA = a.name[state.orderBy] || a.location[state.orderBy];
      let compareB = b.name[state.orderBy] || b.location[state.orderBy];
      return compareA.localeCompare(compareB);
    });

    // Pagination
    state.pagination.total = Math.ceil(usersList.length / state.pagination.itemsPerPage);
    state.pagination.showFrom = state.pagination.itemsPerPage * state.pagination.page;
    state.pagination.showTo = state.pagination.itemsPerPage * state.pagination.total;

    // Return paginated
    let slice1 = state.pagination.itemsPerPage * (state.pagination.page-1);
    let slice2 = slice1 + state.pagination.itemsPerPage;
    return usersList.slice(slice1, slice2 > usersList.length ? usersList.length : slice2);
  },
  users: state => {
    return state.users;
  },
}
