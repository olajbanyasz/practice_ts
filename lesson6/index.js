import { fileURLToPath } from 'node:url';
import { ApiService } from './apiService.js';
const baseUrl = 'https://jsonplaceholder.typicode.com';
const postsEndpoint = 'posts';
export const apiService = new ApiService(baseUrl);
export async function getPosts() {
    try {
        const posts = await apiService.fetchData(postsEndpoint);
        console.log('Posts:', posts);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error getting posts:', error.message);
        }
        else {
            console.error('Error getting posts:', error);
        }
    }
}
const __filename = fileURLToPath(import.meta.url);
if (process.argv[1] === __filename) {
    getPosts();
}
//# sourceMappingURL=index.js.map