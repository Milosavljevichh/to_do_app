import create_new_project from "./create-new-project"
import create_new_todo from "./create_new_todo";

 const add_project = document.getElementById('add-project-title');
 const title_input = document.getElementById('project-title');
 const title = document.getElementById('todo-title');
 const description = document.getElementById('todo-description');
 const due_date = document.getElementById('todo-dueDate');
 const priority = document.getElementById('todo-priority');
 const in_category = document.getElementById('workspace-header').querySelector('h1').innerHTML;

 const new_todo_btn = document.getElementById('add-new-todo');

add_project.addEventListener('click', ()=>{
    const new_project_title = title_input.value;
    create_new_project(new_project_title);
});

new_todo_btn.addEventListener('click',  ()=>{
    create_new_todo(title, description, due_date, priority, in_category);
})

create_new_project('default');