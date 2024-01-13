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

    const new_todo = new Todo(title.value, description.value, due_date.value, priority.value);

    localStorage.setItem('todo_'+title.value, JSON.stringify(new_todo))

    ;(0,_add_todo_to_DOM__WEBPACK_IMPORTED_MODULE_0__["default"])(new_todo);
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
 
 const new_todo_btn = document.getElementById('add-new-todo');
 
add_project.addEventListener('click', ()=>{
    const new_project_title = title_input.value;
    (0,_create_new_project__WEBPACK_IMPORTED_MODULE_0__["default"])(new_project_title);
});

(0,_create_new_project__WEBPACK_IMPORTED_MODULE_0__["default"])('default');

new_todo_btn.addEventListener('click',  ()=>{
    (0,_create_new_todo__WEBPACK_IMPORTED_MODULE_1__["default"])(title, description, due_date, priority);
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBa0U7QUFDbEU7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRUFBd0I7QUFDaEMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7OztBQ1ZnRDtBQUNoRDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBZTtBQUNuQjs7Ozs7Ozs7OztBQ25CZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7OztVQ3pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ05xRDtBQUNMO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQWtCO0FBQ3RCLENBQUM7QUFDRDtBQUNBLCtEQUFrQjtBQUNsQjtBQUNBO0FBQ0EsSUFBSSw0REFBZTtBQUNuQixDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2NyZWF0ZS1uZXctcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2NoYW5nZS13b3Jrc3BhY2UtZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2NyZWF0ZV9uZXdfdG9kby5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2FkZC10b2RvLXRvLURPTS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbmdlX3dvcmtzcGFjZV9kaXNwbGF5IGZyb20gXCIuL2NoYW5nZS13b3Jrc3BhY2UtZGlzcGxheVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlX25ld19wcm9qZWN0KG5ld190aXRsZSl7XHJcbiAgICBjb25zdCBjdXJyZW50X3RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmtzcGFjZS1oZWFkZXInKS5xdWVyeVNlbGVjdG9yKCdoMScpO1xyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtbGlzdCcpLnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XHJcbiAgICBjb25zdCB0aXRsZV9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJyk7XHJcblxyXG4gICAgY3VycmVudF90aXRsZS5pbm5lckhUTUwgPSBuZXdfdGl0bGU7XHJcblxyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICBwLmlkID0gJ3Byb2plY3RfJytuZXdfdGl0bGU7XHJcbiAgICBwLmlubmVySFRNTCA9IG5ld190aXRsZTtcclxuXHJcbiAgICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcbiAgICAgICAgY2hhbmdlX3dvcmtzcGFjZV9kaXNwbGF5KG5ld190aXRsZSk7XHJcbiAgICB9KVxyXG5cclxuICAgIGxpLmFwcGVuZENoaWxkKHApO1xyXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0XycrbmV3X3RpdGxlLCBuZXdfdGl0bGUpXHJcblxyXG4gICAgdGl0bGVfaW5wdXQudmFsdWUgPSAnJztcclxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFuZ2Vfd29ya3NwYWNlX2Rpc3BsYXkocHJvamVjdF90aXRsZSkge1xyXG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3Jrc3BhY2UtZGlzcGxheScpO1xyXG4gICAgY29uc3QgY3VycmVudF90b2RvX2xpc3QgPSBkaXNwbGF5LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0b2RvJyk7XHJcbiAgICBjb25zdCBjdXJyZW50X3RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmtzcGFjZS1oZWFkZXInKS5xdWVyeVNlbGVjdG9yKCdoMScpO1xyXG5cclxuICAgIGN1cnJlbnRfdGl0bGUuaW5uZXJIVE1MID0gcHJvamVjdF90aXRsZTtcclxuXHJcbiAgICBjdXJyZW50X3RvZG9fbGlzdC5mb3JFYWNoKHRvZG89PntcclxuICAgICAgICB0b2RvLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbn07IiwiaW1wb3J0IGFkZF90b2RvX3RvX0RPTSBmcm9tIFwiLi9hZGQtdG9kby10by1ET01cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZV9uZXdfdG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZV9kYXRlLCBwcmlvcml0eSkge1xyXG5cclxuICAgIGNsYXNzIFRvZG8ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlX2RhdGUsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmR1ZV9kYXRlID0gZHVlX2RhdGU7XHJcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgICAgICB0aGlzLmluX2NhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmtzcGFjZS1oZWFkZXInKS5xdWVyeVNlbGVjdG9yKCdoMScpLmlubmVySFRNTDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3X3RvZG8gPSBuZXcgVG9kbyh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZV9kYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSk7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9fJyt0aXRsZS52YWx1ZSwgSlNPTi5zdHJpbmdpZnkobmV3X3RvZG8pKVxyXG5cclxuICAgIGFkZF90b2RvX3RvX0RPTShuZXdfdG9kbyk7XHJcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkX3RvZG9fdG9fRE9NKHRvZG8pIHtcclxuICAgIGNvbnN0IGRpc3BsYXlfbGVmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LWRpc3BsYXknKTtcclxuICAgIGNvbnN0IGRpc3BsYXlfcmlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQtZGlzcGxheScpO1xyXG5cclxuICAgIGNvbnN0IGxlZnRfdG9kb3MgPSBkaXNwbGF5X2xlZnQucXVlcnlTZWxlY3RvckFsbCgnI3RvZG8nKTtcclxuICAgIGNvbnN0IHJpZ2h0X3RvZG9zID0gZGlzcGxheV9yaWdodC5xdWVyeVNlbGVjdG9yQWxsKCcjdG9kbycpO1xyXG5cclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNvbnN0IGJ0bl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgbGVmdF9idG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IHJpZ2h0X2J0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgY29tcGxldGVfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGNvbnN0IGVkaXRfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGNvbnN0IGRlbGV0ZV9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgY29uc3QgY29tcGxldGVkX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBjb25zdCBlZGl0X2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBjb25zdCBkZWxldGVfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuXHJcblxyXG4gICAgY2FyZC5pZCA9ICd0b2RvJztcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXHJcbiAgICBidG5fY29udGFpbmVyLmlkID0gJ3RvZG8tYnRucydcclxuICAgIGxlZnRfYnRucy5pZCA9ICdsZWZ0J1xyXG4gICAgcmlnaHRfYnRucy5pZCA9ICdyaWdodCdcclxuICAgIGNvbXBsZXRlX2J0bi5jbGFzc0xpc3QuYWRkKCduYi1idXR0b24nKVxyXG4gICAgZWRpdF9idG4uY2xhc3NMaXN0LmFkZCgnbmItYnV0dG9uJylcclxuICAgIGRlbGV0ZV9idG4uY2xhc3NMaXN0LmFkZCgnbmItYnV0dG9uJylcclxuICAgIGNvbXBsZXRlX2J0bi5jbGFzc0xpc3QuYWRkKCdncmVlbicpXHJcbiAgICBlZGl0X2J0bi5jbGFzc0xpc3QuYWRkKCdkZWZhdWx0JylcclxuICAgIGRlbGV0ZV9idG4uY2xhc3NMaXN0LmFkZCgnYmx1ZScpXHJcbiAgICBjb21wbGV0ZV9idG4uY2xhc3NMaXN0LmFkZCgncm91bmRlZCcpXHJcbiAgICBlZGl0X2J0bi5jbGFzc0xpc3QuYWRkKCdyb3VuZGVkJylcclxuICAgIGRlbGV0ZV9idG4uY2xhc3NMaXN0LmFkZCgncm91bmRlZCcpXHJcblxyXG4gICAgY29tcGxldGVkX2ltZy5zcmMgPSAnaW1ncy9jaGVjay5wbmcnXHJcbiAgICBlZGl0X2ltZy5zcmMgPSAnaW1ncy9lZGl0LnBuZydcclxuICAgIGRlbGV0ZV9pbWcuc3JjID0gJ2ltZ3MvZGVsZXRlLnBuZydcclxuXHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSB0b2RvLnRpdGxlO1xyXG4gICAgZHVlLmlubmVySFRNTCA9IHRvZG8uZHVlX2RhdGU7XHJcblxyXG4gICAgY29tcGxldGVfYnRuLmFwcGVuZENoaWxkKGNvbXBsZXRlZF9pbWcpXHJcbiAgICBlZGl0X2J0bi5hcHBlbmRDaGlsZChlZGl0X2ltZylcclxuICAgIGRlbGV0ZV9idG4uYXBwZW5kQ2hpbGQoZGVsZXRlX2ltZylcclxuICAgIGxlZnRfYnRucy5hcHBlbmQoY29tcGxldGVfYnRuLCBlZGl0X2J0bilcclxuICAgIHJpZ2h0X2J0bnMuYXBwZW5kQ2hpbGQoZGVsZXRlX2J0bilcclxuICAgIGJ0bl9jb250YWluZXIuYXBwZW5kKGxlZnRfYnRucywgcmlnaHRfYnRucylcclxuICAgIGNhcmQuYXBwZW5kKHRpdGxlLGR1ZSxidG5fY29udGFpbmVyKVxyXG5cclxuXHJcbiAgICBpZiAobGVmdF90b2Rvcy5sZW5ndGggPiByaWdodF90b2Rvcy5sZW5ndGgpIHtcclxuICAgICAgICBkaXNwbGF5X3JpZ2h0LmFwcGVuZENoaWxkKGNhcmQpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BsYXlfbGVmdC5hcHBlbmRDaGlsZChjYXJkKVxyXG4gICAgfVxyXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZV9uZXdfcHJvamVjdCBmcm9tIFwiLi9jcmVhdGUtbmV3LXByb2plY3RcIlxyXG5pbXBvcnQgY3JlYXRlX25ld190b2RvIGZyb20gXCIuL2NyZWF0ZV9uZXdfdG9kb1wiO1xyXG5cclxuIGNvbnN0IGFkZF9wcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LXRpdGxlJyk7XHJcbiBjb25zdCB0aXRsZV9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJyk7XHJcbiBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXRpdGxlJyk7XHJcbiBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWRlc2NyaXB0aW9uJyk7XHJcbiBjb25zdCBkdWVfZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWR1ZURhdGUnKTtcclxuIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tcHJpb3JpdHknKTtcclxuIFxyXG4gY29uc3QgbmV3X3RvZG9fYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1uZXctdG9kbycpO1xyXG4gXHJcbmFkZF9wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGNvbnN0IG5ld19wcm9qZWN0X3RpdGxlID0gdGl0bGVfaW5wdXQudmFsdWU7XHJcbiAgICBjcmVhdGVfbmV3X3Byb2plY3QobmV3X3Byb2plY3RfdGl0bGUpO1xyXG59KTtcclxuXHJcbmNyZWF0ZV9uZXdfcHJvamVjdCgnZGVmYXVsdCcpO1xyXG5cclxubmV3X3RvZG9fYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgICgpPT57XHJcbiAgICBjcmVhdGVfbmV3X3RvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVfZGF0ZSwgcHJpb3JpdHkpO1xyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==