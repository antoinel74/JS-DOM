/*
EX 1 : Display the doc in the console 
*/

console.log(document.title);

/* EX2 : Modifying the Title */

document.title = "Modifying the DOM";
console.log(document.title);

/* EX3 : Generating BG color */
const randomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const switchBg = () => {
  let newColor = randomColor();
  document.body.style.backgroundColor = newColor;
};
switchBg("hotpink");

/* EX 4 displaying all element of the body */
const bodyElements = [...document.body.children]; // Making the whole body an array so i can use the for ... of loop .
for (let element of bodyElements) {
  console.log(element);
}
