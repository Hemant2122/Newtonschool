
// --------------- POLLYFILLS ---------------

// 01 : myMap

/*

function myMap(callBackFun){

    let ansArray = [];

    const array = this;

    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        const answer = callBackFun(item, index, array);

        ansArray.push(answer);
    }
    return ansArray;
}

Array.prototype.myMap = myMap;

const array = [1, 2, 3];

const myMapAnswer = array.myMap((item, index, array) => {
    return item * 2;
});

console.log("my map answer", myMapAnswer, array);


let arr = [1, 2, 3, 4, 5];

const doubleArray = arr.map((item, index, array) => item * 2);

// const doubleArray = arr.map((item) => item * 2);
// console.log(doubleArray, arr);

*/


// 02 :- My filter :-----

/*

let filterArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayFilter = filterArr.filter((item) => item > 4);

console.log(arrayFilter, filterArr, "Normal filter function");



function myFilter(callbackFun){
    let answerArray = [];

    const array = this;

    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        const answer = callbackFun(item, index, array);

        if(answer){
            answerArray.push(item);
        }
    }
    return answerArray;
}

Array.prototype.myFilter = myFilter;

const myFilteredArr = arrayFilter.myFilter((item) => {
    return item > 4;
});

console.log(filterArr, myFilteredArr, "My Filter ");

*/

// 03 :-  Push (you can mek for POP, shift and Unshift) :-----


/*

function myPush(value){

    const array = this;

    const n = array.length;

    array.splice(n, 0, value);
    
    return array.length;
}

Array.prototype.myPush = myPush;

const arr = [1, 2, 3, 4, 5];

const updatedLength = arr.myPush(16);
arr.myPush(70);

console.log(updatedLength);
console.log(arr, "updated arrays")

*/


// 04 :-  Reduce :---

/*
// EXAMPLE 1 :->

let arr = [1, 2, 3, 4, 5];

let count = arr.reduce((prev, currentValu) => {
    return prev + currentValu;
}, 100);


function myReduce(callbackFunction, initialValue = 0){
    const array = this;

    let prevValue = initialValue;

    for (let i = 0; i < array.length; i++) {

        const currentValue = array[i];

        let returnVal = callbackFunction(prevValue, currentValue);

        prevValue = returnVal; 
    }
    return prevValue;
}

Array.prototype.myReduce = myReduce;

let count2 = arr.myReduce((prev, currentValu) => {
    return prev + currentValu;
}, 100);

console.log(count, "count");

console.log(count2, "reduce value")

*/

// EXAMPLE 2 :->


const students = [
    {name : "utkarsh", marks : 400}, 
    {name : "arun", marks : 480}, 
    {name : "ankit", marks : 200},
];

const totalMarks = students.reduce((prev, current) => {
    return prev + current.marks;
});

console.log(totalMarks, "total marks");

// FINAL MY REDUCE FUNCTION : PLEASE SEE THIS ..............

function myReduce(callbackFunction, initialValue){
    const array = this;

    let prevValue;
    let i = 0;

    if(initialValue !== undefined){
        prevValue = initialValue;
    }else {
        prevValue = array[0];
        i++;
    }

    for(i; i<array.length; i++){
        const currentValue = array[i];
        let returnVal = callbackFunction(prevValue, currentValue);

        prevValue = returnVal;
    }
    return prevValue;
}

Array.prototype.myReduce = myReduce;

const totalMarks2 = students.myReduce((prev, current) => {
    return prev + current.marks;
}, 0);

console.log(totalMarks2, "total marks 2 ");

const total11 = [1, 2, 3].myReduce((prev, current) => {
    return prev + current;
});

const total22 = [1, 2, 3].myReduce((prev, current) => {
    return prev + current;
}, 0);


console.log("total 2222", total22);
console.log("total 1111", total11);


// https://legacy.reactjs.org/docs/getting-started.html   :--------- URL


// ----------------- Debouncing ------------------

// 01 :--  Onoptimized Solution :----------



const inputBoxElement = document.getElementById("inputBox");

/* 

function fetchSuggestions(event){
    const value = event.target.value;

    fetch("google.com", {
        method : "POST",
        body : JSON.stringify(value),
    });

    console.log(value);
}

// inputBoxElement.addEventListener("input", fetchSuggestions);

// 02:-- Optimized solution:----

function debounce(callbackFunction, delay){
    let timerNumber;
    function outputFunction(event){
        // clear the new time(Abc)
        clearTimeout(timerNumber);

        // set the new time(abcd)
        timerNumber = setTimeout( () => {
            callbackFunction(event);
        }, delay);
    }
    return outputFunction;
}

const betterFetchSuggestion = debounce(fetchSuggestions, 2000);

inputBoxElement.addEventListener("input", betterFetchSuggestion);

*/


// ----------------------- THROTTLING -------------------

/*

function fireBullet(event){
    const value = event.target.value;
    fetch("google.com", {
        method : "POST",
        body : JSON.stringify(value),
    });
    
    console.log("FIRE");
}

// inputBoxElement.addEventListener("input", fireBullet);

function throtting(callBackFun, delay){
    let flag = true;

    function outputFunction(eventObject){
        
        if(flag){
            callBackFun(eventObject);
            flag = false;

            setTimeout( () => {
                flag = true;
            }, delay);
        }
    }

    return outputFunction;
}


const throttledFireBullet = throtting(fireBullet, 1000);

inputBoxElement.addEventListener("input", throttledFireBullet);

*/