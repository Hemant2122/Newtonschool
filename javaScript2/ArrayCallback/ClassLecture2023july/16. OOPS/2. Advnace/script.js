// class Student {
//     name;
//     standard;

//     constructor(name, standard){
//         this.name = name;
//         this.standard = standard;
//     }

//     markAttendance(){
//         console.log(`hey there ${this.name} is present : Normal classroom attance`);
//     }

//     grades(){
//         console.log("grades nice");
//     }
// }

// const ankit = new Student("ankit", 9);

// class SportCaptain extends Student{
//     favTool;

//     constructor(name, stand, favTool){
//         super(name, stand);
//         this.favTool = favTool;
//     }

//     markAttendance(){
//         console.log(`sports captain ${this.name} is present in the ground`);
//     }

//     routine(){
//         console.log("paly all day and do not study");
        
//         super.grades();
//     }
// }

// const virat = new SportCaptain("virat", 12, "bat");
// console.log(virat);


// ---------BEFORE ES6 WE USE CONSTRUCTOR FUNCTION ---------------

// Student class (Parent)

// function StudentFunc(name, standard){
//     this.name;
//     this.standard;

//     // ----------x-x-x-x-x- We Should not do THIS -x-x-x-x-x-x---------

//     this.markAttendance = function(){
//         console.log(`hey there ${this.name} is parent : Normal classroom attence`);

//     };

//     this.grades = function(){
//         console.log("grades nice");
//     };
// }


// ES5 Student class :---

// Parent class 

function StudentFunc(name, standard){
    this.name = name;
    this.standard = standard;
};

StudentFunc.prototype.markAttendance = function(){
    console.log(`hey there ${this.name} is Present : Normal classroom attance`);
};

StudentFunc.prototype.grades = function(){
    console.log("grades nice");
};

const ankitFunc = new StudentFunc("ankit", 9);
console.log(ankitFunc);

// -------------------x-x-x-x-x-x-x-x-x-x---------------------
// child class:--

function SportCaptainFunc(name, stand, favTool){
    StudentFunc.call(this, name, stand);
    this.favTool = favTool;
}


// ------------------------Now we handle Extends keyword-----------------

function extendsss (){
    const objectWithParentPrototype = Object.create(StudentFunc.prototype);

    SportCaptainFunc.prototype = objectWithParentPrototype;
    SportCaptainFunc.prototype.constructor = SportCaptainFunc;
}

extendsss();


SportCaptainFunc.prototype.markAttendance = function(){
    console.log(`sports captain ${this.name} is present in the ground`);
};

SportCaptainFunc.prototype.routine = function(){
    console.log("play cricket all day and do not study");
}

const viratFunc = new SportCaptainFunc("virat", 12, "bat");
console.log(viratFunc);