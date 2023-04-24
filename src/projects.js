import {Project} from "/src/model.js"
import { myProjectManager } from "./projectManager"
export {createProject}
export{removeProject}
export{renameProject}
export {filterProjects}
import { setProjects } from "./localStorage"
import { getProjects } from "./localStorage"
import { forEachKey } from "./localStorage"
function createProject(name)
{
    let newProject = new Project(name)
    myProjectManager.projectArray.push(newProject)
    newProject.index = myProjectManager.projectArray.indexOf(newProject)
    setProjects()
    return newProject
}

function removeProject(project,arr)
{   
    for( let i = 0; i < arr.length; i++){ 
    
        if ( arr[i] === project) { 
    
            arr.splice(i, 1); 
        }
    }
    setProjects()
    return arr

 }
function renameProject(project,newTitle){
    project.title = newTitle
    setProjects()
    getProjects()
    return project.title
}
function filterProjects(project)
{
    const filteredProject =   myProjectManager.projectArray.filter(projects => projects === project)
    return filteredProject
}
