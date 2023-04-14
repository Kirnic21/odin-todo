export{myProjectManager}
import { Project } from "./model";
const placeholderProject = new Project("Love",0)
const placeholderProject2 = new Project("the subhuman",1)
const placeholderProject3= new Project("self",2)
const myProjectManager = ((projectArray)=>
{
    {
        projectArray = [placeholderProject,placeholderProject2,placeholderProject3]
    }
    return {projectArray};
})();
