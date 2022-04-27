<template>
  <v-app class="app">
    <!-- Header Component -->
    <Header />

    <!-- Main Content -->
    <v-main class="app__main py-5 ma-auto">
      <v-content>
        <!-- Breadcrumbs Component -->
        <Breadcrumbs />

        <!-- Router -->
        <router-view></router-view>
      </v-content>
    </v-main>

    <!-- Footer Component -->
    <Footer />
  </v-app>
</template>

<script>
  import Header from "@/components/Header/Header.vue";
  import Breadcrumbs from "@/components/Breadcrumbs.vue";
  import Footer from "@/components/Footer.vue";

  export default {
    name: "App",
    components: {
      Header,
      Breadcrumbs,
      Footer,
    },
  };
</script>

<style lang="scss">
  .app {
    &__main {
      max-width: 1264px !important;
      width: 100%;
    }
  }
</style>
