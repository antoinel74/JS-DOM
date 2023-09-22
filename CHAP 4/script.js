// Put the last element on the <ol> in the first pos //
const list = document.querySelector("ol");
const last = list.children[4];

list.prepend(last);

// Put the second title in the third section and vice versa//
const main = document.querySelector("main");
let thirdTitle = main.children[1].children[0];
let secondTitle = main.children[2].children[0].children[0];
const secondSection = main.children[1];
const thirdSection = main.children[2];

secondSection.prepend(secondTitle);
thirdSection.prepend(thirdTitle);

//delete the last section
thirdSection.remove();
