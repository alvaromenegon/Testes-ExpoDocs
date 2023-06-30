const { defineConfig } = require("cypress");

module.exports = defineConfig({
  failOnStatusCode: false,
  uncaughtException: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    
    baseUrl: "https://docs.expo.dev/",
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});
