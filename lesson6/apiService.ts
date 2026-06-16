import axios, { type AxiosResponse, type AxiosError } from 'axios';

export class ApiError extends Error {
  constructor(
    public readonly message: string,
    public readonly status?: number,
    public readonly url?: string,
    public readonly originalError?: AxiosError
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    if (!baseUrl) {
      throw new Error('baseUrl cannot be empty');
    }
    if (!this.isValidUrl(baseUrl)) {
      throw new Error(`Invalid baseUrl format: ${baseUrl}`);
    }
    this.baseUrl = baseUrl;
  }

  private isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  private validateEndpoint(endpoint: string): void {
    if (typeof endpoint !== 'string' || endpoint.trim().length === 0) {
      throw new Error('endpoint must be a non-empty string');
    }
  }

  async fetchData<T = unknown>(endpoint: string): Promise<T> {
    this.validateEndpoint(endpoint);

    try {
      const response: AxiosResponse<T> = await axios.get<T>(`${this.baseUrl}/${endpoint}`);
      return response.data;
    } catch (error: unknown) {
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
