<template>
  <div class="users-view">
    <h2>Lista de membros</h2>
    
    <v-container class="users-view__container mt-5 mx-auto px-0">
      <v-row>
        <v-col>
          <Filters />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          :key="index"
          v-for="(user, index) in usersList"
        >
          <UserCard
            :user="user"
            @handleClick="redirectToUserDetails(user)"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import Filters from "./components/Filters.vue";
  import UserCard from "./components/UserCard.vue";

  export default {
    name: "UsersView",
    components: {
      Filters,
      UserCard,
    },
    data: () => ({
      usersList: []
    }),
    mounted() {
      this.$store
        .dispatch("Users/GET_USERS")
        .then(response => {
          this.usersList = response;
        });
    },
    methods: {
      redirectToUserDetails(user) {
        localStorage.setItem("selectedUser", JSON.stringify(user));
        this.$store.dispatch("Users/SELECT_USER", user);
        this.$router.push({ name: 'details'});
      }
    }
  };
</script>

<style lang="scss" scoped>
  .users-view {
    &__container {

    }
  }
</style>
