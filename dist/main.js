/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ create_new_project)
/* harmony export */ });
/* harmony import */ var _change_workspace_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _loading_todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



function create_new_project(new_title){
    const current_title = document.getElementById('workspace-header').querySelector('h1');
    const ul = document.getElementById('projects-list').querySelector('ul');
    const title_input = document.getElementById('project-title');

    current_title.innerHTML = new_title;

    const li = document.createElement('li');
    const p = document.createElement('p');

    p.id = 'project_'+new_title;
    p.innerHTML = new_title;

    if (new_title === 'completed') {
        p.classList.add('completed-tasks')
    }

    p.addEventListener('click', ()=> {
        (0,_change_workspace_display__WEBPACK_IMPORTED_MODULE_0__["default"])(new_title);
        (0,_loading_todos__WEBPACK_IMPORTED_MODULE_1__["default"])(new_title)
    })
    
    
    li.appendChild(p);
    ul.appendChild(li);
    
    localStorage.setItem('project_'+new_title, new_title)
    
    title_input.value = '';
    (0,_change_workspace_display__WEBPACK_IMPORTED_MODULE_0__["default"])(new_title);
};

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ change_workspace_display)
/* harmony export */ });
function change_workspace_display(project_title) {
    const display = document.getElementById('workspace-display');
    const current_todo_list = display.querySelectorAll('#todo');
    const current_title = document.getElementById('workspace-header').querySelector('h1');

    current_title.innerHTML = project_title;

    current_todo_list.forEach(todo=>{
        todo.remove();
    });
};

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ load_todos)
/* harmony export */ });
/* harmony import */ var _create_new_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


function load_todos(category) {
    Object.keys(localStorage).forEach(key=>{
        if (key.includes('todo_')) {
           let todo = JSON.parse(localStorage.getItem(key))
           if (todo.in_category === category){
            (0,_create_new_todo__WEBPACK_IMPORTED_MODULE_0__["default"])(todo.id, todo.title, todo.description, todo.due_date, todo.priority, todo.in_category)
           }
        }
    })
};

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ create_new_todo)
/* harmony export */ });
/* harmony import */ var _add_todo_to_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


function create_new_todo(todoId, title, description, due_date, priority, in_category) {


    class Todo {
        constructor(title, description, due_date, priority, in_category) {
            this.id = todoId;
            this.title = title;
            this.description = description;
            this.due_date = due_date;
            this.priority = priority
            this.in_category = in_category;
        }
    }

    const new_todo = new Todo(title, description, due_date, priority, in_category);

    localStorage.setItem('todo_'+todoId, JSON.stringify(new_todo))

    let current_project = document.getElementById('workspace-header').querySelector('h1').innerHTML;
    if (new_todo.in_category === current_project) {
        (0,_add_todo_to_DOM__WEBPACK_IMPORTED_MODULE_0__["default"])(new_todo);
    }
};

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ add_todo_to_DOM)
/* harmony export */ });
/* harmony import */ var _delete_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _complete_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _edit_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _view_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);





function add_todo_to_DOM(todo) {
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
        (0,_delete_todo__WEBPACK_IMPORTED_MODULE_0__["default"])(card, todo);
    });

    complete_btn.addEventListener('click',()=>{
        (0,_complete_todo__WEBPACK_IMPORTED_MODULE_1__["default"])(card, todo);
    });

    edit_btn.addEventListener('click', ()=>{
        (0,_edit_todo__WEBPACK_IMPORTED_MODULE_2__["default"])(todo.id, todo.title, todo.description, todo.due_date, todo.priority, card);
    })

};

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ delete_todo)
/* harmony export */ });
function delete_todo(todo_DOM, todo_object) {
    todo_DOM.remove();
    localStorage.removeItem('todo_'+todo_object.id)
}

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ complete_todo)
/* harmony export */ });
/* harmony import */ var _create_new_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


function complete_todo(todo_DOM, todo_object) {
    todo_DOM.remove();
    localStorage.removeItem('todo_'+todo_object.id)
    ;(0,_create_new_todo__WEBPACK_IMPORTED_MODULE_0__["default"])(todo_object.id, todo_object.title, todo_object.description, todo_object.due_date, todo_object.priority, 'completed')
};

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ edit_todo)
/* harmony export */ });

