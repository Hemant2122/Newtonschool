// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr.length);

// arr[0] = 1000000;
// console.log(arr);

// // -------- add the last index in new elements --------
// const newLength = arr.push("hemant");
// console.log(arr);
// console.log(arr.length);

// // --------- removes the last element --------

// const lastElement = arr.pop();
// console.log(lastElement);
// console.log(arr);


// --------------- Object --------------------

// const Person = {
//     name : "hemant",
//     class : 122,
//     "hello world" : "hey's",
//     version : 8,
// };

// console.log(Person);
// // console.log(Person.helloworld, "Person name debug");
// console.log(Person.version, "Person is version debug");
// console.log(Person.name, "Person name debug");
// console.log(Person["hello world"], "Person name debug");
// console.log(Person["name"], "Person name debug");

//  ---------- Delete --------------

// console.log("version befor delete", Person.version);
// delete Person.version;
// console.log("version after delete", Person.version);


//  ------------ Function -----------

//   --------------example ---------

// function sum (a, b){
//     const ans = a * b;
//     return ans;
// }
// console.log(sum(2, 2), "console mult");


// let a = function(a, b){
//     return a * b;
// }

// let ans = a(2, 2);
// console.log(ans, "ans is mult debug");

// let sumExpression = function(a, b){
//     return a + b;
// };

// let answerExpression = sumExpression(1, 20);
// console.log(answerExpression, "answerSumExpression debug");

//  --------- Hosting ------------

// ex. 1 -> 


// console.log(namePrint("Hemant"));
// console.log(namePrint("Akash"));

// function namePrint(name){
//     return `hey !!! ${name}`;
// }

// console.log(namePrint("Hemant"));
// console.log(namePrint("Akash"));


//  ex. 2 -> 

// let answerMult = multSum(3, 3);
// console.log(answerMult, "this value is mult value");

// function multSum(a, b){
//     return a * b;
// }

// let answerMult = multSum(2, 3);
// console.log(answerMult, "this value is mult value");


// var a;
// console.log(a);

// a = 12;
// console.log(a);

// function namePrint(Fname){
//     return `hey !!! My Name ${Fname}`;
// }
// console.log(namePrint("Hemant"));

//  Function with varibales -----------------------

// let c = 12;

// function sum(a, b){
//     return a + b + c;
// }

// console.log(sum(1, 2));

// Default vaalue-----------------

// function sum(a, b = 0){
//     // console.log(1, b, "params inside sum function");

//     return a + b;
// }
// console.log(sum(1, 100));


//  function return------------------

// function sum(){
//     console.log("!");
//     return 1;
// }

// console.log(sum());

// ------------- Rest Opertor ------------------

// function child(name, standard, rollnumber, ...otherInformation){
//     console.log(name, standard, rollnumber, "importanant information");

//     console.log(otherInformation);
// }

// child("Hemant", "PG", 22, "Jitendra", "Shanti bai", "H.NO. 92", "Khujji");

// child("Yuvraj", "CA", 7);

// ---------- Pass By Reference ---------

// let num1 = 1;
// let num2 = 2;

// function sum(a, b){
//     a = a + 10;
//     b = b + 10;

//     return a + b;
// }

// console.log(sum(1, 2));  //23
// console.log(sum(num1, num2));  // 23

// console.log(num1, num2);  // 1, 2


// ------------- Non Primitive -----------------------

// let math = {
//     marks : 100,
//     grade : "A+",
// };

// let science = {
//     marks : 90,
//     grade : "A",
// }

// function sum(subParam1, subParam2){

//     subParam1.marks = 60;
//     subParam2.marks = 70;

//     const marks1 = subParam1.marks;
//     const marks2 = subParam2.marks;

//     return marks1 + marks2;
// }

// console.log(sum(math, science));
// console.log(sum(math.marks, science.marks));

//  ------------------- SPREAD OPEREATOR --------------------

// const arr = [1, 2, 3, 4, 5];
// const arrCopy = [...arr];

// console.log(arr); 
// console.log(arrCopy);
// console.log(arrCopy == arr);


//  -------- Loop -----------

// let arr = [1, 2, 3, 4, 5];

// for (const item of arr) {
//     console.log(item, "for of");
// }

// let obj = {
//     name : "ut",
//     age : 50,
//     canDrive : false
// };

// for (const key in obj) {
//     const value = obj[key];
//     console.log(key);
//     console.log(value);
// }


//  ------------------ Deep copy and SHALLOW COPY ------------------

// const person ={
//     name : "Hemant",
//     calss : 12,
//     address : {
//         street : "Khujji",
//         pincode : 491661,
//         houseNumber : "3333-c",
//     },
//     canDrive : false,
// };

// const personCopy = {
//     ...person
// };

