/**
 * Represents a HeroCard that displays information about a hero.
 */
class HeroCard {
  private readonly title: string;
  private readonly description: string;
  private readonly parameters: Record<string, string>;

  /**
   * Creates an instance of HeroCard.
   * @param {string} title - The title of the hero.
   * @param {string} description - The description of the hero.
   * @param {Record<string, string>} parameters - The parameters of the hero.
   */
  constructor(
    title: string,
    description: string,
    parameters: Record<string, string>
  ) {
    this.title = title;
    this.description = description;
    this.parameters = parameters;
  }

  /**
   * Renders HTML markup for the HeroCard.
   * @return {string} - The HTML markup representing the HeroCard.
   */
  render(): string {
    return `
      <div class="card" role="region" aria-labelledby="cardTitle">
        <div class="card__wrapper">
          <div class="card__title" role="heading" aria-level="3" id="cardTitle">
            <h3 class="card__title__text">${this.title}</h3>
          </div>
          <div class="card__description">
            <p class="card__description__text" role="paragraph">${
              this.description
            }</p>
            <ul class="card__description__params" role="list">
              ${Object.entries(this.parameters)
                .map(([key, value]) => this.createParameterHtml(key, value))
                .join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Creates HTML markup for a parameter.
   * @param {string} title - The title of the parameter.
   * @param {string} value - The value of the parameter.
   * @return {string} - The HTML markup representing the parameter.
   */
  private createParameterHtml(title: string, value: string): string {
    return `
      <li class="card__param" role="listitem">
          <p class="card__param__title" role="paragraph">${title}</p>
          <p class="card__param__value" role="paragraph">${value}</p>
      </li>
    `;
  }
}

export default HeroCard;
