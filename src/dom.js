export {mainPage}
import {Todo} from "/src/model.js"
import {Project} from "/src/model.js"
import { myProjectManager } from "./projectManager"
export {createProjectDom}
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
function createProjectDom()
{
        //clicking button creates a project
        const newProject = document.querySelector("#newProject")
        let i = 0
        newProject.addEventListener("click",function createInput(){
        if(i==0){
        const input1 = document.createElement('div')
        const titleinput = document.createElement('input')
        titleinput.setAttribute("placeholder","title")
        titleinput.setAttribute("type","text")
        titleinput.setAttribute("id","titleInput")
        input1.appendChild(titleinput)
        const ul1 = document.querySelector('#ul1')
        ul1.appendChild(input1)
        const createProject = document.createElement("button")
        createProject.setAttribute("id","createProject")
        createProject.textContent = "Create Project"
        ul1.appendChild(createProject)
        i++
        createProject.addEventListener("click",function createProjectListener()
        {
                //remove the input
                if(titleinput.value === "")
                {
                        return false
                }
                else{
                let newProject = new Project(titleinput.value)
                const project_div = document.createElement("div")
                //create project div
                project_div.classList.add("project")
                project_div.textContent = newProject.title
                projects.appendChild(project_div)
                //push thing to array
                myProjectManager.projectArray.push(newProject)
                console.log(myProjectManager)
                titleinput.remove()
                createProject.remove()
                i--

                }
        })
}})
let aaproject = new  Project("now")
console.log(aaproject)

function removeAllChildrenNodes(parent){
        while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }
}
//substitute projects and todos
function replaceProjectsWithTodo()
{
       const projectsContainer = document.querySelector("#projects")
       removeAllChildrenNodes(projectsContainer)
}      

