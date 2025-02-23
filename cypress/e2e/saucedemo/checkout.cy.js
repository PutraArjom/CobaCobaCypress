describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("");
  });
it("Checkout product", () => {
  //Berikut dibawah ini perintah login menggunakan commands
    cy.login('standard_user','secret_sauce') 
    cy.get('.app_logo').should('be.visible') 
    cy.get('[data-test="title"]').should('have.text','Products')
    cy.url().should('include','inventory') 
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    // cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text','Remove')
    // cy.get('[data-test="shopping-cart-badge"]').should('have.text','1')
    
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.url().should('include','cart')
    //cy.get('[data-test="title"]').should('have.text','Your Cart')
    cy.get('#checkout').click()
    cy.url().should('include','checkout')
    cy.get('#first-name').type('Sukri')
    cy.get('#last-name').type('Peod')
    cy.get('#postal-code').type('5123')
    cy.get('[data-test="continue"]').click()
})
});