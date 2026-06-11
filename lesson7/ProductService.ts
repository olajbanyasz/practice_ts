export class ProductService {
    private static instance: ProductService | null = null;
    private products: { id: number; name: string; price: number }[] = [];

    private constructor() {}

    static getInstance(): ProductService {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }
        return ProductService.instance;
    }

    addProduct(name: string, price: number) {
        const newProduct = {
            id: this.products.length + 1,
            name,
            price
        };
        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id: number) {
        return this.products.find(product => product.id === id);
    }

    updateProduct(id: number, name: string, price: number) {
        const product = this.getProductById(id);
        if (product) {
            product.name = name;
            product.price = price;
        }
    }

    deleteProduct(id: number) {
        this.products = this.products.filter(product => product.id !== id);
    }
}

export const productService = ProductService.getInstance();