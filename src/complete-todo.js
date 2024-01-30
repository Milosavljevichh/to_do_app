import create_new_todo from "./create_new_todo";

export default function complete_todo(todo_DOM, todo_object) {
    todo_DOM.remove();
    localStorage.removeItem('todo_'+todo_object.id)
    create_new_todo(todo_object.id, todo_object.title, todo_object.description, todo_object.due_date, todo_object.priority, 'completed')
};