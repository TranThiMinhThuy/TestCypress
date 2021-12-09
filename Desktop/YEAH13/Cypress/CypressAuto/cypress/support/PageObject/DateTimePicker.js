class DateTimePicker{

  inputDateTimeInField(date, time){
    cy.get('[type="datetime-local"]')
      .type(date + 'T' + time)
    return this
  }

  clickSubmitButton(){
    return cy.get('[type="submit"]').click();
  }

  checkDate(date){
    //Verify input date exist
    cy.get('[style="font-size:15px;margin-left:50px;"]')
      .should('exist',date)
    return this
  }

  checkTime(time){
    //Verify input time exist
    cy.get('[style="font-size:15px;margin-left:50px;"]')
      .should('exist',time)
    return this
  }
}

export default DateTimePicker;