// ----------------- Array Callback Functions ------------------

// 1 -> ForEach :- 

const arr = [5, 8, 99, 100, 240, 6, 93, 64];

console.log(arr);

function hemantWants(item){
    console.log(item);
}

arr.forEach(hemantWants);