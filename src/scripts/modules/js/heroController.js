import ApiService from './apiService.js';
import HeroCard from './heroCard.js';
class HeroController {
  apiService;
  heroCardContainer;
  form;
  addHeroButton;
  errorText;
  /**
   * Конструктор класса HeroController.
   * @param apiUrl - URL API для запросов.
   * @param studentEmail - Email студента для фильтрации данных.
   * @param containerId - ID контейнера для карточек героев.
   * @param formId - ID формы для добавления нового героя.
   */
  constructor(apiUrl, studentEmail, containerId, formId) {
    this.apiService = new ApiService(apiUrl, studentEmail);
    this.heroCardContainer = document.getElementById(containerId);
    this.form = document.forms.namedItem(formId);
    this.addHeroButton = document.querySelector('#addHero');
    this.errorText = document.querySelector('#errorText');
    this.initialize();
  }
  /**
   * Инициализирует контроллер.
   */
  initialize() {
    if (
      !this.heroCardContainer ||
      !this.form ||
      !this.addHeroButton ||
      !this.errorText
    ) {
      console.error('Контейнер, форма, кнопка или блок ошибки не найдены');
      return;
    }
    this.form.addEventListener('submit', (evt) => this.handleFormSubmit(evt));
    this.fetchAndRenderHeroes();
  }
  /**
   * Получает данные о героях с сервера и отрисовывает их.
   */
  async fetchAndRenderHeroes() {
    try {
      const heroes = await this.apiService.getHeroes();
      this.renderHeroes(heroes);
    } catch (error) {
      console.error('Ошибка при получении героев:', error.message);
    }
  }
  /**
   * Отрисовывает карточки героев.
   * @param heroesData - Массив данных о героях.
   */
  renderHeroes(heroesData) {
    this.clearContainer();
    for (const heroData of heroesData) {
      if (this.isValidHeroData(heroData)) {
        const { title, description, str, agi, hp, int } = heroData;
        const parameters = { str, agi, hp, int };
        const heroCard = new HeroCard(title, description, parameters);
        // @ts-ignore
        this.heroCardContainer.insertAdjacentHTML(
          'beforeend',
          heroCard.render()
        );
      } else {
        console.error('Некорректные данные героя:', heroData);
      }
    }
  }
  /**
   * Очищает контейнер с карточками героев.
   */
  clearContainer() {
    if (this.heroCardContainer) {
      this.heroCardContainer.innerHTML = '';
    }
  }
  /**
   * Обрабатывает событие отправки формы.
   * @param evt - Объект события.
   */
  async handleFormSubmit(evt) {
    evt.preventDefault();
    if (!this.addHeroButton) {
      console.error('Кнопка "Добавить героя" не найдена');
      return;
    }
    this.addHeroButton.disabled = true;
    this.addHeroButton.textContent = 'Отправка данных...';
    // @ts-ignore
    const newHeroData = {
      title: this.form?.elements.title?.value,
      description: this.form?.elements.description?.value,
      str: this.form?.elements.str?.value,
      agi: this.form?.elements.agi?.value,
      hp: this.form?.elements.hp?.value,
      int: this.form?.elements.int?.value,
      studentEmail: 'awesome.windofantasi@yandex.ru'
    };
    if (this.isValidHeroData(newHeroData)) {
      await this.addHeroToServer(newHeroData);
      await this.fetchAndRenderHeroes();
    } else {
      console.error('Некорректные данные нового героя:', newHeroData);
    }
    this.addHeroButton.disabled = false;
    this.addHeroButton.textContent = 'Отправить';
  }
  /**
   * Добавляет нового героя на сервер.
   * @param newHeroData - Данные нового героя.
   */
  async addHeroToServer(newHeroData) {
    try {
      const data = await this.apiService.addHero(newHeroData);
      if (this.isValidHeroData(data)) {
        const { title, description, str, agi, hp, int } = data;
        const parameters = { str, agi, hp, int };
        const heroCard = new HeroCard(title, description, parameters);
        if (this.form) {
          this.form.reset();
        }
      } else {
        console.error('Некорректные данные нового героя:', data);
        if (this.errorText) {
          this.errorText.textContent = 'Произошла ошибка при добавлении героя';
        }
      }
    } catch (error) {
      if (this.errorText) {
        this.errorText.textContent = 'Произошла ошибка на сервере';
      }
    }
  }
  /**
   * Проверяет корректность данных героя.
   * @param heroData - Данные героя.
   * @return `true`, если данные корректны, иначе `false`.
   */
  isValidHeroData(heroData) {
    const requiredFields = ['title', 'description', 'str', 'agi', 'hp', 'int'];
    return requiredFields.every((field) => field in heroData);
  }
}
export default HeroController;
//# sourceMappingURL=heroController.js.map
