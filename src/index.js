import './style.css';
//Creating a object
const toDoFactory = (title,description,dueDate,priority,indexValue,projectName,projectDescription,project)=>{
    return{_title:title,
         _description:description
         , _dueDate:dueDate
         ,_priority:priority
         ,_indexValue:indexValue,
         _projectName:projectName,
         _projectDescription:projectDescription,
         _project:project,
         get title(){
            return this._title
         },
         set title(value){
            this._title = value;
         },
         get dueDate(){
            return this._dueDate
         },
         set  description(value){
            this._description = value
         },
         get description(){
            return this._description
         },
         set  description(value){
            this._description = value
         },
         get priority(){
            return this._priority
         },
         set  priority(value){
            this._description = value
         },
         get indexValue(){
            return this._indexValue
         },
         set  indexValue(value){
            this._indexValue = value
         },
         get projectName(){
            return this._title
         },
         set title(value){
            this._title = value;
         },
         get title(){
            return this._title
         },
         set title(value){
            this._title = value;
         },
         get title(){
            return this._title
         },
         set title(value){
            this._title = value;
         },
    }
}
const todo = toDoFactory("random title","meow meow","23/2","High",12)
console.log(todo)