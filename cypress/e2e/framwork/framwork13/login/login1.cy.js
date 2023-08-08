/* The purposes of the login folder is to understand how we can execute all the test files present in one folders.
 In out package,json file we have built a custom command to execute our all the test files present in login folder*/

/// <reference types="Cypress" />
describe("Run only this folder", () => {
  it(" login test with valid creadential", () => {
    cy.visit("/"); // The base url is set in "cypress.config.js" file and we can use it globally
    //login
    cy.get("#username-input").type("sajid.bashir+mh3@kwanso.com");
    cy.get("#password-input").type("Test#123{Enter}");
  });
});
