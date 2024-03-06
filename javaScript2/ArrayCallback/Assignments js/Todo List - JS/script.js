// javascript code goes here

const inputElement = document.getElementsByClassName("todo-input")[0];
const buttonElement = document.getElementsByClassName("todo-button")[0];

const ulElement = document.getElementsByClassName("todo-list")[0];

function fun(){
    const valueTextElement = inputElement.value;
    const createLIElement = document.createElement("li");
    createLIElement.append(valueTextElement);
    ulElement.append(createLIElement);

    // ------------- Complete button ---------------
    const newbtnCompleted = document.createElement("button");
    newbtnCompleted.setAttribute("class", "complete-btn")
    newbtnCompleted.innerHTML = "Completed";
    newbtnCompleted.setAttribute("onclick", "complete()")
    ulElement.append(newbtnCompleted);
    
    
    // ------------- Delete button ---------------
    const newbtnDelete = document.createElement("button");
    newbtnDelete.setAttribute("class", "trash-btn");
    newbtnDelete.innerHTML = "Delete";
    newbtnDelete.setAttribute("onclick", "deletBtn()")
    ulElement.append(newbtnDelete);

    return false;
}
document.getElementById("complete-btn")
function complete(){
    const inputValue = inputElement.value;
    inputValue.style.textDecoration = "line-through";

}

function deletBtn(event){
    event.target.parentElement.remove() 
}
