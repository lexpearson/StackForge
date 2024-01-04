import ApiService from './apiService';
import HeroCard from './heroCard';

class HeroController {
  public readonly studentEmail: string;
  private readonly apiService: ApiService;
  private readonly heroCardContainer: HTMLElement | null;
  private readonly form: HTMLFormElement | null;
  private readonly addHeroButton: HTMLButtonElement | null;
  private readonly errorText: HTMLElement | null;

  constructor(
    apiUrl: string,
    studentEmail: string,
    containerId: string,
    formId: string
  ) {
    this.studentEmail = studentEmail;
    this.apiService = new ApiService(apiUrl, this.studentEmail);

    this.heroCardContainer = document.getElementById(containerId);
    this.form = document.forms.namedItem(formId);
    this.addHeroButton = document.querySelector('#addHero');
    this.errorText = document.querySelector('#errorText');

    this.initialize();
  }

  private initialize(): void {
    if (
      !this.heroCardContainer ||
      !this.form ||
      !this.addHeroButton ||
      !this.errorText
    ) {
      console.log(`this.heroCardContainer = ${this.heroCardContainer}`);
      console.log(`this.form = ${this.form}`);
      console.log(`this.addHeroButton = ${this.addHeroButton}`);
      console.log(`this.errorText = ${this.errorText}`);
      console.error('Контейнер, форма, кнопка или блок ошибки не найдены!');
      return;
    }

    this.form.addEventListener('submit', (evt) => this.handleFormSubmit(evt));
    this.fetchAndRenderHeroes();
  }

  private async fetchAndRenderHeroes(): Promise<void> {
    try {
      const heroes = await this.apiService.getHeroes();
      this.renderHeroes(heroes);
    } catch (error) {
      console.error('Ошибка при получении героев:', (error as Error).message);
    }
  }

  private renderHeroes(heroesData: any[]): void {
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

  private clearContainer(): void {
    if (this.heroCardContainer && this.heroCardContainer.children.length > 0) {
      this.heroCardContainer.innerHTML = '';
    }
  }

  private async handleFormSubmit(evt: Event): Promise<void> {
    evt.preventDefault();

    if (!this.addHeroButton) {
      console.error('Кнопка "Добавить героя" не найдена!');
      return;
    }

    this.addHeroButton.disabled = true;
    this.addHeroButton.textContent = 'Отправка данных...';

    // @ts-ignore
    const formData = new FormData(this.form);

    try {
      const newHeroData: any = {
        studentEmail: this.studentEmail,
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        str: formData.get('str') as string,
        agi: formData.get('agi') as string,
        hp: formData.get('hp') as string,
        int: formData.get('int') as string
      };

      if (this.isValidHeroData(newHeroData)) {
        await this.addHeroToServer(newHeroData);
        await this.fetchAndRenderHeroes();
      } else {
        console.error('Некорректные данные нового героя:', newHeroData);
      }
    } catch (error) {
      console.error('Ошибка при обработке формы:', (error as Error).message);
    }

    this.addHeroButton.disabled = false;
    this.addHeroButton.textContent = 'Отправить';
  }

  private async addHeroToServer(newHeroData: any): Promise<void> {
    try {
      const data = await this.apiService.addHero(newHeroData);

      if (this.isValidHeroData(data)) {
        const { title, description, str, agi, hp, int } = data;
        const parameters = { str, agi, hp, int };
        const heroCard = new HeroCard(title, description, parameters);

        if (this.form) {
          this.form.reset();
        }

        if (this.heroCardContainer) {
          this.heroCardContainer.insertAdjacentHTML(
            'beforeend',
            heroCard.render()
          );
        }
      } else {
        console.error('Некорректные данные нового героя:', data);
        if (this.errorText) {
          this.errorText.textContent = 'Произошла ошибка при добавлении героя!';
        }
      }
    } catch (error) {
      if (this.errorText) {
        this.errorText.textContent = 'Произошла ошибка на сервере!';
      }
    }
  }

  private isValidHeroData(heroData: any): boolean {
    const requiredFields = ['title', 'description', 'str', 'agi', 'hp', 'int'];
    return requiredFields.every((field) => field in heroData);
  }
}

export default HeroController;
