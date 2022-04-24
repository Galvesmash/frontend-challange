<template>
  <v-breadcrumbs
    class="breadcrumbs"
    :items="items"
  >
    <template v-slot:divider>
      <v-icon>mdi-chevron-right</v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  name: "BreadcrumbsComponent",
  data: () => ({
    routes: [],
    items: [],
  }),
  created() {
    this.routes = this.$router.options.routes;
    this.items = [];
    this.createItems(
      this.currentRoute,
      this.previousRoute
    );
  },
  methods: {
    createItems(to, from = null) {
      console.log(to, from);
      if (from) {
        if (from.previous) {
          return this.createItems(
            this.routes.find(o => o.name == from.name.toLowerCase()),
            this.routes.find(o => o.name == from.previous.toLowerCase())
          );
        }
        this.items.push({
          text: from.breadcrumb,
          disabled: from.name == this.currentRoute.name,
          href: from.path,
        });
        return this.createItems(to);
      } else {
        this.items.push({
          text: to.breadcrumb,
          disabled: to.name == this.currentRoute.name,
          href: to.path,
        });
      }
    }
  },  
  computed: {
    currentRoute() {
      return this.routes.find(o => o.name == this.$route.name.toLowerCase());
    },
    previousRoute() {
      return (this.currentRoute.previous)
        ? this.routes.find(o => o.name == this.currentRoute.previous.toLowerCase())
        : null;
    }
  },
  watch:{
    $route(to, from) {
      this.items = [];
      this.createItems(
        this.routes.find(o => o.name == to.name.toLowerCase()),
        this.routes.find(o => o.name == from.name.toLowerCase())
      );
    }
  }
};
</script>

<style lang="scss" scoped>
  .breadcrumbs {
    
  }
</style>