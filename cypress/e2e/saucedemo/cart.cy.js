import saucedemoPage from "../../support/page-objects/saucedemoPage";

describe("Verify add to cart functionality", () => {
  it("Add a product to cart", () => {
    cy.visit("https://www.saucedemo.com/");

    //cy.get("#user-name").type("standard_user"); 

//Mengambil fungsi dengan INPUTAN YANG HARUS DITULIS
    saucedemoPage.inputUsername('standard_user')
    
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click(); 
    cy.get('.app_logo').should('be.visible') 
    cy.get('[data-test="title"]').should('have.text','Products')
    cy.url().should('include','inventory') 

    //cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    //Untuk pemanggilan fungsi dari file lain
    saucedemoPage.select_backpack()

    cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text','Remove')

    //ke 1 ini, dipanggil langsung tanpa pemanggilan dari file lain
    //cy.get('[data-test="shopping-cart-badge"]').should('have.text','1')
    
    //Penulisan ke 2 ketika sudah ada data yang telah dimasukkan kedalam saucedemoPage.js
    //cy.get(saucedemoPage.cart).should('have.text','1')
    
    //Penulisan ke 3
    saucedemoPage.veriifyCart(1)

    cy.get('[data-test="shopping-cart-link"]').click()
    cy.url().should('include','cart')
    cy.get('[data-test="title"]').should('have.text','Your Cart')
    
  })
})