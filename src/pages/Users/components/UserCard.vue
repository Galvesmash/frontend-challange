<template>
  <v-card
    class="user-card mx-auto"
    max-heigth="310"
    width="273"
  >
    <v-avatar>
      <v-img
        :src="user.picture.thumbnail"
      />
    </v-avatar>

    <v-card-title class="text-capitalize">
      {{user.name.title}} {{user.name.first}} {{user.name.last}}
    </v-card-title>

    <v-card-subtitle>
      {{user.location.street}}
    </v-card-subtitle>

    <v-card-subtitle>
      {{user.location.city}}
      {{user.location.state}} - CEP: {{user.location.postcode}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        @click="$emit('handleClick')"
        text
      >
        Explore
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
        type: Function,
        required: true
      }
    }
  };
</script>

<style lang="scss" scoped>
  .user-card {

  }
</style>
