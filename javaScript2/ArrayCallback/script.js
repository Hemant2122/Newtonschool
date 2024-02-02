// ---------------- Array Callback Functions ---------------

// 1 ForEach ->

// const arr = [5, 8, 99, 100, 240, 6, 93, 64];
// console.log(arr);

// function hemantWants(item){
//     console.log(item);
// }

// arr.forEach(hemantWants);

// function satbeerWants(item){
//     alert(item + " satbeer wants");
// }

// arr = ["hello", "world", "nice", "things"];


// function utkarshWants(item, i){
//     console.log(item, i, " utkash want function");
// }

// arr.forEach(utkarshWants);

// function forEach(fn){
//     fn(item, index, arr);
// }


// 2 map :- --->
// const arr = [1, 2, 3, 4];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element * 3);
// }

// function hemantTrippleFunction(item){
//     return item * 3;
// }

// const mappedArray = arr.map(hemantTrippleFunction);
// console.log(mappedArray, "mapped array1");
// console.log(arr, " Original array");


// ---------------- Why this is used -------------------

// let arr = [1, 2, 3, 4, 5];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element * 2, "slavery");
// }

// arr.forEach( (item) => {
//     console.log(2 * item, "forEach");
// });

// function map(fn){
//     const arr = [];
//     const result = fn(item, index, arr);
//     arr.push(result);
//     return result;
// }

// const arr = [];
// let add = arr.push("item", "index", "arr");
// console.log(arr);

// -------------------- Filter --------------------------------

// let arr = [19, 21, 29, 44, 1, 6, 3, 88];
// arr = [1, 2, 3];

// const filterArray = arr.filter( (item) => {
//     // console.log(item, i, arr);

//     if(item % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// });

// console.log(filterArray, "filtered array");
// console.log(arr, "real array");


// -------------------------- Find ----------------------------------------


// let arr = [1, 2, 3, 4, 5, 6];
// const item = arr.find( (item, index, array) => {
//     return item === 99;
// });

// console.log(item, "item");


// --------------------------- Find Index -------------------------

// let arr = [1, 2, 3, 4, 5, 6];
// const index = arr.findIndex( (item, index, array) => {
//     return item === 6;
// });

// console.log(index, "returned index");


// ---------------------------- Find Last ----------------------------

// const arr = [1, 20, 30, 48, 55, 88, 6, 8, 9, 55, 99];

// const index = arr.findLastIndex( (item, index, arr) => {
//     return item === 55;
// });

// console.log(index, "find last index");


// ------------------ REDUCTE TODO: Latter in pollyfills ---------------------

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// way 1 ->

// let count = 0;
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     count += element;
// }

// console.log(count, "for loop answer");


//  way 2 -> 

const answer = array.reduce( (previosValue, currentValue, index, array) => {
    return previosValue + currentValue;
});

console.log(answer, "reduce answer");
