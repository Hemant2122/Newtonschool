
// ------------------ BUBBLING PHASE --------------------

const grandParentElement = document.getElementById("grandParent");
const parentElement = document.getElementById("parent");
const childElement = document.getElementById("child");

// childElement.addEventListener("click", () => {
//     console.log("child Clicked !!!");
// });

// parentElement.addEventListener("click", () => {
//     console.log("Parent Clicked !!!!!!......");
// });

// grandParentElement.addEventListener("click", () => {
//     console.log("grandParent Clicked !!!!!!......");
// });


// ------------------------ CAPTURING PHASE --------------------

// const grandParentElement = document.getElementById("grandParent");
// const parentElement = document.getElementById("parent");
// const childElement = document.getElementById("child");

// childElement.addEventListener("click", (eventObj) => {
//     console.log("child hello !!!...");
// }, true);

// grandParentElement.addEventListener("click", (eventObj) => {
//     console.log(eventObj.target);
//     console.log("grandParent hello !!!.......");
// }, true);

// parentElement.addEventListener("click", (eventObj) => {
//     console.log("parent hello !!!......");
// }, true);

// Question:----

// childElement.addEventListener("click", () => {
//     console.log("child hello !!!...");
// }, false);

// grandParentElement.addEventListener("click", () => {
//     console.log("grandParent hello !!!.......");
// }, true);

// parentElement.addEventListener("click", () => {
//     console.log("parent hello !!!......");
// }, false);


//  Answer : ---------

// grandParent hello !!!....... ,  child hello !!!... , parent hello !!!......


//  ----------------- Event StopPropogation -----------------------

// 01 => ......... Capturing Phase :--------

// childElement.addEventListener("click", (eventObj) => {
//     console.log("child Clicked !!!");

// }, true);

// parentElement.addEventListener("click", (eventObj) => {
//     console.log("Parent Clicked !!!!!!......");
//     eventObj.stopPropagation();

// }, true);

// grandParentElement.addEventListener("click", (eventObj) => {
//     console.log("grandParent Clicked !!!!!!......");
//     // eventObj.stopPropagation();

// }, true);


//  02 => ........ Bubbling Phase :---

// childElement.addEventListener("click", (eventObj) => {
//     console.log("child Clicked !!!");
//     eventObj.stopPropagation();

// });

// parentElement.addEventListener("click", (eventObj) => {
//     console.log("Parent Clicked !!!!!!......");
//     // eventObj.stopPropagation();

// });

// grandParentElement.addEventListener("click", (eventObj) => {
//     console.log("grandParent Clicked !!!!!!......");
//     // eventObj.stopPropagation();

// });


// ------------------ REMOVE EVENT LISTENER ---------------------

const buttonElement = document.getElementById("button");

const callBack = () => {
    console.log("click me");
}

buttonElement.addEventListener("click", callBack);

setTimeout( () => {
    buttonElement.removeEventListener("click", callBack);
}, 5000);

setTimeout( () => {
    buttonElement.addEventListener("click", callBack);
}, 10000);