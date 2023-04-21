export {setProjects}
import { myProjectManager } from "./projectManager"
function setProjects()
{
   const projectsJson = JSON.stringify(myProjectManager.projectArray)
   console.log(projectsJson)
   localStorage.setItem("projects",projectsJson)
}

setProjects()