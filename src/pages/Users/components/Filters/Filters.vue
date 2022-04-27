<template>
  <v-card class="user-filters mx-auto py-4">
    <FiltersList @handleClick="openFiltersModal" />
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="300px"
    >
      <v-card class="pa-0">
        <FiltersList showAll />
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
  import FiltersList from "./components/FiltersList.vue";

  export default {
    name: "UserFilters",
    components: {
      FiltersList,
    },
    data: () => ({
      dialog: false,
    }),
    methods: {
      openFiltersModal() {
        this.dialog = true;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .user-filters {
    min-height: 474px;
    width: 272px;
  }
</style>
