class ApiService {
  private readonly apiUrl: string;
  private readonly studentEmail: string;

  /**
   * Конструктор класса ApiService.
   * @param apiUrl - URL API для запросов.
   * @param studentEmail - Email студента для фильтрации данных.
   */
  constructor(apiUrl: string, studentEmail: string) {
    this.apiUrl = apiUrl;
    this.studentEmail = studentEmail;
  }

  /**
   * Получает данные о героях с сервера.
   * @return Промис с массивом данных о героях.
   */
  async getHeroes(): Promise<any[]> {
    try {
      const response = await fetch(
        `${this.apiUrl}?_where[_or][0][studentEmail]=${this.studentEmail}&_where[_or][1][studentEmail]=`
      );
      return await response.json();
    } catch (error) {
      throw new Error('Произошла ошибка при получении героев');
    }
  }

  /**
   * Добавляет нового героя на сервер.
   * @param newHeroData - Данные нового героя.
   * @return Промис с данными о добавленном герое.
   */
  async addHero(newHeroData: any): Promise<any> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        body: JSON.stringify(newHeroData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });

      return await response.json();
    } catch (error) {
      throw new Error('Произошла ошибка при добавлении героя');
    }
  }
}

export default ApiService;