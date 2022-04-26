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

      <div class="users-view__container__results">
        <v-card class="mb-4 pa-5 d-flex justify-space-between">
          <p class="ma-0">Exibindo {{pagination.showFrom}} de {{pagination.showTo}}</p>
          <p class="ma-0">Ordenar por: Nome</p>
        </v-card>

        <v-row
          class="d-flex justify-space-around pa-10"
          v-if="loading"
        >
          <v-progress-circular indeterminate />
        </v-row>
        <v-row
          class="d-flex justify-space-around"
          v-else
        >
          <span
            class="mt-10"
            v-if="!usersList.length"
          >
            Nenhum resultado encontrado...
          </span>
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

        <v-pagination
          v-model="page"
          :length="pagination.total"
          :total-visible="7"
        />
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
      loading: false,
      page: 1,
    }),
    mounted() {
      this.getUsers();
    },
    methods: {
      getUsers() {
        this.loading = true;
        // setTimeout only for loading effect
        setTimeout(() => {
          this.$store.dispatch("Users/GET_USERS").then(() => {
            this.loading = false;
          });
        }, 2000);
      },
      redirectToUserDetails(user) {
        localStorage.setItem("selectedUser", JSON.stringify(user));
        this.$store.dispatch("Users/SELECT_USER", user);
        this.$router.push({ name: 'details'});
      }
    },
    computed: {
      usersList() {
        return this.$store.getters["Users/filteredUsers"];
      },
      pagination() {
        return this.$store.getters["Users/pagination"];
      },
    },
    watch:{
      page() {
        this.$store.dispatch("Users/SET_PAGE", this.page);
      },
      "pagination.page"(newPage) {
        console.log("newPage", newPage);
        this.page = newPage;
      },
    }
  };
</script>

<style lang="scss" scoped>
  .users-view {
    &__container {
      &__results {
        width: 100%;
      }
    }
  }
</style>
