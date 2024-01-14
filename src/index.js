import create_new_project from "./create-new-project"
import create_new_todo from "./create_new_todo";
import load_projects from "./loading-projects";
import load_todos from "./loading-todos";

 const add_project = document.getElementById('add-project-title');
 const title_input = document.getElementById('project-title');
 const title = document.getElementById('todo-title');
 const description = document.getElementById('todo-description');
 const due_date = document.getElementById('todo-dueDate');
 const priority = document.getElementById('todo-priority');
 
 const new_todo_btn = document.getElementById('add-new-todo');
 
add_project.addEventListener('click', ()=>{
    const new_project_title = title_input.value;
    create_new_project(new_project_title);
});

localStorage.setItem('project_default', 'default')
load_projects()
load_todos('default')


new_todo_btn.addEventListener('click',  ()=>{
    create_new_todo(title.value, description.value, due_date.value, priority.value);
});