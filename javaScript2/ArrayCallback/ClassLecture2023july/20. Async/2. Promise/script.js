// ----------------- Promise ---------------

// console.log("going to buger KING");

// const Promise = fetch("google.com"); // REAL DATA WILL ARRIVE AFTER 10 SEC.

// console.log(promise);

// console.log("continue with own thing");


// ---------------- How to Talk to server -----------------

// 01 -->

// const url  = "https://pokeapi.co/api/v2/pokemon/ditto"; // 10 

// console.log("a");

// fetch(url)
// .then((response) => {
//     console.log("response", response);

//     return response.json();
// })
// .then((data) => {
//     console.log("data",data);
// });

// console.log("b");

// 02 -->

console.log("a");

const promise = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then((r) => {
    console.log("response", r);

    return r.json();
})
.then((d) => {
    console.log(d);
});

console.log("b");
console.log("c");