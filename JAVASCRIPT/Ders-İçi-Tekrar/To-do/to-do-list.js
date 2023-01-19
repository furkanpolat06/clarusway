const todoInput=document.getElementById("todo-input");
const addBtn=document.querySelector("#todo-button");
const todoU1=document.querySelector("#todo-ul");

let todoList=localStorage.getItem("todoList")|| [];


window.addEventListener("load",()=>{
    getTodoListFromLocalStorage();
});
const getTodoListFromLocalStorage=()=>{

}

addBtn.addEventListener("click", ()=>{
    
})