function edit_todo(id, title, description, due_date, priority, original_todo) {
    const modal = document.getElementById('modal');
    const title_input = document.getElementById('todo-title')
    const description_input = document.getElementById('todo-description')
    const due_date_input = document.getElementById('todo-dueDate')
    const priority_input = document.getElementById('todo-priority')

    modal.checked = 'checked'

    title_input.value = title
    description_input.value = description
    due_date_input.value = due_date
    priority_input.value = priority
    
    original_todo.remove();
    localStorage.removeItem('todo_'+id)

    modal.disabled = 'disabled'
    

}

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ view_todo)
/* harmony export */ });
function view_todo(title, description, due_date, priority) {
    const modal = document.getElementById('modal');
    const title_input = document.getElementById('todo-title')
    const description_input = document.getElementById('todo-description')
    const due_date_input = document.getElementById('todo-dueDate')
    const priority_input = document.getElementById('todo-priority')
    const add_btn = document.getElementById('add-new-todo')

    modal.checked = 'checked'

    title_input.value = title
    description_input.value = description
    due_date_input.value = due_date
    priority_input.value = priority

    title_input.readOnly = true;
    description_input.readOnly = true;
    due_date_input.readOnly = true;
    priority_input.readOnly = true;

    if (modal.checked) {
        add_btn.style.display = 'none'
    }
}

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ load_projects)
/* harmony export */ });
/* harmony import */ var _create_new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


function load_projects() {

    Object.keys(localStorage).forEach(key=>{
        if (key.includes('project_')) {
            (0,_create_new_project__WEBPACK_IMPORTED_MODULE_0__["default"])(localStorage.getItem(key))
        }
    })
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ delete_project)
/* harmony export */ });
/* harmony import */ var _change_workspace_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _loading_todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



function delete_project() {
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
        
        (0,_change_workspace_display__WEBPACK_IMPORTED_MODULE_0__["default"])(category_title)
        ;(0,_loading_todos__WEBPACK_IMPORTED_MODULE_1__["default"])(category_title)
        project.parentElement.remove();
        localStorage.removeItem(removable_project);
        project = document.getElementById('project_'+category_title);
    }
}

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateProjectTitle)
/* harmony export */ });
function validateProjectTitle() {
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

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateTodo)
/* harmony export */ });
function validateTodo() {
    let add_todo = document.getElementById('add-new-todo');
    const title = document.getElementById('todo-title');
    let titleVal = title.value;

    if (titleVal.length < 2) {
        add_todo.style.display = 'none';
    } else {
        add_todo.removeAttribute('style')
    }
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _create_new_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _loading_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _loading_todos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _delete_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _change_workspace_display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _project_title_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _todo_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);









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
     ;(0,_project_title_validation__WEBPACK_IMPORTED_MODULE_6__["default"])();
    })

    title.addEventListener('input', ()=>{
        ;(0,_todo_validation__WEBPACK_IMPORTED_MODULE_7__["default"])();
    })

    add_project.addEventListener('click', ()=>{
    const new_project_title = title_input.value;
    if (new_project_title.length !== 0){
        (0,_create_new_project__WEBPACK_IMPORTED_MODULE_0__["default"])(new_project_title);
    } else {
        console.log('nope')
    }
});

delete_project_button.addEventListener('click', ()=>{
    (0,_delete_project__WEBPACK_IMPORTED_MODULE_4__["default"])();
})

localStorage.setItem('project_default', 'default')   
localStorage.setItem('project_completed', 'completed')   
;(0,_loading_projects__WEBPACK_IMPORTED_MODULE_2__["default"])()
;(0,_change_workspace_display__WEBPACK_IMPORTED_MODULE_5__["default"])('default')
;(0,_loading_todos__WEBPACK_IMPORTED_MODULE_3__["default"])('default')

