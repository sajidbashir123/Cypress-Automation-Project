/// <reference types="Cypress" />

describe("My Automation Project", () => {
  it("Verifying the visiblility/invisibility of the textbox", () => {
    //cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.visit("https://rahulshettyacademy.com/");
    //Hide the textbox and verify
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");

    cy.wait(2000);

    //show the textbox and verify
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");
  });
});
