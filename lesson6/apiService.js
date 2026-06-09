import axios from 'axios';
export class ApiService {
    baseUrl;
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    ;
    async fetchData(endpoint) {
        try {
            const response = await axios.get(`${this.baseUrl}/${endpoint}`);
            return response.data;
        }
        catch (error) {
            if (error instanceof Error) {
                console.error('Error fetching data:', error.message);
                throw error;
            }
            console.error('Error fetching data:', error);
            throw new Error('Unknown error fetching data');
        }
    }
    ;
}
;
//# sourceMappingURL=apiService.js.map