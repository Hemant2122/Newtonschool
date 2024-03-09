// function sum(a, b){
//     return a + b;
// }

// console.log(sum(1, 3));

/* 
Question 1 : How can I get This Syntax ?
sum(1)(2); // 3
*/

// answer :-------

/*

function sum(a){
    return function(b){
        return a + b;
    }
}

const answer = sum(2)(3);
console.log(answer);

*/

/*

function sum(a){
    function innerSum(b){
        return a + b;
    }

    return innerSum;
}

const innerSum = sum(2);
const answer = innerSum(4);

console.log(answer, "Answer");

*/

/* 
Question 2: Create sum function which do the following 

sum(1) // 1
sum(2) // 3
sum(30) // 30

*/

/*

let prevValue = 0;

function sum(a){
    prevValue = prevValue + a;
    return prevValue;
}

console.log(sum(1)); // 1

console.log(sum(2)); // 3

console.log(sum(30)); // 33

*/

/* 
Question 3: 

sum(1, 2)(3, 4)(5)(6) // 21
curry question
*/

let prevValue = 0;

function sum(a, b){
    const sum = a + b;

    prevValue += sum;

    function sumB(a){
        prevValue += a;
    }

    return prevValue;
}

console.log(sum(1, 2));
console.log(sum(3, 4));
console.log(sum(5));
console.log(sum(6));
