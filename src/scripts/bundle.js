/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/modules/ts/apiService.ts":
/*!**********************************************!*\
  !*** ./src/scripts/modules/ts/apiService.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * ApiService class handles communication with the API for hero-related operations.\n */\nclass ApiService {\n    apiUrl;\n    studentEmail;\n    /**\n     * Constructs an instance of ApiService.\n     *\n     * @param apiUrl - The base URL of the API.\n     * @param studentEmail - The email of the student making requests to the API.\n     */\n    constructor(apiUrl, studentEmail) {\n        this.apiUrl = apiUrl;\n        this.studentEmail = studentEmail;\n    }\n    /**\n     * Fetches the list of heroes from the API for the current student.\n     *\n     * @returns A promise that resolves to an array of hero objects.\n     * @throws Error if there's an issue fetching the heroes.\n     */\n    async getHeroes() {\n        try {\n            const response = await fetch(`${this.apiUrl}?_where[_or][0][studentEmail]=${this.studentEmail}&_where[_or][1][studentEmail]=`);\n            return await response.json();\n        }\n        catch (error) {\n            throw new Error('An error occurred while fetching heroes!');\n        }\n    }\n    /**\n     * Adds a new hero to the API.\n     *\n     * @param newHeroData - The data of the new hero to be added.\n     * @returns A promise that resolves to the data of the added hero.\n     * @throws Error if there's an issue adding the hero.\n     */\n    async addHero(newHeroData) {\n        try {\n            const response = await fetch(this.apiUrl, {\n                method: 'POST',\n                body: JSON.stringify(newHeroData),\n                headers: {\n                    'Content-Type': 'application/json; charset=UTF-8'\n                }\n            });\n            return await response.json();\n        }\n        catch (error) {\n            throw new Error('Произошла ошибка при добавлении героя!');\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiService);\n\n\n//# sourceURL=webpack://stackforge/./src/scripts/modules/ts/apiService.ts?");

/***/ }),

/***/ "./src/scripts/modules/ts/heroCard.ts":
/*!********************************************!*\
  !*** ./src/scripts/modules/ts/heroCard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * Represents a HeroCard that displays information about a hero.\n */\nclass HeroCard {\n    title;\n    description;\n    parameters;\n    /**\n     * Creates an instance of HeroCard.\n     * @param {string} title - The title of the hero.\n     * @param {string} description - The description of the hero.\n     * @param {Record<string, string>} parameters - The parameters of the hero.\n     */\n    constructor(title, description, parameters) {\n        this.title = title;\n        this.description = description;\n        this.parameters = parameters;\n    }\n    /**\n     * Renders HTML markup for the HeroCard.\n     * @return {string} - The HTML markup representing the HeroCard.\n     */\n    render() {\n        return `\n      <div class=\"card\" role=\"region\" aria-labelledby=\"cardTitle\">\n        <div class=\"card__wrapper\">\n          <div class=\"card__title\" role=\"heading\" aria-level=\"3\" id=\"cardTitle\">\n            <h3 class=\"card__title__text\">${this.title}</h3>\n          </div>\n          <div class=\"card__description\">\n            <p class=\"card__description__text\" role=\"paragraph\">${this.description}</p>\n            <ul class=\"card__description__params\" role=\"list\">\n              ${Object.entries(this.parameters)\n            .map(([key, value]) => this.createParameterHtml(key, value))\n            .join('')}\n            </ul>\n          </div>\n        </div>\n      </div>\n    `;\n    }\n    /**\n     * Creates HTML markup for a parameter.\n     * @param {string} title - The title of the parameter.\n     * @param {string} value - The value of the parameter.\n     * @return {string} - The HTML markup representing the parameter.\n     */\n    createParameterHtml(title, value) {\n        return `\n      <li class=\"card__param\" role=\"listitem\">\n          <p class=\"card__param__title\" role=\"paragraph\">${title}</p>\n          <p class=\"card__param__value\" role=\"paragraph\">${value}</p>\n      </li>\n    `;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroCard);\n\n\n//# sourceURL=webpack://stackforge/./src/scripts/modules/ts/heroCard.ts?");

/***/ }),

