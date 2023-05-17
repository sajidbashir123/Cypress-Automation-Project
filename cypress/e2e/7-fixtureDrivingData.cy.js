/// <reference types="Cypress" />

describe('Fixtures work in driving data', () => {

    before(() => {
        // Below we are picking the data(name and password) from the example.json file, present in fixture folder
        cy.fixture('example').then(function (data) {
            // To make the global access of function we are using this
            this.data = data;
        })
    })

    it('test', function () {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get(':nth-child(1) > .form-control').type(this.data.name);
        cy.get('#exampleInputPassword1').type(this.data.password);
        cy.wait(2000);
        cy.get(':nth-child(4) > .ng-pristine').should('have.value', this.data.name);
        cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2');

    })

})
