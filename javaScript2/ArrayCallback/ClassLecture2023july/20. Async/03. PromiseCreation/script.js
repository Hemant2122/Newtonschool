
// --------------------- Promise Creation ---------------------

// fetch();

// Promise Creation :---------

// const myFetc = new Promise((resolve, reject) => {
//     resolve(1010101010101);

//     reject("ERROR : not nice");
// });


// Promise Consumption :---------

// myFetc
// .then((data) => {
//     console.log("data", data);
// })
// .catch((error) => {
//     console.log(error, "error level 2");
// });

fetch("google.com");


// ------------------ How to Create our Fetch ------------------

function myFetc(url){
    return new Promise((resolve, reject) => {
        //  1. Call the server 
        const xmlReq = new XMLHttpRequest();
        const data = xmlReq.open("GET", url);


        // 2. if you have a good Date Wrap in Response Object

        const ResponseWrapper = {
            url : url,
            status : 200,
            body : MediaStream(data),
            ok : true,
            redirected : false,
            json : function (){

            },
        };


        // 3. REJECT OR RESOLE THE PROMISE according to condition.


        if((data)){
            resolve(ResponseWrapper);
        }else {
            reject("Server Timed out");
        }
    });
}

myFetc("google.com");