class IFrameTab {

  enterSearchKeyWordInIFrameTab(searchword){
    cy.get('form[class="search"]').within(($form) => {  
      // Fill in Selenium
      cy.get('#s').type(searchword,{force: true})   
      //Click search icon in search field    
      cy.get('.button_search').click({force: true})     
    })
    return this
  }

  checkKeyWordInHomePage(search_word){
    //check search_word in home page search
    cy.get('h1')
      .contains(search_word)
      .should('be.visible')
  }

  checkKeyWordInContent(search_word){
    cy.get('.content_bgr').invoke('text').should(text => {
      //check with search_word lowercase
      expect(text.toLowerCase()).to.contain(search_word.toLowerCase());
      //check with search_word luppercase
      expect(text.toUpperCase()).to.contain(search_word.toUpperCase());
      //check with search_word 
      expect(text).to.contain(search_word);

    })
  }

  moveToContentOfFirstResult(){
    //find icon read more in each resulm click to read more icon 
    cy.get(':nth-child(1) > .post_item > :nth-child(3) > .more-link')
    .click()
  }

  moveToContentOfSecondResult(){
    //find icon read more in each resulm click to read more icon
    cy.get(':nth-child(2) > .post_item > :nth-child(3) > .more-link')
    .click()
  }

  moveToContentOfThirdResult(){
    //find icon read more in each resulm click to read more icon
    cy.get(':nth-child(3) > .post_item > :nth-child(3) > .more-link')
    .click()
  }

  moveToContentOfFourthResult(){
    //find icon read more in each resulm click to read more icon
    cy.get(':nth-child(4) > .post_item > :nth-child(3) > .more-link')
    .click()
  }

  moveToContentOfFifthResult(){
    //find icon read more in each resulm click to read more icon
    cy.get(':nth-child(5) > .post_item > :nth-child(3) > .more-link')
    .click()
  }

  moveToContentOfSixthResult(){
    //find icon read more in each resulm click to read more icon
    cy.get(':nth-child(6) > .post_item > :nth-child(3) > .more-link')
    .click()
  }

  moveToContentOfSeventhResult(){
    //find icon read more in each resulm click to read more icon
    cy.get(':nth-child(7) > .post_item > :nth-child(3) > .more-link')
    .click()
  }

  moveToContentOfEighthResult(){
    //find icon read more in each resulm click to read more icon
    cy.get(':nth-child(8) > .post_item > :nth-child(3) > .more-link')
    .click()
  }

  moveToContentOfNineResult(){
    //find icon read more in each resulm click to read more icon
    cy.get(':nth-child(9) > .post_item > :nth-child(3) > .more-link')
    .click()
  }
}

export default IFrameTab;