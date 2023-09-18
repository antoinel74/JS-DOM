/* EX 1 */

function addTitle() {
  const titles = document.querySelectorAll(".important");
  titles.forEach(function (element) {
    element.setAttribute("title", "This is an important element");
  });
}

// In this function I first init a const selecting all the .important class element on my HTML
// For each of these elements i'm going to add an attribute title with the value "This is an important elements "

addTitle();
console.log(document);

// Finally I call the funcion and display the modified doc in the console.

/* EX 2 Hide the img that doesn't have the important class*/

const imgs = document.querySelectorAll("img:not(.important)");
imgs.forEach(function (image) {
  image.style.display = "none";
});

/* EX 3 : Display the p + their class in the console */

const pClass = document.querySelectorAll("p"); // Selecting all the p tag in the document
pClass.forEach(function (paragraph) {
  const className = paragraph.className; // Extracting classname
  const textContent = paragraph.textContent; // Extracting content
  console.log(`Class name : ${className}, Text content : ${textContent}`); // Displaying both value in the console
});

/* EX 4 : */
