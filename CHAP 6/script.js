// 1. Display in real time the input value in the display-firstname span
let inputName = document.getElementById("firstname");
let displayName = document.getElementById("display-firstname");

inputName.addEventListener("keyup", updateName);

function updateName() {
  displayName.textContent = inputName.value;
}

// 2. Display the section if age >= 18
let inputAge = document.getElementById("age");
let displaySection = document.getElementById("a-hard-truth");

inputAge.addEventListener("keyup", checkAge);

function checkAge() {
  let age = parseInt(inputAge.value);
  if (age >= 18) {
    displaySection.style.visibility = "visible";
  } else {
    displaySection.style.visibility = "hidden";
  }
}

// 3. Password verifier
let inputPasswrd = document.getElementById("pwd");
let secondPasswrd = document.getElementById("pwd-confirm");

inputPasswrd.addEventListener("keyup", checkPasswrd);
secondPasswrd.addEventListener("keyup", checkPasswrd);

function checkPasswrd() {
  if (inputPasswrd.value === secondPasswrd.value) {
    secondPasswrd.style.backgroundColor = "#BCE29E";
  } else {
    secondPasswrd.style.backgroundColor = "#FF8787";
  }
}

// 4. Dark mode toggle
let mode = document.getElementById("toggle-darkmode");
let body = document.querySelector("body");

mode.addEventListener("change", switchMode);

function switchMode() {
  if (mode.value === "light") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }
}
