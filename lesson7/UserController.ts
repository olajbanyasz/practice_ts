import { productService } from './ProductService.js';

export class UserController {
  private static instance: UserController | null = null;
  private productService = productService;
  private users: { id: number; name: string; email: string; favoriteProducts: number[] }[] = [];

  private constructor() {}

  static getInstance(): UserController {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }

  addUser(name: string, email: string, favoriteProducts: number[]) {
    const newUser = {
      id: this.users.length + 1,
      name,
      email,
      favoriteProducts,
    };
    this.users.push(newUser);
  }

  getUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  updateUser(id: number, name: string, email: string, favoriteProducts: number[]) {
    const user = this.getUserById(id);
    if (user) {
      user.name = name;
      user.email = email;
      user.favoriteProducts = favoriteProducts;
    }
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  resetUsers() {
    this.users = [];
  }

  getFavoriteProductsByUserId(userId: number) {
    const user = this.getUserById(userId);
    const favoriteProducts: { id: number; name: string; price: number }[] = [];
    if (user) {
      user.favoriteProducts.forEach((productId) => {
        const product = this.productService.getProductById(productId);
        if (product) {
          favoriteProducts.push(product);
        }
      });
    }
    return favoriteProducts;
  }
}

export const userController = UserController.getInstance();
