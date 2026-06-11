import { userController, UserController } from './UserController.ts';
import { productService } from './ProductService.ts';

describe('UserController', () => {
  beforeEach(() => {
    userController.resetUsers();
    productService.resetProducts();
  });
  test('adds and retrieves users', () => {
    userController.addUser('Joe', 'joe@example.com', []);
    const users = userController.getUsers();
    expect(users).toHaveLength(1);
    expect(users[0]).toMatchObject({ id: 1, name: 'Joe', email: 'joe@example.com', favoriteProducts: [] });
  });

  test('getUserById returns correct user', () => {
    userController.addUser('Mary', 'mary@example.com', []);
    const u = userController.getUserById(1);
    expect(u).toBeDefined();
    expect(u?.name).toBe('Mary');
  });

  test('updateUser modifies user', () => {
    userController.addUser('Tom', 'tom@example.com', []);
    userController.updateUser(1, 'Tommy', 'tommy@example.com', [1]);
    const u = userController.getUserById(1);
    expect(u).toMatchObject({ id: 1, name: 'Tommy', email: 'tommy@example.com', favoriteProducts: [1] });
  });

  test('deleteUser removes user', () => {
    userController.addUser('Zoe', 'zoe@example.com', []);
    userController.deleteUser(1);
    expect(userController.getUsers()).toHaveLength(0);
  });

  test('getFavoriteProductsByUserId returns product objects', () => {
    productService.addProduct('Apple', 1.5);
    productService.addProduct('Banana', 2);
    userController.addUser('Ana', 'ana@example.com', [1, 2]);
    const favs = userController.getFavoriteProductsByUserId(1);
    expect(favs).toHaveLength(2);
    expect(favs[0]).toMatchObject({ id: 1, name: 'Apple', price: 1.5 });
    expect(favs[1]).toMatchObject({ id: 2, name: 'Banana', price: 2 });
  });

  test('singleton instance is same', () => {
    expect(UserController.getInstance()).toBe(userController);
  });
});