new_todo_btn.addEventListener('click',  ()=>{
    modal.disabled = false
    todoId++;
    localStorage.setItem('todoId', todoId);
    (0,_create_new_todo__WEBPACK_IMPORTED_MODULE_1__["default"])(todoId, title.value, description.value, due_date.value, priority.value, document.getElementById('workspace-header').querySelector('h1').innerHTML);
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9jcmVhdGUtbmV3LXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9jaGFuZ2Utd29ya3NwYWNlLWRpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9sb2FkaW5nLXRvZG9zLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvY3JlYXRlX25ld190b2RvLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvYWRkLXRvZG8tdG8tRE9NLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvZGVsZXRlLXRvZG8uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9jb21wbGV0ZS10b2RvLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvZWRpdC10b2RvLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvdmlldy10b2RvLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvbG9hZGluZy1wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2RlbGV0ZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvcHJvamVjdC10aXRsZS12YWxpZGF0aW9uLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvdG9kby12YWxpZGF0aW9uLmpzIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFuZ2Vfd29ya3NwYWNlX2Rpc3BsYXkgZnJvbSBcIi4vY2hhbmdlLXdvcmtzcGFjZS1kaXNwbGF5XCI7XHJcbmltcG9ydCBsb2FkX3RvZG9zIGZyb20gXCIuL2xvYWRpbmctdG9kb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZV9uZXdfcHJvamVjdChuZXdfdGl0bGUpe1xyXG4gICAgY29uc3QgY3VycmVudF90aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3Jrc3BhY2UtaGVhZGVyJykucXVlcnlTZWxlY3RvcignaDEnKTtcclxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWxpc3QnKS5xdWVyeVNlbGVjdG9yKCd1bCcpO1xyXG4gICAgY29uc3QgdGl0bGVfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10aXRsZScpO1xyXG5cclxuICAgIGN1cnJlbnRfdGl0bGUuaW5uZXJIVE1MID0gbmV3X3RpdGxlO1xyXG5cclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgcC5pZCA9ICdwcm9qZWN0XycrbmV3X3RpdGxlO1xyXG4gICAgcC5pbm5lckhUTUwgPSBuZXdfdGl0bGU7XHJcblxyXG4gICAgaWYgKG5ld190aXRsZSA9PT0gJ2NvbXBsZXRlZCcpIHtcclxuICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC10YXNrcycpXHJcbiAgICB9XHJcblxyXG4gICAgcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4gICAgICAgIGNoYW5nZV93b3Jrc3BhY2VfZGlzcGxheShuZXdfdGl0bGUpO1xyXG4gICAgICAgIGxvYWRfdG9kb3MobmV3X3RpdGxlKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgXHJcbiAgICBsaS5hcHBlbmRDaGlsZChwKTtcclxuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIFxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RfJytuZXdfdGl0bGUsIG5ld190aXRsZSlcclxuICAgIFxyXG4gICAgdGl0bGVfaW5wdXQudmFsdWUgPSAnJztcclxuICAgIGNoYW5nZV93b3Jrc3BhY2VfZGlzcGxheShuZXdfdGl0bGUpO1xyXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYW5nZV93b3Jrc3BhY2VfZGlzcGxheShwcm9qZWN0X3RpdGxlKSB7XHJcbiAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmtzcGFjZS1kaXNwbGF5Jyk7XHJcbiAgICBjb25zdCBjdXJyZW50X3RvZG9fbGlzdCA9IGRpc3BsYXkucXVlcnlTZWxlY3RvckFsbCgnI3RvZG8nKTtcclxuICAgIGNvbnN0IGN1cnJlbnRfdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ya3NwYWNlLWhlYWRlcicpLnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XHJcblxyXG4gICAgY3VycmVudF90aXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0X3RpdGxlO1xyXG5cclxuICAgIGN1cnJlbnRfdG9kb19saXN0LmZvckVhY2godG9kbz0+e1xyXG4gICAgICAgIHRvZG8ucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxufTsiLCJpbXBvcnQgY3JlYXRlX25ld190b2RvIGZyb20gXCIuL2NyZWF0ZV9uZXdfdG9kb1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkX3RvZG9zKGNhdGVnb3J5KSB7XHJcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goa2V5PT57XHJcbiAgICAgICAgaWYgKGtleS5pbmNsdWRlcygndG9kb18nKSkge1xyXG4gICAgICAgICAgIGxldCB0b2RvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxyXG4gICAgICAgICAgIGlmICh0b2RvLmluX2NhdGVnb3J5ID09PSBjYXRlZ29yeSl7XHJcbiAgICAgICAgICAgIGNyZWF0ZV9uZXdfdG9kbyh0b2RvLmlkLCB0b2RvLnRpdGxlLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLmR1ZV9kYXRlLCB0b2RvLnByaW9yaXR5LCB0b2RvLmluX2NhdGVnb3J5KVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59OyIsImltcG9ydCBhZGRfdG9kb190b19ET00gZnJvbSBcIi4vYWRkLXRvZG8tdG8tRE9NXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVfbmV3X3RvZG8odG9kb0lkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZV9kYXRlLCBwcmlvcml0eSwgaW5fY2F0ZWdvcnkpIHtcclxuXHJcblxyXG4gICAgY2xhc3MgVG9kbyB7XHJcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVfZGF0ZSwgcHJpb3JpdHksIGluX2NhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0b2RvSWQ7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmR1ZV9kYXRlID0gZHVlX2RhdGU7XHJcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgICAgICB0aGlzLmluX2NhdGVnb3J5ID0gaW5fY2F0ZWdvcnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld190b2RvID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVfZGF0ZSwgcHJpb3JpdHksIGluX2NhdGVnb3J5KTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb18nK3RvZG9JZCwgSlNPTi5zdHJpbmdpZnkobmV3X3RvZG8pKVxyXG5cclxuICAgIGxldCBjdXJyZW50X3Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ya3NwYWNlLWhlYWRlcicpLnF1ZXJ5U2VsZWN0b3IoJ2gxJykuaW5uZXJIVE1MO1xyXG4gICAgaWYgKG5ld190b2RvLmluX2NhdGVnb3J5ID09PSBjdXJyZW50X3Byb2plY3QpIHtcclxuICAgICAgICBhZGRfdG9kb190b19ET00obmV3X3RvZG8pO1xyXG4gICAgfVxyXG59OyIsImltcG9ydCBkZWxldGVfdG9kbyBmcm9tIFwiLi9kZWxldGUtdG9kb1wiO1xyXG5pbXBvcnQgY29tcGxldGVfdG9kbyBmcm9tIFwiLi9jb21wbGV0ZS10b2RvXCI7XHJcbmltcG9ydCBlZGl0X3RvZG8gZnJvbSBcIi4vZWRpdC10b2RvXCI7XHJcbmltcG9ydCB2aWV3X3RvZG8gZnJvbSBcIi4vdmlldy10b2RvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRfdG9kb190b19ET00odG9kbykge1xyXG4gICAgY29uc3QgZGlzcGxheV9sZWZ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQtZGlzcGxheScpO1xyXG4gICAgY29uc3QgZGlzcGxheV9yaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodC1kaXNwbGF5Jyk7XHJcblxyXG4gICAgY29uc3QgbGVmdF90b2RvcyA9IGRpc3BsYXlfbGVmdC5xdWVyeVNlbGVjdG9yQWxsKCcjdG9kbycpO1xyXG4gICAgY29uc3QgcmlnaHRfdG9kb3MgPSBkaXNwbGF5X3JpZ2h0LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0b2RvJyk7XHJcblxyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3QgYnRuX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBsZWZ0X2J0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgcmlnaHRfYnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBjb21wbGV0ZV9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgY29uc3QgZWRpdF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgY29uc3Qgdmlld19idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgY29uc3QgZGVsZXRlX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBjb25zdCBjb21wbGV0ZWRfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgIGNvbnN0IGVkaXRfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgIGNvbnN0IHZpZXdfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgIGNvbnN0IGRlbGV0ZV9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG5cclxuXHJcbiAgICBjYXJkLmlkID0gJ3RvZG8nO1xyXG5cclxuICAgIHN3aXRjaCAodG9kby5wcmlvcml0eSkge1xyXG4gICAgICAgIGNhc2UgJ25vbmUnOiBcclxuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdub25lUHJpb3JpdHknKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlICdsb3cnOlxyXG4gICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdsb3dQcmlvcml0eScpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNhc2UgJ21lZGl1bSc6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdtZWRQcmlvcml0eScpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdoaWdoJzpcclxuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdoaWdoUHJpb3JpdHknKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdub25lUHJpb3JpdHknKTtcclxuICAgIH1cclxuXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxyXG4gICAgYnRuX2NvbnRhaW5lci5pZCA9ICd0b2RvLWJ0bnMnXHJcbiAgICBsZWZ0X2J0bnMuaWQgPSAnbGVmdCdcclxuICAgIHJpZ2h0X2J0bnMuaWQgPSAncmlnaHQnXHJcbiAgICBjb21wbGV0ZV9idG4uY2xhc3NMaXN0LmFkZCgnbmItYnV0dG9uJylcclxuICAgIGVkaXRfYnRuLmNsYXNzTGlzdC5hZGQoJ25iLWJ1dHRvbicpXHJcbiAgICB2aWV3X2J0bi5jbGFzc0xpc3QuYWRkKCduYi1idXR0b24nKVxyXG4gICAgZGVsZXRlX2J0bi5jbGFzc0xpc3QuYWRkKCduYi1idXR0b24nKVxyXG4gICAgY29tcGxldGVfYnRuLmNsYXNzTGlzdC5hZGQoJ2dyZWVuJylcclxuICAgIGVkaXRfYnRuLmNsYXNzTGlzdC5hZGQoJ2RlZmF1bHQnKVxyXG4gICAgdmlld19idG4uY2xhc3NMaXN0LmFkZCgnZGVmYXVsdCcpXHJcbiAgICBkZWxldGVfYnRuLmNsYXNzTGlzdC5hZGQoJ2JsdWUnKVxyXG4gICAgY29tcGxldGVfYnRuLmNsYXNzTGlzdC5hZGQoJ3JvdW5kZWQnKVxyXG4gICAgZWRpdF9idG4uY2xhc3NMaXN0LmFkZCgncm91bmRlZCcpXHJcbiAgICB2aWV3X2J0bi5jbGFzc0xpc3QuYWRkKCdyb3VuZGVkJylcclxuICAgIGRlbGV0ZV9idG4uY2xhc3NMaXN0LmFkZCgncm91bmRlZCcpXHJcblxyXG4gICAgY29tcGxldGVkX2ltZy5zcmMgPSAnaW1ncy9jaGVjay5wbmcnXHJcbiAgICBlZGl0X2ltZy5zcmMgPSAnaW1ncy9lZGl0LnBuZydcclxuICAgIHZpZXdfaW1nLnNyYyA9ICdpbWdzL3ZpZXcucG5nJ1xyXG4gICAgZGVsZXRlX2ltZy5zcmMgPSAnaW1ncy9kZWxldGUucG5nJ1xyXG5cclxuICAgIFxyXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gdG9kby50aXRsZTtcclxuICAgIGR1ZS5pbm5lckhUTUwgPSB0b2RvLmR1ZV9kYXRlO1xyXG4gICAgXHJcbiAgICBjb21wbGV0ZV9idG4uYXBwZW5kQ2hpbGQoY29tcGxldGVkX2ltZylcclxuICAgIGVkaXRfYnRuLmFwcGVuZENoaWxkKGVkaXRfaW1nKVxyXG4gICAgdmlld19idG4uYXBwZW5kQ2hpbGQodmlld19pbWcpXHJcbiAgICBkZWxldGVfYnRuLmFwcGVuZENoaWxkKGRlbGV0ZV9pbWcpXHJcbiAgICBsZWZ0X2J0bnMuYXBwZW5kKGNvbXBsZXRlX2J0biwgZWRpdF9idG4pXHJcbiAgICByaWdodF9idG5zLmFwcGVuZENoaWxkKGRlbGV0ZV9idG4pXHJcbiAgICBidG5fY29udGFpbmVyLmFwcGVuZChsZWZ0X2J0bnMsIHJpZ2h0X2J0bnMpXHJcbiAgICBjYXJkLmFwcGVuZCh0aXRsZSxkdWUsYnRuX2NvbnRhaW5lcilcclxuXHJcbiAgICBcclxuICAgIGlmIChsZWZ0X3RvZG9zLmxlbmd0aCA+IHJpZ2h0X3RvZG9zLmxlbmd0aCkge1xyXG4gICAgICAgIGRpc3BsYXlfcmlnaHQuYXBwZW5kQ2hpbGQoY2FyZClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGxheV9sZWZ0LmFwcGVuZENoaWxkKGNhcmQpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRlbGV0ZV9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgZGVsZXRlX3RvZG8oY2FyZCwgdG9kbyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb21wbGV0ZV9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgY29tcGxldGVfdG9kbyhjYXJkLCB0b2RvKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGVkaXRfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICBlZGl0X3RvZG8odG9kby5pZCwgdG9kby50aXRsZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5kdWVfZGF0ZSwgdG9kby5wcmlvcml0eSwgY2FyZCk7XHJcbiAgICB9KVxyXG5cclxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVfdG9kbyh0b2RvX0RPTSwgdG9kb19vYmplY3QpIHtcclxuICAgIHRvZG9fRE9NLnJlbW92ZSgpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RvZG9fJyt0b2RvX29iamVjdC5pZClcclxufSIsImltcG9ydCBjcmVhdGVfbmV3X3RvZG8gZnJvbSBcIi4vY3JlYXRlX25ld190b2RvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wbGV0ZV90b2RvKHRvZG9fRE9NLCB0b2RvX29iamVjdCkge1xyXG4gICAgdG9kb19ET00ucmVtb3ZlKCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9kb18nK3RvZG9fb2JqZWN0LmlkKVxyXG4gICAgY3JlYXRlX25ld190b2RvKHRvZG9fb2JqZWN0LmlkLCB0b2RvX29iamVjdC50aXRsZSwgdG9kb19vYmplY3QuZGVzY3JpcHRpb24sIHRvZG9fb2JqZWN0LmR1ZV9kYXRlLCB0b2RvX29iamVjdC5wcmlvcml0eSwgJ2NvbXBsZXRlZCcpXHJcbn07IiwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVkaXRfdG9kbyhpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVfZGF0ZSwgcHJpb3JpdHksIG9yaWdpbmFsX3RvZG8pIHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XHJcbiAgICBjb25zdCB0aXRsZV9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXRpdGxlJylcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZGVzY3JpcHRpb24nKVxyXG4gICAgY29uc3QgZHVlX2RhdGVfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kdWVEYXRlJylcclxuICAgIGNvbnN0IHByaW9yaXR5X2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tcHJpb3JpdHknKVxyXG5cclxuICAgIG1vZGFsLmNoZWNrZWQgPSAnY2hlY2tlZCdcclxuXHJcbiAgICB0aXRsZV9pbnB1dC52YWx1ZSA9IHRpdGxlXHJcbiAgICBkZXNjcmlwdGlvbl9pbnB1dC52YWx1ZSA9IGRlc2NyaXB0aW9uXHJcbiAgICBkdWVfZGF0ZV9pbnB1dC52YWx1ZSA9IGR1ZV9kYXRlXHJcbiAgICBwcmlvcml0eV9pbnB1dC52YWx1ZSA9IHByaW9yaXR5XHJcbiAgICBcclxuICAgIG9yaWdpbmFsX3RvZG8ucmVtb3ZlKCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9kb18nK2lkKVxyXG5cclxuICAgIG1vZGFsLmRpc2FibGVkID0gJ2Rpc2FibGVkJ1xyXG4gICAgXHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlld190b2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlX2RhdGUsIHByaW9yaXR5KSB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4gICAgY29uc3QgdGl0bGVfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZScpXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbl9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWRlc2NyaXB0aW9uJylcclxuICAgIGNvbnN0IGR1ZV9kYXRlX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZHVlRGF0ZScpXHJcbiAgICBjb25zdCBwcmlvcml0eV9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXByaW9yaXR5JylcclxuICAgIGNvbnN0IGFkZF9idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLW5ldy10b2RvJylcclxuXHJcbiAgICBtb2RhbC5jaGVja2VkID0gJ2NoZWNrZWQnXHJcblxyXG4gICAgdGl0bGVfaW5wdXQudmFsdWUgPSB0aXRsZVxyXG4gICAgZGVzY3JpcHRpb25faW5wdXQudmFsdWUgPSBkZXNjcmlwdGlvblxyXG4gICAgZHVlX2RhdGVfaW5wdXQudmFsdWUgPSBkdWVfZGF0ZVxyXG4gICAgcHJpb3JpdHlfaW5wdXQudmFsdWUgPSBwcmlvcml0eVxyXG5cclxuICAgIHRpdGxlX2lucHV0LnJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgIGRlc2NyaXB0aW9uX2lucHV0LnJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgIGR1ZV9kYXRlX2lucHV0LnJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgIHByaW9yaXR5X2lucHV0LnJlYWRPbmx5ID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAobW9kYWwuY2hlY2tlZCkge1xyXG4gICAgICAgIGFkZF9idG4uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IGNyZWF0ZV9uZXdfcHJvamVjdCBmcm9tIFwiLi9jcmVhdGUtbmV3LXByb2plY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZF9wcm9qZWN0cygpIHtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goa2V5PT57XHJcbiAgICAgICAgaWYgKGtleS5pbmNsdWRlcygncHJvamVjdF8nKSkge1xyXG4gICAgICAgICAgICBjcmVhdGVfbmV3X3Byb2plY3QobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59OyIsImltcG9ydCBjaGFuZ2Vfd29ya3NwYWNlX2Rpc3BsYXkgZnJvbSBcIi4vY2hhbmdlLXdvcmtzcGFjZS1kaXNwbGF5XCI7XHJcbmltcG9ydCBsb2FkX3RvZG9zIGZyb20gXCIuL2xvYWRpbmctdG9kb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZV9wcm9qZWN0KCkge1xyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtbGlzdCcpLnF1ZXJ5U2VsZWN0b3IoJ3VsJylcclxuXHJcbiAgICBpZiAodWwuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGxldCBjYXRlZ29yeV90aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3Jrc3BhY2UtaGVhZGVyJykucXVlcnlTZWxlY3RvcignaDEnKS5pbm5lckhUTUw7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZhYmxlX3Byb2plY3QgPSAncHJvamVjdF8nK2NhdGVnb3J5X3RpdGxlO1xyXG4gICAgICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfJytjYXRlZ29yeV90aXRsZSk7XHJcbiAgICAgICAgbGV0IG5leHRfbGlcclxuXHJcbiAgICAgICAgaWYgKHByb2plY3QucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcclxuICAgICAgICAgICAgbmV4dF9saSA9IHByb2plY3QucGFyZW50RWxlbWVudC5uZXh0U2libGluZy5xdWVyeVNlbGVjdG9yKCdwJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV4dF9saSA9IHByb2plY3QucGFyZW50RWxlbWVudC5wcmV2aW91c1NpYmxpbmcucXVlcnlTZWxlY3RvcigncCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKGtleT0+e1xyXG4gICAgICAgICAgICBpZiAoa2V5LmluY2x1ZGVzKCd0b2RvXycpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9kbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSlcclxuICAgICAgICAgICAgICAgIGlmICh0b2RvLmluX2NhdGVnb3J5ID09PSBjYXRlZ29yeV90aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2RvXycrdG9kby50aXRsZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgY2F0ZWdvcnlfdGl0bGUgPSBuZXh0X2xpLmlubmVySFRNTDtcclxuICAgICAgICBcclxuICAgICAgICBjaGFuZ2Vfd29ya3NwYWNlX2Rpc3BsYXkoY2F0ZWdvcnlfdGl0bGUpXHJcbiAgICAgICAgbG9hZF90b2RvcyhjYXRlZ29yeV90aXRsZSlcclxuICAgICAgICBwcm9qZWN0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocmVtb3ZhYmxlX3Byb2plY3QpO1xyXG4gICAgICAgIHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdF8nK2NhdGVnb3J5X3RpdGxlKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlUHJvamVjdFRpdGxlKCkge1xyXG4gICAgY29uc3QgYWRkX3Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtdGl0bGUnKTtcclxuICAgIGNvbnN0IHRpdGxlX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdGl0bGUnKTtcclxuICAgIGxldCB0aXRsZSA9IHRpdGxlX2lucHV0LnZhbHVlO1xyXG4gICAgbGV0IHByb2plY3RFeGlzdHMgPSBmYWxzZTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICBpZiAoa2V5ID09PSAncHJvamVjdF8nK3RpdGxlKSB7XHJcbiAgICAgICAgICAgIHByb2plY3RFeGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aXRsZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmICh0aXRsZS5sZW5ndGggPCAyIHx8IHByb2plY3RFeGlzdHMgPT09IHRydWUpIHtcclxuICAgICAgICBhZGRfcHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhZGRfcHJvamVjdC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcclxuICAgIH1cclxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZVRvZG8oKSB7XHJcbiAgICBsZXQgYWRkX3RvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLW5ldy10b2RvJyk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXRpdGxlJyk7XHJcbiAgICBsZXQgdGl0bGVWYWwgPSB0aXRsZS52YWx1ZTtcclxuXHJcbiAgICBpZiAodGl0bGVWYWwubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIGFkZF90b2RvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFkZF90b2RvLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlX25ld19wcm9qZWN0IGZyb20gXCIuL2NyZWF0ZS1uZXctcHJvamVjdFwiXHJcbmltcG9ydCBjcmVhdGVfbmV3X3RvZG8gZnJvbSBcIi4vY3JlYXRlX25ld190b2RvXCI7XHJcbmltcG9ydCBsb2FkX3Byb2plY3RzIGZyb20gXCIuL2xvYWRpbmctcHJvamVjdHNcIjtcclxuaW1wb3J0IGxvYWRfdG9kb3MgZnJvbSBcIi4vbG9hZGluZy10b2Rvc1wiO1xyXG5pbXBvcnQgZGVsZXRlX3Byb2plY3QgZnJvbSBcIi4vZGVsZXRlLXByb2plY3RcIjtcclxuaW1wb3J0IGNoYW5nZV93b3Jrc3BhY2VfZGlzcGxheSBmcm9tIFwiLi9jaGFuZ2Utd29ya3NwYWNlLWRpc3BsYXlcIjtcclxuaW1wb3J0IHZhbGlkYXRlUHJvamVjdFRpdGxlIGZyb20gXCIuL3Byb2plY3QtdGl0bGUtdmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgdmFsaWRhdGVUb2RvIGZyb20gXCIuL3RvZG8tdmFsaWRhdGlvblwiO1xyXG5cclxuIGNvbnN0IGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QnKTtcclxuIGNvbnN0IG1vZGFsX25ld190b2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLW5ldy10b2RvJyk7XHJcbiBjb25zdCBhZGRfcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC10aXRsZScpO1xyXG4gY29uc3QgdGl0bGVfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10aXRsZScpO1xyXG4gY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZScpO1xyXG4gY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kZXNjcmlwdGlvbicpO1xyXG4gY29uc3QgZHVlX2RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kdWVEYXRlJyk7XHJcbiBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXByaW9yaXR5Jyk7XHJcbiBjb25zdCBkZWxldGVfcHJvamVjdF9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLXByb2plY3QnKVxyXG4gY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKVxyXG4gY29uc3QgbmV3X3RvZG9fYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1uZXctdG9kbycpO1xyXG4gY29uc3QgYWRkX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbmV3LXRvZG8nKVxyXG4gXHJcbiBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGFkZF9wcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiB9KVxyXG5cclxuICAgIG1vZGFsX25ld190b2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICBhZGRfYnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KVxyXG5cclxuIFxyXG4gdGl0bGVfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKT0+e1xyXG4gICAgIHZhbGlkYXRlUHJvamVjdFRpdGxlKCk7XHJcbiAgICB9KVxyXG5cclxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCk9PntcclxuICAgICAgICB2YWxpZGF0ZVRvZG8oKTtcclxuICAgIH0pXHJcblxyXG4gICAgYWRkX3Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgY29uc3QgbmV3X3Byb2plY3RfdGl0bGUgPSB0aXRsZV9pbnB1dC52YWx1ZTtcclxuICAgIGlmIChuZXdfcHJvamVjdF90aXRsZS5sZW5ndGggIT09IDApe1xyXG4gICAgICAgIGNyZWF0ZV9uZXdfcHJvamVjdChuZXdfcHJvamVjdF90aXRsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdub3BlJylcclxuICAgIH1cclxufSk7XHJcblxyXG5kZWxldGVfcHJvamVjdF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgZGVsZXRlX3Byb2plY3QoKTtcclxufSlcclxuXHJcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0X2RlZmF1bHQnLCAnZGVmYXVsdCcpICAgXHJcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0X2NvbXBsZXRlZCcsICdjb21wbGV0ZWQnKSAgIFxyXG5sb2FkX3Byb2plY3RzKClcclxuY2hhbmdlX3dvcmtzcGFjZV9kaXNwbGF5KCdkZWZhdWx0JylcclxubG9hZF90b2RvcygnZGVmYXVsdCcpXHJcblxyXG5uZXdfdG9kb19idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAgKCk9PntcclxuICAgIG1vZGFsLmRpc2FibGVkID0gZmFsc2VcclxuICAgIHRvZG9JZCsrO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9JZCcsIHRvZG9JZCk7XHJcbiAgICBjcmVhdGVfbmV3X3RvZG8odG9kb0lkLCB0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZV9kYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmtzcGFjZS1oZWFkZXInKS5xdWVyeVNlbGVjdG9yKCdoMScpLmlubmVySFRNTCk7XHJcbn0pO1xyXG5cclxuLy9kaXNhYmxlIGVmZmVjdHMgdGhhdCBcInZpZXctdG9kb1wiIGZ1bmN0aW9uIGNyZWF0ZXNcclxubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgdGl0bGUudmFsdWUgPSAnJztcclxuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gJyc7XHJcbiAgICBkdWVfZGF0ZS52YWx1ZSA9ICcnO1xyXG4gICAgcHJpb3JpdHkudmFsdWUgPSAnTm9uZSdcclxuICAgIHRpdGxlLnJlYWRPbmx5ID0gZmFsc2U7XHJcbiAgICBkZXNjcmlwdGlvbi5yZWFkT25seSA9IGZhbHNlO1xyXG4gICAgZHVlX2RhdGUucmVhZE9ubHkgPSBmYWxzZTtcclxuICAgIHByaW9yaXR5LnJlYWRPbmx5ID0gZmFsc2U7XHJcbn0pXHJcblxyXG4gICAgbGV0IGlkRXhpc3RzO1xyXG4gICAgbGV0IHRvZG9JZCA9IDA7XHJcblxyXG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgaWYgKGtleSA9PT0gJ3RvZG9JZCcpIHtcclxuICAgICAgICAgICAgaWRFeGlzdHMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICBcclxuICAgIGlmICghaWRFeGlzdHMpIHtcclxuICAgICAgICB0b2RvSWQgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2RvSWQgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9JZCcpKTtcclxuICAgIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=