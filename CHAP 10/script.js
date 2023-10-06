const loadBtn = document.getElementById("load-btn");
const ulContainer = document.getElementById("ul-container");

loadBtn.addEventListener("click", function () {
  fetch("ex.json")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      console.log("Error detected!", error);
    });
});
