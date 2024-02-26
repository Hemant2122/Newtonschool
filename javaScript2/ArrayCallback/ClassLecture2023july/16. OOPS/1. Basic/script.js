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

// class Student{
//     name;
//     standard;
    
//     constructor(name, standard){
//         this.name = name;
//         this.standard = standard;
//     }
// }

// child class 

// class SportCaptain extends Student{
//     favTool;
// }


// ----------BEFORE KEYWORD (BEFORE ES6) CONSTRUCTOR FUNCTION -----------

// function PersonFunc(inputName, inputAge){
//     this.name = inputName;
//     this.age = inputAge;

//     // method 

//     this.canPersonWalk = function(){
//         console.log("YES I CAN  WALK CONSTRUCTOR Func");
//     }
// }

// const amithObject = new  PersonFunc("amith", 19);
// const priyankaObject = new  PersonFunc("Priyanka", 19);
// amithObject.canPersonWalk();
// console.log(amithObject);
// console.log(priyankaObject);

// console.log(amithObject.canPersonWalk === priyankaObject.canPersonWalk);


// ------------------ Inheritance ---------------------

// class Student {
//     name;
//     standard;

//     constructor(name, standard){
//         this.name = name;
//         this.standard = standard;
//     }

//     markAttendance(){
//         console.log(`hey there ${this.name} is present : Normal classroom attance`)
//     }

//     grades(){
//         console.log("grades nice");
//     }
// }


// //  child class -> derived class

// class SportCaptain extends Student{
//     favTool;

//     constructor(name, stand, favTool){
//         super(name, stand) // i am calling from constructor of parent
//         this.favTool = favTool;
//     }

//     markAttendance(){
//         console.log(`Sport captain ${this.name} is present in the ground`)
//     }

//     routine(){
//         console.log("play cricket all day and to not study");

//         super.grades();
//     }

// }

// const akash = new Student("akash", 10);
// const ankush = new Student("ankush", 12);

// console.log(akash);
// console.log(ankush);

// const virat = new SportCaptain("Virat", 10, "bat Bol");
// console.log(virat);


// --------------- Inheritance BEFORE ES6 (Througt CONSTRUCTOR FUNCTION)---------------

// ------------------- Getters and setters -----------------

// class Star {
//     name45

//     // DEFAULT CONSTRUCTOR 
//     constructor(){}

//     get getName (){
//         return this.name;
//     }

//     set setName (value){
//         this.name = value;
//     }
// }

// const sun = new Star();
// console.log(sun);

// sun.setName = "SUN";
// console.log(sun.setName);


// ------------------- Private Properties --------------------

// class Star{
//     weight;
//     years;

//     constructor(weight, years){
//         this.weight = weight;
//         this.years = years;
//     }
// }

// const sun = new Star(100, 10000);
// console.log(sun);

// sun.weight = 1;
// sun.years = -100;


// way 01 ->

// class Star{
//     _weight;
//     _years;

// }

// way 02 ->

// class star {
//     #weight; //Private properties
//     #years;
//     name; // public

//     constructor(name, weight, years){
//         this.name = name;
//         this.#weight = weight;
//         this.#years = years;

//     }

//     set setWeight(value){
//         this.#weight = value;
//     }

//     set setYears(value){
//         this.#years = value;
//     }

//     get getWeight (){
//         return this.#weight;
//     }

//     get getYears (){
//         return this.#years;
//     }
// }

// const sun = new star("sun", 101010100101010, 9000000);
// console.log(sun);

// sun.setWeight = 12000;

// sun.name = "hemant sun";
// console.log(sun.name);

// console.log(sun.#Weight);
// console.log(sun.#years);

// console.log(sun.getWeight, "weight");
// console.log(sun.getYears, "years");


// ------------INSTANCE VS STATIC PROPERTIES / METHODS ------------

class Circle {
    radius;
    constructor(radius){
        this.radius = radius;
    }

    // normal method
    draw () {
        console.log("DRAW");
    }

    // static Method
    static parse(){
        console.log("statc parse");
    }
}

// Circle.draw();

const circle = new Circle(10);
console.log(circle);

circle.draw();
Circle.parse();