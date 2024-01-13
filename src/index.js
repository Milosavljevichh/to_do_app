import create_new_project from "./create-new-project"

 const add_project = document.getElementById('add-project-title');
 const title_input = document.getElementById('project-title');

add_project.addEventListener('click', ()=>{
    const new_project_title = title_input.value;
    create_new_project(new_project_title);
})