
function func1(event) {
    console.log("DIV 1 is clicked.");
    if (document.getElementById('check').checked) {
        event.stopPropagation();
    }
    event.preventDefault();
}

function func2() {
    console.log("DIV 2 is clicked.");

}
