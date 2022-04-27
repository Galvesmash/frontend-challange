<template>
  <div class="user-details-view">
    <v-container
      class="user-details-view__container mx-0 px-0"
      fluid
    >
      <v-card
        class="user-card mx-auto py-5 text-center"
        flat
        v-if="selectedUser"
      >
        <v-avatar
          height="128"
          width="128"
        >
          <v-img :src="selectedUser.picture.large" />
        </v-avatar>

        <v-card-title class="d-flex justify-center mt-5 text-capitalize">
          {{selectedUser.name.title}} {{selectedUser.name.first}} {{selectedUser.name.last}}, {{selectedUser.dob.age}}
        </v-card-title>

        <v-card-subtitle>
          <p class="text-caption my-0">Registrado a {{selectedUser.registered.age}} anos</p>
        </v-card-subtitle>

        <v-card-subtitle class="mt-8">
          <p class="my-0">{{selectedUser.email}}</p>

          <p class="my-0">Telefone: {{selectedUser.phone}}</p>

          <p class="my-0">Celular: {{selectedUser.cell}}</p>
        </v-card-subtitle>

        <v-card-subtitle class="mt-8 text-capitalize">
          <p class="text-caption my-0">Endereço:</p>

          <p class="my-0">{{selectedUser.location.street}}, {{selectedUser.location.city}}</p>
          
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
