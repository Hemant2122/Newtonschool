
// const containerElement = document.getElementById("contaiber");

// const greenElement = document.getElementById("green");
// const redElement = document.getElementById("red");
// const yellowElement = document.getElementById("yellow");

// greenElement.addEventListener("click", (eventObj) => {
//     const element = eventObj.target;
//     console.log(element);

//     const color = element.id;

//     containerElement.style.background = color;
// });

// redElement.addEventListener("click", (eventObj) => {
//     const element = eventObj.target;
//     const color = element.id;

//     containerElement.style.background = color;

// });

// yellowElement.addEventListener("click", (eventObj) => {
//     const element = eventObj.target;
//     const color = element.id;

//     containerElement.style.background = color;
// });
 

//  IS THIS A GOOD WAY ? NO.


// ----------------------- EVENT DELEGATION --------------------

const palletContainerElement = document.getElementById("palletContainer");
const containerElement = document.getElementById("contaiber");


// solustion 1 :--
// palletContainerElement.addEventListener("click", (event) => {
//     const element = event.target;
//     const color = element.id;

//     containerElement.style.background = color;
// });


// solustion 2 : ---

document.body.addEventListener("click", (event) => {
    const element = event.target;
    const color = element.id;

    containerElement.style.background = color;
});

