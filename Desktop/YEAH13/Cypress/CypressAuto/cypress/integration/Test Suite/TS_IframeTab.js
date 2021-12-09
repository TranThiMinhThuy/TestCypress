import IFrameTab from "../../support/PageObject/IFrameTab"

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Word with iframe tab', () => {
  beforeEach(() => {   
    cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame')
    cy.fixture('searchKeyWordIFrameTab')
      .then(function (searchKeyWordIFrameTab) {
      this.keywordIframe = searchKeyWordIFrameTab
      cy.log(this.keywordIframe) 

    const check = new IFrameTab();
    check.enterSearchKeyWordInIFrameTab(this.keywordIframe.keyword)
    })  
  })

  it('check selenium keyword in home search', function () {
    const check = new IFrameTab();
    check.checkKeyWordInHomePage(this.keywordIframe.keyword)
  })

  it('check selenium keyword in result number 1', function () {
    const check = new IFrameTab();
    check.moveToContentOfFirstResult()
    check.checkKeyWordInContent(this.keywordIframe.keyword)
  })

  it('check selenium keyword in result number 2', function () {
    const check = new IFrameTab();
    check.moveToContentOfSecondResult()
    check.checkKeyWordInContent(this.keywordIframe.keyword)
  })

  it('check selenium keyword in result number 3', function () {
    const check = new IFrameTab();
    check.moveToContentOfThirdResult()
    check.checkKeyWordInContent(this.keywordIframe.keyword)
  })

  it('check selenium keyword in result number 4', function () {
    const check = new IFrameTab();
    check.moveToContentOfFourthResult()
    check.checkKeyWordInContent(this.keywordIframe.keyword)
  })

  it('check selenium keyword in result number 5', function () {
    const check = new IFrameTab();
    check.moveToContentOfFifthResult()
    check.checkKeyWordInContent(this.keywordIframe.keyword)
  })

  it('check selenium keyword in result number 6', function () {
    const check = new IFrameTab();
    check.moveToContentOfSixthResult()
    check.checkKeyWordInContent(this.keywordIframe.keyword)
  })

  it('check selenium keyword in result number 7', function () {
    const check = new IFrameTab();
    check.moveToContentOfSeventhResult()
    check.checkKeyWordInContent(this.keywordIframe.keyword)

  })

  it('check selenium keyword in result number 8', function () {
    const check = new IFrameTab();
    check.moveToContentOfEighthResult()
    check.checkKeyWordInContent(this.keywordIframe.keyword)

  })

  it('check selenium keyword in result number 9', function () {
    const check = new IFrameTab();
    check.moveToContentOfNineResult()
    check.checkKeyWordInContent(this.keywordIframe.keyword)

  })

})
