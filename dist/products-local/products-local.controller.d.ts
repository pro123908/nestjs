import { ProductService } from './products-local.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    addProduct(title: string, description: string, price: number): import("./products-local.model").Product;
    getProducts(): import("./products-local.model").Product[];
    getProduct(prodId: string): import("./products-local.model").Product;
    deleteProduct(prodId: string): import("./products-local.model").Product[];
    updateProduct(prodId: string, title: string, description: string, price: number): {
        id: String;
        title: String;
        description: String;
        price: number;
    };
}
