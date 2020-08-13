let taskInput = document.getElementById("new-task");
let taskTime = document.getElementById("time");
let addButton = document.getElementById("addButton");
let incompleteTasks = document.getElementById("incomplete-tasks");
let completedTasks = document.getElementById("completed-tasks");
let clearButton = document.getElementById("clear");
let createNewTask = function(taskName,taskTime) {
    let listItem = document.createElement("li");
    // let checkBox = document.createElement("input");
    let label = document.createElement("label");
    // let editInput = document.createElement("input");
    // let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    let completedButton = document.createElement("button");

    // checkBox.type = "checkBox";
    // editInput.type = "text";
    // editButton.innerText = "Edit";
    // editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    completedButton.innerText = "Completed";
    completedButton.className = "completed";
    label.innerText = taskTime +  " - " + taskName;
    // label.innerText = taskTime.value + " - " + taskName;
    // listItem.appendChild(checkBox);
    listItem.appendChild(label);
    // listItem.appendChild(editInput);
    // listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    listItem.appendChild(completedButton);

    return listItem;
}

//ADD TASK..............................................................................................................
let addTask = function() {
    if (taskInput.value == "" || taskTime.value == "") {
        if (taskInput.value == "") alert("Please enter a task to be scheduled")
        else alert("Add a time to schedule the task");
        return;
    }
    let listItem = createNewTask(taskInput.value, taskTime.value);
    incompleteTasks.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    taskInput.value = "";

    incompleteTasks.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    taskTime.value = "";
}

//EDIT TASK..............................................................................................................
// let editTask = function() {

//     let listItem = this.parentNode;
//     let editInput = listItem.querySelector("input[type=text]");
//     let label = listItem.querySelector("label");
//     let containsClass = listItem.classList.contains("editMode");
//     if (containsClass) {
//         label.innerText = editInput.value;
//     } else {
//         editInput.value = label.innerText;
//     }
//     listItem.classList.toggle("editMode");
// }

//DELETE TASK..........................................................................................................
let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

//COMPLETED TASK.......................................................................................................
let taskCompleted = function() {
    let listItem = this.parentNode;
    const completedButton = listItem.getElementsByClassName("completed");
    listItem.removeChild(completedButton[0]);
    // const editButton = listItem.getElementsByClassName("edit");
    // listItem.removeChild(editButton[0]);
    completedTasks.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}

//INCOMPLETE TASK.....................................................................................................
let taskIncomplete = function() {
    let listItem = this.parentNode;
    incompleteTasks.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted)
}

//EVENT LISTENER FOR ADDTASK.......................................................................................
addButton.addEventListener('click', addTask); 


let bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    // let checkBox = taskListItem.querySelector('input[type="checkbox"]');
    // let editButton = taskListItem.querySelector("button.edit");
    let deleteButton = taskListItem.querySelector("button.delete");
    let completedButton = taskListItem.querySelector("button.completed");
    // editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
    completedButton.onclick = checkBoxEventHandler;
    // checkBox.onchange = checkBoxEventHandler;
}

//CLEAR TASK...................................................................................................
let clear = function() {
    incompleteTasks.innerHTML = "";
    completedTasks.innerHTML = "";
}

//EVENT LISTENER FOR CLEAR..........................................................................................
clearButton.addEventListener('click', clear);