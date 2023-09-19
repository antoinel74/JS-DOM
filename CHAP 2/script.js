/* EX 1 */

const addTitle = () => {
  const titles = document.querySelectorAll(".important");
  titles.forEach(function (element) {
    element.setAttribute("title", "This is an important element");
  });
};

addTitle();
console.log(document);

/* EX 2 Hide the img that doesn't have the important class*/

const imgs = document.querySelectorAll("img:not(.important)");
imgs.forEach(function (image) {
  image.style.display = "none";
});

/* EX 3 : Display the p + their class in the console */

const pClass = document.querySelectorAll("p"); 
pClass.forEach(function (paragraph) {
  const className = paragraph.className; 
  const textContent = paragraph.textContent; 
  console.log(`Class : ${className}, Text : ${textContent}`); 
});

/* EX 4 : */
function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const colorTxt = document.querySelectorAll("p:not([class])"); // Selecting all P without defined class
colorTxt.forEach(function (text) {
  let newColor = randomColor();
  text.style.color = newColor;
}); 
