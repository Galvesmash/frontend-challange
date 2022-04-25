<template>
  <div class="users-view">
    <h2>Lista de membros</h2>
    
    <v-container
      class="users-view__container mt-5 mx-auto px-0 d-flex"
      fluid
    >
      <div class="mr-4">
        <Filters />
      </div>

      <div>
        <v-card class="mb-4 pa-5 d-flex justify-space-between">
          <p class="ma-0">Exibindo 9 de 25</p>
          <p class="ma-0">Ordenar por: Nome</p>
        </v-card>

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
      </div>
    </v-container>
  </div>
</template>

<script>
  import Filters from "./components/Filters/Filters.vue";
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
      this.$store.dispatch("Users/GET_USERS").then(response => {
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
