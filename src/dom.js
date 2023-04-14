export {mainPage}
import {Todo} from "/src/model.js"
import {Project} from "/src/model.js"
import { myProjectManager } from "./projectManager"
import { createProject } from "./control"
import { deleteTodo } from "./todos"
import { filterProjects } from "./control"
import { createTodo } from "./todos"

function mainPage(){
//content
const content = document.querySelector("#content")
//header
const header =  document.createElement("div")
header.setAttribute("id","header");
header.textContent = "To Do List(\"just do it\"-Shia Lebaulf)"
content.appendChild(header)
//container
const container = document.createElement("div");
container.setAttribute("id","container");
content.appendChild(container);

//sidebar
const sidebar = document.createElement("div");
sidebar.setAttribute("id","sidebar");
container.appendChild(sidebar);
//ul and li
const ul = document.createElement("ul");
ul.setAttribute("id","ul1")
sidebar.appendChild(ul)
//newProject BUTTON DIV 
const newProject = document.createElement("li");
newProject.textContent = "New Project"
newProject.setAttribute("id","newProject")
newProject.classList.add("button")
ul.appendChild(newProject)
//projects div
const projects = document.createElement("div")
projects.setAttribute("id","projects")
container.appendChild(projects)
//kowakute
const projectsHeader = document.createElement("div")
projectsHeader.setAttribute("id","projectsHeader")
projectsHeader.textContent = "Projects: "
projects.appendChild(projectsHeader)
}
mainPage()
function createProjectDomButton(){
//find create button page
const createProjectButton = document.querySelector("#newProject")
//creating Project with input
const ul1 = document.querySelector("#ul1")

createProjectButton.addEventListener("click",function createProjectButton(e)
{       
        if(e.target.classList.contains("clicked") === false)
        {
        //create input
        e.target.classList.add("clicked")
        const inputTitle = document.createElement("input")
        inputTitle.setAttribute("id","titleInput")
        inputTitle.setAttribute("placeholder","title")
        ul1.appendChild(inputTitle)
        //button to create project
        const submitButton = document.createElement("button")
        submitButton.setAttribute("id","createButton")
        submitButton.textContent = "Create project";
        ul1.appendChild(submitButton)
        submitButton.addEventListener("click", createProjectDiv)
        console.log(myProjectManager.projectArray)
        }
})
}
createProjectDomButton()
function displayAllProjects()
{
        const projects = document.querySelector("#projects")
        for(let i = 0;i< myProjectManager.projectArray.length;i++)
        {
                const projectDiv = document.createElement("div");
                projectDiv.classList.add("project")
                projectDiv.textContent = myProjectManager.projectArray[i].title 
                projectDiv.dataset.id = myProjectManager.projectArray[i].index
                projects.appendChild(projectDiv)
        }
}
function createProjectDiv()
{
const inputTitle = document.querySelector("#titleInput")
const inputTitleValue = document.querySelector("#titleInput").value
//create project cancel
if(inputTitle.value !== "")
{
const createProjectButton = document.querySelector("#newProject")
createProjectButton.classList.remove("clicked")
const submitButton = document.querySelector("#createButton")
const projects = document.querySelector("#projects")
const project =  createProject(inputTitleValue);
const projectDiv = document.createElement("div");
projectDiv.textContent = project.title;
projectDiv.dataset.id = project.index;
console.log(projectDiv.dataset.id)
projectDiv.classList.add("project");
projects.appendChild(projectDiv);
displayAllProjects
inputTitle.remove();
submitButton.remove();
}
}
const todo1 =createTodo("sooo","carry on","loveTheSubhuman","Self",0)
const todo2 = createTodo("meow","meow","meow","meow",0)
function createTodoDiv(todo){
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo")
        const todoTitle = document.createElement("div")
        todoTitle.textContent = todo.title
        todoTitle.classList.add("todoTitle")
        const endGroup = document.createElement("div")
        endGroup.classList.add("endGroup")
        
        todoDiv.appendChild(todoTitle)
        todoDiv.appendChild(endGroup)
        const todoDueDate = document.createElement("div")
        endGroup.textContent = todo.dueDate
        todoDiv.appendChild(todoDueDate)
        const todoPriority = document.createElement("div");
        todoPriority.textContent = todo.priority
        endGroup.appendChild(todoPriority)
        return todoDiv
}

function selectTodo()
{      
 const project = document.querySelectorAll(".project") 
 for(let i = 0;i<project.length;i++)
 {
 project[i].addEventListener("click",function filterAll(e){
        const projectIndex = e.target.dataset.id;
        const project = filterProjects(myProjectManager.projectArray[projectIndex])
        const projects = document.querySelector("#projects")
        console.log(projects.childNodes)
        projects.remove()
        const container = document.querySelector("#container")
        const todos = document.createElement("div")
        todos.setAttribute("id","todos")
        container.appendChild(todos)
        const todoHeader = document.createElement("div")
        todoHeader.setAttribute("id","todoHeader")
        todoHeader.textContent = project[0].title;
        todos.appendChild(todoHeader)
        const todoPlace = myProjectManager.projectArray[projectIndex].todos
        for(let i =0;i<todoPlace.length;i++)
        {
                const todo = todoPlace[i]
                const todoDiv = createTodoDiv(todo)
                todos.appendChild(todoDiv)
        
        }
        const returnButton = document.createElement("button")
        returnButton.textContent = "Return"
        returnButton.addEventListener("click",returnToMainPage)
        todos.appendChild(returnButton)
 })
 }
}
function returnToMainPage(){
        if(document.getElementById("#todos"))
        {
        const todos = document.querySelector("#todos")
        todos.remove()
        displayAllProjects()
        }
}


displayAllProjects()
selectTodo()
returnToMainPage()
