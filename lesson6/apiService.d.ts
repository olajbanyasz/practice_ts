import { type AxiosError } from 'axios';
export declare class ApiError extends Error {
    readonly message: string;
    readonly status?: number | undefined;
    readonly url?: string | undefined;
    readonly originalError?: AxiosError | undefined;
    constructor(message: string, status?: number | undefined, url?: string | undefined, originalError?: AxiosError | undefined);
}
export declare class ApiService {
    private baseUrl;
    constructor(baseUrl: string);
    private isValidUrl;
    private validateEndpoint;
    fetchData<T = unknown>(endpoint: string): Promise<T>;
}
//# sourceMappingURL=apiService.d.ts.map