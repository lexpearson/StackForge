import HeroController from './heroController';

// Initializing the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // API URL for interacting with the server
  const apiUrl = 'https://api-code.practicum-team.ru/heroes/';

  // Student's email address for identification
  const studentEmail = 'your_email@email.com';

  // Creating an instance of the HeroController class to manage heroes
  const heroController = new HeroController(
    apiUrl,
    studentEmail,
    'cards__container', // ID of the container for hero cards
    'addHero' // ID of the form for adding new heroes
  );
});
