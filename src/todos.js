import { Todo } from "./model"
import { myProjectManager } from "./projectManager"
export{deleteTodo}
export{renameTodo}
export{redescribeTodo}

function createTodo(title, description, dueDate, priority,status,index){
    const newTodo = new Todo(title,description,dueDate,priority,status)
    let array = myProjectManager.projectArray[index].todos[index]
    console.log(array)
    return newTodo
}

function deleteTodo(todo)
{
    {   
        for( let i = 0; i < myProjectManager.projectArray.length; i++){ 
        
            if ( myProjectManager.projectArray[i] === todo) { 
        
                myProjectManager.projectArray.splice(i, 1); 
            }
        
        }
        
     }
}
function renameTodo(todo,newTitle)
{
    todo.title = newTitle
    return todo.title
}
function redescribeTodo(todo,newTitle)
{
     todo.description = newTitle
    return todo.description
}
let todo = createTodo("oh lulaby","dont stop","even in my ","deepest","dreams",0)
console.log(myProjectManager.projectArray[0].todos)
