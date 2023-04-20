export {selectTodo}
import { myProjectManager } from "./projectManager"
import { filterProjects } from "./projects"
import { createTodo } from "./todos"
import { mainPage } from "./dom"
import {removeAllChildNodes} from "./dom"   
import {createProjectDomButton} from "./dom"
import {displayAllProjects} from "./dom"
import { deleteTodo } from "./todos"
import { renameTodo } from "./todos"
import { changePriority } from "./todos"
import { changeDate } from "./todos"
mainPage()
function selectTodo()
{      
 const project = document.querySelectorAll(".project") 
 for(let i = 0;i<project.length;i++)
 {
        
 project[i].addEventListener("click",function filterAll(e){
        const ul1 = document.querySelector("#ul1")
        const projectIndex = e.target.dataset.id;
        const project = filterProjects(myProjectManager.projectArray[projectIndex])
        const projects = document.querySelector("#projects")
        projects.remove()
        const container = document.querySelector("#container")
        const todos = document.createElement("div")
        todos.setAttribute("id","todos")
        container.appendChild(todos)
        const todoHeader = document.createElement("div")
        todoHeader.setAttribute("id","todoHeader")
        todoHeader.textContent = project[0].title;
        todos.appendChild(todoHeader)
        const returnButton = document.createElement("button")
        returnButton.setAttribute("id","returnButton")
        returnButton.addEventListener("click",function returnToMainPage(){
                todos.remove()
                const projects = document.createElement("div")
                projects.setAttribute("id","projects")
                container.appendChild(projects)
                const projectsHeader = document.createElement("div")
                projectsHeader.setAttribute("id","projectsHeader")
                projectsHeader.textContent = "Projects: "
                projects.appendChild(projectsHeader)
                displayAllProjects()
                selectTodo()
                const ul = document.querySelector("#ul1");
                removeAllChildNodes(ul)
                const sidebar = document.querySelector("#sidebar")
                sidebar.appendChild(ul)

                //newProject BUTTON DIV 
                const newProject = document.createElement("li");
                newProject.textContent = "New Project"
                newProject.setAttribute("id","newProject")
                newProject.classList.add("button")
                ul.appendChild(newProject)
                createProjectDomButton()
        })
        returnButton.textContent = "Return";
        todos.appendChild(returnButton)
        const todoPlace = myProjectManager.projectArray[projectIndex].todos
        for(let i = 0;i<todoPlace.length;i++)
        {
            const todo = todoPlace[i]
            const todoDiv = createTodoDiv(todo,i,projectIndex)
            todos.appendChild(todoDiv)
        }
        removeAllChildNodes(ul1)
        //create todo button
        function createTodoDiv(todo,index,projectIndex){
                //todoDIv
                const todoDiv = document.createElement("div");
                todoDiv.classList.add("todo")
                //todo Title
                const todoTitle = document.createElement("div")
                todoTitle.textContent = todo.title
                todoTitle.classList.add("todoTitle")
                const endGroup = document.createElement("div")
                //endgroup
                endGroup.classList.add("endGroup")
                todoDiv.appendChild(todoTitle)
                todoDiv.appendChild(endGroup)
                //due date
                const todoDueDate = document.createElement("div")
                endGroup.textContent = todo.dueDate
                todoDiv.appendChild(todoDueDate)
                //priority
                const todoPriority = document.createElement("div");
                todoPriority.textContent = todo.priority
                endGroup.appendChild(todoPriority)
                //todo div index
                todoDiv.dataset.id = index
                //remove
                const removeTodoButton = document.createElement("button")
                removeTodoButton.setAttribute("id","removeTodo")
                endGroup.appendChild(removeTodoButton)
                removeTodoButton.addEventListener("click",function removeTodoButton()
                {
                    deleteTodo(projectIndex,todo)
                    todoDiv.remove()
                })
                removeTodoButton.textContent = "remove Todo"
                const editButton = document.createElement("button")
                editButton.textContent = "edit todo"
                endGroup.appendChild(editButton)
                editButton.addEventListener("click",function editTodoListener(){
                            const todoInArray = myProjectManager.projectArray[projectIndex].todos[index]
                            //rename
                            const ulToDo = document.querySelector("#ul1")
                            const textTitle = document.createElement("li")
                            const textTitleInput = document.createElement("input")
                            textTitleInput.setAttribute("id","textTitleInput")
                            textTitle.appendChild(textTitleInput)
                            ulToDo.appendChild(textTitle)
                            //date
                            const dueDate = document.createElement("li")
                            const dueDateInput = document.createElement("input")
                            dueDateInput.setAttribute("type","date")
                            dueDateInput.setAttribute("id","dueDateInput")
                            dueDate.appendChild(dueDateInput)
                            ulToDo.appendChild(dueDate)
                            //priority
                            const  priority = document.createElement("li")
                            const   priorityInput = document.createElement("input")
                            priorityInput.setAttribute("id","priorityInput")
                            priority.appendChild(priorityInput)
                            ulToDo.appendChild(priority)
                            const submitButton = document.createElement("button")
                            submitButton.textContent = "edit todo"
                            ulToDo.appendChild(submitButton)
                            submitButton.addEventListener("click",function changeTodos()
                            {       
                                    //removealltodos
 
                                    renameTodo(todoInArray,textTitleInput.value)
                                    changeDate(todoInArray,dueDateInput.value)
                                changePriority(todoInArray,priorityInput.value)

                                    while(todos.childNodes.length>2)
                                    {
                                            todos.removeChild(todos.lastChild)
                                    }
                                    const todoPlace = myProjectManager.projectArray[projectIndex].todos
                                    for(let i = 0;i<todoPlace.length;i++)
                                    {
                                        const todo = todoPlace[i]
                                        const todoDiv = createTodoDiv(todo,i,projectIndex)
                                        todos.appendChild(todoDiv)
                                    }
                                    while(ul1.childNodes.length>1)
                                    {
                                            ul1.removeChild(ul1.lastChild)
                                    }
                            })
                    
                })
                return todoDiv
            }
        
        //createTodoButton
        const createTodoButton = document.createElement("div")
        createTodoButton.textContent = "Create todo"
        ul1.appendChild(createTodoButton)
        createTodoButton.classList.add("button")
        createTodoButton.addEventListener("click", function createTodoDom(){
                if(createTodoButton.classList.contains("clicked") === false){
                createTodoButton.classList.add("clicked")
                const ulToDo = document.querySelector("#ul1")
                const textTitle = document.createElement("li")
                const textTitleInput = document.createElement("input")
                textTitleInput.setAttribute("id","textTitleInput")
                textTitle.appendChild(textTitleInput)
                ulToDo.appendChild(textTitle)
                const dueDate = document.createElement("li")
                const dueDateInput = document.createElement("input")
                dueDateInput.setAttribute("type","date")
                dueDateInput.setAttribute("id","dueDateInput")
                dueDate.appendChild(dueDateInput)
                ulToDo.appendChild(dueDate)
                const  priority = document.createElement("li")
                const   priorityInput = document.createElement("input")
                priorityInput.setAttribute("id","priorityInput")
                priority.appendChild(priorityInput)
                ulToDo.appendChild(priority)
                const submitButton = document.createElement("button")
                submitButton.textContent = "Create todo"
                ulToDo.appendChild(submitButton)
                submitButton.addEventListener("click",function addTodoToTheProjects() {
                if(textTitleInput.value !== "" && (dueDateInput.value !== " " || dueDateInput.checkValidity() === false)   && priorityInput.value !== "")
                {
                createTodoButton.classList.remove("clicked")
                createTodo(textTitleInput.value,dueDateInput.value,priorityInput.value,projectIndex)
                while(todos.childNodes.length>2)
                {
                        todos.removeChild(todos.lastChild)
                }
                for(let i = 0;i<todoPlace.length;i++)
                        {
                        const todo2 = todoPlace[i]
                        const todoDiv2 = createTodoDiv(todo2,i,projectIndex)
                        todos.appendChild(todoDiv2)
                        }
                
                while (ul1.childNodes.length > 1) {
                        ul1.removeChild(ul1.lastChild);
                    }
                }})}
                
                
        })
        //return button
}
 )}}
 selectTodo()