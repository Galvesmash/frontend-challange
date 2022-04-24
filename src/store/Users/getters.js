export default {
  users: state => {
    return state.users;
  },
  filteredUsers: state => filter => {
    return state.users.filter(o => o.name == filter.name);
  }
}
