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
  };
</script>

<style lang="scss" scoped>
  .users-view {
    &__container {

    }
  }
</style>
