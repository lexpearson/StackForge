declare class HeroCard {
    private readonly title;
    private readonly description;
    private readonly parameters;
    /**
     * Конструктор класса HeroCard.
     * @param title - Заголовок героя.
     * @param description - Описание героя.
     * @param parameters - Параметры героя.
     */
    constructor(title: string, description: string, parameters: Record<string, string>);
    /**
     * Отрисовывает HTML-разметку карточки героя.
     * @return HTML-разметка карточки героя в виде строки.
     */
    render(): string;
    /**
     * Вспомогательный метод для создания HTML-разметки параметра героя.
     * @param title - Заголовок параметра.
     * @param value - Значение параметра.
     * @return HTML-разметка параметра героя в виде строки.
     */
    private createParameterHtml;
}
export default HeroCard;
