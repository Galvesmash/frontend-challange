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

        <v-text-field
          class="header__toolbar__search mx-4"
          height="48"
          hide-details
          outlined
          dense
          placeholder="Buscar aqui"
          rounded
          v-model="search"
        >
          <template v-slot:prepend-inner>        
            <v-icon class="mt-1 mr-2">mdi-magnify</v-icon> 
          </template>
        </v-text-field>
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
  export default {
    name: "HeaderComponent",
    data: () => ({
      search: null
    }),
  };
</script>

<style lang="scss" scoped>
  .header {
    background-color: #F5F5F5;
    &__toolbar {
      &__search {
        max-width: 464px;
        min-width: 184px;
      }
    }
  }
</style>
