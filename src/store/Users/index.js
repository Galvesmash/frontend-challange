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
});

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
