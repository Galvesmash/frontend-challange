export default {
  selectedUser: state => {
    return state.selectedUser;
  },
  seach: state => {
    return state.search;
  },
  filters: state => {
    return state.filters;
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

    // Return if no search and filters
    if (!state.search && !states.length && !cities.length) return state.users;

    let usersList = [...state.users];

    // Filter by search
    if (state.search) {
      usersList = usersList.filter(o => {
        if (
          o.name.first.includes(state.search) ||
          o.name.last.includes(state.search) ||
          `${o.name.first} ${o.name.last}`.includes(state.search)
        ) {
          return o;
        }
      });
    }

    // Return if filters
    if (!states.length && !cities.length) return usersList;

    // Filter by states and/or cities
    return usersList.filter(o => {
      if (
        (states.length && cities.length) &&
        (states.includes(o.location.state) && cities.includes(o.location.city))
      ) {
        return o;
      } else if ((states.length && !cities.length) && states.includes(o.location.state)) {
        return o;
      } else if ((!states.length && cities.length) && cities.includes(o.location.city)) {
        return o;
      }
    });
  },
  users: state => {
    return state.users;
  },
}
