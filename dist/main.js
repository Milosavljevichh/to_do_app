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
    })

    li.appendChild(p);
    ul.appendChild(li);

    localStorage.setItem('project_'+new_title, new_title)

    title_input.value = '';
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
/* harmony export */   "default": () => (/* binding */ create_new_todo)
/* harmony export */ });
/* harmony import */ var _add_todo_to_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


function create_new_todo(title, description, due_date, priority, in_category) {

    class Todo {
        constructor(title, description, due_date, priority, in_category) {
            this.title = title;
            this.description = description;
            this.due_date = due_date;
            this.priority = priority
            this.in_category = in_category
        }
    }

    const new_todo = new Todo(title.value, description.value, due_date.value, priority.value, in_category);
    (0,_add_todo_to_DOM__WEBPACK_IMPORTED_MODULE_0__["default"])(new_todo);
};

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ add_todo_to_DOM)
/* harmony export */ });
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
/* harmony import */ var _create_new_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



 const add_project = document.getElementById('add-project-title');
 const title_input = document.getElementById('project-title');
 const title = document.getElementById('todo-title');
 const description = document.getElementById('todo-description');
 const due_date = document.getElementById('todo-dueDate');
 const priority = document.getElementById('todo-priority');
 const in_category = document.getElementById('workspace-header').querySelector('h1').innerHTML;

 const new_todo_btn = document.getElementById('add-new-todo');

add_project.addEventListener('click', ()=>{
    const new_project_title = title_input.value;
    (0,_create_new_project__WEBPACK_IMPORTED_MODULE_0__["default"])(new_project_title);
});

new_todo_btn.addEventListener('click',  ()=>{
    (0,_create_new_todo__WEBPACK_IMPORTED_MODULE_1__["default"])(title, description, due_date, priority, in_category);
})

