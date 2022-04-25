<template>
  <v-card class="user-card mx-auto py-5 text-center">
    <v-avatar
      height="85"
      width="85"
    >
      <v-img :src="user.picture.large" />
    </v-avatar>

    <v-card-title class="text-capitalize">
      {{user.name.title}} {{user.name.first}} {{user.name.last}}
    </v-card-title>

    <v-card-subtitle class="text-capitalize">
      <p class="my-2">{{user.location.street}}</p>

      <p class="mt-1 mb-0">{{user.location.city}}</p>
      
      <p class="my-0">{{user.location.state}} - CEP: {{user.location.postcode}}</p>
    </v-card-subtitle>

    <v-card-actions class="pa-0 justify-center">
      <v-btn
        @click="$emit('handleClick')"
        text
      >
        Sobre
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "UserCard",
    props: {
      user: {
        type: Object,
        required: true
      },
      handleClick: {
        type: Function
      },
    }
  };
</script>

<style lang="scss" scoped>
  .user-card {
    height: 310px;
    width: 273px;
  }
</style>
