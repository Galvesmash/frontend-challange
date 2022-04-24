export default {
  selectedUser: state => {
    return state.selectedUser;
  },
  userStates: state => {
    return [...new Set(state.users.map(o => o.location.state))];
  },
  userCities: state => {
    return [...new Set(state.users.map(o => o.location.city))];
  },
  users: state => {
    return state.users;
  },
  filteredUsers: state => filter => {
    return state.users.filter(o => o.name == filter.name);
  }
}
