function randomDate(start, end) {
  var date = new Date(+start + Math.random() * (end - start));
  return date;
}

Cypress.Commands.add( 'randomDateTime',(Date) => {
  const dateInRange = randomDate(
    new Date("05-09-2015"),
    new Date("23-1-2021")
  );
  const dateInRangeString = dateInRange.toISOString();
  const dateString = dateInRangeString.split("T")[0];
  const timeString = dateInRangeString.split("T")[1];
  const timeStringHourMin = timeString.substring(0, 5);

  console.log(dateString);
  console.log(timeStringHourMin);
})