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
            (0,_create_new_todo__WEBPACK_IMPORTED_MODULE_0__["default"])(todo.title, todo.description, todo.due_date, todo.priority)
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


function create_new_todo(title, description, due_date, priority) {

    class Todo {
        constructor(title, description, due_date, priority) {
            this.title = title;
            this.description = description;
            this.due_date = due_date;
            this.priority = priority
            this.in_category = document.getElementById('workspace-header').querySelector('h1').innerHTML;
        }
    }

    const new_todo = new Todo(title, description, due_date, priority);

    localStorage.setItem('todo_'+title, JSON.stringify(new_todo))

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
    const delete_btn = document.createElement('button')
    const completed_img = document.createElement('img')
    const edit_img = document.createElement('img')
    const delete_img = document.createElement('img')


    card.id = 'todo';
    card.classList.add('card')
    btn_container.id = 'todo-btns'
    left_btns.id = 'left'
    right_btns.id = 'right'
    complete_btn.classList.add('nb-button')
    edit_btn.classList.add('nb-button')
    delete_btn.classList.add('nb-button')
    complete_btn.classList.add('green')
    edit_btn.classList.add('default')
    delete_btn.classList.add('blue')
    complete_btn.classList.add('rounded')
    edit_btn.classList.add('rounded')
    delete_btn.classList.add('rounded')

    completed_img.src = 'imgs/check.png'
    edit_img.src = 'imgs/edit.png'
    delete_img.src = 'imgs/delete.png'

    
    title.innerHTML = todo.title;
    due.innerHTML = todo.due_date;
    
    complete_btn.appendChild(completed_img)
    edit_btn.appendChild(edit_img)
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
        (0,_edit_todo__WEBPACK_IMPORTED_MODULE_2__["default"])(todo.title, todo.description, todo.due_date, todo.priority, card);
    })

    card.addEventListener('click', ()=>{
        ;(0,_view_todo__WEBPACK_IMPORTED_MODULE_3__["default"])(todo.title, todo.description, todo.due_date, todo.priority);
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
    localStorage.removeItem('todo_'+todo_object.title)
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
    localStorage.removeItem('todo_'+todo_object.title)
};

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ edit_todo)
/* harmony export */ });
function edit_todo(title, description, due_date, priority, original_todo) {
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

    original_todo.remove()
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
    ;(0,_create_new_todo__WEBPACK_IMPORTED_MODULE_1__["default"])(title.value, description.value, due_date.value, priority.value);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xRDtBQUNMO0FBQ0Q7QUFDTjtBQUNLO0FBQ29CO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUFrQjtBQUN0QixDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUksMkRBQWM7QUFDbEIsQ0FBQztBQUNEO0FBQ0E7QUFDQSw4REFBYTtBQUNiLHNFQUF3QjtBQUN4QiwyREFBVTtBQUNWO0FBQ0E7QUFDQSxJQUFJLDZEQUFlO0FBQ25CLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9jcmVhdGUtbmV3LXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9jaGFuZ2Utd29ya3NwYWNlLWRpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9sb2FkaW5nLXRvZG9zLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvY3JlYXRlX25ld190b2RvLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvYWRkLXRvZG8tdG8tRE9NLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvZGVsZXRlLXRvZG8uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9jb21wbGV0ZS10b2RvLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvZWRpdC10b2RvLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvdmlldy10b2RvLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvbG9hZGluZy1wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2RlbGV0ZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFuZ2Vfd29ya3NwYWNlX2Rpc3BsYXkgZnJvbSBcIi4vY2hhbmdlLXdvcmtzcGFjZS1kaXNwbGF5XCI7XHJcbmltcG9ydCBsb2FkX3RvZG9zIGZyb20gXCIuL2xvYWRpbmctdG9kb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZV9uZXdfcHJvamVjdChuZXdfdGl0bGUpe1xyXG4gICAgY29uc3QgY3VycmVudF90aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3Jrc3BhY2UtaGVhZGVyJykucXVlcnlTZWxlY3RvcignaDEnKTtcclxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWxpc3QnKS5xdWVyeVNlbGVjdG9yKCd1bCcpO1xyXG4gICAgY29uc3QgdGl0bGVfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10aXRsZScpO1xyXG5cclxuICAgIGN1cnJlbnRfdGl0bGUuaW5uZXJIVE1MID0gbmV3X3RpdGxlO1xyXG5cclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgcC5pZCA9ICdwcm9qZWN0XycrbmV3X3RpdGxlO1xyXG4gICAgcC5pbm5lckhUTUwgPSBuZXdfdGl0bGU7XHJcblxyXG4gICAgcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4gICAgICAgIGNoYW5nZV93b3Jrc3BhY2VfZGlzcGxheShuZXdfdGl0bGUpO1xyXG4gICAgICAgIGxvYWRfdG9kb3MobmV3X3RpdGxlKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgbGkuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICBcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0XycrbmV3X3RpdGxlLCBuZXdfdGl0bGUpXHJcbiAgICBcclxuICAgIHRpdGxlX2lucHV0LnZhbHVlID0gJyc7XHJcbiAgICBjaGFuZ2Vfd29ya3NwYWNlX2Rpc3BsYXkobmV3X3RpdGxlKTtcclxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFuZ2Vfd29ya3NwYWNlX2Rpc3BsYXkocHJvamVjdF90aXRsZSkge1xyXG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3Jrc3BhY2UtZGlzcGxheScpO1xyXG4gICAgY29uc3QgY3VycmVudF90b2RvX2xpc3QgPSBkaXNwbGF5LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0b2RvJyk7XHJcbiAgICBjb25zdCBjdXJyZW50X3RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmtzcGFjZS1oZWFkZXInKS5xdWVyeVNlbGVjdG9yKCdoMScpO1xyXG5cclxuICAgIGN1cnJlbnRfdGl0bGUuaW5uZXJIVE1MID0gcHJvamVjdF90aXRsZTtcclxuXHJcbiAgICBjdXJyZW50X3RvZG9fbGlzdC5mb3JFYWNoKHRvZG89PntcclxuICAgICAgICB0b2RvLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbn07IiwiaW1wb3J0IGNyZWF0ZV9uZXdfdG9kbyBmcm9tIFwiLi9jcmVhdGVfbmV3X3RvZG9cIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZF90b2RvcyhjYXRlZ29yeSkge1xyXG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKGtleT0+e1xyXG4gICAgICAgIGlmIChrZXkuaW5jbHVkZXMoJ3RvZG9fJykpIHtcclxuICAgICAgICAgICBsZXQgdG9kbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSlcclxuICAgICAgICAgICBpZiAodG9kby5pbl9jYXRlZ29yeSA9PT0gY2F0ZWdvcnkpe1xyXG4gICAgICAgICAgICBjcmVhdGVfbmV3X3RvZG8odG9kby50aXRsZSwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5kdWVfZGF0ZSwgdG9kby5wcmlvcml0eSlcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufTsiLCJpbXBvcnQgYWRkX3RvZG9fdG9fRE9NIGZyb20gXCIuL2FkZC10b2RvLXRvLURPTVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlX25ld190b2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlX2RhdGUsIHByaW9yaXR5KSB7XHJcblxyXG4gICAgY2xhc3MgVG9kbyB7XHJcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVfZGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHRoaXMuZHVlX2RhdGUgPSBkdWVfZGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XHJcbiAgICAgICAgICAgIHRoaXMuaW5fY2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ya3NwYWNlLWhlYWRlcicpLnF1ZXJ5U2VsZWN0b3IoJ2gxJykuaW5uZXJIVE1MO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdfdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlX2RhdGUsIHByaW9yaXR5KTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb18nK3RpdGxlLCBKU09OLnN0cmluZ2lmeShuZXdfdG9kbykpXHJcblxyXG4gICAgYWRkX3RvZG9fdG9fRE9NKG5ld190b2RvKTtcclxufTsiLCJpbXBvcnQgZGVsZXRlX3RvZG8gZnJvbSBcIi4vZGVsZXRlLXRvZG9cIjtcclxuaW1wb3J0IGNvbXBsZXRlX3RvZG8gZnJvbSBcIi4vY29tcGxldGUtdG9kb1wiO1xyXG5pbXBvcnQgZWRpdF90b2RvIGZyb20gXCIuL2VkaXQtdG9kb1wiO1xyXG5pbXBvcnQgdmlld190b2RvIGZyb20gXCIuL3ZpZXctdG9kb1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkX3RvZG9fdG9fRE9NKHRvZG8pIHtcclxuICAgIGNvbnN0IGRpc3BsYXlfbGVmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LWRpc3BsYXknKTtcclxuICAgIGNvbnN0IGRpc3BsYXlfcmlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQtZGlzcGxheScpO1xyXG5cclxuICAgIGNvbnN0IGxlZnRfdG9kb3MgPSBkaXNwbGF5X2xlZnQucXVlcnlTZWxlY3RvckFsbCgnI3RvZG8nKTtcclxuICAgIGNvbnN0IHJpZ2h0X3RvZG9zID0gZGlzcGxheV9yaWdodC5xdWVyeVNlbGVjdG9yQWxsKCcjdG9kbycpO1xyXG5cclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNvbnN0IGJ0bl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgbGVmdF9idG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IHJpZ2h0X2J0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgY29tcGxldGVfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGNvbnN0IGVkaXRfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGNvbnN0IGRlbGV0ZV9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgY29uc3QgY29tcGxldGVkX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBjb25zdCBlZGl0X2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBjb25zdCBkZWxldGVfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuXHJcblxyXG4gICAgY2FyZC5pZCA9ICd0b2RvJztcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXHJcbiAgICBidG5fY29udGFpbmVyLmlkID0gJ3RvZG8tYnRucydcclxuICAgIGxlZnRfYnRucy5pZCA9ICdsZWZ0J1xyXG4gICAgcmlnaHRfYnRucy5pZCA9ICdyaWdodCdcclxuICAgIGNvbXBsZXRlX2J0bi5jbGFzc0xpc3QuYWRkKCduYi1idXR0b24nKVxyXG4gICAgZWRpdF9idG4uY2xhc3NMaXN0LmFkZCgnbmItYnV0dG9uJylcclxuICAgIGRlbGV0ZV9idG4uY2xhc3NMaXN0LmFkZCgnbmItYnV0dG9uJylcclxuICAgIGNvbXBsZXRlX2J0bi5jbGFzc0xpc3QuYWRkKCdncmVlbicpXHJcbiAgICBlZGl0X2J0bi5jbGFzc0xpc3QuYWRkKCdkZWZhdWx0JylcclxuICAgIGRlbGV0ZV9idG4uY2xhc3NMaXN0LmFkZCgnYmx1ZScpXHJcbiAgICBjb21wbGV0ZV9idG4uY2xhc3NMaXN0LmFkZCgncm91bmRlZCcpXHJcbiAgICBlZGl0X2J0bi5jbGFzc0xpc3QuYWRkKCdyb3VuZGVkJylcclxuICAgIGRlbGV0ZV9idG4uY2xhc3NMaXN0LmFkZCgncm91bmRlZCcpXHJcblxyXG4gICAgY29tcGxldGVkX2ltZy5zcmMgPSAnaW1ncy9jaGVjay5wbmcnXHJcbiAgICBlZGl0X2ltZy5zcmMgPSAnaW1ncy9lZGl0LnBuZydcclxuICAgIGRlbGV0ZV9pbWcuc3JjID0gJ2ltZ3MvZGVsZXRlLnBuZydcclxuXHJcbiAgICBcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IHRvZG8udGl0bGU7XHJcbiAgICBkdWUuaW5uZXJIVE1MID0gdG9kby5kdWVfZGF0ZTtcclxuICAgIFxyXG4gICAgY29tcGxldGVfYnRuLmFwcGVuZENoaWxkKGNvbXBsZXRlZF9pbWcpXHJcbiAgICBlZGl0X2J0bi5hcHBlbmRDaGlsZChlZGl0X2ltZylcclxuICAgIGRlbGV0ZV9idG4uYXBwZW5kQ2hpbGQoZGVsZXRlX2ltZylcclxuICAgIGxlZnRfYnRucy5hcHBlbmQoY29tcGxldGVfYnRuLCBlZGl0X2J0bilcclxuICAgIHJpZ2h0X2J0bnMuYXBwZW5kQ2hpbGQoZGVsZXRlX2J0bilcclxuICAgIGJ0bl9jb250YWluZXIuYXBwZW5kKGxlZnRfYnRucywgcmlnaHRfYnRucylcclxuICAgIGNhcmQuYXBwZW5kKHRpdGxlLGR1ZSxidG5fY29udGFpbmVyKVxyXG5cclxuICAgIFxyXG4gICAgaWYgKGxlZnRfdG9kb3MubGVuZ3RoID4gcmlnaHRfdG9kb3MubGVuZ3RoKSB7XHJcbiAgICAgICAgZGlzcGxheV9yaWdodC5hcHBlbmRDaGlsZChjYXJkKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNwbGF5X2xlZnQuYXBwZW5kQ2hpbGQoY2FyZClcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGVsZXRlX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICBkZWxldGVfdG9kbyhjYXJkLCB0b2RvKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbXBsZXRlX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICBjb21wbGV0ZV90b2RvKGNhcmQsIHRvZG8pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZWRpdF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIGVkaXRfdG9kbyh0b2RvLnRpdGxlLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLmR1ZV9kYXRlLCB0b2RvLnByaW9yaXR5LCBjYXJkKTtcclxuICAgIH0pXHJcblxyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgdmlld190b2RvKHRvZG8udGl0bGUsIHRvZG8uZGVzY3JpcHRpb24sIHRvZG8uZHVlX2RhdGUsIHRvZG8ucHJpb3JpdHkpO1xyXG4gICAgfSlcclxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVfdG9kbyh0b2RvX0RPTSwgdG9kb19vYmplY3QpIHtcclxuICAgIHRvZG9fRE9NLnJlbW92ZSgpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RvZG9fJyt0b2RvX29iamVjdC50aXRsZSlcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBsZXRlX3RvZG8odG9kb19ET00sIHRvZG9fb2JqZWN0KSB7XHJcbiAgICB0b2RvX0RPTS5yZW1vdmUoKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2RvXycrdG9kb19vYmplY3QudGl0bGUpXHJcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWRpdF90b2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlX2RhdGUsIHByaW9yaXR5LCBvcmlnaW5hbF90b2RvKSB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4gICAgY29uc3QgdGl0bGVfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZScpXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbl9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWRlc2NyaXB0aW9uJylcclxuICAgIGNvbnN0IGR1ZV9kYXRlX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZHVlRGF0ZScpXHJcbiAgICBjb25zdCBwcmlvcml0eV9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXByaW9yaXR5JylcclxuXHJcbiAgICBtb2RhbC5jaGVja2VkID0gJ2NoZWNrZWQnXHJcblxyXG4gICAgdGl0bGVfaW5wdXQudmFsdWUgPSB0aXRsZVxyXG4gICAgZGVzY3JpcHRpb25faW5wdXQudmFsdWUgPSBkZXNjcmlwdGlvblxyXG4gICAgZHVlX2RhdGVfaW5wdXQudmFsdWUgPSBkdWVfZGF0ZVxyXG4gICAgcHJpb3JpdHlfaW5wdXQudmFsdWUgPSBwcmlvcml0eVxyXG5cclxuICAgIG9yaWdpbmFsX3RvZG8ucmVtb3ZlKClcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpZXdfdG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZV9kYXRlLCBwcmlvcml0eSkge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcclxuICAgIGNvbnN0IHRpdGxlX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGl0bGUnKVxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25faW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kZXNjcmlwdGlvbicpXHJcbiAgICBjb25zdCBkdWVfZGF0ZV9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWR1ZURhdGUnKVxyXG4gICAgY29uc3QgcHJpb3JpdHlfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1wcmlvcml0eScpXHJcbiAgICBjb25zdCBhZGRfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1uZXctdG9kbycpXHJcblxyXG4gICAgbW9kYWwuY2hlY2tlZCA9ICdjaGVja2VkJ1xyXG5cclxuICAgIHRpdGxlX2lucHV0LnZhbHVlID0gdGl0bGVcclxuICAgIGRlc2NyaXB0aW9uX2lucHV0LnZhbHVlID0gZGVzY3JpcHRpb25cclxuICAgIGR1ZV9kYXRlX2lucHV0LnZhbHVlID0gZHVlX2RhdGVcclxuICAgIHByaW9yaXR5X2lucHV0LnZhbHVlID0gcHJpb3JpdHlcclxuXHJcbiAgICB0aXRsZV9pbnB1dC5yZWFkT25seSA9IHRydWU7XHJcbiAgICBkZXNjcmlwdGlvbl9pbnB1dC5yZWFkT25seSA9IHRydWU7XHJcbiAgICBkdWVfZGF0ZV9pbnB1dC5yZWFkT25seSA9IHRydWU7XHJcbiAgICBwcmlvcml0eV9pbnB1dC5yZWFkT25seSA9IHRydWU7XHJcblxyXG4gICAgaWYgKG1vZGFsLmNoZWNrZWQpIHtcclxuICAgICAgICBhZGRfYnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIH1cclxufSIsImltcG9ydCBjcmVhdGVfbmV3X3Byb2plY3QgZnJvbSBcIi4vY3JlYXRlLW5ldy1wcm9qZWN0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRfcHJvamVjdHMoKSB7XHJcblxyXG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKGtleT0+e1xyXG4gICAgICAgIGlmIChrZXkuaW5jbHVkZXMoJ3Byb2plY3RfJykpIHtcclxuICAgICAgICAgICAgY3JlYXRlX25ld19wcm9qZWN0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufTsiLCJpbXBvcnQgY2hhbmdlX3dvcmtzcGFjZV9kaXNwbGF5IGZyb20gXCIuL2NoYW5nZS13b3Jrc3BhY2UtZGlzcGxheVwiO1xyXG5pbXBvcnQgbG9hZF90b2RvcyBmcm9tIFwiLi9sb2FkaW5nLXRvZG9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVfcHJvamVjdCgpIHtcclxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWxpc3QnKS5xdWVyeVNlbGVjdG9yKCd1bCcpXHJcblxyXG4gICAgaWYgKHVsLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBsZXQgY2F0ZWdvcnlfdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ya3NwYWNlLWhlYWRlcicpLnF1ZXJ5U2VsZWN0b3IoJ2gxJykuaW5uZXJIVE1MO1xyXG4gICAgICAgIGNvbnN0IHJlbW92YWJsZV9wcm9qZWN0ID0gJ3Byb2plY3RfJytjYXRlZ29yeV90aXRsZTtcclxuICAgICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0XycrY2F0ZWdvcnlfdGl0bGUpO1xyXG4gICAgICAgIGxldCBuZXh0X2xpXHJcblxyXG4gICAgICAgIGlmIChwcm9qZWN0LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgIG5leHRfbGkgPSBwcm9qZWN0LnBhcmVudEVsZW1lbnQubmV4dFNpYmxpbmcucXVlcnlTZWxlY3RvcigncCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5leHRfbGkgPSBwcm9qZWN0LnBhcmVudEVsZW1lbnQucHJldmlvdXNTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaChrZXk9PntcclxuICAgICAgICAgICAgaWYgKGtleS5pbmNsdWRlcygndG9kb18nKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvZG8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXHJcbiAgICAgICAgICAgICAgICBpZiAodG9kby5pbl9jYXRlZ29yeSA9PT0gY2F0ZWdvcnlfdGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9kb18nK3RvZG8udGl0bGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNhdGVnb3J5X3RpdGxlID0gbmV4dF9saS5pbm5lckhUTUw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2hhbmdlX3dvcmtzcGFjZV9kaXNwbGF5KGNhdGVnb3J5X3RpdGxlKVxyXG4gICAgICAgIGxvYWRfdG9kb3MoY2F0ZWdvcnlfdGl0bGUpXHJcbiAgICAgICAgcHJvamVjdC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHJlbW92YWJsZV9wcm9qZWN0KTtcclxuICAgICAgICBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfJytjYXRlZ29yeV90aXRsZSk7XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVfbmV3X3Byb2plY3QgZnJvbSBcIi4vY3JlYXRlLW5ldy1wcm9qZWN0XCJcclxuaW1wb3J0IGNyZWF0ZV9uZXdfdG9kbyBmcm9tIFwiLi9jcmVhdGVfbmV3X3RvZG9cIjtcclxuaW1wb3J0IGxvYWRfcHJvamVjdHMgZnJvbSBcIi4vbG9hZGluZy1wcm9qZWN0c1wiO1xyXG5pbXBvcnQgbG9hZF90b2RvcyBmcm9tIFwiLi9sb2FkaW5nLXRvZG9zXCI7XHJcbmltcG9ydCBkZWxldGVfcHJvamVjdCBmcm9tIFwiLi9kZWxldGUtcHJvamVjdFwiO1xyXG5pbXBvcnQgY2hhbmdlX3dvcmtzcGFjZV9kaXNwbGF5IGZyb20gXCIuL2NoYW5nZS13b3Jrc3BhY2UtZGlzcGxheVwiO1xyXG5cclxuIGNvbnN0IGFkZF9wcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LXRpdGxlJyk7XHJcbiBjb25zdCB0aXRsZV9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJyk7XHJcbiBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXRpdGxlJyk7XHJcbiBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWRlc2NyaXB0aW9uJyk7XHJcbiBjb25zdCBkdWVfZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWR1ZURhdGUnKTtcclxuIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tcHJpb3JpdHknKTtcclxuIGNvbnN0IGRlbGV0ZV9wcm9qZWN0X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtcHJvamVjdCcpXHJcbiBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpXHJcbiBjb25zdCBuZXdfdG9kb19idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLW5ldy10b2RvJyk7XHJcbiBjb25zdCBhZGRfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1uZXctdG9kbycpXHJcbiBcclxuYWRkX3Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgY29uc3QgbmV3X3Byb2plY3RfdGl0bGUgPSB0aXRsZV9pbnB1dC52YWx1ZTtcclxuICAgIGNyZWF0ZV9uZXdfcHJvamVjdChuZXdfcHJvamVjdF90aXRsZSk7XHJcbn0pO1xyXG5cclxuZGVsZXRlX3Byb2plY3RfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGRlbGV0ZV9wcm9qZWN0KCk7XHJcbn0pXHJcblxyXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdF9kZWZhdWx0JywgJ2RlZmF1bHQnKVxyXG5sb2FkX3Byb2plY3RzKClcclxuY2hhbmdlX3dvcmtzcGFjZV9kaXNwbGF5KCdkZWZhdWx0JylcclxubG9hZF90b2RvcygnZGVmYXVsdCcpXHJcblxyXG5uZXdfdG9kb19idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAgKCk9PntcclxuICAgIGNyZWF0ZV9uZXdfdG9kbyh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZV9kYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSk7XHJcbn0pO1xyXG5cclxuLy9kaXNhYmxlIGVmZmVjdHMgdGhhdCBcInZpZXctdG9kb1wiIGZ1bmN0aW9uIGNyZWF0ZXNcclxubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgdGl0bGUudmFsdWUgPSAnJztcclxuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gJyc7XHJcbiAgICBkdWVfZGF0ZS52YWx1ZSA9ICcnO1xyXG4gICAgcHJpb3JpdHkudmFsdWUgPSAnTm9uZSdcclxuICAgIHRpdGxlLnJlYWRPbmx5ID0gZmFsc2U7XHJcbiAgICBkZXNjcmlwdGlvbi5yZWFkT25seSA9IGZhbHNlO1xyXG4gICAgZHVlX2RhdGUucmVhZE9ubHkgPSBmYWxzZTtcclxuICAgIHByaW9yaXR5LnJlYWRPbmx5ID0gZmFsc2U7XHJcbiAgICBhZGRfYnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbn0pXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==