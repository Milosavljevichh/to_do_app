import create_new_project from "./create-new-project"
import create_new_todo from "./create_new_todo";
import load_projects from "./loading-projects";
import load_todos from "./loading-todos";
import delete_project from "./delete-project";
import change_workspace_display from "./change-workspace-display";
import validateProjectTitle from "./project-title-validation";
import validateTodo from "./todo-validation";

 const a = document.getElementById('add-project');
 const modal_new_todo = document.getElementById('modal-new-todo');
 const add_project = document.getElementById('add-project-title');
 const title_input = document.getElementById('project-title');
 const title = document.getElementById('todo-title');
 const description = document.getElementById('todo-description');
 const due_date = document.getElementById('todo-dueDate');
 const priority = document.getElementById('todo-priority');
 const delete_project_button = document.getElementById('delete-project')
 const modal = document.getElementById('modal')
 const new_todo_btn = document.getElementById('add-new-todo');
 const add_btn = document.getElementById('add-new-todo')
 
 a.addEventListener('click', ()=>{
    add_project.style.display = 'none';
 })

    modal_new_todo.addEventListener('click', ()=>{
        add_btn.style.display = 'none';
    })

 
 title_input.addEventListener('input', ()=>{
     validateProjectTitle();
    })

    title.addEventListener('input', ()=>{
        validateTodo();
    })

    add_project.addEventListener('click', ()=>{
    const new_project_title = title_input.value;
    if (new_project_title.length !== 0){
        create_new_project(new_project_title);
    } else {
        console.log('nope')
    }
});

delete_project_button.addEventListener('click', ()=>{
    delete_project();
})

localStorage.setItem('project_default', 'default')   
localStorage.setItem('project_completed', 'completed')   
load_projects()
change_workspace_display('default')
load_todos('default')

new_todo_btn.addEventListener('click',  ()=>{
    modal.disabled = false
    todoId++;
    localStorage.setItem('todoId', todoId);
    create_new_todo(todoId, title.value, description.value, due_date.value, priority.value, document.getElementById('workspace-header').querySelector('h1').innerHTML);
});

//disable effects that "view-todo" function creates
modal.addEventListener('click', ()=>{
    title.value = '';
    description.value = '';
    due_date.value = '';
    priority.value = 'None'
    title.readOnly = false;
    description.readOnly = false;
    due_date.readOnly = false;
    priority.readOnly = false;
})

    let idExists;
    let todoId = 0;

    Object.keys(localStorage).forEach(key => {
        if (key === 'todoId') {
            idExists = true;
        }
      });
    
    if (!idExists) {
        todoId = 0;
    } else {
        todoId = Number(localStorage.getItem('todoId'));
    }