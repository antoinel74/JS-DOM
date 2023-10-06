import { saveCache } from "./localstorage.js";

let inputName = document.getElementById("name");
const loadingBtn = document.getElementById("import-btn");
const displayedResults = document.getElementById("results");
const inputCountry = document.getElementById("select-country");

const fetchName = (inputName, inputCountry) =>
  fetch(
    "https://api.agify.io/?name=" +
      inputName.value +
      "&country_id=" +
      inputCountry.options[inputCountry.selectedIndex].value
  );

console.log(inputCountry.value);

loadingBtn.addEventListener("click", () => {
  fetchName(inputName, inputCountry)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.name);
      console.log(json.age);
      displayedResults.textContent = `${json.name}, median-age : ${json.age} of ${json.count}`;
      saveCache("results", json);
    })
    .catch((error) => {
      console.log("Error detected!", error);
    });
});

// Retrieve the saved data
function getFromLocalStorage(key) {
  const savedData = localStorage.getItem(key);
  if (savedData) {
    return JSON.parse(savedData);
  }
  return null;
}

// Make the saved data spawn when loading the page
window.addEventListener("load", () => {
  const savedData = getFromLocalStorage("results");
  if (savedData) {
    displayedResults.textContent = `${savedData.name}, median-age : ${savedData.age} of ${savedData.count}`;
  }
});
