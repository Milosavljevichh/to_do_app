import create_new_project from "./create-new-project"

export default function load_projects() {

    Object.keys(localStorage).forEach(key=>{
        if (key.includes('project_')) {
            create_new_project(localStorage.getItem(key))
        }
    })
};