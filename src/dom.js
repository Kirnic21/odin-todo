export {mainPage}
function mainPage(){
//content
const content = document.querySelector("#content")
//header
const header =  document.createElement("div")
header.setAttribute("id","header");
header.textContent = "To Do List(\"just do it\"-Shia Lebaulf)"
content.appendChild(header)
//container
const container = document.createElement("div");
container.setAttribute("id","container");
content.appendChild(container);
//sidebar
const sidebar = document.createElement("div");
sidebar.setAttribute("id","sidebar");
container.appendChild(sidebar);
//ul and li
const ul = document.createElement("ul");
sidebar.appendChild(ul)
const li1 = document.createElement("li");
li1.textContent = "Home"
li1.classList.add("button")
ul.appendChild(li1)
const li2 = document.createElement("li");
li2.textContent = "Today"
li2.classList.add("button")
ul.appendChild(li2)
const li3 = document.createElement("li");
li3.textContent = "This Week"
li3.classList.add("button")
ul.appendChild(li3)
const li4 = document.createElement("li");
li4.textContent = "Projects"
li4.classList.add("button")
ul.appendChild(li4)
}


