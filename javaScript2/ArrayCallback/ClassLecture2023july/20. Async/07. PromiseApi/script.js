
// ------------------- PROMISE API --------------------

// 01 :-> Promise all :----------

/*

let payerPromise = new Promise((res, rej) => {
    // Payer had 200 rs. with him, he is Paying Shopkeeper 100 rs. 

    res(100);
});

let shopkeeperPromise = new Promise((res, rej) => {
    // res(10000 + 100);
    rej("Didn`t get money !!");
});

Promise.all([payerPromise, shopkeeperPromise])
.then((data) => {
    console.log(data, " RBI WILL TAKE A LEDGER");
})
.catch((error) => {
    console.log(error, "RBI SHOULD ROLLBACK THE MONEY TO PAYER");
});

*/


// 02 :-> Promise.race :---------

const googlePromise = new  Promise((res) => {
    setTimeout( () => {
        res("data from google");
    }, 1000);
});

const utkarshPromise = new Promise((res) => {
    setTimeout(() => {
        res("data form utkarsh");
    }, 5000);
});

Promise.race([googlePromise, utkarshPromise])
.then((data) => {
    console.log("data inside the race", data);
});