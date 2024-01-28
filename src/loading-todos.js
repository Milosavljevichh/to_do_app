import create_new_todo from "./create_new_todo"

export default function load_todos(category) {
    Object.keys(localStorage).forEach(key=>{
        if (key.includes('todo_')) {
           let todo = JSON.parse(localStorage.getItem(key))
           if (todo.in_category === category){
            create_new_todo(todo.id, todo.title, todo.description, todo.due_date, todo.priority)
           }
        }
    })
};