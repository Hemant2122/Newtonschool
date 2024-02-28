// Date :----

// 01 :--- Today date....

const todaysDate = new Date();
console.log(todaysDate, "toDayDate");


//02 -> zero day date : 1 Jan 1970 00:00:00

const zeroDsyDate = new Date(0);
console.log(zeroDsyDate, "zeroDayDate");


// 03 -> String date to Object  Date

const date = "12-24-1996";
const dateObj = new Date(date);
console.log(dateObj, "String Date");


// 04 -> Time in milliseconds from EPOC (1st Jan 1970)

console.log(new Date().getTime());



// ----------------- UTC VS IST ---------------------

// Universal Time :-----


// -------------- find different between 2 dates ----------------
const date1 = new Date("12-24-1995");
const date2 = new Date();

console.log(date2 - date1);