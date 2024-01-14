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
/* 9 */
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
/* harmony import */ var _loading_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _loading_todos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _delete_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _change_workspace_display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);







 const add_project = document.getElementById('add-project-title');
 const title_input = document.getElementById('project-title');
 const title = document.getElementById('todo-title');
 const description = document.getElementById('todo-description');
 const due_date = document.getElementById('todo-dueDate');
 const priority = document.getElementById('todo-priority');
 const delete_project_button = document.getElementById('delete-project')
 
 const new_todo_btn = document.getElementById('add-new-todo');
 
add_project.addEventListener('click', ()=>{
    const new_project_title = title_input.value;
    (0,_create_new_project__WEBPACK_IMPORTED_MODULE_0__["default"])(new_project_title);
});

delete_project_button.addEventListener('click', ()=>{
    (0,_delete_project__WEBPACK_IMPORTED_MODULE_4__["default"])();
})

localStorage.setItem('project_default', 'default')
;(0,_loading_projects__WEBPACK_IMPORTED_MODULE_2__["default"])()
;(0,_loading_todos__WEBPACK_IMPORTED_MODULE_3__["default"])('default')
;(0,_change_workspace_display__WEBPACK_IMPORTED_MODULE_5__["default"])('default')

new_todo_btn.addEventListener('click',  ()=>{
    ;(0,_create_new_todo__WEBPACK_IMPORTED_MODULE_1__["default"])(title.value, description.value, due_date.value, priority.value);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9zcmMvY3JlYXRlLW5ldy1wcm9qZWN0LmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvY2hhbmdlLXdvcmtzcGFjZS1kaXNwbGF5LmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvbG9hZGluZy10b2Rvcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2NyZWF0ZV9uZXdfdG9kby5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2FkZC10b2RvLXRvLURPTS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2RlbGV0ZS10b2RvLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvY29tcGxldGUtdG9kby5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2xvYWRpbmctcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9kZWxldGUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbmdlX3dvcmtzcGFjZV9kaXNwbGF5IGZyb20gXCIuL2NoYW5nZS13b3Jrc3BhY2UtZGlzcGxheVwiO1xyXG5pbXBvcnQgbG9hZF90b2RvcyBmcm9tIFwiLi9sb2FkaW5nLXRvZG9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVfbmV3X3Byb2plY3QobmV3X3RpdGxlKXtcclxuICAgIGNvbnN0IGN1cnJlbnRfdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ya3NwYWNlLWhlYWRlcicpLnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy1saXN0JykucXVlcnlTZWxlY3RvcigndWwnKTtcclxuICAgIGNvbnN0IHRpdGxlX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdGl0bGUnKTtcclxuXHJcbiAgICBjdXJyZW50X3RpdGxlLmlubmVySFRNTCA9IG5ld190aXRsZTtcclxuXHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgIHAuaWQgPSAncHJvamVjdF8nK25ld190aXRsZTtcclxuICAgIHAuaW5uZXJIVE1MID0gbmV3X3RpdGxlO1xyXG5cclxuICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuICAgICAgICBjaGFuZ2Vfd29ya3NwYWNlX2Rpc3BsYXkobmV3X3RpdGxlKTtcclxuICAgICAgICBsb2FkX3RvZG9zKG5ld190aXRsZSlcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGxpLmFwcGVuZENoaWxkKHApO1xyXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdF8nK25ld190aXRsZSwgbmV3X3RpdGxlKVxyXG4gICAgXHJcbiAgICB0aXRsZV9pbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgY2hhbmdlX3dvcmtzcGFjZV9kaXNwbGF5KG5ld190aXRsZSk7XHJcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhbmdlX3dvcmtzcGFjZV9kaXNwbGF5KHByb2plY3RfdGl0bGUpIHtcclxuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ya3NwYWNlLWRpc3BsYXknKTtcclxuICAgIGNvbnN0IGN1cnJlbnRfdG9kb19saXN0ID0gZGlzcGxheS5xdWVyeVNlbGVjdG9yQWxsKCcjdG9kbycpO1xyXG4gICAgY29uc3QgY3VycmVudF90aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3Jrc3BhY2UtaGVhZGVyJykucXVlcnlTZWxlY3RvcignaDEnKTtcclxuXHJcbiAgICBjdXJyZW50X3RpdGxlLmlubmVySFRNTCA9IHByb2plY3RfdGl0bGU7XHJcblxyXG4gICAgY3VycmVudF90b2RvX2xpc3QuZm9yRWFjaCh0b2RvPT57XHJcbiAgICAgICAgdG9kby5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG59OyIsImltcG9ydCBjcmVhdGVfbmV3X3RvZG8gZnJvbSBcIi4vY3JlYXRlX25ld190b2RvXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRfdG9kb3MoY2F0ZWdvcnkpIHtcclxuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaChrZXk9PntcclxuICAgICAgICBpZiAoa2V5LmluY2x1ZGVzKCd0b2RvXycpKSB7XHJcbiAgICAgICAgICAgbGV0IHRvZG8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXHJcbiAgICAgICAgICAgaWYgKHRvZG8uaW5fY2F0ZWdvcnkgPT09IGNhdGVnb3J5KXtcclxuICAgICAgICAgICAgY3JlYXRlX25ld190b2RvKHRvZG8udGl0bGUsIHRvZG8uZGVzY3JpcHRpb24sIHRvZG8uZHVlX2RhdGUsIHRvZG8ucHJpb3JpdHkpXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn07IiwiaW1wb3J0IGFkZF90b2RvX3RvX0RPTSBmcm9tIFwiLi9hZGQtdG9kby10by1ET01cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZV9uZXdfdG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZV9kYXRlLCBwcmlvcml0eSkge1xyXG5cclxuICAgIGNsYXNzIFRvZG8ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlX2RhdGUsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmR1ZV9kYXRlID0gZHVlX2RhdGU7XHJcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgICAgICB0aGlzLmluX2NhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmtzcGFjZS1oZWFkZXInKS5xdWVyeVNlbGVjdG9yKCdoMScpLmlubmVySFRNTDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3X3RvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZV9kYXRlLCBwcmlvcml0eSk7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9fJyt0aXRsZSwgSlNPTi5zdHJpbmdpZnkobmV3X3RvZG8pKVxyXG5cclxuICAgIGFkZF90b2RvX3RvX0RPTShuZXdfdG9kbyk7XHJcbn07IiwiaW1wb3J0IGRlbGV0ZV90b2RvIGZyb20gXCIuL2RlbGV0ZS10b2RvXCI7XHJcbmltcG9ydCBjb21wbGV0ZV90b2RvIGZyb20gXCIuL2NvbXBsZXRlLXRvZG9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZF90b2RvX3RvX0RPTSh0b2RvKSB7XHJcbiAgICBjb25zdCBkaXNwbGF5X2xlZnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC1kaXNwbGF5Jyk7XHJcbiAgICBjb25zdCBkaXNwbGF5X3JpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0LWRpc3BsYXknKTtcclxuXHJcbiAgICBjb25zdCBsZWZ0X3RvZG9zID0gZGlzcGxheV9sZWZ0LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0b2RvJyk7XHJcbiAgICBjb25zdCByaWdodF90b2RvcyA9IGRpc3BsYXlfcmlnaHQucXVlcnlTZWxlY3RvckFsbCgnI3RvZG8nKTtcclxuXHJcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBjb25zdCBidG5fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGxlZnRfYnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCByaWdodF9idG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGNvbXBsZXRlX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBjb25zdCBlZGl0X2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBjb25zdCBkZWxldGVfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGNvbnN0IGNvbXBsZXRlZF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgY29uc3QgZWRpdF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgY29uc3QgZGVsZXRlX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcblxyXG5cclxuICAgIGNhcmQuaWQgPSAndG9kbyc7XHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxyXG4gICAgYnRuX2NvbnRhaW5lci5pZCA9ICd0b2RvLWJ0bnMnXHJcbiAgICBsZWZ0X2J0bnMuaWQgPSAnbGVmdCdcclxuICAgIHJpZ2h0X2J0bnMuaWQgPSAncmlnaHQnXHJcbiAgICBjb21wbGV0ZV9idG4uY2xhc3NMaXN0LmFkZCgnbmItYnV0dG9uJylcclxuICAgIGVkaXRfYnRuLmNsYXNzTGlzdC5hZGQoJ25iLWJ1dHRvbicpXHJcbiAgICBkZWxldGVfYnRuLmNsYXNzTGlzdC5hZGQoJ25iLWJ1dHRvbicpXHJcbiAgICBjb21wbGV0ZV9idG4uY2xhc3NMaXN0LmFkZCgnZ3JlZW4nKVxyXG4gICAgZWRpdF9idG4uY2xhc3NMaXN0LmFkZCgnZGVmYXVsdCcpXHJcbiAgICBkZWxldGVfYnRuLmNsYXNzTGlzdC5hZGQoJ2JsdWUnKVxyXG4gICAgY29tcGxldGVfYnRuLmNsYXNzTGlzdC5hZGQoJ3JvdW5kZWQnKVxyXG4gICAgZWRpdF9idG4uY2xhc3NMaXN0LmFkZCgncm91bmRlZCcpXHJcbiAgICBkZWxldGVfYnRuLmNsYXNzTGlzdC5hZGQoJ3JvdW5kZWQnKVxyXG5cclxuICAgIGNvbXBsZXRlZF9pbWcuc3JjID0gJ2ltZ3MvY2hlY2sucG5nJ1xyXG4gICAgZWRpdF9pbWcuc3JjID0gJ2ltZ3MvZWRpdC5wbmcnXHJcbiAgICBkZWxldGVfaW1nLnNyYyA9ICdpbWdzL2RlbGV0ZS5wbmcnXHJcblxyXG4gICAgXHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSB0b2RvLnRpdGxlO1xyXG4gICAgZHVlLmlubmVySFRNTCA9IHRvZG8uZHVlX2RhdGU7XHJcbiAgICBcclxuICAgIGNvbXBsZXRlX2J0bi5hcHBlbmRDaGlsZChjb21wbGV0ZWRfaW1nKVxyXG4gICAgZWRpdF9idG4uYXBwZW5kQ2hpbGQoZWRpdF9pbWcpXHJcbiAgICBkZWxldGVfYnRuLmFwcGVuZENoaWxkKGRlbGV0ZV9pbWcpXHJcbiAgICBsZWZ0X2J0bnMuYXBwZW5kKGNvbXBsZXRlX2J0biwgZWRpdF9idG4pXHJcbiAgICByaWdodF9idG5zLmFwcGVuZENoaWxkKGRlbGV0ZV9idG4pXHJcbiAgICBidG5fY29udGFpbmVyLmFwcGVuZChsZWZ0X2J0bnMsIHJpZ2h0X2J0bnMpXHJcbiAgICBjYXJkLmFwcGVuZCh0aXRsZSxkdWUsYnRuX2NvbnRhaW5lcilcclxuXHJcbiAgICBcclxuICAgIGlmIChsZWZ0X3RvZG9zLmxlbmd0aCA+IHJpZ2h0X3RvZG9zLmxlbmd0aCkge1xyXG4gICAgICAgIGRpc3BsYXlfcmlnaHQuYXBwZW5kQ2hpbGQoY2FyZClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGxheV9sZWZ0LmFwcGVuZENoaWxkKGNhcmQpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRlbGV0ZV9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgZGVsZXRlX3RvZG8oY2FyZCwgdG9kbyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb21wbGV0ZV9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgY29tcGxldGVfdG9kbyhjYXJkLCB0b2RvKTtcclxuICAgIH0pO1xyXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZV90b2RvKHRvZG9fRE9NLCB0b2RvX29iamVjdCkge1xyXG4gICAgdG9kb19ET00ucmVtb3ZlKCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9kb18nK3RvZG9fb2JqZWN0LnRpdGxlKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGxldGVfdG9kbyh0b2RvX0RPTSwgdG9kb19vYmplY3QpIHtcclxuICAgIHRvZG9fRE9NLnJlbW92ZSgpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RvZG9fJyt0b2RvX29iamVjdC50aXRsZSlcclxufTsiLCJpbXBvcnQgY3JlYXRlX25ld19wcm9qZWN0IGZyb20gXCIuL2NyZWF0ZS1uZXctcHJvamVjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkX3Byb2plY3RzKCkge1xyXG5cclxuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaChrZXk9PntcclxuICAgICAgICBpZiAoa2V5LmluY2x1ZGVzKCdwcm9qZWN0XycpKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZV9uZXdfcHJvamVjdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn07IiwiaW1wb3J0IGNoYW5nZV93b3Jrc3BhY2VfZGlzcGxheSBmcm9tIFwiLi9jaGFuZ2Utd29ya3NwYWNlLWRpc3BsYXlcIjtcclxuaW1wb3J0IGxvYWRfdG9kb3MgZnJvbSBcIi4vbG9hZGluZy10b2Rvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlX3Byb2plY3QoKSB7XHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy1saXN0JykucXVlcnlTZWxlY3RvcigndWwnKVxyXG5cclxuICAgIGlmICh1bC5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgbGV0IGNhdGVnb3J5X3RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmtzcGFjZS1oZWFkZXInKS5xdWVyeVNlbGVjdG9yKCdoMScpLmlubmVySFRNTDtcclxuICAgICAgICBjb25zdCByZW1vdmFibGVfcHJvamVjdCA9ICdwcm9qZWN0XycrY2F0ZWdvcnlfdGl0bGU7XHJcbiAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdF8nK2NhdGVnb3J5X3RpdGxlKTtcclxuICAgICAgICBsZXQgbmV4dF9saVxyXG5cclxuICAgICAgICBpZiAocHJvamVjdC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZykge1xyXG4gICAgICAgICAgICBuZXh0X2xpID0gcHJvamVjdC5wYXJlbnRFbGVtZW50Lm5leHRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXh0X2xpID0gcHJvamVjdC5wYXJlbnRFbGVtZW50LnByZXZpb3VzU2libGluZy5xdWVyeVNlbGVjdG9yKCdwJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goa2V5PT57XHJcbiAgICAgICAgICAgIGlmIChrZXkuaW5jbHVkZXMoJ3RvZG9fJykpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b2RvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRvZG8uaW5fY2F0ZWdvcnkgPT09IGNhdGVnb3J5X3RpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RvZG9fJyt0b2RvLnRpdGxlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBjYXRlZ29yeV90aXRsZSA9IG5leHRfbGkuaW5uZXJIVE1MO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNoYW5nZV93b3Jrc3BhY2VfZGlzcGxheShjYXRlZ29yeV90aXRsZSlcclxuICAgICAgICBsb2FkX3RvZG9zKGNhdGVnb3J5X3RpdGxlKVxyXG4gICAgICAgIHByb2plY3QucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShyZW1vdmFibGVfcHJvamVjdCk7XHJcbiAgICAgICAgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0XycrY2F0ZWdvcnlfdGl0bGUpO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlX25ld19wcm9qZWN0IGZyb20gXCIuL2NyZWF0ZS1uZXctcHJvamVjdFwiXHJcbmltcG9ydCBjcmVhdGVfbmV3X3RvZG8gZnJvbSBcIi4vY3JlYXRlX25ld190b2RvXCI7XHJcbmltcG9ydCBsb2FkX3Byb2plY3RzIGZyb20gXCIuL2xvYWRpbmctcHJvamVjdHNcIjtcclxuaW1wb3J0IGxvYWRfdG9kb3MgZnJvbSBcIi4vbG9hZGluZy10b2Rvc1wiO1xyXG5pbXBvcnQgZGVsZXRlX3Byb2plY3QgZnJvbSBcIi4vZGVsZXRlLXByb2plY3RcIjtcclxuaW1wb3J0IGNoYW5nZV93b3Jrc3BhY2VfZGlzcGxheSBmcm9tIFwiLi9jaGFuZ2Utd29ya3NwYWNlLWRpc3BsYXlcIjtcclxuXHJcbiBjb25zdCBhZGRfcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC10aXRsZScpO1xyXG4gY29uc3QgdGl0bGVfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10aXRsZScpO1xyXG4gY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZScpO1xyXG4gY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kZXNjcmlwdGlvbicpO1xyXG4gY29uc3QgZHVlX2RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kdWVEYXRlJyk7XHJcbiBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXByaW9yaXR5Jyk7XHJcbiBjb25zdCBkZWxldGVfcHJvamVjdF9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLXByb2plY3QnKVxyXG4gXHJcbiBjb25zdCBuZXdfdG9kb19idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLW5ldy10b2RvJyk7XHJcbiBcclxuYWRkX3Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgY29uc3QgbmV3X3Byb2plY3RfdGl0bGUgPSB0aXRsZV9pbnB1dC52YWx1ZTtcclxuICAgIGNyZWF0ZV9uZXdfcHJvamVjdChuZXdfcHJvamVjdF90aXRsZSk7XHJcbn0pO1xyXG5cclxuZGVsZXRlX3Byb2plY3RfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGRlbGV0ZV9wcm9qZWN0KCk7XHJcbn0pXHJcblxyXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdF9kZWZhdWx0JywgJ2RlZmF1bHQnKVxyXG5sb2FkX3Byb2plY3RzKClcclxubG9hZF90b2RvcygnZGVmYXVsdCcpXHJcbmNoYW5nZV93b3Jrc3BhY2VfZGlzcGxheSgnZGVmYXVsdCcpXHJcblxyXG5uZXdfdG9kb19idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAgKCk9PntcclxuICAgIGNyZWF0ZV9uZXdfdG9kbyh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZV9kYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=