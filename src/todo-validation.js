export default function validateTodo() {
    let add_todo = document.getElementById('add-new-todo');
    const title = document.getElementById('todo-title');
    let titleVal = title.value;

    if (titleVal.length < 2) {
        add_todo.style.display = 'none';
    } else {
        add_todo.removeAttribute('style')
    }
}