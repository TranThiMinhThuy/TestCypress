describe('Verify all assignee’s records should contain keyword', () => {
  beforeEach(() => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/WebTable/')
    cy.fixture('findNameTable').then(function (findNameTable) {
      this.findKey = findNameTable  
    })  
  })


  it('Verify that user cant find other people name with blank field', function() {
    //Search first element in findNameTable.json and check result
    cy.checkSearchKey(this.findKey[0].name)   
  })

  it('Verify that user cant find other people name with special character', function() {
    //Search second element in findNameTable.json and check result
    cy.checkSearchKey(this.findKey[1].name)  
  }) 

  it('Verify that user cant find other people name by number', function() {
    //Search third element in findNameTable.json and check result
    cy.checkSearchKey(this.findKey[2].name)  
  })

  it('Verify that user able to filter by Asignee another name', function() {
    //Search fourth element in findNameTable.json and check result
    cy.checkSearchKey(this.findKey[3].name)  
  })

  it('Verify that user able to filter by Asignee', function () {
  // Search fifth element in findNameTable.json and check result
    cy.checkSearchKey(this.findKey[4].name)  
  })


})