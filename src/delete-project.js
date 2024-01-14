import change_workspace_display from "./change-workspace-display";
import load_todos from "./loading-todos";

export default function delete_project() {
    const ul = document.getElementById('projects-list').querySelector('ul')

    if (ul.children.length > 1) {
        let category_title = document.getElementById('workspace-header').querySelector('h1').innerHTML;
        const removable_project = 'project_'+category_title;
        let project = document.getElementById('project_'+category_title);
        let next_li

        if (project.parentElement.nextElementSibling) {
            next_li = project.parentElement.nextSibling.querySelector('p');
        } else {
            next_li = project.parentElement.previousSibling.querySelector('p');
        }

        Object.keys(localStorage).forEach(key=>{
            if (key.includes('todo_')) {
                let todo = JSON.parse(localStorage.getItem(key))
                if (todo.in_category === category_title) {
                    localStorage.removeItem('todo_'+todo.title)
                }
            }
        })
        
        category_title = next_li.innerHTML;
        
        change_workspace_display(category_title)
        load_todos(category_title)
        project.parentElement.remove();
        localStorage.removeItem(removable_project);
        project = document.getElementById('project_'+category_title);
    }
}