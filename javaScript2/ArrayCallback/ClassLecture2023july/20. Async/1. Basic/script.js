// console.log("hello");


// setTimeout( () => {});

// setTimeout( () => {
//     console.log("hello Mr. sanjay Sonkar !!!!")
// },10000);

// console.log("a");
// console.log("b");

// console.log("c");


// Question 12 :--> 

// console.log("a");

// setTimeout(() => {
//     console.log("c");
// }, 3000);

// setTimeout(() => {
//     console.log("d");
// }, 1000);

// setTimeout(() => {
//     console.log("e");
// }, 2000);

// console.log("b");



// ------------------ setInterval ----------------

// console.log("a");

// const idInterval = setInterval(() => {
//     console.log("hello");
// }, 2000);

// console.log("b");


// Question 13 :-->


// for(let i=0; i<5; i++){
//     console.log(i);
// }

// 0 1 2 3 4

// for(var i=0; i<5; i++){
//     console.log(i);
// }

// 0 1 2 3 4


// for(let i=0; i<5; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 4000);
// }

// wait -> 0 1 2 3 4

// for(var i=0; i<5; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 4000);
// }

// 55555


// Question 14 :--> solved to IIFE

for(var j=0; j<5; j++){
    setTimeout(() => {
        console.log(j);
    },);
}