const { defineConfig } = require("cypress");

//Disisni digunakan untuk menyimpan semua configurasi tapi 'HARUS DISEMUA FILE ADA'
//untuk config lain cari di cypress command 


//Atau bisa menulis command didalam file package.json
//Dengan ditulis pada line 174 dengan tulisan 
// "chckout_test": "npx cypress run--browser chrome --spec 'cypress/e2e/saucedemo/checkout.cy.js'"
//Kemudian di terminal ketikan npm run checkout_test


module.exports = defineConfig({
  e2e: {
    //Bisa langsung menuju laman yang ditulis, Contohnya pada file checkout
    baseUrl: 'https://www.saucedemo.com/',
  //Pada login saucedemo
    env:{
      uat: 'test_uat',
      prod: 'test_prod',
    },
    setupNodeEvents(on, config) {

    },
  },
});
