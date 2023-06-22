/// <reference types="Cypress" />
import Home2 from "../../pobTestPage/home2";

const home1 = new Home2();

describe("data dring in POM", function () {
  it("test", () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    home1.name("sajid");
    home1.email("a@bgmail.com");
  });
});
