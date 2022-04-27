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
    >
      <div class="d-flex flex-grow-1 align-center justify-space-between">
        <v-img
          max-heigth="40"
          max-width="148"
          src="@/assets/logo.svg"
        />

        <Search />

        <v-avatar
          height="56"
          width="56"
        >
          <v-img src="https://arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/DLNCR7PGBGVX6LTYCHJVDH7M34.jpg" />
        </v-avatar>
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
      max-width: 1264px;
    }
  }
</style>
