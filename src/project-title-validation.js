export default function validateProjectTitle() {
    const add_project = document.getElementById('add-project-title');
    const title_input = document.getElementById('project-title');
    let title = title_input.value;

    if (title.length < 2) {
        add_project.style.display = 'none';
    } else {
        add_project.removeAttribute('style')
    }
};