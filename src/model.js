export {Todo,Project}
class Todo {
  constructor(title, dueDate, priority,status) {
    this.title = title;
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
  constructor(title,index) {
    this.title = title;
    this.index = index
    this.todos = [];
  }
  get index() {
    return this._index;
  }
  set index(index) {
    this._index = index;
  }
  get title() {
    return this._title;
  }
  set title(title) {
    this._title = title;
  }

  addTodo(todo) {
    this.todos.push(todo);

  }
  
}
