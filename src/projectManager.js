export{myProjectManager}
import { getProjects } from "./localStorage";

import { Project } from "./model";
const placeholderProject = new Project("World Domination",0)

const myProjectManager = ((projectArray)=>
{
    {
        projectArray = [placeholderProject]
    }
    return {projectArray};
})();
