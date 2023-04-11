import {Project} from "/src/model.js"
import { myProjectManager } from "./projectManager"
export {createProject}
export{removeProject}
export{renameProject}

function createProject(name)
{
    let newProject = new Project(name)
    myProjectManager.projectArray.push(newProject)
    return newProject
};

function removeProject(project,arr)
{   
    for( let i = 0; i < arr.length; i++){ 
    
        if ( arr[i] === project) { 
    
            arr.splice(i, 1); 
        }
    
    }
    return arr
 }
function renameProject(project,newTitle){
    project.title = newTitle
    return project.title
}
