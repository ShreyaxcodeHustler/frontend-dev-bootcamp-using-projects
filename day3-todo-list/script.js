const textInput =document.getElementById("todo-input");
const addButton=document.getElementById("addBtn");
const todoList=document.getElementById("todo-list");

addButton.addEventListener("click", function() {
    if (textInput.value === ""){
        return;
    }//prevents adding empty tasks to the list

    const li= document.createElement("li");
    li.textContent=textInput.value;
    todoList.appendChild(li);
    textInput.value="";//clears the text after adding the task. test this line by commenting it out and see the ouptu once
})