// personCopy.name = "lakshay";

// personCopy.address.pincode = 00000;

// console.log(person, "original Person");
// console.log(personCopy);
// console.log(person === personCopy);


//  --------- Hack to have a Deep Copy but should Not be used ------------------

// const person ={
//     name : "Hemant",
//     calss : 12,
//     address : {
//         street : "Khujji",
//         pincode : 491661,
//         houseNumber : "3333-c",
//     },
//     canDrive : false,
// };
    
// const personCopy = {
//     ...person
// };

// // const copyPerson = JSON.parse(JSON.stringify(person));

// var copyPerson = JSON.parse(JSON.stringify(person));

// copyPerson.name = "Yuvraj";
// copyPerson.address.pincode = 123445;

// console.log(person, "original Person");
// console.log(copyPerson, "Copy");
// console.log(person === copyPerson, "Coman person");


// ------------------- Advance Functiond -------------------------

/* ---------- Normal Function bs Arrow Function ------------ */

// function sum(a, b){
//     return a+b;
// };

// const sumFunctionExpression = function(a, b){
//     return a + b;
// };

// const sumFunctionExpressionArrow = (a, b) => {
//     return a + b;
// };

// console.log(sumFunctionExpressionArrow(1, 2), "Arrow Function");

// ---------- Difference 1 Arguments -----------

// function abc(a, b){
//     console.log(a, b, "Normal things");
//     console.log(arguments, "arguments debug");
// };

// abc(1, 2);

// const abcArrow = (a, b) => {

//     const arg = arguments;

//     console.log(a, b, "normal things");
//     console.log(arguments, "Arrow arguments");
// };
// abcArrow(1000, 20000);

//  ------------ let and const ---------

// let a = 100;

// if(true){
//     let a = 99;
//     console.log(a);
// }

// console.log(a);

//  ------------- Advance Function ------------

/* ------------ How to wirte Function production ready copy -------------- */

// function sum(param1, param2){
//     try{
//         let c = param1 + param2;
//         return c;
//     }catch(e){
//         console.log(e);
//     }
// }


//   --------------- try and catch ---------------

// function spaceship(a, b, action){
//     try{
//         let res;
//         if(action === "add"){
//             throw Error("Google server cannot respond addtion");
//             res = a + b;
//         }else if(action === "sub"){
//             res = a - b;
//         }else if(action === "mult"){
//             res = a * b;
//         }
//         return res;
//     }catch(error){
//         console.log("error----------");
//         console.log(error);
//     }
// }

// const result = spaceship(1, 2, "add");
// console.log(spaceship);


//  ---------------------- Dangerous part of Function -----------------------

// const param1 = {
//     marks : 1,
// };

// const param2 = {
//     marks : 200,
// };

// function sum(obj1, obj2){
//     console.log("hello to sum function earlier");
//     console.log(obj1);
//     console.log(obj2);

//     return obj1.marks + obj2.marks;
// }

// console.log(sum(param1, param2));


// -------------- Function are also Objects (Fist class) ---------------

// const param1 = function(){
//     console.log("param1");
// };

// const param2 = function(){
//     console.log("param2");
// };

// function sum(obj1, obj2){
//     console.log("hey there i am function sum");
//     console.log(obj1);
//     console.log(obj2);
// }

// sum(param1, param2);

// 2. we can return function from function 

// function person(){
//     let inner = {
//         name : "Hemant",
//         class : 12,
//     };
//     return inner;
// }

// const resultAnswer = person();
// console.log(resultAnswer);

// function outer() {
//     const outer = function(){
//         console.log("hey i am from inner function");
//     };
//     function inner(){
//         console.log("hey i am from inner function");
//     }
//     return inner;
// }

// console.log(outer());


//   --------------- Try And catch --------------------

// function tryAndCatch(){
//     try{
//         const a = 2;
//         const b = 3;

//         const c = a + b;

//         throw Error("Google input in invailed Number ")

//         return c;
//     }catch(error){
//         console.log("---------------");
//         alert(error.message);
//         console.log(error);
//     }
// }

// console.log(tryAndCatch());


// var a = 12;

// function abc(){
//     console.log(a);

//     function cba(){
//         var a = 100;
//         console.log(a);
//     }

//     cba();
// }

// abc();

// console.log(a);


// var a = [];
// a.unshift(1);
// a.unshift(22);
// a.shift();
// a.unshift(3,[4,5]);
// a.shift();
// a.shift();
// a.shift();


// ----------------- Array Callback Functions ------------------

// 1 -> ForEach :- 

const arr = [5, 8, 99, 100, 240, 6, 93, 64];

console.log(arr);

function hemantWants(item){
    console.log(item);
}

arr.forEach(hemantWants);