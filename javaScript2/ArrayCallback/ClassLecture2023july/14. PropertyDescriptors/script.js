let obj = {
    name : "hemant", 
    class : 9,
};

console.log(obj);

// EDIT 
// obj.name = "akash";

// // delete 
// delete obj.name;

// Property Flags :--

// const descriptorOfName = Object.getOwnPropertyDescriptor(obj, "name");
// console.log(descriptorOfName, "Origanl property descriptor Name");

// const descriptorOfClass = Object.getOwnPropertyDescriptor(obj, "class");
// console.log(descriptorOfClass, "Origanl property descriptor Class");


// ------------------------- Change the Property Flag --------------------------

// 01 -> Writable :---

// Object.defineProperty(obj, "name", {
//     writable : false,
// });

// obj.name = "akash"; // this things will not have any effect 

// console.log(obj, "after the name edit");
// console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// 02 -> configurable :---

// Object.defineProperty(obj, "name", {
//     configurable : false,
// });

// delete obj.name;

// console.log(obj, "after the delete");
// console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// 03 -> Enumerable :---

// Object.defineProperty(obj, "name", {
//     enumerable : false,
// });

// for (const key in obj) {
//     console.log(key, "enum");
// }


// Note:-  YOU CAN LEARN ABOUT

// 01 -> Object.freeze()
// 02 -> Object.isFrozen()
// 03 -> Object.isSealed()