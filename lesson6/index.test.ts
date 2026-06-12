/// <reference types="jest" />

import { jest } from '@jest/globals';
import { getPosts, apiService } from './index.ts';

const mockFetchData = jest.fn<(endpoint: string) => Promise<unknown>>();

describe('lesson6/index', () => {
  beforeEach(() => {
    mockFetchData.mockReset();
    apiService.fetchData = mockFetchData as unknown as typeof apiService.fetchData;
  });

  it('loads posts and logs the result', async () => {
    const posts = [{ id: 1, title: 'Hello' }];
    mockFetchData.mockResolvedValueOnce(posts);

    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await getPosts();

    expect(mockFetchData).toHaveBeenCalledWith('posts');
    expect(logSpy).toHaveBeenCalledWith('Posts:', posts);
    expect(errorSpy).not.toHaveBeenCalled();

    logSpy.mockRestore();
    errorSpy.mockRestore();
  });

  it('logs an error message when fetchData rejects', async () => {
    const error = new Error('Request failed');
    mockFetchData.mockRejectedValueOnce(error);

    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await getPosts();

    expect(errorSpy).toHaveBeenCalledWith('Error getting posts:', 'Request failed');
    expect(logSpy).not.toHaveBeenCalled();

    logSpy.mockRestore();
    errorSpy.mockRestore();
  });
});
