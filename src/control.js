import {Todo} from "/src/model.js"
import {Project} from "/src/model.js"
let todo1 = new Todo("DO To Do","I need to do The Todo Project","Till Tomorrow","High Priority","Avaible")
console.log(todo1)
let project1 = new Project("Todo","Not Todo")
project1.todos.push(todo1)
console.log(project1)

function createTodo()
{
        const title = document.createElement("div");
        const project = document.querySelector(".project")
        title.setAttribute("id","title");
        title.textContent = todo1.title;
        project.appendChild(title)
        const Description = document.createElement("div");
        Description.setAttribute("id","Description");
        Description.textContent = todo1.Description;
        project.appendChild(Description)
        const dueDate = document.createElement("div");
        dueDate.setAttribute("id","dueDate");
        dueDate.textContent = todo1.dueDate;
        project.appendChild(dueDate)
        const priority = document.createElement("div");
        priority.setAttribute("id","priority");
        priority.textContent = priority.title;
        project.appendChild(priority)
}
const createTodoButton = document.querySelector("#createTodo")
createTodoButton.addEventListener("click",createTodo) 