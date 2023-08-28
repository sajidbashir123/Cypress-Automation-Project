/// <reference types="Cypress" />

describe("My Automation Project", () => {
  it("Verifying the Web alert and popup text", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#alertbtn").click();
    cy.get("#confirmbtn").click();

    //popup alert
    cy.on("window:alert", (str) => {
      //its comes from Mocha
      expect(str).to.be.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    //Confirmation alert
    cy.on("window:confirm", (str) => {
      expect(str).to.be.equal("Hello , Are you sure you want to confirm?");
    });
  });
});
