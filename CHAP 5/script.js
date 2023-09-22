const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

// Duplication + log function
const logList = document.querySelector("ul");
const clickOnSquare = (e) => {
  console.log(getElapsedTime());
  const colorClass = e.target.classList[1];
  const newSquare = document.createElement("div");
  newSquare.classList.add("displayedsquare", colorClass);
  document.querySelector(".displayedsquare-wrapper").appendChild(newSquare);
  const newLog = document.createElement("li");
  const log = document.createTextNode(
    `[${getElapsedTime()}] Created a new ${colorClass} square`
  );
  // Putting log.txt into newLog <li> //
  newLog.appendChild(log);
  // Putting newLog <li> into logList <ul> //
  logList.appendChild(newLog);
};

// Add event to duplicate on click
const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}

// Changing body bg when hitting spacebar
let pageBody = document.querySelector("body");
let rdmColor;
let switchBg = () => {
  rdmColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  pageBody.style.backgroundColor = rdmColor;
};

// event.which:32  === space bar key ID //
window.addEventListener("keydown", function (event) {
  if (event.which === 32) {
    switchBg();
    const newSpaceLog = document.createElement("li");
    const spaceLog = document.createTextNode(
      `[${getElapsedTime()}] Switching bg color to ${rdmColor}`
    );
    newSpaceLog.appendChild(spaceLog);
    logList.appendChild(newSpaceLog);
  }
});
