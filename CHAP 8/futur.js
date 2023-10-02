let present = new Date();
let today8000 = new Date(Date.now() + 80000 * (60 * 60 * 1000)); // Add 80 000 hours to the current date
let inputHours = document.getElementById("input-hours");
let displayDate = document.getElementById("display-date");

console.log("Today's time : " + present);
console.log("Today's time + 80 000 days : " + today8000);

inputHours.addEventListener("keyup", displayResults);

function displayResults() {
  let addedHours = parseInt(inputHours.value);
  let updateDate = new Date(Date.now() + addedHours * (60 * 60 * 1000));
  if (addedHours >= 999999999) {
    displayDate.textContent = "Sorry, you are too far in the future";
  } else {
    displayDate.textContent = updateDate;
  }
}
