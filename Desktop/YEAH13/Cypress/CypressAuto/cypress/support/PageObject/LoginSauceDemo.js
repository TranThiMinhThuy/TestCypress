class LoginSauceDemo
{ 
  enterUsername(username) {
    //get username field enter username
    cy.get('[data-test=username]')
      .clear()
      .type(username);
    return this
  }

  enterPassword(password) {
    //get password field enter password
    cy.get('[data-test=password]')
        .clear()
        .type(password);
    return this
  }

  submit(){
    //click submit button
    const field = cy.get('[data-test=login-button]')
    field.click()
  }

};

export default LoginSauceDemo;