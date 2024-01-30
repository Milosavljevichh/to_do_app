import add_todo_to_DOM from "./add-todo-to-DOM";

export default function create_new_todo(todoId, title, description, due_date, priority, in_category) {


    class Todo {
        constructor(title, description, due_date, priority, in_category) {
            this.id = todoId;
            this.title = title;
            this.description = description;
            this.due_date = due_date;
            this.priority = priority
            this.in_category = in_category;
        }
    }

    const new_todo = new Todo(title, description, due_date, priority, in_category);

    localStorage.setItem('todo_'+todoId, JSON.stringify(new_todo))

    let current_project = document.getElementById('workspace-header').querySelector('h1').innerHTML;
    if (new_todo.in_category === current_project) {
        add_todo_to_DOM(new_todo);
    }
};