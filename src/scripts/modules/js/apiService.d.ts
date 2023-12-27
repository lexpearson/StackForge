declare class ApiService {
    private readonly apiUrl;
    private readonly studentEmail;
    /**
     * Конструктор класса ApiService.
     * @param apiUrl - URL API для запросов.
     * @param studentEmail - Email студента для фильтрации данных.
     */
    constructor(apiUrl: string, studentEmail: string);
    /**
     * Получает данные о героях с сервера.
     * @return Промис с массивом данных о героях.
     */
    getHeroes(): Promise<any[]>;
    /**
     * Добавляет нового героя на сервер.
     * @param newHeroData - Данные нового героя.
     * @return Промис с данными о добавленном герое.
     */
    addHero(newHeroData: any): Promise<any>;
}
export default ApiService;
