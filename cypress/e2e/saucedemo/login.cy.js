describe("Verify Login Functionality", () => {
  it("Success Login", () => {
    cy.visit("https://www.saucedemo.com/");
    //Penggunaan # untuk Id
    cy.get("#user-name").type("standard_user"); //type berfungsi sebagai inputan
    //Untuk selain Id dan Class, menggunakan nama lengkap seperti dibawah
    cy.get('[data-test="password"]').type("secret_sauce");
    //Penggunaan '' digunakan untuk memanggil class
    //cy.get('.submit-button_btn_action').click()       Bisa seperti ini, Bisa seperti dibawah
    cy.get('[data-test="login-button"]').click(); //untuk clik() digunakan untuk menekan tombol didalam fitur
    cy.get('.app_logo').should('be.visible') //kegunaan .should untuk membuat pernyataan tentang status aplikasi yang sedang diuji
    cy.get('[data-test="title"]').should('have.text','Products') //have.text itu kalimat harus sama persis
    cy.url().should('include','inventory') //untuk mengetahui apabenar masuk kedalam url yang memiliki kalimat "inventory"
  })
  it("Fail login - user locked out", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("locked_out_user");
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible') //be.visible itu ketika hanya keluar kalimatnya saja
    cy.get('[data-test="error"]').should('contain.text','Sorry, this user has been locked out') //contain.text digunakan untuk mengambil beberapa teks 
  })
  it("Fail login - wrong username", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("salah_orang");
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible') //be.visible itu ketika hanya keluar kalimatnya saja
    cy.verifyCountain('[data-test="error"]').should('contain.text','Username and password do not match any user in this service') 
    //cy.get('[data-test="error"]').should('contain.text','Username and password do not match any user in this service') 
  })
  //it.only () bisa digunakan untuk menguji 1 use case saja
  //it.skip bisa digunakan untuk melakukan skip use case
  it("Fail login - wrong password", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("salah_orang");
    cy.get('[data-test="password"]').type("bukan_password")
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible') //be.visible itu ketika hanya keluar kalimatnya saja
    cy.get('[data-test="error"]').should('contain.text','Username and password do not match any user in this service') //contain.text digunakan untuk mengambil beberapa teks 
  })
  it("login - env TEST", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type(Cypress.env('uat'));
    cy.inputText('[data-test="password"]',"bukan_password")
    //cy.get('[data-test="password"]').type("bukan_password")
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible') 
    cy.get('[data-test="error"]').should('contain.text','Username and password do not match any user in this service') //contain.text digunakan untuk mengambil beberapa teks 
  }) 
  //Contoh penggunaan json username
  it("login bERHASIL- mengggunkana user.json", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.fixture('users').then((users) => {
      const datauser = users
    
    cy.login(datauser.username,'secret_user')
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible') //be.visible itu ketika hanya keluar kalimatnya saja
    cy.get('[data-test="error"]').should('contain.text','Sorry, this user has been locked out') //contain.text digunakan untuk mengambil beberapa teks 
  })
  })
});
