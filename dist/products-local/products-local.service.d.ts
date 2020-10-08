import { Product } from './products-local.model';
export declare class ProductService {
    products: Product[];
    addProduct(title: string, desc: string, price: number): Product;
    getProducts(): Product[];
    getProduct(id: string): Product;
    deleteProduct(id: string): Product[];
    updateProduct(id: string, title: string, desc: string, price: number): {
        id: String;
        title: String;
        description: String;
        price: number;
    };
    findTheProduct(productId: any): [Product, number];
}
