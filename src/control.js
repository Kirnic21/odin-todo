import {Todo} from "/src/model.js"
import {Project} from "/src/model.js"
export {createTodo}
let todo1 = new Todo("DO To Do","I need to do The Todo Project","Till Tomorrow","High Priority","Avaible")
console.log(todo1)
let project1 = new Project("Todo","Not Todo")
project1.todos.push(todo1)