/***/ "./src/scripts/modules/ts/heroController.ts":
/*!**************************************************!*\
  !*** ./src/scripts/modules/ts/heroController.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiService */ \"./src/scripts/modules/ts/apiService.ts\");\n/* harmony import */ var _heroCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heroCard */ \"./src/scripts/modules/ts/heroCard.ts\");\n\n\nclass HeroController {\n    studentEmail;\n    apiService;\n    heroCardContainer;\n    form;\n    addHeroButton;\n    errorText;\n    constructor(apiUrl, studentEmail, containerId, formId) {\n        this.studentEmail = studentEmail;\n        this.apiService = new _apiService__WEBPACK_IMPORTED_MODULE_0__[\"default\"](apiUrl, this.studentEmail);\n        this.heroCardContainer = document.getElementById(containerId);\n        this.form = document.forms.namedItem(formId);\n        this.addHeroButton = document.querySelector('#addHero');\n        this.errorText = document.querySelector('#errorText');\n        this.initialize();\n    }\n    initialize() {\n        if (!this.heroCardContainer ||\n            !this.form ||\n            !this.addHeroButton ||\n            !this.errorText) {\n            console.log(`this.heroCardContainer = ${this.heroCardContainer}`);\n            console.log(`this.form = ${this.form}`);\n            console.log(`this.addHeroButton = ${this.addHeroButton}`);\n            console.log(`this.errorText = ${this.errorText}`);\n            console.error('Контейнер, форма, кнопка или блок ошибки не найдены!');\n            return;\n        }\n        this.form.addEventListener('submit', (evt) => this.handleFormSubmit(evt));\n        this.fetchAndRenderHeroes();\n    }\n    async fetchAndRenderHeroes() {\n        try {\n            const heroes = await this.apiService.getHeroes();\n            this.renderHeroes(heroes);\n        }\n        catch (error) {\n            console.error('Ошибка при получении героев:', error.message);\n        }\n    }\n    renderHeroes(heroesData) {\n        this.clearContainer();\n        for (const heroData of heroesData) {\n            if (this.isValidHeroData(heroData)) {\n                const { title, description, str, agi, hp, int } = heroData;\n                const parameters = { str, agi, hp, int };\n                const heroCard = new _heroCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title, description, parameters);\n                // @ts-ignore\n                this.heroCardContainer.insertAdjacentHTML('beforeend', heroCard.render());\n            }\n            else {\n                console.error('Некорректные данные героя:', heroData);\n            }\n        }\n    }\n    clearContainer() {\n        if (this.heroCardContainer && this.heroCardContainer.children.length > 0) {\n            this.heroCardContainer.innerHTML = '';\n        }\n    }\n    async handleFormSubmit(evt) {\n        evt.preventDefault();\n        if (!this.addHeroButton) {\n            console.error('Кнопка \"Добавить героя\" не найдена!');\n            return;\n        }\n        this.addHeroButton.disabled = true;\n        this.addHeroButton.textContent = 'Отправка данных...';\n        // @ts-ignore\n        const formData = new FormData(this.form);\n        try {\n            const newHeroData = {\n                studentEmail: this.studentEmail,\n                title: formData.get('title'),\n                description: formData.get('description'),\n                str: formData.get('str'),\n                agi: formData.get('agi'),\n                hp: formData.get('hp'),\n                int: formData.get('int')\n            };\n            if (this.isValidHeroData(newHeroData)) {\n                await this.addHeroToServer(newHeroData);\n                await this.fetchAndRenderHeroes();\n            }\n            else {\n                console.error('Некорректные данные нового героя:', newHeroData);\n            }\n        }\n        catch (error) {\n            console.error('Ошибка при обработке формы:', error.message);\n        }\n        this.addHeroButton.disabled = false;\n        this.addHeroButton.textContent = 'Отправить';\n    }\n    async addHeroToServer(newHeroData) {\n        try {\n            const data = await this.apiService.addHero(newHeroData);\n            if (this.isValidHeroData(data)) {\n                const { title, description, str, agi, hp, int } = data;\n                const parameters = { str, agi, hp, int };\n                const heroCard = new _heroCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title, description, parameters);\n                if (this.form) {\n                    this.form.reset();\n                }\n                if (this.heroCardContainer) {\n                    this.heroCardContainer.insertAdjacentHTML('beforeend', heroCard.render());\n                }\n            }\n            else {\n                console.error('Некорректные данные нового героя:', data);\n                if (this.errorText) {\n                    this.errorText.textContent = 'Произошла ошибка при добавлении героя!';\n                }\n            }\n        }\n        catch (error) {\n            if (this.errorText) {\n                this.errorText.textContent = 'Произошла ошибка на сервере!';\n            }\n        }\n    }\n    isValidHeroData(heroData) {\n        const requiredFields = ['title', 'description', 'str', 'agi', 'hp', 'int'];\n        return requiredFields.every((field) => field in heroData);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroController);\n\n\n//# sourceURL=webpack://stackforge/./src/scripts/modules/ts/heroController.ts?");

/***/ }),

/***/ "./src/scripts/modules/ts/main.ts":
/*!****************************************!*\
  !*** ./src/scripts/modules/ts/main.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _heroController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heroController */ \"./src/scripts/modules/ts/heroController.ts\");\n\n// Initializing the application when the DOM is fully loaded\ndocument.addEventListener('DOMContentLoaded', () => {\n    // API URL for interacting with the server\n    const apiUrl = 'https://api-code.practicum-team.ru/heroes/';\n    // Student's email address for identification\n    const studentEmail = 'awesome.windofantasi@yandex.ru';\n    // Creating an instance of the HeroController class to manage heroes\n    const heroController = new _heroController__WEBPACK_IMPORTED_MODULE_0__[\"default\"](apiUrl, studentEmail, 'cards__container', // ID of the container for hero cards\n    'addHero' // ID of the form for adding new heroes\n    );\n});\n\n\n//# sourceURL=webpack://stackforge/./src/scripts/modules/ts/main.ts?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/modules/ts/main.ts");
/******/ 	
/******/ })()
;