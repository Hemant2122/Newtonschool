// 01 -> Object assing 

// const target = {a: 1, b: 2};
// const source = {c: 4, d: 5};

// Object.assign(target);
// console.log(target);


// 02 -> Object.Create: - 

// const person ={
//     isHuman : false,
//     printIntroduction : function () {
//         console.log(`My name is ${this.name} Am I human ? ${this.isHuman}`);
//     },
// };

// const me = Object.create(person);
// console.log(me);


// 03 -> Object.defineProperty : ---

// 04 -> Object.entries : ----

// const obj = {
//     key1 : "someString",
//     key2 : 42
// };

// const entriesOfObj = Object.entries(obj);
// console.log(entriesOfObj);


// 05 -> hasOwnProperty :-- very very importnat property :---

const object1 = Object.create({key2 : "value"});
object1.Property1 = 42;
console.log(object1);
console.log(object1.hasOwnProperty("key2"));
// console.log(object1.hasOwnProperty(Property1));


// 06 -> Object.Key () : ---

console.log(Object.key(object1));

// 06 -> Object.value() : ---

console.log(Object.value(object1));