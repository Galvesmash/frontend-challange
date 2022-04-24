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
    items: [
      {
        text: "Home",
        disabled: true,
        href: "",
      },
      {
        text: "Usuários",
        disabled: true,
        href: "",
      },
      {
        text: "Detalhes",
        disabled: true,
        href: "",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
  .breadcrumbs {
    
  }
</style>