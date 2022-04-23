<template>
  <div class="home-view">
    <v-container
      class="home-view__container ma-auto"
      max-width="1264"
    >
      <v-row dense>
        <v-col
          :key="index"
          v-for="(user, index) in usersList"
        >
          <v-card
            class="mx-auto"
            max-heigth="310"
            width="273"
          >
            <v-avatar>
              <v-img
                :src="user.picture.thumbnail"
              />
            </v-avatar>

            <v-card-title>
              Top western road trips
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
              >
                Explore
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                icon
                @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  // import HomeComponent from "./components/HomeComponent.vue";

  export default {
    name: "HomeView",
    components: {
      // HomeComponent,
    },
    data: () => ({
      usersList: []
    }),
    mounted() {
      this.$store
        .dispatch("Users/GET_USERS")
        .then(response => {
          this.usersList = response;
          console.log(this.usersList)
        });
    },
  };
</script>

<style lang="scss" scoped>
  .home-view {
    &__container {

    }
  }
</style>
