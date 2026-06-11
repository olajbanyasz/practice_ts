/// <reference types="jest" />

import { jest } from '@jest/globals';
import type { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';

const mockedGet = jest.fn<Promise<AxiosResponse<unknown>>, [string]>();
const mockedIsAxiosError = jest.fn((error: unknown): error is AxiosError =>
  typeof error === 'object' && error !== null && 'isAxiosError' in error && (error as { isAxiosError?: unknown }).isAxiosError === true
);

jest.unstable_mockModule('axios', async () => ({
  __esModule: true,
  default: {
    get: mockedGet,
    isAxiosError: mockedIsAxiosError,
  },
  isAxiosError: mockedIsAxiosError,
  get: mockedGet,
}));

const { ApiService, ApiError } = await import('./apiService.ts');

describe('ApiService', () => {
  beforeEach(() => {
    mockedGet.mockReset();
    mockedIsAxiosError.mockClear();
  });

  it('returns data when the request succeeds', async () => {
    const responseData = { hello: 'world' };
    mockedGet.mockResolvedValueOnce({ data: responseData } as unknown as AxiosResponse<typeof responseData>);

    const service = new ApiService('https://example.com');
    const result = await service.fetchData('test');

    expect(result).toEqual(responseData);
    expect(mockedGet).toHaveBeenCalledWith('https://example.com/test');
  });

  it('throws ApiError when axios rejects', async () => {
    const axiosError = new Error('Request failed') as AxiosError;
    axiosError.isAxiosError = true;
    axiosError.config = { url: 'https://example.com/test' } as unknown as AxiosRequestConfig;
    axiosError.response = {
      status: 500,
      statusText: 'Server Error',
      headers: {},
      config: axiosError.config,
      data: null,
    } as unknown as AxiosResponse<unknown>;

    mockedGet.mockRejectedValueOnce(axiosError);

    const service = new ApiService('https://example.com');
    const promise = service.fetchData('test');

    await expect(promise).rejects.toBeInstanceOf(ApiError);
    await expect(promise).rejects.toMatchObject({
      message: 'Request failed',
      status: 500,
      url: 'https://example.com/test',
    });
  });

  it('throws when endpoint is empty', async () => {
    const service = new ApiService('https://example.com');

    await expect(service.fetchData('')).rejects.toThrow('endpoint must be a non-empty string');
  });
});
