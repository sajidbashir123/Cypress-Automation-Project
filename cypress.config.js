const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dev.meltzerhellrung.com",
    watchForFileChanges: false,
    defaultCommandTimeout: (20000),


    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
  },
});
