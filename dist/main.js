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
            (0,_create_new_todo__WEBPACK_IMPORTED_MODULE_0__["default"])(todo.id, todo.title, todo.description, todo.due_date, todo.priority)
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


function create_new_todo(todoId, title, description, due_date, priority) {


    class Todo {
        constructor(title, description, due_date, priority) {
            this.id = todoId;
            this.title = title;
            this.description = description;
            this.due_date = due_date;
            this.priority = priority
            this.in_category = document.getElementById('workspace-header').querySelector('h1').innerHTML;
        }
    }

    const new_todo = new Todo(title, description, due_date, priority);

    localStorage.setItem('todo_'+todoId, JSON.stringify(new_todo))

    ;(0,_add_todo_to_DOM__WEBPACK_IMPORTED_MODULE_0__["default"])(new_todo);
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
function complete_todo(todo_DOM, todo_object) {
    todo_DOM.remove();
    localStorage.removeItem('todo_'+todo_object.id)
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
 
add_project.addEventListener('click', ()=>{
    const new_project_title = title_input.value;
    (0,_create_new_project__WEBPACK_IMPORTED_MODULE_0__["default"])(new_project_title);
});

delete_project_button.addEventListener('click', ()=>{
    (0,_delete_project__WEBPACK_IMPORTED_MODULE_4__["default"])();
})

localStorage.setItem('project_default', 'default')
;(0,_loading_projects__WEBPACK_IMPORTED_MODULE_2__["default"])()
;(0,_change_workspace_display__WEBPACK_IMPORTED_MODULE_5__["default"])('default')
;(0,_loading_todos__WEBPACK_IMPORTED_MODULE_3__["default"])('default')

new_todo_btn.addEventListener('click',  ()=>{
    modal.disabled = false
    todoId++;
    localStorage.setItem('todoId', todoId);
    (0,_create_new_todo__WEBPACK_IMPORTED_MODULE_1__["default"])(todoId, title.value, description.value, due_date.value, priority.value);
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
    add_btn.style.display = 'block'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xRDtBQUNMO0FBQ0Q7QUFDTjtBQUNLO0FBQ29CO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUFrQjtBQUN0QixDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUksMkRBQWM7QUFDbEIsQ0FBQztBQUNEO0FBQ0E7QUFDQSw4REFBYTtBQUNiLHNFQUF3QjtBQUN4QiwyREFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFlO0FBQ25CLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9jcmVhdGUtbmV3LXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9jaGFuZ2Utd29ya3NwYWNlLWRpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9sb2FkaW5nLXRvZG9zLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvY3JlYXRlX25ld190b2RvLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvYWRkLXRvZG8tdG8tRE9NLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvZGVsZXRlLXRvZG8uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9jb21wbGV0ZS10b2RvLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvZWRpdC10b2RvLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvdmlldy10b2RvLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvbG9hZGluZy1wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2RlbGV0ZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFuZ2Vfd29ya3NwYWNlX2Rpc3BsYXkgZnJvbSBcIi4vY2hhbmdlLXdvcmtzcGFjZS1kaXNwbGF5XCI7XHJcbmltcG9ydCBsb2FkX3RvZG9zIGZyb20gXCIuL2xvYWRpbmctdG9kb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZV9uZXdfcHJvamVjdChuZXdfdGl0bGUpe1xyXG4gICAgY29uc3QgY3VycmVudF90aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3Jrc3BhY2UtaGVhZGVyJykucXVlcnlTZWxlY3RvcignaDEnKTtcclxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWxpc3QnKS5xdWVyeVNlbGVjdG9yKCd1bCcpO1xyXG4gICAgY29uc3QgdGl0bGVfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10aXRsZScpO1xyXG5cclxuICAgIGN1cnJlbnRfdGl0bGUuaW5uZXJIVE1MID0gbmV3X3RpdGxlO1xyXG5cclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgcC5pZCA9ICdwcm9qZWN0XycrbmV3X3RpdGxlO1xyXG4gICAgcC5pbm5lckhUTUwgPSBuZXdfdGl0bGU7XHJcblxyXG4gICAgcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4gICAgICAgIGNoYW5nZV93b3Jrc3BhY2VfZGlzcGxheShuZXdfdGl0bGUpO1xyXG4gICAgICAgIGxvYWRfdG9kb3MobmV3X3RpdGxlKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgbGkuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICBcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0XycrbmV3X3RpdGxlLCBuZXdfdGl0bGUpXHJcbiAgICBcclxuICAgIHRpdGxlX2lucHV0LnZhbHVlID0gJyc7XHJcbiAgICBjaGFuZ2Vfd29ya3NwYWNlX2Rpc3BsYXkobmV3X3RpdGxlKTtcclxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFuZ2Vfd29ya3NwYWNlX2Rpc3BsYXkocHJvamVjdF90aXRsZSkge1xyXG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3Jrc3BhY2UtZGlzcGxheScpO1xyXG4gICAgY29uc3QgY3VycmVudF90b2RvX2xpc3QgPSBkaXNwbGF5LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0b2RvJyk7XHJcbiAgICBjb25zdCBjdXJyZW50X3RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmtzcGFjZS1oZWFkZXInKS5xdWVyeVNlbGVjdG9yKCdoMScpO1xyXG5cclxuICAgIGN1cnJlbnRfdGl0bGUuaW5uZXJIVE1MID0gcHJvamVjdF90aXRsZTtcclxuXHJcbiAgICBjdXJyZW50X3RvZG9fbGlzdC5mb3JFYWNoKHRvZG89PntcclxuICAgICAgICB0b2RvLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbn07IiwiaW1wb3J0IGNyZWF0ZV9uZXdfdG9kbyBmcm9tIFwiLi9jcmVhdGVfbmV3X3RvZG9cIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZF90b2RvcyhjYXRlZ29yeSkge1xyXG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKGtleT0+e1xyXG4gICAgICAgIGlmIChrZXkuaW5jbHVkZXMoJ3RvZG9fJykpIHtcclxuICAgICAgICAgICBsZXQgdG9kbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSlcclxuICAgICAgICAgICBpZiAodG9kby5pbl9jYXRlZ29yeSA9PT0gY2F0ZWdvcnkpe1xyXG4gICAgICAgICAgICBjcmVhdGVfbmV3X3RvZG8odG9kby5pZCwgdG9kby50aXRsZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5kdWVfZGF0ZSwgdG9kby5wcmlvcml0eSlcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufTsiLCJpbXBvcnQgYWRkX3RvZG9fdG9fRE9NIGZyb20gXCIuL2FkZC10b2RvLXRvLURPTVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlX25ld190b2RvKHRvZG9JZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVfZGF0ZSwgcHJpb3JpdHkpIHtcclxuXHJcblxyXG4gICAgY2xhc3MgVG9kbyB7XHJcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVfZGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IHRvZG9JZDtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHRoaXMuZHVlX2RhdGUgPSBkdWVfZGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XHJcbiAgICAgICAgICAgIHRoaXMuaW5fY2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ya3NwYWNlLWhlYWRlcicpLnF1ZXJ5U2VsZWN0b3IoJ2gxJykuaW5uZXJIVE1MO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdfdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlX2RhdGUsIHByaW9yaXR5KTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb18nK3RvZG9JZCwgSlNPTi5zdHJpbmdpZnkobmV3X3RvZG8pKVxyXG5cclxuICAgIGFkZF90b2RvX3RvX0RPTShuZXdfdG9kbyk7XHJcbn07IiwiaW1wb3J0IGRlbGV0ZV90b2RvIGZyb20gXCIuL2RlbGV0ZS10b2RvXCI7XHJcbmltcG9ydCBjb21wbGV0ZV90b2RvIGZyb20gXCIuL2NvbXBsZXRlLXRvZG9cIjtcclxuaW1wb3J0IGVkaXRfdG9kbyBmcm9tIFwiLi9lZGl0LXRvZG9cIjtcclxuaW1wb3J0IHZpZXdfdG9kbyBmcm9tIFwiLi92aWV3LXRvZG9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZF90b2RvX3RvX0RPTSh0b2RvKSB7XHJcbiAgICBjb25zdCBkaXNwbGF5X2xlZnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC1kaXNwbGF5Jyk7XHJcbiAgICBjb25zdCBkaXNwbGF5X3JpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0LWRpc3BsYXknKTtcclxuXHJcbiAgICBjb25zdCBsZWZ0X3RvZG9zID0gZGlzcGxheV9sZWZ0LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0b2RvJyk7XHJcbiAgICBjb25zdCByaWdodF90b2RvcyA9IGRpc3BsYXlfcmlnaHQucXVlcnlTZWxlY3RvckFsbCgnI3RvZG8nKTtcclxuXHJcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBjb25zdCBidG5fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGxlZnRfYnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCByaWdodF9idG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGNvbXBsZXRlX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBjb25zdCBlZGl0X2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBjb25zdCB2aWV3X2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBjb25zdCBkZWxldGVfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGNvbnN0IGNvbXBsZXRlZF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgY29uc3QgZWRpdF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgY29uc3Qgdmlld19pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgY29uc3QgZGVsZXRlX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcblxyXG5cclxuICAgIGNhcmQuaWQgPSAndG9kbyc7XHJcblxyXG4gICAgc3dpdGNoICh0b2RvLnByaW9yaXR5KSB7XHJcbiAgICAgICAgY2FzZSAnbm9uZSc6IFxyXG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ25vbmVQcmlvcml0eScpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgJ2xvdyc6XHJcbiAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2xvd1ByaW9yaXR5Jyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2FzZSAnbWVkaXVtJzpcclxuICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ21lZFByaW9yaXR5Jyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2hpZ2gnOlxyXG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2hpZ2hQcmlvcml0eScpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ25vbmVQcmlvcml0eScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXHJcbiAgICBidG5fY29udGFpbmVyLmlkID0gJ3RvZG8tYnRucydcclxuICAgIGxlZnRfYnRucy5pZCA9ICdsZWZ0J1xyXG4gICAgcmlnaHRfYnRucy5pZCA9ICdyaWdodCdcclxuICAgIGNvbXBsZXRlX2J0bi5jbGFzc0xpc3QuYWRkKCduYi1idXR0b24nKVxyXG4gICAgZWRpdF9idG4uY2xhc3NMaXN0LmFkZCgnbmItYnV0dG9uJylcclxuICAgIHZpZXdfYnRuLmNsYXNzTGlzdC5hZGQoJ25iLWJ1dHRvbicpXHJcbiAgICBkZWxldGVfYnRuLmNsYXNzTGlzdC5hZGQoJ25iLWJ1dHRvbicpXHJcbiAgICBjb21wbGV0ZV9idG4uY2xhc3NMaXN0LmFkZCgnZ3JlZW4nKVxyXG4gICAgZWRpdF9idG4uY2xhc3NMaXN0LmFkZCgnZGVmYXVsdCcpXHJcbiAgICB2aWV3X2J0bi5jbGFzc0xpc3QuYWRkKCdkZWZhdWx0JylcclxuICAgIGRlbGV0ZV9idG4uY2xhc3NMaXN0LmFkZCgnYmx1ZScpXHJcbiAgICBjb21wbGV0ZV9idG4uY2xhc3NMaXN0LmFkZCgncm91bmRlZCcpXHJcbiAgICBlZGl0X2J0bi5jbGFzc0xpc3QuYWRkKCdyb3VuZGVkJylcclxuICAgIHZpZXdfYnRuLmNsYXNzTGlzdC5hZGQoJ3JvdW5kZWQnKVxyXG4gICAgZGVsZXRlX2J0bi5jbGFzc0xpc3QuYWRkKCdyb3VuZGVkJylcclxuXHJcbiAgICBjb21wbGV0ZWRfaW1nLnNyYyA9ICdpbWdzL2NoZWNrLnBuZydcclxuICAgIGVkaXRfaW1nLnNyYyA9ICdpbWdzL2VkaXQucG5nJ1xyXG4gICAgdmlld19pbWcuc3JjID0gJ2ltZ3Mvdmlldy5wbmcnXHJcbiAgICBkZWxldGVfaW1nLnNyYyA9ICdpbWdzL2RlbGV0ZS5wbmcnXHJcblxyXG4gICAgXHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSB0b2RvLnRpdGxlO1xyXG4gICAgZHVlLmlubmVySFRNTCA9IHRvZG8uZHVlX2RhdGU7XHJcbiAgICBcclxuICAgIGNvbXBsZXRlX2J0bi5hcHBlbmRDaGlsZChjb21wbGV0ZWRfaW1nKVxyXG4gICAgZWRpdF9idG4uYXBwZW5kQ2hpbGQoZWRpdF9pbWcpXHJcbiAgICB2aWV3X2J0bi5hcHBlbmRDaGlsZCh2aWV3X2ltZylcclxuICAgIGRlbGV0ZV9idG4uYXBwZW5kQ2hpbGQoZGVsZXRlX2ltZylcclxuICAgIGxlZnRfYnRucy5hcHBlbmQoY29tcGxldGVfYnRuLCBlZGl0X2J0bilcclxuICAgIHJpZ2h0X2J0bnMuYXBwZW5kQ2hpbGQoZGVsZXRlX2J0bilcclxuICAgIGJ0bl9jb250YWluZXIuYXBwZW5kKGxlZnRfYnRucywgcmlnaHRfYnRucylcclxuICAgIGNhcmQuYXBwZW5kKHRpdGxlLGR1ZSxidG5fY29udGFpbmVyKVxyXG5cclxuICAgIFxyXG4gICAgaWYgKGxlZnRfdG9kb3MubGVuZ3RoID4gcmlnaHRfdG9kb3MubGVuZ3RoKSB7XHJcbiAgICAgICAgZGlzcGxheV9yaWdodC5hcHBlbmRDaGlsZChjYXJkKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwbGF5X2xlZnQuYXBwZW5kQ2hpbGQoY2FyZClcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGVsZXRlX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICBkZWxldGVfdG9kbyhjYXJkLCB0b2RvKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbXBsZXRlX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICBjb21wbGV0ZV90b2RvKGNhcmQsIHRvZG8pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZWRpdF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIGVkaXRfdG9kbyh0b2RvLmlkLCB0b2RvLnRpdGxlLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLmR1ZV9kYXRlLCB0b2RvLnByaW9yaXR5LCBjYXJkKTtcclxuICAgIH0pXHJcblxyXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZV90b2RvKHRvZG9fRE9NLCB0b2RvX29iamVjdCkge1xyXG4gICAgdG9kb19ET00ucmVtb3ZlKCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9kb18nK3RvZG9fb2JqZWN0LmlkKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGxldGVfdG9kbyh0b2RvX0RPTSwgdG9kb19vYmplY3QpIHtcclxuICAgIHRvZG9fRE9NLnJlbW92ZSgpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RvZG9fJyt0b2RvX29iamVjdC5pZClcclxufTsiLCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWRpdF90b2RvKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZV9kYXRlLCBwcmlvcml0eSwgb3JpZ2luYWxfdG9kbykge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcclxuICAgIGNvbnN0IHRpdGxlX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGl0bGUnKVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25faW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kZXNjcmlwdGlvbicpXHJcbiAgICBjb25zdCBkdWVfZGF0ZV9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWR1ZURhdGUnKVxyXG4gICAgY29uc3QgcHJpb3JpdHlfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1wcmlvcml0eScpXHJcblxyXG4gICAgbW9kYWwuY2hlY2tlZCA9ICdjaGVja2VkJ1xyXG5cclxuICAgIHRpdGxlX2lucHV0LnZhbHVlID0gdGl0bGVcclxuICAgIGRlc2NyaXB0aW9uX2lucHV0LnZhbHVlID0gZGVzY3JpcHRpb25cclxuICAgIGR1ZV9kYXRlX2lucHV0LnZhbHVlID0gZHVlX2RhdGVcclxuICAgIHByaW9yaXR5X2lucHV0LnZhbHVlID0gcHJpb3JpdHlcclxuICAgIFxyXG4gICAgb3JpZ2luYWxfdG9kby5yZW1vdmUoKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2RvXycraWQpXHJcblxyXG4gICAgbW9kYWwuZGlzYWJsZWQgPSAnZGlzYWJsZWQnXHJcbiAgICBcclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aWV3X3RvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVfZGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XHJcbiAgICBjb25zdCB0aXRsZV9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXRpdGxlJylcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZGVzY3JpcHRpb24nKVxyXG4gICAgY29uc3QgZHVlX2RhdGVfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kdWVEYXRlJylcclxuICAgIGNvbnN0IHByaW9yaXR5X2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tcHJpb3JpdHknKVxyXG4gICAgY29uc3QgYWRkX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbmV3LXRvZG8nKVxyXG5cclxuICAgIG1vZGFsLmNoZWNrZWQgPSAnY2hlY2tlZCdcclxuXHJcbiAgICB0aXRsZV9pbnB1dC52YWx1ZSA9IHRpdGxlXHJcbiAgICBkZXNjcmlwdGlvbl9pbnB1dC52YWx1ZSA9IGRlc2NyaXB0aW9uXHJcbiAgICBkdWVfZGF0ZV9pbnB1dC52YWx1ZSA9IGR1ZV9kYXRlXHJcbiAgICBwcmlvcml0eV9pbnB1dC52YWx1ZSA9IHByaW9yaXR5XHJcblxyXG4gICAgdGl0bGVfaW5wdXQucmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgZGVzY3JpcHRpb25faW5wdXQucmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgZHVlX2RhdGVfaW5wdXQucmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgcHJpb3JpdHlfaW5wdXQucmVhZE9ubHkgPSB0cnVlO1xyXG5cclxuICAgIGlmIChtb2RhbC5jaGVja2VkKSB7XHJcbiAgICAgICAgYWRkX2J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgY3JlYXRlX25ld19wcm9qZWN0IGZyb20gXCIuL2NyZWF0ZS1uZXctcHJvamVjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkX3Byb2plY3RzKCkge1xyXG5cclxuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaChrZXk9PntcclxuICAgICAgICBpZiAoa2V5LmluY2x1ZGVzKCdwcm9qZWN0XycpKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZV9uZXdfcHJvamVjdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn07IiwiaW1wb3J0IGNoYW5nZV93b3Jrc3BhY2VfZGlzcGxheSBmcm9tIFwiLi9jaGFuZ2Utd29ya3NwYWNlLWRpc3BsYXlcIjtcclxuaW1wb3J0IGxvYWRfdG9kb3MgZnJvbSBcIi4vbG9hZGluZy10b2Rvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlX3Byb2plY3QoKSB7XHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy1saXN0JykucXVlcnlTZWxlY3RvcigndWwnKVxyXG5cclxuICAgIGlmICh1bC5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgbGV0IGNhdGVnb3J5X3RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmtzcGFjZS1oZWFkZXInKS5xdWVyeVNlbGVjdG9yKCdoMScpLmlubmVySFRNTDtcclxuICAgICAgICBjb25zdCByZW1vdmFibGVfcHJvamVjdCA9ICdwcm9qZWN0XycrY2F0ZWdvcnlfdGl0bGU7XHJcbiAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdF8nK2NhdGVnb3J5X3RpdGxlKTtcclxuICAgICAgICBsZXQgbmV4dF9saVxyXG5cclxuICAgICAgICBpZiAocHJvamVjdC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZykge1xyXG4gICAgICAgICAgICBuZXh0X2xpID0gcHJvamVjdC5wYXJlbnRFbGVtZW50Lm5leHRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXh0X2xpID0gcHJvamVjdC5wYXJlbnRFbGVtZW50LnByZXZpb3VzU2libGluZy5xdWVyeVNlbGVjdG9yKCdwJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goa2V5PT57XHJcbiAgICAgICAgICAgIGlmIChrZXkuaW5jbHVkZXMoJ3RvZG9fJykpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b2RvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRvZG8uaW5fY2F0ZWdvcnkgPT09IGNhdGVnb3J5X3RpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RvZG9fJyt0b2RvLnRpdGxlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBjYXRlZ29yeV90aXRsZSA9IG5leHRfbGkuaW5uZXJIVE1MO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNoYW5nZV93b3Jrc3BhY2VfZGlzcGxheShjYXRlZ29yeV90aXRsZSlcclxuICAgICAgICBsb2FkX3RvZG9zKGNhdGVnb3J5X3RpdGxlKVxyXG4gICAgICAgIHByb2plY3QucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShyZW1vdmFibGVfcHJvamVjdCk7XHJcbiAgICAgICAgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0XycrY2F0ZWdvcnlfdGl0bGUpO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlX25ld19wcm9qZWN0IGZyb20gXCIuL2NyZWF0ZS1uZXctcHJvamVjdFwiXHJcbmltcG9ydCBjcmVhdGVfbmV3X3RvZG8gZnJvbSBcIi4vY3JlYXRlX25ld190b2RvXCI7XHJcbmltcG9ydCBsb2FkX3Byb2plY3RzIGZyb20gXCIuL2xvYWRpbmctcHJvamVjdHNcIjtcclxuaW1wb3J0IGxvYWRfdG9kb3MgZnJvbSBcIi4vbG9hZGluZy10b2Rvc1wiO1xyXG5pbXBvcnQgZGVsZXRlX3Byb2plY3QgZnJvbSBcIi4vZGVsZXRlLXByb2plY3RcIjtcclxuaW1wb3J0IGNoYW5nZV93b3Jrc3BhY2VfZGlzcGxheSBmcm9tIFwiLi9jaGFuZ2Utd29ya3NwYWNlLWRpc3BsYXlcIjtcclxuXHJcbiBjb25zdCBhZGRfcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC10aXRsZScpO1xyXG4gY29uc3QgdGl0bGVfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10aXRsZScpO1xyXG4gY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZScpO1xyXG4gY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kZXNjcmlwdGlvbicpO1xyXG4gY29uc3QgZHVlX2RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kdWVEYXRlJyk7XHJcbiBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXByaW9yaXR5Jyk7XHJcbiBjb25zdCBkZWxldGVfcHJvamVjdF9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLXByb2plY3QnKVxyXG4gY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKVxyXG4gY29uc3QgbmV3X3RvZG9fYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1uZXctdG9kbycpO1xyXG4gY29uc3QgYWRkX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbmV3LXRvZG8nKVxyXG4gXHJcbmFkZF9wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGNvbnN0IG5ld19wcm9qZWN0X3RpdGxlID0gdGl0bGVfaW5wdXQudmFsdWU7XHJcbiAgICBjcmVhdGVfbmV3X3Byb2plY3QobmV3X3Byb2plY3RfdGl0bGUpO1xyXG59KTtcclxuXHJcbmRlbGV0ZV9wcm9qZWN0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBkZWxldGVfcHJvamVjdCgpO1xyXG59KVxyXG5cclxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RfZGVmYXVsdCcsICdkZWZhdWx0JylcclxubG9hZF9wcm9qZWN0cygpXHJcbmNoYW5nZV93b3Jrc3BhY2VfZGlzcGxheSgnZGVmYXVsdCcpXHJcbmxvYWRfdG9kb3MoJ2RlZmF1bHQnKVxyXG5cclxubmV3X3RvZG9fYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgICgpPT57XHJcbiAgICBtb2RhbC5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICB0b2RvSWQrKztcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvSWQnLCB0b2RvSWQpO1xyXG4gICAgY3JlYXRlX25ld190b2RvKHRvZG9JZCwgdGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkdWVfZGF0ZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUpO1xyXG59KTtcclxuXHJcbi8vZGlzYWJsZSBlZmZlY3RzIHRoYXQgXCJ2aWV3LXRvZG9cIiBmdW5jdGlvbiBjcmVhdGVzXHJcbm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIHRpdGxlLnZhbHVlID0gJyc7XHJcbiAgICBkZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xyXG4gICAgZHVlX2RhdGUudmFsdWUgPSAnJztcclxuICAgIHByaW9yaXR5LnZhbHVlID0gJ05vbmUnXHJcbiAgICB0aXRsZS5yZWFkT25seSA9IGZhbHNlO1xyXG4gICAgZGVzY3JpcHRpb24ucmVhZE9ubHkgPSBmYWxzZTtcclxuICAgIGR1ZV9kYXRlLnJlYWRPbmx5ID0gZmFsc2U7XHJcbiAgICBwcmlvcml0eS5yZWFkT25seSA9IGZhbHNlO1xyXG4gICAgYWRkX2J0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG59KVxyXG5cclxuICAgIGxldCBpZEV4aXN0cztcclxuICAgIGxldCB0b2RvSWQgPSAwO1xyXG5cclxuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgIGlmIChrZXkgPT09ICd0b2RvSWQnKSB7XHJcbiAgICAgICAgICAgIGlkRXhpc3RzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICBpZiAoIWlkRXhpc3RzKSB7XHJcbiAgICAgICAgdG9kb0lkID0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9kb0lkID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvSWQnKSk7XHJcbiAgICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9