const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:false,
  e2e: {
    baseUrl:"http://www.facebook.com",
    defaultCommandTimeout:90000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});