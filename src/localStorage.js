
import { createProjectDomButton, displayAllProjects } from "./dom";
import { Project } from "./model"
import { myProjectManager } from "./projectManager"
import { createProject } from "./projects";
function setProjects(project,index)
{
   const stringified = JSON.stringify(project)
   localStorage.setItem("project"+index,stringified)
   
}

function getProjects()
{
   for (let i = 0 ; i<localStorage.length;i++)
   {
   const projectGet = localStorage.getItem("project"+i)
   const parsedObject = JSON.parse(projectGet)
   myProjectManager.projectArray.push(parsedObject)
   }
   displayAllProjects()
   }
function removeProjectStorage()
{
   localStorage.clear()
   
}
function repopulateTheArray(array)
{
   for(let i = 0;i<array.length;i++)
   {
   const stringified = JSON.stringify(array[i])
   localStorage.setItem("project"+i,stringified)
   }
}

export {setProjects}
export{getProjects}
export {removeProjectStorage}
export{repopulateTheArray}