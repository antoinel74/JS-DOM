const displayDays = document.getElementById("dayCount");
let birthday = new Date("1996-09-30");
let today = new Date();
var day = 24 * 60 * 60 * 1000;

let dayPassed =
  Math.round(Math.abs(birthday.getTime() - today.getTime())) / day;

displayDays.textContent = Math.round(dayPassed);

// Function to calculate days passed for any given date.
function daysCalculator(newDateString, today) {
  let newDate = new Date(newDateString);
  let results = Math.round(Math.abs(newDate.getTime() - today.getTime()) / day);
  console.log(results + " days have passed since " + newDate);
}

daysCalculator("1982-03-22", today);
daysCalculator("1998-02-18", today);
daysCalculator("1993-11-22", today);
daysCalculator("1996-09-30", today);
