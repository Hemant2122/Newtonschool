
// --------------- SetTimeout VS Promise ----------------

// PROMISE CREATION :-----

/*

const pokemoneServerPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve({
            name : "pikachu",
            ability : "lightning thunder", 
        });
    }, 5000);
});

pokemoneServerPromise.then((data) => {
    console.log(data, "pokemon data");
});

setTimeout(() => {
    console.log("after 5 second");
}, 5000);
console.log("end the Api");

*/

// ---------------------- Promise are single Value ------------------

// 01 : Promise Creation :-----

/*

const promise = new Promise((resolve, reject) => {
    resolve("lio");
    resolve("pio");
    resolve("jio");
});
promise
.then((data) => {
    console.log(data, " Promise are single Value leve 1 ");
})
.then((data) => {
    console.log(data, " Promise are single Value leve 2 ");
});

*/


// ----------------- Promise are Eager ----------------

// PROMISE CREATION : ------

/*

console.log("Start of the doom");

const fetchPromise = new Promise((resolve) => {
    console.log("Inside the promise");

    // Mocking the API CALL (result delay of 5 second)
    setTimeout(() => {
        resolve("resolved DATA");
    }, 5000);
});

console.log("Outside subscribing");

// PROMISE CONSUMPTION : ---------

fetchPromise.then((data) => {
    console.log("hendling result of : " + data);
});

console.log("after resolution of Promise");

*/


// ---------------- SetTimeout Vs Promise -------------------

const promise = new Promise((res) => {
    res(1);
});

setTimeout(() => {
    console.log("hello");
}, 0);

promise.then((data) => {
    console.log(data);
});

// Answer : --  1 hello