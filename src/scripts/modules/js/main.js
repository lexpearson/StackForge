import HeroController from './heroController.js';
document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'https://api-code.practicum-team.ru/heroes';
  const studentEmail = 'awesome.windofantasi@yandex.ru';
  const heroController = new HeroController(
    apiUrl,
    studentEmail,
    'cards-container',
    'addHero'
  );
});
//# sourceMappingURL=main.js.map
