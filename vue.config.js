const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  devServer: {
    port: 8080,
    proxy: "http://localhost"
    // proxy: "https://jsm-challenges.s3.amazonaws.com/",
  },
  transpileDependencies: [
    "vuetify"
  ]
})
