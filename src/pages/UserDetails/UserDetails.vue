<template>
  <div class="user-details-view">
    <v-container
      class="user-details-view__container mx-0 px-0"
      fluid
    >
      <v-card
        class="user-card mx-auto py-5 text-center"
        v-if="selectedUser"
      >
        <v-avatar
          height="85"
          width="85"
        >
          <v-img :src="selectedUser.picture.large" />
        </v-avatar>

        <v-card-subtitle class="text-capitalize">
          <p class="my-2">{{selectedUser.location.street}}</p>

          <p class="mt-1 mb-0">{{selectedUser.location.city}}</p>
          
          <p class="my-0">{{selectedUser.location.state}} - CEP: {{selectedUser.location.postcode}}</p>
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
        this.$store.dispatch(
          "Users/SELECT_USER",
          (localStorageUser) ? JSON.parse(localStorageUser) : null,
        );
      }
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
