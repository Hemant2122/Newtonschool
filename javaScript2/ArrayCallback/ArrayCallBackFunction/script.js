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

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// way 1 ->

// let count = 0;
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     count += element;
// }

// console.log(count, "for loop answer");


//  way 2 -> 

// const answer = array.reduce( (previosValue, currentValue, index, array) => {
//     return previosValue + currentValue;
// });

// console.log(answer, "reduce answer");



// -------------------------- concat ---------------------

// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];

// const array3 = array1.concat(array2);

// console.log(array3);


// ------------------------ toString() Method ----------------------


// const obj = {
//     name : "hemant",
//     class : 9,
// }

// const answer = obj.toString();
// console.log(answer);
// console.log(JSON.stringify(obj));

// let arr = [1, 2, 3, 4, 5];

// console.log(arr.toString());

// console.log(JSON.stringify(arr));



// ------------------------ String ---------------------------

// const string1 = "hello world";
// console.log(string1);

// console.log(`hello
// world;
// `);

// console.log("hello \n world", "------> escape char debug");


// ---------- operation on string ---------------------


// const str = "hello";
// console.log(str.charAt(0));
// console.log(str[0]);

// --------------------- Substring -----------------------

// const str = "aeroplanes";
// console.log(str.substring(0, 3));
// console.log(str.substring(0, 4));

// console.log(str.substring(4));


// -------------------------- toUpperCase and toLowerCase ---------------------


// const str = "cricket";
// console.log(str.toUpperCase()); // CRICKET

// console.log(str.toLowerCase()); // cricket

// const country = "india";
// const char1 = country.charAt(0).toUpperCase(); // "I"
// const  restOfTheString = country.substring(1); // ndia

// console.log(char1 + restOfTheString);


// ------------------------------ TRIM (Space deleted to left and right side) -----------------------------


// const name = "             Hemant kumar              ";
// console.log(name);// "             Hemant kumar              "

// console.log(name.trim()); // "Hemant kumar"



// --------------------------- Searching -------------------------------

// const sentence = "hey there hello world";
// console.log(sentence.includes("helllosssss")); // false
// console.log(sentence.includes("hello")); // true


// ------------------------ Comparision ------------------------------


// console.log(1 > 80); // false
// console.log("a" > "z"); // true


// const str1 = "hello";
// const str2 = "hello";

// console.log(str1.localeCompare(str2));
// console.log("Zebra".localeCompare("asd"));
// console.log("Zebra".localeCompare("Zzzzzz"));
