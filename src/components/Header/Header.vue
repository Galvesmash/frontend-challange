<template>
  <v-app-bar
    app
    class="header"
    height="96"
  >
    <v-toolbar
      class="header__toolbar ma-auto"
      color="#F5F5F5"
      flat
      max-width="1264"
    >
      <div class="d-flex flex-grow-1 align-center justify-space-between">
        <v-img
          max-heigth="40"
          max-width="148"
          src="@/assets/logo.svg"
        />

        <Search />

        <v-btn
          color="primary"
          fab
        >
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </div>
    </v-toolbar>
  </v-app-bar>
</template>

<script>
  import Search from "./components/Search.vue";

  export default {
    name: "HeaderComponent",
    components: {
      Search,
    },
    data: () => ({
      search: null
    }),
  };
</script>

<style lang="scss" scoped>
  .header {
    background-color: #F5F5F5;
    &__toolbar {
      
    }
  }
</style>
