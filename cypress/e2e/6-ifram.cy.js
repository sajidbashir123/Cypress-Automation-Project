/*
1st Installed the following command
npm install -D cypress-iframe
In your cypress/support/commands.js file, add the following:
import 'cypress-iframe';
*/

/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

describe('test iframe', () => {

    it('test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.frameLoaded("#courses-iframe");
        cy.iframe().find('a[href="mentorship"]').eq(0).click();
        cy.iframe().find('a[href="mentorship"]').should('have.length', 2);

    })

})