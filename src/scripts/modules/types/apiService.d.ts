/**
 * ApiService class handles communication with the API for hero-related operations.
 */
declare class ApiService {
    private readonly apiUrl;
    private readonly studentEmail;
    /**
     * Constructs an instance of ApiService.
     *
     * @param apiUrl - The base URL of the API.
     * @param studentEmail - The email of the student making requests to the API.
     */
    constructor(apiUrl: string, studentEmail: string);
    /**
     * Fetches the list of heroes from the API for the current student.
     *
     * @returns A promise that resolves to an array of hero objects.
     * @throws Error if there's an issue fetching the heroes.
     */
    getHeroes(): Promise<any[]>;
    /**
     * Adds a new hero to the API.
     *
     * @param newHeroData - The data of the new hero to be added.
     * @returns A promise that resolves to the data of the added hero.
     * @throws Error if there's an issue adding the hero.
     */
    addHero(newHeroData: any): Promise<any>;
}
export default ApiService;
