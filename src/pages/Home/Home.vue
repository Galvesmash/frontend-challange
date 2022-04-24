<template>
  <div class="home-view">
    <v-container class="home-view__container">
      <v-btn
        @click="redirectTo('users')"
      >
        Mostrar Usuários
      </v-btn>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "HomeView",
    methods: {
      redirectTo(pageName) {
        this.$router.push({ name: pageName})
      }
    }
  };
</script>

<style lang="scss" scoped>
  .home-view {
    &__container {

    }
  }
</style>
