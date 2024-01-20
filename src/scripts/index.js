/*            Game Description         */
import { Hero, Mage, Knight, setGameParameters, setPlayerHero } from './classes';

// Function to get input element by id
const getElem = (id) => document.getElementById(id);

// Game settings object
const gameParameters = {
  MAX_LEVEL: 10, // Maximum hero level
  MAX_STAT: 99, // Maximum hero parameter level
  MIN_STAT: 10 // Minimum level of ability parameter
};

// Game classes object
const gameClasses = {
  Mage: 'Mage',
  Knight: 'Knight',
  Hero: 'Class'
};

// Opponent hero declaration
let enemyHero = null;

// Player hero declaration
let playerHero = null;

// Add player hero to the screen
const sendToBattleButton = getElem('sendToBattleButton');

// Player hero action
const doSkillButton = getElem('doSkillButton');

// Display opponent hero on the screen
const getEnemyButton = getElem('getEnemyButton');

// Start battle button
const startBattleButton = getElem('startBattleButton');

// Input element for hero name
const heroNameInput = getElem('name');

// Input element for hero level
const heroLevelInput = getElem('level');

// Input element for hero strength
const heroStrengthInput = getElem('strength');

// Input element for hero intelligence
const heroIntelligenceInput = getElem('intelligence');

// Input element for hero agility
const heroAgilityInput = getElem('agility');

// Input element for additional stat of the hero
const heroAdditionalStatInput = getElem('additionalStat');

function adjustNumberInput(targetElement, minThreshold, maxThreshold) {
  // Check if valid arguments are provided
  if (!targetElement || typeof minThreshold !== 'number' || typeof maxThreshold !== 'number') {
    console.error(
      'Invalid arguments. Please provide a valid target element, minimum threshold, and maximum threshold.'
    );
    return;
  }

  // Function to sanitize and adjust the input value
  function sanitizeAndAdjust() {
    // Parse the input value as a floating-point number
    let currentValue = parseFloat(targetElement.value.trim());

    // Set a default value if the parsed value is not a valid number
    if (isNaN(currentValue)) {
      currentValue = minThreshold;
    }

    // Clamp the value within the specified range
    currentValue = Math.max(minThreshold, Math.min(currentValue, maxThreshold));

    // Update the input value with the sanitized and adjusted value
    targetElement.value = currentValue.toString();
  }

  // Add event listeners for input and blur events
  targetElement.addEventListener('input', sanitizeAndAdjust);
  targetElement.addEventListener('blur', sanitizeAndAdjust);
}

function adjustInputRegex(targetElement, regex) {
  // Check for the presence of the provided arguments
  if (!targetElement || !(regex instanceof RegExp)) {
    console.error('Invalid arguments. Please provide a valid target element and a regular expression.');
    return;
  }

  // Function to adjust the input based on the provided regex
  function adjustInput() {
    const inputValue = targetElement.value.trim();
    const lastCharacter = inputValue.charAt(inputValue.length - 1);

    // Check if the last character satisfies the regex
    if (!regex.test(lastCharacter)) {
      // Remove the last character if it doesn't match the regex
      targetElement.value = inputValue.slice(0, -1);
    }
  }

  // Add input event listener
  targetElement.addEventListener('input', adjustInput);

  // Add blur event listener to ensure final validation on focus loss
  targetElement.addEventListener('blur', adjustInput);
}

function adjustInputLength(targetElement, maxLength) {
  // Check for the presence of the provided arguments
  if (!targetElement || typeof maxLength !== 'number' || maxLength <= 0) {
    console.error('Invalid arguments. Please provide a valid target element and a positive maxLength.');
    return;
  }

  // Function to trim the value and remove trailing spaces
  function trimAndAdjust() {
    const trimmedValue = targetElement.value.trim();
    targetElement.value = trimmedValue.slice(0, maxLength);
  }

  // Add input event listener
  targetElement.addEventListener('input', function () {
    // Check and correct the input length
    if (targetElement.value.trim().length > maxLength) {
      trimAndAdjust();
    }
  });

  // Add blur event listener
  targetElement.addEventListener('blur', trimAndAdjust);
}

const adjustInput = (target, length, regex, isNum = true, min = 1, max = 1) => (
  adjustInputLength(target, length), adjustInputRegex(target, regex), isNum && adjustNumberInput(target, min, max)
);

const adjustAndValidateInputs = (inputs, length, regex, isNum = true, min = 1, max = 1) =>
  inputs.forEach((input) => adjustInput(input, length, regex, isNum, min, max));

adjustAndValidateInputs([heroNameInput], 24, /[a-zA-Z0-9а-яА-Я]/, false);
adjustAndValidateInputs([heroLevelInput], 2, /[0-9]/, true, 1, 10);
adjustAndValidateInputs(
  [heroStrengthInput, heroIntelligenceInput, heroAgilityInput, heroAdditionalStatInput],
  2,
  /[0-9]/,
  true,
  1,
  99
);

/*          Game Progress          */

