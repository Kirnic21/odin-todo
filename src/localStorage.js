export {setProjects}
import { myProjectManager } from "./projectManager"
export {getProjects}
export {forEachKey}
function setProjects()
{
   const projectsJson = JSON.stringify(myProjectManager.projectArray)
   
   window.localStorage.setItem("projects",projectsJson)
}
function getProjects()
{
   const retrievedData  = window.localStorage.getItem("projects")
   const projectArray = JSON.parse(retrievedData)
   myProjectManager.projectArray = projectArray
}
function forEachKey() {
   for (let i = 0; i < localStorage.length; i++) {
      console.log(localStorage.getItem(localStorage.key(i)));
    }
 }