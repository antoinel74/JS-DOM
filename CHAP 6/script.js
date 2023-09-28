// 1. Display in real time the input value in the display-firstname span
let inputName = document.getElementById("firstname");
let displayName = document.getElementById("display-firstname");

inputName.addEventListener("keyup", updateName);

function updateName(e) {
  displayName.textContent = e.target.value;
}

// 2. Display the section if age >= 18
let inputAge = document.getElementById("age");
let displaySection = document.getElementById("a-hard-truth");

inputAge.addEventListener("keyup", checkAge);
console.log(inputAge);

function checkAge() {
  let age = parseInt(inputAge.value);
  if (age >= 18) {
    displaySection.style.visibility = "visible";
  } else {
    displaySection.style.visibility = "hidden";
  }
}
