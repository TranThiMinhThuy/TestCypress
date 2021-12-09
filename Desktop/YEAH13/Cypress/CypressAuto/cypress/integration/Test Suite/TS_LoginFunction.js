// / <reference types="cypress"/>

import LoginPage from '../../support/PageObject/LoginPage';

describe('Testing Login functionality', () => {
  beforeEach(() => {
    cy.fixture('accountLoginFunction').then(function (accountLoginFunction) {
      this.testLogin = accountLoginFunction
      cy.log(this.testLogin) 
    })
    cy.visit('http://www.demo.guru99.com/V4/index.php')

  })

  it('Verify Login fail with blank userID and blank password', function () {
    //blank username and blank password
    const login = new LoginPage() 
    LoginPage.submit()
  })

  it('Verify Login fail with invalid userID and valid password', function () {
    const login = new LoginPage();
    login.enterUsername(this.testLogin[1].username)
    login.enterPassword(this.testLogin[1].password)
    login.submit()
    //using account second
  })

  it('Verify Login fail with valid userID and invalid password', function () {
    const login = new LoginPage();
    login.enterUsername(this.testLogin[2].username)
    login.enterPassword(this.testLogin[2].password)
    login.submit()
    //using account third
  })

  it('Verify Login fail with invalid userID and invalid password', function () {
    const login = new LoginPage();
    login.enterUsername(this.testLogin[3].username)
    login.enterPassword(this.testLogin[3].password)
    login.submit()
    //using account fourth
  })

  it('Verify Login success with valid userID and valid password', function () {
    const login = new LoginPage();
    login.enterUsername(this.testLogin[0].username)
    login.enterPassword(this.testLogin[0].password)
    login.submit()
    //get title homepage to verify login success
    cy.title()
      .should('eq',this.testLogin[0].title) 
    
  })


})


