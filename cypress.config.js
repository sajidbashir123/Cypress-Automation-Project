const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "f5u2h8",
  e2e: {
    baseUrl: "https://dev.meltzerhellrung.com",
    watchForFileChanges: false,
    defaultCommandTimeout: 20000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    url: "https://rahulshettyacademy.com/angularpractice/",
  },
});
