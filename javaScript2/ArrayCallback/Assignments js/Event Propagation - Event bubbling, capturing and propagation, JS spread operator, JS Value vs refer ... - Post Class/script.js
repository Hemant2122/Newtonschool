
function func1(event) {
    console.log("DIV 1 is clicked.");
}

function func2() {
    console.log("DIV 2 is clicked.");
}

const checkBoxElement = document.getElementById("check");

checkBoxElement.addEventListener("check", (eventObj) => {
    const div1Element = document.getElementById("div1");
    div1Element.addEventListener("click", () => {
        function func1(event) {
            console.log("DIV 1 is clicked.");
            event.stopPropagation();
        }
    });
    
});