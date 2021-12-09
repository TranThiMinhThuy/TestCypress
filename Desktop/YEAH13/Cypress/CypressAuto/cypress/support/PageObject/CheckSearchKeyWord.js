class checkSearchKeyWord {

  moveToSearchField(searchKey){
    //get searchKey field enter searchKey
    cy.get(':nth-child(1) > .input-sm')
      .type(searchKey)
  }

  selectTotalRowColumn(){
    //get all column in table
    return cy.get('tr td')
  }

  selectFirstColumn(){
    //move to column number 1
    return cy.get('td:nth-child(1)')
  }

  selectSecondColumn(){
    //move to column number 2
    return cy.get('td:nth-child(2)')
  }

  selectThirdColumn(){
    //move to column number 1
    return cy.get('td:nth-child(3)')
  }

}

export default checkSearchKeyWord;