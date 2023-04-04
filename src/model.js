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
  constructor(title, description,dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate
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

  get dueDate() {
    return this._dueDate;
  }
  set dueDate(dueDate) {
    this._dueDate = dueDate;
  }
  addTodo(todo) {
    this.todos.push(todo);

  }
  
}




