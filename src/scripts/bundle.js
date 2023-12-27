/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './src/scripts/modules/js/apiService.js':
      /*!**********************************************!*\
  !*** ./src/scripts/modules/js/apiService.js ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ApiService {\n    apiUrl;\n    studentEmail;\n    /**\n     * Конструктор класса ApiService.\n     * @param apiUrl - URL API для запросов.\n     * @param studentEmail - Email студента для фильтрации данных.\n     */\n    constructor(apiUrl, studentEmail) {\n        this.apiUrl = apiUrl;\n        this.studentEmail = studentEmail;\n    }\n    /**\n     * Получает данные о героях с сервера.\n     * @return Промис с массивом данных о героях.\n     */\n    async getHeroes() {\n        try {\n            const response = await fetch(`${this.apiUrl}?_where[_or][0][studentEmail]=${this.studentEmail}&_where[_or][1][studentEmail]=`);\n            return await response.json();\n        }\n        catch (error) {\n            throw new Error('Произошла ошибка при получении героев');\n        }\n    }\n    /**\n     * Добавляет нового героя на сервер.\n     * @param newHeroData - Данные нового героя.\n     * @return Промис с данными о добавленном герое.\n     */\n    async addHero(newHeroData) {\n        try {\n            const response = await fetch(this.apiUrl, {\n                method: 'POST',\n                body: JSON.stringify(newHeroData),\n                headers: {\n                    'Content-type': 'application/json; charset=UTF-8'\n                }\n            });\n            return await response.json();\n        }\n        catch (error) {\n            throw new Error('Произошла ошибка при добавлении героя');\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiService);\n//# sourceMappingURL=apiService.js.map\n\n//# sourceURL=webpack://stackforge/./src/scripts/modules/js/apiService.js?"
        );

        /***/
      },

    /***/ './src/scripts/modules/js/heroCard.js':
      /*!********************************************!*\
  !*** ./src/scripts/modules/js/heroCard.js ***!
  \********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass HeroCard {\n    title;\n    description;\n    parameters;\n    /**\n     * Конструктор класса HeroCard.\n     * @param title - Заголовок героя.\n     * @param description - Описание героя.\n     * @param parameters - Параметры героя.\n     */\n    constructor(title, description, parameters) {\n        this.title = title;\n        this.description = description;\n        this.parameters = parameters;\n    }\n    /**\n     * Отрисовывает HTML-разметку карточки героя.\n     * @return HTML-разметка карточки героя в виде строки.\n     */\n    render() {\n        return `\n      <div class="card-wrapper">\n          <div class="card">\n              <div class="card-title">\n                  <h2 class="card-title-text">${this.title}</h2>\n              </div>\n              <div class="card-description">\n                  <p class="card-description-text">${this.description}</p>\n                  <div class="card-parameters">\n                      ${Object.entries(this.parameters)\n            .map(([key, value]) => this.createParameterHtml(key, value))\n            .join(\'\')}\n                  </div>\n              </div>\n          </div>\n      </div>\n    `;\n    }\n    /**\n     * Вспомогательный метод для создания HTML-разметки параметра героя.\n     * @param title - Заголовок параметра.\n     * @param value - Значение параметра.\n     * @return HTML-разметка параметра героя в виде строки.\n     */\n    createParameterHtml(title, value) {\n        return `\n      <div class="card-parameter">\n          <p class="card-parameter-title">${title}</p>\n          <p class="card-parameter-value">${value}</p>\n      </div>\n    `;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroCard);\n//# sourceMappingURL=heroCard.js.map\n\n//# sourceURL=webpack://stackforge/./src/scripts/modules/js/heroCard.js?'
        );

        /***/
      },

    /***/ './src/scripts/modules/js/heroController.js':
      /*!**************************************************!*\
  !*** ./src/scripts/modules/js/heroController.js ***!
  \**************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiService */ \"./src/scripts/modules/js/apiService.js\");\n/* harmony import */ var _heroCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heroCard */ \"./src/scripts/modules/js/heroCard.js\");\n\n\nclass HeroController {\n    apiService;\n    heroCardContainer;\n    form;\n    addHeroButton;\n    errorText;\n    /**\n     * Конструктор класса HeroController.\n     * @param apiUrl - URL API для запросов.\n     * @param studentEmail - Email студента для фильтрации данных.\n     * @param containerId - ID контейнера для карточек героев.\n     * @param formId - ID формы для добавления нового героя.\n     */\n    constructor(apiUrl, studentEmail, containerId, formId) {\n        this.apiService = new _apiService__WEBPACK_IMPORTED_MODULE_0__[\"default\"](apiUrl, studentEmail);\n        this.heroCardContainer = document.getElementById(containerId);\n        this.form = document.forms.namedItem(formId);\n        this.addHeroButton = document.querySelector('#addHero');\n        this.errorText = document.querySelector('#errorText');\n        this.initialize();\n    }\n    /**\n     * Инициализирует контроллер.\n     */\n    initialize() {\n        if (!this.heroCardContainer ||\n            !this.form ||\n            !this.addHeroButton ||\n            !this.errorText) {\n            console.error('Контейнер, форма, кнопка или блок ошибки не найдены');\n            return;\n        }\n        this.form.addEventListener('submit', (evt) => this.handleFormSubmit(evt));\n        this.fetchAndRenderHeroes();\n    }\n    /**\n     * Получает данные о героях с сервера и отрисовывает их.\n     */\n    async fetchAndRenderHeroes() {\n        try {\n            const heroes = await this.apiService.getHeroes();\n            this.renderHeroes(heroes);\n        }\n        catch (error) {\n            console.error('Ошибка при получении героев:', error.message);\n        }\n    }\n    /**\n     * Отрисовывает карточки героев.\n     * @param heroesData - Массив данных о героях.\n     */\n    renderHeroes(heroesData) {\n        this.clearContainer();\n        for (const heroData of heroesData) {\n            if (this.isValidHeroData(heroData)) {\n                const { title, description, str, agi, hp, int } = heroData;\n                const parameters = { str, agi, hp, int };\n                const heroCard = new _heroCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title, description, parameters);\n                // @ts-ignore\n                this.heroCardContainer.insertAdjacentHTML('beforeend', heroCard.render());\n            }\n            else {\n                console.error('Некорректные данные героя:', heroData);\n            }\n        }\n    }\n    /**\n     * Очищает контейнер с карточками героев.\n     */\n    clearContainer() {\n        if (this.heroCardContainer) {\n            this.heroCardContainer.innerHTML = '';\n        }\n    }\n    /**\n     * Обрабатывает событие отправки формы.\n     * @param evt - Объект события.\n     */\n    async handleFormSubmit(evt) {\n        evt.preventDefault();\n        if (!this.addHeroButton) {\n            console.error('Кнопка \"Добавить героя\" не найдена');\n            return;\n        }\n        this.addHeroButton.disabled = true;\n        this.addHeroButton.textContent = 'Отправка данных...';\n        // @ts-ignore\n        const newHeroData = {\n            title: this.form?.elements.title?.value,\n            description: this.form?.elements.description?.value,\n            str: this.form?.elements.str?.value,\n            agi: this.form?.elements.agi?.value,\n            hp: this.form?.elements.hp?.value,\n            int: this.form?.elements.int?.value,\n            studentEmail: 'awesome.windofantasi@yandex.ru'\n        };\n        if (this.isValidHeroData(newHeroData)) {\n            await this.addHeroToServer(newHeroData);\n            await this.fetchAndRenderHeroes();\n        }\n        else {\n            console.error('Некорректные данные нового героя:', newHeroData);\n        }\n        this.addHeroButton.disabled = false;\n        this.addHeroButton.textContent = 'Отправить';\n    }\n    /**\n     * Добавляет нового героя на сервер.\n     * @param newHeroData - Данные нового героя.\n     */\n    async addHeroToServer(newHeroData) {\n        try {\n            const data = await this.apiService.addHero(newHeroData);\n            if (this.isValidHeroData(data)) {\n                const { title, description, str, agi, hp, int } = data;\n                const parameters = { str, agi, hp, int };\n                const heroCard = new _heroCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title, description, parameters);\n                if (this.form) {\n                    this.form.reset();\n                }\n            }\n            else {\n                console.error('Некорректные данные нового героя:', data);\n                if (this.errorText) {\n                    this.errorText.textContent = 'Произошла ошибка при добавлении героя';\n                }\n            }\n        }\n        catch (error) {\n            if (this.errorText) {\n                this.errorText.textContent = 'Произошла ошибка на сервере';\n            }\n        }\n    }\n    /**\n     * Проверяет корректность данных героя.\n     * @param heroData - Данные героя.\n     * @return `true`, если данные корректны, иначе `false`.\n     */\n    isValidHeroData(heroData) {\n        const requiredFields = ['title', 'description', 'str', 'agi', 'hp', 'int'];\n        return requiredFields.every((field) => field in heroData);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroController);\n//# sourceMappingURL=heroController.js.map\n\n//# sourceURL=webpack://stackforge/./src/scripts/modules/js/heroController.js?"
        );

        /***/
      },

    /***/ './src/scripts/modules/js/main.js':
      /*!****************************************!*\
  !*** ./src/scripts/modules/js/main.js ***!
  \****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _heroController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heroController */ \"./src/scripts/modules/js/heroController.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const apiUrl = 'https://api-code.practicum-team.ru/heroes';\n    const studentEmail = 'awesome.windofantasi@yandex.ru';\n    const heroController = new _heroController__WEBPACK_IMPORTED_MODULE_0__[\"default\"](apiUrl, studentEmail, 'cards-container', 'addHero');\n});\n//# sourceMappingURL=main.js.map\n\n//# sourceURL=webpack://stackforge/./src/scripts/modules/js/main.js?"
        );

        /***/
      }

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {}
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__(
    './src/scripts/modules/js/main.js'
  );
  /******/
  /******/
})();
