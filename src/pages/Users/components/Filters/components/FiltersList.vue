<template>
  <v-container class="pa-0">
    <h3 class="pt-6 px-8">Filtar por:</h3>

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
        
        <v-list-item-action
          class="pl-8"
          v-if="!showAll"
        >
          <v-btn
            @click="$emit('handleClick')"
            text
            small
          >
            Ver todos
          </v-btn>
        </v-list-item-action>
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

        <v-list-item-action
          class="pl-8"
          v-if="!showAll"
        >
          <v-btn
            @click="$emit('handleClick')"
            text
            small
          >
            Ver todos
          </v-btn>
        </v-list-item-action>
      </v-list-group>
    </v-list>
  </v-container>
</template>

<script>
  export default {
    name: "UserFiltersList",
    props: {
      showAll: {
        type: Boolean,
        default: false
      },
      handleClick: {
        type: Function
      },
    },
    data: () => ({
      filters: {
        states: [],
        cities: []
      }
    }),
    mounted() {
      this.filters = this.userFilters;
    },
    computed: {
      userFilters() {
        return this.$store.getters["Users/filters"];
      },
      statesFilters() {
        let statesList = this.$store.getters["Users/userStates"];
        return this.showAll ? statesList : statesList.slice(0,5);
      },
      citiesFilters() {
        let citiesList = this.$store.getters["Users/userCities"];
        return this.showAll ? citiesList : citiesList.slice(0,5);
      },
    },
    watch:{
      "filters.states"() {
        this.$store.dispatch("Users/SET_FILTER_STATES", this.filters.states);
      },
      "filters.cities"() {
        this.$store.dispatch("Users/SET_FILTER_CITIES", this.filters.cities);
      },
    }
  };
</script>

<style lang="scss" scoped>
  .user-filters {
    min-height: 474px;
    width: 272px;
  }
</style>
