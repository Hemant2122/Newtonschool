//  1 -> Click :-----

//  Example 01 ->

// const headingElement = document.getElementById("heading");
// const button1Element = document.getElementById("btn1");

// function button1Callback (){
//     headingElement.style.color = "red";
//     button1Element.style.backgroundColor = "blue";
//     button1Element.style.color= "white";
// }

// button1Element.addEventListener("click", button1Callback);

//  Example 02 ->

// const divElement = document.getElementById("container");
// console.log(divElement);

// divElement.addEventListener("click", () => {
//     divElement.style.background = "purple";
// });


// // 2 -> Mouseenter :---

// divElement.addEventListener("mouseenter", () => {
//     divElement.style.background = "yellow";
// });

// // 3 -> Mouseout :---

// divElement.addEventListener("mouseout", () => {
//     divElement.style.background = "red";
// });

// 4 -> Mousedown :---

// divElement.addEventListener("mousedown", () => {
//     divElement.style.background = "pink";
// });

// 5 -> double : ----- 

// divElement.addEventListener("dblclick", () => {
//     divElement.style.background = "yellow";
// });

//  6 -> mouseOver :-------------

// divElement.addEventListener("mouseover", () => {
//     divElement.style.background = "red";
// });

// 7 -> mouseout :---------------

// divElement.addEventListener("mouseout", () => {
//     divElement.style.background = "aqua";
// });



// const boxElement = document.getElementsByClassName("box");
// const colorElement = boxElement[0];

// colorElement.addEventListener("click", () => {
//     colorElement.style.background = "yellow";
// });


// -------------------- WHAT EXACTLY ARE EVENTS --------------------

const containerElement = document.getElementById("container");
containerElement.addEventListener("key", () => {
    console.log("mouseenter !!!");
});