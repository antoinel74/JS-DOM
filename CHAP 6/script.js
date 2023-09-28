let inputName = document.getElementById("firstname");
let displayName = document.getElementById("display-firstname");

inputName.addEventListener("keyup", updateName);

function updateName(e) {
  displayName.textContent = e.target.value;
}
