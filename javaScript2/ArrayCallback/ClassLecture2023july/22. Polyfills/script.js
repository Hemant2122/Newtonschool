
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

