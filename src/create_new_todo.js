import add_todo_to_DOM from "./add-todo-to-DOM";

export default function create_new_todo(title, description, due_date, priority, in_category) {

    class Todo {
        constructor(title, description, due_date, priority, in_category) {
            this.title = title;
            this.description = description;
            this.due_date = due_date;
            this.priority = priority
            this.in_category = in_category
        }
    }

    const new_todo = new Todo(title.value, description.value, due_date.value, priority.value, in_category);
    add_todo_to_DOM(new_todo);
};