function typeWriter() {
  const word = "Keller";
  let index = 0;

  let interval = setInterval(function () {
    let char = word[index];

    if (char === undefined) {
      clearInterval(interval);
    } else {
      const displayedLetter = document.getElementById("output");
      displayedLetter.textContent += char;
      index++;
    }
  }, 1000);
}

typeWriter();
