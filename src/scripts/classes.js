// Game settings object
let gameParameters = null;
let displayPlayerHero = null;
let playerHero = null;

// Base class for a hero
class Hero {
  // Constructor of the base class
  constructor(name, level, healthPoints, stats) {
    this.name = name;
    this.level = level;
    this.healthPoints = healthPoints;
    this.stats = stats;
  }

  // Method for displaying hero information in the console
  displayHero() {
    const { name, level, healthPoints, stats } = this;
    const { str, int, agi } = stats;

    console.log(`
      Name: ${name}
      Level: ${level}
      Health Points: ${healthPoints}
      Strength: ${str}
      Intelligence: ${int}
      Agility: ${agi}
    `);
  }
}

// Mage subclass
class Mage extends Hero {
  // Constructor of the subclass
  constructor(name, level, healthPoints, stats, hasTectonicPotion, mana) {
    super(name, level, healthPoints, stats);
    this.hasTectonicPotion = hasTectonicPotion;
    this.mana = mana;
  }

  // Method extending the method of the base class
  displayHero() {
    super.displayHero();

    console.log(`Mana: ${this.mana}`);

    if (this.hasTectonicPotion === 'true') {
      console.log('Has Tectonic Potion');
    }
  }

  // Healing method for the Mage class
  healHero(hero) {
    const { mana, level } = this;

    if (mana > gameParameters.MIN_STAT) {
      const healAmount = level * 10;

      hero.healthPoints += healAmount;
      console.log(`${this.name} extends the dance of ${hero.name} by ${healAmount} points.`);

      this.mana -= healAmount * (10 / level) - level;
    } else {
      alert('Not enough mana...');
    }
  }
}

// Knight subclass
class Knight extends Hero {
  // Constructor of the subclass
  constructor(name, level, healthPoints, stats, isHorseTango, energy) {
    super(name, level, healthPoints, stats);
    this.isHorseTango = isHorseTango;
    this.energy = energy;
  }

  // Method extending the method of the base class
  displayHero() {
    super.displayHero();

    console.log(`Energy: ${this.energy}`);

    if (this.isHorseTango === 'true') {
      console.log('This hero can dance tango on horseback');
    }
  }

  // Method to increase hero's agility for the Knight class
  gainAgility(hero) {
    const { energy, level } = this;

    if (energy > gameParameters.MIN_STAT) {
      const gainAmount = (level * energy) / 30;

      if (hero.stats.agi + gainAmount < gameParameters.MAX_STAT) {
        hero.stats.agi += gainAmount;
        console.log(`${this.name} increases the agility of ${hero.name} by ${gainAmount} points.`);
      } else {
        hero.stats.agi = gameParameters.MAX_STAT;
      }

      const energyAmount = (gainAmount * 10) / level;
      this.energy = Math.max(energy - energyAmount, gameParameters.MIN_STAT);

      displayPlayerHero(playerHero);
    } else {
      alert('Not enough energy...');
    }
  }
}

const setGameParameters = (parameters) => {
  if (!parameters || typeof parameters !== 'object') {
    console.error('Invalid parameters. Please provide a valid object.');
    return;
  }
  gameParameters = parameters;
};

function setPlayerHero(hero, displayHeroFunction) {
  playerHero = hero;
  displayPlayerHero = displayHeroFunction;
}

export { Hero, Mage, Knight, setGameParameters, setPlayerHero };
