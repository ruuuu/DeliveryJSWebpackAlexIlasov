/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n  // импортиркм функцию auth из файла ./modules/auth.js\n\n\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // вызов фукнции\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // вызов фукнции//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBa0MsRUFBRTtBQUNGOztBQUVsQyx5REFBSSxJQUFJO0FBQ1IseURBQUksSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbGl2ZXJ5anN3ZWJwYWNrYWxleGlsYXNvdi8uL3NyYy9tZW51LmpzP2FiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dGggZnJvbSAnLi9tb2R1bGVzL2F1dGgnOyAgLy8g0LjQvNC/0L7RgNGC0LjRgNC60Lwg0YTRg9C90LrRhtC40Y4gYXV0aCDQuNC3INGE0LDQudC70LAgLi9tb2R1bGVzL2F1dGguanNcbmltcG9ydCBtZW51IGZyb20gJy4vbW9kdWxlcy9tZW51JztcblxuYXV0aCgpOyAvLyDQstGL0LfQvtCyINGE0YPQutC90YbQuNC4XG5tZW51KCk7IC8vINCy0YvQt9C+0LIg0YTRg9C60L3RhtC40LgiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\n\n    // элементы на странице это тоже объекты\n    // \n    const buttonAuth = document.querySelector('.buttun-auth'); // кнпока Войти, querySelector получает NodeList, а метод getElementById/ getElementByClassName получает коллекцию\n    const buttonOut = document.querySelector('.button-out'); // кнопка Выйти\n    const modalAuth = document.querySelector('.modal-auth'); // мод окно авторизации\n    const closeAuth = document.querySelector('.close-auth'); // кнопка Кестик  в мод окне(бфстрее найдет)\n    const logInForm = document.querySelector('#logInForm'); // форма Логина, лтбо можно через getElementById() он работет быстрее\n    const inputLogin = document.querySelector('#login'); // поле Логин\n    const inputPassword = document.querySelector('#password'); //  поле Пароль\n    const userName = document.querySelector('.user-name'); // место дял юзернейм\n    const errorElem = document.querySelector('.error');\n\n    const login = (user) => { // фукнция Логина, принмиает объект\n        buttonAuth.style.display = 'none';\n        buttonOut.style.display = 'block';\n        userName.style.display = 'flex';\n        userName.textContent = user.login;\n        modalAuth.style.display = 'none';\n        console.log('userName.textContent', userName.textContent);\n\n\n    }\n\n\n\n    const logout = () => { // фукнция разлогин\n\n        userName.style.display = 'none';\n        buttonAuth.style.display = 'flex';\n        buttonOut.style.display = 'none';\n        userName.textContent = '';\n        localStorage.removeItem('user'); // удаляем user из хранилища localstorage, чтоыб при разлгине, если обновим станицу, то имя чтоб не отображадь\n    }\n\n\n\n    buttonAuth.addEventListener('click', () => { //addEventListener - метод(слушаетль на ёлементе, он ожидает когда нажмут на кнопку), на кнпоку buttonAuth повеисли событие клика, после клика выполнится функция котрую передаем\n        modalAuth.style.display = 'flex'; // elem.style.навание сво-тва = значение свойства\n        console.dir(modalAuth);\n    });\n\n\n    buttonOut.addEventListener('click', () => { // нажатие на кнопку Выйти\n        logout();\n    });\n\n\n    closeAuth.addEventListener('click', () => { // нажати на  кнпоку закрытия крестик\n        modalAuth.style.display = 'none';\n    });\n\n\n    // у формы есть событие submit, это событие отправки формы:\n    logInForm.addEventListener('submit', (evt) => { // evt-  объект события\n        evt.preventDefault(); // отменяет действие по умолчнаию, это после отправки формы станица перезагружается\n        // console.dir(event);\n        // console.dir(inputLogin);\n        const user = {\n            login: inputLogin.value,\n            password: inputPassword.value\n        }\n\n        login(user); // вызов фукнуии\n\n        // if (userName.textContent == '') {\n        //     console.log('ввели ', userName.textContent);\n        //     errorElem.style.display = 'block';\n        // }\n\n        localStorage.setItem('user', JSON.stringify(user)); //  сохранеям user в браузере(в  LocalStorage), данные добавляем в localstorage  чтобы при перезагрузке бразуера данные авторизации не слетали\n        // JSON.stringify(obj)  переводит объект в строку\n    });\n\n\n    if (localStorage.getItem('user')) { //  если есть объект user\n        login(JSON.parse(localStorage.getItem('user'))); // вызоы метда login,  переводит из строки в  объект\n\n    }\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9ELDZEQUE2RDtBQUM3RCw2REFBNkQ7QUFDN0QsNkRBQTZEO0FBQzdELDREQUE0RDtBQUM1RCx5REFBeUQ7QUFDekQsK0RBQStEO0FBQy9ELDJEQUEyRDtBQUMzRDs7QUFFQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7OztBQUlBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7Ozs7QUFJQSxpREFBaUQ7QUFDakQsMENBQTBDO0FBQzFDO0FBQ0EsS0FBSzs7O0FBR0wsZ0RBQWdEO0FBQ2hEO0FBQ0EsS0FBSzs7O0FBR0wsZ0RBQWdEO0FBQ2hEO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSxvREFBb0Q7QUFDcEQsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDREQUE0RDtBQUM1RDtBQUNBLEtBQUs7OztBQUdMLHdDQUF3QztBQUN4Qyx5REFBeUQ7O0FBRXpEO0FBQ0E7OztBQUdBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVsaXZlcnlqc3dlYnBhY2thbGV4aWxhc292Ly4vc3JjL21vZHVsZXMvYXV0aC5qcz9lN2IxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF1dGggPSAoKSA9PiB7XG5cbiAgICAvLyDRjdC70LXQvNC10L3RgtGLINC90LAg0YHRgtGA0LDQvdC40YbQtSDRjdGC0L4g0YLQvtC20LUg0L7QsdGK0LXQutGC0YtcbiAgICAvLyBcbiAgICBjb25zdCBidXR0b25BdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHR1bi1hdXRoJyk7IC8vINC60L3Qv9C+0LrQsCDQktC+0LnRgtC4LCBxdWVyeVNlbGVjdG9yINC/0L7Qu9GD0YfQsNC10YIgTm9kZUxpc3QsINCwINC80LXRgtC+0LQgZ2V0RWxlbWVudEJ5SWQvIGdldEVsZW1lbnRCeUNsYXNzTmFtZSDQv9C+0LvRg9GH0LDQtdGCINC60L7Qu9C70LXQutGG0LjRjlxuICAgIGNvbnN0IGJ1dHRvbk91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tb3V0Jyk7IC8vINC60L3QvtC/0LrQsCDQktGL0LnRgtC4XG4gICAgY29uc3QgbW9kYWxBdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWF1dGgnKTsgLy8g0LzQvtC0INC+0LrQvdC+INCw0LLRgtC+0YDQuNC30LDRhtC40LhcbiAgICBjb25zdCBjbG9zZUF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYXV0aCcpOyAvLyDQutC90L7Qv9C60LAg0JrQtdGB0YLQuNC6ICDQsiDQvNC+0LQg0L7QutC90LUo0LHRhNGB0YLRgNC10LUg0L3QsNC50LTQtdGCKVxuICAgIGNvbnN0IGxvZ0luRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dJbkZvcm0nKTsgLy8g0YTQvtGA0LzQsCDQm9C+0LPQuNC90LAsINC70YLQsdC+INC80L7QttC90L4g0YfQtdGA0LXQtyBnZXRFbGVtZW50QnlJZCgpINC+0L0g0YDQsNCx0L7RgtC10YIg0LHRi9GB0YLRgNC10LVcbiAgICBjb25zdCBpbnB1dExvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luJyk7IC8vINC/0L7Qu9C1INCb0L7Qs9C40L1cbiAgICBjb25zdCBpbnB1dFBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJyk7IC8vICDQv9C+0LvQtSDQn9Cw0YDQvtC70YxcbiAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLW5hbWUnKTsgLy8g0LzQtdGB0YLQviDQtNGP0Lsg0Y7Qt9C10YDQvdC10LnQvFxuICAgIGNvbnN0IGVycm9yRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcicpO1xuXG4gICAgY29uc3QgbG9naW4gPSAodXNlcikgPT4geyAvLyDRhNGD0LrQvdGG0LjRjyDQm9C+0LPQuNC90LAsINC/0YDQuNC90LzQuNCw0LXRgiDQvtCx0YrQtdC60YJcbiAgICAgICAgYnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBidXR0b25PdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHVzZXJOYW1lLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gdXNlci5sb2dpbjtcbiAgICAgICAgbW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1c2VyTmFtZS50ZXh0Q29udGVudCcsIHVzZXJOYW1lLnRleHRDb250ZW50KTtcblxuXG4gICAgfVxuXG5cblxuICAgIGNvbnN0IGxvZ291dCA9ICgpID0+IHsgLy8g0YTRg9C60L3RhtC40Y8g0YDQsNC30LvQvtCz0LjQvVxuXG4gICAgICAgIHVzZXJOYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGJ1dHRvbkF1dGguc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgYnV0dG9uT3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7IC8vINGD0LTQsNC70Y/QtdC8IHVzZXIg0LjQtyDRhdGA0LDQvdC40LvQuNGJ0LAgbG9jYWxzdG9yYWdlLCDRh9GC0L7Ri9CxINC/0YDQuCDRgNCw0LfQu9Cz0LjQvdC1LCDQtdGB0LvQuCDQvtCx0L3QvtCy0LjQvCDRgdGC0LDQvdC40YbRgywg0YLQviDQuNC80Y8g0YfRgtC+0LEg0L3QtSDQvtGC0L7QsdGA0LDQttCw0LTRjFxuICAgIH1cblxuXG5cbiAgICBidXR0b25BdXRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAvL2FkZEV2ZW50TGlzdGVuZXIgLSDQvNC10YLQvtC0KNGB0LvRg9GI0LDQtdGC0LvRjCDQvdCwINGR0LvQtdC80LXQvdGC0LUsINC+0L0g0L7QttC40LTQsNC10YIg0LrQvtCz0LTQsCDQvdCw0LbQvNGD0YIg0L3QsCDQutC90L7Qv9C60YMpLCDQvdCwINC60L3Qv9C+0LrRgyBidXR0b25BdXRoINC/0L7QstC10LjRgdC70Lgg0YHQvtCx0YvRgtC40LUg0LrQu9C40LrQsCwg0L/QvtGB0LvQtSDQutC70LjQutCwINCy0YvQv9C+0LvQvdC40YLRgdGPINGE0YPQvdC60YbQuNGPINC60L7RgtGA0YPRjiDQv9C10YDQtdC00LDQtdC8XG4gICAgICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnOyAvLyBlbGVtLnN0eWxlLtC90LDQstCw0L3QuNC1INGB0LLQvi3RgtCy0LAgPSDQt9C90LDRh9C10L3QuNC1INGB0LLQvtC50YHRgtCy0LBcbiAgICAgICAgY29uc29sZS5kaXIobW9kYWxBdXRoKTtcbiAgICB9KTtcblxuXG4gICAgYnV0dG9uT3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAvLyDQvdCw0LbQsNGC0LjQtSDQvdCwINC60L3QvtC/0LrRgyDQktGL0LnRgtC4XG4gICAgICAgIGxvZ291dCgpO1xuICAgIH0pO1xuXG5cbiAgICBjbG9zZUF1dGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IC8vINC90LDQttCw0YLQuCDQvdCwICDQutC90L/QvtC60YMg0LfQsNC60YDRi9GC0LjRjyDQutGA0LXRgdGC0LjQulxuICAgICAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcblxuXG4gICAgLy8g0YMg0YTQvtGA0LzRiyDQtdGB0YLRjCDRgdC+0LHRi9GC0LjQtSBzdWJtaXQsINGN0YLQviDRgdC+0LHRi9GC0LjQtSDQvtGC0L/RgNCw0LLQutC4INGE0L7RgNC80Ys6XG4gICAgbG9nSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHsgLy8gZXZ0LSAg0L7QsdGK0LXQutGCINGB0L7QsdGL0YLQuNGPXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpOyAvLyDQvtGC0LzQtdC90Y/QtdGCINC00LXQudGB0YLQstC40LUg0L/QviDRg9C80L7Qu9GH0L3QsNC40Y4sINGN0YLQviDQv9C+0YHQu9C1INC+0YLQv9GA0LDQstC60Lgg0YTQvtGA0LzRiyDRgdGC0LDQvdC40YbQsCDQv9C10YDQtdC30LDQs9GA0YPQttCw0LXRgtGB0Y9cbiAgICAgICAgLy8gY29uc29sZS5kaXIoZXZlbnQpO1xuICAgICAgICAvLyBjb25zb2xlLmRpcihpbnB1dExvZ2luKTtcbiAgICAgICAgY29uc3QgdXNlciA9IHtcbiAgICAgICAgICAgIGxvZ2luOiBpbnB1dExvZ2luLnZhbHVlLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IGlucHV0UGFzc3dvcmQudmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIGxvZ2luKHVzZXIpOyAvLyDQstGL0LfQvtCyINGE0YPQutC90YPQuNC4XG5cbiAgICAgICAgLy8gaWYgKHVzZXJOYW1lLnRleHRDb250ZW50ID09ICcnKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygn0LLQstC10LvQuCAnLCB1c2VyTmFtZS50ZXh0Q29udGVudCk7XG4gICAgICAgIC8vICAgICBlcnJvckVsZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTsgLy8gINGB0L7RhdGA0LDQvdC10Y/QvCB1c2VyINCyINCx0YDQsNGD0LfQtdGA0LUo0LIgIExvY2FsU3RvcmFnZSksINC00LDQvdC90YvQtSDQtNC+0LHQsNCy0LvRj9C10Lwg0LIgbG9jYWxzdG9yYWdlICDRh9GC0L7QsdGLINC/0YDQuCDQv9C10YDQtdC30LDQs9GA0YPQt9C60LUg0LHRgNCw0LfRg9C10YDQsCDQtNCw0L3QvdGL0LUg0LDQstGC0L7RgNC40LfQsNGG0LjQuCDQvdC1INGB0LvQtdGC0LDQu9C4XG4gICAgICAgIC8vIEpTT04uc3RyaW5naWZ5KG9iaikgINC/0LXRgNC10LLQvtC00LjRgiDQvtCx0YrQtdC60YIg0LIg0YHRgtGA0L7QutGDXG4gICAgfSk7XG5cblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSB7IC8vICDQtdGB0LvQuCDQtdGB0YLRjCDQvtCx0YrQtdC60YIgdXNlclxuICAgICAgICBsb2dpbihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpKTsgLy8g0LLRi9C30L7RiyDQvNC10YLQtNCwIGxvZ2luLCAg0L/QtdGA0LXQstC+0LTQuNGCINC40Lcg0YHRgtGA0L7QutC4INCyICDQvtCx0YrQtdC60YJcblxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBhdXRoIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n\n    const restaurant = 'food-band';\n\n    const renrederItems = (data) => {\n        console.log(data);\n    }\n\n\n    // fetch асинхронный метод , по умолчанию у этого меода свойство method: 'GET' \n    //     `./db/${restaurant}.json`\n    fetch('https://test-b8c19-default-rtdb.firebaseio.com/db/partners.json', { // загрузили json файлы из папки db на firebase\n        method: 'GET'\n    })\n        .then((response) => response.json()) // вернет массив [{}, {}, {}, {}, {}]\n        .then((data) => { // перелаем  даные полученные от сервера- json\n            renrederItems(data);\n        })\n        .catch((error) => { //  обрабатываем ошибку\n            console.log(error);\n        })\n    // .finally(console.log('Ошибка'))// выполнится в любом случае\n\n    // firebase нужен дл эмуляции работы с сервером(облачное хранилище)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsbUJBQW1CLFdBQVc7QUFDOUIsK0VBQStFO0FBQy9FO0FBQ0EsS0FBSztBQUNMLGlFQUFpRSxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ2pGLDBCQUEwQjtBQUMxQjtBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUI7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbGl2ZXJ5anN3ZWJwYWNrYWxleGlsYXNvdi8uL3NyYy9tb2R1bGVzL21lbnUuanM/MmZhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZW51ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgcmVzdGF1cmFudCA9ICdmb29kLWJhbmQnO1xuXG4gICAgY29uc3QgcmVucmVkZXJJdGVtcyA9IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH1cblxuXG4gICAgLy8gZmV0Y2gg0LDRgdC40L3RhdGA0L7QvdC90YvQuSDQvNC10YLQvtC0ICwg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0YMg0Y3RgtC+0LPQviDQvNC10L7QtNCwINGB0LLQvtC50YHRgtCy0L4gbWV0aG9kOiAnR0VUJyBcbiAgICAvLyAgICAgYC4vZGIvJHtyZXN0YXVyYW50fS5qc29uYFxuICAgIGZldGNoKCdodHRwczovL3Rlc3QtYjhjMTktZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL2RiL3BhcnRuZXJzLmpzb24nLCB7IC8vINC30LDQs9GA0YPQt9C40LvQuCBqc29uINGE0LDQudC70Ysg0LjQtyDQv9Cw0L/QutC4IGRiINC90LAgZmlyZWJhc2VcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKSAvLyDQstC10YDQvdC10YIg0LzQsNGB0YHQuNCyIFt7fSwge30sIHt9LCB7fSwge31dXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7IC8vINC/0LXRgNC10LvQsNC10LwgINC00LDQvdGL0LUg0L/QvtC70YPRh9C10L3QvdGL0LUg0L7RgiDRgdC10YDQstC10YDQsC0ganNvblxuICAgICAgICAgICAgcmVucmVkZXJJdGVtcyhkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyAvLyAg0L7QsdGA0LDQsdCw0YLRi9Cy0LDQtdC8INC+0YjQuNCx0LrRg1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KVxuICAgIC8vIC5maW5hbGx5KGNvbnNvbGUubG9nKCfQntGI0LjQsdC60LAnKSkvLyDQstGL0L/QvtC70L3QuNGC0YHRjyDQsiDQu9GO0LHQvtC8INGB0LvRg9GH0LDQtVxuXG4gICAgLy8gZmlyZWJhc2Ug0L3Rg9C20LXQvSDQtNC7INGN0LzRg9C70Y/RhtC40Lgg0YDQsNCx0L7RgtGLINGBINGB0LXRgNCy0LXRgNC+0Lwo0L7QsdC70LDRh9C90L7QtSDRhdGA0LDQvdC40LvQuNGJ0LUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnUiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

/***/ })

/******/ 	});
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;