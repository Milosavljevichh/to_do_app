export default function validateProjectTitle() {
    const add_project = document.getElementById('add-project-title');
    const title_input = document.getElementById('project-title');
    let title = title_input.value;
    let projectExists = false;

    Object.keys(localStorage).forEach(key => {
        if (key === 'project_'+title) {
            projectExists = true;
            console.log(title)
        }
      });

    if (title.length < 2 || projectExists === true) {
        add_project.style.display = 'none';
    } else {
        add_project.removeAttribute('style')
    }
};