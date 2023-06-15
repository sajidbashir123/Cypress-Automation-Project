/// <reference types="Cypress" />

//const { method } = require("cypress/types/bluebird");

describe('My Automation Project', () => {

  it('check/uncheck box - static and dynamic dropdown control', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    //slecting the checkbox and checked and unchecked it and verifying it by apply assertions
    cy.get('#checkBoxOption1').check().and('be.checked');
    cy.wait(1000);
    cy.get('#checkBoxOption1').uncheck().and('not.be.checked');
    cy.wait(1000);

    //********select multiple checkbox in same time and tick them*********
    //1st method
    cy.get('#checkbox-example').find('#checkBoxOption1,#checkBoxOption2,#checkBoxOption3').check().and('be.checked');
    //2nd method
    cy.get('input[type="checkbox"]').check().and('be.checked');

    /**Static Dropdown Selection**/
    cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2');
    cy.wait(1000);

    /**Dynamic Dropdown Selection**/
    cy.get('#autocomplete').type('ind');
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
      if ($el.text() === 'India') {
        cy.wrap($el).click();
        cy.wait(1000);
      }
    })

  })
})