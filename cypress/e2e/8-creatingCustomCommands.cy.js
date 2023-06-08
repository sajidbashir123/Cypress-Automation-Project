/// <reference types="Cypress" />

describe('Fixtures work in driving data', () => {


  it('test', function () {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    cy.get(':nth-child(2) > .nav-link').click();

    /*
    //******Slecting the item from .each methods********
    cy.get('h4.card-title').each(($el, index, $list) => {

      if ($el.text().includes("Samsung Note 8")) {
        cy.get('button.btn').eq(index).click()
      }
    })
      */

    //****Building customized Cypress commands for reusing the code (remaining code for the to select the product is pressent in the commands.js folder)*/
    cy.SelectProduct('Blackberry');

  })

})