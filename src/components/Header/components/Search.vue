<template>
  <v-text-field
    class="search mx-4"
    dense
    height="48"
    hide-details
    outlined
    placeholder="Buscar aqui"
    rounded
    v-model="search"
  >
    <template v-slot:prepend-inner>        
      <v-icon class="mt-1 mr-2">mdi-magnify</v-icon> 
    </template>
  </v-text-field>
</template>

<script>
  export default {
    name: "SearchComponent",
    data: () => ({
      search: null
    }),
  };
</script>

<style lang="scss" scoped>
  .search {
    max-width: 464px;
    min-width: 184px;
  }
</style>
