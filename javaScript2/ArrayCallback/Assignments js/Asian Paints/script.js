// javascript code goes here
const wallIdInput = document.getElementById("wall_id");
const wallColorInput = document.getElementById("wall_color");
const applyBtnElement = document.getElementById("apply-btn");
const parentBlocksWallElemrnt  = document.querySelectorAll(".blocks-wall");

const div1Element =document.getElementById("1");
const div2Element =document.getElementById("2");
const div3Element =document.getElementById("3");
const div4Element =document.getElementById("4");
const div5Element =document.getElementById("5");
const div6Element =document.getElementById("6");
const div7Element =document.getElementById("7");
const div8Element =document.getElementById("8");
const div9Element =document.getElementById("9");
const div10Element =document.getElementById("10");

applyBtnElement.addEventListener("click", () => {
    const valueWallId = wallIdInput.value;
    const color = wallColorInput.value;

    if(valueWallId === "1"){
        div1Element.style.backgroundColor = color;
    }else if(valueWallId === "2"){
        div2Element.style.backgroundColor = color;
    }else if(valueWallId === "3"){
        div3Element.style.backgroundColor = color;
    }else if(valueWallId === "4"){
        div4Element.style.backgroundColor = color;
    }else if(valueWallId === "5"){
        div5Element.style.backgroundColor = color;
    }else if(valueWallId === "6"){
        div6Element.style.backgroundColor = color;
    }else if(valueWallId === "7"){
        div7Element.style.backgroundColor = color;
    }else if(valueWallId === "8"){
        div8Element.style.backgroundColor = color;
    }else if(valueWallId === "9"){
        div9Element.style.backgroundColor = color;
    }else if(valueWallId === "10"){
        div10Element.style.backgroundColor = color;
    }
    
});

const resetAllbtnElement = document.getElementById("reset-btn");
const childDivElement = document.querySelectorAll(".block");
const inputs = document.querySelectorAll("input");

resetAllbtnElement.addEventListener("click", () => {
    inputs.forEach(input => input.value = "");

    childDivElement.forEach((block) => {
        block.style.backgroundColor = 'transparent';
    })

});