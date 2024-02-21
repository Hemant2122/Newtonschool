// Question : How to Create an object 

//  way 1 :---

// const obj = {};

// // way 2 :---

// class Person{
//     name ;
//     age;

//     // CONSTRUCTOR FUNCTION
//     constructor(inputName, inputAge){
//         this.name = inputName;
//         this.age = inputAge;
//     }

//     // methods  -> function inside the class

//     canPersonWalk(){
//         console.log("YES I CAN WALK");
//     }
// }

// const hemantPersonObject = new Person("hemant", 24);
// const ankusPersonObject = new Person("ankus", 20);

// console.log(hemantPersonObject);
// console.log(ankusPersonObject);

// console.log(hemantPersonObject.canPersonWalk === ankusPersonObject.canPersonWalk); // true


// ---------------------- Inheritance --------------------------

// Parent class 

class Student{
    name;
    standard;
    
    constructor(name, standard){
        this.name = name;
        this.standard = standard;
    }
}

// child class 

class SportCaptain extends Student{
    favTool;
}


// ----------BEFORE KEYWORD (BEFORE ES6) CONSTRUCTOR FUNCTION -----------

function PersonFunc(inputName, inputAge){
    this.name = inputName;
    this.age = inputAge;

    // method 

    this.canPersonWalk = function(){
        console.log("YES I CAN  WALK CONSTRUCTOR Func");
    }
}

const amithObject = new  PersonFunc("amith", 19);
const priyankaObject = new  PersonFunc("Priyanka", 19);
amithObject.canPersonWalk();
console.log(amithObject);
console.log(priyankaObject);

console.log(amithObject.canPersonWalk === priyankaObject.canPersonWalk);