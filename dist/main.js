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

    if (title.length < 2) {
        add_project.style.display = 'none';
    } else {
        add_project.removeAttribute('style')
    }
};

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








 const a = document.getElementById('add-project');
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

 
 title_input.addEventListener('input', ()=>{
     ;(0,_project_title_validation__WEBPACK_IMPORTED_MODULE_6__["default"])();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNO0FBQ047QUFDQTtBQUNBOzs7OztVQ1ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOcUQ7QUFDTDtBQUNEO0FBQ047QUFDSztBQUNvQjtBQUNKO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxLQUFLLHNFQUFvQjtBQUN6QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtEQUFrQjtBQUMxQixNQUFNO0FBQ047QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSwyREFBYztBQUNsQixDQUFDO0FBQ0Q7QUFDQTtBQUNBLDhEQUFhO0FBQ2Isc0VBQXdCO0FBQ3hCLDJEQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQWU7QUFDbkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2NyZWF0ZS1uZXctcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2NoYW5nZS13b3Jrc3BhY2UtZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2xvYWRpbmctdG9kb3MuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9jcmVhdGVfbmV3X3RvZG8uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9hZGQtdG9kby10by1ET00uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9kZWxldGUtdG9kby5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2NvbXBsZXRlLXRvZG8uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9lZGl0LXRvZG8uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy92aWV3LXRvZG8uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9sb2FkaW5nLXByb2plY3RzLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvZGVsZXRlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9wcm9qZWN0LXRpdGxlLXZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYW5nZV93b3Jrc3BhY2VfZGlzcGxheSBmcm9tIFwiLi9jaGFuZ2Utd29ya3NwYWNlLWRpc3BsYXlcIjtcclxuaW1wb3J0IGxvYWRfdG9kb3MgZnJvbSBcIi4vbG9hZGluZy10b2Rvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlX25ld19wcm9qZWN0KG5ld190aXRsZSl7XHJcbiAgICBjb25zdCBjdXJyZW50X3RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmtzcGFjZS1oZWFkZXInKS5xdWVyeVNlbGVjdG9yKCdoMScpO1xyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtbGlzdCcpLnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XHJcbiAgICBjb25zdCB0aXRsZV9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJyk7XHJcblxyXG4gICAgY3VycmVudF90aXRsZS5pbm5lckhUTUwgPSBuZXdfdGl0bGU7XHJcblxyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICBwLmlkID0gJ3Byb2plY3RfJytuZXdfdGl0bGU7XHJcbiAgICBwLmlubmVySFRNTCA9IG5ld190aXRsZTtcclxuXHJcbiAgICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcbiAgICAgICAgY2hhbmdlX3dvcmtzcGFjZV9kaXNwbGF5KG5ld190aXRsZSk7XHJcbiAgICAgICAgbG9hZF90b2RvcyhuZXdfdGl0bGUpXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBsaS5hcHBlbmRDaGlsZChwKTtcclxuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIFxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RfJytuZXdfdGl0bGUsIG5ld190aXRsZSlcclxuICAgIFxyXG4gICAgdGl0bGVfaW5wdXQudmFsdWUgPSAnJztcclxuICAgIGNoYW5nZV93b3Jrc3BhY2VfZGlzcGxheShuZXdfdGl0bGUpO1xyXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYW5nZV93b3Jrc3BhY2VfZGlzcGxheShwcm9qZWN0X3RpdGxlKSB7XHJcbiAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmtzcGFjZS1kaXNwbGF5Jyk7XHJcbiAgICBjb25zdCBjdXJyZW50X3RvZG9fbGlzdCA9IGRpc3BsYXkucXVlcnlTZWxlY3RvckFsbCgnI3RvZG8nKTtcclxuICAgIGNvbnN0IGN1cnJlbnRfdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ya3NwYWNlLWhlYWRlcicpLnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XHJcblxyXG4gICAgY3VycmVudF90aXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0X3RpdGxlO1xyXG5cclxuICAgIGN1cnJlbnRfdG9kb19saXN0LmZvckVhY2godG9kbz0+e1xyXG4gICAgICAgIHRvZG8ucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxufTsiLCJpbXBvcnQgY3JlYXRlX25ld190b2RvIGZyb20gXCIuL2NyZWF0ZV9uZXdfdG9kb1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkX3RvZG9zKGNhdGVnb3J5KSB7XHJcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goa2V5PT57XHJcbiAgICAgICAgaWYgKGtleS5pbmNsdWRlcygndG9kb18nKSkge1xyXG4gICAgICAgICAgIGxldCB0b2RvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxyXG4gICAgICAgICAgIGlmICh0b2RvLmluX2NhdGVnb3J5ID09PSBjYXRlZ29yeSl7XHJcbiAgICAgICAgICAgIGNyZWF0ZV9uZXdfdG9kbyh0b2RvLmlkLCB0b2RvLnRpdGxlLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLmR1ZV9kYXRlLCB0b2RvLnByaW9yaXR5KVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59OyIsImltcG9ydCBhZGRfdG9kb190b19ET00gZnJvbSBcIi4vYWRkLXRvZG8tdG8tRE9NXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVfbmV3X3RvZG8odG9kb0lkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZV9kYXRlLCBwcmlvcml0eSkge1xyXG5cclxuXHJcbiAgICBjbGFzcyBUb2RvIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZV9kYXRlLCBwcmlvcml0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gdG9kb0lkO1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5kdWVfZGF0ZSA9IGR1ZV9kYXRlO1xyXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgICAgICAgICAgdGhpcy5pbl9jYXRlZ29yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3Jrc3BhY2UtaGVhZGVyJykucXVlcnlTZWxlY3RvcignaDEnKS5pbm5lckhUTUw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld190b2RvID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVfZGF0ZSwgcHJpb3JpdHkpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvXycrdG9kb0lkLCBKU09OLnN0cmluZ2lmeShuZXdfdG9kbykpXHJcblxyXG4gICAgYWRkX3RvZG9fdG9fRE9NKG5ld190b2RvKTtcclxufTsiLCJpbXBvcnQgZGVsZXRlX3RvZG8gZnJvbSBcIi4vZGVsZXRlLXRvZG9cIjtcclxuaW1wb3J0IGNvbXBsZXRlX3RvZG8gZnJvbSBcIi4vY29tcGxldGUtdG9kb1wiO1xyXG5pbXBvcnQgZWRpdF90b2RvIGZyb20gXCIuL2VkaXQtdG9kb1wiO1xyXG5pbXBvcnQgdmlld190b2RvIGZyb20gXCIuL3ZpZXctdG9kb1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkX3RvZG9fdG9fRE9NKHRvZG8pIHtcclxuICAgIGNvbnN0IGRpc3BsYXlfbGVmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LWRpc3BsYXknKTtcclxuICAgIGNvbnN0IGRpc3BsYXlfcmlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQtZGlzcGxheScpO1xyXG5cclxuICAgIGNvbnN0IGxlZnRfdG9kb3MgPSBkaXNwbGF5X2xlZnQucXVlcnlTZWxlY3RvckFsbCgnI3RvZG8nKTtcclxuICAgIGNvbnN0IHJpZ2h0X3RvZG9zID0gZGlzcGxheV9yaWdodC5xdWVyeVNlbGVjdG9yQWxsKCcjdG9kbycpO1xyXG5cclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNvbnN0IGJ0bl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgbGVmdF9idG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IHJpZ2h0X2J0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgY29tcGxldGVfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGNvbnN0IGVkaXRfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGNvbnN0IHZpZXdfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGNvbnN0IGRlbGV0ZV9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgY29uc3QgY29tcGxldGVkX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBjb25zdCBlZGl0X2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBjb25zdCB2aWV3X2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBjb25zdCBkZWxldGVfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuXHJcblxyXG4gICAgY2FyZC5pZCA9ICd0b2RvJztcclxuXHJcbiAgICBzd2l0Y2ggKHRvZG8ucHJpb3JpdHkpIHtcclxuICAgICAgICBjYXNlICdub25lJzogXHJcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnbm9uZVByaW9yaXR5Jyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAnbG93JzpcclxuICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnbG93UHJpb3JpdHknKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjYXNlICdtZWRpdW0nOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnbWVkUHJpb3JpdHknKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnaGlnaCc6XHJcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnaGlnaFByaW9yaXR5Jyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnbm9uZVByaW9yaXR5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcclxuICAgIGJ0bl9jb250YWluZXIuaWQgPSAndG9kby1idG5zJ1xyXG4gICAgbGVmdF9idG5zLmlkID0gJ2xlZnQnXHJcbiAgICByaWdodF9idG5zLmlkID0gJ3JpZ2h0J1xyXG4gICAgY29tcGxldGVfYnRuLmNsYXNzTGlzdC5hZGQoJ25iLWJ1dHRvbicpXHJcbiAgICBlZGl0X2J0bi5jbGFzc0xpc3QuYWRkKCduYi1idXR0b24nKVxyXG4gICAgdmlld19idG4uY2xhc3NMaXN0LmFkZCgnbmItYnV0dG9uJylcclxuICAgIGRlbGV0ZV9idG4uY2xhc3NMaXN0LmFkZCgnbmItYnV0dG9uJylcclxuICAgIGNvbXBsZXRlX2J0bi5jbGFzc0xpc3QuYWRkKCdncmVlbicpXHJcbiAgICBlZGl0X2J0bi5jbGFzc0xpc3QuYWRkKCdkZWZhdWx0JylcclxuICAgIHZpZXdfYnRuLmNsYXNzTGlzdC5hZGQoJ2RlZmF1bHQnKVxyXG4gICAgZGVsZXRlX2J0bi5jbGFzc0xpc3QuYWRkKCdibHVlJylcclxuICAgIGNvbXBsZXRlX2J0bi5jbGFzc0xpc3QuYWRkKCdyb3VuZGVkJylcclxuICAgIGVkaXRfYnRuLmNsYXNzTGlzdC5hZGQoJ3JvdW5kZWQnKVxyXG4gICAgdmlld19idG4uY2xhc3NMaXN0LmFkZCgncm91bmRlZCcpXHJcbiAgICBkZWxldGVfYnRuLmNsYXNzTGlzdC5hZGQoJ3JvdW5kZWQnKVxyXG5cclxuICAgIGNvbXBsZXRlZF9pbWcuc3JjID0gJ2ltZ3MvY2hlY2sucG5nJ1xyXG4gICAgZWRpdF9pbWcuc3JjID0gJ2ltZ3MvZWRpdC5wbmcnXHJcbiAgICB2aWV3X2ltZy5zcmMgPSAnaW1ncy92aWV3LnBuZydcclxuICAgIGRlbGV0ZV9pbWcuc3JjID0gJ2ltZ3MvZGVsZXRlLnBuZydcclxuXHJcbiAgICBcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IHRvZG8udGl0bGU7XHJcbiAgICBkdWUuaW5uZXJIVE1MID0gdG9kby5kdWVfZGF0ZTtcclxuICAgIFxyXG4gICAgY29tcGxldGVfYnRuLmFwcGVuZENoaWxkKGNvbXBsZXRlZF9pbWcpXHJcbiAgICBlZGl0X2J0bi5hcHBlbmRDaGlsZChlZGl0X2ltZylcclxuICAgIHZpZXdfYnRuLmFwcGVuZENoaWxkKHZpZXdfaW1nKVxyXG4gICAgZGVsZXRlX2J0bi5hcHBlbmRDaGlsZChkZWxldGVfaW1nKVxyXG4gICAgbGVmdF9idG5zLmFwcGVuZChjb21wbGV0ZV9idG4sIGVkaXRfYnRuKVxyXG4gICAgcmlnaHRfYnRucy5hcHBlbmRDaGlsZChkZWxldGVfYnRuKVxyXG4gICAgYnRuX2NvbnRhaW5lci5hcHBlbmQobGVmdF9idG5zLCByaWdodF9idG5zKVxyXG4gICAgY2FyZC5hcHBlbmQodGl0bGUsZHVlLGJ0bl9jb250YWluZXIpXHJcblxyXG4gICAgXHJcbiAgICBpZiAobGVmdF90b2Rvcy5sZW5ndGggPiByaWdodF90b2Rvcy5sZW5ndGgpIHtcclxuICAgICAgICBkaXNwbGF5X3JpZ2h0LmFwcGVuZENoaWxkKGNhcmQpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BsYXlfbGVmdC5hcHBlbmRDaGlsZChjYXJkKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkZWxldGVfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgIGRlbGV0ZV90b2RvKGNhcmQsIHRvZG8pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29tcGxldGVfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgIGNvbXBsZXRlX3RvZG8oY2FyZCwgdG9kbyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBlZGl0X2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgZWRpdF90b2RvKHRvZG8uaWQsIHRvZG8udGl0bGUsIHRvZG8uZGVzY3JpcHRpb24sIHRvZG8uZHVlX2RhdGUsIHRvZG8ucHJpb3JpdHksIGNhcmQpO1xyXG4gICAgfSlcclxuXHJcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlX3RvZG8odG9kb19ET00sIHRvZG9fb2JqZWN0KSB7XHJcbiAgICB0b2RvX0RPTS5yZW1vdmUoKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2RvXycrdG9kb19vYmplY3QuaWQpXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wbGV0ZV90b2RvKHRvZG9fRE9NLCB0b2RvX29iamVjdCkge1xyXG4gICAgdG9kb19ET00ucmVtb3ZlKCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9kb18nK3RvZG9fb2JqZWN0LmlkKVxyXG59OyIsIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlZGl0X3RvZG8oaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlX2RhdGUsIHByaW9yaXR5LCBvcmlnaW5hbF90b2RvKSB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4gICAgY29uc3QgdGl0bGVfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZScpXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbl9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWRlc2NyaXB0aW9uJylcclxuICAgIGNvbnN0IGR1ZV9kYXRlX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZHVlRGF0ZScpXHJcbiAgICBjb25zdCBwcmlvcml0eV9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXByaW9yaXR5JylcclxuXHJcbiAgICBtb2RhbC5jaGVja2VkID0gJ2NoZWNrZWQnXHJcblxyXG4gICAgdGl0bGVfaW5wdXQudmFsdWUgPSB0aXRsZVxyXG4gICAgZGVzY3JpcHRpb25faW5wdXQudmFsdWUgPSBkZXNjcmlwdGlvblxyXG4gICAgZHVlX2RhdGVfaW5wdXQudmFsdWUgPSBkdWVfZGF0ZVxyXG4gICAgcHJpb3JpdHlfaW5wdXQudmFsdWUgPSBwcmlvcml0eVxyXG4gICAgXHJcbiAgICBvcmlnaW5hbF90b2RvLnJlbW92ZSgpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RvZG9fJytpZClcclxuXHJcbiAgICBtb2RhbC5kaXNhYmxlZCA9ICdkaXNhYmxlZCdcclxuICAgIFxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpZXdfdG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZV9kYXRlLCBwcmlvcml0eSkge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcclxuICAgIGNvbnN0IHRpdGxlX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGl0bGUnKVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25faW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kZXNjcmlwdGlvbicpXHJcbiAgICBjb25zdCBkdWVfZGF0ZV9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWR1ZURhdGUnKVxyXG4gICAgY29uc3QgcHJpb3JpdHlfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1wcmlvcml0eScpXHJcbiAgICBjb25zdCBhZGRfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1uZXctdG9kbycpXHJcblxyXG4gICAgbW9kYWwuY2hlY2tlZCA9ICdjaGVja2VkJ1xyXG5cclxuICAgIHRpdGxlX2lucHV0LnZhbHVlID0gdGl0bGVcclxuICAgIGRlc2NyaXB0aW9uX2lucHV0LnZhbHVlID0gZGVzY3JpcHRpb25cclxuICAgIGR1ZV9kYXRlX2lucHV0LnZhbHVlID0gZHVlX2RhdGVcclxuICAgIHByaW9yaXR5X2lucHV0LnZhbHVlID0gcHJpb3JpdHlcclxuXHJcbiAgICB0aXRsZV9pbnB1dC5yZWFkT25seSA9IHRydWU7XHJcbiAgICBkZXNjcmlwdGlvbl9pbnB1dC5yZWFkT25seSA9IHRydWU7XHJcbiAgICBkdWVfZGF0ZV9pbnB1dC5yZWFkT25seSA9IHRydWU7XHJcbiAgICBwcmlvcml0eV9pbnB1dC5yZWFkT25seSA9IHRydWU7XHJcblxyXG4gICAgaWYgKG1vZGFsLmNoZWNrZWQpIHtcclxuICAgICAgICBhZGRfYnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIH1cclxufSIsImltcG9ydCBjcmVhdGVfbmV3X3Byb2plY3QgZnJvbSBcIi4vY3JlYXRlLW5ldy1wcm9qZWN0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRfcHJvamVjdHMoKSB7XHJcblxyXG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKGtleT0+e1xyXG4gICAgICAgIGlmIChrZXkuaW5jbHVkZXMoJ3Byb2plY3RfJykpIHtcclxuICAgICAgICAgICAgY3JlYXRlX25ld19wcm9qZWN0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufTsiLCJpbXBvcnQgY2hhbmdlX3dvcmtzcGFjZV9kaXNwbGF5IGZyb20gXCIuL2NoYW5nZS13b3Jrc3BhY2UtZGlzcGxheVwiO1xyXG5pbXBvcnQgbG9hZF90b2RvcyBmcm9tIFwiLi9sb2FkaW5nLXRvZG9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVfcHJvamVjdCgpIHtcclxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWxpc3QnKS5xdWVyeVNlbGVjdG9yKCd1bCcpXHJcblxyXG4gICAgaWYgKHVsLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBsZXQgY2F0ZWdvcnlfdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ya3NwYWNlLWhlYWRlcicpLnF1ZXJ5U2VsZWN0b3IoJ2gxJykuaW5uZXJIVE1MO1xyXG4gICAgICAgIGNvbnN0IHJlbW92YWJsZV9wcm9qZWN0ID0gJ3Byb2plY3RfJytjYXRlZ29yeV90aXRsZTtcclxuICAgICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0XycrY2F0ZWdvcnlfdGl0bGUpO1xyXG4gICAgICAgIGxldCBuZXh0X2xpXHJcblxyXG4gICAgICAgIGlmIChwcm9qZWN0LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgIG5leHRfbGkgPSBwcm9qZWN0LnBhcmVudEVsZW1lbnQubmV4dFNpYmxpbmcucXVlcnlTZWxlY3RvcigncCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5leHRfbGkgPSBwcm9qZWN0LnBhcmVudEVsZW1lbnQucHJldmlvdXNTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaChrZXk9PntcclxuICAgICAgICAgICAgaWYgKGtleS5pbmNsdWRlcygndG9kb18nKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvZG8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXHJcbiAgICAgICAgICAgICAgICBpZiAodG9kby5pbl9jYXRlZ29yeSA9PT0gY2F0ZWdvcnlfdGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9kb18nK3RvZG8udGl0bGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNhdGVnb3J5X3RpdGxlID0gbmV4dF9saS5pbm5lckhUTUw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2hhbmdlX3dvcmtzcGFjZV9kaXNwbGF5KGNhdGVnb3J5X3RpdGxlKVxyXG4gICAgICAgIGxvYWRfdG9kb3MoY2F0ZWdvcnlfdGl0bGUpXHJcbiAgICAgICAgcHJvamVjdC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHJlbW92YWJsZV9wcm9qZWN0KTtcclxuICAgICAgICBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfJytjYXRlZ29yeV90aXRsZSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZVByb2plY3RUaXRsZSgpIHtcclxuICAgIGNvbnN0IGFkZF9wcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LXRpdGxlJyk7XHJcbiAgICBjb25zdCB0aXRsZV9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJyk7XHJcbiAgICBsZXQgdGl0bGUgPSB0aXRsZV9pbnB1dC52YWx1ZTtcclxuXHJcbiAgICBpZiAodGl0bGUubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIGFkZF9wcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFkZF9wcm9qZWN0LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxyXG4gICAgfVxyXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZV9uZXdfcHJvamVjdCBmcm9tIFwiLi9jcmVhdGUtbmV3LXByb2plY3RcIlxyXG5pbXBvcnQgY3JlYXRlX25ld190b2RvIGZyb20gXCIuL2NyZWF0ZV9uZXdfdG9kb1wiO1xyXG5pbXBvcnQgbG9hZF9wcm9qZWN0cyBmcm9tIFwiLi9sb2FkaW5nLXByb2plY3RzXCI7XHJcbmltcG9ydCBsb2FkX3RvZG9zIGZyb20gXCIuL2xvYWRpbmctdG9kb3NcIjtcclxuaW1wb3J0IGRlbGV0ZV9wcm9qZWN0IGZyb20gXCIuL2RlbGV0ZS1wcm9qZWN0XCI7XHJcbmltcG9ydCBjaGFuZ2Vfd29ya3NwYWNlX2Rpc3BsYXkgZnJvbSBcIi4vY2hhbmdlLXdvcmtzcGFjZS1kaXNwbGF5XCI7XHJcbmltcG9ydCB2YWxpZGF0ZVByb2plY3RUaXRsZSBmcm9tIFwiLi9wcm9qZWN0LXRpdGxlLXZhbGlkYXRpb25cIjtcclxuXHJcbiBjb25zdCBhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0Jyk7XHJcbiBjb25zdCBhZGRfcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC10aXRsZScpO1xyXG4gY29uc3QgdGl0bGVfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10aXRsZScpO1xyXG4gY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZScpO1xyXG4gY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kZXNjcmlwdGlvbicpO1xyXG4gY29uc3QgZHVlX2RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kdWVEYXRlJyk7XHJcbiBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXByaW9yaXR5Jyk7XHJcbiBjb25zdCBkZWxldGVfcHJvamVjdF9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLXByb2plY3QnKVxyXG4gY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKVxyXG4gY29uc3QgbmV3X3RvZG9fYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1uZXctdG9kbycpO1xyXG4gY29uc3QgYWRkX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbmV3LXRvZG8nKVxyXG4gXHJcbiBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGFkZF9wcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiB9KVxyXG5cclxuIFxyXG4gdGl0bGVfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKT0+e1xyXG4gICAgIHZhbGlkYXRlUHJvamVjdFRpdGxlKCk7XHJcbiAgICB9KVxyXG5cclxuICAgIGFkZF9wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGNvbnN0IG5ld19wcm9qZWN0X3RpdGxlID0gdGl0bGVfaW5wdXQudmFsdWU7XHJcbiAgICBpZiAobmV3X3Byb2plY3RfdGl0bGUubGVuZ3RoICE9PSAwKXtcclxuICAgICAgICBjcmVhdGVfbmV3X3Byb2plY3QobmV3X3Byb2plY3RfdGl0bGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbm9wZScpXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZGVsZXRlX3Byb2plY3RfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGRlbGV0ZV9wcm9qZWN0KCk7XHJcbn0pXHJcblxyXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdF9kZWZhdWx0JywgJ2RlZmF1bHQnKVxyXG5sb2FkX3Byb2plY3RzKClcclxuY2hhbmdlX3dvcmtzcGFjZV9kaXNwbGF5KCdkZWZhdWx0JylcclxubG9hZF90b2RvcygnZGVmYXVsdCcpXHJcblxyXG5uZXdfdG9kb19idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAgKCk9PntcclxuICAgIG1vZGFsLmRpc2FibGVkID0gZmFsc2VcclxuICAgIHRvZG9JZCsrO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9JZCcsIHRvZG9JZCk7XHJcbiAgICBjcmVhdGVfbmV3X3RvZG8odG9kb0lkLCB0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZV9kYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSk7XHJcbn0pO1xyXG5cclxuLy9kaXNhYmxlIGVmZmVjdHMgdGhhdCBcInZpZXctdG9kb1wiIGZ1bmN0aW9uIGNyZWF0ZXNcclxubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgdGl0bGUudmFsdWUgPSAnJztcclxuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gJyc7XHJcbiAgICBkdWVfZGF0ZS52YWx1ZSA9ICcnO1xyXG4gICAgcHJpb3JpdHkudmFsdWUgPSAnTm9uZSdcclxuICAgIHRpdGxlLnJlYWRPbmx5ID0gZmFsc2U7XHJcbiAgICBkZXNjcmlwdGlvbi5yZWFkT25seSA9IGZhbHNlO1xyXG4gICAgZHVlX2RhdGUucmVhZE9ubHkgPSBmYWxzZTtcclxuICAgIHByaW9yaXR5LnJlYWRPbmx5ID0gZmFsc2U7XHJcbiAgICBhZGRfYnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbn0pXHJcblxyXG4gICAgbGV0IGlkRXhpc3RzO1xyXG4gICAgbGV0IHRvZG9JZCA9IDA7XHJcblxyXG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgaWYgKGtleSA9PT0gJ3RvZG9JZCcpIHtcclxuICAgICAgICAgICAgaWRFeGlzdHMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICBcclxuICAgIGlmICghaWRFeGlzdHMpIHtcclxuICAgICAgICB0b2RvSWQgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b2RvSWQgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9JZCcpKTtcclxuICAgIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=