// const formElement = document.getElementById("form");
// console.log(formElement);

// formElement.addEventListener("submit", (event) => {
//     event.preventDefault();
// });

// 1 -> copy and past

// formElement.addEventListener("paste", (event) => {
//     console.log("hey i am pasted !!!");
//     event.preventDefault();
// });

// formElement.addEventListener("paste", (event) => {
//     console.log("hey i am pasted !!!");
//     event.preventDefault();
// });

// const nameElement = document.getElementById("name");
// nameElement.addEventListener("focus", (event) => {
//     console.log("focus");
// });

// nameElement.addEventListener("blur", (event) => {
//     console.log("blur");
    
// });

// 3 -> key event -> keydown , keyup , keypress

// nameElement.addEventListener("keypress", (event) => {
//     console.log("button clicked");
//     console.log(event);
//     const key = event.key;
//     console.log(key);
// });


const nameElement = document.getElementById("name");

// Example 1 :---

// nameElement.addEventListener("change", (event) => {
//     console.log(event);
//     const targetElement = event.target;
//     targetElement.value = String(targetElement.value).toUpperCase();
// });

// Example 2 :-----

// nameElement.addEventListener("keyup", (event) => {
//     const targetElement = event.target;
//     const value = String(targetElement.value);

//     targetElement.value = value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase();
// });


// ------------------------ REGEX ----------------------------

const formElement = document.getElementById("form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const formElem = event.target;
    console.dir(formElem); 
    const elements = formElem.elements;
    console.dir(elements);

    // Elements 
    const nameElement = elements.name;
    const phoneNumberElemrnt = elements.phone;
    const emailElement = elements.email;
    const standardElement = elements.standard;

    // Value 
    const name = nameElement.value;
    const phone = phoneNumberElemrnt.value;
    const email = emailElement.value;
    const standard = standardElement.value;

    // Validation
    // Name ->
    const nameValidation = nameValidator(name);
    if(!nameValidation){
        console.log("Name is requied and It should be according to the rules!!!");
        return;
    }

    // Number 
    const numberValidation = phoneNumberValidator(phone);
    if(!numberValidation){
        console.log("Phone Number is requied 10 Number and It should be according to the rules!!!");
        return;
    }

    const payload = {
        name : name,
        phone : phone,
        email : email,
        standard : standard
    }
    console.log(payload, "payload");

    fetch("hemant.com", {method : "post", body: JSON.stringify(payload)});

    // --------------- name Validation ----------------

    function nameValidator(name){
        const nameRegex = /^[a-zA-Z]+$/;
        const Validate = name.match(nameRegex);

        if(Validate){
            return true;
        }else{
            return false;
        }
    }

    // -------------------- Phone Number Validation --------------------

    function phoneNumberValidator(phone){
        const phoneRegex = /^[0-9]{10}$/;
        const validateNumbet = String(phone).match(phoneRegex);

        if(validateNumbet){
            return true;
        }else{
            return false;
        }
    }
    
    
});