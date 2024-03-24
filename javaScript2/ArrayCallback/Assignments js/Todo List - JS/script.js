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
    createLIElement.append(newbtnCompleted);
    
    
    // ------------- Delete button ---------------
    const newbtnDelete = document.createElement("button");
    newbtnDelete.setAttribute("class", "trash-btn");
    newbtnDelete.innerHTML = "Delete";
    newbtnDelete.setAttribute("onclick", "deletBtn()")
    createLIElement.append(newbtnDelete);

    return false;
}

function complete(event){
    const element = event;
    const line_through = document.querySelector("li");
    line_through.style.textDecoration = "line-through";

}

function deletBtn(event){
    const line_through = document.querySelector("li");
    const buttonEleme = document.querySelector(".trash-btn");
    const buttonEleme1 = document.querySelector(".complete-btn");
    buttonEleme1.remove();
    buttonEleme.remove();
    line_through.remove();
}
