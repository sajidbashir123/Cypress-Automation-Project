/// <reference types="Cypress" />

describe("data driving in POM", function () {
  it("test", () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
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
