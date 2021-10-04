var task = document.getElementsByClassName("task")[0];
var clear = document.getElementById("clear");
var remember = document.getElementById("remember");
var todo_list = document.getElementById("todo_list");
var todo_delete = [...document.getElementsByClassName("todo_delete")];
var clear_all = document.getElementById("clearall")
var todoList = [];

const clearInput = () => task.value = ""
clear.addEventListener('click', clearInput);

task.addEventListener('click', () => task.className = "task");

remember.addEventListener('click', () => {
    let newTask = task.value;
    newTask != "" ? createTask(newTask) : task.className = "task error";
}, false)

clear_all.addEventListener('click', () => {
    var todo_clear = [...document.getElementsByClassName("todo_wrapper")];
    todo_clear.forEach(ele => {
        if (ele.classList.contains("done"))
            ele.className = "todo_wrapper clear";
    })
},false)


const createTask = (newTask) => {
    todoList.push(newTask);
    addTask(newTask);
    todo_delete_list();
}

const todo_delete_list = () =>{
    todo_delete = [...document.getElementsByClassName("todo_delete")]
    todo_delete.forEach(ele => ele.addEventListener('click', deleteTask, false) );
};

const addTask = (newTask) => {

    let todo_wrapper = document.createElement("div");
    todo_wrapper.className = "todo_wrapper";

    let todo_title = document.createElement("p");
    todo_title.className = "todo_title";
    todo_title.innerHTML = newTask;

    let todo_delete = document.createElement("i");
    todo_delete.className = "fas fa-trash todo_delete";

    todo_wrapper.appendChild(todo_title);
    todo_wrapper.appendChild(todo_delete);

    todo_list.appendChild(todo_wrapper);

    clearInput();
    
};

const deleteTask = ele => ele.srcElement.parentElement.className = "todo_wrapper done";
