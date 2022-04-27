<template>
  <div class="users-order-by d-flex align-center">
    <span class="mr-2">Ordenar por:</span>
    <v-select
      :items="orderByOptions"
      class="users-order-by__select ma-0 pa-0"
      color="#4A4A4A"
      hide-details
      item-text="text"
      item-value="value"
      v-model="orderBy"
    />
  </div>
</template>

<script>
  export default {
    name: "UsersOrderBy",
    data: () => ({
      orderBy: "",
    }),
    mounted() {
      this.orderBy = this.$store.getters["Users/orderBy"];
    },
    computed: {
      orderByOptions() {
        return this.$store.getters["Users/orderByOptions"];
      }
    },
    watch:{
      orderBy() {
        this.$store.dispatch("Users/SET_ORDER_BY", this.orderBy);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .users-order-by {
    &__select {
      width: 100px;
    }
  }
</style>