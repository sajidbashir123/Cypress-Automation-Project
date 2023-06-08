/// <reference types="Cypress" />

describe('Fixtures work in driving data', () => {

    before(() => {
        // Below we are picking the data(name and password) from the example.json file, present in fixture folder
        cy.fixture('example').then(function (data) {
            // To make the global access of function we are using "this" keyword with variable "dataaa"
            this.dataaa = data;
        })
    })

    it('test', function () {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get(':nth-child(1) > .form-control').type(this.dataaa.name);
        cy.get('#exampleInputPassword1').type(this.dataaa.password);
        cy.wait(2000);
        cy.get(':nth-child(4) > .ng-pristine').should('have.value', this.dataaa.name);
        // attr is represent to attribute and here we are using the attribute name "minlength"
        cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2');

        /* Enabled and Disabled is not the property its a behavior which is used to verifiy
         it is enable/disbale/visible/not visible from the code base */

        cy.get('#inlineRadio2').should('be.enabled');
        cy.get('#inlineRadio2').click();
        cy.wait(3000);
        cy.get('#inlineRadio2').should('be.checked');
    })

})
