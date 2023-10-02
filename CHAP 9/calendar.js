let presentTime = new Date();
let displayDay = document.getElementById("calendar_day");
let displayDate = document.getElementById("calendar_date");
let displayYear = document.getElementById("calendar_year");
let displayMonth = document.getElementById("calendar_month");

let updatedYear = presentTime.getFullYear();
let month = presentTime.toLocaleString("default", { month: "short" });
let upMonth = month.replace(".", "");
let day = presentTime.getDate().toString().padStart(2, "0");

displayYear.textContent = updatedYear;

displayDay.textContent = presentTime.toLocaleString("en-US", {
  weekday: "short",
});
displayDate.textContent = day;
displayMonth.textContent = upMonth;

function clock() {
  let now = new Date();
  let displayClock = document.getElementById("display-clock");

  let h = document.getElementById("hours");
  let ho = now.getHours();

  let m = document.getElementById("minutes");
  let min = now.getMinutes();

  let s = document.getElementById("seconds");
  let sec = now.getSeconds();

  ho = ho < 10 ? "0" + ho : ho;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  h.textContent = ho + ":";
  m.textContent = min + ":";
  s.textContent = sec;
}

clock();
setInterval(clock, 1000);
