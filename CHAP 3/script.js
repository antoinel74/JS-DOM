let students = [
  "Alexandre VDW",
  "Alexandre Vens",
  "Bastien Venturi",
  "Carole Gérard",
  "Elisabeth Leyders",
  "Elodie Ali",
  "Justin Michel",
  "Justine Leleu",
  "Kimi Lefort",
  "Layla",
  "Liwdine Careme",
  "Lucas Beuloie",
  "Mathias Barbier",
  "Okly",
  "Pierre Marien",
  "Robin Piot",
  "Rosalie Bougard",
  "Stephane Comblez",
  "Tim Desmet",
  "Thomas Gomrée",
  "Valentin Lefort",
  "Virgine Dourson",
];

// Generating random HEX color //
function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
let newColor = randomColor();

// Convert HEX Color into RGB to find brightness //
// + put a brightness condition (references values find on internet) to display white if bg is dark and black if bg is light
function getTextColor(backgroundColor) {
  const rgb = parseInt(backgroundColor.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = rgb & 0xff;

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128 ? "white" : "black";
}

// Shuffle The Array
const rdSort = () => Math.random() - 0.5;

// Create a new section in the doc
const studentSection = document.createElement("section");
students.sort(rdSort);

// Writing in the DOM
students.forEach(function (studentName) {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = studentName;
  const stuColor = randomColor();
  newParagraph.style.backgroundColor = stuColor;
  const textColor = getTextColor(stuColor);
  newParagraph.style.color = textColor;
  studentSection.appendChild(newParagraph);
});

// Append in document in the right order (before the footer)
document.querySelector("article").appendChild(studentSection);
