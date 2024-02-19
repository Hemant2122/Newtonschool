// example 3 ->

// let count = 0;
// function counter(){
//     count++;
//     return count;
// }

// console.log(counter());
// console.log(counter());
// console.log(counter());

// example 4 ->

function someFun(){
    let count = 0;
    function counter(){
        count++;
        return count;
    }
    return counter;
}

let counterInital = someFun();
let counter2 = someFun();

console.log(counterInital());
console.log(counterInital());

console.log(counter2());
console.log(counter2());