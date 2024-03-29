import delete_todo from "./delete-todo";
import complete_todo from "./complete-todo";
import edit_todo from "./edit-todo";
import view_todo from "./view-todo";

export default function add_todo_to_DOM(todo) {
    const display_left = document.getElementById('left-display');
    const display_right = document.getElementById('right-display');

    const left_todos = display_left.querySelectorAll('#todo');
    const right_todos = display_right.querySelectorAll('#todo');

    const card = document.createElement('div')
    const title = document.createElement('h2')
    const due = document.createElement('p')
    const btn_container = document.createElement('div')
    const left_btns = document.createElement('div')
    const right_btns = document.createElement('div')
    const complete_btn = document.createElement('button')
    const edit_btn = document.createElement('button')
    const view_btn = document.createElement('button')
    const delete_btn = document.createElement('button')
    const completed_img = document.createElement('img')
    const edit_img = document.createElement('img')
    const view_img = document.createElement('img')
    const delete_img = document.createElement('img')


    card.id = 'todo';

    switch (todo.priority) {
        case 'none': 
            card.classList.add('nonePriority');
            break;
            
            case 'low':
                card.classList.add('lowPriority');
                break;
                
                case 'medium':
                    card.classList.add('medPriority');
            break;
        case 'high':
            card.classList.add('highPriority');
            break;
        default:
            card.classList.add('nonePriority');
    }

    card.classList.add('card')
    btn_container.id = 'todo-btns'
    left_btns.id = 'left'
    right_btns.id = 'right'
    complete_btn.classList.add('nb-button')
    edit_btn.classList.add('nb-button')
    view_btn.classList.add('nb-button')
    delete_btn.classList.add('nb-button')
    complete_btn.classList.add('green')
    edit_btn.classList.add('default')
    view_btn.classList.add('default')
    delete_btn.classList.add('blue')
    complete_btn.classList.add('rounded')
    edit_btn.classList.add('rounded')
    view_btn.classList.add('rounded')
    delete_btn.classList.add('rounded')

    completed_img.src = 'imgs/check.png'
    edit_img.src = 'imgs/edit.png'
    view_img.src = 'imgs/view.png'
    delete_img.src = 'imgs/delete.png'

    
    title.innerHTML = todo.title;
    due.innerHTML = todo.due_date;
    
    complete_btn.appendChild(completed_img)
    edit_btn.appendChild(edit_img)
    view_btn.appendChild(view_img)
    delete_btn.appendChild(delete_img)
    left_btns.append(complete_btn, edit_btn)
    right_btns.appendChild(delete_btn)
    btn_container.append(left_btns, right_btns)
    card.append(title,due,btn_container)

    
    if (left_todos.length > right_todos.length) {
        display_right.appendChild(card)
    } else {
        display_left.appendChild(card)
    }
    
    delete_btn.addEventListener('click',()=>{
        delete_todo(card, todo);
    });

    complete_btn.addEventListener('click',()=>{
        complete_todo(card, todo);
    });

    edit_btn.addEventListener('click', ()=>{
        edit_todo(todo.id, todo.title, todo.description, todo.due_date, todo.priority, card);
    })

};