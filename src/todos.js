import { Todo } from "./model"
import { myProjectManager } from "./projectManager"
export{deleteTodo}
export{renameTodo}

export{createTodo}
export{changeDate}
export{changePriority}



function createTodo(title, dueDate, priority,index){
    const newTodo = new Todo(title,dueDate,priority)
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
function changeDate(todo,newdate)
{
    todo.dueDate = newdate
    return todo.newdate
}
function changePriority(todo,newPriority)
{
    todo.newPriority = newPriority
    return todo.newPriority
}