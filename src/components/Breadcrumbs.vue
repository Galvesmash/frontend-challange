<template>
  <v-breadcrumbs
    class="breadcrumbs mx-0 px-0"
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
      this.items.unshift({
        text: to.breadcrumb,
        disabled: to.name == this.currentRoute.name,
        href: to.path,
      });
      if (from) {
        if (from.previous) {
          return this.createItems(
            this.routes.find(o => o.name == from.name),
            this.routes.find(o => o.name == from.previous)
          );
        }
        return this.createItems(from);
      }
    }
  },  
  computed: {
    currentRoute() {
      return this.routes.find(o => o.name == this.$route.name);
    },
    previousRoute() {
      return (this.currentRoute.previous)
        ? this.routes.find(o => o.name == this.currentRoute.previous)
        : null;
    }
  },
  watch:{
    $route(to, from) {
      this.items = [];
      this.createItems(
        this.routes.find(o => o.name == to.name),
        this.routes.find(o => o.name == from.name)
      );
    }
  }
};
</script>

<style lang="scss" scoped>
  .breadcrumbs {
    
  }
</style>