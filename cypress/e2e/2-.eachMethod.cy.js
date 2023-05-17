/// <reference types="Cypress" />

describe('My Automation Project', () => {

  it('searching prodcut with name using .each method', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type("ca");
    cy.wait(2000);

    //We are serching the specifcally product from the name and clickling on the add to cart button
    cy.get('.products').find('.product').each(($el, index, $list) => {
      const textveg = $el.find('h4.product-name').text()
      if (textveg.includes('Cashews')) {
        cy.wrap($el).find('button').click()
      }
    })
    cy.get('.tada').click();
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.contains('Place Order').click();
    
  })
})