declare class HeroController {
    readonly studentEmail: string;
    private readonly apiService;
    private readonly heroCardContainer;
    private readonly form;
    private readonly addHeroButton;
    private readonly errorText;
    constructor(apiUrl: string, studentEmail: string, containerId: string, formId: string);
    private initialize;
    private fetchAndRenderHeroes;
    private renderHeroes;
    private clearContainer;
    private handleFormSubmit;
    private addHeroToServer;
    private isValidHeroData;
}
export default HeroController;
