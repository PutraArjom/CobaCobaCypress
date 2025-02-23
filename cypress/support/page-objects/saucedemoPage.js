class saucedemoPage{
    //Ada beberapa cara
    //Pertama nama id, class, dll
    title = '[data-test="title"]' 
    select_backpack = '[data-test="add-to-cart-sauce-labs-backpack"]'
    remove_backpack = '[data-test="remove-sauce-labs-backpack"]'
    cart = '[data-test="shopping-cart-badge"]'


    //Bisa langsung menulis fungsi
    select_backpack(){
        cy.get(this.select_backpack).click()
    }
    veriifyRemoveBackpack(){
        cy.get(this.remove_backpack).should('have.text','Remove')
    }

    /* Kalau inputan TETAP 
    inputUsername(){
        cy.get("#user-name").type("standard_user");
    }
    */

    //INPUTAN BERUBAH UBAH
   inputUsername(usernameLogin){
        cy.get("#user-name").type(usernameLogin);
    }

    veriifyCart(amount){
        cy.get(this.cart).should('have.text',amount)
    }
}

export default new saucedemoPage()
//Contoh penggunaan pada cart.cy.js