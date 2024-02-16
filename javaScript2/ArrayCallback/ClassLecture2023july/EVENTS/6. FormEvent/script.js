const formElement = document.getElementById("form");
// console.log(formElement);

// formElement.addEventListener("submit", (event) => {
//     event.preventDefault();
// });

// 1 -> copy and past

// formElement.addEventListener("paste", (event) => {
//     console.log("hey i am pasted !!!");
//     event.preventDefault();
// });

// formElement.addEventListener("paste", (event) => {
//     console.log("hey i am pasted !!!");
//     event.preventDefault();
// });

const nameElement = document.getElementById("name");
// nameElement.addEventListener("focus", (event) => {
//     console.log("focus");
// });

// nameElement.addEventListener("blur", (event) => {
//     console.log("blur");
    
// });

// 3 -> key event -> keydown , keyup , keypress

nameElement.addEventListener("keypress", (event) => {
    console.log("button clicked");
    console.log(event);
    const key = event.key;
    console.log(key);
});