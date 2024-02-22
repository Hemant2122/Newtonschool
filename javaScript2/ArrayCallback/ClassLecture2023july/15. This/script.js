// ----------------- FEAR OF THIS ----------------

// function foo(){
//     console.log("I am foo Function");
// }

// foo();

// const fooCopy = foo;
// fooCopy();

// function bar(){
//     foo;
//     foo();
// }

// bar();

// Rule 01 ->

// function foo(){
//     // context -> this -> null/window
//     console.log(this, "context");
//     console.log("hey there I am foo");
// }

// foo();

// Rule 02 ->

// example 01 :---

// var obj = {
//     name : "utkarsh",
//     RollNumber : 12,

//     func : function () {
//         console.log(this, "context");
//         console.log(`hello guys my name is ${this.name}`);
//     }
// }

// console.log(obj.name);// utkarsh
// console.log(obj.RollNumber);// 12
// obj.func();// hello guys my name is utkarsh

// example 02 :---

var obj = {
    name : "utkarsh",
    RollNumber : 12,

    func : function () {
        console.log(this, "context");
        console.log(`hello guys my name is ${this.name}`);
    }
}


obj.func();// hello guys my name is utkarsh


console.log("--------------x-x-x-x-x-x-x---------------");

const funcCopy = obj.func;
funcCopy();// hello guys my name is