import DateTimePicker from "../../support/PageObject/DateTimePicker"

describe('Work with datetimepicker', () => {

  beforeEach(() => {
    cy.visit('http://www.demo.guru99.com/test/')
    cy.fixture('actualDateRange').then(function (actualDateRange) {
      this.actualDate = actualDateRange
    })

    cy.fixture('tittleDateTimePicker').then(function (tittleDateTimePicker) {
      this.tittle = tittleDateTimePicker
    })
  })  

  it('Verify that user should able to select date', function () {
    //enter Date and time into Birthday field
    const picker = new DateTimePicker()  
    picker.inputDateTimeInField(this.actualDate.date, this.actualDate.time)
    picker.clickSubmitButton()  
    
    //Display entered Birth Date, Birth Time      
    picker.checkDate(this.actualDate.date)   
    picker.checkDate(this.actualDate.time)  
  })

  it.only('Verify the date should be in range', function () {

    //covert input startDate from dd-mm-yyyy to yyyy-mm-dd
    var startAfterformat = this.actualDate.startDate.split("-").reverse().join("-");

    //covert input endDate from dd-mm-yyyy to yyyy-mm-dd
    var endAfterformat = this.actualDate.endDate.split("-").reverse().join("-");

    //random and check random in range
    // random Date between startDate and endDate
    cy.randomDateTime(startAfterformat, endAfterformat)
      .then((date) => {
        const dateInRange = date
        cy.log(dateInRange) // myResult

        //covert yyyy-mm-ddThh:mm:ss:zzz to 2 strings are yyyy-mm-dd and hh:mm
        //dateString have format yyyy-mm-dd
        const dateString = dateInRange.split('T')[0]
        //timeString have format hh:mm:ss:zzz
        const timeString = dateInRange.split('T')[1]
        //convert timeString to hh:mm
        const timeStringHourMin = timeString.substring(0,5)

        //enter Date Time after cut into BirthDayField
        const picker = new DateTimePicker()
        picker.inputDateTimeInField(dateString, timeStringHourMin)
        picker.clickSubmitButton()

        //verify actualDate in range [startDate, endDate]
        var startDate = new Date(startAfterformat).getTime()
        var actualDate = new Date(dateString).getTime()
        var endDate = new Date(endAfterformat).getTime()
        // compare startDate < actualDate <endDate
          expect(actualDate).to.gte(startDate) 
          expect(endDate).to.gte(actualDate)

      })
    
  })
}) 