;(0,_create_new_project__WEBPACK_IMPORTED_MODULE_0__["default"])('default');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBa0U7QUFDbEU7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRUFBd0I7QUFDaEMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7OztBQ1ZnRDtBQUNoRDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBZTtBQUNuQjs7Ozs7Ozs7OztBQ2hCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7OztVQ3pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ05xRDtBQUNMO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrREFBa0I7QUFDdEIsQ0FBQztBQUNEO0FBQ0E7QUFDQSxJQUFJLDREQUFlO0FBQ25CLENBQUM7QUFDRDtBQUNBLGdFQUFrQixZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9jcmVhdGUtbmV3LXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9jaGFuZ2Utd29ya3NwYWNlLWRpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9jcmVhdGVfbmV3X3RvZG8uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9hZGQtdG9kby10by1ET00uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYW5nZV93b3Jrc3BhY2VfZGlzcGxheSBmcm9tIFwiLi9jaGFuZ2Utd29ya3NwYWNlLWRpc3BsYXlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZV9uZXdfcHJvamVjdChuZXdfdGl0bGUpe1xyXG4gICAgY29uc3QgY3VycmVudF90aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3Jrc3BhY2UtaGVhZGVyJykucXVlcnlTZWxlY3RvcignaDEnKTtcclxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWxpc3QnKS5xdWVyeVNlbGVjdG9yKCd1bCcpO1xyXG4gICAgY29uc3QgdGl0bGVfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10aXRsZScpO1xyXG5cclxuICAgIGN1cnJlbnRfdGl0bGUuaW5uZXJIVE1MID0gbmV3X3RpdGxlO1xyXG5cclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgcC5pZCA9ICdwcm9qZWN0XycrbmV3X3RpdGxlO1xyXG4gICAgcC5pbm5lckhUTUwgPSBuZXdfdGl0bGU7XHJcblxyXG4gICAgcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4gICAgICAgIGNoYW5nZV93b3Jrc3BhY2VfZGlzcGxheShuZXdfdGl0bGUpO1xyXG4gICAgfSlcclxuXHJcbiAgICBsaS5hcHBlbmRDaGlsZChwKTtcclxuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdF8nK25ld190aXRsZSwgbmV3X3RpdGxlKVxyXG5cclxuICAgIHRpdGxlX2lucHV0LnZhbHVlID0gJyc7XHJcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhbmdlX3dvcmtzcGFjZV9kaXNwbGF5KHByb2plY3RfdGl0bGUpIHtcclxuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ya3NwYWNlLWRpc3BsYXknKTtcclxuICAgIGNvbnN0IGN1cnJlbnRfdG9kb19saXN0ID0gZGlzcGxheS5xdWVyeVNlbGVjdG9yQWxsKCcjdG9kbycpO1xyXG4gICAgY29uc3QgY3VycmVudF90aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3Jrc3BhY2UtaGVhZGVyJykucXVlcnlTZWxlY3RvcignaDEnKTtcclxuXHJcbiAgICBjdXJyZW50X3RpdGxlLmlubmVySFRNTCA9IHByb2plY3RfdGl0bGU7XHJcblxyXG4gICAgY3VycmVudF90b2RvX2xpc3QuZm9yRWFjaCh0b2RvPT57XHJcbiAgICAgICAgdG9kby5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG59OyIsImltcG9ydCBhZGRfdG9kb190b19ET00gZnJvbSBcIi4vYWRkLXRvZG8tdG8tRE9NXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVfbmV3X3RvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVfZGF0ZSwgcHJpb3JpdHksIGluX2NhdGVnb3J5KSB7XHJcblxyXG4gICAgY2xhc3MgVG9kbyB7XHJcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVfZGF0ZSwgcHJpb3JpdHksIGluX2NhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmR1ZV9kYXRlID0gZHVlX2RhdGU7XHJcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgICAgICB0aGlzLmluX2NhdGVnb3J5ID0gaW5fY2F0ZWdvcnlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3X3RvZG8gPSBuZXcgVG9kbyh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZV9kYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSwgaW5fY2F0ZWdvcnkpO1xyXG4gICAgYWRkX3RvZG9fdG9fRE9NKG5ld190b2RvKTtcclxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRfdG9kb190b19ET00odG9kbykge1xyXG4gICAgY29uc3QgZGlzcGxheV9sZWZ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQtZGlzcGxheScpO1xyXG4gICAgY29uc3QgZGlzcGxheV9yaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodC1kaXNwbGF5Jyk7XHJcblxyXG4gICAgY29uc3QgbGVmdF90b2RvcyA9IGRpc3BsYXlfbGVmdC5xdWVyeVNlbGVjdG9yQWxsKCcjdG9kbycpO1xyXG4gICAgY29uc3QgcmlnaHRfdG9kb3MgPSBkaXNwbGF5X3JpZ2h0LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0b2RvJyk7XHJcblxyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3QgYnRuX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBsZWZ0X2J0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgcmlnaHRfYnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBjb21wbGV0ZV9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgY29uc3QgZWRpdF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgY29uc3QgZGVsZXRlX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBjb25zdCBjb21wbGV0ZWRfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgIGNvbnN0IGVkaXRfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgIGNvbnN0IGRlbGV0ZV9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG5cclxuXHJcbiAgICBjYXJkLmlkID0gJ3RvZG8nO1xyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcclxuICAgIGJ0bl9jb250YWluZXIuaWQgPSAndG9kby1idG5zJ1xyXG4gICAgbGVmdF9idG5zLmlkID0gJ2xlZnQnXHJcbiAgICByaWdodF9idG5zLmlkID0gJ3JpZ2h0J1xyXG4gICAgY29tcGxldGVfYnRuLmNsYXNzTGlzdC5hZGQoJ25iLWJ1dHRvbicpXHJcbiAgICBlZGl0X2J0bi5jbGFzc0xpc3QuYWRkKCduYi1idXR0b24nKVxyXG4gICAgZGVsZXRlX2J0bi5jbGFzc0xpc3QuYWRkKCduYi1idXR0b24nKVxyXG4gICAgY29tcGxldGVfYnRuLmNsYXNzTGlzdC5hZGQoJ2dyZWVuJylcclxuICAgIGVkaXRfYnRuLmNsYXNzTGlzdC5hZGQoJ2RlZmF1bHQnKVxyXG4gICAgZGVsZXRlX2J0bi5jbGFzc0xpc3QuYWRkKCdibHVlJylcclxuICAgIGNvbXBsZXRlX2J0bi5jbGFzc0xpc3QuYWRkKCdyb3VuZGVkJylcclxuICAgIGVkaXRfYnRuLmNsYXNzTGlzdC5hZGQoJ3JvdW5kZWQnKVxyXG4gICAgZGVsZXRlX2J0bi5jbGFzc0xpc3QuYWRkKCdyb3VuZGVkJylcclxuXHJcbiAgICBjb21wbGV0ZWRfaW1nLnNyYyA9ICdpbWdzL2NoZWNrLnBuZydcclxuICAgIGVkaXRfaW1nLnNyYyA9ICdpbWdzL2VkaXQucG5nJ1xyXG4gICAgZGVsZXRlX2ltZy5zcmMgPSAnaW1ncy9kZWxldGUucG5nJ1xyXG5cclxuICAgIHRpdGxlLmlubmVySFRNTCA9IHRvZG8udGl0bGU7XHJcbiAgICBkdWUuaW5uZXJIVE1MID0gdG9kby5kdWVfZGF0ZTtcclxuXHJcbiAgICBjb21wbGV0ZV9idG4uYXBwZW5kQ2hpbGQoY29tcGxldGVkX2ltZylcclxuICAgIGVkaXRfYnRuLmFwcGVuZENoaWxkKGVkaXRfaW1nKVxyXG4gICAgZGVsZXRlX2J0bi5hcHBlbmRDaGlsZChkZWxldGVfaW1nKVxyXG4gICAgbGVmdF9idG5zLmFwcGVuZChjb21wbGV0ZV9idG4sIGVkaXRfYnRuKVxyXG4gICAgcmlnaHRfYnRucy5hcHBlbmRDaGlsZChkZWxldGVfYnRuKVxyXG4gICAgYnRuX2NvbnRhaW5lci5hcHBlbmQobGVmdF9idG5zLCByaWdodF9idG5zKVxyXG4gICAgY2FyZC5hcHBlbmQodGl0bGUsZHVlLGJ0bl9jb250YWluZXIpXHJcblxyXG5cclxuICAgIGlmIChsZWZ0X3RvZG9zLmxlbmd0aCA+IHJpZ2h0X3RvZG9zLmxlbmd0aCkge1xyXG4gICAgICAgIGRpc3BsYXlfcmlnaHQuYXBwZW5kQ2hpbGQoY2FyZClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzcGxheV9sZWZ0LmFwcGVuZENoaWxkKGNhcmQpXHJcbiAgICB9XHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlX25ld19wcm9qZWN0IGZyb20gXCIuL2NyZWF0ZS1uZXctcHJvamVjdFwiXHJcbmltcG9ydCBjcmVhdGVfbmV3X3RvZG8gZnJvbSBcIi4vY3JlYXRlX25ld190b2RvXCI7XHJcblxyXG4gY29uc3QgYWRkX3Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtdGl0bGUnKTtcclxuIGNvbnN0IHRpdGxlX2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdGl0bGUnKTtcclxuIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGl0bGUnKTtcclxuIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZGVzY3JpcHRpb24nKTtcclxuIGNvbnN0IGR1ZV9kYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZHVlRGF0ZScpO1xyXG4gY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1wcmlvcml0eScpO1xyXG4gY29uc3QgaW5fY2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ya3NwYWNlLWhlYWRlcicpLnF1ZXJ5U2VsZWN0b3IoJ2gxJykuaW5uZXJIVE1MO1xyXG5cclxuIGNvbnN0IG5ld190b2RvX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbmV3LXRvZG8nKTtcclxuXHJcbmFkZF9wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGNvbnN0IG5ld19wcm9qZWN0X3RpdGxlID0gdGl0bGVfaW5wdXQudmFsdWU7XHJcbiAgICBjcmVhdGVfbmV3X3Byb2plY3QobmV3X3Byb2plY3RfdGl0bGUpO1xyXG59KTtcclxuXHJcbm5ld190b2RvX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICAoKT0+e1xyXG4gICAgY3JlYXRlX25ld190b2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlX2RhdGUsIHByaW9yaXR5LCBpbl9jYXRlZ29yeSk7XHJcbn0pXHJcblxyXG5jcmVhdGVfbmV3X3Byb2plY3QoJ2RlZmF1bHQnKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=