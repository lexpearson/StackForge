declare class HeroController {
    private readonly apiService;
    private readonly heroCardContainer;
    private readonly form;
    private readonly addHeroButton;
    private readonly errorText;
    /**
     * Конструктор класса HeroController.
     * @param apiUrl - URL API для запросов.
     * @param studentEmail - Email студента для фильтрации данных.
     * @param containerId - ID контейнера для карточек героев.
     * @param formId - ID формы для добавления нового героя.
     */
    constructor(apiUrl: string, studentEmail: string, containerId: string, formId: string);
    /**
     * Инициализирует контроллер.
     */
    private initialize;
    /**
     * Получает данные о героях с сервера и отрисовывает их.
     */
    private fetchAndRenderHeroes;
    /**
     * Отрисовывает карточки героев.
     * @param heroesData - Массив данных о героях.
     */
    private renderHeroes;
    /**
     * Очищает контейнер с карточками героев.
     */
    private clearContainer;
    /**
     * Обрабатывает событие отправки формы.
     * @param evt - Объект события.
     */
    private handleFormSubmit;
    /**
     * Добавляет нового героя на сервер.
     * @param newHeroData - Данные нового героя.
     */
    private addHeroToServer;
    /**
     * Проверяет корректность данных героя.
     * @param heroData - Данные героя.
     * @return `true`, если данные корректны, иначе `false`.
     */
    private isValidHeroData;
}
export default HeroController;
