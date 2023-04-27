export {Todo,Project}
class Todo {
  constructor(title, dueDate, priority) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = "not done"
  }

  get title() {
    return this._title;
  }
  set title(title) {
    this._title = title;
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
  constructor(title) {
    this.title = title;
    this.todos = [];
  }
  get index() {
    return this._index;
  }
  set index(index) {
    this._index = index;
  }
  addTodo(todo) {
    this.todos.push(todo);

  }
  
}
