export {Todo,Project}
class Todo {
  constructor(title, description, dueDate, priority,status) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status
  }

  get title() {
    return this._title;
  }
  set title(title) {
    this._title = title;
  }

  get description() {
    return this._description;
  }
  set description(description) {
    this._description = description;
  }

  get dueDate() {
    return this._dueDate;
  }
  set dueDate(dueDate) {
    this._dueDate = dueDate;
  }

  get priority() {
    return this._priority;
  }
  set priority(priority) {
    this._priority = priority;
  }

  get status() {
    return this._status;
  }
  set status(status) {
    this._status = status;
  }
  
}

class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.todos = [];
  }

  get title() {
    return this._title;
  }
  set title(title) {
    this._title = title;
  }

  get description() {
    return this._description;
  }
  set description(description) {
    this._description = description;
  }

  addTodo(todo) {
    this.todos.push(todo);

  }
  removeTodo(index){
   delete this.todos[index]
  }
  
}

let todo2 = new Todo("AAA", "Poop ", "2", "High");

let project1 = new Project("POO","LOLOLOLOLOL");
project1.addTodo(todo2);



