const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const clickOnSquare = (e) => {
  console.log(getElapsedTime());
  const colorClass = e.target.classList[1];
  const newSquare = document.createElement("div");
  newSquare.classList.add("displayedsquare", colorClass);
  document.querySelector(".displayedsquare-wrapper").appendChild(newSquare);
  const newLog = document.createElement("li");
  const logList = document.querySelector("ul");
  const log = document.createTextNode(
    `[${getElapsedTime()}] Created a new ${colorClass} square`
  );
  // Putting log.txt into newLog <li> //
  newLog.appendChild(log);
  // Putting newLog <li> into logList <ul> //
  logList.appendChild(newLog);
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}
