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

/***/ "./src/scripts/classes.js":
/*!********************************!*\
  !*** ./src/scripts/classes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Hero: () => (/* binding */ Hero),\n/* harmony export */   Knight: () => (/* binding */ Knight),\n/* harmony export */   Mage: () => (/* binding */ Mage),\n/* harmony export */   setGameParameters: () => (/* binding */ setGameParameters),\n/* harmony export */   setPlayerHero: () => (/* binding */ setPlayerHero)\n/* harmony export */ });\n// Game settings object\nlet gameParameters = null;\nlet displayPlayerHero = null;\nlet playerHero = null;\n\n// Base class for a hero\nclass Hero {\n  // Constructor of the base class\n  constructor(name, level, healthPoints, stats) {\n    this.name = name;\n    this.level = level;\n    this.healthPoints = healthPoints;\n    this.stats = stats;\n  }\n\n  // Method for displaying hero information in the console\n  displayHero() {\n    const { name, level, healthPoints, stats } = this;\n    const { str, int, agi } = stats;\n\n    console.log(`\n      Name: ${name}\n      Level: ${level}\n      Health Points: ${healthPoints}\n      Strength: ${str}\n      Intelligence: ${int}\n      Agility: ${agi}\n    `);\n  }\n}\n\n// Mage subclass\nclass Mage extends Hero {\n  // Constructor of the subclass\n  constructor(name, level, healthPoints, stats, hasTectonicPotion, mana) {\n    super(name, level, healthPoints, stats);\n    this.hasTectonicPotion = hasTectonicPotion;\n    this.mana = mana;\n  }\n\n  // Method extending the method of the base class\n  displayHero() {\n    super.displayHero();\n\n    console.log(`Mana: ${this.mana}`);\n\n    if (this.hasTectonicPotion === 'true') {\n      console.log('Has Tectonic Potion');\n    }\n  }\n\n  // Healing method for the Mage class\n  healHero(hero) {\n    const { mana, level } = this;\n\n    if (mana > gameParameters.MIN_STAT) {\n      const healAmount = level * 10;\n\n      hero.healthPoints += healAmount;\n      console.log(`${this.name} extends the dance of ${hero.name} by ${healAmount} points.`);\n\n      this.mana -= healAmount * (10 / level) - level;\n    } else {\n      alert('Not enough mana...');\n    }\n  }\n}\n\n// Knight subclass\nclass Knight extends Hero {\n  // Constructor of the subclass\n  constructor(name, level, healthPoints, stats, isHorseTango, energy) {\n    super(name, level, healthPoints, stats);\n    this.isHorseTango = isHorseTango;\n    this.energy = energy;\n  }\n\n  // Method extending the method of the base class\n  displayHero() {\n    super.displayHero();\n\n    console.log(`Energy: ${this.energy}`);\n\n    if (this.isHorseTango === 'true') {\n      console.log('This hero can dance tango on horseback');\n    }\n  }\n\n  // Method to increase hero's agility for the Knight class\n  gainAgility(hero) {\n    const { energy, level } = this;\n\n    if (energy > gameParameters.MIN_STAT) {\n      const gainAmount = (level * energy) / 30;\n\n      if (hero.stats.agi + gainAmount < gameParameters.MAX_STAT) {\n        hero.stats.agi += gainAmount;\n        console.log(`${this.name} increases the agility of ${hero.name} by ${gainAmount} points.`);\n      } else {\n        hero.stats.agi = gameParameters.MAX_STAT;\n      }\n\n      const energyAmount = (gainAmount * 10) / level;\n      this.energy = Math.max(energy - energyAmount, gameParameters.MIN_STAT);\n\n      displayPlayerHero(playerHero);\n    } else {\n      alert('Not enough energy...');\n    }\n  }\n}\n\nconst setGameParameters = (parameters) => {\n  if (!parameters || typeof parameters !== 'object') {\n    console.error('Invalid parameters. Please provide a valid object.');\n    return;\n  }\n  gameParameters = parameters;\n};\n\nfunction setPlayerHero(hero, displayHeroFunction) {\n  playerHero = hero;\n  displayPlayerHero = displayHeroFunction;\n}\n\n\n\n\n//# sourceURL=webpack://StackForge/./src/scripts/classes.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ \"./src/scripts/classes.js\");\n/*            Game Description         */\n\n\n// Function to get input element by id\nconst getElem = (id) => document.getElementById(id);\n\n// Game settings object\nconst gameParameters = {\n  MAX_LEVEL: 10, // Maximum hero level\n  MAX_STAT: 99, // Maximum hero parameter level\n  MIN_STAT: 10 // Minimum level of ability parameter\n};\n\n// Game classes object\nconst gameClasses = {\n  Mage: 'Mage',\n  Knight: 'Knight',\n  Hero: 'Class'\n};\n\n// Opponent hero declaration\nlet enemyHero = null;\n\n// Player hero declaration\nlet playerHero = null;\n\n// Add player hero to the screen\nconst sendToBattleButton = getElem('sendToBattleButton');\n\n// Player hero action\nconst doSkillButton = getElem('doSkillButton');\n\n// Display opponent hero on the screen\nconst getEnemyButton = getElem('getEnemyButton');\n\n// Start battle button\nconst startBattleButton = getElem('startBattleButton');\n\n// Input element for hero name\nconst heroNameInput = getElem('name');\n\n// Input element for hero level\nconst heroLevelInput = getElem('level');\n\n// Input element for hero strength\nconst heroStrengthInput = getElem('strength');\n\n// Input element for hero intelligence\nconst heroIntelligenceInput = getElem('intelligence');\n\n// Input element for hero agility\nconst heroAgilityInput = getElem('agility');\n\n// Input element for additional stat of the hero\nconst heroAdditionalStatInput = getElem('additionalStat');\n\nfunction adjustNumberInput(targetElement, minThreshold, maxThreshold) {\n  // Check if valid arguments are provided\n  if (!targetElement || typeof minThreshold !== 'number' || typeof maxThreshold !== 'number') {\n    console.error(\n      'Invalid arguments. Please provide a valid target element, minimum threshold, and maximum threshold.'\n    );\n    return;\n  }\n\n  // Function to sanitize and adjust the input value\n  function sanitizeAndAdjust() {\n    // Parse the input value as a floating-point number\n    let currentValue = parseFloat(targetElement.value.trim());\n\n    // Set a default value if the parsed value is not a valid number\n    if (isNaN(currentValue)) {\n      currentValue = minThreshold;\n    }\n\n    // Clamp the value within the specified range\n    currentValue = Math.max(minThreshold, Math.min(currentValue, maxThreshold));\n\n    // Update the input value with the sanitized and adjusted value\n    targetElement.value = currentValue.toString();\n  }\n\n  // Add event listeners for input and blur events\n  targetElement.addEventListener('input', sanitizeAndAdjust);\n  targetElement.addEventListener('blur', sanitizeAndAdjust);\n}\n\nfunction adjustInputRegex(targetElement, regex) {\n  // Check for the presence of the provided arguments\n  if (!targetElement || !(regex instanceof RegExp)) {\n    console.error('Invalid arguments. Please provide a valid target element and a regular expression.');\n    return;\n  }\n\n  // Function to adjust the input based on the provided regex\n  function adjustInput() {\n    const inputValue = targetElement.value.trim();\n    const lastCharacter = inputValue.charAt(inputValue.length - 1);\n\n    // Check if the last character satisfies the regex\n    if (!regex.test(lastCharacter)) {\n      // Remove the last character if it doesn't match the regex\n      targetElement.value = inputValue.slice(0, -1);\n    }\n  }\n\n  // Add input event listener\n  targetElement.addEventListener('input', adjustInput);\n\n  // Add blur event listener to ensure final validation on focus loss\n  targetElement.addEventListener('blur', adjustInput);\n}\n\nfunction adjustInputLength(targetElement, maxLength) {\n  // Check for the presence of the provided arguments\n  if (!targetElement || typeof maxLength !== 'number' || maxLength <= 0) {\n    console.error('Invalid arguments. Please provide a valid target element and a positive maxLength.');\n    return;\n  }\n\n  // Function to trim the value and remove trailing spaces\n  function trimAndAdjust() {\n    const trimmedValue = targetElement.value.trim();\n    targetElement.value = trimmedValue.slice(0, maxLength);\n  }\n\n  // Add input event listener\n  targetElement.addEventListener('input', function () {\n    // Check and correct the input length\n    if (targetElement.value.trim().length > maxLength) {\n      trimAndAdjust();\n    }\n  });\n\n  // Add blur event listener\n  targetElement.addEventListener('blur', trimAndAdjust);\n}\n\nconst adjustInput = (target, length, regex, isNum = true, min = 1, max = 1) => (\n  adjustInputLength(target, length), adjustInputRegex(target, regex), isNum && adjustNumberInput(target, min, max)\n);\n\nconst adjustAndValidateInputs = (inputs, length, regex, isNum = true, min = 1, max = 1) =>\n  inputs.forEach((input) => adjustInput(input, length, regex, isNum, min, max));\n\nadjustAndValidateInputs([heroNameInput], 24, /[a-zA-Z0-9а-яА-Я]/, false);\nadjustAndValidateInputs([heroLevelInput], 2, /[0-9]/, true, 1, 10);\nadjustAndValidateInputs(\n  [heroStrengthInput, heroIntelligenceInput, heroAgilityInput, heroAdditionalStatInput],\n  2,\n  /[0-9]/,\n  true,\n  1,\n  99\n);\n\n/*          Game Progress          */\n\n// Function to update hero display\nfunction updateHeroDisplay(hero, prefix) {\n  const getElement = (suffix) => getElem(`${prefix}${suffix}`);\n  const stats = hero.stats;\n\n  getElement('Class').innerHTML = gameClasses[hero.constructor.name];\n  getElement('Name').innerHTML = hero.name;\n  getElement('Level').innerHTML = hero.level;\n  getElement('Hp').innerHTML = hero.healthPoints;\n  getElement('Strength').innerHTML = stats.str;\n  getElement('Intelligence').innerHTML = stats.int;\n  getElement('Agility').innerHTML = stats.agi;\n\n  hero.displayHero();\n}\n\n// Display player hero on the screen\nfunction displayPlayerHero(hero) {\n  updateHeroDisplay(hero, 'playerHero');\n}\n\n// Display enemy hero on the screen\nfunction displayEnemyHero(hero) {\n  updateHeroDisplay(hero, 'enemyHero');\n}\n\n// Enhanced countStatsSum function\nfunction countStatsSum(hero) {\n  const { str, int, agi, healthPoints } = hero.stats;\n\n  // Convert attribute values to numbers and check for isNaN\n  const numericValues = [str, int, agi, healthPoints].map((value) => {\n    const num = Number(value);\n    return isNaN(num) ? 0 : num;\n  });\n\n  // Use summation to calculate the total\n  return numericValues.reduce((sum, value) => sum + value, 0);\n}\n\nfunction arena(firstHero, secondHero) {\n  console.log(`Let the dance battle begin between ${firstHero.name} and ${secondHero.name}!`);\n\n  const fistHeroSum = countStatsSum(firstHero);\n  const secondHeroSum = countStatsSum(secondHero);\n\n  console.log('Sum of values for the first hero: ', fistHeroSum);\n  console.log('Sum of values for the second hero: ', secondHeroSum);\n\n  const winner = fistHeroSum > secondHeroSum ? firstHero : fistHeroSum < secondHeroSum ? secondHero : null;\n\n  if (winner) {\n    console.log(`Rhythmically applaud the winner:\\n${winner.name}`);\n    alert(`Rhythmically applaud the winner: ${winner.name}`);\n  } else {\n    console.log('In the dance battle, friendship triumphs!');\n    alert('In the dance battle, friendship triumphs!');\n  }\n}\n\n// Get player hero information\nsendToBattleButton.onclick = () => {\n  const heroName = getElem('name').value.trim();\n  if (heroName !== '') {\n    const heroClass = document.querySelector('input[name=\"class\"]:checked').value.trim();\n    const heroLevel = getElem('level').value.trim();\n    const heroStats = {};\n\n    // If the entered parameter value is greater than the maximum, set it to the maximum\n    heroStats.str = Number(getElem('strength').value.trim());\n    if (heroStats.str > gameParameters.MAX_STAT) {\n      heroStats.str = gameParameters.MAX_STAT;\n    }\n    heroStats.int = Number(getElem('intelligence').value.trim());\n    if (heroStats.int > gameParameters.MAX_STAT) {\n      heroStats.int = gameParameters.MAX_STAT;\n    }\n    heroStats.agi = Number(getElem('agility').value.trim());\n    if (heroStats.agi > gameParameters.MAX_STAT) {\n      heroStats.agi = gameParameters.MAX_STAT;\n    }\n\n    const additionalAbility = document.querySelector('input[name=\"additionalAbility\"]:checked').value.trim();\n    const additionalStat = getElem('additionalStat').value.trim();\n\n    if (heroClass === 'Mage') {\n      playerHero = new _classes__WEBPACK_IMPORTED_MODULE_0__.Mage(heroName, heroLevel, 100, heroStats, additionalAbility, additionalStat);\n    } else if (heroClass === 'Knight') {\n      playerHero = new _classes__WEBPACK_IMPORTED_MODULE_0__.Knight(heroName, heroLevel, 100, heroStats, additionalAbility, additionalStat);\n    } else {\n      console.error('Oops! Something went wrong!');\n      return;\n    }\n\n    displayPlayerHero(playerHero);\n\n    getEnemyButton.removeAttribute('disabled');\n    doSkillButton.removeAttribute('disabled');\n  } else {\n    alert('Add a name to your hero!');\n  }\n};\n\ngetEnemyButton.onclick = () => {\n  // Get opponent hero from the server\n  fetch(`https://api-code.practicum-team.ru/heroes`)\n    .then((response) => response.json())\n    .then((data) => {\n      let randomEnemy = data[Math.floor(Math.random() * data.length)]; // Get a random opponent hero\n      console.log(randomEnemy); // Display opponent hero in the console\n\n      // Create an instance of the opponent hero class\n      enemyHero = new _classes__WEBPACK_IMPORTED_MODULE_0__.Hero(\n        randomEnemy.title, // Hero's name\n        Math.floor(Math.random() * 10) + 1, // Hero's level\n        randomEnemy.hp, // Hero's health points\n        {\n          str: randomEnemy.str,\n          int: randomEnemy.int,\n          agi: randomEnemy.agi\n        }\n      ); // Hero's parameters\n\n      // Fill in the opponent hero card\n      displayEnemyHero(enemyHero);\n\n      if (playerHero) {\n        startBattleButton.removeAttribute('disabled');\n      }\n    })\n    .catch((error) => console.error('Error:', error));\n};\n\nstartBattleButton.onclick = () => {\n  if (!playerHero) {\n    alert('First, add a hero!');\n  } else {\n    arena(playerHero, enemyHero);\n  }\n};\n\ndoSkillButton.onclick = () => {\n  if (playerHero) {\n    if (playerHero.constructor.name === 'Mage') {\n      playerHero.healHero(playerHero);\n    } else if (playerHero.constructor.name === 'Knight') {\n      playerHero.gainAgility(playerHero);\n    } else {\n      console.log('Oops! Something went wrong!');\n    }\n  } else {\n    alert('First, add a hero!');\n  }\n  displayPlayerHero(playerHero);\n};\n\ndocument.addEventListener('contextmenu', function (event) {\n  event.preventDefault();\n});\n\n// Calling functions before using classes\n(0,_classes__WEBPACK_IMPORTED_MODULE_0__.setGameParameters)(gameParameters);\n(0,_classes__WEBPACK_IMPORTED_MODULE_0__.setPlayerHero)(playerHero, displayPlayerHero);\n\n\n//# sourceURL=webpack://StackForge/./src/scripts/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;