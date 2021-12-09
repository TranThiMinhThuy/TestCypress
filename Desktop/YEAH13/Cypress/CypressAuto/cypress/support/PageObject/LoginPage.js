class LoginPage
{ 
 enterUsername(username) {
   //get username field enter username
    cy.get(':nth-child(1) > :nth-child(2) > input')
      .clear()
      .type(username);
    return this
  }

  enterPassword(password) {
    //get password field enter password
    cy.get(':nth-child(2) > :nth-child(2) > input')
      .clear()
      .type(password);
    return this
  }

  submit(){
    //click submit button
    const field = cy.get('[type="submit"]')
    field.click()
  }
}

export default LoginPage;