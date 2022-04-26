import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = () => ({
  selectedUser: null,
  search: "",
  filters: {
    states: [],
    cities: []
  },
  users: [],
  pagination: {
    itemsPerPage: 9,
    page: 1,
    total: 0,
    showFrom: 0,
    showTo: 0
  }
});

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
