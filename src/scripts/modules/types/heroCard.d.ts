/**
 * Represents a HeroCard that displays information about a hero.
 */
declare class HeroCard {
    private readonly title;
    private readonly description;
    private readonly parameters;
    /**
     * Creates an instance of HeroCard.
     * @param {string} title - The title of the hero.
     * @param {string} description - The description of the hero.
     * @param {Record<string, string>} parameters - The parameters of the hero.
     */
    constructor(title: string, description: string, parameters: Record<string, string>);
    /**
     * Renders HTML markup for the HeroCard.
     * @return {string} - The HTML markup representing the HeroCard.
     */
    render(): string;
    /**
     * Creates HTML markup for a parameter.
     * @param {string} title - The title of the parameter.
     * @param {string} value - The value of the parameter.
     * @return {string} - The HTML markup representing the parameter.
     */
    private createParameterHtml;
}
export default HeroCard;
