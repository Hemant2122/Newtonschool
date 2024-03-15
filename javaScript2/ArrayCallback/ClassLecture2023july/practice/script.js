
//  1: -> getElementById()

// const headingElement = document.getElementById("heading");
// console.log(headingElement);
// console.dir(headingElement);
// headingElement.style.backgroundColor = "aqua";

// 2:-> getElementByTagName

// const heading1Element = document.getElementsByTagName("p");
// heading1Element.style.backgroundColor = "red";

// 3 :->  getElementByClassName

// const heading2Element = document.getElementsByClassName("asd");
// console.log(heading2Element);


// 4 :-> querySelector :-


// const heading4Element = document.querySelector(".check");
// console.log(heading4Element);

// ---------------------------- EDIT -------------------------------

// const headingElement = document.getElementById("heading");
// console.log(headingElement);
// headingElement.style.backgroundColor = "aqua";


// ----------------------------Delete an Element (Removal) ------------------------

// const paragraphElement = document.getElementById("para");
// paragraphElement.remove();


// ----------------Creation of Element and insert an element (create) -----------------------------

// const newHeadingElement = document.createElement("h1");
// console.log(newHeadingElement);
// newHeadingElement.textContent = "H1 new heading H1 !";
// newHeadingElement.style.backgroundColor = "pink";

// const bodyElement = document.body;
// bodyElement.prepend(newHeadingElement);


// ------------ Advance Editing Element -----------------------

// -------------------- Prepend -----------------------------


// 1 -> append :----

// const nameListElement = document.getElementById("names");
// console.dir(nameListElement);

// const studentList = ["Amit", "Saurbh", "Yash", "Hemant"];
// for (let index = 0; index < studentList.length; index++) {
//     const studentName = studentList[index];
    

//     // Create an <li> Element 
//     const lisItemElement = document.createElement("li");

//     lisItemElement.textContent = studentName;

//     nameListElement.append(lisItemElement);
// }


// 1 -> Prepend :----


// const nameListElement = document.getElementById("names");

// const studentList = ["Amit", "Saurbh", "Yash", "Hemant"];

// for (let index = 0; index < studentList.length; index++) {
//     const studentName = studentList[index];

//     const lisItemElement = document.createElement("li");

//     lisItemElement.textContent = studentName;

//     nameListElement.prepend(lisItemElement);
// }


// 3 -> before :---

// const nameListElement = document.getElementById("names");

// const heading1Element = document.createElement("h2");
// heading1Element.textContent = "Here's the list list of student";
// nameListElement.before(heading1Element);


// 4 -> after :----


// const footerElement = document.createElement("h3");
// footerElement.textContent = "End of the list !";

// nameListElement.after(footerElement);

// 5 -> replaceWith :----

// footerElement.replaceWith("hii am replace");


// -------------------------- Fragment ----------------------------

//  this code is inserting  better way :------

// const fakeNodeOfNameListElemnet = new DocumentFragment();

// const nameListElement = document.getElementById("names");

// const studentList = ["Amit", "Saurbh", "Yash", "Hemant"];

// for (let index = 0; index < studentList.length; index++) {
//     const studentName = studentList[index];

//     const lisItemElement = document.createElement("li");
//     lisItemElement.textContent = studentName;

//     fakeNodeOfNameListElemnet.append(lisItemElement);
// }
// nameListElement.append(fakeNodeOfNameListElemnet);


// --------------------------------------------------------------------------------------------

// ----------- Another way to Insert Element insertAdjacentHTML ---------------

// const nameListElement = document.getElementById("names");

// names.insertionHTML('beforebegin', '<li>Hemant</li>');

// var a = 10;
// console.log(a);

// function abc(){
//     console.log(a);
//     var a = 99;
//     console.log(a);
// }

// abc();

// console.log(a);

// if(true){
//     let a = 12;
//     console.log(a);

//     function abc(){
//         let a = 99;
//         console.log(a);
//     }

//     abc();

//     console.log(a);
// }

// if(true){
//     const a = 12;
//     console.log(a);

//     function abc(){
//         const a = 99;
//         console.log(a);
//     }

//     abc();

//     console.log(a);
// }



// let a = 12;
// console.log(a);

// if(true){
//     let a = 99;
//     console.log(a);
// }

// console.log(a);

/*
const utkarshMarksElement = document.getElementById("utkarshMarksHeading");

console.dir(utkarshMarksElement);

const marks = utkarshMarksElement.dataset.utkarshMarks;
const abaraKatabara = utkarshMarksElement.dataset.abaraKatabara;

console.log(marks, abaraKatabara);
*/

