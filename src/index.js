import './style.css';
import {Todo} from "/src/model.js"
import {mainPage} from "/src/dom.js"
import {Project} from "/src/model.js"
import { createProjectDom } from './dom';
mainPage()
createProjectDom()
const container = document.querySelector("#container")
