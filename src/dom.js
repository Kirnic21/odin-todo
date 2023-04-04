export {mainPage}
import {Todo} from "/src/model.js"
import {Project} from "/src/model.js"
let todo1 = new Todo("DO To Do","I need to do The Todo Project","Till Tomorrow","High Priority","Avaible")
let Project1 = new Project("Do Todo","Doing Todo")
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
sidebar.appendChild(ul)
const newProject = document.createElement("li");
newProject.textContent = "New Project"
newProject.setAttribute("id","newProject")
newProject.classList.add("button")
ul.appendChild(newProject)
//Projects
}
