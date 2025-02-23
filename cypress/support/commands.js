// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



//untuk Commands digunakan untuk yang sering digunakan dan lebih general
//Penggunaan tanpa perli inport
//Contoh penggunaan ada di checkout.cy.js
Cypress.Commands.add('login', (username, password) => { 
    cy.get("#user-name").type(username);
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click();
 })

 //Contoh penggunaan ada di login.cy.js line  29
 Cypress.Commands.add('verifyCountain', (locator, textnya) => { 
    cy.get(locator).should('contain.text',textnya);
 })
//Contoh penggunaan ada di login.cy.js line  45
 Cypress.Commands.add('inputText', (locator, textnya) => { 
    cy.get(locator).clear().type(textnya);
 })