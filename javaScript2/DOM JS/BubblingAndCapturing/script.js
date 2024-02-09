const grandParentElement = document.getElementById("grandParent");
const parentElement = document.getElementById("parent");
const childElement = document.getElementById("child");

childElement.addEventListener("click", () => {
    console.log("child Clicked !!!");
});

parentElement.addEventListener("click", () => {
    console.log("Parent Clicked !!!!!!......");
});

grandParentElement.addEventListener("click", () => {
    console.log("grandParent Clicked !!!!!!......");
});