import { ApiService } from './apiService.js';

const apiService = new ApiService('https://jsonplaceholder.typicode.com');

async function getPosts() {
    try {
        const posts = await apiService.fetchData('posts');
        console.log('Posts:', posts);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error getting posts:', error.message);
        } else {
            console.error('Error getting posts:', error);
        }
    }
}

getPosts();