import './style.css';
import {Todo} from "/src/model.js"
import {mainPage} from "/src/dom.js"
import {Project} from "/src/model.js"
let todo1 = new Todo("DO To Do","I need to do The Todo Project","Till Tomorrow","High Priority")
let mainProject = new Project("Do Todo","doing todo")
mainPage()
const container = document.querySelector("#container")
