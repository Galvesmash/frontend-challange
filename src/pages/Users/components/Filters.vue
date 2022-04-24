<template>
  <v-card
    class="user-filters mx-auto py-4"
    heigth="474"
    width="272"
  >
    <h3 class="px-8">Filtar por:</h3>
    <v-list>
      <v-list-group
        no-action
        sub-group
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Estados</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          :key="i"
          class="pl-15"
          no-action
          v-for="(state, i) in statesFilters"
        >
          <v-checkbox
            :label="state"
            :value="state"
            class="text-capitalize"
            dense
            v-model="filters.states"
          />
        </v-list-item>
      </v-list-group>

      <v-list-group
        no-action
        sub-group
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Cidades</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          :key="i"
          class="pl-15"
          no-action
          v-for="(city, i) in citiesFilters"
        >
          <v-checkbox
            :label="city"
            :value="city"
            class="text-capitalize"
            dense
            v-model="filters.cities"
          />
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    name: "UserFilters",
    data: () => ({
      filters: {
        states: [],
        cities: []
      }
    }),
    computed: {
      statesFilters() {
        return this.$store.getters["Users/userStates"];
      },
      citiesFilters() {
        return this.$store.getters["Users/userCities"];
      }
    }
  };
</script>

<style lang="scss" scoped>
  .user-filters {

  }
</style>
