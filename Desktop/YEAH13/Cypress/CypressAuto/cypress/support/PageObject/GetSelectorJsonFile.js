class GetSelectorJsonFile {

  getSelect(){
    //move to select tab
    return cy.get('select')
  }

  getPricebar(){
    //move to price tab 
    return cy.get('.pricebar > .inventory_item_price')
  }

  getOptionList(){
    //move to sort_container
    return cy.get('.product_sort_container > option')
  }

  selectData(){
    return cy.get('select[data-test="product_sort_container"]')
  }
}

export default GetSelectorJsonFile;