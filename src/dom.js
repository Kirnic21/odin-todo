export {mainPage}
import {Todo} from "/src/model.js"
import {Project} from "/src/model.js"
import { myProjectManager } from "./projectManager"
import { createProject } from "./control"
import { deleteTodo } from "./todos"

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
//newProject
const newProject = document.createElement("li");
newProject.textContent = "New Project"
newProject.setAttribute("id","newProject")
newProject.classList.add("button")
ul.appendChild(newProject)
const projects = document.createElement("div")
projects.setAttribute("id","projects")
container.appendChild(projects)
const projectsHeader = document.createElement("div")
projectsHeader.setAttribute("id","projectsHeader")
projectsHeader.textContent = "Projects: "
projects.appendChild(projectsHeader)
}
mainPage()
function createProjectDiv()
{
        //create inputTitle
        const inputTitle = document.querySelector("#titleInput").value;
        const projects = document.querySelector("#projects")
        createProject(inputTitle)
        const projectDiv = document.createElement("div");
        projectDiv.textContent = inputTitle
        projectDiv.classList.add("project")
        projects.appendChild(projectDiv)
}
function createProjectDomButton(){
//find create button page
const createProjectButton = document.querySelector("#newProject")
console.log(createProjectButton)
//creating Project with input
const ul1 = document.querySelector("#ul1")

createProjectButton.addEventListener("click",function createProjectButton()
{
        //create input
        const inputTitle = document.createElement("input")
        inputTitle.setAttribute("id","titleInput")
        inputTitle.setAttribute("placeholder","title")
        ul1.appendChild(inputTitle)
        //button to create project
        const submitButton = document.createElement("button")
        submitButton.setAttribute("id","createButton")
        submitButton.textContent = "Create project";
        ul1.appendChild(submitButton)
        submitButton.addEventListener("click",createProjectDiv())
})}
createProjectDomButton();
