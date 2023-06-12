/// <reference types="Cypress" />

/* I don't know why below files are automativcally added
const { contains } = require("cypress/types/jquery");
const { includes, set } = require("cypress/types/lodash");
*/
describe("My Automation Project", () => {
  it("CSS slector", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    //below with the three different commands we find the same products
    //here we are geting the css selector for the parent class "products" --> see by inscpection mode
    cy.get(".products").should("have.length", 1);
    //Here we are getting the css selector for the child class "product" where we 4 electments are visible
    cy.get(".product:visible").should("have.length", 4);
    //Here we are using the .find method to find the child classes "product" from the parent class "products"
    cy.get(".products").find(".product").should("have.length", 4);
    /*Here we are using .eq("indecx") method to find the specifically product in present in the array having indecx "2"
    and then ckicking on "Add to cart" button */
    cy.get(".products")
      .find(".product")
      .eq("2")
      .contains("ADD TO CART")
      .click();

    //We are serching the specifcally product from the name and clickling on the add to cart button
    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const textveg = $el.find("h4.product-name").text();
        if (textveg.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });
  });
});
