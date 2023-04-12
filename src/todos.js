import { Todo } from "./model"
import { myProjectManager } from "./projectManager"
export{deleteTodo}
export{renameTodo}
export{redescribeTodo}
import { Project } from "./model"
import { createProject } from "./control"
import { format } from "date-fns"

createProject("lolol")

function createTodo(title, description, dueDate, priority,index){
    const newTodo = new Todo(title,description,dueDate,priority)
    let array = myProjectManager.projectArray[index].todos
    array.push(newTodo) 
    return newTodo
}

function deleteTodo(index,todo)
{
    {   
        for( let i = 0; i < myProjectManager.projectArray[index].todos.length; i++){ 
        
            if ( myProjectManager.projectArray[index].todos[i] === todo) { 
        
                myProjectManager.projectArray[index].todos.splice(i, 1);
 
            }
        
        }
        
     }
}
function renameTodo(todo,newTitle)
{
    todo.title = newTitle
    return todo.title
}
function redescribeTodo(todo,newDesc)
{
     todo.description = newDesc
    return todo.description
}
const dueDate = format(new Date(2014, 2, 11), 'MM/dd/yyyy')
let todo = createTodo("i love cats","cats i love",dueDate,"meow",0)
let todo2 = createTodo("dogs","dogs is cool",dueDate,"dog",0)
