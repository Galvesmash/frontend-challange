<template>
  <v-app class="app">
    <!-- Header Component -->
    <Header />

    <!-- Main Content -->
    <v-main>
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-main>

    <!-- Footer Component -->
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
  .app {

  }
</style>
