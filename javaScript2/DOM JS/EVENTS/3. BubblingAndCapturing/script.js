
// ------------------ BUBBLING PHASE --------------------

// const grandParentElement = document.getElementById("grandParent");
// const parentElement = document.getElementById("parent");
// const childElement = document.getElementById("child");

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

const grandParentElement = document.getElementById("grandParent");
const parentElement = document.getElementById("parent");
const childElement = document.getElementById("child");

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
