import axios, {} from 'axios';
export class ApiError extends Error {
    message;
    status;
    url;
    originalError;
    constructor(message, status, url, originalError) {
        super(message);
        this.message = message;
        this.status = status;
        this.url = url;
        this.originalError = originalError;
        this.name = 'ApiError';
    }
}
export class ApiService {
    baseUrl;
    constructor(baseUrl) {
        if (!baseUrl) {
            throw new Error('baseUrl cannot be empty');
        }
        if (!this.isValidUrl(baseUrl)) {
            throw new Error(`Invalid baseUrl format: ${baseUrl}`);
        }
        this.baseUrl = baseUrl;
    }
    isValidUrl(url) {
        try {
            new URL(url);
            return true;
        }
        catch {
            return false;
        }
    }
    validateEndpoint(endpoint) {
        if (typeof endpoint !== 'string' || endpoint.trim().length === 0) {
            throw new Error('endpoint must be a non-empty string');
        }
    }
    async fetchData(endpoint) {
        this.validateEndpoint(endpoint);
        try {
            const response = await axios.get(`${this.baseUrl}/${endpoint}`);
            return response.data;
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                throw new ApiError(error.message, error.response?.status, error.config?.url, error);
            }
            if (error instanceof Error) {
                throw new ApiError(error.message);
            }
            throw new ApiError('Unknown error fetching data');
        }
    }
}
//# sourceMappingURL=apiService.js.map