import add_todo_to_DOM from "./add-todo-to-DOM";

export default function create_new_todo(todoId, title, description, due_date, priority) {


    class Todo {
        constructor(title, description, due_date, priority) {
            this.id = todoId;
            this.title = title;
            this.description = description;
            this.due_date = due_date;
            this.priority = priority
            this.in_category = document.getElementById('workspace-header').querySelector('h1').innerHTML;
        }
    }

    const new_todo = new Todo(title, description, due_date, priority);

    localStorage.setItem('todo_'+todoId, JSON.stringify(new_todo))

    add_todo_to_DOM(new_todo);
};