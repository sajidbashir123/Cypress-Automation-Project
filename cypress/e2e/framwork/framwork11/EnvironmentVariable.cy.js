/// <reference types="Cypress" />

//const cypress = require("cypress");

describe("data driving in POM", function () {
  it("test", () => {
    console.log(Cypress.env());
    //cy.visit("https://rahulshettyacademy.com/angularpractice/");
    // Here we are using the url as we have set in the cypress.config.js file as environment variables
    cy.visit(Cypress.env("url"));
    cy.get(":nth-child(2) > .nav-link").click();
    cy.get(".card.h-100").eq("1").contains("Add").click();
    cy.get(".nav-link.btn.btn-primary").click();
    cy.contains("Checkout").click();
    cy.get("#country").type("pakistan");
    cy.get(".suggestions > ul > li > a").click();
    cy.contains("Purchase").click();
    cy.get(".alert").should(
      "include.text",
      "Success! Thank you! Your order will be delivered in next few weeks :-)."
    );
  });
});
