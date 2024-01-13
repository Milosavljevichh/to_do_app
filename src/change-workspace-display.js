export default function change_workspace_display(project_title) {
    const display = document.getElementById('workspace-display');
    const current_todo_list = display.querySelectorAll('#todo');
    const current_title = document.getElementById('workspace-header').querySelector('h1');

    current_title.innerHTML = project_title;

    current_todo_list.forEach(todo=>{
        todo.remove();
    });
};