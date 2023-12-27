class HeroCard {
    title;
    description;
    parameters;
    /**
     * Конструктор класса HeroCard.
     * @param title - Заголовок героя.
     * @param description - Описание героя.
     * @param parameters - Параметры героя.
     */
    constructor(title, description, parameters) {
        this.title = title;
        this.description = description;
        this.parameters = parameters;
    }
    /**
     * Отрисовывает HTML-разметку карточки героя.
     * @return HTML-разметка карточки героя в виде строки.
     */
    render() {
        return `
      <div class="card-wrapper">
          <div class="card">
              <div class="card-title">
                  <h2 class="card-title-text">${this.title}</h2>
              </div>
              <div class="card-description">
                  <p class="card-description-text">${this.description}</p>
                  <div class="card-parameters">
                      ${Object.entries(this.parameters)
            .map(([key, value]) => this.createParameterHtml(key, value))
            .join('')}
                  </div>
              </div>
          </div>
      </div>
    `;
    }
    /**
     * Вспомогательный метод для создания HTML-разметки параметра героя.
     * @param title - Заголовок параметра.
     * @param value - Значение параметра.
     * @return HTML-разметка параметра героя в виде строки.
     */
    createParameterHtml(title, value) {
        return `
      <div class="card-parameter">
          <p class="card-parameter-title">${title}</p>
          <p class="card-parameter-value">${value}</p>
      </div>
    `;
    }
}
export default HeroCard;
//# sourceMappingURL=heroCard.js.map