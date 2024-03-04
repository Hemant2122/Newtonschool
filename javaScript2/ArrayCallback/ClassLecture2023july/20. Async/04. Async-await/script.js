
// -------------- ASYNC AWAIT (Syntatical sugar for promises) -------------
const url = "https://api.kanye.rest";
// fetch(url) //5 sec
// .then((res) => { // after 5 second I am getting the response 

//     return res.json();

// })
// .then((data) => {
//     console.log(data);

//     const {quote} = data;
//     // const quote = data.quote
//     console.log("quote", quote);
//     return quote;
// })
// .then((data) => {
//     const divElement = document.getElementById("kanye");
//     divElement.innerHTML = data;
// })
// .catch((error) => {

// }) 


// --------------- async await ------------------

// async function fetQuotes(url) {
//     try {
//         const response = await fetch(url); // 5 second
//         const data = await response.json(); // 2 sec
//         const {quote} = data; // Object Destructuring

//         return quote;
//     }catch(error) {
//         console.log(error);
//     }
// }

// //  single responsibility -> DOM manupulation 

// function display(quote){
//     const divElement = document.getElementById("kanye");
//     divElement.innerHTML = quote;
// }

// // Multiple responsibility ->

// async function completeProcess(url) {
//     const quote = await fetQuotes(url);
//     console.log("quote",quote)
//     display(quote);
// }

// completeProcess(url);


// ------------------ PROMISE  CREATION ----------------

// 1. NEW PROMISE ;-----

function abc() {
    const abc1 = new Promise((res, rej) => {
        res(190001900011);
    });
    return abc1;
}
console.log(abc());


// 2. async

async function abc(){
    return(190001900011);
}

console.log(abc());


// -------------- How to Consume A Promise ----------------

// 01. .then  .catch 

abc().then((data) => {
    console.log(".then consumotion ", data);
})

// 02. async - await 

async function consumeABC(){
    const data = await abc();
    console.log(data, "async wait consumption");
}

consumeABC();
