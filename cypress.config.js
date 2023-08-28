const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "f5u2h8", //adding project ID for the use of Cypress cloud

  e2e: {
    baseUrl: "https://dev.meltzerhellrung.com",
    watchForFileChanges: false, // Not run automatically after any file changes
    defaultCommandTimeout: 20000,
    reporter: "mochawesome", // To generate the HTML report of the executed tested case for external use. it added when we install the mochaawesome dependency
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    url: "https://rahulshettyacademy.com/angularpractice/",
  },

  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 1,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 0,
  },
});
