//Cypress also provides hooks (borrowed from Mocha).

/*
The order of hook and test execution is as follows:
before()
beforeEach()
Tests run
afterEach()
after()
*/

/// <reference types="Cypress" />


describe('Hooks', () => {


    before(() => {
        // runs once before all tests in the block
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#autocomplete').type("before block running");
        cy.wait(3000);
    })


    beforeEach(() => {
        // runs before each test in the block
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#autocomplete').type("before each block running");
        cy.wait(3000);
    })


    it('Verifying the visiblility/invisibility of the textbox', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#autocomplete').type("IT block 1st running");
        cy.wait(3000);
    })


    it('Verifying the visiblility/invisibility of the textbox', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#autocomplete').type("IT block 2nd running");
        cy.wait(3000);
    })


    afterEach(() => {
        // runs after each test in the block

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#autocomplete').type("After each block running");
        cy.wait(3000);
    })


    after(() => {
        // runs once after all tests in the block
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#autocomplete').type("After block running");
        cy.wait(3000);
    })


})