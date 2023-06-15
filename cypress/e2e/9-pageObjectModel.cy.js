/// <reference types="Cypress" />
import { Home } from "./pobTestPage/home";
const home = new Home();

describe('Fixtures work in driving data', function () {


    it('test', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        home.name("sajid");
        home.email("examplegmail.com");
        home.password("Test123");

    })
})