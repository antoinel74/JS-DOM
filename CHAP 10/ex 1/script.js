const loadBtn = document.getElementById("load-btn");

loadBtn.addEventListener("click", function () {
  fetch("ex.json")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const list = document.createElement("ul");
      document.body.appendChild(list);
      /*       json.forEach((data) => {
        const items = document.createElement("li");
        items.textContent = data;
        list.appendChild(items);
      }); */
      for (let i = 0, length = json.length; i < length; i++) {
        let data = json[i];
        const items = document.createElement("li");
        items.textContent = data;
        list.appendChild(items);
      }
    })
    .catch((error) => {
      console.log("Error detected!", error);
    });
});
