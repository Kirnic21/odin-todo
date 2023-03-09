const toDoFactory = (title,description,dueDate,priority)=>{
    return{title, description, dueDate,priority}
}
const projectFactory = (title,description,toDoarray)=>
{
    return{title,description,toDoarray}
}
const project = projectFactory("Start","Cool Project",[]);
console.log(project)
const todo= projectFactory("Do homework","Learn","12/32","High")
project.toDoarray.push(todo)

const x = [1, 2, 3, 4, 5];
const [y, z, m] = x;
console.log(y); // 1
console.log(z); // 2
console.log(m);