import WebTablePage from "./PageObject/WebTablePage"

// })

//function check finding key word in TS_wordWithTable
Cypress.Commands.add('checkSearchKey', (value) =>{
  const check = new WebTablePage()
  check.typeSearchKey(value)
  //selects the total number of rows column
  check.selectTotalRowColumn()                       
    //iterating through the array of elements                      
  check.getFirstNameResultColumn().each(($e1, index, $list) => {   
      //storing the content in the text variable 
    const text = $e1.text()    
      //If the content is inout we fill in, iteration stops                              
    if (text.includes(value)) {  
        //gets the CSS of the first column                            
      check.getFirstNameResultColumn()   
        //grabs the content in the index value                          
            .eq(index)    
          //promises should be resolved manually since text() is jQuery method                                       
            .then(function (Field) {                             
              const Fieldtext = Field.text();    
            //comparing strings using the jQuery method expect()                
              expect(Fieldtext).to.equal(value);                 
            });
    }
  })
})


Cypress.Commands.add('randomDateTime', (start, end) => {

  //random Date between startDate and endDate
  var date = new Date(new Date(start).getTime() +
                                Math.random() * 
                                (new Date(end).getTime() - new Date(start).getTime()))
                                .toISOString(); 
  return date;
})

Cypress.Commands.add('randomPhone', (phoneLength) => {
  var result           = '';
  var characters       = '0123456789';
  var charactersLength = characters.length;
      for ( var i = 0; i < phoneLength; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
      }
 return result;
})


Cypress.Commands.add('randomString', (stringLength) => {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
      for ( var i = 0; i < stringLength; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
      }
 return result;
})

// Cypress.Commands.add('prepareTestData', (oldFileName, oldFileName) => {
//   var data = fs.readFileSync(oldFileName);

  
//   fs.writeFileSync(oldFileName, data);

// })







