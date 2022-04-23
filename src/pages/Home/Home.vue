<template>
  <div class="home-view">
    {{testHome}}
  </div>
</template>

<script>
  // import HomeComponent from "./components/HomeComponent.vue";

  export default {
    name: "HomeView",
    components: {
      // HomeComponent,
    },
    data: () => ({
      testHome: "Test Home"
    }),
  };
</script>

<style lang="scss" scoped>
  .home-view {
    
  }
</style>
