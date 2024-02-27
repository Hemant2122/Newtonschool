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

// var obj = {
//     name : "utkarsh",
//     RollNumber : 12,

//     func : function () {
//         console.log(this, "context");
//         console.log(`hello guys my name is ${this.name}`);
//     }
// }


// obj.func();// hello guys my name is utkarsh


// console.log("--------------x-x-x-x-x-x-x---------------");

// const funcCopy = obj.func;
// funcCopy();//


// example 03 :->

// let obj2 = {
//     name : "utkarsh",
//     func : function(){

//         // context -> this -> obj2
//         console.log(`hello.....${this.name}`);
//     },
// };

// let obj1 = {
//     name : "Sanjay",
//     rollNumber : 123,
//     obj : obj2,
// };

// obj2.func();

/*

// Rule 03 ->  Explicit Binding :---

01 call
02 apply 
03 bind 
*/

// const obj = {
//     name : "utkash",
//     rollNumber : 42,

//     func : function(a, b){
//         // context -> this -> obj2 
//         console.log(`Hello....${this.name} and  rollnoo ${this.rollNumber} params${a},${b}`);

//     },

// };

// let obj2 = {
//     name : "aksha",
//     rollNumber : 1,
//     obj : obj,
// };

// obj.func(60, 70);

// obj.func.call(obj2, 100, 200);

// obj.func.apply(obj2, [90, 120]);


// ---------------- Bind ---------------------

// const copyFunc = obj.func;

// copyFunc(30, 40);
// copyFunc.call(obj, 50, 60);


// ------------ PROBLEM OF LOSSING THIS ------------


// function googleouter(fun){
    
//     console.log("inside google function");
//     fun();
//     console.log("end google function");
// }

// const funcCopy = obj.func;
// googleouter(funcCopy);

// // ----------------- SOLUTION --------------------

// const funcCopy2 = obj.func.bind(obj, 1, 2);
// googleouter(funcCopy2);


// // Rule 03 -> new Keyword : ----

// const obj2 = {
//     func : function(){},
// };

// const a = new obj2.func();

// function Car(name, speed, model){
//     this.name = name;
//     this.speed = speed;
//     this.model = model;
// }

// const ferrari = new Car("ferrari", 300, "v8");
// const waganar = new Car("suzuki", 100, "wagan R");
 
// console.log(ferrari);
// console.log(waganar);


// ------------- ULTIMATE THIS QUSTION -------------

// function printThis(params){
//     // context -> this -> ??? 
//     console.log(this, params);

// }

// let obj = {
//     a : 10,
//     b : 80,
//     c : printThis,
//     d : function(params){
//         // context -> this -> obj
//         console.log(this);

//         printThis(100);

//         let copy = this.c;

//         console.log(this.c === printThis);
//     },
// };
// obj.d();

// ----------------- Implicit Binding ----------------

// let obj = {
//     name : "utkarsh",
//     func : () => {
//         console.log(this);
//         console.log(`Name is ${this.name}`);
//     }
// };

// console.log(this);
// obj.func();

// --------------- Exaplicit bindig ----------------

let obj2 = {
    name : "utkarsh",
    func : () => {
        console.log(this);
        console.log(`Name is ${this.name}`);
    },
};

obj2.func.call(obj2);

let obj = {
    name : "akash",
    func : function(){
        const inner = () =>{
            console.log(`hello ${this.name}`);
        };

        console.log(`inner function ${this.name}`);

        inner();
    },
};

obj.func();