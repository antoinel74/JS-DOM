function stopWatch() {
  let seconds = 0;
  let minutes = 0;
  let displayStopwatch = document.getElementById("stopwatch");

  let updateStopwatch = () => {
    displayStopwatch.textContent = "It been " + minutes + " minute";
    if (minutes > 1) {
      displayStopwatch.textContent += "s";
    }
    displayStopwatch.textContent += " and " + seconds + " second";
    if (seconds > 1) {
      displayStopwatch.textContent += "s";
    }
  };

  let incrementTime = () => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    updateStopwatch();
  };
  updateStopwatch();
  let interval = setInterval(incrementTime, 1000);
}
