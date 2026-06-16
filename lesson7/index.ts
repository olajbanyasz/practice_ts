import { productService } from './ProductService.js';
import { userController } from './UserController.js';

productService.addProduct('Coffee Mug', 12.99);
productService.addProduct('Notebook', 7.49);
productService.addProduct('Pen Set', 5.25);

userController.addUser('Alice', 'alice@example.com', [1, 3]);
userController.addUser('Bob', 'bob@example.com', [2]);

const aliceFavorites = userController.getFavoriteProductsByUserId(1);
console.log('Favorite products for user 1:', aliceFavorites);
