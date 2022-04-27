<template>
  <div class="home-view">
    <v-container
      class="home-view__container mt-5"
      fluid
    >
      <v-card
        class="home-view__container__card mx-auto pa-10 text-center"
        max-width="344"
      >
        <v-icon
          class="home-view__container__card__icon"
        >
          mdi-account-multiple
        </v-icon>

        <v-btn
          @click="redirectTo('users')"
        >
          Mostrar Usuários
        </v-btn>
      </v-card>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "HomeView",
    methods: {
      redirectTo(pageName) {
        this.$router.push({ name: pageName});
      }
    }
  };
</script>

<style lang="scss" scoped>
  .home-view {
    &__container {
      &__card {
        &__icon {
          font-size: 160px;
        }
      }
    }
  }
</style>
