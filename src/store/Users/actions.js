
import users from "@/assets/users.json";

export default {
  GET_USERS({ commit }) {
    commit("SET_USERS", users.results);
    return users.results;
  }
}