// Function to update hero display
function updateHeroDisplay(hero, prefix) {
  const getElement = (suffix) => getElem(`${prefix}${suffix}`);
  const stats = hero.stats;

  getElement('Class').innerHTML = gameClasses[hero.constructor.name];
  getElement('Name').innerHTML = hero.name;
  getElement('Level').innerHTML = hero.level;
  getElement('Hp').innerHTML = hero.healthPoints;
  getElement('Strength').innerHTML = stats.str;
  getElement('Intelligence').innerHTML = stats.int;
  getElement('Agility').innerHTML = stats.agi;

  hero.displayHero();
}

// Display player hero on the screen
function displayPlayerHero(hero) {
  updateHeroDisplay(hero, 'playerHero');
}

// Display enemy hero on the screen
function displayEnemyHero(hero) {
  updateHeroDisplay(hero, 'enemyHero');
}

// Enhanced countStatsSum function
function countStatsSum(hero) {
  const { str, int, agi, healthPoints } = hero.stats;

  // Convert attribute values to numbers and check for isNaN
  const numericValues = [str, int, agi, healthPoints].map((value) => {
    const num = Number(value);
    return isNaN(num) ? 0 : num;
  });

  // Use summation to calculate the total
  return numericValues.reduce((sum, value) => sum + value, 0);
}

function arena(firstHero, secondHero) {
  console.log(`Let the dance battle begin between ${firstHero.name} and ${secondHero.name}!`);

  const fistHeroSum = countStatsSum(firstHero);
  const secondHeroSum = countStatsSum(secondHero);

  console.log('Sum of values for the first hero: ', fistHeroSum);
  console.log('Sum of values for the second hero: ', secondHeroSum);

  const winner = fistHeroSum > secondHeroSum ? firstHero : fistHeroSum < secondHeroSum ? secondHero : null;

  if (winner) {
    console.log(`Rhythmically applaud the winner:\n${winner.name}`);
    alert(`Rhythmically applaud the winner: ${winner.name}`);
  } else {
    console.log('In the dance battle, friendship triumphs!');
    alert('In the dance battle, friendship triumphs!');
  }
}

// Get player hero information
sendToBattleButton.onclick = () => {
  const heroName = getElem('name').value.trim();
  if (heroName !== '') {
    const heroClass = document.querySelector('input[name="class"]:checked').value.trim();
    const heroLevel = getElem('level').value.trim();
    const heroStats = {};

    // If the entered parameter value is greater than the maximum, set it to the maximum
    heroStats.str = Number(getElem('strength').value.trim());
    if (heroStats.str > gameParameters.MAX_STAT) {
      heroStats.str = gameParameters.MAX_STAT;
    }
    heroStats.int = Number(getElem('intelligence').value.trim());
    if (heroStats.int > gameParameters.MAX_STAT) {
      heroStats.int = gameParameters.MAX_STAT;
    }
    heroStats.agi = Number(getElem('agility').value.trim());
    if (heroStats.agi > gameParameters.MAX_STAT) {
      heroStats.agi = gameParameters.MAX_STAT;
    }

    const additionalAbility = document.querySelector('input[name="additionalAbility"]:checked').value.trim();
    const additionalStat = getElem('additionalStat').value.trim();

    if (heroClass === 'Mage') {
      playerHero = new Mage(heroName, heroLevel, 100, heroStats, additionalAbility, additionalStat);
    } else if (heroClass === 'Knight') {
      playerHero = new Knight(heroName, heroLevel, 100, heroStats, additionalAbility, additionalStat);
    } else {
      console.error('Oops! Something went wrong!');
      return;
    }

    displayPlayerHero(playerHero);

    getEnemyButton.removeAttribute('disabled');
    doSkillButton.removeAttribute('disabled');
  } else {
    alert('Add a name to your hero!');
  }
};

getEnemyButton.onclick = () => {
  // Get opponent hero from the server
  fetch(`https://api-code.practicum-team.ru/heroes`)
    .then((response) => response.json())
    .then((data) => {
      let randomEnemy = data[Math.floor(Math.random() * data.length)]; // Get a random opponent hero
      console.log(randomEnemy); // Display opponent hero in the console

      // Create an instance of the opponent hero class
      enemyHero = new Hero(
        randomEnemy.title, // Hero's name
        Math.floor(Math.random() * 10) + 1, // Hero's level
        randomEnemy.hp, // Hero's health points
        {
          str: randomEnemy.str,
          int: randomEnemy.int,
          agi: randomEnemy.agi
        }
      ); // Hero's parameters

      // Fill in the opponent hero card
      displayEnemyHero(enemyHero);

      if (playerHero) {
        startBattleButton.removeAttribute('disabled');
      }
    })
    .catch((error) => console.error('Error:', error));
};

startBattleButton.onclick = () => {
  if (!playerHero) {
    alert('First, add a hero!');
  } else {
    arena(playerHero, enemyHero);
  }
};

doSkillButton.onclick = () => {
  if (playerHero) {
    if (playerHero.constructor.name === 'Mage') {
      playerHero.healHero(playerHero);
    } else if (playerHero.constructor.name === 'Knight') {
      playerHero.gainAgility(playerHero);
    } else {
      console.log('Oops! Something went wrong!');
    }
  } else {
    alert('First, add a hero!');
  }
  displayPlayerHero(playerHero);
};

document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});

// Calling functions before using classes
setGameParameters(gameParameters);
setPlayerHero(playerHero, displayPlayerHero);
