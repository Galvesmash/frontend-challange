<template>
  <div class="users-view">
    <v-container class="users-view__container">
      <v-row dense>
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
  import UserCard from "./components/UserCard.vue";

  export default {
    name: "UsersView",
    components: {
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
