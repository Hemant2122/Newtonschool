const containerElement = document.getElementById("container");
console.log(containerElement, "containerElement - 1"); // null


window.addEventListener("DOMContentLoaded", () => {
    const containerElement = document.getElementById("container");

    console.log(containerElement, "containerElement - 2");
});