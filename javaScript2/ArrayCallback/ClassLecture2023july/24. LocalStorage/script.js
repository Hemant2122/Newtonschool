
/*

// get from local Storage
        //          ("key",  "value");
localStorage.setItem("name", "Akash");
localStorage.setItem("boolean", true);
localStorage.setItem("number", 1);

*/

/*

// get from local storage 

const item = localStorage.getItem("name");
const itemBoolean = localStorage.getItem("boolean");
const itemNumber = localStorage.getItem("number");

console.log(item, itemBoolean, itemNumber,  "item");


console.log(typeof itemBoolean, "  : ", itemBoolean);
console.log(typeof itemNumber, "  :  ", itemNumber);

*/


//  Question: You hava to store hemnat object ;

const hemant = {
    name: "hemant",
    height: 20,
    weight: 60,
    age: 24,
}

localStorage.setItem("person", JSON.stringify(hemant));

const objString = localStorage.getItem("person");

console.log(objString);

const hObj = JSON.parse(objString);
console.log(hObj);

// removes all key value pair
localStorage.clear();

// remove a single Item
localStorage.removeItem("person");