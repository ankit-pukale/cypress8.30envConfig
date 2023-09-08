const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:false,
  e2e: {
    baseUrl:"http://www.google.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
