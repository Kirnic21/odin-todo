export {mainPage}
import { myProjectManager } from "./projectManager"
import { createProject } from "./projects"
import { createTodo } from "./todos"
export{removeAllChildNodes}
export{createProjectDomButton}
export {displayAllProjects}
import { removeProject } from "./projects"
import { selectTodo } from "./todosDom"
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
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

const projectsHeader = document.createElement("div")
projectsHeader.setAttribute("id","projectsHeader")
projectsHeader.textContent = "Projects: "
projects.appendChild(projectsHeader)
}
mainPage()
//Create a Project
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
        }
})
}
createProjectDomButton()
//get project lenght
//Create projects
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
                const removeButton = document.createElement("button")
                removeButton.addEventListener("click",function removeProjectDiv(){
                        projectDiv.remove()
                        removeProject()
                })
        }
}
displayAllProjects()
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
projectDiv.classList.add("project");
projects.appendChild(projectDiv);
inputTitle.remove();
submitButton.remove();
}
}
const todo1 =createTodo("sooo","loveTheSubhuman","Self",0)
const todo2 = createTodo("meow","meow","meow",0)
//createTodoDiv
selectTodo()
