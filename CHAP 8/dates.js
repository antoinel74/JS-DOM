function updateTimes() {
  const presentLocal = new Date();

  let presentLocalString = presentLocal.toLocaleString("en-GB", {
    timeZone: "Europe/Paris",
  });
  displayLocal.textContent = "Brussels, Belgium : " + presentLocalString;

  let anchorageUSA = presentLocal.toLocaleString("en-GB", {
    timeZone: "US/Alaska",
  });
  displayAlaska.textContent = "Anchorage, USA : " + anchorageUSA;

  let iceland = presentLocal.toLocaleString("en-GB", {
    timeZone: "Etc/GMT+0",
  });
  displayIceland.textContent = "Reykjavik, Iceland : " + iceland;

  let motherRussia = presentLocal.toLocaleString("en-GB", {
    timeZone: "Europe/Moscow",
  });
  displayRussia.textContent = "Saint-Petersburg, Russia : " + motherRussia;
}

let displayTimeZones = document.getElementById("timezones");
let displayLocal = document.createElement("p");
let displayAlaska = document.createElement("p");
let displayIceland = document.createElement("p");
let displayRussia = document.createElement("p");

displayTimeZones.appendChild(displayLocal);
displayTimeZones.appendChild(displayAlaska);
displayTimeZones.appendChild(displayIceland);
displayTimeZones.appendChild(displayRussia);

updateTimes();
setInterval(updateTimes, 1000);
