class WebTablePage {

  typeSearchKey(searchKey){
    //get searchKey field enter searchKey
    cy.get(':nth-child(1) > .input-sm')
      .type(searchKey)
  }

  selectTotalRowColumn(){
    //get all column in table
    return cy.get('tr td')
  }

  getFirstNameResultColumn(){
    //move to column first name column
    return cy.get('td:nth-child(1)')
  }

  getLastNameResultColumn(){
    //move to last name column
    return cy.get('td:nth-child(2)')
  }

  getAgeNameResultColumn(){
    //move to age column
    return cy.get('td:nth-child(3)')
  }

}

export default WebTablePage;