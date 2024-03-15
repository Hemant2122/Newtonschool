// const containerElement = document.getElementById("container");
// console.dir(containerElement);

// // ------------- EDIT ----------------

// // textContent ->

// containerElement.textContent = `somthing differnd 
// asdasdaasdadadfadf, adfgsgsfg, adgfgg         <strong>India</strong> asd
// hello
// `;

// // innerHTML ->

// containerElement.innerHTML = `somthing differnd 
// asdasdaasdadadfadf, adfgsgsfg, adgfgg         <strong>India</strong> asd
// hello
// `;


// // innerText ->

// containerElement.innerText = `somthing differnd 
// asdasdaasdadadfadf, adfgsgsfg, adgfgg         <strong>India</strong> asd
// hello
// `;


// Question ---------


// const ulElement = document.getElementById("name");
// const newIteamList = document.createElement("li");
// newIteamList.textContent = "hemant";
// ulElement.append(newIteamList);


// ulElement.innerHTML += `<li>hemant</li>`;

const utkarshMarksElement = document.getElementById("utkarshMarksHeading");

console.dir(utkarshMarksElement);

const marks = utkarshMarksElement.dataset.utkarshMarks;
const abaraKatabara = utkarshMarksElement.dataset.abaraKatabara;

console.log(marks, abaraKatabara);