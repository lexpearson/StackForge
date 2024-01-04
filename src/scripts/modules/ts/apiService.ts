/**
 * ApiService class handles communication with the API for hero-related operations.
 */
class ApiService {
  private readonly apiUrl: string;
  private readonly studentEmail: string;

  /**
   * Constructs an instance of ApiService.
   *
   * @param apiUrl - The base URL of the API.
   * @param studentEmail - The email of the student making requests to the API.
   */
  constructor(apiUrl: string, studentEmail: string) {
    this.apiUrl = apiUrl;
    this.studentEmail = studentEmail;
  }

  /**
   * Fetches the list of heroes from the API for the current student.
   *
   * @returns A promise that resolves to an array of hero objects.
   * @throws Error if there's an issue fetching the heroes.
   */
  async getHeroes(): Promise<any[]> {
    try {
      const response = await fetch(
        `${this.apiUrl}?_where[_or][0][studentEmail]=${this.studentEmail}&_where[_or][1][studentEmail]=`
      );
      return await response.json();
    } catch (error) {
      throw new Error('An error occurred while fetching heroes!');
    }
  }

  /**
   * Adds a new hero to the API.
   *
   * @param newHeroData - The data of the new hero to be added.
   * @returns A promise that resolves to the data of the added hero.
   * @throws Error if there's an issue adding the hero.
   */
  async addHero(newHeroData: any): Promise<any> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        body: JSON.stringify(newHeroData),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      });

      return await response.json();
    } catch (error) {
      throw new Error('Произошла ошибка при добавлении героя!');
    }
  }
}

export default ApiService;
