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

// console.log("a");

// const promise = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// .then((r) => {
//     console.log("response", r);

//     return r.json();
// })
// .then((d) => {
//     console.log(d);
// });

// console.log("b");
// console.log("c");


/* 
Why callbacks are not used ?

01 Pyramid of Dom 
02 Order of Executon

*/


// -------------------- HANDLERS ------------------


/*
const url = "https://api.kanye.rest";

fetch(url) // level 0
.then( (responseObject) => {
    // level 1
    return responseObject.json();
})
.then( (data) => {
    // level 2
    console.log(data);
})
.catch( (error) => {
    console.log("I have the ERROR", error);
})

*/


// -------------------- Promise Chaining --------------------

/*

const url = "https://api.kanye.rest";

fetch(url) // level 0
.then((responseObject) => {
    // level 1
    console.log("Level 1 ", responseObject);

    // throw new Error ("level 1 error");

    return responseObject.json();

})
.then((data) => {
    console.log("Level 2", data);

    return 19191191000018;
})
.then((data) => {
    // level 3
    console.log("level 3", data);
    return 800;
})
.catch((error) => {
    // level 4

    console.log("I have the ERROR", error);
});

*/

// ----------------- ERROR HANDLING -------------------

// CASE 1: --> Multiple catch Black At Multiple :------------

/*

const url = "https://api.kanye.rest";

fetch(url) // level 0
.then((responseObject) => {
    // level 1
    throw new Error ("error level 1");
    console.log("Level 1", responseObject);

    return responseObject.json();
})
.catch((error) => {
    // level 2
    console.log("level 2", error); 
})
.then( (data) => {
    // level 3
    console.log("level 3", data);
    return 100;
})
.then( (data) => {
    // level 4
    console.log("level 4", data);
    throw new Error ("level 4 error");

    return 800;
})
.catch((error) => {
    // level 5 
    console.log("I have the ERROR leve 5", error);
});

*/


// CASE 2: --> in THEN handler we have 2 handlers (Data) :------------

/*

const url = "https://api.kanye.rest";

fetch(url) // level 0
.then((response) => {
    // level 1

    console.log("level 1", response);
    // throw new Error("error at level 1");

    return response.json();
}, (error) => {
    console.log("level 1 then ERROR handler", error);
})
.catch((error) => {
    // level 2
    console.log("level 2 ERROR", error);
})
.then((data) => {
    // level 3
    console.log("level 3", data);
    return 1;
})
.then((data) => {
    // level 4
    console.log("level 4", data);
    return 800;
})
.catch((error) => {
    // level 5
    console.log("level 5 ERROR BLOCK", error);
});

*/

// ------------------- Undandled Error -------------------

const urlkanye = "https://api.kanye.rest";

fetch(urlkanye) // level 0
.then((res) => {
    // level 1
    return res.json();
})
.then((data) => {
    // level 2
    console.log(data);
});

window.addEventListener("unhandledrejection", () => {
    console.log("Global Error handling");
});
