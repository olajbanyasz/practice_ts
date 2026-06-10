import { ProductService, productService } from './ProductService.ts';

describe('ProductService', () => {
  beforeEach(() => {
    (productService as any).products = [];
  });

  test('adds and retrieves products', () => {
    productService.addProduct('Apple', 1.5);
    const products = productService.getProducts();
    expect(products).toHaveLength(1);
    expect(products[0]).toMatchObject({ id: 1, name: 'Apple', price: 1.5 });
  });

  test('getProductById returns correct product', () => {
    productService.addProduct('Banana', 2);
    const p = productService.getProductById(1);
    expect(p).toBeDefined();
    expect(p?.name).toBe('Banana');
  });

  test('updateProduct modifies product', () => {
    productService.addProduct('Orange', 3);
    productService.updateProduct(1, 'Blood Orange', 3.5);
    const p = productService.getProductById(1);
    expect(p).toMatchObject({ id: 1, name: 'Blood Orange', price: 3.5 });
  });

  test('deleteProduct removes product', () => {
    productService.addProduct('Grape', 4);
    productService.deleteProduct(1);
    expect(productService.getProducts()).toHaveLength(0);
  });

  test('singleton instance is same', () => {
    expect(ProductService.getInstance()).toBe(productService);
  });
});
