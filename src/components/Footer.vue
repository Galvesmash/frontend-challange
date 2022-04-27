<template>
  <v-footer
    class="footer py-9 pb-12"
    color="#3A3A3A"
  >
    <v-container
      class="footer__container ma-auto"
      fluid
    >
      <div class="align-center d-flex flex-column white--text">
        <v-img
          max-heigth="40"
          max-width="148"
          src="@/assets/logo-footer.svg"
        />
        <span class="pt-6">
          Juntos Somos Mais Fidelização S.A.
        </span>
        <span class="pt-6 text-caption">
          Siga-nos nas redes sociais:
        </span>
        <div class="pt-6">
          <v-btn
            class="white--text"
            color="#28B0FC"
            depressed
            fab
            href="https://www.facebook.com/juntossomosmais/"
            small
            target="_blank"
          >
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn
            class="mx-4 white--text"
            color="#28B0FC"
            depressed
            fab
            href="https://www.linkedin.com/company/juntos-somos-mais/"
            small
            target="_blank"
          >
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn
            class="white--text"
            color="#28B0FC"
            depressed
            fab
            href="https://www.instagram.com/juntossomosmais/"
            small
            target="_blank"
          >
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style lang="scss" scoped>
  .footer {
    &__container {
      max-width: 1264px;
    }
  }
</style>