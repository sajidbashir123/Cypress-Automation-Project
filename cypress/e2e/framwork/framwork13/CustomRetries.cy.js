/// <reference types="Cypress" />
// Customizing retry attempts for a suite of tests
describe(
  "My Automation Project",
  {
    retries: {
      runMode: 1,
      openMode: 1,
    },
  },
  () => {
    it("Verifying the visiblility/invisibility of the textbox", () => {
      //cy.visit("https://rahulshettyacademy.com/AutomationPractice/"); //original link is this but to verify retry I have changed the linked
      cy.visit("https://rahulshettyacademy.com/");

      //Hide the textbox and verify
      cy.get("#hide-textbox").click();
      cy.get("#displayed-text").should("not.be.visible");

      cy.wait(2000);

      //show the textbox and verify
      cy.get("#show-textbox").click();
      cy.get("#displayed-text").should("be.visible");
    });
  }
);
