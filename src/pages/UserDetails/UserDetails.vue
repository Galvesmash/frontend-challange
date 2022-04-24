<template>
  <div class="user-details-view">
    <v-container class="user-details-view__container mx-0 px-0">
      <v-card v-if="selectedUser">
        <v-avatar>
          <v-img
            :src="selectedUser.picture.thumbnail"
          />
        </v-avatar>

        <v-card-title class="text-capitalize">
          {{selectedUser.name.title}} {{selectedUser.name.first}} {{selectedUser.name.last}}
        </v-card-title>

        <v-card-subtitle>
          {{selectedUser.location.street}}
        </v-card-subtitle>

        <v-card-subtitle>
          {{selectedUser.location.city}} - CEP: {{selectedUser.location.postcode}}
        </v-card-subtitle>
      </v-card>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "UserDetailsView",
    created() {
      if (!this.selectedUser) {
        let localStorageUser = localStorage.getItem("selectedUser");
        console.log(JSON.parse(localStorageUser));
        this.$store.dispatch(
          "Users/SELECT_USER",
          (localStorageUser) ? JSON.parse(localStorageUser) : null,
        );
      }
      console.log(this.selectedUser);
    },
    computed: {
      selectedUser() {
        return this.$store.getters["Users/selectedUser"];
      }
    }
  };
</script>

<style lang="scss" scoped>
  .user-details-view {
    &__container {

    }
  }
</style>
